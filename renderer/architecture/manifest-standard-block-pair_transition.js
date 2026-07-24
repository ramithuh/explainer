export const manifest = {
  "schemaVersion": "standard-block-browser-manifest-v0.1",
  "build": {
    "generator": "architecture-manifest-builder-v0.5.0",
    "inputDigests": {
      "references/bibliography.yaml": "82f709e900c8a4856e4b834e7d3d7269313b9e4aa08f6bea91d75c33ef974bdd",
      "standard_blocks/pair-transition.yaml": "67972606f8b0da22bce83da0c93d37075755df487fe100865ab7fc98e5941bd1"
    }
  },
  "architecture": {
    "schemaVersion": "standard-block-v0.3",
    "id": "standard_block_pair_transition",
    "name": "Pointwise Pair Transition",
    "family": "standard_component",
    "status": "review",
    "taskModes": [

    ],
    "sourceYaml": "../../standard_blocks/pair-transition.yaml",
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
    "pair_transition": {
      "id": "pair_transition",
      "schemaVersion": "standard-block-v0.3",
      "name": "Pointwise Pair Transition",
      "sourceYaml": "../../standard_blocks/pair-transition.yaml",
      "description": "Apply a shared pointwise channel MLP independently to every pair entry, mask the resulting update, and add it residually to the incoming pair state.",
      "math": [
        {
          "id": "normalize_pair_state",
          "text": "normalized_pair_state = layer_norm(pair_state)",
          "tex": "z^{norm}_{ij} = LayerNorm(z_{ij})",
          "operation": "layer_normalization"
        },
        {
          "id": "expand_and_activate",
          "text": "expanded_pair_state = relu(linear_1(normalized_pair_state))",
          "tex": "h_{ij} = ReLU(W_1 z^{norm}_{ij})",
          "operation": "linear_relu"
        },
        {
          "id": "project_pair_delta",
          "text": "projected_pair_delta = linear_2(expanded_pair_state)",
          "tex": "delta z^{raw}_{ij} = W_2 h_{ij}",
          "operation": "linear"
        },
        {
          "id": "apply_pair_mask",
          "text": "transition_delta = projected_pair_delta * pair_mask",
          "tex": "delta z_{ij} = m_{ij} delta z^{raw}_{ij}",
          "operation": "masking"
        },
        {
          "id": "add_pair_residual",
          "text": "updated_pair_state = pair_state + transition_delta",
          "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
          "operation": "residual_add"
        }
      ],
      "kind": "feed_forward",
      "status": "review",
      "parameters": [
        {
          "id": "b",
          "notation": "B",
          "kind": "batch",
          "resolution": "boundary",
          "role": "leading batch axes"
        },
        {
          "id": "n",
          "notation": "N",
          "kind": "sequence",
          "resolution": "boundary",
          "role": "number of residue or atom tokens"
        },
        {
          "id": "c_z",
          "notation": "C_z",
          "kind": "channel",
          "resolution": "boundary",
          "role": "pair-state channel width"
        },
        {
          "id": "c_hidden",
          "notation": "C_h",
          "kind": "channel",
          "resolution": "instance",
          "role": "expanded hidden width of the pointwise transition"
        }
      ],
      "ports": [
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
          "role": "pair representation entering the pointwise transition",
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
          "id": "pair_mask",
          "label": "valid-pair mask",
          "direction": "conditioning",
          "kind": "mask",
          "required": false,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "control"
          ],
          "glyph": "pair",
          "notation": "m",
          "role": "optional validity mask multiplied into the projected pair update",
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
          "role": "pair state after the masked pointwise update is added residually",
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
          "id": "layer_norm_expansion_relu_projection_mask_residual",
          "label": "LayerNorm + expanded MLP + residual",
          "description": "Normalize each pair entry, expand its channels, apply ReLU, project back to the pair width, apply the pair-validity mask, and add the result to the incoming pair state.",
          "step_refs": [
            "steps.normalize_pair_state",
            "steps.expand_and_activate",
            "steps.project_pair_delta",
            "steps.apply_pair_mask",
            "steps.add_pair_residual"
          ]
        }
      ],
      "defaultVariant": "layer_norm_expansion_relu_projection_mask_residual",
      "values": [
        {
          "id": "normalized_pair_state",
          "label": "normalized pair state",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z_norm",
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
          "id": "expanded_pair_state",
          "label": "expanded hidden state",
          "kind": "representation",
          "glyph": "pair",
          "notation": "h",
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
                "id": "hidden_channel",
                "dimension": "c_hidden"
              }
            ]
          }
        },
        {
          "id": "projected_pair_delta",
          "label": "projected pair update",
          "kind": "representation",
          "glyph": "pair",
          "notation": "delta_z_raw",
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
          "id": "transition_delta",
          "label": "masked pair update",
          "kind": "representation",
          "glyph": "pair",
          "notation": "delta_z",
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
          "id": "normalize_pair_state",
          "label": "LayerNorm each pair",
          "operation": "layer_normalization",
          "shape_rule": "preserve",
          "inputs": [
            "ports.pair_state"
          ],
          "outputs": [
            "values.normalized_pair_state"
          ],
          "code": "normalized_pair_state = layer_norm(pair_state)",
          "tex": "z^{norm}_{ij} = LayerNorm(z_{ij})",
          "role": "normalize channels independently at every ordered token pair",
          "code_bindings": [
            {
              "lexeme": "pair_state",
              "ref": "ports.pair_state",
              "access": "read"
            },
            {
              "lexeme": "normalized_pair_state",
              "ref": "values.normalized_pair_state",
              "access": "write"
            }
          ]
        },
        {
          "id": "expand_and_activate",
          "label": "Expand channels + ReLU",
          "operation": "linear_relu",
          "shape_rule": "linear",
          "inputs": [
            "values.normalized_pair_state"
          ],
          "outputs": [
            "values.expanded_pair_state"
          ],
          "code": "expanded_pair_state = relu(linear_1(normalized_pair_state))",
          "tex": "h_{ij} = ReLU(W_1 z^{norm}_{ij})",
          "role": "apply the shared channel expansion and nonlinearity independently to every pair entry",
          "code_bindings": [
            {
              "lexeme": "normalized_pair_state",
              "ref": "values.normalized_pair_state",
              "access": "read"
            },
            {
              "lexeme": "expanded_pair_state",
              "ref": "values.expanded_pair_state",
              "access": "write"
            }
          ]
        },
        {
          "id": "project_pair_delta",
          "label": "Project back to pair width",
          "operation": "linear",
          "shape_rule": "linear",
          "inputs": [
            "values.expanded_pair_state"
          ],
          "outputs": [
            "values.projected_pair_delta"
          ],
          "code": "projected_pair_delta = linear_2(expanded_pair_state)",
          "tex": "delta z^{raw}_{ij} = W_2 h_{ij}",
          "role": "return the hidden channels to the canonical pair-state width",
          "code_bindings": [
            {
              "lexeme": "expanded_pair_state",
              "ref": "values.expanded_pair_state",
              "access": "read"
            },
            {
              "lexeme": "projected_pair_delta",
              "ref": "values.projected_pair_delta",
              "access": "write"
            }
          ]
        },
        {
          "id": "apply_pair_mask",
          "label": "Apply valid-pair mask",
          "operation": "masking",
          "shape_rule": "preserve",
          "inputs": [
            "values.projected_pair_delta",
            "ports.pair_mask"
          ],
          "outputs": [
            "values.transition_delta"
          ],
          "code": "transition_delta = projected_pair_delta * pair_mask",
          "tex": "delta z_{ij} = m_{ij} delta z^{raw}_{ij}",
          "role": "suppress updates at padded or otherwise invalid token pairs",
          "code_bindings": [
            {
              "lexeme": "projected_pair_delta",
              "ref": "values.projected_pair_delta",
              "access": "read"
            },
            {
              "lexeme": "pair_mask",
              "ref": "ports.pair_mask",
              "access": "read"
            },
            {
              "lexeme": "transition_delta",
              "ref": "values.transition_delta",
              "access": "write"
            }
          ]
        },
        {
          "id": "add_pair_residual",
          "label": "Add pair residual",
          "operation": "residual_add",
          "shape_rule": "residual_add",
          "inputs": [
            "ports.pair_state",
            "values.transition_delta"
          ],
          "outputs": [
            "ports.updated_pair_state"
          ],
          "code": "updated_pair_state = pair_state + transition_delta",
          "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
          "role": "preserve the incoming pair state while adding the learned pointwise update",
          "code_bindings": [
            {
              "lexeme": "pair_state",
              "ref": "ports.pair_state",
              "access": "read"
            },
            {
              "lexeme": "transition_delta",
              "ref": "values.transition_delta",
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
          "columns": 11,
          "rows": 3,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 26,
          "row_gap": 34
        },
        "nodes": [
          {
            "id": "pair_state",
            "ref": "ports.pair_state",
            "col": 1,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "normalize_pair_state",
            "ref": "steps.normalize_pair_state",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "normalized_pair_state",
            "ref": "values.normalized_pair_state",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "expand_and_activate",
            "ref": "steps.expand_and_activate",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "expanded_pair_state",
            "ref": "values.expanded_pair_state",
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
            "id": "projected_pair_delta",
            "ref": "values.projected_pair_delta",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "pair_mask",
            "ref": "ports.pair_mask",
            "col": 7,
            "row": 3,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "apply_pair_mask",
            "ref": "steps.apply_pair_mask",
            "col": 8,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "transition_delta",
            "ref": "values.transition_delta",
            "col": 9,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "add_pair_residual",
            "ref": "steps.add_pair_residual",
            "col": 10,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "updated_pair_state",
            "ref": "ports.updated_pair_state",
            "col": 11,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact"
          }
        ]
      },
      "evidencePolicy": {
        "generic_definition": "The template captures the AF2-style pointwise pair-transition update; concrete architectures must separately cite their channel widths, mask behavior, and residual boundary.",
        "usage_requires": [
          "Evidence for LayerNorm, channel expansion, ReLU, projection, and pair masking.",
          "Evidence locating where the returned transition update is added residually to the incoming pair state."
        ]
      }
    }
  },
  "pseudocode": {
  },
  "boards": {
    "schemaVersion": "standard-block-browser-v0.1",
    "sourceYaml": "../../standard_blocks/pair-transition.yaml",
    "rootBoard": "standard_block_pair_transition",
    "items": [
      {
        "id": "standard_block_pair_transition",
        "kind": "standard_block_template",
        "title": "Pointwise Pair Transition",
        "summary": "Apply a shared pointwise channel MLP independently to every pair entry, mask the resulting update, and add it residually to the incoming pair state.",
        "notes": [
          "Normalize each pair entry, expand its channels, apply ReLU, project back to the pair width, apply the pair-validity mask, and add the result to the incoming pair state.",
          "The template captures the AF2-style pointwise pair-transition update; concrete architectures must separately cite their channel widths, mask behavior, and residual boundary."
        ],
        "subject_ref": "standard_blocks.pair_transition",
        "expansion_depth": 0,
        "grid": {
          "columns": 11,
          "rows": 3,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 26,
          "row_gap": 34
        },
        "nodes": [
          {
            "id": "pair_state",
            "label": "incoming pair state",
            "role": "pair representation entering the pointwise transition",
            "col": 1,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.ports.pair_state",
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
            "id": "normalize_pair_state",
            "label": "LayerNorm each pair",
            "role": "normalize channels independently at every ordered token pair",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.normalize_pair_state",
            "kind": "operation",
            "scale": "operation",
            "detail": "layer_normalization",
            "code": "normalized_pair_state = layer_norm(pair_state)",
            "tex": "z^{norm}_{ij} = LayerNorm(z_{ij})",
            "operation": "layer_normalization"
          },
          {
            "id": "normalized_pair_state",
            "label": "normalized pair state",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.values.normalized_pair_state",
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
            "notation": "z_norm"
          },
          {
            "id": "expand_and_activate",
            "label": "Expand channels + ReLU",
            "role": "apply the shared channel expansion and nonlinearity independently to every pair entry",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.expand_and_activate",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear_relu",
            "code": "expanded_pair_state = relu(linear_1(normalized_pair_state))",
            "tex": "h_{ij} = ReLU(W_1 z^{norm}_{ij})",
            "operation": "linear_relu"
          },
          {
            "id": "expanded_pair_state",
            "label": "expanded hidden state",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.values.expanded_pair_state",
            "kind": "representation",
            "shape": "B x N x N x C_h",
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
                  "id": "hidden_channel",
                  "dimension": "C_h"
                }
              ],
              "label": "B x N x N x C_h",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "h"
          },
          {
            "id": "project_pair_delta",
            "label": "Project back to pair width",
            "role": "return the hidden channels to the canonical pair-state width",
            "col": 6,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.project_pair_delta",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear",
            "code": "projected_pair_delta = linear_2(expanded_pair_state)",
            "tex": "delta z^{raw}_{ij} = W_2 h_{ij}",
            "operation": "linear"
          },
          {
            "id": "projected_pair_delta",
            "label": "projected pair update",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.values.projected_pair_delta",
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
            "notation": "delta_z_raw"
          },
          {
            "id": "pair_mask",
            "label": "valid-pair mask",
            "role": "optional validity mask multiplied into the projected pair update",
            "col": 7,
            "row": 3,
            "prominence": "context",
            "treatment": "chip",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.ports.pair_mask",
            "kind": "representation",
            "shape": "B x N x N",
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
                }
              ],
              "label": "B x N x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "m",
            "port_ref": "ports.pair_mask"
          },
          {
            "id": "apply_pair_mask",
            "label": "Apply valid-pair mask",
            "role": "suppress updates at padded or otherwise invalid token pairs",
            "col": 8,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.apply_pair_mask",
            "kind": "operation",
            "scale": "operation",
            "detail": "masking",
            "code": "transition_delta = projected_pair_delta * pair_mask",
            "tex": "delta z_{ij} = m_{ij} delta z^{raw}_{ij}",
            "operation": "masking"
          },
          {
            "id": "transition_delta",
            "label": "masked pair update",
            "col": 9,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.values.transition_delta",
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
            "id": "add_pair_residual",
            "label": "Add pair residual",
            "role": "preserve the incoming pair state while adding the learned pointwise update",
            "col": 10,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.add_pair_residual",
            "kind": "operation",
            "scale": "operation",
            "detail": "residual_add",
            "code": "updated_pair_state = pair_state + transition_delta",
            "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
            "operation": "residual_add"
          },
          {
            "id": "updated_pair_state",
            "label": "updated pair state",
            "role": "pair state after the masked pointwise update is added residually",
            "col": 11,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.ports.updated_pair_state",
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
            "id": "template_pair_transition__normalize_pair_state__input_1",
            "from": "pair_state",
            "to": "normalize_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.normalize_pair_state",
            "template_data_ref": "ports.pair_state",
            "connection": {
              "title": "LayerNorm each pair",
              "role": "reusable step input",
              "inside": "normalized_pair_state = layer_norm(pair_state)"
            }
          },
          {
            "id": "template_pair_transition__normalize_pair_state__output_1",
            "from": "normalize_pair_state",
            "to": "normalized_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.normalize_pair_state",
            "template_data_ref": "values.normalized_pair_state",
            "connection": {
              "title": "LayerNorm each pair",
              "role": "reusable step output",
              "inside": "normalized_pair_state = layer_norm(pair_state)"
            }
          },
          {
            "id": "template_pair_transition__expand_and_activate__input_1",
            "from": "normalized_pair_state",
            "to": "expand_and_activate",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.expand_and_activate",
            "template_data_ref": "values.normalized_pair_state",
            "connection": {
              "title": "Expand channels + ReLU",
              "role": "reusable step input",
              "inside": "expanded_pair_state = relu(linear_1(normalized_pair_state))"
            }
          },
          {
            "id": "template_pair_transition__expand_and_activate__output_1",
            "from": "expand_and_activate",
            "to": "expanded_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.expand_and_activate",
            "template_data_ref": "values.expanded_pair_state",
            "connection": {
              "title": "Expand channels + ReLU",
              "role": "reusable step output",
              "inside": "expanded_pair_state = relu(linear_1(normalized_pair_state))"
            }
          },
          {
            "id": "template_pair_transition__project_pair_delta__input_1",
            "from": "expanded_pair_state",
            "to": "project_pair_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.project_pair_delta",
            "template_data_ref": "values.expanded_pair_state",
            "connection": {
              "title": "Project back to pair width",
              "role": "reusable step input",
              "inside": "projected_pair_delta = linear_2(expanded_pair_state)"
            }
          },
          {
            "id": "template_pair_transition__project_pair_delta__output_1",
            "from": "project_pair_delta",
            "to": "projected_pair_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.project_pair_delta",
            "template_data_ref": "values.projected_pair_delta",
            "connection": {
              "title": "Project back to pair width",
              "role": "reusable step output",
              "inside": "projected_pair_delta = linear_2(expanded_pair_state)"
            }
          },
          {
            "id": "template_pair_transition__apply_pair_mask__input_1",
            "from": "projected_pair_delta",
            "to": "apply_pair_mask",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.apply_pair_mask",
            "template_data_ref": "values.projected_pair_delta",
            "connection": {
              "title": "Apply valid-pair mask",
              "role": "reusable step input",
              "inside": "transition_delta = projected_pair_delta * pair_mask"
            }
          },
          {
            "id": "template_pair_transition__apply_pair_mask__input_2",
            "from": "pair_mask",
            "to": "apply_pair_mask",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.apply_pair_mask",
            "template_data_ref": "ports.pair_mask",
            "connection": {
              "title": "Apply valid-pair mask",
              "role": "reusable step input",
              "inside": "transition_delta = projected_pair_delta * pair_mask"
            }
          },
          {
            "id": "template_pair_transition__apply_pair_mask__output_1",
            "from": "apply_pair_mask",
            "to": "transition_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.apply_pair_mask",
            "template_data_ref": "values.transition_delta",
            "connection": {
              "title": "Apply valid-pair mask",
              "role": "reusable step output",
              "inside": "transition_delta = projected_pair_delta * pair_mask"
            }
          },
          {
            "id": "template_pair_transition__add_pair_residual__input_1",
            "from": "pair_state",
            "to": "add_pair_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.add_pair_residual",
            "template_data_ref": "ports.pair_state",
            "connection": {
              "title": "Add pair residual",
              "role": "reusable step input",
              "inside": "updated_pair_state = pair_state + transition_delta"
            }
          },
          {
            "id": "template_pair_transition__add_pair_residual__input_2",
            "from": "transition_delta",
            "to": "add_pair_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.add_pair_residual",
            "template_data_ref": "values.transition_delta",
            "connection": {
              "title": "Add pair residual",
              "role": "reusable step input",
              "inside": "updated_pair_state = pair_state + transition_delta"
            }
          },
          {
            "id": "template_pair_transition__add_pair_residual__output_1",
            "from": "add_pair_residual",
            "to": "updated_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-transition.yaml",
            "standard_block_id": "pair_transition",
            "template_fact_ref": "standard_blocks.pair_transition.steps.add_pair_residual",
            "template_data_ref": "ports.updated_pair_state",
            "connection": {
              "title": "Add pair residual",
              "role": "reusable step output",
              "inside": "updated_pair_state = pair_state + transition_delta"
            }
          }
        ],
        "projectionMode": "standard_block_template",
        "standardBlockRef": "standard_blocks/pair-transition.yaml",
        "standardBlockId": "pair_transition",
        "variant": "layer_norm_expansion_relu_projection_mask_residual",
        "variantLabel": "LayerNorm + expanded MLP + residual",
        "pseudocode": [
          {
            "id": "normalize_pair_state",
            "templateFactRef": "standard_blocks.pair_transition.steps.normalize_pair_state",
            "label": "LayerNorm each pair",
            "operation": "layer_normalization",
            "code": "normalized_pair_state = layer_norm(pair_state)",
            "tex": "z^{norm}_{ij} = LayerNorm(z_{ij})",
            "inputs": [
              "ports.pair_state"
            ],
            "outputs": [
              "values.normalized_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_state",
                "access": "read",
                "localRef": "ports.pair_state",
                "templateFactRef": "standard_blocks.pair_transition.ports.pair_state",
                "occurrences": [
                  {
                    "start": 35,
                    "end": 45
                  }
                ]
              },
              {
                "lexeme": "normalized_pair_state",
                "access": "write",
                "localRef": "values.normalized_pair_state",
                "templateFactRef": "standard_blocks.pair_transition.values.normalized_pair_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 21
                  }
                ]
              }
            ]
          },
          {
            "id": "expand_and_activate",
            "templateFactRef": "standard_blocks.pair_transition.steps.expand_and_activate",
            "label": "Expand channels + ReLU",
            "operation": "linear_relu",
            "code": "expanded_pair_state = relu(linear_1(normalized_pair_state))",
            "tex": "h_{ij} = ReLU(W_1 z^{norm}_{ij})",
            "inputs": [
              "values.normalized_pair_state"
            ],
            "outputs": [
              "values.expanded_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "normalized_pair_state",
                "access": "read",
                "localRef": "values.normalized_pair_state",
                "templateFactRef": "standard_blocks.pair_transition.values.normalized_pair_state",
                "occurrences": [
                  {
                    "start": 36,
                    "end": 57
                  }
                ]
              },
              {
                "lexeme": "expanded_pair_state",
                "access": "write",
                "localRef": "values.expanded_pair_state",
                "templateFactRef": "standard_blocks.pair_transition.values.expanded_pair_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 19
                  }
                ]
              }
            ]
          },
          {
            "id": "project_pair_delta",
            "templateFactRef": "standard_blocks.pair_transition.steps.project_pair_delta",
            "label": "Project back to pair width",
            "operation": "linear",
            "code": "projected_pair_delta = linear_2(expanded_pair_state)",
            "tex": "delta z^{raw}_{ij} = W_2 h_{ij}",
            "inputs": [
              "values.expanded_pair_state"
            ],
            "outputs": [
              "values.projected_pair_delta"
            ],
            "codeBindings": [
              {
                "lexeme": "expanded_pair_state",
                "access": "read",
                "localRef": "values.expanded_pair_state",
                "templateFactRef": "standard_blocks.pair_transition.values.expanded_pair_state",
                "occurrences": [
                  {
                    "start": 32,
                    "end": 51
                  }
                ]
              },
              {
                "lexeme": "projected_pair_delta",
                "access": "write",
                "localRef": "values.projected_pair_delta",
                "templateFactRef": "standard_blocks.pair_transition.values.projected_pair_delta",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 20
                  }
                ]
              }
            ]
          },
          {
            "id": "apply_pair_mask",
            "templateFactRef": "standard_blocks.pair_transition.steps.apply_pair_mask",
            "label": "Apply valid-pair mask",
            "operation": "masking",
            "code": "transition_delta = projected_pair_delta * pair_mask",
            "tex": "delta z_{ij} = m_{ij} delta z^{raw}_{ij}",
            "inputs": [
              "values.projected_pair_delta",
              "ports.pair_mask"
            ],
            "outputs": [
              "values.transition_delta"
            ],
            "codeBindings": [
              {
                "lexeme": "projected_pair_delta",
                "access": "read",
                "localRef": "values.projected_pair_delta",
                "templateFactRef": "standard_blocks.pair_transition.values.projected_pair_delta",
                "occurrences": [
                  {
                    "start": 19,
                    "end": 39
                  }
                ]
              },
              {
                "lexeme": "pair_mask",
                "access": "read",
                "localRef": "ports.pair_mask",
                "templateFactRef": "standard_blocks.pair_transition.ports.pair_mask",
                "occurrences": [
                  {
                    "start": 42,
                    "end": 51
                  }
                ]
              },
              {
                "lexeme": "transition_delta",
                "access": "write",
                "localRef": "values.transition_delta",
                "templateFactRef": "standard_blocks.pair_transition.values.transition_delta",
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
            "id": "add_pair_residual",
            "templateFactRef": "standard_blocks.pair_transition.steps.add_pair_residual",
            "label": "Add pair residual",
            "operation": "residual_add",
            "code": "updated_pair_state = pair_state + transition_delta",
            "tex": "z'_{ij} = z_{ij} + delta z_{ij}",
            "inputs": [
              "ports.pair_state",
              "values.transition_delta"
            ],
            "outputs": [
              "ports.updated_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_state",
                "access": "read",
                "localRef": "ports.pair_state",
                "templateFactRef": "standard_blocks.pair_transition.ports.pair_state",
                "occurrences": [
                  {
                    "start": 21,
                    "end": 31
                  }
                ]
              },
              {
                "lexeme": "transition_delta",
                "access": "read",
                "localRef": "values.transition_delta",
                "templateFactRef": "standard_blocks.pair_transition.values.transition_delta",
                "occurrences": [
                  {
                    "start": 34,
                    "end": 50
                  }
                ]
              },
              {
                "lexeme": "updated_pair_state",
                "access": "write",
                "localRef": "ports.updated_pair_state",
                "templateFactRef": "standard_blocks.pair_transition.ports.updated_pair_state",
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
