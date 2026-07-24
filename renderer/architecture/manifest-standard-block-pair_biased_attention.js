export const manifest = {
  "schemaVersion": "standard-block-browser-manifest-v0.1",
  "build": {
    "generator": "architecture-manifest-builder-v0.5.0",
    "inputDigests": {
      "references/bibliography.yaml": "82f709e900c8a4856e4b834e7d3d7269313b9e4aa08f6bea91d75c33ef974bdd",
      "standard_blocks/pair-biased-attention.yaml": "3c6be1ec47623fa320eb6eace772216f41014d4bf14765b8ff52b1602cf26fb7"
    }
  },
  "architecture": {
    "schemaVersion": "standard-block-v0.2",
    "id": "standard_block_pair_biased_attention",
    "name": "Pair-Biased Attention",
    "family": "standard_component",
    "status": "review",
    "taskModes": [

    ],
    "sourceYaml": "../../standard_blocks/pair-biased-attention.yaml",
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
    "pair_biased_attention": {
      "id": "pair_biased_attention",
      "schemaVersion": "standard-block-v0.2",
      "name": "Pair-Biased Attention",
      "sourceYaml": "../../standard_blocks/pair-biased-attention.yaml",
      "description": "Form a single/token attention update with self-attention whose logits are conditioned by a pair representation, optionally adding attention-weighted pair-value aggregation.",
      "math": [
        {
          "id": "project_qkv",
          "text": "q, k, v = project_qkv(single_state)",
          "tex": "q_i, k_i, v_i = W_{qkv}s_i",
          "operation": "qkv_projection"
        },
        {
          "id": "scalar_logits",
          "text": "scalar_logits = einsum(q, k) * scale",
          "tex": "ell^{qk}_{ijh} = <q_{ih}, k_{jh}> s_h",
          "operation": "attention_logits"
        },
        {
          "id": "project_pair_bias",
          "text": "pair_bias = project_pair(pair_context)",
          "tex": "b_{ijh} = W_h z_{ij}",
          "operation": "pair_bias_projection"
        },
        {
          "id": "combine_logits",
          "text": "biased_logits = scalar_logits + pair_bias",
          "tex": "ell_{ijh} = ell^{qk}_{ijh} + b_{ijh}",
          "operation": "pair_bias_add"
        },
        {
          "id": "apply_attention_mask",
          "text": "masked_logits = biased_logits + mask_bias(attention_mask)",
          "tex": "ell^m_{ijh} = ell_{ijh} + m_{ij}",
          "operation": "attention_mask"
        },
        {
          "id": "softmax_attention_unmasked",
          "text": "attention = softmax(biased_logits, dim=keys)",
          "tex": "a_{ijh} = softmax_j(ell_{ijh})",
          "operation": "softmax"
        },
        {
          "id": "softmax_attention_masked",
          "text": "attention = softmax(masked_logits, dim=keys)",
          "tex": "a_{ijh} = softmax_j(ell^m_{ijh})",
          "operation": "softmax"
        },
        {
          "id": "aggregate_scalar_values",
          "text": "scalar_context = einsum(attention, v)",
          "tex": "o^s_{ih} = sum_j a_{ijh} v_{jh}",
          "operation": "weighted_sum"
        },
        {
          "id": "aggregate_pair_values",
          "text": "pair_context_out = einsum(attention, pair_context)",
          "tex": "o^z_{ih} = sum_j a_{ijh} z_{ij}",
          "operation": "pair_value_aggregation"
        },
        {
          "id": "project_attention_output",
          "text": "updated_single_state = output_projection(scalar_context)",
          "operation": "output_projection"
        },
        {
          "id": "project_reduced_output",
          "text": "attention_delta = output_projection(concat(scalar_context, pair_context_out))",
          "operation": "output_projection"
        }
      ],
      "kind": "attention",
      "status": "review",
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
          "role": "state used to form queries, keys, and scalar values"
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
          "role": "read-only pair representation used for logit bias and optional attention-weighted pair-value aggregation"
        },
        {
          "id": "attention_mask",
          "label": "attention mask",
          "direction": "conditioning",
          "kind": "mask",
          "required": false,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "control"
          ],
          "glyph": "vector",
          "notation": "m",
          "role": "optional validity mask applied before softmax and after a reduced wrapper"
        },
        {
          "id": "updated_single_state",
          "label": "updated single state",
          "direction": "output",
          "kind": "representation",
          "required": false,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow",
            "state_update"
          ],
          "glyph": "single",
          "notation": "s'",
          "role": "attention-updated single/token stream for variants that include the residual boundary"
        },
        {
          "id": "attention_delta",
          "label": "attention delta",
          "direction": "output",
          "kind": "representation",
          "required": false,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow",
            "state_update"
          ],
          "glyph": "single",
          "notation": "Δs",
          "role": "projected attention update before any architecture-owned residual wrapper"
        }
      ],
      "variants": [
        {
          "id": "logit_bias_only",
          "label": "Pair-logit bias",
          "description": "Standard self-attention with a projected pair term added to logits; pair features are not aggregated as values.",
          "step_refs": [
            "steps.project_qkv",
            "steps.scalar_logits",
            "steps.project_pair_bias",
            "steps.combine_logits",
            "steps.softmax_attention_unmasked",
            "steps.aggregate_scalar_values",
            "steps.project_attention_output"
          ]
        },
        {
          "id": "pair_values_attention_delta",
          "label": "Reduced pair attention delta",
          "description": "A reduced IPA-style path adds pair bias and attention-weighted pair-value aggregation, then projects the concatenated contexts into an attention delta.",
          "step_refs": [
            "steps.project_qkv",
            "steps.scalar_logits",
            "steps.project_pair_bias",
            "steps.combine_logits",
            "steps.apply_attention_mask",
            "steps.softmax_attention_masked",
            "steps.aggregate_scalar_values",
            "steps.aggregate_pair_values",
            "steps.project_reduced_output"
          ]
        }
      ],
      "defaultVariant": "logit_bias_only",
      "values": [
        {
          "id": "queries",
          "label": "queries",
          "kind": "representation",
          "glyph": "single",
          "notation": "Q"
        },
        {
          "id": "keys",
          "label": "keys",
          "kind": "representation",
          "glyph": "single",
          "notation": "K"
        },
        {
          "id": "scalar_values",
          "label": "scalar values",
          "kind": "representation",
          "glyph": "single",
          "notation": "V"
        },
        {
          "id": "scalar_logits",
          "label": "query-key logits",
          "kind": "logit",
          "glyph": "pair",
          "notation": "l_qk"
        },
        {
          "id": "pair_bias",
          "label": "projected pair bias",
          "kind": "logit",
          "glyph": "pair",
          "notation": "b_z"
        },
        {
          "id": "biased_logits",
          "label": "conditioned logits",
          "kind": "logit",
          "glyph": "pair",
          "notation": "l"
        },
        {
          "id": "masked_logits",
          "label": "masked logits",
          "kind": "logit",
          "glyph": "pair",
          "notation": "l_m"
        },
        {
          "id": "attention_weights",
          "label": "attention weights",
          "kind": "weight",
          "glyph": "pair",
          "notation": "a"
        },
        {
          "id": "scalar_context",
          "label": "scalar context",
          "kind": "representation",
          "glyph": "single",
          "notation": "o_s"
        },
        {
          "id": "pair_value_context",
          "label": "pair-value context",
          "kind": "representation",
          "glyph": "single",
          "notation": "o_z"
        }
      ],
      "steps": [
        {
          "id": "project_qkv",
          "label": "Project Q, K, and V",
          "operation": "qkv_projection",
          "inputs": [
            "ports.single_state"
          ],
          "outputs": [
            "values.queries",
            "values.keys",
            "values.scalar_values"
          ],
          "code": "q, k, v = project_qkv(single_state)",
          "tex": "q_i, k_i, v_i = W_{qkv}s_i",
          "role": "form self-attention terms from the same single-state input"
        },
        {
          "id": "scalar_logits",
          "label": "Form query-key logits",
          "operation": "attention_logits",
          "inputs": [
            "values.queries",
            "values.keys"
          ],
          "outputs": [
            "values.scalar_logits"
          ],
          "code": "scalar_logits = einsum(q, k) * scale",
          "tex": "ell^{qk}_{ijh} = <q_{ih}, k_{jh}> s_h"
        },
        {
          "id": "project_pair_bias",
          "label": "Project pair bias",
          "operation": "pair_bias_projection",
          "inputs": [
            "ports.pair_context"
          ],
          "outputs": [
            "values.pair_bias"
          ],
          "code": "pair_bias = project_pair(pair_context)",
          "tex": "b_{ijh} = W_h z_{ij}",
          "role": "the selected architecture variant owns any pair preprocessing before projection"
        },
        {
          "id": "combine_logits",
          "label": "Add pair bias",
          "operation": "pair_bias_add",
          "inputs": [
            "values.scalar_logits",
            "values.pair_bias"
          ],
          "outputs": [
            "values.biased_logits"
          ],
          "code": "biased_logits = scalar_logits + pair_bias",
          "tex": "ell_{ijh} = ell^{qk}_{ijh} + b_{ijh}"
        },
        {
          "id": "apply_attention_mask",
          "label": "Apply attention mask",
          "operation": "attention_mask",
          "inputs": [
            "values.biased_logits",
            "ports.attention_mask"
          ],
          "outputs": [
            "values.masked_logits"
          ],
          "code": "masked_logits = biased_logits + mask_bias(attention_mask)",
          "tex": "ell^m_{ijh} = ell_{ijh} + m_{ij}"
        },
        {
          "id": "softmax_attention_unmasked",
          "label": "Normalize attention",
          "operation": "softmax",
          "inputs": [
            "values.biased_logits"
          ],
          "outputs": [
            "values.attention_weights"
          ],
          "code": "attention = softmax(biased_logits, dim=keys)",
          "tex": "a_{ijh} = softmax_j(ell_{ijh})"
        },
        {
          "id": "softmax_attention_masked",
          "label": "Normalize masked attention",
          "operation": "softmax",
          "inputs": [
            "values.masked_logits"
          ],
          "outputs": [
            "values.attention_weights"
          ],
          "code": "attention = softmax(masked_logits, dim=keys)",
          "tex": "a_{ijh} = softmax_j(ell^m_{ijh})"
        },
        {
          "id": "aggregate_scalar_values",
          "label": "Aggregate scalar values",
          "operation": "weighted_sum",
          "inputs": [
            "values.attention_weights",
            "values.scalar_values"
          ],
          "outputs": [
            "values.scalar_context"
          ],
          "code": "scalar_context = einsum(attention, v)",
          "tex": "o^s_{ih} = sum_j a_{ijh} v_{jh}"
        },
        {
          "id": "aggregate_pair_values",
          "label": "Attention-weighted pair-value aggregation",
          "operation": "pair_value_aggregation",
          "inputs": [
            "values.attention_weights",
            "ports.pair_context"
          ],
          "outputs": [
            "values.pair_value_context"
          ],
          "code": "pair_context_out = einsum(attention, pair_context)",
          "tex": "o^z_{ih} = sum_j a_{ijh} z_{ij}"
        },
        {
          "id": "project_attention_output",
          "label": "Project attention output",
          "operation": "output_projection",
          "inputs": [
            "values.scalar_context"
          ],
          "outputs": [
            "ports.updated_single_state"
          ],
          "code": "updated_single_state = output_projection(scalar_context)"
        },
        {
          "id": "project_reduced_output",
          "label": "Fuse scalar and pair contexts",
          "operation": "output_projection",
          "inputs": [
            "values.scalar_context",
            "values.pair_value_context"
          ],
          "outputs": [
            "ports.attention_delta"
          ],
          "code": "attention_delta = output_projection(concat(scalar_context, pair_context_out))"
        }
      ],
      "visualTemplate": {
        "grid": {
          "columns": 13,
          "rows": 7,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 22,
          "row_gap": 34
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
            "id": "pair_context",
            "ref": "ports.pair_context",
            "col": 1,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "attention_mask",
            "ref": "ports.attention_mask",
            "col": 5,
            "row": 6,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "updated_single_state",
            "ref": "ports.updated_single_state",
            "col": 13,
            "row": 3,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "attention_delta",
            "ref": "ports.attention_delta",
            "col": 13,
            "row": 4,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "project_qkv",
            "ref": "steps.project_qkv",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "queries",
            "ref": "values.queries",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "keys",
            "ref": "values.keys",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "scalar_values",
            "ref": "values.scalar_values",
            "col": 3,
            "row": 4,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "scalar_logits_step",
            "ref": "steps.scalar_logits",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "scalar_logits",
            "ref": "values.scalar_logits",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_pair_bias",
            "ref": "steps.project_pair_bias",
            "col": 3,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_bias",
            "ref": "values.pair_bias",
            "col": 5,
            "row": 5,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "combine_logits",
            "ref": "steps.combine_logits",
            "col": 6,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "biased_logits",
            "ref": "values.biased_logits",
            "col": 7,
            "row": 3,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "apply_attention_mask",
            "ref": "steps.apply_attention_mask",
            "col": 6,
            "row": 6,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "masked_logits",
            "ref": "values.masked_logits",
            "col": 7,
            "row": 6,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "softmax_attention_unmasked",
            "ref": "steps.softmax_attention_unmasked",
            "col": 8,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "softmax_attention_masked",
            "ref": "steps.softmax_attention_masked",
            "col": 8,
            "row": 6,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "attention_weights",
            "ref": "values.attention_weights",
            "col": 9,
            "row": 4,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "aggregate_scalar_values",
            "ref": "steps.aggregate_scalar_values",
            "col": 10,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "scalar_context",
            "ref": "values.scalar_context",
            "col": 11,
            "row": 3,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "aggregate_pair_values",
            "ref": "steps.aggregate_pair_values",
            "col": 10,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_value_context",
            "ref": "values.pair_value_context",
            "col": 11,
            "row": 5,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "project_attention_output",
            "ref": "steps.project_attention_output",
            "col": 12,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "project_reduced_output",
            "ref": "steps.project_reduced_output",
            "col": 12,
            "row": 4,
            "prominence": "primary",
            "treatment": "compact"
          }
        ],
        "segments": [
          {
            "id": "attention_weights",
            "label": "Compute attention weights",
            "description": "Project Q/K/V from the single stream, add the pair-derived logit bias, apply the validity mask when present, and normalize over keys.",
            "node_refs": [
              "ports.single_state",
              "ports.pair_context",
              "ports.attention_mask",
              "steps.project_qkv",
              "values.queries",
              "values.keys",
              "steps.scalar_logits",
              "values.scalar_logits",
              "steps.project_pair_bias",
              "values.pair_bias",
              "steps.combine_logits",
              "values.biased_logits",
              "steps.apply_attention_mask",
              "values.masked_logits",
              "steps.softmax_attention_unmasked",
              "steps.softmax_attention_masked",
              "values.attention_weights"
            ]
          },
          {
            "id": "value_aggregation",
            "label": "Aggregate values",
            "description": "Reuse the same attention weights to aggregate ordinary scalar values and, in the reduced IPA-style variant, attention-weighted pair values.",
            "node_refs": [
              "values.scalar_values",
              "steps.aggregate_scalar_values",
              "values.scalar_context",
              "steps.aggregate_pair_values",
              "values.pair_value_context",
              "steps.project_attention_output",
              "steps.project_reduced_output",
              "ports.updated_single_state",
              "ports.attention_delta"
            ]
          }
        ]
      },
      "evidencePolicy": {
        "generic_definition": "The template is reusable attention-core vocabulary; residual addition, dropout, normalization, transition, and masking belong to the surrounding architecture unless a variant explicitly includes that boundary.",
        "usage_requires": [
          "Evidence for the pair projection and addition to attention logits.",
          "Evidence for attention-weighted pair-value aggregation when the reduced variant is selected."
        ]
      }
    }
  },
  "pseudocode": {
  },
  "boards": {
    "schemaVersion": "standard-block-browser-v0.1",
    "sourceYaml": "../../standard_blocks/pair-biased-attention.yaml",
    "rootBoard": "standard_block_pair_biased_attention",
    "items": [
      {
        "id": "standard_block_pair_biased_attention",
        "kind": "standard_block_template",
        "title": "Pair-Biased Attention",
        "summary": "Form a single/token attention update with self-attention whose logits are conditioned by a pair representation, optionally adding attention-weighted pair-value aggregation.",
        "notes": [
          "Standard self-attention with a projected pair term added to logits; pair features are not aggregated as values.",
          "The template is reusable attention-core vocabulary; residual addition, dropout, normalization, transition, and masking belong to the surrounding architecture unless a variant explicitly includes that boundary."
        ],
        "subject_ref": "standard_blocks.pair_biased_attention",
        "expansion_depth": 0,
        "grid": {
          "columns": 13,
          "rows": 7,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 22,
          "row_gap": 34
        },
        "nodes": [
          {
            "id": "single_state",
            "label": "single state",
            "role": "state used to form queries, keys, and scalar values",
            "col": 1,
            "row": 2,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.ports.single_state",
            "kind": "representation",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "s",
            "port_ref": "ports.single_state"
          },
          {
            "id": "pair_context",
            "label": "pair context",
            "role": "read-only pair representation used for logit bias and optional attention-weighted pair-value aggregation",
            "col": 1,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.ports.pair_context",
            "kind": "representation",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z",
            "port_ref": "ports.pair_context"
          },
          {
            "id": "updated_single_state",
            "label": "updated single state",
            "role": "attention-updated single/token stream for variants that include the residual boundary",
            "col": 13,
            "row": 3,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.ports.updated_single_state",
            "kind": "representation",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "s'",
            "port_ref": "ports.updated_single_state"
          },
          {
            "id": "project_qkv",
            "label": "Project Q, K, and V",
            "role": "form self-attention terms from the same single-state input",
            "col": 2,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_qkv",
            "kind": "operation",
            "scale": "operation",
            "detail": "qkv_projection",
            "code": "q, k, v = project_qkv(single_state)",
            "tex": "q_i, k_i, v_i = W_{qkv}s_i",
            "operation": "qkv_projection"
          },
          {
            "id": "queries",
            "label": "queries",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "chip",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.queries",
            "kind": "representation",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "Q"
          },
          {
            "id": "keys",
            "label": "keys",
            "col": 3,
            "row": 2,
            "prominence": "context",
            "treatment": "chip",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.keys",
            "kind": "representation",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "K"
          },
          {
            "id": "scalar_values",
            "label": "scalar values",
            "col": 3,
            "row": 4,
            "prominence": "context",
            "treatment": "chip",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.scalar_values",
            "kind": "representation",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "V"
          },
          {
            "id": "scalar_logits_step",
            "label": "Form query-key logits",
            "col": 4,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.scalar_logits",
            "kind": "operation",
            "scale": "operation",
            "detail": "attention_logits",
            "code": "scalar_logits = einsum(q, k) * scale",
            "tex": "ell^{qk}_{ijh} = <q_{ih}, k_{jh}> s_h",
            "operation": "attention_logits"
          },
          {
            "id": "scalar_logits",
            "label": "query-key logits",
            "col": 5,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.scalar_logits",
            "kind": "representation",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "l_qk"
          },
          {
            "id": "project_pair_bias",
            "label": "Project pair bias",
            "role": "the selected architecture variant owns any pair preprocessing before projection",
            "col": 3,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_pair_bias",
            "kind": "operation",
            "scale": "operation",
            "detail": "pair_bias_projection",
            "code": "pair_bias = project_pair(pair_context)",
            "tex": "b_{ijh} = W_h z_{ij}",
            "operation": "pair_bias_projection"
          },
          {
            "id": "pair_bias",
            "label": "projected pair bias",
            "col": 5,
            "row": 5,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.pair_bias",
            "kind": "representation",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "b_z"
          },
          {
            "id": "combine_logits",
            "label": "Add pair bias",
            "col": 6,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.combine_logits",
            "kind": "operation",
            "scale": "operation",
            "detail": "pair_bias_add",
            "code": "biased_logits = scalar_logits + pair_bias",
            "tex": "ell_{ijh} = ell^{qk}_{ijh} + b_{ijh}",
            "operation": "pair_bias_add"
          },
          {
            "id": "biased_logits",
            "label": "conditioned logits",
            "col": 7,
            "row": 3,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.biased_logits",
            "kind": "representation",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "l"
          },
          {
            "id": "softmax_attention_unmasked",
            "label": "Normalize attention",
            "col": 8,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.softmax_attention_unmasked",
            "kind": "operation",
            "scale": "operation",
            "detail": "softmax",
            "code": "attention = softmax(biased_logits, dim=keys)",
            "tex": "a_{ijh} = softmax_j(ell_{ijh})",
            "operation": "softmax"
          },
          {
            "id": "attention_weights",
            "label": "attention weights",
            "col": 9,
            "row": 4,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.attention_weights",
            "kind": "representation",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "a"
          },
          {
            "id": "aggregate_scalar_values",
            "label": "Aggregate scalar values",
            "col": 10,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.aggregate_scalar_values",
            "kind": "operation",
            "scale": "operation",
            "detail": "weighted_sum",
            "code": "scalar_context = einsum(attention, v)",
            "tex": "o^s_{ih} = sum_j a_{ijh} v_{jh}",
            "operation": "weighted_sum"
          },
          {
            "id": "scalar_context",
            "label": "scalar context",
            "col": 11,
            "row": 3,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.values.scalar_context",
            "kind": "representation",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "o_s"
          },
          {
            "id": "project_attention_output",
            "label": "Project attention output",
            "col": 12,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_attention_output",
            "kind": "operation",
            "scale": "operation",
            "detail": "output_projection",
            "code": "updated_single_state = output_projection(scalar_context)",
            "operation": "output_projection"
          }
        ],
        "edges": [
          {
            "id": "template_pair_biased_attention__project_qkv__input_1",
            "from": "single_state",
            "to": "project_qkv",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_qkv",
            "template_data_ref": "ports.single_state",
            "connection": {
              "title": "Project Q, K, and V",
              "role": "reusable step input",
              "inside": "q, k, v = project_qkv(single_state)"
            }
          },
          {
            "id": "template_pair_biased_attention__project_qkv__output_1",
            "from": "project_qkv",
            "to": "queries",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_qkv",
            "template_data_ref": "values.queries",
            "connection": {
              "title": "Project Q, K, and V",
              "role": "reusable step output",
              "inside": "q, k, v = project_qkv(single_state)"
            }
          },
          {
            "id": "template_pair_biased_attention__project_qkv__output_2",
            "from": "project_qkv",
            "to": "keys",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_qkv",
            "template_data_ref": "values.keys",
            "connection": {
              "title": "Project Q, K, and V",
              "role": "reusable step output",
              "inside": "q, k, v = project_qkv(single_state)"
            }
          },
          {
            "id": "template_pair_biased_attention__project_qkv__output_3",
            "from": "project_qkv",
            "to": "scalar_values",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_qkv",
            "template_data_ref": "values.scalar_values",
            "connection": {
              "title": "Project Q, K, and V",
              "role": "reusable step output",
              "inside": "q, k, v = project_qkv(single_state)"
            }
          },
          {
            "id": "template_pair_biased_attention__scalar_logits__input_1",
            "from": "queries",
            "to": "scalar_logits_step",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.scalar_logits",
            "template_data_ref": "values.queries",
            "connection": {
              "title": "Form query-key logits",
              "role": "reusable step input",
              "inside": "scalar_logits = einsum(q, k) * scale"
            }
          },
          {
            "id": "template_pair_biased_attention__scalar_logits__input_2",
            "from": "keys",
            "to": "scalar_logits_step",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.scalar_logits",
            "template_data_ref": "values.keys",
            "connection": {
              "title": "Form query-key logits",
              "role": "reusable step input",
              "inside": "scalar_logits = einsum(q, k) * scale"
            }
          },
          {
            "id": "template_pair_biased_attention__scalar_logits__output_1",
            "from": "scalar_logits_step",
            "to": "scalar_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.scalar_logits",
            "template_data_ref": "values.scalar_logits",
            "connection": {
              "title": "Form query-key logits",
              "role": "reusable step output",
              "inside": "scalar_logits = einsum(q, k) * scale"
            }
          },
          {
            "id": "template_pair_biased_attention__project_pair_bias__input_1",
            "from": "pair_context",
            "to": "project_pair_bias",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_pair_bias",
            "template_data_ref": "ports.pair_context",
            "connection": {
              "title": "Project pair bias",
              "role": "reusable step input",
              "inside": "pair_bias = project_pair(pair_context)"
            }
          },
          {
            "id": "template_pair_biased_attention__project_pair_bias__output_1",
            "from": "project_pair_bias",
            "to": "pair_bias",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_pair_bias",
            "template_data_ref": "values.pair_bias",
            "connection": {
              "title": "Project pair bias",
              "role": "reusable step output",
              "inside": "pair_bias = project_pair(pair_context)"
            }
          },
          {
            "id": "template_pair_biased_attention__combine_logits__input_1",
            "from": "scalar_logits",
            "to": "combine_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.combine_logits",
            "template_data_ref": "values.scalar_logits",
            "connection": {
              "title": "Add pair bias",
              "role": "reusable step input",
              "inside": "biased_logits = scalar_logits + pair_bias"
            }
          },
          {
            "id": "template_pair_biased_attention__combine_logits__input_2",
            "from": "pair_bias",
            "to": "combine_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.combine_logits",
            "template_data_ref": "values.pair_bias",
            "connection": {
              "title": "Add pair bias",
              "role": "reusable step input",
              "inside": "biased_logits = scalar_logits + pair_bias"
            }
          },
          {
            "id": "template_pair_biased_attention__combine_logits__output_1",
            "from": "combine_logits",
            "to": "biased_logits",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.combine_logits",
            "template_data_ref": "values.biased_logits",
            "connection": {
              "title": "Add pair bias",
              "role": "reusable step output",
              "inside": "biased_logits = scalar_logits + pair_bias"
            }
          },
          {
            "id": "template_pair_biased_attention__softmax_attention_unmasked__input_1",
            "from": "biased_logits",
            "to": "softmax_attention_unmasked",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.softmax_attention_unmasked",
            "template_data_ref": "values.biased_logits",
            "connection": {
              "title": "Normalize attention",
              "role": "reusable step input",
              "inside": "attention = softmax(biased_logits, dim=keys)"
            }
          },
          {
            "id": "template_pair_biased_attention__softmax_attention_unmasked__output_1",
            "from": "softmax_attention_unmasked",
            "to": "attention_weights",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.softmax_attention_unmasked",
            "template_data_ref": "values.attention_weights",
            "connection": {
              "title": "Normalize attention",
              "role": "reusable step output",
              "inside": "attention = softmax(biased_logits, dim=keys)"
            }
          },
          {
            "id": "template_pair_biased_attention__aggregate_scalar_values__input_1",
            "from": "attention_weights",
            "to": "aggregate_scalar_values",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.aggregate_scalar_values",
            "template_data_ref": "values.attention_weights",
            "connection": {
              "title": "Aggregate scalar values",
              "role": "reusable step input",
              "inside": "scalar_context = einsum(attention, v)"
            }
          },
          {
            "id": "template_pair_biased_attention__aggregate_scalar_values__input_2",
            "from": "scalar_values",
            "to": "aggregate_scalar_values",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.aggregate_scalar_values",
            "template_data_ref": "values.scalar_values",
            "connection": {
              "title": "Aggregate scalar values",
              "role": "reusable step input",
              "inside": "scalar_context = einsum(attention, v)"
            }
          },
          {
            "id": "template_pair_biased_attention__aggregate_scalar_values__output_1",
            "from": "aggregate_scalar_values",
            "to": "scalar_context",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.aggregate_scalar_values",
            "template_data_ref": "values.scalar_context",
            "connection": {
              "title": "Aggregate scalar values",
              "role": "reusable step output",
              "inside": "scalar_context = einsum(attention, v)"
            }
          },
          {
            "id": "template_pair_biased_attention__project_attention_output__input_1",
            "from": "scalar_context",
            "to": "project_attention_output",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_attention_output",
            "template_data_ref": "values.scalar_context",
            "connection": {
              "title": "Project attention output",
              "role": "reusable step input",
              "inside": "updated_single_state = output_projection(scalar_context)"
            }
          },
          {
            "id": "template_pair_biased_attention__project_attention_output__output_1",
            "from": "project_attention_output",
            "to": "updated_single_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/pair-biased-attention.yaml",
            "standard_block_id": "pair_biased_attention",
            "template_fact_ref": "standard_blocks.pair_biased_attention.steps.project_attention_output",
            "template_data_ref": "ports.updated_single_state",
            "connection": {
              "title": "Project attention output",
              "role": "reusable step output",
              "inside": "updated_single_state = output_projection(scalar_context)"
            }
          }
        ],
        "segments": [
          {
            "id": "attention_weights",
            "label": "Compute attention weights",
            "description": "Project Q/K/V from the single stream, add the pair-derived logit bias, apply the validity mask when present, and normalize over keys.",
            "order": 1,
            "node_ids": [
              "single_state",
              "pair_context",
              "project_qkv",
              "queries",
              "keys",
              "scalar_logits_step",
              "scalar_logits",
              "project_pair_bias",
              "pair_bias",
              "combine_logits",
              "biased_logits",
              "softmax_attention_unmasked",
              "attention_weights"
            ]
          },
          {
            "id": "value_aggregation",
            "label": "Aggregate values",
            "description": "Reuse the same attention weights to aggregate ordinary scalar values and, in the reduced IPA-style variant, attention-weighted pair values.",
            "order": 2,
            "node_ids": [
              "scalar_values",
              "aggregate_scalar_values",
              "scalar_context",
              "project_attention_output",
              "updated_single_state"
            ]
          }
        ],
        "projectionMode": "standard_block_template",
        "standardBlockRef": "standard_blocks/pair-biased-attention.yaml",
        "standardBlockId": "pair_biased_attention",
        "variant": "logit_bias_only",
        "variantLabel": "Pair-logit bias",
        "pseudocode": [
          {
            "id": "project_qkv",
            "templateFactRef": "standard_blocks.pair_biased_attention.steps.project_qkv",
            "label": "Project Q, K, and V",
            "operation": "qkv_projection",
            "code": "q, k, v = project_qkv(single_state)",
            "tex": "q_i, k_i, v_i = W_{qkv}s_i",
            "inputs": [
              "ports.single_state"
            ],
            "outputs": [
              "values.queries",
              "values.keys",
              "values.scalar_values"
            ]
          },
          {
            "id": "scalar_logits",
            "templateFactRef": "standard_blocks.pair_biased_attention.steps.scalar_logits",
            "label": "Form query-key logits",
            "operation": "attention_logits",
            "code": "scalar_logits = einsum(q, k) * scale",
            "tex": "ell^{qk}_{ijh} = <q_{ih}, k_{jh}> s_h",
            "inputs": [
              "values.queries",
              "values.keys"
            ],
            "outputs": [
              "values.scalar_logits"
            ]
          },
          {
            "id": "project_pair_bias",
            "templateFactRef": "standard_blocks.pair_biased_attention.steps.project_pair_bias",
            "label": "Project pair bias",
            "operation": "pair_bias_projection",
            "code": "pair_bias = project_pair(pair_context)",
            "tex": "b_{ijh} = W_h z_{ij}",
            "inputs": [
              "ports.pair_context"
            ],
            "outputs": [
              "values.pair_bias"
            ]
          },
          {
            "id": "combine_logits",
            "templateFactRef": "standard_blocks.pair_biased_attention.steps.combine_logits",
            "label": "Add pair bias",
            "operation": "pair_bias_add",
            "code": "biased_logits = scalar_logits + pair_bias",
            "tex": "ell_{ijh} = ell^{qk}_{ijh} + b_{ijh}",
            "inputs": [
              "values.scalar_logits",
              "values.pair_bias"
            ],
            "outputs": [
              "values.biased_logits"
            ]
          },
          {
            "id": "softmax_attention_unmasked",
            "templateFactRef": "standard_blocks.pair_biased_attention.steps.softmax_attention_unmasked",
            "label": "Normalize attention",
            "operation": "softmax",
            "code": "attention = softmax(biased_logits, dim=keys)",
            "tex": "a_{ijh} = softmax_j(ell_{ijh})",
            "inputs": [
              "values.biased_logits"
            ],
            "outputs": [
              "values.attention_weights"
            ]
          },
          {
            "id": "aggregate_scalar_values",
            "templateFactRef": "standard_blocks.pair_biased_attention.steps.aggregate_scalar_values",
            "label": "Aggregate scalar values",
            "operation": "weighted_sum",
            "code": "scalar_context = einsum(attention, v)",
            "tex": "o^s_{ih} = sum_j a_{ijh} v_{jh}",
            "inputs": [
              "values.attention_weights",
              "values.scalar_values"
            ],
            "outputs": [
              "values.scalar_context"
            ]
          },
          {
            "id": "project_attention_output",
            "templateFactRef": "standard_blocks.pair_biased_attention.steps.project_attention_output",
            "label": "Project attention output",
            "operation": "output_projection",
            "code": "updated_single_state = output_projection(scalar_context)",
            "inputs": [
              "values.scalar_context"
            ],
            "outputs": [
              "ports.updated_single_state"
            ]
          }
        ]
      }
    ]
  }
};
