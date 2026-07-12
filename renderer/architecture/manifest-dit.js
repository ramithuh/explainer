export const manifest = {
  "schemaVersion": "architecture-manifest-v0.2",
  "architecture": {
    "schemaVersion": "architecture-v0.2",
    "id": "diffusion_transformer",
    "name": "Diffusion Transformer (DiT)",
    "status": "draft",
    "sourceYaml": "../../architectures/diffusion-transformer.yaml",
    "modules": [
      {
        "id": "ddpm_sampler",
        "label": "DDPM Sampling Loop",
        "kind": "iterative_sampler",
        "role": "repeatedly call the classifier-free-guided DiT denoiser and apply stochastic reverse-diffusion updates",
        "scale": "spatial",
        "repeats": 250,
        "inputs": [
          "initial_noise",
          "class_label"
        ],
        "outputs": [
          "final_latent"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "p_sample_loop starts from Gaussian latent noise and invokes forward_with_cfg over the reverse chain."
            },
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_sample_loop_progressive",
              "note": "The reverse loop repeatedly samples x_(t-1) from the current state."
            }
          ]
        }
      },
      {
        "id": "reverse_diffusion_step",
        "label": "DDPM Sampling Formula",
        "kind": "sampling_formula",
        "role": "use fixed diffusion-schedule math to combine x_t, timestep, predicted epsilon, learned-range variance parameters, and fresh noise into x_(t-1); this module has no learned weights",
        "scale": "spatial",
        "inputs": [
          "input_latent",
          "timestep",
          "noise_prediction",
          "step_noise"
        ],
        "outputs": [
          "input_latent"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_mean_variance and p_sample",
              "note": "The model output parameterizes the reverse mean and learned-range variance before fresh noise is added for nonzero timesteps."
            }
          ]
        }
      },
      {
        "id": "inverse_latent_scaling",
        "label": "Undo Latent Scaling",
        "kind": "feature_adapter",
        "role": "divide the generated latent by 0.18215 to restore the frozen VAE decoder convention",
        "scale": "spatial",
        "inputs": [
          "final_latent"
        ],
        "outputs": [
          "vae_decode_latent"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "The final latent is divided by 0.18215 immediately before VAE decoding."
            }
          ]
        }
      },
      {
        "id": "frozen_vae_decoder",
        "label": "Frozen VAE Decoder",
        "kind": "decoder",
        "role": "decode the four-channel latent at one-eighth spatial resolution into RGB pixels",
        "scale": "output",
        "frozen": true,
        "inputs": [
          "vae_decode_latent"
        ],
        "outputs": [
          "generated_image"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "A pretrained stabilityai/sd-vae-ft decoder maps the rescaled latent to the output image."
            }
          ]
        }
      },
      {
        "id": "patchify",
        "label": "Patchify",
        "kind": "feature_adapter",
        "role": "embed p x p latent patches into tokens and add fixed 2D sin-cos positional embeddings",
        "scale": "token",
        "inputs": [
          "input_latent"
        ],
        "outputs": [
          "token_state"
        ],
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2 (Patchify)"
            },
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.__init__ (x_embedder, pos_embed)",
              "note": "PatchEmbed plus non-learned sin-cos positional table."
            }
          ]
        }
      },
      {
        "id": "timestep_embedder",
        "label": "Timestep Embedder",
        "kind": "feature_adapter",
        "role": "encode the scalar timestep with a 256-dim sinusoidal embedding followed by a two-layer SiLU MLP",
        "scale": "sample",
        "contains": [
          {
            "id": "sinusoidal_embedding",
            "label": "Sinusoidal embedding + MLP",
            "standard_block_ref": "../../standard_blocks/sinusoidal-timestep-embedding.yaml"
          }
        ],
        "inputs": [
          "timestep"
        ],
        "outputs": [
          "t_embedding"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "TimestepEmbedder"
            }
          ]
        }
      },
      {
        "id": "label_embedder",
        "label": "Label Embedder",
        "kind": "feature_adapter",
        "role": "look up the class embedding; randomly drop labels to the null class during training for classifier-free guidance",
        "scale": "sample",
        "inputs": [
          "class_label"
        ],
        "outputs": [
          "y_embedding"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "LabelEmbedder"
            }
          ]
        }
      },
      {
        "id": "cond_combiner",
        "label": "Conditioning Combiner",
        "kind": "elementwise_sum",
        "role": "sum timestep and label embeddings into one per-sample conditioning vector",
        "scale": "sample",
        "inputs": [
          "t_embedding",
          "y_embedding"
        ],
        "outputs": [
          "cond_vector"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward",
              "note": "c = t + y."
            }
          ]
        }
      },
      {
        "id": "dit_blocks",
        "label": "DiT-XL Block Stack",
        "kind": "attention_stack",
        "role": "update patch tokens through 28 full-attention blocks with 16 heads, each using MLP and adaLN-Zero-gated residual branches",
        "scale": "token",
        "repeats": 28,
        "pseudocode_ref": "../../pseudocode/diffusion-transformer.yaml",
        "depth": {
          "blocks": 28,
          "heads": 16
        },
        "contains": [
          {
            "id": "adaln_zero",
            "label": "adaLN-Zero",
            "standard_block_ref": "../../standard_blocks/adaln-zero-conditioning.yaml"
          }
        ],
        "inputs": [
          "token_state",
          "cond_vector"
        ],
        "outputs": [
          "token_state"
        ],
        "attention": {
          "pattern": "full",
          "query_scale": "token",
          "key_value_scale": "token",
          "heads": 16,
          "pair_bias": false,
          "pair_bias_source": "none",
          "positional_encoding": {
            "kind": "absolute_sincos_added_at_patchify"
          }
        },
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2 (DiT block design), Table 1",
              "note": "Depth 28 / 16 heads is the DiT-XL configuration; other sizes exist."
            }
          ]
        }
      },
      {
        "id": "final_layer",
        "label": "Final Layer",
        "kind": "decoder",
        "role": "apply adaLN-modulated LayerNorm, then linearly decode each token to a p x p x C_out patch prediction",
        "scale": "token",
        "inputs": [
          "token_state",
          "cond_vector"
        ],
        "outputs": [
          "output_tokens"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "FinalLayer"
            }
          ]
        }
      },
      {
        "id": "unpatchify",
        "label": "Unpatchify",
        "kind": "scale_transition",
        "role": "rearrange per-token patch predictions back to the spatial latent layout",
        "scale": "spatial",
        "inputs": [
          "output_tokens"
        ],
        "outputs": [
          "noise_prediction"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.unpatchify"
            }
          ]
        }
      }
    ],
    "representations": [
      {
        "id": "initial_noise",
        "scale": "spatial",
        "semantic_role": "standard-normal latent that initializes reverse diffusion",
        "shape": "B x 4 x I x I (I = image_size / 8)",
        "carries": [
          "initial Gaussian sampling state x_T"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "Sampling starts with torch.randn at four latent channels and one-eighth image resolution."
            }
          ]
        }
      },
      {
        "id": "step_noise",
        "scale": "spatial",
        "semantic_role": "fresh Gaussian noise used by one stochastic reverse-diffusion update",
        "shape": "B x 4 x I x I",
        "carries": [
          "reverse-step stochasticity for t greater than zero"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_sample",
              "note": "A fresh randn_like tensor contributes when t is nonzero."
            }
          ]
        }
      },
      {
        "id": "input_latent",
        "scale": "spatial",
        "semantic_role": "noised VAE latent at the current denoising step",
        "shape": "B x 4 x I x I (I = 32 for 256^2 images)",
        "carries": [
          "noised image content"
        ],
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3 (Latent diffusion), Sec. 3.2"
            }
          ]
        }
      },
      {
        "id": "timestep",
        "scale": "sample",
        "semantic_role": "diffusion timestep index for the current step",
        "shape": "B",
        "carries": [
          "noise level"
        ],
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2"
            }
          ]
        }
      },
      {
        "id": "class_label",
        "scale": "sample",
        "semantic_role": "class conditioning input (with a null class for classifier-free guidance)",
        "shape": "B",
        "carries": [
          "class identity"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "LabelEmbedder",
              "note": "Dropped labels are mapped to an extra embedding index num_classes."
            }
          ]
        }
      },
      {
        "id": "t_embedding",
        "scale": "sample",
        "semantic_role": "embedded timestep",
        "shape": "B x d",
        "carries": [
          "noise-level embedding"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "TimestepEmbedder"
            }
          ]
        }
      },
      {
        "id": "y_embedding",
        "scale": "sample",
        "semantic_role": "embedded class label",
        "shape": "B x d",
        "carries": [
          "class embedding"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "LabelEmbedder"
            }
          ]
        }
      },
      {
        "id": "cond_vector",
        "scale": "sample",
        "semantic_role": "combined conditioning vector shared by all tokens of a sample",
        "shape": "B x d",
        "carries": [
          "timestep and class conditioning"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward",
              "note": "c = t + y before the block stack."
            }
          ]
        }
      },
      {
        "id": "token_state",
        "scale": "token",
        "semantic_role": "mutable patch-token stream",
        "shape": "B x T x d, T = (I/p)^2",
        "carries": [
          "patch content",
          "fixed 2D sin-cos positional embedding"
        ],
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2 (Patchify)"
            }
          ]
        }
      },
      {
        "id": "output_tokens",
        "scale": "token",
        "semantic_role": "decoded per-token patch predictions",
        "shape": "B x T x (p * p * C_out), C_out = 2C if learn_sigma else C",
        "carries": [
          "predicted noise patch",
          "learned-range variance-parameter patch when enabled"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "FinalLayer",
              "note": "Linear(hidden_size, patch_size * patch_size * out_channels)."
            }
          ]
        }
      },
      {
        "id": "noise_prediction",
        "scale": "spatial",
        "semantic_role": "DiT output containing epsilon and optional learned-range variance parameters at latent resolution",
        "shape": "B x C_out x I x I, C_out = 2C if learn_sigma else C",
        "carries": [
          "epsilon prediction in the first C channels",
          "model_var_values in the second C channels when learn_sigma is enabled"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.__init__",
              "note": "out_channels is 2C only when learn_sigma is enabled."
            },
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_mean_variance",
              "note": "The second C channels interpolate between minimum and maximum log variance."
            }
          ]
        }
      },
      {
        "id": "final_latent",
        "scale": "spatial",
        "semantic_role": "final latent x_0 returned by the reverse-diffusion sampler",
        "shape": "B x 4 x I x I",
        "carries": [
          "generated latent before VAE decode scaling"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "p_sample_loop returns the generated latent before VAE decoding."
            }
          ]
        }
      },
      {
        "id": "vae_decode_latent",
        "scale": "spatial",
        "semantic_role": "final latent divided by 0.18215 for the frozen VAE decoder",
        "shape": "B x 4 x I x I",
        "carries": [
          "latent in the VAE decoder convention"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "The sampler output is divided by 0.18215 immediately before vae.decode."
            }
          ]
        }
      },
      {
        "id": "generated_image",
        "scale": "output",
        "semantic_role": "RGB image decoded from the generated latent",
        "shape": "B x 3 x H x W, H = W = 8I",
        "carries": [
          "generated RGB pixels"
        ],
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "The frozen Stable Diffusion VAE decodes the final latent to an image tensor."
            }
          ]
        }
      }
    ],
    "execution": {
      "loops": [
        {
          "id": "denoising_loop",
          "repeats": "num_sampling_steps",
          "reruns": [
            "patchify",
            "timestep_embedder",
            "label_embedder",
            "cond_combiner",
            "dit_blocks",
            "final_layer",
            "unpatchify",
            "reverse_diffusion_step"
          ],
          "cached": [

          ],
          "notes": [
            "The full backbone reruns at every denoising step; both the sampled latent x_t and timestep t change, while the class label remains fixed for a sample.",
            "A fresh Gaussian step-noise tensor enters each reverse update for t greater than zero; the final t=0 update is deterministic.",
            "Classifier-free guidance runs a conditional and an unconditional pass per step, batched together in the reference sampler.",
            "For exact reproducibility, the official forward_with_cfg path guides only the first three epsilon channels; the standard alternative guides all C epsilon channels."
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "kind": "code",
                "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
                "lines": "p_sample_loop_progressive",
                "note": "Each reverse step replaces x_t with a newly sampled x_(t-1); nonzero timesteps add fresh Gaussian noise."
              },
              {
                "kind": "code",
                "path": "facebookresearch/DiT/models.py",
                "lines": "DiT.forward_with_cfg",
                "note": "Conditional and null-label branches are batched; the reproducibility path guides the first three channels."
              },
              {
                "kind": "paper",
                "path": "arXiv:2212.09748",
                "lines": "Sec. 3.1, Sec. 4",
                "note": "DDPM sampling with classifier-free guidance; 250 sampling steps for reported results."
              }
            ]
          }
        }
      ]
    },
    "stateSemantics": {
      "input_latent": {
        "role": "mutable_loop_state",
        "produced_by": "ddpm_sampler",
        "updated_by": [
          "reverse_diffusion_step"
        ],
        "consumed_by": [
          "patchify",
          "reverse_diffusion_step"
        ],
        "notes": [
          "The sampler replaces x_t with x_(t-1) after every reverse-diffusion update."
        ]
      },
      "final_latent": {
        "role": "output_state",
        "produced_by": "ddpm_sampler",
        "updated_by": [

        ],
        "consumed_by": [
          "inverse_latent_scaling"
        ],
        "notes": [
          "This is x_0 after the last reverse-diffusion update, before undoing the VAE latent scale."
        ]
      },
      "generated_image": {
        "role": "output_state",
        "produced_by": "frozen_vae_decoder",
        "updated_by": [

        ],
        "consumed_by": [

        ]
      },
      "token_state": {
        "role": "mutable_state",
        "produced_by": "patchify",
        "updated_by": [
          "dit_blocks"
        ],
        "consumed_by": [
          "final_layer"
        ],
        "notes": [
          "The token stream is the only mutable state inside one forward pass."
        ]
      },
      "cond_vector": {
        "role": "read_only_conditioning",
        "produced_by": "cond_combiner",
        "updated_by": [

        ],
        "consumed_by": [
          "dit_blocks",
          "final_layer"
        ],
        "notes": [
          "Per-sample vector; every token in a sample shares the same modulation parameters."
        ]
      }
    },
    "conditioning": [
      {
        "id": "sampling_class_guidance",
        "relation_ref": "class_conditioning_enters_ddpm_sampler",
        "source": "class_label",
        "target": "ddpm_sampler",
        "mode": "classifier_free_guidance",
        "updates_source": false,
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "Conditional labels are paired with null labels and passed through forward_with_cfg."
            }
          ]
        }
      },
      {
        "id": "block_adaln_zero",
        "relation_ref": "block_adaln_zero_conditioning",
        "source": "cond_vector",
        "target": "dit_blocks",
        "mode": "adaln_zero",
        "standard_block_ref": "standard_blocks/adaln-zero-conditioning.yaml",
        "updates_source": false,
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiTBlock",
              "note": "adaLN_modulation(c).chunk(6) yields shift/scale/gate for both branches; the weights and bias of the entire six-output modulation linear are zero-initialized."
            }
          ]
        }
      },
      {
        "id": "final_layer_adaln",
        "relation_ref": "final_layer_adaln_conditioning",
        "source": "cond_vector",
        "target": "final_layer",
        "mode": "adaln",
        "updates_source": false,
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "FinalLayer",
              "note": "adaLN_modulation(c).chunk(2) yields shift/scale before the linear decode; no gate in the final layer."
            }
          ]
        }
      }
    ],
    "scaleTransitions": [
      {
        "id": "patchify_tokens",
        "from_scale": "spatial",
        "to_scale": "token",
        "source": "input_latent",
        "target": "token_state",
        "projection": "patch_embedding",
        "aggregation": "flatten_patches",
        "copy_vs_pool": "pool",
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2 (Patchify)",
              "note": "p x p patches are linearly embedded into T = (I/p)^2 tokens."
            }
          ]
        }
      },
      {
        "id": "unpatchify_output",
        "from_scale": "token",
        "to_scale": "spatial",
        "source": "output_tokens",
        "target": "noise_prediction",
        "projection": "none",
        "aggregation": "reshape",
        "copy_vs_pool": "copy",
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2 (Transformer decoder)",
              "note": "Decoded tokens are rearranged back to the spatial latent layout; lossless reshape."
            }
          ]
        }
      },
      {
        "id": "vae_decode_pixels",
        "from_scale": "spatial",
        "to_scale": "output",
        "source": "vae_decode_latent",
        "target": "generated_image",
        "projection": "frozen_vae_decode",
        "aggregation": "learned_upsampling",
        "copy_vs_pool": "expand",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "The pretrained VAE decoder maps the four-channel latent at one-eighth resolution to RGB pixels."
            }
          ]
        }
      }
    ],
    "trainingInference": {
      "objective": {
        "kind": "diffusion_noise_prediction",
        "notes": [
          "With learn_sigma=true, the model emits C epsilon channels plus C learned-range variance parameters; epsilon uses MSE and the variance parameters use a variational-bound term following ADM.",
          "With learn_sigma=false, the model emits only C epsilon channels."
        ]
      },
      "schedule": {
        "kind": "linear_variance",
        "steps": 1000
      },
      "sampler": {
        "kind": "ddpm",
        "steps": 250,
        "configurable": true,
        "base_schedule_steps": 1000,
        "timestep_selection": "respaced",
        "initial_state": "standard_normal_latent",
        "guidance": "classifier_free",
        "update": "learned_range_variance",
        "clip_denoised": false
      },
      "latent_codec": {
        "kind": "frozen_stable_diffusion_vae",
        "latent_channels": 4,
        "spatial_downsampling": 8,
        "decode_scale_divisor": 0.18215
      },
      "teacher_forcing": "not_applicable",
      "self_conditioning": "none",
      "checkpoint_notes": [
        "The generation system uses the frozen stabilityai/sd-vae-ft-{ema|mse} decoder after sampling; the DiT denoiser itself operates only in latent space.",
        "The visible 28-block, 16-head backbone is the DiT-XL/2 reference configuration; smaller official variants use different depths and head counts."
      ]
    },
    "relations": [
      {
        "id": "initial_noise_enters_ddpm_sampler",
        "from": "initial_noise",
        "to": "ddpm_sampler",
        "carries": [
          "initial Gaussian latent x_T"
        ],
        "operation": "initialize_reverse_diffusion",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main"
            }
          ]
        }
      },
      {
        "id": "class_conditioning_enters_ddpm_sampler",
        "from": "class_label",
        "to": "ddpm_sampler",
        "kind": "conditioning",
        "carries": [
          "class identity and null-class CFG pairing"
        ],
        "operation": "classifier_free_guidance_conditioning",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main",
              "note": "The class batch is concatenated with null-class labels for classifier-free guidance."
            }
          ]
        }
      },
      {
        "id": "ddpm_sampler_produces_final_latent",
        "from": "ddpm_sampler",
        "to": "final_latent",
        "carries": [
          "final generated latent x_0"
        ],
        "operation": "reverse_diffusion_sampling",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main"
            }
          ]
        }
      },
      {
        "id": "final_latent_enters_inverse_scaling",
        "from": "final_latent",
        "to": "inverse_latent_scaling",
        "carries": [
          "final generated latent"
        ],
        "operation": "prepare_vae_decode",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main"
            }
          ]
        }
      },
      {
        "id": "inverse_scaling_produces_vae_decode_latent",
        "from": "inverse_latent_scaling",
        "to": "vae_decode_latent",
        "carries": [
          "latent divided by 0.18215"
        ],
        "operation": "divide_by_0_18215",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main"
            }
          ]
        }
      },
      {
        "id": "vae_decode_latent_enters_frozen_decoder",
        "from": "vae_decode_latent",
        "to": "frozen_vae_decoder",
        "carries": [
          "decoder-scale four-channel latent"
        ],
        "operation": "vae_decode",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main"
            }
          ]
        }
      },
      {
        "id": "frozen_decoder_produces_generated_image",
        "from": "frozen_vae_decoder",
        "to": "generated_image",
        "carries": [
          "generated RGB image"
        ],
        "operation": "decode_pixels",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/sample.py",
              "lines": "main"
            }
          ]
        }
      },
      {
        "id": "initial_noise_initializes_current_latent",
        "from": "initial_noise",
        "to": "input_latent",
        "carries": [
          "initial mutable sampling state x_T"
        ],
        "operation": "initialize_sampling_state",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_sample_loop_progressive"
            }
          ]
        }
      },
      {
        "id": "current_latent_enters_reverse_diffusion_step",
        "from": "input_latent",
        "to": "reverse_diffusion_step",
        "carries": [
          "current latent x_t"
        ],
        "operation": "reverse_diffusion_update",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_mean_variance and p_sample"
            }
          ]
        }
      },
      {
        "id": "noise_prediction_enters_reverse_diffusion_step",
        "from": "noise_prediction",
        "to": "reverse_diffusion_step",
        "carries": [
          "epsilon and optional learned-range variance parameters"
        ],
        "operation": "parameterize_reverse_distribution",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_mean_variance"
            }
          ]
        }
      },
      {
        "id": "timestep_enters_reverse_diffusion_step",
        "from": "timestep",
        "to": "reverse_diffusion_step",
        "carries": [
          "diffusion schedule index"
        ],
        "operation": "select_diffusion_coefficients",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_mean_variance and p_sample"
            }
          ]
        }
      },
      {
        "id": "step_noise_enters_reverse_diffusion_step",
        "from": "step_noise",
        "to": "reverse_diffusion_step",
        "carries": [
          "fresh Gaussian reverse-step noise"
        ],
        "operation": "stochastic_sampling",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_sample"
            }
          ]
        }
      },
      {
        "id": "reverse_diffusion_step_updates_current_latent",
        "from": "reverse_diffusion_step",
        "to": "input_latent",
        "carries": [
          "updated latent x_(t-1)"
        ],
        "operation": "update_sampling_state",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_sample"
            }
          ]
        }
      },
      {
        "id": "updated_latent_reenters_sampling_iteration",
        "from": "input_latent",
        "to": "input_latent",
        "carries": [
          "updated latent reused as the next iteration's current state"
        ],
        "operation": "loop_back_sampling_state",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_sample_loop_progressive",
              "note": "Each yielded sample replaces the current image tensor for the next scheduled reverse step."
            }
          ]
        }
      },
      {
        "id": "current_latent_becomes_final_latent",
        "from": "input_latent",
        "to": "final_latent",
        "carries": [
          "x_0 after the final reverse step"
        ],
        "operation": "emit_final_sampling_state",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_sample_loop_progressive"
            }
          ]
        }
      },
      {
        "id": "input_latent_patch_embedding",
        "from": "input_latent",
        "to": "patchify",
        "carries": [
          "noised latent"
        ],
        "operation": "patch_embedding",
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2 (Patchify)"
            }
          ]
        }
      },
      {
        "id": "token_state_initialization",
        "from": "patchify",
        "to": "token_state",
        "carries": [
          "token_state"
        ],
        "operation": "initialize_tokens_with_positional_embedding",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward"
            }
          ]
        }
      },
      {
        "id": "timestep_featurization",
        "from": "timestep",
        "to": "timestep_embedder",
        "carries": [
          "timestep"
        ],
        "operation": "sinusoidal_embedding",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "TimestepEmbedder"
            }
          ]
        }
      },
      {
        "id": "timestep_embedding_projection",
        "from": "timestep_embedder",
        "to": "t_embedding",
        "carries": [
          "t_embedding"
        ],
        "operation": "mlp_projection",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "TimestepEmbedder"
            }
          ]
        }
      },
      {
        "id": "class_label_featurization",
        "from": "class_label",
        "to": "label_embedder",
        "carries": [
          "class_label"
        ],
        "operation": "label_embedding_with_cfg_dropout",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "LabelEmbedder"
            }
          ]
        }
      },
      {
        "id": "class_embedding_lookup",
        "from": "label_embedder",
        "to": "y_embedding",
        "carries": [
          "y_embedding"
        ],
        "operation": "embedding_lookup",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "LabelEmbedder"
            }
          ]
        }
      },
      {
        "id": "timestep_conditioning_sum",
        "from": "t_embedding",
        "to": "cond_combiner",
        "carries": [
          "t_embedding"
        ],
        "operation": "sum",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward"
            }
          ]
        }
      },
      {
        "id": "class_conditioning_sum",
        "from": "y_embedding",
        "to": "cond_combiner",
        "carries": [
          "y_embedding"
        ],
        "operation": "sum",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward"
            }
          ]
        }
      },
      {
        "id": "conditioning_vector_initialization",
        "from": "cond_combiner",
        "to": "cond_vector",
        "carries": [
          "cond_vector"
        ],
        "operation": "initialize_conditioning",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward"
            }
          ]
        }
      },
      {
        "id": "token_state_enters_dit_blocks",
        "from": "token_state",
        "to": "dit_blocks",
        "carries": [
          "token_state"
        ],
        "operation": "dit_block_stack_update",
        "evidence": {
          "status": "confirmed_from_paper",
          "refs": [
            {
              "kind": "paper",
              "path": "arXiv:2212.09748",
              "lines": "Sec. 3.2"
            }
          ]
        }
      },
      {
        "id": "block_adaln_zero_conditioning",
        "from": "cond_vector",
        "to": "dit_blocks",
        "kind": "conditioning",
        "carries": [
          "cond_vector"
        ],
        "operation": "adaln_zero_modulation",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiTBlock"
            }
          ]
        }
      },
      {
        "id": "refined_tokens_to_final_layer",
        "from": "dit_blocks",
        "to": "final_layer",
        "carries": [
          "token_state"
        ],
        "operation": "decode_tokens",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward"
            }
          ]
        }
      },
      {
        "id": "final_layer_adaln_conditioning",
        "from": "cond_vector",
        "to": "final_layer",
        "kind": "conditioning",
        "carries": [
          "cond_vector"
        ],
        "operation": "adaln_modulation",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "FinalLayer"
            }
          ]
        }
      },
      {
        "id": "output_token_linear_decode",
        "from": "final_layer",
        "to": "output_tokens",
        "carries": [
          "output_tokens"
        ],
        "operation": "linear_decode",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "FinalLayer"
            }
          ]
        }
      },
      {
        "id": "output_token_layout_restoration",
        "from": "output_tokens",
        "to": "unpatchify",
        "carries": [
          "output_tokens"
        ],
        "operation": "reshape",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.unpatchify"
            }
          ]
        }
      },
      {
        "id": "spatial_noise_prediction",
        "from": "unpatchify",
        "to": "noise_prediction",
        "carries": [
          "epsilon and optional learned-range variance parameters"
        ],
        "operation": "predict",
        "evidence": {
          "status": "confirmed_from_code",
          "refs": [
            {
              "kind": "code",
              "path": "facebookresearch/DiT/models.py",
              "lines": "DiT.forward"
            },
            {
              "kind": "code",
              "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
              "lines": "p_mean_variance"
            }
          ]
        }
      }
    ],
    "claims": [
      "adaLN-Zero conditioning outperformed in-context conditioning and cross-attention conditioning in the DiT block ablations.",
      "Zero-initializing each block's entire six-output adaLN modulation linear makes all shifts, scale offsets, and gates initially zero; the zero gates make each block the identity at initialization, which accelerated training.",
      "The conditioning vector is per-sample, not per-token; all tokens of a sample share the same modulation parameters, unlike per-item AdaLN."
    ]
  },
  "standardBlocks": {
    "adaln_zero_conditioning": {
      "id": "adaln_zero_conditioning",
      "name": "AdaLN-Zero Conditioning",
      "sourceYaml": "../../standard_blocks/adaln-zero-conditioning.yaml",
      "description": "Regress per-sample shift, scale-offset, and residual-gate parameters from a global conditioning vector; the entire six-output modulation linear is zero-initialized, so each residual update starts at zero and the enclosing block starts as the identity.",
      "math": [
        {
          "id": "regress_modulation",
          "text": "shift1, scale1, gate1, shift2, scale2, gate2 = Linear(SiLU(c))",
          "tex": "\\beta_1, \\gamma_1, \\alpha_1, \\beta_2, \\gamma_2, \\alpha_2 = \\operatorname{Linear}(\\operatorname{SiLU}(c))",
          "operation": "conditioning_projection"
        },
        {
          "id": "modulate_attention_branch",
          "text": "h = x + gate1 * Attn((1 + scale1) * LN(x) + shift1)",
          "tex": "h = x + \\alpha_1 \\odot \\operatorname{Attn}((1 + \\gamma_1) \\odot \\operatorname{LN}(x) + \\beta_1)",
          "operation": "gated_residual_attention"
        },
        {
          "id": "modulate_mlp_branch",
          "text": "y = h + gate2 * MLP((1 + scale2) * LN(h) + shift2)",
          "tex": "y = h + \\alpha_2 \\odot \\operatorname{MLP}((1 + \\gamma_2) \\odot \\operatorname{LN}(h) + \\beta_2)",
          "operation": "gated_residual_mlp"
        },
        {
          "id": "identity_initialization",
          "text": "the six-output modulation linear's weights and bias are initialized to zero; zero residual gates make the block an identity",
          "operation": "initialization_policy"
        }
      ]
    },
    "sinusoidal_timestep_embedding": {
      "id": "sinusoidal_timestep_embedding",
      "name": "Sinusoidal Timestep Embedding",
      "sourceYaml": "../../standard_blocks/sinusoidal-timestep-embedding.yaml",
      "description": "Expand a scalar diffusion timestep into a fixed sinusoidal frequency embedding, then project it to model width with a two-layer SiLU MLP. A reusable atom for diffusion-style architectures.",
      "math": [
        {
          "id": "frequencies",
          "text": "freqs = exp(-ln(10^4) * arange(128) / 128)",
          "tex": "\\omega_k = \\exp\\!\\left(-\\tfrac{k \\ln 10^4}{128}\\right),\\; k = 0..127",
          "operation": "frequency_table"
        },
        {
          "id": "sinusoid",
          "text": "emb = concat(cos(t * freqs), sin(t * freqs))  # 256-dim",
          "tex": "e = [\\cos(t\\,\\omega);\\; \\sin(t\\,\\omega)] \\in \\mathbb{R}^{256}",
          "operation": "sinusoidal_expansion"
        },
        {
          "id": "mlp_projection",
          "text": "t_emb = Linear_d(SiLU(Linear_d(emb)))",
          "tex": "t_{\\mathrm{emb}} = W_2\\,\\operatorname{SiLU}(W_1 e)",
          "operation": "mlp_projection"
        }
      ]
    },
    "per_item_adaln_conditioning": {
      "id": "per_item_adaln_conditioning",
      "name": "Per-Item AdaLN Conditioning",
      "sourceYaml": "../../standard_blocks/per-item-adaln-conditioning.yaml",
      "description": "Use a per-item conditioning stream to produce adaptive normalization shifts, scales, and gates for item updates.",
      "math": [
        {
          "id": "normalize_item",
          "text": "u_i = LayerNorm(x_i)",
          "tex": "u_i = \\operatorname{LN}(x_i)",
          "operation": "normalize"
        },
        {
          "id": "project_conditioning",
          "text": "shift_i, scale_i, gate_i = Linear(s_i)",
          "tex": "\\beta_i, \\gamma_i, g_i = W s_i",
          "operation": "conditioning_projection"
        },
        {
          "id": "modulate",
          "text": "y_i = gate_i * (scale_i * u_i + shift_i)",
          "tex": "y_i = g_i \\odot (\\gamma_i \\odot u_i + \\beta_i)",
          "operation": "adaptive_modulation"
        }
      ]
    }
  },
  "pseudocode": {
    "diffusion_transformer": {
      "sourceYaml": "../../pseudocode/diffusion-transformer.yaml",
      "symbols": [
        {
          "id": "initial_noise",
          "name": "x_T",
          "tex": "x_T",
          "architectureRef": "representations.initial_noise"
        },
        {
          "id": "step_noise",
          "name": "xi",
          "tex": "\\xi",
          "architectureRef": "representations.step_noise"
        },
        {
          "id": "input_latent",
          "name": "x",
          "architectureRef": "representations.input_latent"
        },
        {
          "id": "final_latent",
          "name": "x_0",
          "tex": "x_0",
          "architectureRef": "representations.final_latent"
        },
        {
          "id": "vae_decode_latent",
          "name": "z_vae",
          "tex": "z_{\\mathrm{vae}}",
          "architectureRef": "representations.vae_decode_latent"
        },
        {
          "id": "generated_image",
          "name": "x_hat",
          "tex": "\\hat{x}",
          "architectureRef": "representations.generated_image"
        },
        {
          "id": "timestep",
          "name": "t",
          "architectureRef": "representations.timestep"
        },
        {
          "id": "class_label",
          "name": "y",
          "architectureRef": "representations.class_label"
        },
        {
          "id": "t_embedding",
          "name": "t_emb",
          "tex": "t_{\\mathrm{emb}}",
          "architectureRef": "representations.t_embedding"
        },
        {
          "id": "y_embedding",
          "name": "y_emb",
          "tex": "y_{\\mathrm{emb}}",
          "architectureRef": "representations.y_embedding"
        },
        {
          "id": "cond_vector",
          "name": "c",
          "architectureRef": "representations.cond_vector"
        },
        {
          "id": "token_state",
          "name": "h",
          "architectureRef": "representations.token_state"
        },
        {
          "id": "output_tokens",
          "name": "u",
          "architectureRef": "representations.output_tokens"
        },
        {
          "id": "noise_prediction",
          "name": "ε, v",
          "tex": "\\varepsilon_\\theta, v_\\theta",
          "architectureRef": "representations.noise_prediction"
        }
      ],
      "lines": [
        {
          "id": "patchify_tokens",
          "text": "h = PatchEmbed(x) + pos_embed  # fixed 2D sin-cos",
          "refs": "DiT.forward",
          "architectureRefs": [
            "modules.patchify"
          ]
        },
        {
          "id": "embed_timestep",
          "text": "t_emb = MLP(SinCosEmbed_256(t))",
          "refs": "TimestepEmbedder",
          "architectureRefs": [
            "modules.timestep_embedder"
          ]
        },
        {
          "id": "embed_label",
          "text": "y_emb = Embedding(maybe_drop_to_null(y))  # training-only dropout; CFG supplies null labels at inference",
          "refs": "LabelEmbedder",
          "architectureRefs": [
            "modules.label_embedder"
          ]
        },
        {
          "id": "combine_conditioning",
          "text": "c = t_emb + y_emb",
          "refs": "DiT.forward",
          "architectureRefs": [
            "modules.cond_combiner",
            "claims.conditioning_is_per_sample"
          ]
        },
        {
          "id": "run_blocks",
          "text": "for block in blocks: h = DiTBlock(h, c)  # adaLN-Zero, 28 blocks in DiT-XL",
          "refs": "DiTBlock",
          "architectureRefs": [
            "modules.dit_blocks",
            "claims.adaln_zero_beats_alternatives"
          ],
          "standardBlockRef": "../../standard_blocks/adaln-zero-conditioning.yaml"
        },
        {
          "id": "decode_tokens",
          "text": "shift, scale = Linear(SiLU(c)); u = Linear((1 + scale) * LayerNorm(h) + shift)",
          "refs": "FinalLayer",
          "architectureRefs": [
            "modules.final_layer"
          ]
        },
        {
          "id": "unpatchify_output",
          "text": "out = Unpatchify(u); eps, var_values = split(out) if learn_sigma else (out, None)",
          "refs": "DiT.unpatchify",
          "architectureRefs": [
            "modules.unpatchify"
          ]
        }
      ]
    }
  },
  "boards": {
    "schemaVersion": "visualization-v0.3",
    "sourceYaml": "../../views/dit-semantic-zoom.view.yaml",
    "rootBoard": "generation_overview",
    "items": [
      {
        "id": "generation_overview",
        "title": "DiT Class-Conditional Image Generation",
        "summary": "DiT generates an image by iteratively denoising a random four-channel latent under a class label, undoing the latent scaling used during training, and decoding the final latent with a frozen VAE.",
        "scale_lanes": false,
        "grid": {
          "columns": 8,
          "rows": 4,
          "column_sizing": "content"
        },
        "nodes": [
          {
            "id": "class_label",
            "kind": "representation",
            "rep_ref": "class_label",
            "prominence": "context",
            "treatment": "chip",
            "density": "micro",
            "col": 1,
            "row": 1
          },
          {
            "id": "initial_noise",
            "kind": "representation",
            "rep_ref": "initial_noise",
            "prominence": "context",
            "col": 1,
            "row": 3
          },
          {
            "id": "ddpm_sampler",
            "kind": "module",
            "module_ref": "ddpm_sampler",
            "prominence": "primary",
            "treatment": "block",
            "board_ref": "sampling_loop",
            "col": 3,
            "row": 2
          },
          {
            "id": "final_latent",
            "kind": "representation",
            "rep_ref": "final_latent",
            "prominence": "secondary",
            "col": 4,
            "row": 2
          },
          {
            "id": "inverse_latent_scaling",
            "kind": "module",
            "module_ref": "inverse_latent_scaling",
            "treatment": "compact",
            "density": "compact",
            "col": 5,
            "row": 2,
            "elide": true
          },
          {
            "id": "vae_decode_latent",
            "kind": "representation",
            "rep_ref": "vae_decode_latent",
            "col": 6,
            "row": 2,
            "elide": true
          },
          {
            "id": "frozen_vae_decoder",
            "kind": "module",
            "module_ref": "frozen_vae_decoder",
            "prominence": "primary",
            "treatment": "block",
            "col": 7,
            "row": 2
          },
          {
            "id": "generated_image",
            "kind": "representation",
            "rep_ref": "generated_image",
            "prominence": "primary",
            "col": 8,
            "row": 2
          }
        ],
        "edges": [
          {
            "relation_ref": "initial_noise_enters_ddpm_sampler",
            "from": "initial_noise",
            "to": "ddpm_sampler",
            "label": "x_T",
            "connection": {
              "title": "Initial sampling noise",
              "role": "reverse-chain initialization",
              "inside": "Generation begins from a four-channel standard-normal latent at the frozen VAE's spatial resolution."
            }
          },
          {
            "relation_ref": "class_conditioning_enters_ddpm_sampler",
            "from": "class_label",
            "to": "ddpm_sampler",
            "label": "class y",
            "tone": "conditioning",
            "connection": {
              "title": "Class-conditioned sampling",
              "role": "classifier-free guidance input",
              "inside": "The requested class conditions every DiT evaluation; the reference sampler pairs it with a null-class copy for classifier-free guidance."
            }
          },
          {
            "relation_ref": "ddpm_sampler_produces_final_latent",
            "from": "ddpm_sampler",
            "to": "final_latent",
            "label": "x_0",
            "connection": {
              "title": "Final denoised latent",
              "role": "reverse-chain output",
              "inside": "After the configured reverse-diffusion steps, the sampler returns the final four-channel latent."
            }
          },
          {
            "relation_ref": "final_latent_enters_inverse_scaling",
            "from": "final_latent",
            "to": "inverse_latent_scaling",
            "label": "x_0",
            "connection": {
              "title": "Latent rescaling input",
              "role": "restore VAE latent scale",
              "inside": "The final diffusion latent enters the fixed inverse scaling used before VAE decoding."
            }
          },
          {
            "relation_ref": "inverse_scaling_produces_vae_decode_latent",
            "from": "inverse_latent_scaling",
            "to": "vae_decode_latent",
            "label": "x_0 / 0.18215",
            "connection": {
              "title": "VAE-scale latent",
              "role": "decoder-ready latent",
              "inside": "The fixed inverse scaling restores the magnitude expected by the pretrained VAE decoder."
            }
          },
          {
            "relation_ref": "vae_decode_latent_enters_frozen_decoder",
            "from": "vae_decode_latent",
            "to": "frozen_vae_decoder",
            "label": "decoder latent",
            "connection": {
              "title": "Latent into frozen decoder",
              "role": "latent-to-pixel decoding",
              "inside": "The rescaled four-channel latent is passed to the frozen pretrained VAE decoder."
            }
          },
          {
            "relation_ref": "frozen_decoder_produces_generated_image",
            "from": "frozen_vae_decoder",
            "to": "generated_image",
            "label": "RGB image",
            "connection": {
              "title": "Generated image",
              "role": "task-level output",
              "inside": "The frozen VAE maps the final latent back to an RGB image at the requested resolution."
            }
          }
        ],
        "open_notes": [
          "This root presents the generation path. Training has a separate image-to-latent noising path.",
          "Fixed inverse scaling is authored but elided from the high-level view; its dashed connection remains inspectable."
        ]
      },
      {
        "id": "sampling_loop",
        "title": "DDPM Sampling Loop",
        "summary": "This is the denoising iteration repeated by the sampler. DiT predicts noise and learned-range variance parameters from x_t, t, and y; a fixed DDPM formula uses that prediction, the current latent, schedule coefficients, and fresh noise to produce x_(t-1). The loop starts with x_T as Gaussian noise and ends when the updated state is x_0.",
        "parent": "generation_overview",
        "scale_lanes": false,
        "grid": {
          "columns": 9,
          "rows": 5,
          "min_col": 150,
          "col_gap": 30
        },
        "nodes": [
          {
            "id": "class_label",
            "kind": "representation",
            "rep_ref": "class_label",
            "prominence": "context",
            "treatment": "chip",
            "density": "micro",
            "col": 3,
            "row": 1
          },
          {
            "id": "timestep",
            "kind": "representation",
            "rep_ref": "timestep",
            "prominence": "context",
            "treatment": "chip",
            "density": "micro",
            "col": 5,
            "row": 1
          },
          {
            "id": "step_noise",
            "kind": "representation",
            "rep_ref": "step_noise",
            "label": "Fresh step noise",
            "prominence": "context",
            "col": 7,
            "row": 1
          },
          {
            "id": "current_latent",
            "kind": "representation",
            "rep_ref": "input_latent",
            "label": "Current latent x_t",
            "prominence": "secondary",
            "col": 1,
            "row": 3
          },
          {
            "id": "dit_denoiser_call",
            "kind": "module",
            "label": "DiT Noise Predictor",
            "scale": "spatial",
            "role": "learned network that estimates the noise present in x_t",
            "detail": "learned · (epsilon, variance) = DiT(x_t, t, y)",
            "prominence": "primary",
            "treatment": "block",
            "board_ref": "dit_pipeline",
            "col": 3,
            "row": 3
          },
          {
            "id": "noise_prediction",
            "kind": "representation",
            "rep_ref": "noise_prediction",
            "label": "Predicted noise + variance",
            "prominence": "secondary",
            "col": 5,
            "row": 3
          },
          {
            "id": "reverse_diffusion_step",
            "kind": "module",
            "module_ref": "reverse_diffusion_step",
            "label": "DDPM Formula · Fixed Math",
            "detail": "fixed sampler math · no learned weights",
            "prominence": "secondary",
            "treatment": "compact",
            "density": "compact",
            "col": 7,
            "row": 3
          },
          {
            "id": "next_latent",
            "kind": "representation",
            "rep_ref": "input_latent",
            "label": "Next latent x_(t-1)",
            "prominence": "secondary",
            "col": 9,
            "row": 3
          }
        ],
        "edges": [
          {
            "view_only": true,
            "from": "current_latent",
            "to": "dit_denoiser_call",
            "label": "x_t",
            "connection": {
              "title": "Current latent into DiT",
              "role": "denoiser state",
              "inside": "At each iteration, the current four-channel latent becomes the DiT backbone's spatial input."
            }
          },
          {
            "view_only": true,
            "from": "dit_denoiser_call",
            "to": "noise_prediction",
            "label": "prediction",
            "connection": {
              "title": "Learned DiT prediction",
              "role": "learned reverse-process parameters",
              "inside": "DiT returns a spatial epsilon prediction and optional learned-range variance parameters; it does not itself calculate x_(t-1)."
            }
          },
          {
            "view_only": true,
            "from": "class_label",
            "to": "dit_denoiser_call",
            "label": "class y",
            "tone": "conditioning",
            "connection": {
              "title": "Class label into DiT",
              "role": "class conditioning",
              "inside": "The reference guidance path evaluates class-conditional and null-class examples together around this learned prediction."
            }
          },
          {
            "view_only": true,
            "from": "timestep",
            "to": "dit_denoiser_call",
            "label": "timestep t",
            "tone": "conditioning",
            "connection": {
              "title": "Timestep into DiT",
              "role": "noise-level conditioning",
              "inside": "DiT embeds the current scheduled timestep to condition every block and its final layer."
            }
          },
          {
            "relation_ref": "current_latent_enters_reverse_diffusion_step",
            "from": "current_latent",
            "to": "reverse_diffusion_step",
            "label": "current x_t",
            "tone": "skip",
            "route_side": "bottom",
            "route_clearance": 18,
            "connection": {
              "title": "Current latent into the fixed formula",
              "role": "sampler state bypass",
              "inside": "The DDPM equation needs the original current latent as well as DiT's prediction; this lower rail is a data dependency, not another model pass."
            }
          },
          {
            "relation_ref": "noise_prediction_enters_reverse_diffusion_step",
            "from": "noise_prediction",
            "to": "reverse_diffusion_step",
            "label": "eps, variance",
            "connection": {
              "title": "Prediction into the fixed formula",
              "role": "learned parameters used by sampler math",
              "inside": "Predicted noise determines the denoised estimate, while the learned-range output selects the reverse-process variance used by the fixed equation."
            }
          },
          {
            "relation_ref": "timestep_enters_reverse_diffusion_step",
            "from": "timestep",
            "to": "reverse_diffusion_step",
            "label": "schedule t",
            "connection": {
              "title": "Timestep into the fixed formula",
              "role": "schedule lookup",
              "inside": "The timestep selects the precomputed coefficients and determines whether the stochastic term is active; no learned weights are involved."
            }
          },
          {
            "relation_ref": "step_noise_enters_reverse_diffusion_step",
            "from": "step_noise",
            "to": "reverse_diffusion_step",
            "label": "fresh xi",
            "connection": {
              "title": "Stochastic DDPM noise",
              "role": "reverse-step randomness",
              "inside": "Fresh standard-normal noise is scaled by the selected reverse variance for t greater than zero; it is masked out at t equals zero."
            }
          },
          {
            "relation_ref": "reverse_diffusion_step_updates_current_latent",
            "from": "reverse_diffusion_step",
            "to": "next_latent",
            "label": "x_(t-1)",
            "connection": {
              "title": "Formula result",
              "role": "one-step sampler output",
              "inside": "Applying the DDPM equation produces x_(t-1); on the last scheduled iteration this state is x_0."
            }
          },
          {
            "relation_ref": "updated_latent_reenters_sampling_iteration",
            "from": "next_latent",
            "to": "current_latent",
            "label": "repeat at next scheduled t",
            "tone": "skip",
            "route_side": "bottom",
            "route_clearance": 36,
            "connection": {
              "title": "Repeat with the updated latent",
              "role": "recurrent sampler state",
              "inside": "If steps remain, x_(t-1) becomes the next iteration's x_t and the sampler advances to the next scheduled timestep."
            }
          }
        ],
        "open_notes": [
          {
            "The root board owns the boundary": "the first current latent is Gaussian x_T, and the final next latent is emitted as x_0 for VAE decoding."
          },
          "The official sampler batches conditional and null-class copies for classifier-free guidance; the reproducibility path guides only the first three epsilon channels.",
          "The 250 sampler indices map onto a respaced subset of the 1,000-step training schedule."
        ]
      },
      {
        "id": "dit_pipeline",
        "title": "DiT-XL/2 Denoiser Forward Pass",
        "summary": "One sampler iteration calls DiT-XL/2 on x_t, t, and y. The denoiser patchifies the latent, builds the conditioning vector, runs 28 adaLN-Zero blocks with 16 attention heads, then returns epsilon and learned-range variance parameters to the fixed DDPM sampling formula.",
        "parent": "sampling_loop",
        "scale_lanes": false,
        "grid": {
          "columns": 8,
          "rows": 5
        },
        "nodes": [
          {
            "id": "timestep",
            "kind": "representation",
            "rep_ref": "timestep",
            "prominence": "context",
            "treatment": "chip",
            "density": "micro",
            "col": 1,
            "row": 1
          },
          {
            "id": "class_label",
            "kind": "representation",
            "rep_ref": "class_label",
            "prominence": "context",
            "treatment": "chip",
            "density": "micro",
            "col": 1,
            "row": 2
          },
          {
            "id": "input_latent",
            "kind": "representation",
            "rep_ref": "input_latent",
            "prominence": "context",
            "treatment": "chip",
            "density": "micro",
            "col": 1,
            "row": 4
          },
          {
            "id": "timestep_embedder",
            "kind": "module",
            "module_ref": "timestep_embedder",
            "treatment": "compact",
            "density": "compact",
            "col": 2,
            "row": 1
          },
          {
            "id": "label_embedder",
            "kind": "module",
            "module_ref": "label_embedder",
            "treatment": "compact",
            "density": "compact",
            "col": 2,
            "row": 2
          },
          {
            "id": "t_embedding",
            "kind": "representation",
            "rep_ref": "t_embedding",
            "treatment": "compact",
            "density": "compact",
            "col": 2,
            "row": 1,
            "elide": true
          },
          {
            "id": "y_embedding",
            "kind": "representation",
            "rep_ref": "y_embedding",
            "treatment": "compact",
            "density": "compact",
            "col": 2,
            "row": 2,
            "elide": true
          },
          {
            "id": "cond_combiner",
            "kind": "module",
            "module_ref": "cond_combiner",
            "label": "t + y",
            "col": 3,
            "row": 1
          },
          {
            "id": "patchify",
            "kind": "module",
            "module_ref": "patchify",
            "treatment": "compact",
            "density": "compact",
            "col": 2,
            "row": 4
          },
          {
            "id": "cond_vector",
            "kind": "representation",
            "rep_ref": "cond_vector",
            "prominence": "secondary",
            "treatment": "compact",
            "density": "compact",
            "col": 4,
            "row": 1
          },
          {
            "id": "token_state",
            "kind": "representation",
            "rep_ref": "token_state",
            "prominence": "secondary",
            "treatment": "compact",
            "density": "compact",
            "col": 3,
            "row": 4
          },
          {
            "id": "dit_blocks",
            "kind": "module",
            "module_ref": "dit_blocks",
            "prominence": "primary",
            "treatment": "block",
            "col": 5,
            "row": 3,
            "board_ref": "dit_blocks"
          },
          {
            "id": "final_layer",
            "kind": "module",
            "module_ref": "final_layer",
            "prominence": "primary",
            "treatment": "compact",
            "density": "compact",
            "col": 7,
            "row": 3
          },
          {
            "id": "output_tokens",
            "kind": "representation",
            "rep_ref": "output_tokens",
            "treatment": "compact",
            "density": "compact",
            "col": 7,
            "row": 4,
            "elide": true
          },
          {
            "id": "unpatchify",
            "kind": "module",
            "module_ref": "unpatchify",
            "treatment": "compact",
            "density": "compact",
            "col": 8,
            "row": 4
          },
          {
            "id": "noise_prediction",
            "kind": "representation",
            "rep_ref": "noise_prediction",
            "prominence": "context",
            "treatment": "chip",
            "density": "micro",
            "col": 8,
            "row": 3
          }
        ],
        "edges": [
          {
            "relation_ref": "timestep_featurization",
            "from": "timestep",
            "to": "timestep_embedder",
            "label": "t",
            "connection": {
              "title": "Timestep into embedder",
              "role": "noise-level featurization",
              "inside": "The scalar timestep is expanded with a 256-dim sinusoidal embedding and projected by a two-layer SiLU MLP."
            }
          },
          {
            "relation_ref": "timestep_embedding_projection",
            "from": "timestep_embedder",
            "to": "t_embedding",
            "label": "t emb",
            "connection": {
              "title": "Embedded timestep",
              "role": "sample-scale embedding",
              "inside": "The MLP output is a per-sample vector at model width d."
            }
          },
          {
            "relation_ref": "class_label_featurization",
            "from": "class_label",
            "to": "label_embedder",
            "label": "y",
            "connection": {
              "title": "Label into embedder",
              "role": "class featurization",
              "inside": "The class index is looked up in an embedding table; during training labels randomly drop to a null class for classifier-free guidance."
            }
          },
          {
            "relation_ref": "class_embedding_lookup",
            "from": "label_embedder",
            "to": "y_embedding",
            "label": "y emb",
            "connection": {
              "title": "Embedded label",
              "role": "sample-scale embedding",
              "inside": "The lookup output is a per-sample vector at model width d."
            }
          },
          {
            "relation_ref": "timestep_conditioning_sum",
            "from": "t_embedding",
            "to": "cond_combiner",
            "label": "t emb",
            "connection": {
              "title": "Timestep embedding into combiner",
              "role": "additive combination",
              "inside": "Timestep and label embeddings are summed elementwise; no gating or concatenation."
            }
          },
          {
            "relation_ref": "class_conditioning_sum",
            "from": "y_embedding",
            "to": "cond_combiner",
            "label": "y emb",
            "connection": {
              "title": "Label embedding into combiner",
              "role": "additive combination",
              "inside": "Timestep and label embeddings are summed elementwise; no gating or concatenation."
            }
          },
          {
            "relation_ref": "conditioning_vector_initialization",
            "from": "cond_combiner",
            "to": "cond_vector",
            "label": "c",
            "tone": "conditioning",
            "connection": {
              "title": "Conditioning vector",
              "role": "read-only conditioning source",
              "inside": "The summed vector c = t_emb + y_emb is per-sample and is never updated by the block stack."
            }
          },
          {
            "relation_ref": "input_latent_patch_embedding",
            "from": "input_latent",
            "to": "patchify",
            "label": "latent",
            "connection": {
              "title": "Noised latent into patchify",
              "role": "patch featurization",
              "inside": "The spatial latent is cut into p x p patches, each linearly embedded into one token."
            }
          },
          {
            "relation_ref": "token_state_initialization",
            "from": "patchify",
            "to": "token_state",
            "label": "tokens + pos",
            "connection": {
              "title": "Token initialization",
              "role": "mutable token stream",
              "inside": "Patch tokens receive fixed 2D sin-cos positional embeddings; this is the only mutable state in the forward pass."
            }
          },
          {
            "relation_ref": "block_adaln_zero_conditioning",
            "from": "cond_vector",
            "to": "dit_blocks",
            "label": "c",
            "tone": "conditioning",
            "connection": {
              "title": "adaLN-Zero conditioning",
              "role": "per-sample modulation of every block",
              "inside": "Each block's zero-initialized six-output linear regresses shift, scale offsets, and residual gates from c; modulation uses (1 + scale) times LayerNorm plus shift."
            }
          },
          {
            "relation_ref": "token_state_enters_dit_blocks",
            "from": "token_state",
            "to": "dit_blocks",
            "label": "x",
            "connection": {
              "title": "Tokens into the block stack",
              "role": "coarse mutable state",
              "inside": "Full self-attention over all patch tokens updates the token stream block by block."
            }
          },
          {
            "relation_ref": "refined_tokens_to_final_layer",
            "from": "dit_blocks",
            "to": "final_layer",
            "label": "refined tokens",
            "connection": {
              "title": "Refined tokens to decoder",
              "role": "token decoding",
              "inside": "The final layer normalizes tokens with adaLN-modulated LayerNorm before the linear decode."
            }
          },
          {
            "relation_ref": "final_layer_adaln_conditioning",
            "from": "cond_vector",
            "to": "final_layer",
            "label": "c",
            "tone": "conditioning",
            "connection": {
              "title": "Final-layer adaLN",
              "role": "shift/scale modulation",
              "inside": "The final layer regresses shift and scale (no gate) from c before decoding."
            }
          },
          {
            "relation_ref": "output_token_linear_decode",
            "from": "final_layer",
            "to": "output_tokens",
            "label": "p*p*C_out per token",
            "connection": {
              "title": "Linear decode",
              "role": "per-token patch prediction",
              "inside": "Each token is decoded to a p x p patch of epsilon plus learned-range variance-parameter channels when learn_sigma is enabled."
            }
          },
          {
            "relation_ref": "output_token_layout_restoration",
            "from": "output_tokens",
            "to": "unpatchify",
            "label": "reshape",
            "connection": {
              "title": "Tokens into unpatchify",
              "role": "layout restoration",
              "inside": "Per-token patch predictions are rearranged back to the spatial latent grid; this is a lossless reshape."
            }
          },
          {
            "relation_ref": "spatial_noise_prediction",
            "from": "unpatchify",
            "to": "noise_prediction",
            "label": "eps, variance params",
            "connection": {
              "title": "Noise and variance-parameter prediction",
              "role": "final outputs",
              "inside": "Unpatchify returns one joint spatial tensor; the diffusion wrapper treats the first C channels as epsilon and, when enabled, the second C as learned-range variance parameters."
            }
          }
        ],
        "open_notes": [
          "Intermediate timestep, label, and output-token representations are elided; the canonical modules remain visible on the main board."
        ]
      },
      {
        "id": "dit_blocks",
        "title": "DiT-XL Block (adaLN-Zero)",
        "summary": "One of the 28 DiT-XL blocks. A SiLU-plus-linear projection on c emits six vectors: shift1, scale1, gate1 for the attention branch and shift2, scale2, gate2 for the MLP branch. Each branch applies (1 + scale) times LayerNorm plus shift, transforms, gates, then adds residually.",
        "parent": "dit_pipeline",
        "scale_lanes": false,
        "grid": {
          "columns": 12,
          "rows": 4,
          "min_col": 88,
          "col_gap": 14
        },
        "nodes": [
          {
            "id": "token_state_in",
            "kind": "representation",
            "rep_ref": "token_state",
            "label": "tokens in",
            "col": 1,
            "row": 4
          },
          {
            "id": "cond_vector",
            "kind": "representation",
            "rep_ref": "cond_vector",
            "col": 2,
            "row": 1
          },
          {
            "id": "adaln_mlp",
            "kind": "operation",
            "label": "adaLN modulation",
            "scale": "sample",
            "treatment": "compact",
            "density": "compact",
            "role": "apply SiLU then a linear projection from c to six modulation vectors",
            "detail": "c -> shift1, scale1, gate1, shift2, scale2, gate2",
            "col": 4,
            "row": 1
          },
          {
            "id": "attn_params",
            "kind": "operation",
            "label": "branch-1 params",
            "scale": "sample",
            "treatment": "chip",
            "density": "micro",
            "role": "shift1, scale1, and gate1 modulate the attention residual branch",
            "col": 3,
            "row": 2
          },
          {
            "id": "mlp_params",
            "kind": "operation",
            "label": "branch-2 params",
            "scale": "sample",
            "treatment": "chip",
            "density": "micro",
            "role": "shift2, scale2, and gate2 modulate the pointwise MLP residual branch",
            "col": 8,
            "row": 2
          },
          {
            "id": "norm1",
            "kind": "operation",
            "label": "LayerNorm",
            "scale": "token",
            "treatment": "chip",
            "density": "micro",
            "role": "normalize tokens before the attention branch; no learned affine",
            "col": 2,
            "row": 4
          },
          {
            "id": "adaln_mod",
            "kind": "operation",
            "label": "modulate 1",
            "scale": "token",
            "treatment": "chip",
            "density": "micro",
            "role": "affine modulation",
            "detail": "(1 + scale1) * norm1 + shift1",
            "col": 3,
            "row": 4
          },
          {
            "id": "self_attention",
            "kind": "module",
            "label": "self-attention",
            "scale": "token",
            "treatment": "compact",
            "density": "compact",
            "role": "16-head full self-attention inside one DiT-XL block",
            "detail": "standard QKV attention plus output projection",
            "col": 4,
            "row": 4
          },
          {
            "id": "gate1",
            "kind": "operation",
            "operator": "*",
            "label": "gate1",
            "scale": "token",
            "role": "multiply the attention output by the zero-initialized gate1 vector",
            "col": 5,
            "row": 4
          },
          {
            "id": "add1",
            "kind": "operation",
            "operator": "+",
            "label": "residual add 1",
            "scale": "token",
            "role": "add the gated attention branch back to the incoming token state",
            "col": 6,
            "row": 4
          },
          {
            "id": "norm2",
            "kind": "operation",
            "label": "LayerNorm",
            "scale": "token",
            "treatment": "chip",
            "density": "micro",
            "role": "normalize the post-attention token state before the MLP branch",
            "col": 7,
            "row": 4
          },
          {
            "id": "scale_shift2",
            "kind": "operation",
            "label": "modulate 2",
            "scale": "token",
            "treatment": "chip",
            "density": "micro",
            "role": "affine modulation",
            "detail": "(1 + scale2) * norm2 + shift2",
            "col": 8,
            "row": 4
          },
          {
            "id": "mlp_branch",
            "kind": "operation",
            "label": "pointwise MLP branch",
            "scale": "token",
            "treatment": "compact",
            "density": "compact",
            "role": "transform each token independently with the DiT MLP branch",
            "col": 9,
            "row": 4
          },
          {
            "id": "gate2",
            "kind": "operation",
            "operator": "*",
            "label": "gate2",
            "scale": "token",
            "role": "multiply the MLP output by the zero-initialized gate2 vector",
            "col": 10,
            "row": 4
          },
          {
            "id": "add2",
            "kind": "operation",
            "operator": "+",
            "label": "residual add 2",
            "scale": "token",
            "role": "add the gated MLP branch back to the post-attention token state",
            "col": 11,
            "row": 4
          },
          {
            "id": "token_state_out",
            "kind": "representation",
            "rep_ref": "token_state",
            "label": "tokens out",
            "col": 12,
            "row": 4
          }
        ],
        "edges": [
          {
            "view_only": true,
            "from": "cond_vector",
            "to": "adaln_mlp",
            "label": "c",
            "tone": "conditioning",
            "connection": {
              "title": "Conditioning into adaLN modulation",
              "role": "modulation source",
              "inside": "The per-sample conditioning vector c passes through SiLU and one joint linear to produce six vectors; that entire linear's weights and bias are initialized to zero."
            }
          },
          {
            "view_only": true,
            "from": "adaln_mlp",
            "to": "attn_params",
            "label": "1st branch",
            "tone": "conditioning",
            "connection": {
              "title": "Attention-branch parameters",
              "role": "adaLN-Zero branch controls",
              "inside": "The first three chunks are shift1, scale1, and gate1; they modulate and gate the self-attention branch."
            }
          },
          {
            "view_only": true,
            "from": "adaln_mlp",
            "to": "mlp_params",
            "label": "2nd branch",
            "tone": "conditioning",
            "connection": {
              "title": "MLP-branch parameters",
              "role": "adaLN-Zero branch controls",
              "inside": "The last three chunks are shift2, scale2, and gate2; they modulate and gate the pointwise MLP branch."
            }
          },
          {
            "view_only": true,
            "from": "token_state_in",
            "to": "norm1",
            "label": "x",
            "connection": {
              "title": "Tokens into first LayerNorm",
              "role": "branch input",
              "inside": "The incoming token state is first LayerNorm-normalized for the attention residual branch."
            }
          },
          {
            "view_only": true,
            "from": "norm1",
            "to": "adaln_mod",
            "label": "norm1",
            "connection": {
              "title": "Normalized tokens",
              "role": "normalized branch input",
              "inside": "DiT uses LayerNorm without learned affine parameters before applying adaptive shift and scale from c."
            }
          },
          {
            "view_only": true,
            "from": "attn_params",
            "to": "adaln_mod",
            "label": "shift1, scale1",
            "tone": "conditioning",
            "connection": {
              "title": "First adaLN shift and scale",
              "role": "attention-branch modulation",
              "inside": "shift1 and scale1 are broadcast over tokens as (1 + scale1) * LayerNorm(x) + shift1 before self-attention."
            }
          },
          {
            "view_only": true,
            "from": "adaln_mod",
            "to": "self_attention",
            "label": "modulated x",
            "connection": {
              "title": "Modulated tokens into attention",
              "role": "attention input",
              "inside": "The shifted and scaled token stream enters full multi-head self-attention."
            }
          },
          {
            "view_only": true,
            "from": "self_attention",
            "to": "gate1",
            "label": "attn",
            "connection": {
              "title": "Attention branch output",
              "role": "residual branch value",
              "inside": "The attention branch output is not added directly; it is first multiplied by gate1."
            }
          },
          {
            "view_only": true,
            "from": "attn_params",
            "to": "gate1",
            "label": "gate1",
            "tone": "conditioning",
            "connection": {
              "title": "First residual gate",
              "role": "zero-initialized branch gate",
              "inside": "gate1 is one output of the jointly zero-initialized six-vector modulation linear, so the attention branch initially contributes nothing."
            }
          },
          {
            "view_only": true,
            "from": "gate1",
            "to": "add1",
            "label": "gate1*attn",
            "connection": {
              "title": "Gated attention update",
              "role": "gated residual update",
              "inside": "The gated attention output is the update term for the first residual add."
            }
          },
          {
            "view_only": true,
            "from": "token_state_in",
            "to": "add1",
            "label": "skip x",
            "tone": "skip",
            "connection": {
              "title": "First residual skip",
              "role": "residual identity path",
              "inside": "The original token state bypasses the attention branch and is added to the gated attention update."
            }
          },
          {
            "view_only": true,
            "from": "add1",
            "to": "norm2",
            "label": "x1",
            "connection": {
              "title": "Post-attention state",
              "role": "second branch input",
              "inside": "The output of the first residual add becomes the input to the MLP residual branch."
            }
          },
          {
            "view_only": true,
            "from": "norm2",
            "to": "scale_shift2",
            "label": "norm2",
            "connection": {
              "title": "Normalized post-attention tokens",
              "role": "normalized branch input",
              "inside": "The post-attention token state is LayerNorm-normalized before the second adaptive shift and scale."
            }
          },
          {
            "view_only": true,
            "from": "mlp_params",
            "to": "scale_shift2",
            "label": "shift2, scale2",
            "tone": "conditioning",
            "connection": {
              "title": "Second adaLN shift and scale",
              "role": "MLP-branch modulation",
              "inside": "shift2 and scale2 are broadcast over tokens as (1 + scale2) * LayerNorm(x1) + shift2 before the pointwise MLP branch."
            }
          },
          {
            "view_only": true,
            "from": "scale_shift2",
            "to": "mlp_branch",
            "label": "modulated x1",
            "connection": {
              "title": "Modulated tokens into MLP",
              "role": "MLP input",
              "inside": "The second shifted and scaled token stream enters the pointwise feed-forward branch."
            }
          },
          {
            "view_only": true,
            "from": "mlp_branch",
            "to": "gate2",
            "label": "mlp",
            "connection": {
              "title": "MLP branch output",
              "role": "residual branch value",
              "inside": "The pointwise MLP output is multiplied by gate2 before the second residual add."
            }
          },
          {
            "view_only": true,
            "from": "mlp_params",
            "to": "gate2",
            "label": "gate2",
            "tone": "conditioning",
            "connection": {
              "title": "Second residual gate",
              "role": "zero-initialized branch gate",
              "inside": "gate2 is another output of the jointly zero-initialized modulation linear, so the MLP branch initially contributes nothing."
            }
          },
          {
            "view_only": true,
            "from": "gate2",
            "to": "add2",
            "label": "gate2*mlp",
            "connection": {
              "title": "Gated MLP update",
              "role": "gated residual update",
              "inside": "The gated MLP output is the update term for the second residual add."
            }
          },
          {
            "view_only": true,
            "from": "add1",
            "to": "add2",
            "label": "skip x1",
            "tone": "skip",
            "connection": {
              "title": "Second residual skip",
              "role": "residual identity path",
              "inside": "The post-attention state bypasses the MLP branch and is added to the gated MLP update."
            }
          },
          {
            "view_only": true,
            "from": "add2",
            "to": "token_state_out",
            "label": "x out",
            "connection": {
              "title": "Updated tokens",
              "role": "mutable output",
              "inside": "The block returns tokens with the same shape and ownership; at initialization both gates are zero, so the whole block starts as an identity map."
            }
          }
        ]
      }
    ]
  }
};
