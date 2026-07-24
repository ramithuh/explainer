export const manifest = {
  "schemaVersion": "standard-block-browser-manifest-v0.1",
  "build": {
    "generator": "architecture-manifest-builder-v0.5.0",
    "inputDigests": {
      "references/bibliography.yaml": "82f709e900c8a4856e4b834e7d3d7269313b9e4aa08f6bea91d75c33ef974bdd",
      "standard_blocks/single-to-pair-endpoint-update.yaml": "d8ff8b5a5a9faa2d0af710afcc20d7094b1a9107238b402a9dc5f290642e7606"
    }
  },
  "architecture": {
    "schemaVersion": "standard-block-v0.3",
    "id": "standard_block_single_to_pair_endpoint_update",
    "name": "Single-to-Pair Endpoint Update",
    "family": "standard_component",
    "status": "review",
    "taskModes": [

    ],
    "sourceYaml": "../../standard_blocks/single-to-pair-endpoint-update.yaml",
    "sources": [

    ],
    "decomposition": {
      "status": "leaf"
    },
    "coverage": {
    },
    "modules": [

    ],
    "blockInstances": [

    ],
    "representations": [

    ],
    "valueSites": [

    ],
    "valueSiteInterfaces": {
    },
    "execution": {
    },
    "stateSemantics": {
    },
    "stateSemanticsBySite": {
    },
    "conditioning": [

    ],
    "scaleTransitions": [

    ],
    "trainingInference": {
    },
    "relations": [

    ],
    "claims": [

    ],
    "openQuestions": [

    ]
  },
  "bibliography": {
    "schemaVersion": "bibliography-v0.1",
    "sourceYaml": "../../references/bibliography.yaml",
    "sources": [
      {
        "id": "dit_2022",
        "kind": "paper",
        "title": "Scalable Diffusion Models with Transformers",
        "authors": [
          "William Peebles",
          "Saining Xie"
        ],
        "year": 2022,
        "identifiers": {
          "arxiv": "2212.09748"
        },
        "url": "https://arxiv.org/abs/2212.09748",
        "href": "https://arxiv.org/abs/2212.09748"
      },
      {
        "id": "dit_models_code",
        "kind": "code",
        "title": "DiT model implementation",
        "organization": "facebookresearch",
        "repository": "facebookresearch/DiT",
        "revision": "ed81ce2229091fd4ecc9a223645f95cf379d582b",
        "path": "facebookresearch/DiT/models.py",
        "url": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/models.py",
        "href": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/models.py"
      },
      {
        "id": "dit_sample_code",
        "kind": "code",
        "title": "DiT sampling entry point",
        "organization": "facebookresearch",
        "repository": "facebookresearch/DiT",
        "revision": "ed81ce2229091fd4ecc9a223645f95cf379d582b",
        "path": "facebookresearch/DiT/sample.py",
        "url": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/sample.py",
        "href": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/sample.py"
      },
      {
        "id": "dit_gaussian_diffusion_code",
        "kind": "code",
        "title": "DiT Gaussian diffusion implementation",
        "organization": "facebookresearch",
        "repository": "facebookresearch/DiT",
        "revision": "ed81ce2229091fd4ecc9a223645f95cf379d582b",
        "path": "facebookresearch/DiT/diffusion/gaussian_diffusion.py",
        "url": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/diffusion/gaussian_diffusion.py",
        "href": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/diffusion/gaussian_diffusion.py"
      },
      {
        "id": "dit_train_code",
        "kind": "code",
        "title": "DiT training entry point",
        "organization": "facebookresearch",
        "repository": "facebookresearch/DiT",
        "revision": "ed81ce2229091fd4ecc9a223645f95cf379d582b",
        "path": "facebookresearch/DiT/train.py",
        "url": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/train.py",
        "href": "https://github.com/facebookresearch/DiT/blob/ed81ce2229091fd4ecc9a223645f95cf379d582b/train.py"
      },
      {
        "id": "af2_2021",
        "kind": "paper",
        "title": "Highly accurate protein structure prediction with AlphaFold",
        "authors": [
          "John Jumper",
          "Richard Evans",
          "Alexander Pritzel",
          "Tim Green",
          "Michael Figurnov",
          "Olaf Ronneberger",
          "Kathryn Tunyasuvunakool",
          "Russ Bates",
          "Augustin Zidek",
          "Anna Potapenko",
          "Alex Bridgland",
          "Clemens Meyer",
          "Simon A. A. Kohl",
          "Andrew J. Ballard",
          "Andrew Cowie",
          "Bernardino Romera-Paredes",
          "Stanislav Nikolov",
          "Rishub Jain",
          "Jonas Adler",
          "Trevor Back",
          "Stig Petersen",
          "David Reiman",
          "Ellen Clancy",
          "Michal Zielinski",
          "Martin Steinegger",
          "Michalina Pacholska",
          "Tamas Berghammer",
          "Sebastian Bodenstein",
          "David Silver",
          "Oriol Vinyals",
          "Andrew W. Senior",
          "Koray Kavukcuoglu",
          "Pushmeet Kohli",
          "Demis Hassabis"
        ],
        "year": 2021,
        "identifiers": {
          "doi": "10.1038/s41586-021-03819-2"
        },
        "url": "https://www.nature.com/articles/s41586-021-03819-2",
        "href": "https://www.nature.com/articles/s41586-021-03819-2"
      },
      {
        "id": "af2_2021_supplement",
        "kind": "paper",
        "title": "Highly accurate protein structure prediction with AlphaFold: Supplementary Information",
        "authors": [
          "John Jumper",
          "Richard Evans",
          "Alexander Pritzel",
          "Tim Green",
          "Michael Figurnov",
          "Olaf Ronneberger",
          "Kathryn Tunyasuvunakool",
          "Russ Bates",
          "Augustin Zidek",
          "Anna Potapenko",
          "Alex Bridgland",
          "Clemens Meyer",
          "Simon A. A. Kohl",
          "Andrew J. Ballard",
          "Andrew Cowie",
          "Bernardino Romera-Paredes",
          "Stanislav Nikolov",
          "Rishub Jain",
          "Jonas Adler",
          "Trevor Back",
          "Stig Petersen",
          "David Reiman",
          "Ellen Clancy",
          "Michal Zielinski",
          "Martin Steinegger",
          "Michalina Pacholska",
          "Tamas Berghammer",
          "Sebastian Bodenstein",
          "David Silver",
          "Oriol Vinyals",
          "Andrew W. Senior",
          "Koray Kavukcuoglu",
          "Pushmeet Kohli",
          "Demis Hassabis"
        ],
        "year": 2021,
        "identifiers": {
          "doi": "10.1038/s41586-021-03819-2",
          "component": "supplementary_information"
        },
        "url": "https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-021-03819-2/MediaObjects/41586_2021_3819_MOESM1_ESM.pdf",
        "href": "https://static-content.springer.com/esm/art%3A10.1038%2Fs41586-021-03819-2/MediaObjects/41586_2021_3819_MOESM1_ESM.pdf"
      },
      {
        "id": "af2_runner_code",
        "kind": "code",
        "title": "AlphaFold prediction and ranking entry point",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold",
        "revision": "09ed0c5d5a32d794ed9f78b70906cbeaff0ef439",
        "path": "run_alphafold.py",
        "url": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/run_alphafold.py",
        "href": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/run_alphafold.py"
      },
      {
        "id": "af2_data_pipeline_code",
        "kind": "code",
        "title": "AlphaFold monomer input feature pipeline",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold",
        "revision": "09ed0c5d5a32d794ed9f78b70906cbeaff0ef439",
        "path": "alphafold/data/pipeline.py",
        "url": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/data/pipeline.py",
        "href": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/data/pipeline.py"
      },
      {
        "id": "af2_model_wrapper_code",
        "kind": "code",
        "title": "AlphaFold model runner and monomer selection wrapper",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold",
        "revision": "09ed0c5d5a32d794ed9f78b70906cbeaff0ef439",
        "path": "alphafold/model/model.py",
        "url": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/model.py",
        "href": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/model.py"
      },
      {
        "id": "af2_model_code",
        "kind": "code",
        "title": "AlphaFold monomer model and recycling implementation",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold",
        "revision": "09ed0c5d5a32d794ed9f78b70906cbeaff0ef439",
        "path": "alphafold/model/modules.py",
        "url": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/modules.py",
        "href": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/modules.py"
      },
      {
        "id": "af2_structure_code",
        "kind": "code",
        "title": "AlphaFold monomer structure module",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold",
        "revision": "09ed0c5d5a32d794ed9f78b70906cbeaff0ef439",
        "path": "alphafold/model/folding.py",
        "url": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/folding.py",
        "href": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/folding.py"
      },
      {
        "id": "af2_config_code",
        "kind": "code",
        "title": "AlphaFold model configuration",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold",
        "revision": "09ed0c5d5a32d794ed9f78b70906cbeaff0ef439",
        "path": "alphafold/model/config.py",
        "url": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/config.py",
        "href": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/model/config.py"
      },
      {
        "id": "af2_relax_code",
        "kind": "code",
        "title": "AlphaFold Amber relaxation wrapper",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold",
        "revision": "09ed0c5d5a32d794ed9f78b70906cbeaff0ef439",
        "path": "alphafold/relax/relax.py",
        "url": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/relax/relax.py",
        "href": "https://github.com/google-deepmind/alphafold/blob/09ed0c5d5a32d794ed9f78b70906cbeaff0ef439/alphafold/relax/relax.py"
      },
      {
        "id": "af3_2024",
        "kind": "paper",
        "title": "Accurate structure prediction of biomolecular interactions with AlphaFold 3",
        "authors": [
          "Josh Abramson",
          "Jonas Adler",
          "Jack Dunger",
          "Richard Evans",
          "Tim Green",
          "Alexander Pritzel",
          "Olaf Ronneberger",
          "Lindsay Willmore",
          "Andrew J. Ballard",
          "Joshua Bambrick",
          "Sebastian W. Bodenstein",
          "David A. Evans",
          "Chia-Chun Hung",
          "Michael O'Neill",
          "David Reiman",
          "Kathryn Tunyasuvunakool",
          "Zachary Wu",
          "Akvile Zemgulyte",
          "Victor Bapst",
          "Pushmeet Kohli",
          "Max Jaderberg",
          "Demis Hassabis",
          "John M. Jumper"
        ],
        "year": 2024,
        "identifiers": {
          "doi": "10.1038/s41586-024-07487-w"
        },
        "url": "https://www.nature.com/articles/s41586-024-07487-w",
        "href": "https://www.nature.com/articles/s41586-024-07487-w"
      },
      {
        "id": "af3_pairformer_code",
        "kind": "code",
        "title": "AlphaFold 3 Pairformer iteration and pair-update implementation",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold3",
        "revision": "f3e86f27dfac16559d16f470bb2f9323eb357f1f",
        "path": "src/alphafold3/model/network/modules.py",
        "url": "https://github.com/google-deepmind/alphafold3/blob/f3e86f27dfac16559d16f470bb2f9323eb357f1f/src/alphafold3/model/network/modules.py",
        "href": "https://github.com/google-deepmind/alphafold3/blob/f3e86f27dfac16559d16f470bb2f9323eb357f1f/src/alphafold3/model/network/modules.py"
      },
      {
        "id": "af3_evoformer_code",
        "kind": "code",
        "title": "AlphaFold 3 trunk and Pairformer stack configuration",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold3",
        "revision": "f3e86f27dfac16559d16f470bb2f9323eb357f1f",
        "path": "src/alphafold3/model/network/evoformer.py",
        "url": "https://github.com/google-deepmind/alphafold3/blob/f3e86f27dfac16559d16f470bb2f9323eb357f1f/src/alphafold3/model/network/evoformer.py",
        "href": "https://github.com/google-deepmind/alphafold3/blob/f3e86f27dfac16559d16f470bb2f9323eb357f1f/src/alphafold3/model/network/evoformer.py"
      },
      {
        "id": "af3_self_attention_code",
        "kind": "code",
        "title": "AlphaFold 3 single self-attention implementation",
        "organization": "Google DeepMind",
        "repository": "google-deepmind/alphafold3",
        "revision": "f3e86f27dfac16559d16f470bb2f9323eb357f1f",
        "path": "src/alphafold3/model/network/diffusion_transformer.py",
        "url": "https://github.com/google-deepmind/alphafold3/blob/f3e86f27dfac16559d16f470bb2f9323eb357f1f/src/alphafold3/model/network/diffusion_transformer.py",
        "href": "https://github.com/google-deepmind/alphafold3/blob/f3e86f27dfac16559d16f470bb2f9323eb357f1f/src/alphafold3/model/network/diffusion_transformer.py"
      },
      {
        "id": "genie2_2024",
        "kind": "paper",
        "title": "Out of Many, One: Designing and Scaffolding Proteins at the Scale of the Structural Universe with Genie 2",
        "authors": [
          "Yeqing Lin",
          "Minji Lee",
          "Zhao Zhang",
          "Mohammed AlQuraishi"
        ],
        "year": 2024,
        "identifiers": {
          "arxiv": "2405.15489"
        },
        "url": "https://arxiv.org/abs/2405.15489",
        "href": "https://arxiv.org/abs/2405.15489"
      },
      {
        "id": "genie2_model_code",
        "kind": "code",
        "title": "Genie 2 denoiser composition",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/model/model.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/model.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/model.py"
      },
      {
        "id": "genie2_single_feature_code",
        "kind": "code",
        "title": "Genie 2 single-feature network",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/model/single_feature_net.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/single_feature_net.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/single_feature_net.py"
      },
      {
        "id": "genie2_pair_feature_code",
        "kind": "code",
        "title": "Genie 2 pair-feature network",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/model/pair_feature_net.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/pair_feature_net.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/pair_feature_net.py"
      },
      {
        "id": "genie2_pair_transform_code",
        "kind": "code",
        "title": "Genie 2 pair-transform network",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/model/pair_transform_net.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/pair_transform_net.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/pair_transform_net.py"
      },
      {
        "id": "genie2_structure_code",
        "kind": "code",
        "title": "Genie 2 equivariant structure network",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/model/structure_net.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/structure_net.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/structure_net.py"
      },
      {
        "id": "genie2_ipa_code",
        "kind": "code",
        "title": "Genie 2 invariant point attention module",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/model/modules/invariant_point_attention.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/modules/invariant_point_attention.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/model/modules/invariant_point_attention.py"
      },
      {
        "id": "genie2_sampler_code",
        "kind": "code",
        "title": "Genie 2 reverse-diffusion sampler",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/sampler/base.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/sampler/base.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/sampler/base.py"
      },
      {
        "id": "genie2_scaffold_sampler_code",
        "kind": "code",
        "title": "Genie 2 motif-scaffolding sampler",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/sampler/scaffold.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/sampler/scaffold.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/sampler/scaffold.py"
      },
      {
        "id": "genie2_training_code",
        "kind": "code",
        "title": "Genie 2 diffusion training step",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/diffusion/genie.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/diffusion/genie.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/diffusion/genie.py"
      },
      {
        "id": "genie2_config_code",
        "kind": "code",
        "title": "Genie 2 model and diffusion configuration",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "genie/config.py",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/config.py",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/genie/config.py"
      },
      {
        "id": "genie2_base_config",
        "kind": "code",
        "title": "Genie 2 released base-checkpoint configuration",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie2",
        "revision": "9a954578f7b5a39552545eebc6d4794447794c87",
        "path": "results/base/configuration",
        "url": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/results/base/configuration",
        "href": "https://github.com/aqlaboratory/genie2/blob/9a954578f7b5a39552545eebc6d4794447794c87/results/base/configuration"
      },
      {
        "id": "genie3_2026",
        "kind": "paper",
        "title": "Fast and Ultra-Capable Protein Design: Advancing the Frontier Through Atomistic SE(3)-Equivariance with Genie 3",
        "authors": [
          "Yeqing Lin",
          "Minji Lee",
          "Siddharth Vermani",
          "Yuwei Jiang",
          "Robbe De Cooman",
          "Bryan Spetko",
          "Mohammed AlQuraishi"
        ],
        "year": 2026,
        "identifiers": {
          "doi": "10.64898/2026.05.01.722168"
        },
        "url": "https://www.biorxiv.org/content/10.64898/2026.05.01.722168v1",
        "href": "https://www.biorxiv.org/content/10.64898/2026.05.01.722168v1"
      },
      {
        "id": "genie3_model_code",
        "kind": "code",
        "title": "Genie 3 V1 denoiser composition",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/implementation/v1.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/implementation/v1.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/implementation/v1.py"
      },
      {
        "id": "genie3_single_feature_code",
        "kind": "code",
        "title": "Genie 3 V1 single-feature embedder",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/embedder/single/v1.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/embedder/single/v1.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/embedder/single/v1.py"
      },
      {
        "id": "genie3_pair_feature_code",
        "kind": "code",
        "title": "Genie 3 V1 pair-feature embedder",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/embedder/pair/v1.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/embedder/pair/v1.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/embedder/pair/v1.py"
      },
      {
        "id": "genie3_latent_transformer_code",
        "kind": "code",
        "title": "Genie 3 latent transformer",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/latent/transformer.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/latent/transformer.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/latent/transformer.py"
      },
      {
        "id": "genie3_structure_code",
        "kind": "code",
        "title": "Genie 3 equivariant structure decoder",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/structure_net.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/structure_net.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/structure_net.py"
      },
      {
        "id": "genie3_ipa_code",
        "kind": "code",
        "title": "Genie 3 full and reduced invariant point attention modules",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/module/invariant_point_attention.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/module/invariant_point_attention.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/module/invariant_point_attention.py"
      },
      {
        "id": "genie3_transition_code",
        "kind": "code",
        "title": "Genie 3 transition modules",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/module/transition.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/module/transition.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/module/transition.py"
      },
      {
        "id": "genie3_sequence_code",
        "kind": "code",
        "title": "Genie 3 optional sequence head",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/sequence_net.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/sequence_net.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/sequence_net.py"
      },
      {
        "id": "genie3_geometry_code",
        "kind": "code",
        "title": "Genie 3 Frenet frame construction",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/utils/geo_utils.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/utils/geo_utils.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/utils/geo_utils.py"
      },
      {
        "id": "genie3_feature_code",
        "kind": "code",
        "title": "Genie 3 protein tokenization and conditioning features",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/utils/feat_utils.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/utils/feat_utils.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/utils/feat_utils.py"
      },
      {
        "id": "genie3_feature_schema_code",
        "kind": "code",
        "title": "Genie 3 feature dictionary registry",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/np/features.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/np/features.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/np/features.py"
      },
      {
        "id": "genie3_sample_dataset_registry_code",
        "kind": "code",
        "title": "Genie 3 generation task-source router",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/data/sample_dataset/registry.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/data/sample_dataset/registry.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/data/sample_dataset/registry.py"
      },
      {
        "id": "genie3_diffusion_code",
        "kind": "code",
        "title": "Genie 3 DDPM training objective",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/diffusion/ddpm.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/diffusion/ddpm.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/diffusion/ddpm.py"
      },
      {
        "id": "genie3_sampler_code",
        "kind": "code",
        "title": "Genie 3 base reverse-diffusion sampler",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/diffusion/sampler/sampler.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/diffusion/sampler/sampler.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/diffusion/sampler/sampler.py"
      },
      {
        "id": "genie3_ddim_code",
        "kind": "code",
        "title": "Genie 3 DDIM directional-scaling sampler",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/diffusion/sampler/ddim.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/diffusion/sampler/ddim.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/diffusion/sampler/ddim.py"
      },
      {
        "id": "genie3_config_code",
        "kind": "code",
        "title": "Genie 3 V1 architecture configuration",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/config/model/v1.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/config/model/v1.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/config/model/v1.py"
      },
      {
        "id": "genie3_export_code",
        "kind": "code",
        "title": "Genie 3 generated-structure postprocessing",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/runner/postprocess.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/runner/postprocess.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/runner/postprocess.py"
      },
      {
        "id": "generic_feature_refinement_source",
        "kind": "source",
        "title": "Generic Feature Refinement architecture source",
        "path": "architectures/generic-feature-refinement.yaml",
        "href": "../../architectures/generic-feature-refinement.yaml"
      },
      {
        "id": "architecture_language_protocol",
        "kind": "protocol",
        "title": "Architecture language protocol",
        "path": "protocol/architecture-language.md",
        "href": "../../protocol/architecture-language.md"
      }
    ]
  },
  "standardBlocks": {
    "single_to_pair_endpoint_update": {
      "id": "single_to_pair_endpoint_update",
      "schemaVersion": "standard-block-v0.3",
      "name": "Single-to-Pair Endpoint Update",
      "sourceYaml": "../../standard_blocks/single-to-pair-endpoint-update.yaml",
      "description": "Project each token state through distinct left/source and right/destination maps, broadcast-sum the endpoint features over ordered token pairs, project the resulting pair activations, and add them residually to an existing pair state.",
      "math": [
        {
          "id": "project_left_single",
          "text": "left_single = linear_left(single_state)",
          "tex": "p_i = W_i s_i",
          "operation": "linear_projection"
        },
        {
          "id": "project_right_single",
          "text": "right_single = linear_right(single_state)",
          "tex": "p_j = W_j s_j",
          "operation": "linear_projection"
        },
        {
          "id": "broadcast_endpoint_sum",
          "text": "pair_activations = left_single[:, :, None, :] + right_single[:, None, :, :]",
          "tex": "a_{ij} = p_i + p_j",
          "operation": "broadcast_sum"
        },
        {
          "id": "project_pair_delta",
          "text": "pair_delta = linear_pair(pair_activations)",
          "tex": "delta z_{ij} = W_p a_{ij}",
          "operation": "linear_projection"
        },
        {
          "id": "add_pair_residual",
          "text": "updated_pair_state = pair_state + pair_delta",
          "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
          "operation": "residual_add"
        }
      ],
      "kind": "communication",
      "status": "review",
      "parameters": [
        {
          "id": "b",
          "notation": "B",
          "kind": "batch",
          "resolution": "boundary",
          "role": "leading batch axis"
        },
        {
          "id": "n",
          "notation": "N",
          "kind": "sequence",
          "resolution": "boundary",
          "role": "number of tokens"
        },
        {
          "id": "c_s",
          "notation": "C_s",
          "kind": "channel",
          "resolution": "boundary",
          "role": "input single-state channel width"
        },
        {
          "id": "c_z",
          "notation": "C_z",
          "kind": "channel",
          "resolution": "boundary",
          "role": "pair-state and endpoint-projection channel width"
        }
      ],
      "ports": [
        {
          "id": "single_state",
          "label": "updated single state",
          "direction": "input",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow",
            "state_update"
          ],
          "glyph": "single",
          "notation": "s",
          "role": "token state whose two endpoint projections construct the pair update",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "token",
                "dimension": "n"
              },
              {
                "id": "single_channel",
                "dimension": "c_s"
              }
            ]
          }
        },
        {
          "id": "pair_state",
          "label": "incoming pair state",
          "direction": "input",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow",
            "state_update"
          ],
          "glyph": "pair",
          "notation": "z",
          "role": "existing ordered-pair state that receives the endpoint-derived residual update",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "query_token",
                "dimension": "n"
              },
              {
                "id": "key_token",
                "dimension": "n"
              },
              {
                "id": "pair_channel",
                "dimension": "c_z"
              }
            ]
          }
        },
        {
          "id": "updated_pair_state",
          "label": "updated pair state",
          "direction": "output",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow",
            "state_update"
          ],
          "glyph": "pair",
          "notation": "z'",
          "role": "pair state after adding the projected endpoint contribution",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "query_token",
                "dimension": "n"
              },
              {
                "id": "key_token",
                "dimension": "n"
              },
              {
                "id": "pair_channel",
                "dimension": "c_z"
              }
            ]
          }
        }
      ],
      "variants": [
        {
          "id": "projected_endpoint_sum_residual",
          "label": "Projected endpoint sum + residual",
          "description": "Construct left/source and right/destination token features, broadcast-sum them over ordered pairs, apply a final pair projection, and add the result to the incoming pair state.",
          "step_refs": [
            "steps.project_left_single",
            "steps.project_right_single",
            "steps.broadcast_endpoint_sum",
            "steps.project_pair_delta",
            "steps.add_pair_residual"
          ]
        }
      ],
      "defaultVariant": "projected_endpoint_sum_residual",
      "values": [
        {
          "id": "left_single",
          "label": "left/source endpoint features",
          "kind": "representation",
          "glyph": "single",
          "notation": "p_i",
          "role": "endpoint features broadcast over the destination index j",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "token",
                "dimension": "n"
              },
              {
                "id": "pair_channel",
                "dimension": "c_z"
              }
            ]
          }
        },
        {
          "id": "right_single",
          "label": "right/destination endpoint features",
          "kind": "representation",
          "glyph": "single",
          "notation": "p_j",
          "role": "endpoint features broadcast over the source index i",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "token",
                "dimension": "n"
              },
              {
                "id": "pair_channel",
                "dimension": "c_z"
              }
            ]
          }
        },
        {
          "id": "pair_activations",
          "label": "broadcast endpoint sum",
          "kind": "representation",
          "glyph": "pair",
          "notation": "a",
          "role": "ordered-pair activations formed as the sum of the two endpoint projections",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "query_token",
                "dimension": "n"
              },
              {
                "id": "key_token",
                "dimension": "n"
              },
              {
                "id": "pair_channel",
                "dimension": "c_z"
              }
            ]
          }
        },
        {
          "id": "pair_delta",
          "label": "projected pair update",
          "kind": "representation",
          "glyph": "pair",
          "notation": "delta_z",
          "role": "endpoint-derived contribution in the canonical pair-state channel space",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "query_token",
                "dimension": "n"
              },
              {
                "id": "key_token",
                "dimension": "n"
              },
              {
                "id": "pair_channel",
                "dimension": "c_z"
              }
            ]
          }
        }
      ],
      "steps": [
        {
          "id": "project_left_single",
          "label": "Project left/source endpoint",
          "operation": "linear_projection",
          "shape_rule": "linear",
          "inputs": [
            "ports.single_state"
          ],
          "outputs": [
            "values.left_single"
          ],
          "code": "left_single = linear_left(single_state)",
          "tex": "p_i = W_i s_i",
          "role": "map every token to the features used when it occupies the first ordered-pair endpoint",
          "code_bindings": [
            {
              "lexeme": "single_state",
              "ref": "ports.single_state",
              "access": "read"
            },
            {
              "lexeme": "left_single",
              "ref": "values.left_single",
              "access": "write"
            }
          ]
        },
        {
          "id": "project_right_single",
          "label": "Project right/destination endpoint",
          "operation": "linear_projection",
          "shape_rule": "linear",
          "inputs": [
            "ports.single_state"
          ],
          "outputs": [
            "values.right_single"
          ],
          "code": "right_single = linear_right(single_state)",
          "tex": "p_j = W_j s_j",
          "role": "map every token to a distinct feature set used when it occupies the second ordered-pair endpoint",
          "code_bindings": [
            {
              "lexeme": "single_state",
              "ref": "ports.single_state",
              "access": "read"
            },
            {
              "lexeme": "right_single",
              "ref": "values.right_single",
              "access": "write"
            }
          ]
        },
        {
          "id": "broadcast_endpoint_sum",
          "label": "Broadcast + add endpoints",
          "operation": "broadcast_sum",
          "shape_rule": "broadcast_sum",
          "inputs": [
            "values.left_single",
            "values.right_single"
          ],
          "outputs": [
            "values.pair_activations"
          ],
          "code": "pair_activations = left_single[:, :, None, :] + right_single[:, None, :, :]",
          "tex": "a_{ij} = p_i + p_j",
          "role": "expand both token streams across the missing endpoint axis and add them for every ordered token pair",
          "code_bindings": [
            {
              "lexeme": "left_single",
              "ref": "values.left_single",
              "access": "read"
            },
            {
              "lexeme": "right_single",
              "ref": "values.right_single",
              "access": "read"
            },
            {
              "lexeme": "pair_activations",
              "ref": "values.pair_activations",
              "access": "write"
            }
          ]
        },
        {
          "id": "project_pair_delta",
          "label": "Project pair update",
          "operation": "linear_projection",
          "shape_rule": "linear",
          "inputs": [
            "values.pair_activations"
          ],
          "outputs": [
            "values.pair_delta"
          ],
          "code": "pair_delta = linear_pair(pair_activations)",
          "tex": "delta z_{ij} = W_p a_{ij}",
          "role": "transform the endpoint sum in pair-channel space before it is added to the existing pair state",
          "code_bindings": [
            {
              "lexeme": "pair_activations",
              "ref": "values.pair_activations",
              "access": "read"
            },
            {
              "lexeme": "pair_delta",
              "ref": "values.pair_delta",
              "access": "write"
            }
          ]
        },
        {
          "id": "add_pair_residual",
          "label": "Add to pair state",
          "operation": "residual_add",
          "shape_rule": "residual_add",
          "inputs": [
            "ports.pair_state",
            "values.pair_delta"
          ],
          "outputs": [
            "ports.updated_pair_state"
          ],
          "code": "updated_pair_state = pair_state + pair_delta",
          "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
          "role": "preserve the incoming pair state while adding the single-derived endpoint update",
          "code_bindings": [
            {
              "lexeme": "pair_state",
              "ref": "ports.pair_state",
              "access": "read"
            },
            {
              "lexeme": "pair_delta",
              "ref": "values.pair_delta",
              "access": "read"
            },
            {
              "lexeme": "updated_pair_state",
              "ref": "ports.updated_pair_state",
              "access": "write"
            }
          ]
        }
      ],
      "visualTemplate": {
        "grid": {
          "columns": 9,
          "rows": 4,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 30,
          "row_gap": 30
        },
        "nodes": [
          {
            "id": "single_state",
            "ref": "ports.single_state",
            "col": 1,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "project_left_single",
            "ref": "steps.project_left_single",
            "col": 2,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "left_single",
            "ref": "values.left_single",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_right_single",
            "ref": "steps.project_right_single",
            "col": 2,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "right_single",
            "ref": "values.right_single",
            "col": 3,
            "row": 3,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "broadcast_endpoint_sum",
            "ref": "steps.broadcast_endpoint_sum",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_activations",
            "ref": "values.pair_activations",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_pair_delta",
            "ref": "steps.project_pair_delta",
            "col": 6,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_delta",
            "ref": "values.pair_delta",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "pair_state",
            "ref": "ports.pair_state",
            "col": 7,
            "row": 4,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "add_pair_residual",
            "ref": "steps.add_pair_residual",
            "col": 8,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "updated_pair_state",
            "ref": "ports.updated_pair_state",
            "col": 9,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact"
          }
        ],
        "segments": [
          {
            "id": "endpoint_pair_construction",
            "label": "Endpoint Pair Construction",
            "description": "Distinct left/source and right/destination projections are broadcast over the two token axes and added.",
            "vertical_alignment_group": "single_to_pair_phases",
            "node_refs": [
              "ports.single_state",
              "steps.project_left_single",
              "values.left_single",
              "steps.project_right_single",
              "values.right_single",
              "steps.broadcast_endpoint_sum",
              "values.pair_activations"
            ]
          },
          {
            "id": "residual_pair_update",
            "label": "Residual Pair Update",
            "description": "A final linear map produces the learned pair contribution, which is added to the current pair state.",
            "vertical_alignment_group": "single_to_pair_phases",
            "node_refs": [
              "steps.project_pair_delta",
              "values.pair_delta",
              "ports.pair_state",
              "steps.add_pair_residual",
              "ports.updated_pair_state"
            ]
          }
        ]
      },
      "evidencePolicy": {
        "generic_definition": "The template names the common endpoint-pair construction using AF2's left_single, right_single, and pair_activations vocabulary, then keeps the final projection and residual addition as a separate explicit phase of the full update pattern.",
        "usage_requires": [
          "Evidence for distinct left/source and right/destination token projections.",
          "Evidence that the projections are broadcast and added rather than multiplied.",
          "Evidence locating the final pair projection and residual addition."
        ]
      }
    }
  },
  "pseudocode": {
  },
  "boards": {
    "schemaVersion": "standard-block-browser-v0.1",
    "sourceYaml": "../../standard_blocks/single-to-pair-endpoint-update.yaml",
    "rootBoard": "standard_block_single_to_pair_endpoint_update",
    "items": [
      {
        "id": "standard_block_single_to_pair_endpoint_update",
        "kind": "standard_block_template",
        "title": "Single-to-Pair Endpoint Update",
        "summary": "Project each token state through distinct left/source and right/destination maps, broadcast-sum the endpoint features over ordered token pairs, project the resulting pair activations, and add them residually to an existing pair state.",
        "notes": [
          "Construct left/source and right/destination token features, broadcast-sum them over ordered pairs, apply a final pair projection, and add the result to the incoming pair state.",
          "The template names the common endpoint-pair construction using AF2's left_single, right_single, and pair_activations vocabulary, then keeps the final projection and residual addition as a separate explicit phase of the full update pattern."
        ],
        "subject_ref": "standard_blocks.single_to_pair_endpoint_update",
        "expansion_depth": 0,
        "grid": {
          "columns": 9,
          "rows": 4,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 30,
          "row_gap": 30
        },
        "nodes": [
          {
            "id": "single_state",
            "label": "updated single state",
            "role": "token state whose two endpoint projections construct the pair update",
            "col": 1,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.ports.single_state",
            "kind": "representation",
            "shape": "B x N x C_s",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "token",
                  "dimension": "N"
                },
                {
                  "id": "single_channel",
                  "dimension": "C_s"
                }
              ],
              "label": "B x N x C_s",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "s",
            "port_ref": "ports.single_state"
          },
          {
            "id": "project_left_single",
            "label": "Project left/source endpoint",
            "role": "map every token to the features used when it occupies the first ordered-pair endpoint",
            "col": 2,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_left_single",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear_projection",
            "code": "left_single = linear_left(single_state)",
            "tex": "p_i = W_i s_i",
            "operation": "linear_projection"
          },
          {
            "id": "left_single",
            "label": "left/source endpoint features",
            "role": "endpoint features broadcast over the destination index j",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.values.left_single",
            "kind": "representation",
            "shape": "B x N x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "token",
                  "dimension": "N"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "B x N x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "p_i"
          },
          {
            "id": "project_right_single",
            "label": "Project right/destination endpoint",
            "role": "map every token to a distinct feature set used when it occupies the second ordered-pair endpoint",
            "col": 2,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_right_single",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear_projection",
            "code": "right_single = linear_right(single_state)",
            "tex": "p_j = W_j s_j",
            "operation": "linear_projection"
          },
          {
            "id": "right_single",
            "label": "right/destination endpoint features",
            "role": "endpoint features broadcast over the source index i",
            "col": 3,
            "row": 3,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.values.right_single",
            "kind": "representation",
            "shape": "B x N x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "token",
                  "dimension": "N"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "B x N x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "p_j"
          },
          {
            "id": "broadcast_endpoint_sum",
            "label": "Broadcast + add endpoints",
            "role": "expand both token streams across the missing endpoint axis and add them for every ordered token pair",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.broadcast_endpoint_sum",
            "kind": "operation",
            "scale": "operation",
            "detail": "broadcast_sum",
            "code": "pair_activations = left_single[:, :, None, :] + right_single[:, None, :, :]",
            "tex": "a_{ij} = p_i + p_j",
            "operation": "broadcast_sum"
          },
          {
            "id": "pair_activations",
            "label": "broadcast endpoint sum",
            "role": "ordered-pair activations formed as the sum of the two endpoint projections",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.values.pair_activations",
            "kind": "representation",
            "shape": "B x N x N x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "query_token",
                  "dimension": "N"
                },
                {
                  "id": "key_token",
                  "dimension": "N"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "B x N x N x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "a"
          },
          {
            "id": "project_pair_delta",
            "label": "Project pair update",
            "role": "transform the endpoint sum in pair-channel space before it is added to the existing pair state",
            "col": 6,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_pair_delta",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear_projection",
            "code": "pair_delta = linear_pair(pair_activations)",
            "tex": "delta z_{ij} = W_p a_{ij}",
            "operation": "linear_projection"
          },
          {
            "id": "pair_delta",
            "label": "projected pair update",
            "role": "endpoint-derived contribution in the canonical pair-state channel space",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.values.pair_delta",
            "kind": "representation",
            "shape": "B x N x N x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "query_token",
                  "dimension": "N"
                },
                {
                  "id": "key_token",
                  "dimension": "N"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "B x N x N x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "delta_z"
          },
          {
            "id": "pair_state",
            "label": "incoming pair state",
            "role": "existing ordered-pair state that receives the endpoint-derived residual update",
            "col": 7,
            "row": 4,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.ports.pair_state",
            "kind": "representation",
            "shape": "B x N x N x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "query_token",
                  "dimension": "N"
                },
                {
                  "id": "key_token",
                  "dimension": "N"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "B x N x N x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z",
            "port_ref": "ports.pair_state"
          },
          {
            "id": "add_pair_residual",
            "label": "Add to pair state",
            "role": "preserve the incoming pair state while adding the single-derived endpoint update",
            "col": 8,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.add_pair_residual",
            "kind": "operation",
            "scale": "operation",
            "detail": "residual_add",
            "code": "updated_pair_state = pair_state + pair_delta",
            "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
            "operation": "residual_add"
          },
          {
            "id": "updated_pair_state",
            "label": "updated pair state",
            "role": "pair state after adding the projected endpoint contribution",
            "col": 9,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.ports.updated_pair_state",
            "kind": "representation",
            "shape": "B x N x N x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "query_token",
                  "dimension": "N"
                },
                {
                  "id": "key_token",
                  "dimension": "N"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "B x N x N x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z'",
            "port_ref": "ports.updated_pair_state"
          }
        ],
        "edges": [
          {
            "id": "template_single_to_pair_endpoint_update__project_left_single__input_1",
            "from": "single_state",
            "to": "project_left_single",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_left_single",
            "template_data_ref": "ports.single_state",
            "connection": {
              "title": "Project left/source endpoint",
              "role": "reusable step input",
              "inside": "left_single = linear_left(single_state)"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__project_left_single__output_1",
            "from": "project_left_single",
            "to": "left_single",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_left_single",
            "template_data_ref": "values.left_single",
            "connection": {
              "title": "Project left/source endpoint",
              "role": "reusable step output",
              "inside": "left_single = linear_left(single_state)"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__project_right_single__input_1",
            "from": "single_state",
            "to": "project_right_single",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_right_single",
            "template_data_ref": "ports.single_state",
            "connection": {
              "title": "Project right/destination endpoint",
              "role": "reusable step input",
              "inside": "right_single = linear_right(single_state)"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__project_right_single__output_1",
            "from": "project_right_single",
            "to": "right_single",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_right_single",
            "template_data_ref": "values.right_single",
            "connection": {
              "title": "Project right/destination endpoint",
              "role": "reusable step output",
              "inside": "right_single = linear_right(single_state)"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__broadcast_endpoint_sum__input_1",
            "from": "left_single",
            "to": "broadcast_endpoint_sum",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.broadcast_endpoint_sum",
            "template_data_ref": "values.left_single",
            "connection": {
              "title": "Broadcast + add endpoints",
              "role": "reusable step input",
              "inside": "pair_activations = left_single[:, :, None, :] + right_single[:, None, :, :]"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__broadcast_endpoint_sum__input_2",
            "from": "right_single",
            "to": "broadcast_endpoint_sum",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.broadcast_endpoint_sum",
            "template_data_ref": "values.right_single",
            "connection": {
              "title": "Broadcast + add endpoints",
              "role": "reusable step input",
              "inside": "pair_activations = left_single[:, :, None, :] + right_single[:, None, :, :]"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__broadcast_endpoint_sum__output_1",
            "from": "broadcast_endpoint_sum",
            "to": "pair_activations",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.broadcast_endpoint_sum",
            "template_data_ref": "values.pair_activations",
            "connection": {
              "title": "Broadcast + add endpoints",
              "role": "reusable step output",
              "inside": "pair_activations = left_single[:, :, None, :] + right_single[:, None, :, :]"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__project_pair_delta__input_1",
            "from": "pair_activations",
            "to": "project_pair_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_pair_delta",
            "template_data_ref": "values.pair_activations",
            "connection": {
              "title": "Project pair update",
              "role": "reusable step input",
              "inside": "pair_delta = linear_pair(pair_activations)"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__project_pair_delta__output_1",
            "from": "project_pair_delta",
            "to": "pair_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.project_pair_delta",
            "template_data_ref": "values.pair_delta",
            "connection": {
              "title": "Project pair update",
              "role": "reusable step output",
              "inside": "pair_delta = linear_pair(pair_activations)"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__add_pair_residual__input_1",
            "from": "pair_state",
            "to": "add_pair_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.add_pair_residual",
            "template_data_ref": "ports.pair_state",
            "connection": {
              "title": "Add to pair state",
              "role": "reusable step input",
              "inside": "updated_pair_state = pair_state + pair_delta"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__add_pair_residual__input_2",
            "from": "pair_delta",
            "to": "add_pair_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.add_pair_residual",
            "template_data_ref": "values.pair_delta",
            "connection": {
              "title": "Add to pair state",
              "role": "reusable step input",
              "inside": "updated_pair_state = pair_state + pair_delta"
            }
          },
          {
            "id": "template_single_to_pair_endpoint_update__add_pair_residual__output_1",
            "from": "add_pair_residual",
            "to": "updated_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/single-to-pair-endpoint-update.yaml",
            "standard_block_id": "single_to_pair_endpoint_update",
            "template_fact_ref": "standard_blocks.single_to_pair_endpoint_update.steps.add_pair_residual",
            "template_data_ref": "ports.updated_pair_state",
            "connection": {
              "title": "Add to pair state",
              "role": "reusable step output",
              "inside": "updated_pair_state = pair_state + pair_delta"
            }
          }
        ],
        "segments": [
          {
            "id": "endpoint_pair_construction",
            "label": "Endpoint Pair Construction",
            "description": "Distinct left/source and right/destination projections are broadcast over the two token axes and added.",
            "vertical_alignment_group": "single_to_pair_phases",
            "order": 1,
            "node_ids": [
              "single_state",
              "project_left_single",
              "left_single",
              "project_right_single",
              "right_single",
              "broadcast_endpoint_sum",
              "pair_activations"
            ]
          },
          {
            "id": "residual_pair_update",
            "label": "Residual Pair Update",
            "description": "A final linear map produces the learned pair contribution, which is added to the current pair state.",
            "vertical_alignment_group": "single_to_pair_phases",
            "order": 2,
            "node_ids": [
              "project_pair_delta",
              "pair_delta",
              "pair_state",
              "add_pair_residual",
              "updated_pair_state"
            ]
          }
        ],
        "projectionMode": "standard_block_template",
        "standardBlockRef": "standard_blocks/single-to-pair-endpoint-update.yaml",
        "standardBlockId": "single_to_pair_endpoint_update",
        "variant": "projected_endpoint_sum_residual",
        "variantLabel": "Projected endpoint sum + residual",
        "pseudocode": [
          {
            "id": "project_left_single",
            "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.steps.project_left_single",
            "label": "Project left/source endpoint",
            "operation": "linear_projection",
            "code": "left_single = linear_left(single_state)",
            "tex": "p_i = W_i s_i",
            "inputs": [
              "ports.single_state"
            ],
            "outputs": [
              "values.left_single"
            ],
            "codeBindings": [
              {
                "lexeme": "single_state",
                "access": "read",
                "localRef": "ports.single_state",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.ports.single_state",
                "occurrences": [
                  {
                    "start": 26,
                    "end": 38
                  }
                ]
              },
              {
                "lexeme": "left_single",
                "access": "write",
                "localRef": "values.left_single",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.left_single",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 11
                  }
                ]
              }
            ]
          },
          {
            "id": "project_right_single",
            "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.steps.project_right_single",
            "label": "Project right/destination endpoint",
            "operation": "linear_projection",
            "code": "right_single = linear_right(single_state)",
            "tex": "p_j = W_j s_j",
            "inputs": [
              "ports.single_state"
            ],
            "outputs": [
              "values.right_single"
            ],
            "codeBindings": [
              {
                "lexeme": "single_state",
                "access": "read",
                "localRef": "ports.single_state",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.ports.single_state",
                "occurrences": [
                  {
                    "start": 28,
                    "end": 40
                  }
                ]
              },
              {
                "lexeme": "right_single",
                "access": "write",
                "localRef": "values.right_single",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.right_single",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 12
                  }
                ]
              }
            ]
          },
          {
            "id": "broadcast_endpoint_sum",
            "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.steps.broadcast_endpoint_sum",
            "label": "Broadcast + add endpoints",
            "operation": "broadcast_sum",
            "code": "pair_activations = left_single[:, :, None, :] + right_single[:, None, :, :]",
            "tex": "a_{ij} = p_i + p_j",
            "inputs": [
              "values.left_single",
              "values.right_single"
            ],
            "outputs": [
              "values.pair_activations"
            ],
            "codeBindings": [
              {
                "lexeme": "left_single",
                "access": "read",
                "localRef": "values.left_single",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.left_single",
                "occurrences": [
                  {
                    "start": 19,
                    "end": 30
                  }
                ]
              },
              {
                "lexeme": "right_single",
                "access": "read",
                "localRef": "values.right_single",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.right_single",
                "occurrences": [
                  {
                    "start": 48,
                    "end": 60
                  }
                ]
              },
              {
                "lexeme": "pair_activations",
                "access": "write",
                "localRef": "values.pair_activations",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.pair_activations",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 16
                  }
                ]
              }
            ]
          },
          {
            "id": "project_pair_delta",
            "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.steps.project_pair_delta",
            "label": "Project pair update",
            "operation": "linear_projection",
            "code": "pair_delta = linear_pair(pair_activations)",
            "tex": "delta z_{ij} = W_p a_{ij}",
            "inputs": [
              "values.pair_activations"
            ],
            "outputs": [
              "values.pair_delta"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_activations",
                "access": "read",
                "localRef": "values.pair_activations",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.pair_activations",
                "occurrences": [
                  {
                    "start": 25,
                    "end": 41
                  }
                ]
              },
              {
                "lexeme": "pair_delta",
                "access": "write",
                "localRef": "values.pair_delta",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.pair_delta",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 10
                  }
                ]
              }
            ]
          },
          {
            "id": "add_pair_residual",
            "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.steps.add_pair_residual",
            "label": "Add to pair state",
            "operation": "residual_add",
            "code": "updated_pair_state = pair_state + pair_delta",
            "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
            "inputs": [
              "ports.pair_state",
              "values.pair_delta"
            ],
            "outputs": [
              "ports.updated_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_state",
                "access": "read",
                "localRef": "ports.pair_state",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.ports.pair_state",
                "occurrences": [
                  {
                    "start": 21,
                    "end": 31
                  }
                ]
              },
              {
                "lexeme": "pair_delta",
                "access": "read",
                "localRef": "values.pair_delta",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.values.pair_delta",
                "occurrences": [
                  {
                    "start": 34,
                    "end": 44
                  }
                ]
              },
              {
                "lexeme": "updated_pair_state",
                "access": "write",
                "localRef": "ports.updated_pair_state",
                "templateFactRef": "standard_blocks.single_to_pair_endpoint_update.ports.updated_pair_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 18
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
