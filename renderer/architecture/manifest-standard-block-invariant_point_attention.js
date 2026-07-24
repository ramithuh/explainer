export const manifest = {
  "schemaVersion": "standard-block-browser-manifest-v0.1",
  "build": {
    "generator": "architecture-manifest-builder-v0.5.0",
    "inputDigests": {
      "references/bibliography.yaml": "82f709e900c8a4856e4b834e7d3d7269313b9e4aa08f6bea91d75c33ef974bdd",
      "standard_blocks/invariant-point-attention.yaml": "a5c02021172a36135808767943f20309424cc956240bf956ed156d1c380bb7b5"
    }
  },
  "architecture": {
    "schemaVersion": "standard-block-v0.3",
    "id": "standard_block_invariant_point_attention",
    "name": "Invariant Point Attention",
    "family": "standard_component",
    "status": "review",
    "taskModes": [

    ],
    "sourceYaml": "../../standard_blocks/invariant-point-attention.yaml",
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
    "invariant_point_attention": {
      "id": "invariant_point_attention",
      "schemaVersion": "standard-block-v0.3",
      "name": "Invariant Point Attention",
      "sourceYaml": "../../standard_blocks/invariant-point-attention.yaml",
      "description": "Combine scalar attention, pair bias, and frame-aware point-distance logits, then aggregate scalar, point, and attention-weighted pair values into a projected IPA update.",
      "math": [
        {
          "id": "project_scalar_terms",
          "text": "q_s, k_s, v_s = project_scalar_qkv(single_state)",
          "operation": "scalar_qkv_projection"
        },
        {
          "id": "project_local_points",
          "text": "q_p_local, k_p_local, v_p_local = project_point_qkv(single_state)",
          "operation": "point_qkv_projection"
        },
        {
          "id": "transform_points_to_global",
          "text": "q_p_global, k_p_global, v_p_global = frames.apply(q_p_local, k_p_local, v_p_local)",
          "operation": "rigid_apply"
        },
        {
          "id": "scalar_attention_logits",
          "text": "scalar_logits = dot(q_s, k_s) * scalar_scale",
          "operation": "attention_logits"
        },
        {
          "id": "point_distance_logits",
          "text": "point_logits = -0.5 * point_weight * squared_distance(q_p_global, k_p_global)",
          "operation": "invariant_point_distance"
        },
        {
          "id": "project_pair_bias",
          "text": "pair_bias = linear_b(pair_context)",
          "operation": "pair_bias_projection"
        },
        {
          "id": "combine_and_mask_logits",
          "text": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)",
          "operation": "ipa_logit_composition"
        },
        {
          "id": "softmax_attention",
          "text": "attention = softmax(combined_logits, dim=keys)",
          "operation": "softmax"
        },
        {
          "id": "aggregate_scalar_values",
          "text": "scalar_context = weighted_sum(attention, v_s)",
          "operation": "weighted_sum"
        },
        {
          "id": "aggregate_global_points",
          "text": "global_point_context = weighted_sum(attention, v_p_global)",
          "operation": "weighted_point_sum"
        },
        {
          "id": "return_points_to_local_frame",
          "text": "local_point_context = concat(frames.invert_apply(global_point_context), point_norms(global_point_context))",
          "operation": "rigid_inverse_apply"
        },
        {
          "id": "aggregate_pair_values",
          "text": "pair_value_context = weighted_sum(attention, pair_context)",
          "operation": "pair_value_aggregation"
        },
        {
          "id": "project_ipa_delta",
          "text": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))",
          "operation": "output_projection"
        }
      ],
      "kind": "attention",
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
          "id": "c_z",
          "notation": "C_z",
          "kind": "channel",
          "resolution": "boundary",
          "role": "pair-context channel width"
        },
        {
          "id": "c_hidden",
          "notation": "C_h",
          "kind": "channel",
          "resolution": "instance",
          "role": "per-head scalar query/key/value width"
        },
        {
          "id": "h",
          "notation": "H",
          "kind": "heads",
          "resolution": "instance",
          "role": "number of attention heads"
        },
        {
          "id": "p_q",
          "notation": "P_q",
          "kind": "points",
          "resolution": "instance",
          "role": "query and key points per head"
        },
        {
          "id": "p_v",
          "notation": "P_v",
          "kind": "points",
          "resolution": "instance",
          "role": "value points per head"
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
                "id": "single_channel",
                "dimension": "c_s"
              }
            ]
          }
        },
        {
          "id": "pair_context",
          "label": "pair context",
          "direction": "conditioning",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "data_flow"
          ],
          "glyph": "pair",
          "notation": "z",
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
          "id": "frames",
          "label": "current frames",
          "direction": "conditioning",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "data_flow"
          ],
          "glyph": "frames",
          "notation": "T",
          "shape_contract": {
            "kind": "frames",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "query_token",
                "dimension": "n"
              }
            ]
          }
        },
        {
          "id": "mask",
          "label": "valid-item mask",
          "direction": "conditioning",
          "kind": "mask",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "control"
          ],
          "glyph": "vector",
          "notation": "m",
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
              }
            ]
          }
        },
        {
          "id": "ipa_delta",
          "label": "IPA update",
          "direction": "output",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow"
          ],
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
                "id": "query_token",
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
          "id": "full_ipa",
          "label": "Full frame-aware IPA",
          "description": "Full scalar, point-distance, pair-bias, scalar-value, point-value, and pair-value attention ending at the projected IPA update.",
          "step_refs": [
            "steps.project_scalar_terms",
            "steps.project_local_points",
            "steps.transform_points_to_global",
            "steps.scalar_attention_logits",
            "steps.point_distance_logits",
            "steps.project_pair_bias",
            "steps.combine_and_mask_logits",
            "steps.softmax_attention",
            "steps.aggregate_scalar_values",
            "steps.aggregate_global_points",
            "steps.return_points_to_local_frame",
            "steps.aggregate_pair_values",
            "steps.project_ipa_delta"
          ]
        }
      ],
      "defaultVariant": "full_ipa",
      "values": [
        {
          "id": "scalar_terms",
          "label": "scalar Q/K/V",
          "kind": "representation",
          "glyph": "single",
          "notation": "qkv_s",
          "shape_contract": {
            "kind": "tuple",
            "fields": [
              {
                "id": "q",
                "shape": {
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
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "hidden_channel",
                      "dimension": "c_hidden"
                    }
                  ]
                }
              },
              {
                "id": "k",
                "shape": {
                  "kind": "tensor",
                  "axes": [
                    {
                      "id": "batch",
                      "dimension": "b"
                    },
                    {
                      "id": "key_token",
                      "dimension": "n"
                    },
                    {
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "hidden_channel",
                      "dimension": "c_hidden"
                    }
                  ]
                }
              },
              {
                "id": "v",
                "shape": {
                  "kind": "tensor",
                  "axes": [
                    {
                      "id": "batch",
                      "dimension": "b"
                    },
                    {
                      "id": "key_token",
                      "dimension": "n"
                    },
                    {
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "value_channel",
                      "dimension": "c_hidden"
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "id": "local_points",
          "label": "local Q/K/V points",
          "kind": "geometry",
          "glyph": "coordinates",
          "notation": "qkv_p",
          "shape_contract": {
            "kind": "tuple",
            "fields": [
              {
                "id": "q",
                "shape": {
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
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "query_point",
                      "dimension": "p_q"
                    },
                    {
                      "id": "coordinate",
                      "dimension": 3
                    }
                  ]
                }
              },
              {
                "id": "k",
                "shape": {
                  "kind": "tensor",
                  "axes": [
                    {
                      "id": "batch",
                      "dimension": "b"
                    },
                    {
                      "id": "key_token",
                      "dimension": "n"
                    },
                    {
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "query_point",
                      "dimension": "p_q"
                    },
                    {
                      "id": "coordinate",
                      "dimension": 3
                    }
                  ]
                }
              },
              {
                "id": "v",
                "shape": {
                  "kind": "tensor",
                  "axes": [
                    {
                      "id": "batch",
                      "dimension": "b"
                    },
                    {
                      "id": "key_token",
                      "dimension": "n"
                    },
                    {
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "value_point",
                      "dimension": "p_v"
                    },
                    {
                      "id": "coordinate",
                      "dimension": 3
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "id": "global_points",
          "label": "global Q/K/V points",
          "kind": "geometry",
          "glyph": "coordinates",
          "notation": "T_qkv_p",
          "shape_contract": {
            "kind": "tuple",
            "fields": [
              {
                "id": "q",
                "shape": {
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
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "query_point",
                      "dimension": "p_q"
                    },
                    {
                      "id": "coordinate",
                      "dimension": 3
                    }
                  ]
                }
              },
              {
                "id": "k",
                "shape": {
                  "kind": "tensor",
                  "axes": [
                    {
                      "id": "batch",
                      "dimension": "b"
                    },
                    {
                      "id": "key_token",
                      "dimension": "n"
                    },
                    {
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "query_point",
                      "dimension": "p_q"
                    },
                    {
                      "id": "coordinate",
                      "dimension": 3
                    }
                  ]
                }
              },
              {
                "id": "v",
                "shape": {
                  "kind": "tensor",
                  "axes": [
                    {
                      "id": "batch",
                      "dimension": "b"
                    },
                    {
                      "id": "key_token",
                      "dimension": "n"
                    },
                    {
                      "id": "head",
                      "dimension": "h"
                    },
                    {
                      "id": "value_point",
                      "dimension": "p_v"
                    },
                    {
                      "id": "coordinate",
                      "dimension": 3
                    }
                  ]
                }
              }
            ]
          }
        },
        {
          "id": "scalar_logits",
          "label": "scalar logits",
          "kind": "logit",
          "glyph": "pair",
          "notation": "l_s",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "head",
                "dimension": "h"
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
          "id": "point_logits",
          "label": "point-distance logits",
          "kind": "logit",
          "glyph": "pair",
          "notation": "l_p",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "head",
                "dimension": "h"
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
          "id": "pair_bias",
          "label": "pair bias",
          "kind": "logit",
          "glyph": "pair",
          "notation": "b_z",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "head",
                "dimension": "h"
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
          "id": "combined_logits",
          "label": "combined masked logits",
          "kind": "logit",
          "glyph": "pair",
          "notation": "l",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "head",
                "dimension": "h"
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
          "id": "attention_weights",
          "label": "attention weights",
          "kind": "weight",
          "glyph": "pair",
          "notation": "a",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "batch",
                "dimension": "b"
              },
              {
                "id": "head",
                "dimension": "h"
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
          "id": "scalar_context",
          "label": "scalar context",
          "kind": "representation",
          "glyph": "single",
          "notation": "o_s",
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
                "id": "head",
                "dimension": "h"
              },
              {
                "id": "value_channel",
                "dimension": "c_hidden"
              }
            ]
          }
        },
        {
          "id": "global_point_context",
          "label": "global point context",
          "kind": "geometry",
          "glyph": "coordinates",
          "notation": "o_p_global",
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
                "id": "head",
                "dimension": "h"
              },
              {
                "id": "value_point",
                "dimension": "p_v"
              },
              {
                "id": "coordinate",
                "dimension": 3
              }
            ]
          }
        },
        {
          "id": "local_point_context",
          "label": "local points + norms",
          "kind": "geometry",
          "glyph": "coordinates",
          "notation": "o_p_local",
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
                "id": "head",
                "dimension": "h"
              },
              {
                "id": "value_point",
                "dimension": "p_v"
              },
              {
                "id": "point_feature",
                "dimension": 4
              }
            ]
          }
        },
        {
          "id": "pair_value_context",
          "label": "pair-value context",
          "kind": "representation",
          "glyph": "single",
          "notation": "o_z",
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
                "id": "head",
                "dimension": "h"
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
          "id": "project_scalar_terms",
          "label": "Project scalar Q/K/V",
          "operation": "scalar_qkv_projection",
          "shape_rule": "scalar_qkv_projection",
          "inputs": [
            "ports.single_state"
          ],
          "outputs": [
            "values.scalar_terms"
          ],
          "code": "q_s, k_s, v_s = project_scalar_qkv(single_state)",
          "code_bindings": [
            {
              "lexeme": "q_s",
              "ref": "values.scalar_terms",
              "access": "write"
            },
            {
              "lexeme": "k_s",
              "ref": "values.scalar_terms",
              "access": "write"
            },
            {
              "lexeme": "v_s",
              "ref": "values.scalar_terms",
              "access": "write"
            },
            {
              "lexeme": "single_state",
              "ref": "ports.single_state",
              "access": "read"
            }
          ]
        },
        {
          "id": "project_local_points",
          "label": "Project local Q/K/V points",
          "operation": "point_qkv_projection",
          "shape_rule": "point_qkv_projection",
          "inputs": [
            "ports.single_state"
          ],
          "outputs": [
            "values.local_points"
          ],
          "code": "q_p_local, k_p_local, v_p_local = project_point_qkv(single_state)",
          "code_bindings": [
            {
              "lexeme": "q_p_local",
              "ref": "values.local_points",
              "access": "write"
            },
            {
              "lexeme": "k_p_local",
              "ref": "values.local_points",
              "access": "write"
            },
            {
              "lexeme": "v_p_local",
              "ref": "values.local_points",
              "access": "write"
            },
            {
              "lexeme": "single_state",
              "ref": "ports.single_state",
              "access": "read"
            }
          ]
        },
        {
          "id": "transform_points_to_global",
          "label": "Express points in global frame",
          "operation": "rigid_apply",
          "shape_rule": "rigid_apply",
          "inputs": [
            "values.local_points",
            "ports.frames"
          ],
          "outputs": [
            "values.global_points"
          ],
          "code": "q_p_global, k_p_global, v_p_global = frames.apply(q_p_local, k_p_local, v_p_local)",
          "code_bindings": [
            {
              "lexeme": "q_p_global",
              "ref": "values.global_points",
              "access": "write"
            },
            {
              "lexeme": "k_p_global",
              "ref": "values.global_points",
              "access": "write"
            },
            {
              "lexeme": "v_p_global",
              "ref": "values.global_points",
              "access": "write"
            },
            {
              "lexeme": "frames",
              "ref": "ports.frames",
              "access": "read"
            },
            {
              "lexeme": "q_p_local",
              "ref": "values.local_points",
              "access": "read"
            },
            {
              "lexeme": "k_p_local",
              "ref": "values.local_points",
              "access": "read"
            },
            {
              "lexeme": "v_p_local",
              "ref": "values.local_points",
              "access": "read"
            }
          ]
        },
        {
          "id": "scalar_attention_logits",
          "label": "Form scalar logits",
          "operation": "attention_logits",
          "shape_rule": "attention_logits",
          "inputs": [
            "values.scalar_terms"
          ],
          "outputs": [
            "values.scalar_logits"
          ],
          "code": "scalar_logits = dot(q_s, k_s) * scalar_scale",
          "code_bindings": [
            {
              "lexeme": "scalar_logits",
              "ref": "values.scalar_logits",
              "access": "write"
            },
            {
              "lexeme": "q_s",
              "ref": "values.scalar_terms",
              "access": "read"
            },
            {
              "lexeme": "k_s",
              "ref": "values.scalar_terms",
              "access": "read"
            }
          ]
        },
        {
          "id": "point_distance_logits",
          "label": "Form point-distance logits",
          "operation": "invariant_point_distance",
          "shape_rule": "point_distance_logits",
          "inputs": [
            "values.global_points"
          ],
          "outputs": [
            "values.point_logits"
          ],
          "code": "point_logits = -0.5 * point_weight * squared_distance(q_p_global, k_p_global)",
          "code_bindings": [
            {
              "lexeme": "point_logits",
              "ref": "values.point_logits",
              "access": "write"
            },
            {
              "lexeme": "q_p_global",
              "ref": "values.global_points",
              "access": "read"
            },
            {
              "lexeme": "k_p_global",
              "ref": "values.global_points",
              "access": "read"
            }
          ]
        },
        {
          "id": "project_pair_bias",
          "label": "Project pair bias",
          "operation": "pair_bias_projection",
          "shape_rule": "pair_bias_projection",
          "inputs": [
            "ports.pair_context"
          ],
          "outputs": [
            "values.pair_bias"
          ],
          "code": "pair_bias = linear_b(pair_context)",
          "code_bindings": [
            {
              "lexeme": "pair_bias",
              "ref": "values.pair_bias",
              "access": "write"
            },
            {
              "lexeme": "pair_context",
              "ref": "ports.pair_context",
              "access": "read"
            }
          ]
        },
        {
          "id": "combine_and_mask_logits",
          "label": "Combine logits and apply mask",
          "operation": "ipa_logit_composition",
          "shape_rule": "logit_composition",
          "inputs": [
            "values.scalar_logits",
            "values.point_logits",
            "values.pair_bias",
            "ports.mask"
          ],
          "outputs": [
            "values.combined_logits"
          ],
          "code": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)",
          "code_bindings": [
            {
              "lexeme": "combined_logits",
              "ref": "values.combined_logits",
              "access": "write"
            },
            {
              "lexeme": "scalar_logits",
              "ref": "values.scalar_logits",
              "access": "read"
            },
            {
              "lexeme": "point_logits",
              "ref": "values.point_logits",
              "access": "read"
            },
            {
              "lexeme": "pair_bias",
              "ref": "values.pair_bias",
              "access": "read"
            },
            {
              "lexeme": "mask",
              "ref": "ports.mask",
              "access": "read"
            }
          ]
        },
        {
          "id": "softmax_attention",
          "label": "Normalize over keys",
          "operation": "softmax",
          "shape_rule": "softmax",
          "inputs": [
            "values.combined_logits"
          ],
          "outputs": [
            "values.attention_weights"
          ],
          "code": "attention = softmax(combined_logits, dim=keys)",
          "code_bindings": [
            {
              "lexeme": "attention",
              "ref": "values.attention_weights",
              "access": "write"
            },
            {
              "lexeme": "combined_logits",
              "ref": "values.combined_logits",
              "access": "read"
            }
          ]
        },
        {
          "id": "aggregate_scalar_values",
          "label": "Aggregate scalar values",
          "operation": "weighted_sum",
          "shape_rule": "weighted_sum",
          "inputs": [
            "values.attention_weights",
            "values.scalar_terms"
          ],
          "outputs": [
            "values.scalar_context"
          ],
          "code": "scalar_context = weighted_sum(attention, v_s)",
          "code_bindings": [
            {
              "lexeme": "scalar_context",
              "ref": "values.scalar_context",
              "access": "write"
            },
            {
              "lexeme": "attention",
              "ref": "values.attention_weights",
              "access": "read"
            },
            {
              "lexeme": "v_s",
              "ref": "values.scalar_terms",
              "access": "read"
            }
          ]
        },
        {
          "id": "aggregate_global_points",
          "label": "Aggregate value points",
          "operation": "weighted_point_sum",
          "shape_rule": "weighted_point_sum",
          "inputs": [
            "values.attention_weights",
            "values.global_points"
          ],
          "outputs": [
            "values.global_point_context"
          ],
          "code": "global_point_context = weighted_sum(attention, v_p_global)",
          "code_bindings": [
            {
              "lexeme": "global_point_context",
              "ref": "values.global_point_context",
              "access": "write"
            },
            {
              "lexeme": "attention",
              "ref": "values.attention_weights",
              "access": "read"
            },
            {
              "lexeme": "v_p_global",
              "ref": "values.global_points",
              "access": "read"
            }
          ]
        },
        {
          "id": "return_points_to_local_frame",
          "label": "Return points to query frame",
          "operation": "rigid_inverse_apply",
          "shape_rule": "rigid_inverse_apply",
          "inputs": [
            "values.global_point_context",
            "ports.frames"
          ],
          "outputs": [
            "values.local_point_context"
          ],
          "code": "local_point_context = concat(frames.invert_apply(global_point_context), point_norms(global_point_context))",
          "code_bindings": [
            {
              "lexeme": "local_point_context",
              "ref": "values.local_point_context",
              "access": "write"
            },
            {
              "lexeme": "frames",
              "ref": "ports.frames",
              "access": "read"
            },
            {
              "lexeme": "global_point_context",
              "ref": "values.global_point_context",
              "access": "read"
            }
          ]
        },
        {
          "id": "aggregate_pair_values",
          "label": "Attention-weighted pair-value aggregation",
          "operation": "pair_value_aggregation",
          "shape_rule": "pair_value_aggregation",
          "inputs": [
            "values.attention_weights",
            "ports.pair_context"
          ],
          "outputs": [
            "values.pair_value_context"
          ],
          "code": "pair_value_context = weighted_sum(attention, pair_context)",
          "code_bindings": [
            {
              "lexeme": "pair_value_context",
              "ref": "values.pair_value_context",
              "access": "write"
            },
            {
              "lexeme": "attention",
              "ref": "values.attention_weights",
              "access": "read"
            },
            {
              "lexeme": "pair_context",
              "ref": "ports.pair_context",
              "access": "read"
            }
          ]
        },
        {
          "id": "project_ipa_delta",
          "label": "Concatenate + project",
          "operation": "output_projection",
          "shape_rule": "output_projection",
          "inputs": [
            "values.scalar_context",
            "values.local_point_context",
            "values.pair_value_context"
          ],
          "outputs": [
            "ports.ipa_delta"
          ],
          "code": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))",
          "code_bindings": [
            {
              "lexeme": "ipa_delta",
              "ref": "ports.ipa_delta",
              "access": "write"
            },
            {
              "lexeme": "scalar_context",
              "ref": "values.scalar_context",
              "access": "read"
            },
            {
              "lexeme": "local_point_context",
              "ref": "values.local_point_context",
              "access": "read"
            },
            {
              "lexeme": "pair_value_context",
              "ref": "values.pair_value_context",
              "access": "read"
            }
          ]
        }
      ],
      "visualTemplate": {
        "grid": {
          "columns": 12,
          "rows": 9,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 20,
          "row_gap": 40
        },
        "nodes": [
          {
            "id": "single_state",
            "ref": "ports.single_state",
            "col": 1,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "pair_context",
            "ref": "ports.pair_context",
            "col": 1,
            "row": 3,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "frames",
            "ref": "ports.frames",
            "col": 1,
            "row": 4,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "mask",
            "ref": "ports.mask",
            "col": 4,
            "row": 4,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "ipa_delta",
            "ref": "ports.ipa_delta",
            "col": 12,
            "row": 8,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "project_scalar_terms",
            "ref": "steps.project_scalar_terms",
            "col": 2,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "scalar_terms",
            "ref": "values.scalar_terms",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "scalar_attention_logits",
            "ref": "steps.scalar_attention_logits",
            "col": 4,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "scalar_logits",
            "ref": "values.scalar_logits",
            "col": 5,
            "row": 1,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_local_points",
            "ref": "steps.project_local_points",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "local_points",
            "ref": "values.local_points",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "transform_points_to_global",
            "ref": "steps.transform_points_to_global",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "global_points",
            "ref": "values.global_points",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "point_distance_logits",
            "ref": "steps.point_distance_logits",
            "col": 6,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "point_logits",
            "ref": "values.point_logits",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_pair_bias",
            "ref": "steps.project_pair_bias",
            "col": 2,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_bias",
            "ref": "values.pair_bias",
            "col": 5,
            "row": 3,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "combine_and_mask_logits",
            "ref": "steps.combine_and_mask_logits",
            "col": 6,
            "row": 4,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "combined_logits",
            "ref": "values.combined_logits",
            "col": 7,
            "row": 4,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "softmax_attention",
            "ref": "steps.softmax_attention",
            "col": 6,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "attention_weights",
            "ref": "values.attention_weights",
            "col": 7,
            "row": 5,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "aggregate_scalar_values",
            "ref": "steps.aggregate_scalar_values",
            "col": 9,
            "row": 7,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "scalar_context",
            "ref": "values.scalar_context",
            "col": 10,
            "row": 7,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "aggregate_pair_values",
            "ref": "steps.aggregate_pair_values",
            "col": 9,
            "row": 8,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_value_context",
            "ref": "values.pair_value_context",
            "col": 10,
            "row": 8,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "aggregate_global_points",
            "ref": "steps.aggregate_global_points",
            "col": 7,
            "row": 9,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "global_point_context",
            "ref": "values.global_point_context",
            "col": 8,
            "row": 9,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "return_points_to_local_frame",
            "ref": "steps.return_points_to_local_frame",
            "col": 9,
            "row": 9,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "local_point_context",
            "ref": "values.local_point_context",
            "col": 10,
            "row": 9,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_ipa_delta",
            "ref": "steps.project_ipa_delta",
            "col": 11,
            "row": 8,
            "prominence": "primary",
            "treatment": "compact"
          }
        ],
        "segments": [
          {
            "id": "attention_weights",
            "label": "Compute attention weights",
            "description": "Form scalar and invariant point-distance logits, add pair bias, apply the validity mask, and normalize once over keys. Bundled Q/K/V projections also prepare the value terms consumed in Phase 2.",
            "node_refs": [
              "ports.single_state",
              "ports.pair_context",
              "ports.frames",
              "ports.mask",
              "steps.project_scalar_terms",
              "values.scalar_terms",
              "steps.scalar_attention_logits",
              "values.scalar_logits",
              "steps.project_local_points",
              "values.local_points",
              "steps.transform_points_to_global",
              "values.global_points",
              "steps.point_distance_logits",
              "values.point_logits",
              "steps.project_pair_bias",
              "values.pair_bias",
              "steps.combine_and_mask_logits",
              "values.combined_logits",
              "steps.softmax_attention",
              "values.attention_weights"
            ]
          },
          {
            "id": "value_extraction",
            "label": "Extract and fuse values",
            "description": "Reuse the shared attention weights for scalar, point, and pair values, return points to the local frame, align the three final contexts, then concatenate and project them into the IPA update.",
            "node_refs": [
              "steps.aggregate_scalar_values",
              "values.scalar_context",
              "steps.aggregate_global_points",
              "values.global_point_context",
              "steps.return_points_to_local_frame",
              "values.local_point_context",
              "steps.aggregate_pair_values",
              "values.pair_value_context",
              "steps.project_ipa_delta",
              "ports.ipa_delta"
            ]
          }
        ]
      },
      "evidencePolicy": {
        "generic_definition": "Full IPA anatomy is reusable vocabulary ending at the projected attention update; residual addition, dropout, and normalization belong to the surrounding architecture layer.",
        "usage_requires": [
          "Evidence for scalar, point-distance, and pair logit terms.",
          "Evidence for scalar and point aggregation plus attention-weighted pair-value aggregation.",
          "Evidence that the output projection returns the IPA update before any architecture-owned residual wrapper."
        ]
      }
    }
  },
  "pseudocode": {
  },
  "boards": {
    "schemaVersion": "standard-block-browser-v0.1",
    "sourceYaml": "../../standard_blocks/invariant-point-attention.yaml",
    "rootBoard": "standard_block_invariant_point_attention",
    "items": [
      {
        "id": "standard_block_invariant_point_attention",
        "kind": "standard_block_template",
        "title": "Invariant Point Attention",
        "summary": "Combine scalar attention, pair bias, and frame-aware point-distance logits, then aggregate scalar, point, and attention-weighted pair values into a projected IPA update.",
        "notes": [
          "Full scalar, point-distance, pair-bias, scalar-value, point-value, and pair-value attention ending at the projected IPA update.",
          "Full IPA anatomy is reusable vocabulary ending at the projected attention update; residual addition, dropout, and normalization belong to the surrounding architecture layer."
        ],
        "subject_ref": "standard_blocks.invariant_point_attention",
        "expansion_depth": 0,
        "grid": {
          "columns": 12,
          "rows": 9,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 20,
          "row_gap": 40
        },
        "nodes": [
          {
            "id": "single_state",
            "label": "single state",
            "col": 1,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.ports.single_state",
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
                  "id": "query_token",
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
            "id": "pair_context",
            "label": "pair context",
            "col": 1,
            "row": 3,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.ports.pair_context",
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
            "port_ref": "ports.pair_context"
          },
          {
            "id": "frames",
            "label": "current frames",
            "col": 1,
            "row": 4,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.ports.frames",
            "kind": "representation",
            "shape": "B x N",
            "resolved_shape": {
              "kind": "frames",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "query_token",
                  "dimension": "N"
                }
              ],
              "label": "B x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "frames",
            "flow_family": "frame",
            "notation": "T",
            "port_ref": "ports.frames"
          },
          {
            "id": "mask",
            "label": "valid-item mask",
            "col": 4,
            "row": 4,
            "prominence": "context",
            "treatment": "chip",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.ports.mask",
            "kind": "representation",
            "shape": "B x N",
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
                }
              ],
              "label": "B x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "vector",
            "notation": "m",
            "port_ref": "ports.mask"
          },
          {
            "id": "ipa_delta",
            "label": "IPA update",
            "col": 12,
            "row": 8,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.ports.ipa_delta",
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
                  "id": "query_token",
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
            "notation": "delta_s",
            "port_ref": "ports.ipa_delta"
          },
          {
            "id": "project_scalar_terms",
            "label": "Project scalar Q/K/V",
            "col": 2,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_scalar_terms",
            "kind": "operation",
            "scale": "operation",
            "detail": "scalar_qkv_projection",
            "code": "q_s, k_s, v_s = project_scalar_qkv(single_state)",
            "operation": "scalar_qkv_projection"
          },
          {
            "id": "scalar_terms",
            "label": "scalar Q/K/V",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.scalar_terms",
            "kind": "representation",
            "shape": "q: B x N x H x C_h; k: B x N x H x C_h; v: B x N x H x C_h",
            "resolved_shape": {
              "kind": "tuple",
              "fields": [
                {
                  "id": "q",
                  "shape": {
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
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "hidden_channel",
                        "dimension": "C_h"
                      }
                    ],
                    "label": "B x N x H x C_h"
                  }
                },
                {
                  "id": "k",
                  "shape": {
                    "kind": "tensor",
                    "axes": [
                      {
                        "id": "batch",
                        "dimension": "B"
                      },
                      {
                        "id": "key_token",
                        "dimension": "N"
                      },
                      {
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "hidden_channel",
                        "dimension": "C_h"
                      }
                    ],
                    "label": "B x N x H x C_h"
                  }
                },
                {
                  "id": "v",
                  "shape": {
                    "kind": "tensor",
                    "axes": [
                      {
                        "id": "batch",
                        "dimension": "B"
                      },
                      {
                        "id": "key_token",
                        "dimension": "N"
                      },
                      {
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "value_channel",
                        "dimension": "C_h"
                      }
                    ],
                    "label": "B x N x H x C_h"
                  }
                }
              ],
              "label": "q: B x N x H x C_h; k: B x N x H x C_h; v: B x N x H x C_h",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "qkv_s"
          },
          {
            "id": "scalar_attention_logits",
            "label": "Form scalar logits",
            "col": 4,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.scalar_attention_logits",
            "kind": "operation",
            "scale": "operation",
            "detail": "attention_logits",
            "code": "scalar_logits = dot(q_s, k_s) * scalar_scale",
            "operation": "attention_logits"
          },
          {
            "id": "scalar_logits",
            "label": "scalar logits",
            "col": 5,
            "row": 1,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.scalar_logits",
            "kind": "representation",
            "shape": "B x H x N x N",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "head",
                  "dimension": "H"
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
              "label": "B x H x N x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "l_s"
          },
          {
            "id": "project_local_points",
            "label": "Project local Q/K/V points",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_local_points",
            "kind": "operation",
            "scale": "operation",
            "detail": "point_qkv_projection",
            "code": "q_p_local, k_p_local, v_p_local = project_point_qkv(single_state)",
            "operation": "point_qkv_projection"
          },
          {
            "id": "local_points",
            "label": "local Q/K/V points",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.local_points",
            "kind": "representation",
            "shape": "q: B x N x H x P_q x 3; k: B x N x H x P_q x 3; v: B x N x H x P_v x 3",
            "resolved_shape": {
              "kind": "tuple",
              "fields": [
                {
                  "id": "q",
                  "shape": {
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
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "query_point",
                        "dimension": "P_q"
                      },
                      {
                        "id": "coordinate",
                        "dimension": 3
                      }
                    ],
                    "label": "B x N x H x P_q x 3"
                  }
                },
                {
                  "id": "k",
                  "shape": {
                    "kind": "tensor",
                    "axes": [
                      {
                        "id": "batch",
                        "dimension": "B"
                      },
                      {
                        "id": "key_token",
                        "dimension": "N"
                      },
                      {
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "query_point",
                        "dimension": "P_q"
                      },
                      {
                        "id": "coordinate",
                        "dimension": 3
                      }
                    ],
                    "label": "B x N x H x P_q x 3"
                  }
                },
                {
                  "id": "v",
                  "shape": {
                    "kind": "tensor",
                    "axes": [
                      {
                        "id": "batch",
                        "dimension": "B"
                      },
                      {
                        "id": "key_token",
                        "dimension": "N"
                      },
                      {
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "value_point",
                        "dimension": "P_v"
                      },
                      {
                        "id": "coordinate",
                        "dimension": 3
                      }
                    ],
                    "label": "B x N x H x P_v x 3"
                  }
                }
              ],
              "label": "q: B x N x H x P_q x 3; k: B x N x H x P_q x 3; v: B x N x H x P_v x 3",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "coordinates",
            "flow_family": "coordinate",
            "notation": "qkv_p"
          },
          {
            "id": "transform_points_to_global",
            "label": "Express points in global frame",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.transform_points_to_global",
            "kind": "operation",
            "scale": "operation",
            "detail": "rigid_apply",
            "code": "q_p_global, k_p_global, v_p_global = frames.apply(q_p_local, k_p_local, v_p_local)",
            "operation": "rigid_apply"
          },
          {
            "id": "global_points",
            "label": "global Q/K/V points",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.global_points",
            "kind": "representation",
            "shape": "q: B x N x H x P_q x 3; k: B x N x H x P_q x 3; v: B x N x H x P_v x 3",
            "resolved_shape": {
              "kind": "tuple",
              "fields": [
                {
                  "id": "q",
                  "shape": {
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
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "query_point",
                        "dimension": "P_q"
                      },
                      {
                        "id": "coordinate",
                        "dimension": 3
                      }
                    ],
                    "label": "B x N x H x P_q x 3"
                  }
                },
                {
                  "id": "k",
                  "shape": {
                    "kind": "tensor",
                    "axes": [
                      {
                        "id": "batch",
                        "dimension": "B"
                      },
                      {
                        "id": "key_token",
                        "dimension": "N"
                      },
                      {
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "query_point",
                        "dimension": "P_q"
                      },
                      {
                        "id": "coordinate",
                        "dimension": 3
                      }
                    ],
                    "label": "B x N x H x P_q x 3"
                  }
                },
                {
                  "id": "v",
                  "shape": {
                    "kind": "tensor",
                    "axes": [
                      {
                        "id": "batch",
                        "dimension": "B"
                      },
                      {
                        "id": "key_token",
                        "dimension": "N"
                      },
                      {
                        "id": "head",
                        "dimension": "H"
                      },
                      {
                        "id": "value_point",
                        "dimension": "P_v"
                      },
                      {
                        "id": "coordinate",
                        "dimension": 3
                      }
                    ],
                    "label": "B x N x H x P_v x 3"
                  }
                }
              ],
              "label": "q: B x N x H x P_q x 3; k: B x N x H x P_q x 3; v: B x N x H x P_v x 3",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "coordinates",
            "flow_family": "coordinate",
            "notation": "T_qkv_p"
          },
          {
            "id": "point_distance_logits",
            "label": "Form point-distance logits",
            "col": 6,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.point_distance_logits",
            "kind": "operation",
            "scale": "operation",
            "detail": "invariant_point_distance",
            "code": "point_logits = -0.5 * point_weight * squared_distance(q_p_global, k_p_global)",
            "operation": "invariant_point_distance"
          },
          {
            "id": "point_logits",
            "label": "point-distance logits",
            "col": 7,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.point_logits",
            "kind": "representation",
            "shape": "B x H x N x N",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "head",
                  "dimension": "H"
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
              "label": "B x H x N x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "l_p"
          },
          {
            "id": "project_pair_bias",
            "label": "Project pair bias",
            "col": 2,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_pair_bias",
            "kind": "operation",
            "scale": "operation",
            "detail": "pair_bias_projection",
            "code": "pair_bias = linear_b(pair_context)",
            "operation": "pair_bias_projection"
          },
          {
            "id": "pair_bias",
            "label": "pair bias",
            "col": 5,
            "row": 3,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.pair_bias",
            "kind": "representation",
            "shape": "B x H x N x N",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "head",
                  "dimension": "H"
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
              "label": "B x H x N x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "b_z"
          },
          {
            "id": "combine_and_mask_logits",
            "label": "Combine logits and apply mask",
            "col": 6,
            "row": 4,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
            "kind": "operation",
            "scale": "operation",
            "detail": "ipa_logit_composition",
            "code": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)",
            "operation": "ipa_logit_composition"
          },
          {
            "id": "combined_logits",
            "label": "combined masked logits",
            "col": 7,
            "row": 4,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.combined_logits",
            "kind": "representation",
            "shape": "B x H x N x N",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "head",
                  "dimension": "H"
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
              "label": "B x H x N x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "l"
          },
          {
            "id": "softmax_attention",
            "label": "Normalize over keys",
            "col": 6,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.softmax_attention",
            "kind": "operation",
            "scale": "operation",
            "detail": "softmax",
            "code": "attention = softmax(combined_logits, dim=keys)",
            "operation": "softmax"
          },
          {
            "id": "attention_weights",
            "label": "attention weights",
            "col": 7,
            "row": 5,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.attention_weights",
            "kind": "representation",
            "shape": "B x H x N x N",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "batch",
                  "dimension": "B"
                },
                {
                  "id": "head",
                  "dimension": "H"
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
              "label": "B x H x N x N",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "a"
          },
          {
            "id": "aggregate_scalar_values",
            "label": "Aggregate scalar values",
            "col": 9,
            "row": 7,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_scalar_values",
            "kind": "operation",
            "scale": "operation",
            "detail": "weighted_sum",
            "code": "scalar_context = weighted_sum(attention, v_s)",
            "operation": "weighted_sum"
          },
          {
            "id": "scalar_context",
            "label": "scalar context",
            "col": 10,
            "row": 7,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.scalar_context",
            "kind": "representation",
            "shape": "B x N x H x C_h",
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
                  "id": "head",
                  "dimension": "H"
                },
                {
                  "id": "value_channel",
                  "dimension": "C_h"
                }
              ],
              "label": "B x N x H x C_h",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "o_s"
          },
          {
            "id": "aggregate_pair_values",
            "label": "Attention-weighted pair-value aggregation",
            "col": 9,
            "row": 8,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_pair_values",
            "kind": "operation",
            "scale": "operation",
            "detail": "pair_value_aggregation",
            "code": "pair_value_context = weighted_sum(attention, pair_context)",
            "operation": "pair_value_aggregation"
          },
          {
            "id": "pair_value_context",
            "label": "pair-value context",
            "col": 10,
            "row": 8,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.pair_value_context",
            "kind": "representation",
            "shape": "B x N x H x C_z",
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
                  "id": "head",
                  "dimension": "H"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "B x N x H x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "o_z"
          },
          {
            "id": "aggregate_global_points",
            "label": "Aggregate value points",
            "col": 7,
            "row": 9,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_global_points",
            "kind": "operation",
            "scale": "operation",
            "detail": "weighted_point_sum",
            "code": "global_point_context = weighted_sum(attention, v_p_global)",
            "operation": "weighted_point_sum"
          },
          {
            "id": "global_point_context",
            "label": "global point context",
            "col": 8,
            "row": 9,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.global_point_context",
            "kind": "representation",
            "shape": "B x N x H x P_v x 3",
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
                  "id": "head",
                  "dimension": "H"
                },
                {
                  "id": "value_point",
                  "dimension": "P_v"
                },
                {
                  "id": "coordinate",
                  "dimension": 3
                }
              ],
              "label": "B x N x H x P_v x 3",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "coordinates",
            "flow_family": "coordinate",
            "notation": "o_p_global"
          },
          {
            "id": "return_points_to_local_frame",
            "label": "Return points to query frame",
            "col": 9,
            "row": 9,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.return_points_to_local_frame",
            "kind": "operation",
            "scale": "operation",
            "detail": "rigid_inverse_apply",
            "code": "local_point_context = concat(frames.invert_apply(global_point_context), point_norms(global_point_context))",
            "operation": "rigid_inverse_apply"
          },
          {
            "id": "local_point_context",
            "label": "local points + norms",
            "col": 10,
            "row": 9,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.values.local_point_context",
            "kind": "representation",
            "shape": "B x N x H x P_v x 4",
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
                  "id": "head",
                  "dimension": "H"
                },
                {
                  "id": "value_point",
                  "dimension": "P_v"
                },
                {
                  "id": "point_feature",
                  "dimension": 4
                }
              ],
              "label": "B x N x H x P_v x 4",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "coordinates",
            "flow_family": "coordinate",
            "notation": "o_p_local"
          },
          {
            "id": "project_ipa_delta",
            "label": "Concatenate + project",
            "col": 11,
            "row": 8,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_ipa_delta",
            "kind": "operation",
            "scale": "operation",
            "detail": "output_projection",
            "code": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))",
            "operation": "output_projection"
          }
        ],
        "edges": [
          {
            "id": "template_invariant_point_attention__project_scalar_terms__input_1",
            "from": "single_state",
            "to": "project_scalar_terms",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_scalar_terms",
            "template_data_ref": "ports.single_state",
            "connection": {
              "title": "Project scalar Q/K/V",
              "role": "reusable step input",
              "inside": "q_s, k_s, v_s = project_scalar_qkv(single_state)"
            }
          },
          {
            "id": "template_invariant_point_attention__project_scalar_terms__output_1",
            "from": "project_scalar_terms",
            "to": "scalar_terms",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_scalar_terms",
            "template_data_ref": "values.scalar_terms",
            "connection": {
              "title": "Project scalar Q/K/V",
              "role": "reusable step output",
              "inside": "q_s, k_s, v_s = project_scalar_qkv(single_state)"
            }
          },
          {
            "id": "template_invariant_point_attention__project_local_points__input_1",
            "from": "single_state",
            "to": "project_local_points",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_local_points",
            "template_data_ref": "ports.single_state",
            "connection": {
              "title": "Project local Q/K/V points",
              "role": "reusable step input",
              "inside": "q_p_local, k_p_local, v_p_local = project_point_qkv(single_state)"
            }
          },
          {
            "id": "template_invariant_point_attention__project_local_points__output_1",
            "from": "project_local_points",
            "to": "local_points",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_local_points",
            "template_data_ref": "values.local_points",
            "connection": {
              "title": "Project local Q/K/V points",
              "role": "reusable step output",
              "inside": "q_p_local, k_p_local, v_p_local = project_point_qkv(single_state)"
            }
          },
          {
            "id": "template_invariant_point_attention__transform_points_to_global__input_1",
            "from": "local_points",
            "to": "transform_points_to_global",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.transform_points_to_global",
            "template_data_ref": "values.local_points",
            "connection": {
              "title": "Express points in global frame",
              "role": "reusable step input",
              "inside": "q_p_global, k_p_global, v_p_global = frames.apply(q_p_local, k_p_local, v_p_local)"
            }
          },
          {
            "id": "template_invariant_point_attention__transform_points_to_global__input_2",
            "from": "frames",
            "to": "transform_points_to_global",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.transform_points_to_global",
            "template_data_ref": "ports.frames",
            "connection": {
              "title": "Express points in global frame",
              "role": "reusable step input",
              "inside": "q_p_global, k_p_global, v_p_global = frames.apply(q_p_local, k_p_local, v_p_local)"
            }
          },
          {
            "id": "template_invariant_point_attention__transform_points_to_global__output_1",
            "from": "transform_points_to_global",
            "to": "global_points",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.transform_points_to_global",
            "template_data_ref": "values.global_points",
            "connection": {
              "title": "Express points in global frame",
              "role": "reusable step output",
              "inside": "q_p_global, k_p_global, v_p_global = frames.apply(q_p_local, k_p_local, v_p_local)"
            }
          },
          {
            "id": "template_invariant_point_attention__scalar_attention_logits__input_1",
            "from": "scalar_terms",
            "to": "scalar_attention_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.scalar_attention_logits",
            "template_data_ref": "values.scalar_terms",
            "connection": {
              "title": "Form scalar logits",
              "role": "reusable step input",
              "inside": "scalar_logits = dot(q_s, k_s) * scalar_scale"
            }
          },
          {
            "id": "template_invariant_point_attention__scalar_attention_logits__output_1",
            "from": "scalar_attention_logits",
            "to": "scalar_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.scalar_attention_logits",
            "template_data_ref": "values.scalar_logits",
            "connection": {
              "title": "Form scalar logits",
              "role": "reusable step output",
              "inside": "scalar_logits = dot(q_s, k_s) * scalar_scale"
            }
          },
          {
            "id": "template_invariant_point_attention__point_distance_logits__input_1",
            "from": "global_points",
            "to": "point_distance_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.point_distance_logits",
            "template_data_ref": "values.global_points",
            "connection": {
              "title": "Form point-distance logits",
              "role": "reusable step input",
              "inside": "point_logits = -0.5 * point_weight * squared_distance(q_p_global, k_p_global)"
            }
          },
          {
            "id": "template_invariant_point_attention__point_distance_logits__output_1",
            "from": "point_distance_logits",
            "to": "point_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.point_distance_logits",
            "template_data_ref": "values.point_logits",
            "connection": {
              "title": "Form point-distance logits",
              "role": "reusable step output",
              "inside": "point_logits = -0.5 * point_weight * squared_distance(q_p_global, k_p_global)"
            }
          },
          {
            "id": "template_invariant_point_attention__project_pair_bias__input_1",
            "from": "pair_context",
            "to": "project_pair_bias",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_pair_bias",
            "template_data_ref": "ports.pair_context",
            "connection": {
              "title": "Project pair bias",
              "role": "reusable step input",
              "inside": "pair_bias = linear_b(pair_context)"
            }
          },
          {
            "id": "template_invariant_point_attention__project_pair_bias__output_1",
            "from": "project_pair_bias",
            "to": "pair_bias",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_pair_bias",
            "template_data_ref": "values.pair_bias",
            "connection": {
              "title": "Project pair bias",
              "role": "reusable step output",
              "inside": "pair_bias = linear_b(pair_context)"
            }
          },
          {
            "id": "template_invariant_point_attention__combine_and_mask_logits__input_1",
            "from": "scalar_logits",
            "to": "combine_and_mask_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
            "template_data_ref": "values.scalar_logits",
            "connection": {
              "title": "Combine logits and apply mask",
              "role": "reusable step input",
              "inside": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)"
            }
          },
          {
            "id": "template_invariant_point_attention__combine_and_mask_logits__input_2",
            "from": "point_logits",
            "to": "combine_and_mask_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
            "template_data_ref": "values.point_logits",
            "connection": {
              "title": "Combine logits and apply mask",
              "role": "reusable step input",
              "inside": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)"
            }
          },
          {
            "id": "template_invariant_point_attention__combine_and_mask_logits__input_3",
            "from": "pair_bias",
            "to": "combine_and_mask_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
            "template_data_ref": "values.pair_bias",
            "connection": {
              "title": "Combine logits and apply mask",
              "role": "reusable step input",
              "inside": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)"
            }
          },
          {
            "id": "template_invariant_point_attention__combine_and_mask_logits__input_4",
            "from": "mask",
            "to": "combine_and_mask_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
            "template_data_ref": "ports.mask",
            "connection": {
              "title": "Combine logits and apply mask",
              "role": "reusable step input",
              "inside": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)"
            }
          },
          {
            "id": "template_invariant_point_attention__combine_and_mask_logits__output_1",
            "from": "combine_and_mask_logits",
            "to": "combined_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
            "template_data_ref": "values.combined_logits",
            "connection": {
              "title": "Combine logits and apply mask",
              "role": "reusable step output",
              "inside": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)"
            }
          },
          {
            "id": "template_invariant_point_attention__softmax_attention__input_1",
            "from": "combined_logits",
            "to": "softmax_attention",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.softmax_attention",
            "template_data_ref": "values.combined_logits",
            "connection": {
              "title": "Normalize over keys",
              "role": "reusable step input",
              "inside": "attention = softmax(combined_logits, dim=keys)"
            }
          },
          {
            "id": "template_invariant_point_attention__softmax_attention__output_1",
            "from": "softmax_attention",
            "to": "attention_weights",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.softmax_attention",
            "template_data_ref": "values.attention_weights",
            "connection": {
              "title": "Normalize over keys",
              "role": "reusable step output",
              "inside": "attention = softmax(combined_logits, dim=keys)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_scalar_values__input_1",
            "from": "attention_weights",
            "to": "aggregate_scalar_values",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_scalar_values",
            "template_data_ref": "values.attention_weights",
            "connection": {
              "title": "Aggregate scalar values",
              "role": "reusable step input",
              "inside": "scalar_context = weighted_sum(attention, v_s)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_scalar_values__input_2",
            "from": "scalar_terms",
            "to": "aggregate_scalar_values",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_scalar_values",
            "template_data_ref": "values.scalar_terms",
            "connection": {
              "title": "Aggregate scalar values",
              "role": "reusable step input",
              "inside": "scalar_context = weighted_sum(attention, v_s)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_scalar_values__output_1",
            "from": "aggregate_scalar_values",
            "to": "scalar_context",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_scalar_values",
            "template_data_ref": "values.scalar_context",
            "connection": {
              "title": "Aggregate scalar values",
              "role": "reusable step output",
              "inside": "scalar_context = weighted_sum(attention, v_s)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_global_points__input_1",
            "from": "attention_weights",
            "to": "aggregate_global_points",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_global_points",
            "template_data_ref": "values.attention_weights",
            "connection": {
              "title": "Aggregate value points",
              "role": "reusable step input",
              "inside": "global_point_context = weighted_sum(attention, v_p_global)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_global_points__input_2",
            "from": "global_points",
            "to": "aggregate_global_points",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_global_points",
            "template_data_ref": "values.global_points",
            "connection": {
              "title": "Aggregate value points",
              "role": "reusable step input",
              "inside": "global_point_context = weighted_sum(attention, v_p_global)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_global_points__output_1",
            "from": "aggregate_global_points",
            "to": "global_point_context",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_global_points",
            "template_data_ref": "values.global_point_context",
            "connection": {
              "title": "Aggregate value points",
              "role": "reusable step output",
              "inside": "global_point_context = weighted_sum(attention, v_p_global)"
            }
          },
          {
            "id": "template_invariant_point_attention__return_points_to_local_frame__input_1",
            "from": "global_point_context",
            "to": "return_points_to_local_frame",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.return_points_to_local_frame",
            "template_data_ref": "values.global_point_context",
            "connection": {
              "title": "Return points to query frame",
              "role": "reusable step input",
              "inside": "local_point_context = concat(frames.invert_apply(global_point_context), point_norms(global_point_context))"
            }
          },
          {
            "id": "template_invariant_point_attention__return_points_to_local_frame__input_2",
            "from": "frames",
            "to": "return_points_to_local_frame",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.return_points_to_local_frame",
            "template_data_ref": "ports.frames",
            "connection": {
              "title": "Return points to query frame",
              "role": "reusable step input",
              "inside": "local_point_context = concat(frames.invert_apply(global_point_context), point_norms(global_point_context))"
            }
          },
          {
            "id": "template_invariant_point_attention__return_points_to_local_frame__output_1",
            "from": "return_points_to_local_frame",
            "to": "local_point_context",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.return_points_to_local_frame",
            "template_data_ref": "values.local_point_context",
            "connection": {
              "title": "Return points to query frame",
              "role": "reusable step output",
              "inside": "local_point_context = concat(frames.invert_apply(global_point_context), point_norms(global_point_context))"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_pair_values__input_1",
            "from": "attention_weights",
            "to": "aggregate_pair_values",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_pair_values",
            "template_data_ref": "values.attention_weights",
            "connection": {
              "title": "Attention-weighted pair-value aggregation",
              "role": "reusable step input",
              "inside": "pair_value_context = weighted_sum(attention, pair_context)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_pair_values__input_2",
            "from": "pair_context",
            "to": "aggregate_pair_values",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_pair_values",
            "template_data_ref": "ports.pair_context",
            "connection": {
              "title": "Attention-weighted pair-value aggregation",
              "role": "reusable step input",
              "inside": "pair_value_context = weighted_sum(attention, pair_context)"
            }
          },
          {
            "id": "template_invariant_point_attention__aggregate_pair_values__output_1",
            "from": "aggregate_pair_values",
            "to": "pair_value_context",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.aggregate_pair_values",
            "template_data_ref": "values.pair_value_context",
            "connection": {
              "title": "Attention-weighted pair-value aggregation",
              "role": "reusable step output",
              "inside": "pair_value_context = weighted_sum(attention, pair_context)"
            }
          },
          {
            "id": "template_invariant_point_attention__project_ipa_delta__input_1",
            "from": "scalar_context",
            "to": "project_ipa_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_ipa_delta",
            "template_data_ref": "values.scalar_context",
            "connection": {
              "title": "Concatenate + project",
              "role": "reusable step input",
              "inside": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))"
            }
          },
          {
            "id": "template_invariant_point_attention__project_ipa_delta__input_2",
            "from": "local_point_context",
            "to": "project_ipa_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_ipa_delta",
            "template_data_ref": "values.local_point_context",
            "connection": {
              "title": "Concatenate + project",
              "role": "reusable step input",
              "inside": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))"
            }
          },
          {
            "id": "template_invariant_point_attention__project_ipa_delta__input_3",
            "from": "pair_value_context",
            "to": "project_ipa_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_ipa_delta",
            "template_data_ref": "values.pair_value_context",
            "connection": {
              "title": "Concatenate + project",
              "role": "reusable step input",
              "inside": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))"
            }
          },
          {
            "id": "template_invariant_point_attention__project_ipa_delta__output_1",
            "from": "project_ipa_delta",
            "to": "ipa_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/invariant-point-attention.yaml",
            "standard_block_id": "invariant_point_attention",
            "template_fact_ref": "standard_blocks.invariant_point_attention.steps.project_ipa_delta",
            "template_data_ref": "ports.ipa_delta",
            "connection": {
              "title": "Concatenate + project",
              "role": "reusable step output",
              "inside": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))"
            }
          }
        ],
        "segments": [
          {
            "id": "attention_weights",
            "label": "Compute attention weights",
            "description": "Form scalar and invariant point-distance logits, add pair bias, apply the validity mask, and normalize once over keys. Bundled Q/K/V projections also prepare the value terms consumed in Phase 2.",
            "order": 1,
            "node_ids": [
              "single_state",
              "pair_context",
              "frames",
              "mask",
              "project_scalar_terms",
              "scalar_terms",
              "scalar_attention_logits",
              "scalar_logits",
              "project_local_points",
              "local_points",
              "transform_points_to_global",
              "global_points",
              "point_distance_logits",
              "point_logits",
              "project_pair_bias",
              "pair_bias",
              "combine_and_mask_logits",
              "combined_logits",
              "softmax_attention",
              "attention_weights"
            ]
          },
          {
            "id": "value_extraction",
            "label": "Extract and fuse values",
            "description": "Reuse the shared attention weights for scalar, point, and pair values, return points to the local frame, align the three final contexts, then concatenate and project them into the IPA update.",
            "order": 2,
            "node_ids": [
              "aggregate_scalar_values",
              "scalar_context",
              "aggregate_global_points",
              "global_point_context",
              "return_points_to_local_frame",
              "local_point_context",
              "aggregate_pair_values",
              "pair_value_context",
              "project_ipa_delta",
              "ipa_delta"
            ]
          }
        ],
        "projectionMode": "standard_block_template",
        "standardBlockRef": "standard_blocks/invariant-point-attention.yaml",
        "standardBlockId": "invariant_point_attention",
        "variant": "full_ipa",
        "variantLabel": "Full frame-aware IPA",
        "pseudocode": [
          {
            "id": "project_scalar_terms",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_scalar_terms",
            "label": "Project scalar Q/K/V",
            "operation": "scalar_qkv_projection",
            "code": "q_s, k_s, v_s = project_scalar_qkv(single_state)",
            "inputs": [
              "ports.single_state"
            ],
            "outputs": [
              "values.scalar_terms"
            ],
            "codeBindings": [
              {
                "lexeme": "q_s",
                "access": "write",
                "localRef": "values.scalar_terms",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_terms",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 3
                  }
                ]
              },
              {
                "lexeme": "k_s",
                "access": "write",
                "localRef": "values.scalar_terms",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_terms",
                "occurrences": [
                  {
                    "start": 5,
                    "end": 8
                  }
                ]
              },
              {
                "lexeme": "v_s",
                "access": "write",
                "localRef": "values.scalar_terms",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_terms",
                "occurrences": [
                  {
                    "start": 10,
                    "end": 13
                  }
                ]
              },
              {
                "lexeme": "single_state",
                "access": "read",
                "localRef": "ports.single_state",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.single_state",
                "occurrences": [
                  {
                    "start": 35,
                    "end": 47
                  }
                ]
              }
            ]
          },
          {
            "id": "project_local_points",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_local_points",
            "label": "Project local Q/K/V points",
            "operation": "point_qkv_projection",
            "code": "q_p_local, k_p_local, v_p_local = project_point_qkv(single_state)",
            "inputs": [
              "ports.single_state"
            ],
            "outputs": [
              "values.local_points"
            ],
            "codeBindings": [
              {
                "lexeme": "q_p_local",
                "access": "write",
                "localRef": "values.local_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_points",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 9
                  }
                ]
              },
              {
                "lexeme": "k_p_local",
                "access": "write",
                "localRef": "values.local_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_points",
                "occurrences": [
                  {
                    "start": 11,
                    "end": 20
                  }
                ]
              },
              {
                "lexeme": "v_p_local",
                "access": "write",
                "localRef": "values.local_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_points",
                "occurrences": [
                  {
                    "start": 22,
                    "end": 31
                  }
                ]
              },
              {
                "lexeme": "single_state",
                "access": "read",
                "localRef": "ports.single_state",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.single_state",
                "occurrences": [
                  {
                    "start": 52,
                    "end": 64
                  }
                ]
              }
            ]
          },
          {
            "id": "transform_points_to_global",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.transform_points_to_global",
            "label": "Express points in global frame",
            "operation": "rigid_apply",
            "code": "q_p_global, k_p_global, v_p_global = frames.apply(q_p_local, k_p_local, v_p_local)",
            "inputs": [
              "values.local_points",
              "ports.frames"
            ],
            "outputs": [
              "values.global_points"
            ],
            "codeBindings": [
              {
                "lexeme": "q_p_global",
                "access": "write",
                "localRef": "values.global_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_points",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 10
                  }
                ]
              },
              {
                "lexeme": "k_p_global",
                "access": "write",
                "localRef": "values.global_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_points",
                "occurrences": [
                  {
                    "start": 12,
                    "end": 22
                  }
                ]
              },
              {
                "lexeme": "v_p_global",
                "access": "write",
                "localRef": "values.global_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_points",
                "occurrences": [
                  {
                    "start": 24,
                    "end": 34
                  }
                ]
              },
              {
                "lexeme": "frames",
                "access": "read",
                "localRef": "ports.frames",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.frames",
                "occurrences": [
                  {
                    "start": 37,
                    "end": 43
                  }
                ]
              },
              {
                "lexeme": "q_p_local",
                "access": "read",
                "localRef": "values.local_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_points",
                "occurrences": [
                  {
                    "start": 50,
                    "end": 59
                  }
                ]
              },
              {
                "lexeme": "k_p_local",
                "access": "read",
                "localRef": "values.local_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_points",
                "occurrences": [
                  {
                    "start": 61,
                    "end": 70
                  }
                ]
              },
              {
                "lexeme": "v_p_local",
                "access": "read",
                "localRef": "values.local_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_points",
                "occurrences": [
                  {
                    "start": 72,
                    "end": 81
                  }
                ]
              }
            ]
          },
          {
            "id": "scalar_attention_logits",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.scalar_attention_logits",
            "label": "Form scalar logits",
            "operation": "attention_logits",
            "code": "scalar_logits = dot(q_s, k_s) * scalar_scale",
            "inputs": [
              "values.scalar_terms"
            ],
            "outputs": [
              "values.scalar_logits"
            ],
            "codeBindings": [
              {
                "lexeme": "scalar_logits",
                "access": "write",
                "localRef": "values.scalar_logits",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_logits",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 13
                  }
                ]
              },
              {
                "lexeme": "q_s",
                "access": "read",
                "localRef": "values.scalar_terms",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_terms",
                "occurrences": [
                  {
                    "start": 20,
                    "end": 23
                  }
                ]
              },
              {
                "lexeme": "k_s",
                "access": "read",
                "localRef": "values.scalar_terms",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_terms",
                "occurrences": [
                  {
                    "start": 25,
                    "end": 28
                  }
                ]
              }
            ]
          },
          {
            "id": "point_distance_logits",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.point_distance_logits",
            "label": "Form point-distance logits",
            "operation": "invariant_point_distance",
            "code": "point_logits = -0.5 * point_weight * squared_distance(q_p_global, k_p_global)",
            "inputs": [
              "values.global_points"
            ],
            "outputs": [
              "values.point_logits"
            ],
            "codeBindings": [
              {
                "lexeme": "point_logits",
                "access": "write",
                "localRef": "values.point_logits",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.point_logits",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 12
                  }
                ]
              },
              {
                "lexeme": "q_p_global",
                "access": "read",
                "localRef": "values.global_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_points",
                "occurrences": [
                  {
                    "start": 54,
                    "end": 64
                  }
                ]
              },
              {
                "lexeme": "k_p_global",
                "access": "read",
                "localRef": "values.global_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_points",
                "occurrences": [
                  {
                    "start": 66,
                    "end": 76
                  }
                ]
              }
            ]
          },
          {
            "id": "project_pair_bias",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_pair_bias",
            "label": "Project pair bias",
            "operation": "pair_bias_projection",
            "code": "pair_bias = linear_b(pair_context)",
            "inputs": [
              "ports.pair_context"
            ],
            "outputs": [
              "values.pair_bias"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_bias",
                "access": "write",
                "localRef": "values.pair_bias",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.pair_bias",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 9
                  }
                ]
              },
              {
                "lexeme": "pair_context",
                "access": "read",
                "localRef": "ports.pair_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.pair_context",
                "occurrences": [
                  {
                    "start": 21,
                    "end": 33
                  }
                ]
              }
            ]
          },
          {
            "id": "combine_and_mask_logits",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.combine_and_mask_logits",
            "label": "Combine logits and apply mask",
            "operation": "ipa_logit_composition",
            "code": "combined_logits = apply_mask(scalar_logits + point_logits + pair_bias, mask)",
            "inputs": [
              "values.scalar_logits",
              "values.point_logits",
              "values.pair_bias",
              "ports.mask"
            ],
            "outputs": [
              "values.combined_logits"
            ],
            "codeBindings": [
              {
                "lexeme": "combined_logits",
                "access": "write",
                "localRef": "values.combined_logits",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.combined_logits",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 15
                  }
                ]
              },
              {
                "lexeme": "scalar_logits",
                "access": "read",
                "localRef": "values.scalar_logits",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_logits",
                "occurrences": [
                  {
                    "start": 29,
                    "end": 42
                  }
                ]
              },
              {
                "lexeme": "point_logits",
                "access": "read",
                "localRef": "values.point_logits",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.point_logits",
                "occurrences": [
                  {
                    "start": 45,
                    "end": 57
                  }
                ]
              },
              {
                "lexeme": "pair_bias",
                "access": "read",
                "localRef": "values.pair_bias",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.pair_bias",
                "occurrences": [
                  {
                    "start": 60,
                    "end": 69
                  }
                ]
              },
              {
                "lexeme": "mask",
                "access": "read",
                "localRef": "ports.mask",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.mask",
                "occurrences": [
                  {
                    "start": 71,
                    "end": 75
                  }
                ]
              }
            ]
          },
          {
            "id": "softmax_attention",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.softmax_attention",
            "label": "Normalize over keys",
            "operation": "softmax",
            "code": "attention = softmax(combined_logits, dim=keys)",
            "inputs": [
              "values.combined_logits"
            ],
            "outputs": [
              "values.attention_weights"
            ],
            "codeBindings": [
              {
                "lexeme": "attention",
                "access": "write",
                "localRef": "values.attention_weights",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.attention_weights",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 9
                  }
                ]
              },
              {
                "lexeme": "combined_logits",
                "access": "read",
                "localRef": "values.combined_logits",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.combined_logits",
                "occurrences": [
                  {
                    "start": 20,
                    "end": 35
                  }
                ]
              }
            ]
          },
          {
            "id": "aggregate_scalar_values",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.aggregate_scalar_values",
            "label": "Aggregate scalar values",
            "operation": "weighted_sum",
            "code": "scalar_context = weighted_sum(attention, v_s)",
            "inputs": [
              "values.attention_weights",
              "values.scalar_terms"
            ],
            "outputs": [
              "values.scalar_context"
            ],
            "codeBindings": [
              {
                "lexeme": "scalar_context",
                "access": "write",
                "localRef": "values.scalar_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_context",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 14
                  }
                ]
              },
              {
                "lexeme": "attention",
                "access": "read",
                "localRef": "values.attention_weights",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.attention_weights",
                "occurrences": [
                  {
                    "start": 30,
                    "end": 39
                  }
                ]
              },
              {
                "lexeme": "v_s",
                "access": "read",
                "localRef": "values.scalar_terms",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_terms",
                "occurrences": [
                  {
                    "start": 41,
                    "end": 44
                  }
                ]
              }
            ]
          },
          {
            "id": "aggregate_global_points",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.aggregate_global_points",
            "label": "Aggregate value points",
            "operation": "weighted_point_sum",
            "code": "global_point_context = weighted_sum(attention, v_p_global)",
            "inputs": [
              "values.attention_weights",
              "values.global_points"
            ],
            "outputs": [
              "values.global_point_context"
            ],
            "codeBindings": [
              {
                "lexeme": "global_point_context",
                "access": "write",
                "localRef": "values.global_point_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_point_context",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 20
                  }
                ]
              },
              {
                "lexeme": "attention",
                "access": "read",
                "localRef": "values.attention_weights",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.attention_weights",
                "occurrences": [
                  {
                    "start": 36,
                    "end": 45
                  }
                ]
              },
              {
                "lexeme": "v_p_global",
                "access": "read",
                "localRef": "values.global_points",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_points",
                "occurrences": [
                  {
                    "start": 47,
                    "end": 57
                  }
                ]
              }
            ]
          },
          {
            "id": "return_points_to_local_frame",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.return_points_to_local_frame",
            "label": "Return points to query frame",
            "operation": "rigid_inverse_apply",
            "code": "local_point_context = concat(frames.invert_apply(global_point_context), point_norms(global_point_context))",
            "inputs": [
              "values.global_point_context",
              "ports.frames"
            ],
            "outputs": [
              "values.local_point_context"
            ],
            "codeBindings": [
              {
                "lexeme": "local_point_context",
                "access": "write",
                "localRef": "values.local_point_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_point_context",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 19
                  }
                ]
              },
              {
                "lexeme": "frames",
                "access": "read",
                "localRef": "ports.frames",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.frames",
                "occurrences": [
                  {
                    "start": 29,
                    "end": 35
                  }
                ]
              },
              {
                "lexeme": "global_point_context",
                "access": "read",
                "localRef": "values.global_point_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.global_point_context",
                "occurrences": [
                  {
                    "start": 49,
                    "end": 69
                  },
                  {
                    "start": 84,
                    "end": 104
                  }
                ]
              }
            ]
          },
          {
            "id": "aggregate_pair_values",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.aggregate_pair_values",
            "label": "Attention-weighted pair-value aggregation",
            "operation": "pair_value_aggregation",
            "code": "pair_value_context = weighted_sum(attention, pair_context)",
            "inputs": [
              "values.attention_weights",
              "ports.pair_context"
            ],
            "outputs": [
              "values.pair_value_context"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_value_context",
                "access": "write",
                "localRef": "values.pair_value_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.pair_value_context",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 18
                  }
                ]
              },
              {
                "lexeme": "attention",
                "access": "read",
                "localRef": "values.attention_weights",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.attention_weights",
                "occurrences": [
                  {
                    "start": 34,
                    "end": 43
                  }
                ]
              },
              {
                "lexeme": "pair_context",
                "access": "read",
                "localRef": "ports.pair_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.pair_context",
                "occurrences": [
                  {
                    "start": 45,
                    "end": 57
                  }
                ]
              }
            ]
          },
          {
            "id": "project_ipa_delta",
            "templateFactRef": "standard_blocks.invariant_point_attention.steps.project_ipa_delta",
            "label": "Concatenate + project",
            "operation": "output_projection",
            "code": "ipa_delta = output_projection(concat(scalar_context, local_point_context, pair_value_context))",
            "inputs": [
              "values.scalar_context",
              "values.local_point_context",
              "values.pair_value_context"
            ],
            "outputs": [
              "ports.ipa_delta"
            ],
            "codeBindings": [
              {
                "lexeme": "ipa_delta",
                "access": "write",
                "localRef": "ports.ipa_delta",
                "templateFactRef": "standard_blocks.invariant_point_attention.ports.ipa_delta",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 9
                  }
                ]
              },
              {
                "lexeme": "scalar_context",
                "access": "read",
                "localRef": "values.scalar_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.scalar_context",
                "occurrences": [
                  {
                    "start": 37,
                    "end": 51
                  }
                ]
              },
              {
                "lexeme": "local_point_context",
                "access": "read",
                "localRef": "values.local_point_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.local_point_context",
                "occurrences": [
                  {
                    "start": 53,
                    "end": 72
                  }
                ]
              },
              {
                "lexeme": "pair_value_context",
                "access": "read",
                "localRef": "values.pair_value_context",
                "templateFactRef": "standard_blocks.invariant_point_attention.values.pair_value_context",
                "occurrences": [
                  {
                    "start": 74,
                    "end": 92
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
