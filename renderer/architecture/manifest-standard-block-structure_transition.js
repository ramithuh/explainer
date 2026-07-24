export const manifest = {
  "schemaVersion": "standard-block-browser-manifest-v0.1",
  "build": {
    "generator": "architecture-manifest-builder-v0.5.0",
    "inputDigests": {
      "references/bibliography.yaml": "82f709e900c8a4856e4b834e7d3d7269313b9e4aa08f6bea91d75c33ef974bdd",
      "standard_blocks/structure-transition.yaml": "2708baf8035a8e77ab3e3da3bf2f067225757a813743efb90c72ac0f0c77b723"
    }
  },
  "architecture": {
    "schemaVersion": "standard-block-v0.3",
    "id": "standard_block_structure_transition",
    "name": "Structure Transition",
    "family": "standard_component",
    "status": "review",
    "taskModes": [

    ],
    "sourceYaml": "../../standard_blocks/structure-transition.yaml",
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
    "structure_transition": {
      "id": "structure_transition",
      "schemaVersion": "standard-block-v0.3",
      "name": "Structure Transition",
      "sourceYaml": "../../standard_blocks/structure-transition.yaml",
      "description": "Update a single/token stream with one or more AF2-style structure-transition layers, then apply dropout and LayerNorm to the resulting single state.",
      "math": [
        {
          "id": "project_first",
          "text": "hidden_1 = relu(linear_1(single_state))",
          "tex": "h^{(1)}_i = ReLU(W_1 s_i)",
          "operation": "linear_relu"
        },
        {
          "id": "project_second",
          "text": "hidden_2 = relu(linear_2(hidden_1))",
          "tex": "h^{(2)}_i = ReLU(W_2 h^{(1)}_i)",
          "operation": "linear_relu"
        },
        {
          "id": "project_final_delta",
          "text": "transition_delta = linear_3(hidden_2)",
          "tex": "delta s_i = W_3 h^{(2)}_i",
          "operation": "linear"
        },
        {
          "id": "residual_add",
          "text": "residual_single = single_state + transition_delta",
          "tex": "s^{res}_i = s_i + delta s_i",
          "operation": "residual_add"
        },
        {
          "id": "dropout_layer_norm",
          "text": "updated_single_state = layer_norm(dropout(residual_single))",
          "tex": "s'_i = LayerNorm(Dropout(s^{res}_i))",
          "operation": "dropout_layer_norm"
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
          "id": "c_s",
          "notation": "C_s",
          "kind": "channel",
          "resolution": "boundary",
          "role": "single-state channel width"
        },
        {
          "id": "num_layers",
          "notation": "L",
          "kind": "extent",
          "resolution": "instance",
          "role": "number of residual transition layers"
        }
      ],
      "ports": [
        {
          "id": "single_state",
          "label": "single state",
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
          "role": "post-IPA single/token representation entering the transition MLP",
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
          "id": "updated_single_state",
          "label": "updated single state",
          "direction": "output",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow",
            "state_update"
          ],
          "glyph": "single",
          "notation": "s'",
          "role": "transition-updated single/token representation after dropout and LayerNorm",
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
        }
      ],
      "variants": [
        {
          "id": "three_linear_residual_dropout_norm",
          "label": "Three-linear residual + dropout/norm",
          "description": "Each transition layer applies three same-width linear projections with ReLU between them, adds the input state residually, then the wrapper applies dropout and LayerNorm after the layer stack.",
          "step_refs": [
            "steps.project_first",
            "steps.project_second",
            "steps.project_final_delta",
            "steps.residual_add",
            "steps.dropout_layer_norm"
          ]
        }
      ],
      "defaultVariant": "three_linear_residual_dropout_norm",
      "values": [
        {
          "id": "hidden_1",
          "label": "first hidden state",
          "kind": "representation",
          "glyph": "single",
          "notation": "h_1",
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
          "id": "hidden_2",
          "label": "second hidden state",
          "kind": "representation",
          "glyph": "single",
          "notation": "h_2",
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
          "id": "transition_delta",
          "label": "transition delta",
          "kind": "representation",
          "glyph": "single",
          "notation": "delta_s",
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
          "id": "residual_single",
          "label": "residual single state",
          "kind": "representation",
          "glyph": "single",
          "notation": "s_res",
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
        }
      ],
      "steps": [
        {
          "id": "project_first",
          "label": "First linear + ReLU",
          "operation": "linear_relu",
          "shape_rule": "preserve",
          "inputs": [
            "ports.single_state"
          ],
          "outputs": [
            "values.hidden_1"
          ],
          "code": "hidden_1 = relu(linear_1(single_state))",
          "tex": "h^{(1)}_i = ReLU(W_1 s_i)",
          "role": "first same-width projection inside each structure-transition layer",
          "code_bindings": [
            {
              "lexeme": "single_state",
              "ref": "ports.single_state",
              "access": "read"
            },
            {
              "lexeme": "hidden_1",
              "ref": "values.hidden_1",
              "access": "write"
            }
          ]
        },
        {
          "id": "project_second",
          "label": "Second linear + ReLU",
          "operation": "linear_relu",
          "shape_rule": "preserve",
          "inputs": [
            "values.hidden_1"
          ],
          "outputs": [
            "values.hidden_2"
          ],
          "code": "hidden_2 = relu(linear_2(hidden_1))",
          "tex": "h^{(2)}_i = ReLU(W_2 h^{(1)}_i)",
          "role": "second same-width projection inside each structure-transition layer",
          "code_bindings": [
            {
              "lexeme": "hidden_1",
              "ref": "values.hidden_1",
              "access": "read"
            },
            {
              "lexeme": "hidden_2",
              "ref": "values.hidden_2",
              "access": "write"
            }
          ]
        },
        {
          "id": "project_final_delta",
          "label": "Final zero-init projection",
          "operation": "linear",
          "shape_rule": "preserve",
          "inputs": [
            "values.hidden_2"
          ],
          "outputs": [
            "values.transition_delta"
          ],
          "code": "transition_delta = linear_3(hidden_2)",
          "tex": "delta s_i = W_3 h^{(2)}_i",
          "role": "final same-width projection, initialized as a near-zero residual update in AF2-style implementations",
          "code_bindings": [
            {
              "lexeme": "hidden_2",
              "ref": "values.hidden_2",
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
          "id": "residual_add",
          "label": "Add transition residual",
          "operation": "residual_add",
          "shape_rule": "residual_add",
          "inputs": [
            "ports.single_state",
            "values.transition_delta"
          ],
          "outputs": [
            "values.residual_single"
          ],
          "code": "residual_single = single_state + transition_delta",
          "tex": "s^{res}_i = s_i + delta s_i",
          "role": "preserve the incoming single state while adding the transition MLP update",
          "code_bindings": [
            {
              "lexeme": "single_state",
              "ref": "ports.single_state",
              "access": "read"
            },
            {
              "lexeme": "transition_delta",
              "ref": "values.transition_delta",
              "access": "read"
            },
            {
              "lexeme": "residual_single",
              "ref": "values.residual_single",
              "access": "write"
            }
          ]
        },
        {
          "id": "dropout_layer_norm",
          "label": "Dropout and LayerNorm",
          "operation": "dropout_layer_norm",
          "shape_rule": "preserve",
          "inputs": [
            "values.residual_single"
          ],
          "outputs": [
            "ports.updated_single_state"
          ],
          "code": "updated_single_state = layer_norm(dropout(residual_single))",
          "tex": "s'_i = LayerNorm(Dropout(s^{res}_i))",
          "role": "normalize the residual transition state before frame update or the next layer",
          "code_bindings": [
            {
              "lexeme": "residual_single",
              "ref": "values.residual_single",
              "access": "read"
            },
            {
              "lexeme": "updated_single_state",
              "ref": "ports.updated_single_state",
              "access": "write"
            }
          ]
        }
      ],
      "visualTemplate": {
        "grid": {
          "columns": 7,
          "rows": 3,
          "column_sizing": "content",
          "col_gap": 28,
          "row_gap": 24
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
            "id": "project_first",
            "ref": "steps.project_first",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "hidden_1",
            "ref": "values.hidden_1",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_second",
            "ref": "steps.project_second",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "hidden_2",
            "ref": "values.hidden_2",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_final_delta",
            "ref": "steps.project_final_delta",
            "col": 6,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "transition_delta",
            "ref": "values.transition_delta",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "residual_add",
            "ref": "steps.residual_add",
            "col": 4,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "residual_single",
            "ref": "values.residual_single",
            "col": 5,
            "row": 1,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "dropout_layer_norm",
            "ref": "steps.dropout_layer_norm",
            "col": 6,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "updated_single_state",
            "ref": "ports.updated_single_state",
            "col": 7,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact"
          }
        ]
      },
      "evidencePolicy": {
        "generic_definition": "The template captures the AF2-style structure-module transition pattern; concrete architectures must separately cite where they instantiate it.",
        "usage_requires": [
          "Evidence for the three same-width linear layers and residual add.",
          "Evidence for dropout and LayerNorm after the residual transition."
        ]
      }
    }
  },
  "pseudocode": {
  },
  "boards": {
    "schemaVersion": "standard-block-browser-v0.1",
    "sourceYaml": "../../standard_blocks/structure-transition.yaml",
    "rootBoard": "standard_block_structure_transition",
    "items": [
      {
        "id": "standard_block_structure_transition",
        "kind": "standard_block_template",
        "title": "Structure Transition",
        "summary": "Update a single/token stream with one or more AF2-style structure-transition layers, then apply dropout and LayerNorm to the resulting single state.",
        "notes": [
          "Each transition layer applies three same-width linear projections with ReLU between them, adds the input state residually, then the wrapper applies dropout and LayerNorm after the layer stack.",
          "The template captures the AF2-style structure-module transition pattern; concrete architectures must separately cite where they instantiate it."
        ],
        "subject_ref": "standard_blocks.structure_transition",
        "expansion_depth": 0,
        "grid": {
          "columns": 7,
          "rows": 3,
          "column_sizing": "content",
          "col_gap": 28,
          "row_gap": 24
        },
        "nodes": [
          {
            "id": "single_state",
            "label": "single state",
            "role": "post-IPA single/token representation entering the transition MLP",
            "col": 1,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.ports.single_state",
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
            "id": "project_first",
            "label": "First linear + ReLU",
            "role": "first same-width projection inside each structure-transition layer",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_first",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear_relu",
            "code": "hidden_1 = relu(linear_1(single_state))",
            "tex": "h^{(1)}_i = ReLU(W_1 s_i)",
            "operation": "linear_relu"
          },
          {
            "id": "hidden_1",
            "label": "first hidden state",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.values.hidden_1",
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
            "notation": "h_1"
          },
          {
            "id": "project_second",
            "label": "Second linear + ReLU",
            "role": "second same-width projection inside each structure-transition layer",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_second",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear_relu",
            "code": "hidden_2 = relu(linear_2(hidden_1))",
            "tex": "h^{(2)}_i = ReLU(W_2 h^{(1)}_i)",
            "operation": "linear_relu"
          },
          {
            "id": "hidden_2",
            "label": "second hidden state",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.values.hidden_2",
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
            "notation": "h_2"
          },
          {
            "id": "project_final_delta",
            "label": "Final zero-init projection",
            "role": "final same-width projection, initialized as a near-zero residual update in AF2-style implementations",
            "col": 6,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_final_delta",
            "kind": "operation",
            "scale": "operation",
            "detail": "linear",
            "code": "transition_delta = linear_3(hidden_2)",
            "tex": "delta s_i = W_3 h^{(2)}_i",
            "operation": "linear"
          },
          {
            "id": "transition_delta",
            "label": "transition delta",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.values.transition_delta",
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
            "notation": "delta_s"
          },
          {
            "id": "residual_add",
            "label": "Add transition residual",
            "role": "preserve the incoming single state while adding the transition MLP update",
            "col": 4,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.residual_add",
            "kind": "operation",
            "scale": "operation",
            "detail": "residual_add",
            "code": "residual_single = single_state + transition_delta",
            "tex": "s^{res}_i = s_i + delta s_i",
            "operation": "residual_add"
          },
          {
            "id": "residual_single",
            "label": "residual single state",
            "col": 5,
            "row": 1,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.values.residual_single",
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
            "notation": "s_res"
          },
          {
            "id": "dropout_layer_norm",
            "label": "Dropout and LayerNorm",
            "role": "normalize the residual transition state before frame update or the next layer",
            "col": 6,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.dropout_layer_norm",
            "kind": "operation",
            "scale": "operation",
            "detail": "dropout_layer_norm",
            "code": "updated_single_state = layer_norm(dropout(residual_single))",
            "tex": "s'_i = LayerNorm(Dropout(s^{res}_i))",
            "operation": "dropout_layer_norm"
          },
          {
            "id": "updated_single_state",
            "label": "updated single state",
            "role": "transition-updated single/token representation after dropout and LayerNorm",
            "col": 7,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.ports.updated_single_state",
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
            "notation": "s'",
            "port_ref": "ports.updated_single_state"
          }
        ],
        "edges": [
          {
            "id": "template_structure_transition__project_first__input_1",
            "from": "single_state",
            "to": "project_first",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_first",
            "template_data_ref": "ports.single_state",
            "connection": {
              "title": "First linear + ReLU",
              "role": "reusable step input",
              "inside": "hidden_1 = relu(linear_1(single_state))"
            }
          },
          {
            "id": "template_structure_transition__project_first__output_1",
            "from": "project_first",
            "to": "hidden_1",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_first",
            "template_data_ref": "values.hidden_1",
            "connection": {
              "title": "First linear + ReLU",
              "role": "reusable step output",
              "inside": "hidden_1 = relu(linear_1(single_state))"
            }
          },
          {
            "id": "template_structure_transition__project_second__input_1",
            "from": "hidden_1",
            "to": "project_second",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_second",
            "template_data_ref": "values.hidden_1",
            "connection": {
              "title": "Second linear + ReLU",
              "role": "reusable step input",
              "inside": "hidden_2 = relu(linear_2(hidden_1))"
            }
          },
          {
            "id": "template_structure_transition__project_second__output_1",
            "from": "project_second",
            "to": "hidden_2",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_second",
            "template_data_ref": "values.hidden_2",
            "connection": {
              "title": "Second linear + ReLU",
              "role": "reusable step output",
              "inside": "hidden_2 = relu(linear_2(hidden_1))"
            }
          },
          {
            "id": "template_structure_transition__project_final_delta__input_1",
            "from": "hidden_2",
            "to": "project_final_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_final_delta",
            "template_data_ref": "values.hidden_2",
            "connection": {
              "title": "Final zero-init projection",
              "role": "reusable step input",
              "inside": "transition_delta = linear_3(hidden_2)"
            }
          },
          {
            "id": "template_structure_transition__project_final_delta__output_1",
            "from": "project_final_delta",
            "to": "transition_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.project_final_delta",
            "template_data_ref": "values.transition_delta",
            "connection": {
              "title": "Final zero-init projection",
              "role": "reusable step output",
              "inside": "transition_delta = linear_3(hidden_2)"
            }
          },
          {
            "id": "template_structure_transition__residual_add__input_1",
            "from": "single_state",
            "to": "residual_add",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.residual_add",
            "template_data_ref": "ports.single_state",
            "connection": {
              "title": "Add transition residual",
              "role": "reusable step input",
              "inside": "residual_single = single_state + transition_delta"
            }
          },
          {
            "id": "template_structure_transition__residual_add__input_2",
            "from": "transition_delta",
            "to": "residual_add",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.residual_add",
            "template_data_ref": "values.transition_delta",
            "connection": {
              "title": "Add transition residual",
              "role": "reusable step input",
              "inside": "residual_single = single_state + transition_delta"
            }
          },
          {
            "id": "template_structure_transition__residual_add__output_1",
            "from": "residual_add",
            "to": "residual_single",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.residual_add",
            "template_data_ref": "values.residual_single",
            "connection": {
              "title": "Add transition residual",
              "role": "reusable step output",
              "inside": "residual_single = single_state + transition_delta"
            }
          },
          {
            "id": "template_structure_transition__dropout_layer_norm__input_1",
            "from": "residual_single",
            "to": "dropout_layer_norm",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.dropout_layer_norm",
            "template_data_ref": "values.residual_single",
            "connection": {
              "title": "Dropout and LayerNorm",
              "role": "reusable step input",
              "inside": "updated_single_state = layer_norm(dropout(residual_single))"
            }
          },
          {
            "id": "template_structure_transition__dropout_layer_norm__output_1",
            "from": "dropout_layer_norm",
            "to": "updated_single_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/structure-transition.yaml",
            "standard_block_id": "structure_transition",
            "template_fact_ref": "standard_blocks.structure_transition.steps.dropout_layer_norm",
            "template_data_ref": "ports.updated_single_state",
            "connection": {
              "title": "Dropout and LayerNorm",
              "role": "reusable step output",
              "inside": "updated_single_state = layer_norm(dropout(residual_single))"
            }
          }
        ],
        "projectionMode": "standard_block_template",
        "standardBlockRef": "standard_blocks/structure-transition.yaml",
        "standardBlockId": "structure_transition",
        "variant": "three_linear_residual_dropout_norm",
        "variantLabel": "Three-linear residual + dropout/norm",
        "pseudocode": [
          {
            "id": "project_first",
            "templateFactRef": "standard_blocks.structure_transition.steps.project_first",
            "label": "First linear + ReLU",
            "operation": "linear_relu",
            "code": "hidden_1 = relu(linear_1(single_state))",
            "tex": "h^{(1)}_i = ReLU(W_1 s_i)",
            "inputs": [
              "ports.single_state"
            ],
            "outputs": [
              "values.hidden_1"
            ],
            "codeBindings": [
              {
                "lexeme": "single_state",
                "access": "read",
                "localRef": "ports.single_state",
                "templateFactRef": "standard_blocks.structure_transition.ports.single_state",
                "occurrences": [
                  {
                    "start": 25,
                    "end": 37
                  }
                ]
              },
              {
                "lexeme": "hidden_1",
                "access": "write",
                "localRef": "values.hidden_1",
                "templateFactRef": "standard_blocks.structure_transition.values.hidden_1",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 8
                  }
                ]
              }
            ]
          },
          {
            "id": "project_second",
            "templateFactRef": "standard_blocks.structure_transition.steps.project_second",
            "label": "Second linear + ReLU",
            "operation": "linear_relu",
            "code": "hidden_2 = relu(linear_2(hidden_1))",
            "tex": "h^{(2)}_i = ReLU(W_2 h^{(1)}_i)",
            "inputs": [
              "values.hidden_1"
            ],
            "outputs": [
              "values.hidden_2"
            ],
            "codeBindings": [
              {
                "lexeme": "hidden_1",
                "access": "read",
                "localRef": "values.hidden_1",
                "templateFactRef": "standard_blocks.structure_transition.values.hidden_1",
                "occurrences": [
                  {
                    "start": 25,
                    "end": 33
                  }
                ]
              },
              {
                "lexeme": "hidden_2",
                "access": "write",
                "localRef": "values.hidden_2",
                "templateFactRef": "standard_blocks.structure_transition.values.hidden_2",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 8
                  }
                ]
              }
            ]
          },
          {
            "id": "project_final_delta",
            "templateFactRef": "standard_blocks.structure_transition.steps.project_final_delta",
            "label": "Final zero-init projection",
            "operation": "linear",
            "code": "transition_delta = linear_3(hidden_2)",
            "tex": "delta s_i = W_3 h^{(2)}_i",
            "inputs": [
              "values.hidden_2"
            ],
            "outputs": [
              "values.transition_delta"
            ],
            "codeBindings": [
              {
                "lexeme": "hidden_2",
                "access": "read",
                "localRef": "values.hidden_2",
                "templateFactRef": "standard_blocks.structure_transition.values.hidden_2",
                "occurrences": [
                  {
                    "start": 28,
                    "end": 36
                  }
                ]
              },
              {
                "lexeme": "transition_delta",
                "access": "write",
                "localRef": "values.transition_delta",
                "templateFactRef": "standard_blocks.structure_transition.values.transition_delta",
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
            "id": "residual_add",
            "templateFactRef": "standard_blocks.structure_transition.steps.residual_add",
            "label": "Add transition residual",
            "operation": "residual_add",
            "code": "residual_single = single_state + transition_delta",
            "tex": "s^{res}_i = s_i + delta s_i",
            "inputs": [
              "ports.single_state",
              "values.transition_delta"
            ],
            "outputs": [
              "values.residual_single"
            ],
            "codeBindings": [
              {
                "lexeme": "single_state",
                "access": "read",
                "localRef": "ports.single_state",
                "templateFactRef": "standard_blocks.structure_transition.ports.single_state",
                "occurrences": [
                  {
                    "start": 18,
                    "end": 30
                  }
                ]
              },
              {
                "lexeme": "transition_delta",
                "access": "read",
                "localRef": "values.transition_delta",
                "templateFactRef": "standard_blocks.structure_transition.values.transition_delta",
                "occurrences": [
                  {
                    "start": 33,
                    "end": 49
                  }
                ]
              },
              {
                "lexeme": "residual_single",
                "access": "write",
                "localRef": "values.residual_single",
                "templateFactRef": "standard_blocks.structure_transition.values.residual_single",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 15
                  }
                ]
              }
            ]
          },
          {
            "id": "dropout_layer_norm",
            "templateFactRef": "standard_blocks.structure_transition.steps.dropout_layer_norm",
            "label": "Dropout and LayerNorm",
            "operation": "dropout_layer_norm",
            "code": "updated_single_state = layer_norm(dropout(residual_single))",
            "tex": "s'_i = LayerNorm(Dropout(s^{res}_i))",
            "inputs": [
              "values.residual_single"
            ],
            "outputs": [
              "ports.updated_single_state"
            ],
            "codeBindings": [
              {
                "lexeme": "residual_single",
                "access": "read",
                "localRef": "values.residual_single",
                "templateFactRef": "standard_blocks.structure_transition.values.residual_single",
                "occurrences": [
                  {
                    "start": 42,
                    "end": 57
                  }
                ]
              },
              {
                "lexeme": "updated_single_state",
                "access": "write",
                "localRef": "ports.updated_single_state",
                "templateFactRef": "standard_blocks.structure_transition.ports.updated_single_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 20
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
