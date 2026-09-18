export const manifestIndex = [
  {
    "id": "generic",
    "name": "Generic Feature Refinement",
    "role": "reference",
    "file": "manifest-generic.js"
  },
  {
    "id": "dit",
    "name": "Diffusion Transformer (DiT)",
    "role": "architecture",
    "file": "manifest-dit.js"
  },
  {
    "id": "af2",
    "name": "AlphaFold 2 Monomer",
    "role": "architecture",
    "file": "manifest-af2.js"
  },
  {
    "id": "af3_pairformer",
    "name": "AlphaFold 3 Pairformer",
    "role": "architecture",
    "file": "manifest-af3_pairformer.js"
  },
  {
    "id": "genie2",
    "name": "Genie 2 Protein Backbone Diffusion",
    "role": "architecture",
    "file": "manifest-genie2.js"
  },
  {
    "id": "genie3",
    "name": "Genie 3 Atom-Aware Protein Diffusion",
    "role": "architecture",
    "file": "manifest-genie3.js"
  },
  {
    "id": "standard_block_af3_msa_module",
    "standardBlockId": "af3_msa_module",
    "name": "AlphaFold 3 MSA Module",
    "kind": "composite_msa_encoder",
    "status": "review",
    "role": "standard_block",
    "file": "manifest-standard-block-af3_msa_module.js"
  },
  {
    "id": "standard_block_invariant_point_attention",
    "standardBlockId": "invariant_point_attention",
    "name": "Invariant Point Attention",
    "kind": "attention",
    "status": "review",
    "role": "standard_block",
    "file": "manifest-standard-block-invariant_point_attention.js"
  },
  {
    "id": "standard_block_pair_biased_attention",
    "standardBlockId": "pair_biased_attention",
    "name": "Pair-Biased Attention",
    "kind": "attention",
    "status": "review",
    "role": "standard_block",
    "file": "manifest-standard-block-pair_biased_attention.js"
  },
  {
    "id": "standard_block_pair_transition",
    "standardBlockId": "pair_transition",
    "name": "Pointwise Pair Transition",
    "kind": "feed_forward",
    "status": "review",
    "role": "standard_block",
    "file": "manifest-standard-block-pair_transition.js"
  },
  {
    "id": "standard_block_single_to_pair_endpoint_update",
    "standardBlockId": "single_to_pair_endpoint_update",
    "name": "Single-to-Pair Endpoint Update",
    "kind": "communication",
    "status": "review",
    "role": "standard_block",
    "file": "manifest-standard-block-single_to_pair_endpoint_update.js"
  },
  {
    "id": "standard_block_structure_transition",
    "standardBlockId": "structure_transition",
    "name": "Structure Transition",
    "kind": "feed_forward",
    "status": "review",
    "role": "standard_block",
    "file": "manifest-standard-block-structure_transition.js"
  }
];
export const comparisonIndex = {
  "schemaVersion": "comparison-registry-v0.1",
  "compilerVersion": "architecture-comparison-compiler-v0.1",
  "sourceYaml": "../../comparisons/index.yaml",
  "build": {
    "generator": "architecture-manifest-builder-v0.5.0",
    "inputDigests": {
      "comparisons/index.yaml": "54059100527b7b47f0096e90227ce5668a3d2693e0b48c8af971a200feed97e4",
      "comparisons/genie3-reduced-vs-full-ipa.yaml": "402bf54881eeb6b38d20b3049f839fbd1bdbfc35812e17909a7e63d9794dd4ba",
      "references/bibliography.yaml": "d1357b03ba69c1360b917bc8ddf01387ddc7b14307b81ed29ba993a026ecdfc5",
      "architectures/generic-feature-refinement.yaml": "856e34131dc78dd2454df9b0dc3ad3d0adff67c5a7f9dee5809cacf311722d68",
      "views/generic-semantic-zoom.view.yaml": "2212d81c8217db03c68fa7d59f44dc36e55052503d8d503b3386bded040b5714",
      "standard_blocks/pair-biased-attention.yaml": "3c6be1ec47623fa320eb6eace772216f41014d4bf14765b8ff52b1602cf26fb7",
      "standard_blocks/per-item-adaln-conditioning.yaml": "544bca1c4d238825bfe6e389fe0409e64b27726b54f737e86021a0dc078987f9",
      "standard_blocks/additive-conditioning.yaml": "5638ead7cbb2df6729e58393703d3e35b6e480b3ba42c657312dc6581bb032f7",
      "architectures/diffusion-transformer.yaml": "62b1a3f47c1b0891d242c49ca269a5f1e856672fbd080a07e7eebf718a8a8965",
      "views/dit-semantic-zoom.view.yaml": "ebca6fefd29f612792b8957db940cc3237132140722d52b76999194823dbc5eb",
      "standard_blocks/adaln-zero-conditioning.yaml": "33cd9afbe3b6867c4ce328c25d41a33210a5e387a195a93b19bc8696ee9e0b32",
      "standard_blocks/sinusoidal-timestep-embedding.yaml": "8cb2d467fe967e9a83da657ef85940406be89836de502d24cb7f557152763039",
      "architectures/alphafold2.yaml": "a754a17dc83303c7dff50f6925771b01dc51d237dae382476b8bf87fbead77fe",
      "views/alphafold2-semantic-zoom.view.yaml": "6b317c6d224a7e3b8416839247c0c12d6b9e0cd34d859475f4529a939d51fe8e",
      "architectures/alphafold3-pairformer.yaml": "0e9baf415f97e87da42420e5fde1916ff0563839695638aea1c159c09d20419d",
      "views/alphafold3-pairformer-semantic-zoom.view.yaml": "3978a4c18d06c27104497dce4c349e90e65ea95f684ddf878f22c323badc440b",
      "standard_blocks/af3-msa-module.yaml": "333b5ac4e9aa09e25a22d140c14fbd6aabb4eb7d8b752b71cf360c386745aac0",
      "architectures/genie2.yaml": "725930376f10394d23a45af76260d053a152d6353fe883c032f78a564eb31dcf",
      "views/genie2-semantic-zoom.view.yaml": "2d9e2702ceee42eb2ff262ae8a83958c2e75bf0878ad46b001b41c1c37e6fde0",
      "standard_blocks/invariant-point-attention.yaml": "aaa9ed976785eec2efb33c745afa06f35576358e8b758741dfde9d3d55c49fb6",
      "architectures/genie3.yaml": "a4f4ba63889e5a1395c313a88cea43b49b2cde31c1cac493796f82bbfee00c7f",
      "views/genie3-semantic-zoom.view.yaml": "98612efa24a027c3ba8e22992e36d9564e60e8319d3b348a0c751082350d95f0",
      "standard_blocks/structure-transition.yaml": "2708baf8035a8e77ab3e3da3bf2f067225757a813743efb90c72ac0f0c77b723",
      "standard_blocks/single-to-pair-endpoint-update.yaml": "d8ff8b5a5a9faa2d0af710afcc20d7094b1a9107238b402a9dc5f290642e7606",
      "standard_blocks/pair-transition.yaml": "67972606f8b0da22bce83da0c93d37075755df487fe100865ab7fc98e5941bd1"
    }
  },
  "items": [
    {
      "schemaVersion": "architecture-comparison-v0.1",
      "compilerVersion": "architecture-comparison-compiler-v0.1",
      "id": "genie3_reduced_vs_full_ipa",
      "title": "Genie 3 Reduced Attention vs Full Frame-Aware IPA",
      "status": "review",
      "question": "What does Genie 3's reduced latent attention retain, change, and remove relative to full frame-aware IPA?",
      "summary": "Both attention cores use scalar attention, pair-logit bias, and attention-weighted pair-value aggregation, and both end at a projected single-state delta. Full IPA additionally forms frame-aware point logits and point outputs; the reduced latent attention omits that geometry.",
      "subjects": {
        "primary": {
          "label": "Reduced latent attention",
          "sourceSet": "genie3",
          "subjectRef": "block_instances.latent_reduced_pair_attention",
          "boardRef": "genie3_reduced_pair_attention_internals",
          "boardTitle": "Genie 3 Reduced Pair Attention Internals",
          "kind": "block_instance",
          "standardBlockId": "pair_biased_attention",
          "standardBlockRef": "standard_blocks/pair-biased-attention.yaml",
          "variant": "pair_values_attention_delta",
          "variantLabel": "Reduced pair attention delta",
          "conformance": "reduced",
          "differenceSummary": "Genie 3 removes frame-aware point terms and keeps pair-logit bias plus attention-weighted pair-value aggregation. The residual add, normalization, transition, and final masking are modeled as the surrounding latent-block wrapper."
        },
        "counterpart": {
          "label": "Full frame-aware IPA",
          "sourceSet": "genie3",
          "subjectRef": "block_instances.structure_ipa",
          "boardRef": "genie3_ipa_internals",
          "boardTitle": "Genie 3 Invariant Point Attention Internals",
          "kind": "block_instance",
          "standardBlockId": "invariant_point_attention",
          "standardBlockRef": "standard_blocks/invariant-point-attention.yaml",
          "variant": "full_ipa",
          "variantLabel": "Full frame-aware IPA",
          "conformance": "exact"
        }
      },
      "groups": [
        {
          "id": "shared",
          "label": "Shared attention path",
          "description": "Scalar attention and pair-conditioned operations that play the same algorithmic role in both implementations.",
          "alignmentRefs": [
            "alignments.scalar_projection",
            "alignments.scalar_logits",
            "alignments.pair_bias",
            "alignments.logit_mask_and_softmax",
            "alignments.scalar_value_aggregation",
            "alignments.pair_value_aggregation",
            "alignments.output_fusion"
          ]
        },
        {
          "id": "full_only",
          "label": "Full IPA only",
          "description": "Frame-aware point operations present only in the full structure-decoder IPA path.",
          "alignmentRefs": [
            "alignments.frame_aware_point_path"
          ]
        }
      ],
      "alignments": [
        {
          "id": "scalar_projection",
          "groupRef": "groups.shared",
          "label": "Scalar query, key, and value projection",
          "relationship": "analogous",
          "explanation": "Both steps derive scalar queries, keys, and values from the incoming single state, although the concrete projection modules and dimensions belong to their respective implementations.",
          "primaryFacts": [
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.project_qkv",
              "kind": "step",
              "label": "Project Q, K, and V",
              "nodeIds": [
                "project_qkv"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.project_qkv",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            }
          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.project_scalar_terms",
              "kind": "step",
              "label": "Project scalar Q/K/V",
              "nodeIds": [
                "project_scalar_terms"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_scalar_terms",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "scalar_logits",
          "groupRef": "groups.shared",
          "label": "Scalar attention logits",
          "relationship": "analogous",
          "explanation": "Both implementations form query-key scalar logits before adding non-scalar attention terms.",
          "primaryFacts": [
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.scalar_logits",
              "kind": "step",
              "label": "Form query-key logits",
              "nodeIds": [
                "scalar_logits_step"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.scalar_logits",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            }
          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.scalar_attention_logits",
              "kind": "step",
              "label": "Form scalar logits",
              "nodeIds": [
                "scalar_attention_logits"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.scalar_attention_logits",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "pair_bias",
          "groupRef": "groups.shared",
          "label": "Pair representation biases attention",
          "relationship": "equivalent",
          "explanation": "Both implementations project the pair representation into a per-head additive attention-logit bias.",
          "primaryFacts": [
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.project_pair_bias",
              "kind": "step",
              "label": "Project pair bias",
              "nodeIds": [
                "project_pair_bias"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.project_pair_bias",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            }
          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.project_pair_bias",
              "kind": "step",
              "label": "Project pair bias",
              "nodeIds": [
                "project_pair_bias"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_pair_bias",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "logit_mask_and_softmax",
          "groupRef": "groups.shared",
          "label": "Compose, mask, and normalize logits",
          "relationship": "changed",
          "explanation": "Both paths add pair bias, apply the validity mask, and normalize over keys, but full IPA also adds its point-distance term during logit composition.",
          "primaryFacts": [
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.combine_logits",
              "kind": "step",
              "label": "Add pair bias",
              "nodeIds": [
                "combine_logits"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.combine_logits",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            },
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.apply_attention_mask",
              "kind": "step",
              "label": "Apply attention mask",
              "nodeIds": [
                "apply_attention_mask"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.apply_attention_mask",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            },
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.softmax_attention_masked",
              "kind": "step",
              "label": "Normalize masked attention",
              "nodeIds": [
                "softmax_attention_masked"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.softmax_attention_masked",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            }
          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.combine_and_mask_logits",
              "kind": "step",
              "label": "Combine logits and apply mask",
              "nodeIds": [
                "combine_and_mask_logits"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
              "blockInstanceRef": "block_instances.structure_ipa"
            },
            {
              "factRef": "block_instances.structure_ipa.steps.softmax_attention",
              "kind": "step",
              "label": "Normalize over keys",
              "nodeIds": [
                "softmax_attention"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.softmax_attention",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "scalar_value_aggregation",
          "groupRef": "groups.shared",
          "label": "Aggregate scalar values",
          "relationship": "analogous",
          "explanation": "Both paths use the normalized attention weights to aggregate scalar values into a per-token context.",
          "primaryFacts": [
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.aggregate_scalar_values",
              "kind": "step",
              "label": "Aggregate scalar values",
              "nodeIds": [
                "aggregate_scalar_values"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.aggregate_scalar_values",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            }
          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.aggregate_scalar_values",
              "kind": "step",
              "label": "Aggregate scalar values",
              "nodeIds": [
                "aggregate_scalar_values"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.aggregate_scalar_values",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "pair_value_aggregation",
          "groupRef": "groups.shared",
          "label": "Attention-weighted pair-value aggregation",
          "relationship": "equivalent",
          "explanation": "Both paths use the same attention weights to aggregate the pair representation as an output value stream, not only as a logit bias.",
          "primaryFacts": [
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.aggregate_pair_values",
              "kind": "step",
              "label": "Attention-weighted pair-value aggregation",
              "nodeIds": [
                "aggregate_pair_values"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.aggregate_pair_values",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            }
          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.aggregate_pair_values",
              "kind": "step",
              "label": "Attention-weighted pair-value aggregation",
              "nodeIds": [
                "aggregate_pair_values"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.aggregate_pair_values",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "output_fusion",
          "groupRef": "groups.shared",
          "label": "Fuse attention outputs",
          "relationship": "changed",
          "explanation": "Reduced attention fuses scalar and pair contexts, whereas full IPA also fuses the frame-aware local point context.",
          "primaryFacts": [
            {
              "factRef": "block_instances.latent_reduced_pair_attention.steps.project_reduced_output",
              "kind": "step",
              "label": "Fuse scalar and pair contexts",
              "nodeIds": [
                "project_reduced_output"
              ],
              "templateFactRef": "standard_blocks.pair_biased_attention.steps.project_reduced_output",
              "blockInstanceRef": "block_instances.latent_reduced_pair_attention"
            }
          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.project_ipa_delta",
              "kind": "step",
              "label": "Concatenate + project",
              "nodeIds": [
                "project_ipa_delta"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_ipa_delta",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "frame_aware_point_path",
          "groupRef": "groups.full_only",
          "label": "Frame-aware point attention",
          "relationship": "counterpart_only",
          "explanation": "Only full IPA projects points, expresses them through token frames, uses invariant point distances in the logits, and returns aggregated point values to the query frame.",
          "primaryFacts": [

          ],
          "counterpartFacts": [
            {
              "factRef": "block_instances.structure_ipa.steps.project_local_points",
              "kind": "step",
              "label": "Project local Q/K/V points",
              "nodeIds": [
                "project_local_points"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_local_points",
              "blockInstanceRef": "block_instances.structure_ipa"
            },
            {
              "factRef": "block_instances.structure_ipa.steps.transform_points_to_global",
              "kind": "step",
              "label": "Express points in global frame",
              "nodeIds": [
                "transform_points_to_global"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.transform_points_to_global",
              "blockInstanceRef": "block_instances.structure_ipa"
            },
            {
              "factRef": "block_instances.structure_ipa.steps.point_distance_logits",
              "kind": "step",
              "label": "Form point-distance logits",
              "nodeIds": [
                "point_distance_logits"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.point_distance_logits",
              "blockInstanceRef": "block_instances.structure_ipa"
            },
            {
              "factRef": "block_instances.structure_ipa.steps.aggregate_global_points",
              "kind": "step",
              "label": "Aggregate value points",
              "nodeIds": [
                "aggregate_global_points"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.aggregate_global_points",
              "blockInstanceRef": "block_instances.structure_ipa"
            },
            {
              "factRef": "block_instances.structure_ipa.steps.return_points_to_local_frame",
              "kind": "step",
              "label": "Return points to query frame",
              "nodeIds": [
                "return_points_to_local_frame"
              ],
              "templateFactRef": "standard_blocks.invariant_point_attention.steps.return_points_to_local_frame",
              "blockInstanceRef": "block_instances.structure_ipa"
            }
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        }
      ],
      "findings": [
        {
          "id": "pair_path_is_retained",
          "statement": "Reduced attention retains both pair-logit bias and attention-weighted pair-value aggregation.",
          "alignmentRefs": [
            "alignments.pair_bias",
            "alignments.pair_value_aggregation"
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        },
        {
          "id": "geometry_is_removed",
          "statement": "The reduction removes the complete frame-aware point path rather than merely simplifying its visualization.",
          "alignmentRefs": [
            "alignments.frame_aware_point_path",
            "alignments.output_fusion"
          ],
          "evidence": {
            "status": "confirmed_from_code",
            "refs": [
              {
                "source_ref": "genie3_ipa_code",
                "role": "primary_implementation_evidence",
                "locator": "ReducedInvariantPointAttention.forward"
              },
              {
                "source_ref": "genie3_ipa_code",
                "role": "counterpart_implementation_evidence",
                "locator": "InvariantPointAttention.forward"
              }
            ]
          }
        }
      ],
      "openQuestions": [

      ],
      "sourceYaml": "../../comparisons/genie3-reduced-vs-full-ipa.yaml"
    }
  ]
};
