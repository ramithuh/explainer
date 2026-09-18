export const manifest = {
  "schemaVersion": "standard-block-browser-manifest-v0.1",
  "build": {
    "generator": "architecture-manifest-builder-v0.5.0",
    "inputDigests": {
      "references/bibliography.yaml": "d1357b03ba69c1360b917bc8ddf01387ddc7b14307b81ed29ba993a026ecdfc5",
      "standard_blocks/af3-msa-module.yaml": "333b5ac4e9aa09e25a22d140c14fbd6aabb4eb7d8b752b71cf360c386745aac0"
    }
  },
  "architecture": {
    "schemaVersion": "standard-block-v0.3",
    "id": "standard_block_af3_msa_module",
    "name": "AlphaFold 3 MSA Module",
    "family": "standard_component",
    "status": "review",
    "taskModes": [

    ],
    "sourceYaml": "../../standard_blocks/af3-msa-module.yaml",
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
        "id": "genie3_backbone_update_code",
        "kind": "code",
        "title": "Genie 3 six-parameter backbone frame update",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/model/module/backbone_update.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/module/backbone_update.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/model/module/backbone_update.py"
      },
      {
        "id": "genie3_affine_utils_code",
        "kind": "code",
        "title": "Genie 3 rigid-transform parameterization and composition utilities",
        "organization": "AQLaboratory",
        "repository": "aqlaboratory/genie3",
        "revision": "d77ae5ac04212ff1e8b29b585859a3244c614804",
        "path": "src/genie3/generation/utils/affine_utils.py",
        "url": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/utils/affine_utils.py",
        "href": "https://github.com/aqlaboratory/genie3/blob/d77ae5ac04212ff1e8b29b585859a3244c614804/src/genie3/generation/utils/affine_utils.py"
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
    "af3_msa_module": {
      "id": "af3_msa_module",
      "schemaVersion": "standard-block-v0.3",
      "name": "AlphaFold 3 MSA Module",
      "sourceYaml": "../../standard_blocks/af3-msa-module.yaml",
      "description": "Embed a sampled MSA, exchange information between MSA rows and the pair representation through outer-product mean and pair-weighted averaging, refine the pair state with triangle operations, repeat the homogeneous block four times, then discard the MSA state and return only the pair state.",
      "math": [
        {
          "id": "sample_and_embed_msa",
          "text": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)",
          "tex": "m^0_{si}=W_m Sample(f^{msa},m^{msa})_{si}+W_s s^{input}_i",
          "operation": "msa_sampling_and_embedding"
        },
        {
          "id": "initialize_loop_state",
          "text": "current_msa_state, current_pair_state = initial_msa_state, pair_state",
          "operation": "loop_state_initialization"
        },
        {
          "id": "outer_product_mean",
          "text": "outer_product_delta = outer_product_mean(current_msa_state, msa_mask)",
          "tex": "delta z^{opm}_{ij}=W_o Mean_s(a_{si} tensor_product b_{sj})",
          "operation": "outer_product_mean"
        },
        {
          "id": "add_outer_product_residual",
          "text": "pair_after_outer_product = current_pair_state + outer_product_delta",
          "tex": "z^{opm}=z^l+delta z^{opm}",
          "operation": "residual_add"
        },
        {
          "id": "pair_weighted_average",
          "text": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))",
          "tex": "delta m^{pwa}_{si}=W_o concat_h(g^h_{si} elementwise_product sum_j softmax_j(W_b^h z^{opm}_{ij})v^h_{sj})",
          "operation": "pair_weighted_averaging"
        },
        {
          "id": "add_msa_attention_residual",
          "text": "msa_after_attention = current_msa_state + rowwise_dropout_0_15(msa_attention_delta)",
          "operation": "rowwise_dropout_residual"
        },
        {
          "id": "msa_transition",
          "text": "next_msa_state = msa_after_attention + swiglu_transition(msa_after_attention)",
          "operation": "swiglu_transition_residual"
        },
        {
          "id": "triangle_multiplication_outgoing",
          "text": "pair_after_outgoing = pair_after_outer_product + rowwise_dropout_0_25(triangle_multiplication_outgoing(pair_after_outer_product, pair_mask))",
          "operation": "triangle_multiplication_outgoing"
        },
        {
          "id": "triangle_multiplication_incoming",
          "text": "pair_after_incoming = pair_after_outgoing + rowwise_dropout_0_25(triangle_multiplication_incoming(pair_after_outgoing, pair_mask))",
          "operation": "triangle_multiplication_incoming"
        },
        {
          "id": "triangle_attention_starting_node",
          "text": "pair_after_starting_attention = pair_after_incoming + rowwise_dropout_0_25(triangle_attention_starting_node(pair_after_incoming, pair_mask))",
          "operation": "triangle_attention_starting_node"
        },
        {
          "id": "triangle_attention_ending_node",
          "text": "pair_after_ending_attention = pair_after_starting_attention + columnwise_dropout_0_25(triangle_attention_ending_node(pair_after_starting_attention, pair_mask))",
          "operation": "triangle_attention_ending_node"
        },
        {
          "id": "pair_transition",
          "text": "next_pair_state = pair_after_ending_attention + swiglu_pair_transition(pair_after_ending_attention, pair_mask)",
          "operation": "swiglu_pair_transition_residual"
        },
        {
          "id": "advance_four_block_loop",
          "text": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)",
          "operation": "fixed_depth_loop"
        },
        {
          "id": "discard_msa_and_return_pair",
          "text": "updated_pair_state = return_pair_and_discard_msa(final_pair_state, final_msa_state)",
          "operation": "boundary_projection"
        }
      ],
      "kind": "composite_msa_encoder",
      "status": "review",
      "parameters": [
        {
          "id": "n_msa",
          "notation": "N_{msa}",
          "kind": "sequence",
          "resolution": "boundary",
          "role": "sampled MSA row count"
        },
        {
          "id": "n_token",
          "notation": "N_{token}",
          "kind": "sequence",
          "resolution": "boundary",
          "role": "token count"
        },
        {
          "id": "c_raw",
          "notation": "C_{raw}",
          "kind": "channel",
          "resolution": "boundary",
          "role": "concatenated raw MSA feature width"
        },
        {
          "id": "c_single",
          "notation": "C_s",
          "kind": "channel",
          "resolution": "boundary",
          "role": "input single-feature width"
        },
        {
          "id": "c_pair",
          "notation": "C_z",
          "kind": "channel",
          "resolution": "boundary",
          "role": "pair-state channel width"
        },
        {
          "id": "c_msa",
          "notation": "C_m",
          "kind": "channel",
          "resolution": "instance",
          "role": "embedded MSA channel width"
        },
        {
          "id": "n_head",
          "notation": "H",
          "kind": "heads",
          "resolution": "instance",
          "role": "pair-weighted averaging head count"
        },
        {
          "id": "c_value",
          "notation": "C_v",
          "kind": "channel",
          "resolution": "instance",
          "role": "pair-weighted averaging value width per head"
        }
      ],
      "ports": [
        {
          "id": "msa_features",
          "label": "raw MSA features",
          "direction": "input",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "data_flow"
          ],
          "glyph": "matrix",
          "notation": "f^{msa}",
          "role": "sampled alignment symbols plus deletion-presence and deletion-value features",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "raw_feature",
                "dimension": "c_raw"
              }
            ]
          }
        },
        {
          "id": "input_single_state",
          "label": "input single features",
          "direction": "conditioning",
          "kind": "representation",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "data_flow"
          ],
          "glyph": "single",
          "notation": "s^{input}",
          "role": "token-wise input embedding broadcast into every sampled MSA row",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "single_channel",
                "dimension": "c_single"
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
          "role": "ordered token-pair state entering the four-block MSA module",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "msa_mask",
          "label": "MSA validity mask",
          "direction": "conditioning",
          "kind": "mask",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "control"
          ],
          "glyph": "matrix",
          "notation": "m^{msa}",
          "role": "valid MSA rows and token columns used by sampling, outer-product mean, and pair-weighted averaging",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              }
            ]
          }
        },
        {
          "id": "pair_mask",
          "label": "valid-pair mask",
          "direction": "conditioning",
          "kind": "mask",
          "required": true,
          "cardinality": "one",
          "relation_kinds": [
            "conditioning",
            "control"
          ],
          "glyph": "pair",
          "notation": "m^{pair}",
          "role": "token-pair validity mask applied throughout the triangle and pair-transition stack",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
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
          "notation": "z^{out}",
          "role": "pair state returned to the downstream Pairformer after the MSA state is discarded",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        }
      ],
      "variants": [
        {
          "id": "af3_four_block_pair_weighted",
          "label": "AF3 four-block MSA module",
          "description": "Four independently parameterized homogeneous blocks use outer-product mean for MSA-to-pair communication, pair-only attention weights for pair-to-MSA communication, and the AF2-style triangle pair stack before returning only the pair state.",
          "step_refs": [
            "steps.sample_and_embed_msa",
            "steps.initialize_loop_state",
            "steps.outer_product_mean",
            "steps.add_outer_product_residual",
            "steps.pair_weighted_average",
            "steps.add_msa_attention_residual",
            "steps.msa_transition",
            "steps.triangle_multiplication_outgoing",
            "steps.triangle_multiplication_incoming",
            "steps.triangle_attention_starting_node",
            "steps.triangle_attention_ending_node",
            "steps.pair_transition",
            "steps.advance_four_block_loop",
            "steps.discard_msa_and_return_pair"
          ]
        }
      ],
      "defaultVariant": "af3_four_block_pair_weighted",
      "values": [
        {
          "id": "initial_msa_state",
          "label": "embedded MSA state",
          "kind": "representation",
          "glyph": "matrix",
          "notation": "m^{0}",
          "role": "64-channel MSA representation after row sampling, feature embedding, and broadcast input conditioning",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "msa_channel",
                "dimension": "c_msa"
              }
            ]
          }
        },
        {
          "id": "current_msa_state",
          "label": "current block MSA state",
          "kind": "representation",
          "glyph": "matrix",
          "notation": "m^{l}",
          "role": "loop-carried MSA state entering homogeneous block l",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "msa_channel",
                "dimension": "c_msa"
              }
            ]
          }
        },
        {
          "id": "current_pair_state",
          "label": "current block pair state",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{l}",
          "role": "loop-carried pair state entering homogeneous block l",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "outer_product_delta",
          "label": "MSA-derived pair update",
          "kind": "representation",
          "glyph": "pair",
          "notation": "delta z^{opm}",
          "role": "outer-product mean projection averaged over sampled MSA rows",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "pair_after_outer_product",
          "label": "pair after MSA aggregation",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{opm}",
          "role": "current pair state after the MSA-derived outer-product update",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "msa_attention_delta",
          "label": "pair-routed MSA update",
          "kind": "representation",
          "glyph": "matrix",
          "notation": "delta m^{pwa}",
          "role": "gated weighted average of MSA values using attention weights projected only from the pair state",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "msa_channel",
                "dimension": "c_msa"
              }
            ]
          }
        },
        {
          "id": "msa_after_attention",
          "label": "MSA after pair routing",
          "kind": "representation",
          "glyph": "matrix",
          "notation": "m^{pwa}",
          "role": "MSA state after the row-wise dropout and residual addition",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "msa_channel",
                "dimension": "c_msa"
              }
            ]
          }
        },
        {
          "id": "next_msa_state",
          "label": "next block MSA state",
          "kind": "representation",
          "glyph": "matrix",
          "notation": "m^{l+1}",
          "role": "loop-carried MSA state after the SwiGLU transition residual",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "msa_channel",
                "dimension": "c_msa"
              }
            ]
          }
        },
        {
          "id": "pair_after_outgoing",
          "label": "pair after outgoing update",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{out_tri}",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "pair_after_incoming",
          "label": "pair after incoming update",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{in_tri}",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "pair_after_starting_attention",
          "label": "pair after starting-node attention",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{start}",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "pair_after_ending_attention",
          "label": "pair after ending-node attention",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{end}",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "next_pair_state",
          "label": "next block pair state",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{l+1}",
          "role": "loop-carried pair state after the pointwise pair transition",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        },
        {
          "id": "final_msa_state",
          "label": "final MSA state",
          "kind": "representation",
          "glyph": "matrix",
          "notation": "m^{4}",
          "role": "fourth-block MSA result, intentionally discarded at the module boundary",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "msa_sequence",
                "dimension": "n_msa"
              },
              {
                "id": "token",
                "dimension": "n_token"
              },
              {
                "id": "msa_channel",
                "dimension": "c_msa"
              }
            ]
          }
        },
        {
          "id": "final_pair_state",
          "label": "final pair state",
          "kind": "representation",
          "glyph": "pair",
          "notation": "z^{4}",
          "role": "fourth-block pair result returned by the module",
          "shape_contract": {
            "kind": "tensor",
            "axes": [
              {
                "id": "query_token",
                "dimension": "n_token"
              },
              {
                "id": "key_token",
                "dimension": "n_token"
              },
              {
                "id": "pair_channel",
                "dimension": "c_pair"
              }
            ]
          }
        }
      ],
      "steps": [
        {
          "id": "sample_and_embed_msa",
          "label": "Sample and embed MSA rows",
          "operation": "msa_sampling_and_embedding",
          "shape_rule": "linear",
          "inputs": [
            "ports.msa_features",
            "ports.input_single_state",
            "ports.msa_mask"
          ],
          "outputs": [
            "values.initial_msa_state"
          ],
          "code": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)",
          "tex": "m^0_{si}=W_m Sample(f^{msa},m^{msa})_{si}+W_s s^{input}_i",
          "role": "sample a fresh MSA subset for the recycling iteration, embed the concatenated MSA features, and broadcast-add the input single features",
          "code_bindings": [
            {
              "lexeme": "msa_features",
              "ref": "ports.msa_features",
              "access": "read"
            },
            {
              "lexeme": "input_single_state",
              "ref": "ports.input_single_state",
              "access": "read"
            },
            {
              "lexeme": "msa_mask",
              "ref": "ports.msa_mask",
              "access": "read"
            },
            {
              "lexeme": "initial_msa_state",
              "ref": "values.initial_msa_state",
              "access": "write"
            }
          ]
        },
        {
          "id": "initialize_loop_state",
          "label": "Initialize four-block loop",
          "operation": "loop_state_initialization",
          "shape_rule": "linear",
          "inputs": [
            "values.initial_msa_state",
            "ports.pair_state"
          ],
          "outputs": [
            "values.current_msa_state",
            "values.current_pair_state"
          ],
          "code": "current_msa_state, current_pair_state = initial_msa_state, pair_state",
          "role": "expose distinct current states for one homogeneous block without encoding either update as a self-edge",
          "code_bindings": [
            {
              "lexeme": "initial_msa_state",
              "ref": "values.initial_msa_state",
              "access": "read"
            },
            {
              "lexeme": "pair_state",
              "ref": "ports.pair_state",
              "access": "read"
            },
            {
              "lexeme": "current_msa_state",
              "ref": "values.current_msa_state",
              "access": "write"
            },
            {
              "lexeme": "current_pair_state",
              "ref": "values.current_pair_state",
              "access": "write"
            }
          ]
        },
        {
          "id": "outer_product_mean",
          "label": "Aggregate MSA into pair update",
          "operation": "outer_product_mean",
          "shape_rule": "linear",
          "inputs": [
            "values.current_msa_state",
            "ports.msa_mask"
          ],
          "outputs": [
            "values.outer_product_delta"
          ],
          "code": "outer_product_delta = outer_product_mean(current_msa_state, msa_mask)",
          "tex": "delta z^{opm}_{ij}=W_o Mean_s(a_{si} tensor_product b_{sj})",
          "role": "communicate alignment information into the pair representation by averaging projected outer products over sampled MSA rows",
          "code_bindings": [
            {
              "lexeme": "current_msa_state",
              "ref": "values.current_msa_state",
              "access": "read"
            },
            {
              "lexeme": "msa_mask",
              "ref": "ports.msa_mask",
              "access": "read"
            },
            {
              "lexeme": "outer_product_delta",
              "ref": "values.outer_product_delta",
              "access": "write"
            }
          ]
        },
        {
          "id": "add_outer_product_residual",
          "label": "Add MSA-derived pair update",
          "operation": "residual_add",
          "shape_rule": "residual_add",
          "inputs": [
            "values.current_pair_state",
            "values.outer_product_delta"
          ],
          "outputs": [
            "values.pair_after_outer_product"
          ],
          "code": "pair_after_outer_product = current_pair_state + outer_product_delta",
          "tex": "z^{opm}=z^l+delta z^{opm}",
          "code_bindings": [
            {
              "lexeme": "current_pair_state",
              "ref": "values.current_pair_state",
              "access": "read"
            },
            {
              "lexeme": "outer_product_delta",
              "ref": "values.outer_product_delta",
              "access": "read"
            },
            {
              "lexeme": "pair_after_outer_product",
              "ref": "values.pair_after_outer_product",
              "access": "write"
            }
          ]
        },
        {
          "id": "pair_weighted_average",
          "label": "Route each MSA row with pair weights",
          "operation": "pair_weighted_averaging",
          "shape_rule": "linear",
          "inputs": [
            "values.current_msa_state",
            "values.pair_after_outer_product",
            "ports.msa_mask"
          ],
          "outputs": [
            "values.msa_attention_delta"
          ],
          "code": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))",
          "tex": "delta m^{pwa}_{si}=W_o concat_h(g^h_{si} elementwise_product sum_j softmax_j(W_b^h z^{opm}_{ij})v^h_{sj})",
          "role": "project one token-to-token weight matrix per head from the pair state, reuse it for every MSA row, gate the weighted values at each query token, and omit query-key content logits",
          "code_bindings": [
            {
              "lexeme": "current_msa_state",
              "ref": "values.current_msa_state",
              "access": "read"
            },
            {
              "lexeme": "pair_after_outer_product",
              "ref": "values.pair_after_outer_product",
              "access": "read"
            },
            {
              "lexeme": "msa_mask",
              "ref": "ports.msa_mask",
              "access": "read"
            },
            {
              "lexeme": "msa_attention_delta",
              "ref": "values.msa_attention_delta",
              "access": "write"
            }
          ]
        },
        {
          "id": "add_msa_attention_residual",
          "label": "Add pair-routed MSA update",
          "operation": "rowwise_dropout_residual",
          "shape_rule": "residual_add",
          "inputs": [
            "values.current_msa_state",
            "values.msa_attention_delta"
          ],
          "outputs": [
            "values.msa_after_attention"
          ],
          "code": "msa_after_attention = current_msa_state + rowwise_dropout_0_15(msa_attention_delta)",
          "role": "apply the training-time row-wise dropout boundary and add the pair-routed update to the MSA state",
          "code_bindings": [
            {
              "lexeme": "current_msa_state",
              "ref": "values.current_msa_state",
              "access": "read"
            },
            {
              "lexeme": "msa_attention_delta",
              "ref": "values.msa_attention_delta",
              "access": "read"
            },
            {
              "lexeme": "msa_after_attention",
              "ref": "values.msa_after_attention",
              "access": "write"
            }
          ]
        },
        {
          "id": "msa_transition",
          "label": "Apply MSA SwiGLU transition",
          "operation": "swiglu_transition_residual",
          "shape_rule": "preserve",
          "inputs": [
            "values.msa_after_attention"
          ],
          "outputs": [
            "values.next_msa_state"
          ],
          "code": "next_msa_state = msa_after_attention + swiglu_transition(msa_after_attention)",
          "role": "refine every MSA token independently before the state is carried to the next homogeneous block",
          "code_bindings": [
            {
              "lexeme": "msa_after_attention",
              "ref": "values.msa_after_attention",
              "access": "read"
            },
            {
              "lexeme": "next_msa_state",
              "ref": "values.next_msa_state",
              "access": "write"
            }
          ]
        },
        {
          "id": "triangle_multiplication_outgoing",
          "label": "Triangle multiplication, outgoing",
          "operation": "triangle_multiplication_outgoing",
          "shape_rule": "preserve",
          "inputs": [
            "values.pair_after_outer_product",
            "ports.pair_mask"
          ],
          "outputs": [
            "values.pair_after_outgoing"
          ],
          "code": "pair_after_outgoing = pair_after_outer_product + rowwise_dropout_0_25(triangle_multiplication_outgoing(pair_after_outer_product, pair_mask))",
          "code_bindings": [
            {
              "lexeme": "pair_after_outer_product",
              "ref": "values.pair_after_outer_product",
              "access": "read"
            },
            {
              "lexeme": "pair_mask",
              "ref": "ports.pair_mask",
              "access": "read"
            },
            {
              "lexeme": "pair_after_outgoing",
              "ref": "values.pair_after_outgoing",
              "access": "write"
            }
          ]
        },
        {
          "id": "triangle_multiplication_incoming",
          "label": "Triangle multiplication, incoming",
          "operation": "triangle_multiplication_incoming",
          "shape_rule": "preserve",
          "inputs": [
            "values.pair_after_outgoing",
            "ports.pair_mask"
          ],
          "outputs": [
            "values.pair_after_incoming"
          ],
          "code": "pair_after_incoming = pair_after_outgoing + rowwise_dropout_0_25(triangle_multiplication_incoming(pair_after_outgoing, pair_mask))",
          "code_bindings": [
            {
              "lexeme": "pair_after_outgoing",
              "ref": "values.pair_after_outgoing",
              "access": "read"
            },
            {
              "lexeme": "pair_mask",
              "ref": "ports.pair_mask",
              "access": "read"
            },
            {
              "lexeme": "pair_after_incoming",
              "ref": "values.pair_after_incoming",
              "access": "write"
            }
          ]
        },
        {
          "id": "triangle_attention_starting_node",
          "label": "Triangle attention, starting node",
          "operation": "triangle_attention_starting_node",
          "shape_rule": "preserve",
          "inputs": [
            "values.pair_after_incoming",
            "ports.pair_mask"
          ],
          "outputs": [
            "values.pair_after_starting_attention"
          ],
          "code": "pair_after_starting_attention = pair_after_incoming + rowwise_dropout_0_25(triangle_attention_starting_node(pair_after_incoming, pair_mask))",
          "code_bindings": [
            {
              "lexeme": "pair_after_incoming",
              "ref": "values.pair_after_incoming",
              "access": "read"
            },
            {
              "lexeme": "pair_mask",
              "ref": "ports.pair_mask",
              "access": "read"
            },
            {
              "lexeme": "pair_after_starting_attention",
              "ref": "values.pair_after_starting_attention",
              "access": "write"
            }
          ]
        },
        {
          "id": "triangle_attention_ending_node",
          "label": "Triangle attention, ending node",
          "operation": "triangle_attention_ending_node",
          "shape_rule": "preserve",
          "inputs": [
            "values.pair_after_starting_attention",
            "ports.pair_mask"
          ],
          "outputs": [
            "values.pair_after_ending_attention"
          ],
          "code": "pair_after_ending_attention = pair_after_starting_attention + columnwise_dropout_0_25(triangle_attention_ending_node(pair_after_starting_attention, pair_mask))",
          "code_bindings": [
            {
              "lexeme": "pair_after_starting_attention",
              "ref": "values.pair_after_starting_attention",
              "access": "read"
            },
            {
              "lexeme": "pair_mask",
              "ref": "ports.pair_mask",
              "access": "read"
            },
            {
              "lexeme": "pair_after_ending_attention",
              "ref": "values.pair_after_ending_attention",
              "access": "write"
            }
          ]
        },
        {
          "id": "pair_transition",
          "label": "Apply pair SwiGLU transition",
          "operation": "swiglu_pair_transition_residual",
          "shape_rule": "preserve",
          "inputs": [
            "values.pair_after_ending_attention",
            "ports.pair_mask"
          ],
          "outputs": [
            "values.next_pair_state"
          ],
          "code": "next_pair_state = pair_after_ending_attention + swiglu_pair_transition(pair_after_ending_attention, pair_mask)",
          "role": "apply the pointwise pair transition and carry the result to the next homogeneous block",
          "code_bindings": [
            {
              "lexeme": "pair_after_ending_attention",
              "ref": "values.pair_after_ending_attention",
              "access": "read"
            },
            {
              "lexeme": "pair_mask",
              "ref": "ports.pair_mask",
              "access": "read"
            },
            {
              "lexeme": "next_pair_state",
              "ref": "values.next_pair_state",
              "access": "write"
            }
          ]
        },
        {
          "id": "advance_four_block_loop",
          "label": "Advance until block 4",
          "operation": "fixed_depth_loop",
          "shape_rule": "linear",
          "inputs": [
            "values.next_msa_state",
            "values.next_pair_state"
          ],
          "outputs": [
            "values.final_msa_state",
            "values.final_pair_state"
          ],
          "code": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)",
          "role": "feed the distinct next states into the next independently parameterized block until four total blocks have run",
          "code_bindings": [
            {
              "lexeme": "next_msa_state",
              "ref": "values.next_msa_state",
              "access": "read"
            },
            {
              "lexeme": "next_pair_state",
              "ref": "values.next_pair_state",
              "access": "read"
            },
            {
              "lexeme": "final_msa_state",
              "ref": "values.final_msa_state",
              "access": "write"
            },
            {
              "lexeme": "final_pair_state",
              "ref": "values.final_pair_state",
              "access": "write"
            }
          ]
        },
        {
          "id": "discard_msa_and_return_pair",
          "label": "Discard MSA and return pair",
          "operation": "boundary_projection",
          "shape_rule": "linear",
          "inputs": [
            "values.final_msa_state",
            "values.final_pair_state"
          ],
          "outputs": [
            "ports.updated_pair_state"
          ],
          "code": "updated_pair_state = return_pair_and_discard_msa(final_pair_state, final_msa_state)",
          "role": "terminate the MSA track at this boundary and expose only the pair state to the downstream Pairformer",
          "code_bindings": [
            {
              "lexeme": "final_msa_state",
              "ref": "values.final_msa_state",
              "access": "read"
            },
            {
              "lexeme": "final_pair_state",
              "ref": "values.final_pair_state",
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
          "columns": 23,
          "rows": 7,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 24,
          "row_gap": 34
        },
        "nodes": [
          {
            "id": "msa_features",
            "ref": "ports.msa_features",
            "col": 1,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "input_single_state",
            "ref": "ports.input_single_state",
            "col": 1,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "msa_mask",
            "ref": "ports.msa_mask",
            "col": 1,
            "row": 3,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "pair_state",
            "ref": "ports.pair_state",
            "col": 1,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "pair_mask",
            "ref": "ports.pair_mask",
            "col": 1,
            "row": 6,
            "prominence": "context",
            "treatment": "chip"
          },
          {
            "id": "sample_and_embed_msa",
            "ref": "steps.sample_and_embed_msa",
            "col": 2,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "initial_msa_state",
            "ref": "values.initial_msa_state",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "initialize_loop_state",
            "ref": "steps.initialize_loop_state",
            "col": 4,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "current_msa_state",
            "ref": "values.current_msa_state",
            "col": 5,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "current_pair_state",
            "ref": "values.current_pair_state",
            "col": 5,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "outer_product_mean",
            "ref": "steps.outer_product_mean",
            "col": 6,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "outer_product_delta",
            "ref": "values.outer_product_delta",
            "col": 7,
            "row": 4,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "add_outer_product_residual",
            "ref": "steps.add_outer_product_residual",
            "col": 8,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_after_outer_product",
            "ref": "values.pair_after_outer_product",
            "col": 9,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "pair_weighted_average",
            "ref": "steps.pair_weighted_average",
            "col": 10,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "msa_attention_delta",
            "ref": "values.msa_attention_delta",
            "col": 11,
            "row": 2,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "add_msa_attention_residual",
            "ref": "steps.add_msa_attention_residual",
            "col": 12,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "msa_after_attention",
            "ref": "values.msa_after_attention",
            "col": 13,
            "row": 1,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "msa_transition",
            "ref": "steps.msa_transition",
            "col": 14,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "next_msa_state",
            "ref": "values.next_msa_state",
            "col": 15,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "triangle_multiplication_outgoing",
            "ref": "steps.triangle_multiplication_outgoing",
            "col": 10,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_after_outgoing",
            "ref": "values.pair_after_outgoing",
            "col": 11,
            "row": 5,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "triangle_multiplication_incoming",
            "ref": "steps.triangle_multiplication_incoming",
            "col": 12,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_after_incoming",
            "ref": "values.pair_after_incoming",
            "col": 13,
            "row": 5,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "triangle_attention_starting_node",
            "ref": "steps.triangle_attention_starting_node",
            "col": 14,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_after_starting_attention",
            "ref": "values.pair_after_starting_attention",
            "col": 15,
            "row": 5,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "triangle_attention_ending_node",
            "ref": "steps.triangle_attention_ending_node",
            "col": 16,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "pair_after_ending_attention",
            "ref": "values.pair_after_ending_attention",
            "col": 17,
            "row": 5,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "pair_transition",
            "ref": "steps.pair_transition",
            "col": 18,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "next_pair_state",
            "ref": "values.next_pair_state",
            "col": 19,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "advance_four_block_loop",
            "ref": "steps.advance_four_block_loop",
            "col": 20,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "final_msa_state",
            "ref": "values.final_msa_state",
            "col": 21,
            "row": 1,
            "prominence": "context",
            "treatment": "compact"
          },
          {
            "id": "final_pair_state",
            "ref": "values.final_pair_state",
            "col": 21,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact"
          },
          {
            "id": "discard_msa_and_return_pair",
            "ref": "steps.discard_msa_and_return_pair",
            "col": 22,
            "row": 4,
            "prominence": "primary",
            "treatment": "compact"
          },
          {
            "id": "updated_pair_state",
            "ref": "ports.updated_pair_state",
            "col": 23,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact"
          }
        ],
        "segments": [
          {
            "id": "module_inputs",
            "label": "Build initial states",
            "description": "Sample and embed the MSA, broadcast the input single features, and initialize distinct loop-carried MSA and pair states.",
            "node_refs": [
              "ports.msa_features",
              "ports.input_single_state",
              "ports.msa_mask",
              "ports.pair_state",
              "ports.pair_mask",
              "steps.sample_and_embed_msa",
              "values.initial_msa_state",
              "steps.initialize_loop_state",
              "values.current_msa_state",
              "values.current_pair_state"
            ]
          },
          {
            "id": "msa_pair_exchange",
            "label": "Exchange MSA and pair information",
            "description": "Outer-product mean moves alignment information into the pair state; pair-weighted averaging sends pair-defined token routing back into every MSA row.",
            "node_refs": [
              "steps.outer_product_mean",
              "values.outer_product_delta",
              "steps.add_outer_product_residual",
              "values.pair_after_outer_product",
              "steps.pair_weighted_average",
              "values.msa_attention_delta",
              "steps.add_msa_attention_residual",
              "values.msa_after_attention",
              "steps.msa_transition",
              "values.next_msa_state"
            ]
          },
          {
            "id": "pair_refinement",
            "label": "Refine pair geometry",
            "description": "Apply outgoing and incoming triangle multiplication, starting- and ending-node triangle attention, then the pointwise pair transition.",
            "node_refs": [
              "steps.triangle_multiplication_outgoing",
              "values.pair_after_outgoing",
              "steps.triangle_multiplication_incoming",
              "values.pair_after_incoming",
              "steps.triangle_attention_starting_node",
              "values.pair_after_starting_attention",
              "steps.triangle_attention_ending_node",
              "values.pair_after_ending_attention",
              "steps.pair_transition",
              "values.next_pair_state"
            ]
          },
          {
            "id": "module_output",
            "label": "Repeat ×4 and keep only pair",
            "description": "Advance the independently parameterized loop to four blocks, discard the final MSA representation, and expose the final pair representation.",
            "node_refs": [
              "steps.advance_four_block_loop",
              "values.final_msa_state",
              "values.final_pair_state",
              "steps.discard_msa_and_return_pair",
              "ports.updated_pair_state"
            ]
          }
        ]
      },
      "evidencePolicy": {
        "generic_definition": "This AF3-specific template follows Supplementary Algorithms 8–15 and the released MSAAttention and EvoformerIteration implementation; the template itself remains reusable vocabulary rather than a concrete architecture occurrence.",
        "usage_requires": [
          "Evidence for the four-block execution count, operation order, MSA sampling, channel widths, attention head configuration, mask behavior, and training-time dropout boundaries.",
          "Evidence that pair-weighted averaging projects attention weights only from the pair state, shares them across MSA rows, and uses MSA-derived values plus a query-side gate.",
          "Evidence that only the pair representation crosses the MSA-module output boundary while the final MSA representation is discarded."
        ]
      }
    }
  },
  "pseudocode": {
  },
  "boards": {
    "schemaVersion": "standard-block-browser-v0.1",
    "sourceYaml": "../../standard_blocks/af3-msa-module.yaml",
    "rootBoard": "standard_block_af3_msa_module",
    "items": [
      {
        "id": "standard_block_af3_msa_module",
        "kind": "standard_block_template",
        "title": "AlphaFold 3 MSA Module",
        "summary": "Embed a sampled MSA, exchange information between MSA rows and the pair representation through outer-product mean and pair-weighted averaging, refine the pair state with triangle operations, repeat the homogeneous block four times, then discard the MSA state and return only the pair state.",
        "notes": [
          "Four independently parameterized homogeneous blocks use outer-product mean for MSA-to-pair communication, pair-only attention weights for pair-to-MSA communication, and the AF2-style triangle pair stack before returning only the pair state.",
          "This AF3-specific template follows Supplementary Algorithms 8–15 and the released MSAAttention and EvoformerIteration implementation; the template itself remains reusable vocabulary rather than a concrete architecture occurrence."
        ],
        "subject_ref": "standard_blocks.af3_msa_module",
        "expansion_depth": 0,
        "grid": {
          "columns": 23,
          "rows": 7,
          "column_sizing": "content",
          "row_sizing": "content",
          "col_gap": 24,
          "row_gap": 34
        },
        "nodes": [
          {
            "id": "msa_features",
            "label": "raw MSA features",
            "role": "sampled alignment symbols plus deletion-presence and deletion-value features",
            "col": 1,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.ports.msa_features",
            "kind": "representation",
            "shape": "N_{msa} x N_{token} x C_{raw}",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "raw_feature",
                  "dimension": "C_{raw}"
                }
              ],
              "label": "N_{msa} x N_{token} x C_{raw}",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "f^{msa}",
            "port_ref": "ports.msa_features"
          },
          {
            "id": "input_single_state",
            "label": "input single features",
            "role": "token-wise input embedding broadcast into every sampled MSA row",
            "col": 1,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.ports.input_single_state",
            "kind": "representation",
            "shape": "N_{token} x C_s",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "single_channel",
                  "dimension": "C_s"
                }
              ],
              "label": "N_{token} x C_s",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "single",
            "flow_family": "single",
            "notation": "s^{input}",
            "port_ref": "ports.input_single_state"
          },
          {
            "id": "msa_mask",
            "label": "MSA validity mask",
            "role": "valid MSA rows and token columns used by sampling, outer-product mean, and pair-weighted averaging",
            "col": 1,
            "row": 3,
            "prominence": "context",
            "treatment": "chip",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.ports.msa_mask",
            "kind": "representation",
            "shape": "N_{msa} x N_{token}",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                }
              ],
              "label": "N_{msa} x N_{token}",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "m^{msa}",
            "port_ref": "ports.msa_mask"
          },
          {
            "id": "pair_state",
            "label": "incoming pair state",
            "role": "ordered token-pair state entering the four-block MSA module",
            "col": 1,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.ports.pair_state",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
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
            "id": "pair_mask",
            "label": "valid-pair mask",
            "role": "token-pair validity mask applied throughout the triangle and pair-transition stack",
            "col": 1,
            "row": 6,
            "prominence": "context",
            "treatment": "chip",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.ports.pair_mask",
            "kind": "representation",
            "shape": "N_{token} x N_{token}",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                }
              ],
              "label": "N_{token} x N_{token}",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "m^{pair}",
            "port_ref": "ports.pair_mask"
          },
          {
            "id": "sample_and_embed_msa",
            "label": "Sample and embed MSA rows",
            "role": "sample a fresh MSA subset for the recycling iteration, embed the concatenated MSA features, and broadcast-add the input single features",
            "col": 2,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.sample_and_embed_msa",
            "kind": "operation",
            "scale": "operation",
            "detail": "msa_sampling_and_embedding",
            "code": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)",
            "tex": "m^0_{si}=W_m Sample(f^{msa},m^{msa})_{si}+W_s s^{input}_i",
            "operation": "msa_sampling_and_embedding"
          },
          {
            "id": "initial_msa_state",
            "label": "embedded MSA state",
            "role": "64-channel MSA representation after row sampling, feature embedding, and broadcast input conditioning",
            "col": 3,
            "row": 1,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.initial_msa_state",
            "kind": "representation",
            "shape": "N_{msa} x N_{token} x C_m",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "msa_channel",
                  "dimension": "C_m"
                }
              ],
              "label": "N_{msa} x N_{token} x C_m",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "m^{0}"
          },
          {
            "id": "initialize_loop_state",
            "label": "Initialize four-block loop",
            "role": "expose distinct current states for one homogeneous block without encoding either update as a self-edge",
            "col": 4,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.initialize_loop_state",
            "kind": "operation",
            "scale": "operation",
            "detail": "loop_state_initialization",
            "code": "current_msa_state, current_pair_state = initial_msa_state, pair_state",
            "operation": "loop_state_initialization"
          },
          {
            "id": "current_msa_state",
            "label": "current block MSA state",
            "role": "loop-carried MSA state entering homogeneous block l",
            "col": 5,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.current_msa_state",
            "kind": "representation",
            "shape": "N_{msa} x N_{token} x C_m",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "msa_channel",
                  "dimension": "C_m"
                }
              ],
              "label": "N_{msa} x N_{token} x C_m",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "m^{l}"
          },
          {
            "id": "current_pair_state",
            "label": "current block pair state",
            "role": "loop-carried pair state entering homogeneous block l",
            "col": 5,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.current_pair_state",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{l}"
          },
          {
            "id": "outer_product_mean",
            "label": "Aggregate MSA into pair update",
            "role": "communicate alignment information into the pair representation by averaging projected outer products over sampled MSA rows",
            "col": 6,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.outer_product_mean",
            "kind": "operation",
            "scale": "operation",
            "detail": "outer_product_mean",
            "code": "outer_product_delta = outer_product_mean(current_msa_state, msa_mask)",
            "tex": "delta z^{opm}_{ij}=W_o Mean_s(a_{si} tensor_product b_{sj})",
            "operation": "outer_product_mean"
          },
          {
            "id": "outer_product_delta",
            "label": "MSA-derived pair update",
            "role": "outer-product mean projection averaged over sampled MSA rows",
            "col": 7,
            "row": 4,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.outer_product_delta",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "delta z^{opm}"
          },
          {
            "id": "add_outer_product_residual",
            "label": "Add MSA-derived pair update",
            "col": 8,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_outer_product_residual",
            "kind": "operation",
            "scale": "operation",
            "detail": "residual_add",
            "code": "pair_after_outer_product = current_pair_state + outer_product_delta",
            "tex": "z^{opm}=z^l+delta z^{opm}",
            "operation": "residual_add"
          },
          {
            "id": "pair_after_outer_product",
            "label": "pair after MSA aggregation",
            "role": "current pair state after the MSA-derived outer-product update",
            "col": 9,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.pair_after_outer_product",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{opm}"
          },
          {
            "id": "pair_weighted_average",
            "label": "Route each MSA row with pair weights",
            "role": "project one token-to-token weight matrix per head from the pair state, reuse it for every MSA row, gate the weighted values at each query token, and omit query-key content logits",
            "col": 10,
            "row": 2,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_weighted_average",
            "kind": "operation",
            "scale": "operation",
            "detail": "pair_weighted_averaging",
            "code": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))",
            "tex": "delta m^{pwa}_{si}=W_o concat_h(g^h_{si} elementwise_product sum_j softmax_j(W_b^h z^{opm}_{ij})v^h_{sj})",
            "operation": "pair_weighted_averaging"
          },
          {
            "id": "msa_attention_delta",
            "label": "pair-routed MSA update",
            "role": "gated weighted average of MSA values using attention weights projected only from the pair state",
            "col": 11,
            "row": 2,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.msa_attention_delta",
            "kind": "representation",
            "shape": "N_{msa} x N_{token} x C_m",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "msa_channel",
                  "dimension": "C_m"
                }
              ],
              "label": "N_{msa} x N_{token} x C_m",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "delta m^{pwa}"
          },
          {
            "id": "add_msa_attention_residual",
            "label": "Add pair-routed MSA update",
            "role": "apply the training-time row-wise dropout boundary and add the pair-routed update to the MSA state",
            "col": 12,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_msa_attention_residual",
            "kind": "operation",
            "scale": "operation",
            "detail": "rowwise_dropout_residual",
            "code": "msa_after_attention = current_msa_state + rowwise_dropout_0_15(msa_attention_delta)",
            "operation": "rowwise_dropout_residual"
          },
          {
            "id": "msa_after_attention",
            "label": "MSA after pair routing",
            "role": "MSA state after the row-wise dropout and residual addition",
            "col": 13,
            "row": 1,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.msa_after_attention",
            "kind": "representation",
            "shape": "N_{msa} x N_{token} x C_m",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "msa_channel",
                  "dimension": "C_m"
                }
              ],
              "label": "N_{msa} x N_{token} x C_m",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "m^{pwa}"
          },
          {
            "id": "msa_transition",
            "label": "Apply MSA SwiGLU transition",
            "role": "refine every MSA token independently before the state is carried to the next homogeneous block",
            "col": 14,
            "row": 1,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.msa_transition",
            "kind": "operation",
            "scale": "operation",
            "detail": "swiglu_transition_residual",
            "code": "next_msa_state = msa_after_attention + swiglu_transition(msa_after_attention)",
            "operation": "swiglu_transition_residual"
          },
          {
            "id": "next_msa_state",
            "label": "next block MSA state",
            "role": "loop-carried MSA state after the SwiGLU transition residual",
            "col": 15,
            "row": 1,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.next_msa_state",
            "kind": "representation",
            "shape": "N_{msa} x N_{token} x C_m",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "msa_channel",
                  "dimension": "C_m"
                }
              ],
              "label": "N_{msa} x N_{token} x C_m",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "m^{l+1}"
          },
          {
            "id": "triangle_multiplication_outgoing",
            "label": "Triangle multiplication, outgoing",
            "col": 10,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_outgoing",
            "kind": "operation",
            "scale": "operation",
            "detail": "triangle_multiplication_outgoing",
            "code": "pair_after_outgoing = pair_after_outer_product + rowwise_dropout_0_25(triangle_multiplication_outgoing(pair_after_outer_product, pair_mask))",
            "operation": "triangle_multiplication_outgoing"
          },
          {
            "id": "pair_after_outgoing",
            "label": "pair after outgoing update",
            "col": 11,
            "row": 5,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.pair_after_outgoing",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{out_tri}"
          },
          {
            "id": "triangle_multiplication_incoming",
            "label": "Triangle multiplication, incoming",
            "col": 12,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_incoming",
            "kind": "operation",
            "scale": "operation",
            "detail": "triangle_multiplication_incoming",
            "code": "pair_after_incoming = pair_after_outgoing + rowwise_dropout_0_25(triangle_multiplication_incoming(pair_after_outgoing, pair_mask))",
            "operation": "triangle_multiplication_incoming"
          },
          {
            "id": "pair_after_incoming",
            "label": "pair after incoming update",
            "col": 13,
            "row": 5,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.pair_after_incoming",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{in_tri}"
          },
          {
            "id": "triangle_attention_starting_node",
            "label": "Triangle attention, starting node",
            "col": 14,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_starting_node",
            "kind": "operation",
            "scale": "operation",
            "detail": "triangle_attention_starting_node",
            "code": "pair_after_starting_attention = pair_after_incoming + rowwise_dropout_0_25(triangle_attention_starting_node(pair_after_incoming, pair_mask))",
            "operation": "triangle_attention_starting_node"
          },
          {
            "id": "pair_after_starting_attention",
            "label": "pair after starting-node attention",
            "col": 15,
            "row": 5,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.pair_after_starting_attention",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{start}"
          },
          {
            "id": "triangle_attention_ending_node",
            "label": "Triangle attention, ending node",
            "col": 16,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_ending_node",
            "kind": "operation",
            "scale": "operation",
            "detail": "triangle_attention_ending_node",
            "code": "pair_after_ending_attention = pair_after_starting_attention + columnwise_dropout_0_25(triangle_attention_ending_node(pair_after_starting_attention, pair_mask))",
            "operation": "triangle_attention_ending_node"
          },
          {
            "id": "pair_after_ending_attention",
            "label": "pair after ending-node attention",
            "col": 17,
            "row": 5,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.pair_after_ending_attention",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{end}"
          },
          {
            "id": "pair_transition",
            "label": "Apply pair SwiGLU transition",
            "role": "apply the pointwise pair transition and carry the result to the next homogeneous block",
            "col": 18,
            "row": 5,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_transition",
            "kind": "operation",
            "scale": "operation",
            "detail": "swiglu_pair_transition_residual",
            "code": "next_pair_state = pair_after_ending_attention + swiglu_pair_transition(pair_after_ending_attention, pair_mask)",
            "operation": "swiglu_pair_transition_residual"
          },
          {
            "id": "next_pair_state",
            "label": "next block pair state",
            "role": "loop-carried pair state after the pointwise pair transition",
            "col": 19,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.next_pair_state",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{l+1}"
          },
          {
            "id": "advance_four_block_loop",
            "label": "Advance until block 4",
            "role": "feed the distinct next states into the next independently parameterized block until four total blocks have run",
            "col": 20,
            "row": 3,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.advance_four_block_loop",
            "kind": "operation",
            "scale": "operation",
            "detail": "fixed_depth_loop",
            "code": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)",
            "operation": "fixed_depth_loop"
          },
          {
            "id": "final_msa_state",
            "label": "final MSA state",
            "role": "fourth-block MSA result, intentionally discarded at the module boundary",
            "col": 21,
            "row": 1,
            "prominence": "context",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.final_msa_state",
            "kind": "representation",
            "shape": "N_{msa} x N_{token} x C_m",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "msa_sequence",
                  "dimension": "N_{msa}"
                },
                {
                  "id": "token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "msa_channel",
                  "dimension": "C_m"
                }
              ],
              "label": "N_{msa} x N_{token} x C_m",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "matrix",
            "notation": "m^{4}"
          },
          {
            "id": "final_pair_state",
            "label": "final pair state",
            "role": "fourth-block pair result returned by the module",
            "col": 21,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.values.final_pair_state",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{4}"
          },
          {
            "id": "discard_msa_and_return_pair",
            "label": "Discard MSA and return pair",
            "role": "terminate the MSA track at this boundary and expose only the pair state to the downstream Pairformer",
            "col": 22,
            "row": 4,
            "prominence": "primary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.discard_msa_and_return_pair",
            "kind": "operation",
            "scale": "operation",
            "detail": "boundary_projection",
            "code": "updated_pair_state = return_pair_and_discard_msa(final_pair_state, final_msa_state)",
            "operation": "boundary_projection"
          },
          {
            "id": "updated_pair_state",
            "label": "updated pair state",
            "role": "pair state returned to the downstream Pairformer after the MSA state is discarded",
            "col": 23,
            "row": 5,
            "prominence": "secondary",
            "treatment": "compact",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.ports.updated_pair_state",
            "kind": "representation",
            "shape": "N_{token} x N_{token} x C_z",
            "resolved_shape": {
              "kind": "tensor",
              "axes": [
                {
                  "id": "query_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "key_token",
                  "dimension": "N_{token}"
                },
                {
                  "id": "pair_channel",
                  "dimension": "C_z"
                }
              ],
              "label": "N_{token} x N_{token} x C_z",
              "_template_symbolic": true
            },
            "shape_status": "symbolic",
            "scale": "item",
            "glyph": "pair",
            "flow_family": "pair",
            "notation": "z^{out}",
            "port_ref": "ports.updated_pair_state"
          }
        ],
        "edges": [
          {
            "id": "template_af3_msa_module__sample_and_embed_msa__input_1",
            "from": "msa_features",
            "to": "sample_and_embed_msa",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.sample_and_embed_msa",
            "template_data_ref": "ports.msa_features",
            "connection": {
              "title": "Sample and embed MSA rows",
              "role": "reusable step input",
              "inside": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)"
            }
          },
          {
            "id": "template_af3_msa_module__sample_and_embed_msa__input_2",
            "from": "input_single_state",
            "to": "sample_and_embed_msa",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.sample_and_embed_msa",
            "template_data_ref": "ports.input_single_state",
            "connection": {
              "title": "Sample and embed MSA rows",
              "role": "reusable step input",
              "inside": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)"
            }
          },
          {
            "id": "template_af3_msa_module__sample_and_embed_msa__input_3",
            "from": "msa_mask",
            "to": "sample_and_embed_msa",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.sample_and_embed_msa",
            "template_data_ref": "ports.msa_mask",
            "connection": {
              "title": "Sample and embed MSA rows",
              "role": "reusable step input",
              "inside": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)"
            }
          },
          {
            "id": "template_af3_msa_module__sample_and_embed_msa__output_1",
            "from": "sample_and_embed_msa",
            "to": "initial_msa_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.sample_and_embed_msa",
            "template_data_ref": "values.initial_msa_state",
            "connection": {
              "title": "Sample and embed MSA rows",
              "role": "reusable step output",
              "inside": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)"
            }
          },
          {
            "id": "template_af3_msa_module__initialize_loop_state__input_1",
            "from": "initial_msa_state",
            "to": "initialize_loop_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.initialize_loop_state",
            "template_data_ref": "values.initial_msa_state",
            "connection": {
              "title": "Initialize four-block loop",
              "role": "reusable step input",
              "inside": "current_msa_state, current_pair_state = initial_msa_state, pair_state"
            }
          },
          {
            "id": "template_af3_msa_module__initialize_loop_state__input_2",
            "from": "pair_state",
            "to": "initialize_loop_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.initialize_loop_state",
            "template_data_ref": "ports.pair_state",
            "connection": {
              "title": "Initialize four-block loop",
              "role": "reusable step input",
              "inside": "current_msa_state, current_pair_state = initial_msa_state, pair_state"
            }
          },
          {
            "id": "template_af3_msa_module__initialize_loop_state__output_1",
            "from": "initialize_loop_state",
            "to": "current_msa_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.initialize_loop_state",
            "template_data_ref": "values.current_msa_state",
            "connection": {
              "title": "Initialize four-block loop",
              "role": "reusable step output",
              "inside": "current_msa_state, current_pair_state = initial_msa_state, pair_state"
            }
          },
          {
            "id": "template_af3_msa_module__initialize_loop_state__output_2",
            "from": "initialize_loop_state",
            "to": "current_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.initialize_loop_state",
            "template_data_ref": "values.current_pair_state",
            "connection": {
              "title": "Initialize four-block loop",
              "role": "reusable step output",
              "inside": "current_msa_state, current_pair_state = initial_msa_state, pair_state"
            }
          },
          {
            "id": "template_af3_msa_module__outer_product_mean__input_1",
            "from": "current_msa_state",
            "to": "outer_product_mean",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.outer_product_mean",
            "template_data_ref": "values.current_msa_state",
            "connection": {
              "title": "Aggregate MSA into pair update",
              "role": "reusable step input",
              "inside": "outer_product_delta = outer_product_mean(current_msa_state, msa_mask)"
            }
          },
          {
            "id": "template_af3_msa_module__outer_product_mean__input_2",
            "from": "msa_mask",
            "to": "outer_product_mean",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.outer_product_mean",
            "template_data_ref": "ports.msa_mask",
            "connection": {
              "title": "Aggregate MSA into pair update",
              "role": "reusable step input",
              "inside": "outer_product_delta = outer_product_mean(current_msa_state, msa_mask)"
            }
          },
          {
            "id": "template_af3_msa_module__outer_product_mean__output_1",
            "from": "outer_product_mean",
            "to": "outer_product_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.outer_product_mean",
            "template_data_ref": "values.outer_product_delta",
            "connection": {
              "title": "Aggregate MSA into pair update",
              "role": "reusable step output",
              "inside": "outer_product_delta = outer_product_mean(current_msa_state, msa_mask)"
            }
          },
          {
            "id": "template_af3_msa_module__add_outer_product_residual__input_1",
            "from": "current_pair_state",
            "to": "add_outer_product_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_outer_product_residual",
            "template_data_ref": "values.current_pair_state",
            "connection": {
              "title": "Add MSA-derived pair update",
              "role": "reusable step input",
              "inside": "pair_after_outer_product = current_pair_state + outer_product_delta"
            }
          },
          {
            "id": "template_af3_msa_module__add_outer_product_residual__input_2",
            "from": "outer_product_delta",
            "to": "add_outer_product_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_outer_product_residual",
            "template_data_ref": "values.outer_product_delta",
            "connection": {
              "title": "Add MSA-derived pair update",
              "role": "reusable step input",
              "inside": "pair_after_outer_product = current_pair_state + outer_product_delta"
            }
          },
          {
            "id": "template_af3_msa_module__add_outer_product_residual__output_1",
            "from": "add_outer_product_residual",
            "to": "pair_after_outer_product",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_outer_product_residual",
            "template_data_ref": "values.pair_after_outer_product",
            "connection": {
              "title": "Add MSA-derived pair update",
              "role": "reusable step output",
              "inside": "pair_after_outer_product = current_pair_state + outer_product_delta"
            }
          },
          {
            "id": "template_af3_msa_module__pair_weighted_average__input_1",
            "from": "current_msa_state",
            "to": "pair_weighted_average",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_weighted_average",
            "template_data_ref": "values.current_msa_state",
            "connection": {
              "title": "Route each MSA row with pair weights",
              "role": "reusable step input",
              "inside": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))"
            }
          },
          {
            "id": "template_af3_msa_module__pair_weighted_average__input_2",
            "from": "pair_after_outer_product",
            "to": "pair_weighted_average",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_weighted_average",
            "template_data_ref": "values.pair_after_outer_product",
            "connection": {
              "title": "Route each MSA row with pair weights",
              "role": "reusable step input",
              "inside": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))"
            }
          },
          {
            "id": "template_af3_msa_module__pair_weighted_average__input_3",
            "from": "msa_mask",
            "to": "pair_weighted_average",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_weighted_average",
            "template_data_ref": "ports.msa_mask",
            "connection": {
              "title": "Route each MSA row with pair weights",
              "role": "reusable step input",
              "inside": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))"
            }
          },
          {
            "id": "template_af3_msa_module__pair_weighted_average__output_1",
            "from": "pair_weighted_average",
            "to": "msa_attention_delta",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_weighted_average",
            "template_data_ref": "values.msa_attention_delta",
            "connection": {
              "title": "Route each MSA row with pair weights",
              "role": "reusable step output",
              "inside": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))"
            }
          },
          {
            "id": "template_af3_msa_module__add_msa_attention_residual__input_1",
            "from": "current_msa_state",
            "to": "add_msa_attention_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_msa_attention_residual",
            "template_data_ref": "values.current_msa_state",
            "connection": {
              "title": "Add pair-routed MSA update",
              "role": "reusable step input",
              "inside": "msa_after_attention = current_msa_state + rowwise_dropout_0_15(msa_attention_delta)"
            }
          },
          {
            "id": "template_af3_msa_module__add_msa_attention_residual__input_2",
            "from": "msa_attention_delta",
            "to": "add_msa_attention_residual",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_msa_attention_residual",
            "template_data_ref": "values.msa_attention_delta",
            "connection": {
              "title": "Add pair-routed MSA update",
              "role": "reusable step input",
              "inside": "msa_after_attention = current_msa_state + rowwise_dropout_0_15(msa_attention_delta)"
            }
          },
          {
            "id": "template_af3_msa_module__add_msa_attention_residual__output_1",
            "from": "add_msa_attention_residual",
            "to": "msa_after_attention",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.add_msa_attention_residual",
            "template_data_ref": "values.msa_after_attention",
            "connection": {
              "title": "Add pair-routed MSA update",
              "role": "reusable step output",
              "inside": "msa_after_attention = current_msa_state + rowwise_dropout_0_15(msa_attention_delta)"
            }
          },
          {
            "id": "template_af3_msa_module__msa_transition__input_1",
            "from": "msa_after_attention",
            "to": "msa_transition",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.msa_transition",
            "template_data_ref": "values.msa_after_attention",
            "connection": {
              "title": "Apply MSA SwiGLU transition",
              "role": "reusable step input",
              "inside": "next_msa_state = msa_after_attention + swiglu_transition(msa_after_attention)"
            }
          },
          {
            "id": "template_af3_msa_module__msa_transition__output_1",
            "from": "msa_transition",
            "to": "next_msa_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.msa_transition",
            "template_data_ref": "values.next_msa_state",
            "connection": {
              "title": "Apply MSA SwiGLU transition",
              "role": "reusable step output",
              "inside": "next_msa_state = msa_after_attention + swiglu_transition(msa_after_attention)"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_multiplication_outgoing__input_1",
            "from": "pair_after_outer_product",
            "to": "triangle_multiplication_outgoing",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_outgoing",
            "template_data_ref": "values.pair_after_outer_product",
            "connection": {
              "title": "Triangle multiplication, outgoing",
              "role": "reusable step input",
              "inside": "pair_after_outgoing = pair_after_outer_product + rowwise_dropout_0_25(triangle_multiplication_outgoing(pair_after_outer_product, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_multiplication_outgoing__input_2",
            "from": "pair_mask",
            "to": "triangle_multiplication_outgoing",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_outgoing",
            "template_data_ref": "ports.pair_mask",
            "connection": {
              "title": "Triangle multiplication, outgoing",
              "role": "reusable step input",
              "inside": "pair_after_outgoing = pair_after_outer_product + rowwise_dropout_0_25(triangle_multiplication_outgoing(pair_after_outer_product, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_multiplication_outgoing__output_1",
            "from": "triangle_multiplication_outgoing",
            "to": "pair_after_outgoing",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_outgoing",
            "template_data_ref": "values.pair_after_outgoing",
            "connection": {
              "title": "Triangle multiplication, outgoing",
              "role": "reusable step output",
              "inside": "pair_after_outgoing = pair_after_outer_product + rowwise_dropout_0_25(triangle_multiplication_outgoing(pair_after_outer_product, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_multiplication_incoming__input_1",
            "from": "pair_after_outgoing",
            "to": "triangle_multiplication_incoming",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_incoming",
            "template_data_ref": "values.pair_after_outgoing",
            "connection": {
              "title": "Triangle multiplication, incoming",
              "role": "reusable step input",
              "inside": "pair_after_incoming = pair_after_outgoing + rowwise_dropout_0_25(triangle_multiplication_incoming(pair_after_outgoing, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_multiplication_incoming__input_2",
            "from": "pair_mask",
            "to": "triangle_multiplication_incoming",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_incoming",
            "template_data_ref": "ports.pair_mask",
            "connection": {
              "title": "Triangle multiplication, incoming",
              "role": "reusable step input",
              "inside": "pair_after_incoming = pair_after_outgoing + rowwise_dropout_0_25(triangle_multiplication_incoming(pair_after_outgoing, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_multiplication_incoming__output_1",
            "from": "triangle_multiplication_incoming",
            "to": "pair_after_incoming",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_multiplication_incoming",
            "template_data_ref": "values.pair_after_incoming",
            "connection": {
              "title": "Triangle multiplication, incoming",
              "role": "reusable step output",
              "inside": "pair_after_incoming = pair_after_outgoing + rowwise_dropout_0_25(triangle_multiplication_incoming(pair_after_outgoing, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_attention_starting_node__input_1",
            "from": "pair_after_incoming",
            "to": "triangle_attention_starting_node",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_starting_node",
            "template_data_ref": "values.pair_after_incoming",
            "connection": {
              "title": "Triangle attention, starting node",
              "role": "reusable step input",
              "inside": "pair_after_starting_attention = pair_after_incoming + rowwise_dropout_0_25(triangle_attention_starting_node(pair_after_incoming, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_attention_starting_node__input_2",
            "from": "pair_mask",
            "to": "triangle_attention_starting_node",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_starting_node",
            "template_data_ref": "ports.pair_mask",
            "connection": {
              "title": "Triangle attention, starting node",
              "role": "reusable step input",
              "inside": "pair_after_starting_attention = pair_after_incoming + rowwise_dropout_0_25(triangle_attention_starting_node(pair_after_incoming, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_attention_starting_node__output_1",
            "from": "triangle_attention_starting_node",
            "to": "pair_after_starting_attention",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_starting_node",
            "template_data_ref": "values.pair_after_starting_attention",
            "connection": {
              "title": "Triangle attention, starting node",
              "role": "reusable step output",
              "inside": "pair_after_starting_attention = pair_after_incoming + rowwise_dropout_0_25(triangle_attention_starting_node(pair_after_incoming, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_attention_ending_node__input_1",
            "from": "pair_after_starting_attention",
            "to": "triangle_attention_ending_node",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_ending_node",
            "template_data_ref": "values.pair_after_starting_attention",
            "connection": {
              "title": "Triangle attention, ending node",
              "role": "reusable step input",
              "inside": "pair_after_ending_attention = pair_after_starting_attention + columnwise_dropout_0_25(triangle_attention_ending_node(pair_after_starting_attention, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_attention_ending_node__input_2",
            "from": "pair_mask",
            "to": "triangle_attention_ending_node",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_ending_node",
            "template_data_ref": "ports.pair_mask",
            "connection": {
              "title": "Triangle attention, ending node",
              "role": "reusable step input",
              "inside": "pair_after_ending_attention = pair_after_starting_attention + columnwise_dropout_0_25(triangle_attention_ending_node(pair_after_starting_attention, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__triangle_attention_ending_node__output_1",
            "from": "triangle_attention_ending_node",
            "to": "pair_after_ending_attention",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.triangle_attention_ending_node",
            "template_data_ref": "values.pair_after_ending_attention",
            "connection": {
              "title": "Triangle attention, ending node",
              "role": "reusable step output",
              "inside": "pair_after_ending_attention = pair_after_starting_attention + columnwise_dropout_0_25(triangle_attention_ending_node(pair_after_starting_attention, pair_mask))"
            }
          },
          {
            "id": "template_af3_msa_module__pair_transition__input_1",
            "from": "pair_after_ending_attention",
            "to": "pair_transition",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_transition",
            "template_data_ref": "values.pair_after_ending_attention",
            "connection": {
              "title": "Apply pair SwiGLU transition",
              "role": "reusable step input",
              "inside": "next_pair_state = pair_after_ending_attention + swiglu_pair_transition(pair_after_ending_attention, pair_mask)"
            }
          },
          {
            "id": "template_af3_msa_module__pair_transition__input_2",
            "from": "pair_mask",
            "to": "pair_transition",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_transition",
            "template_data_ref": "ports.pair_mask",
            "connection": {
              "title": "Apply pair SwiGLU transition",
              "role": "reusable step input",
              "inside": "next_pair_state = pair_after_ending_attention + swiglu_pair_transition(pair_after_ending_attention, pair_mask)"
            }
          },
          {
            "id": "template_af3_msa_module__pair_transition__output_1",
            "from": "pair_transition",
            "to": "next_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.pair_transition",
            "template_data_ref": "values.next_pair_state",
            "connection": {
              "title": "Apply pair SwiGLU transition",
              "role": "reusable step output",
              "inside": "next_pair_state = pair_after_ending_attention + swiglu_pair_transition(pair_after_ending_attention, pair_mask)"
            }
          },
          {
            "id": "template_af3_msa_module__advance_four_block_loop__input_1",
            "from": "next_msa_state",
            "to": "advance_four_block_loop",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.advance_four_block_loop",
            "template_data_ref": "values.next_msa_state",
            "connection": {
              "title": "Advance until block 4",
              "role": "reusable step input",
              "inside": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)"
            }
          },
          {
            "id": "template_af3_msa_module__advance_four_block_loop__input_2",
            "from": "next_pair_state",
            "to": "advance_four_block_loop",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.advance_four_block_loop",
            "template_data_ref": "values.next_pair_state",
            "connection": {
              "title": "Advance until block 4",
              "role": "reusable step input",
              "inside": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)"
            }
          },
          {
            "id": "template_af3_msa_module__advance_four_block_loop__output_1",
            "from": "advance_four_block_loop",
            "to": "final_msa_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.advance_four_block_loop",
            "template_data_ref": "values.final_msa_state",
            "connection": {
              "title": "Advance until block 4",
              "role": "reusable step output",
              "inside": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)"
            }
          },
          {
            "id": "template_af3_msa_module__advance_four_block_loop__output_2",
            "from": "advance_four_block_loop",
            "to": "final_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.advance_four_block_loop",
            "template_data_ref": "values.final_pair_state",
            "connection": {
              "title": "Advance until block 4",
              "role": "reusable step output",
              "inside": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)"
            }
          },
          {
            "id": "template_af3_msa_module__discard_msa_and_return_pair__input_1",
            "from": "final_msa_state",
            "to": "discard_msa_and_return_pair",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.discard_msa_and_return_pair",
            "template_data_ref": "values.final_msa_state",
            "connection": {
              "title": "Discard MSA and return pair",
              "role": "reusable step input",
              "inside": "updated_pair_state = return_pair_and_discard_msa(final_pair_state, final_msa_state)"
            }
          },
          {
            "id": "template_af3_msa_module__discard_msa_and_return_pair__input_2",
            "from": "final_pair_state",
            "to": "discard_msa_and_return_pair",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.discard_msa_and_return_pair",
            "template_data_ref": "values.final_pair_state",
            "connection": {
              "title": "Discard MSA and return pair",
              "role": "reusable step input",
              "inside": "updated_pair_state = return_pair_and_discard_msa(final_pair_state, final_msa_state)"
            }
          },
          {
            "id": "template_af3_msa_module__discard_msa_and_return_pair__output_1",
            "from": "discard_msa_and_return_pair",
            "to": "updated_pair_state",
            "kind": "data_flow",
            "carries": [

            ],
            "grounding": "standard_block_template",
            "standard_block_ref": "standard_blocks/af3-msa-module.yaml",
            "standard_block_id": "af3_msa_module",
            "template_fact_ref": "standard_blocks.af3_msa_module.steps.discard_msa_and_return_pair",
            "template_data_ref": "ports.updated_pair_state",
            "connection": {
              "title": "Discard MSA and return pair",
              "role": "reusable step output",
              "inside": "updated_pair_state = return_pair_and_discard_msa(final_pair_state, final_msa_state)"
            }
          }
        ],
        "segments": [
          {
            "id": "module_inputs",
            "label": "Build initial states",
            "description": "Sample and embed the MSA, broadcast the input single features, and initialize distinct loop-carried MSA and pair states.",
            "order": 1,
            "node_ids": [
              "msa_features",
              "input_single_state",
              "msa_mask",
              "pair_state",
              "pair_mask",
              "sample_and_embed_msa",
              "initial_msa_state",
              "initialize_loop_state",
              "current_msa_state",
              "current_pair_state"
            ]
          },
          {
            "id": "msa_pair_exchange",
            "label": "Exchange MSA and pair information",
            "description": "Outer-product mean moves alignment information into the pair state; pair-weighted averaging sends pair-defined token routing back into every MSA row.",
            "order": 2,
            "node_ids": [
              "outer_product_mean",
              "outer_product_delta",
              "add_outer_product_residual",
              "pair_after_outer_product",
              "pair_weighted_average",
              "msa_attention_delta",
              "add_msa_attention_residual",
              "msa_after_attention",
              "msa_transition",
              "next_msa_state"
            ]
          },
          {
            "id": "pair_refinement",
            "label": "Refine pair geometry",
            "description": "Apply outgoing and incoming triangle multiplication, starting- and ending-node triangle attention, then the pointwise pair transition.",
            "order": 3,
            "node_ids": [
              "triangle_multiplication_outgoing",
              "pair_after_outgoing",
              "triangle_multiplication_incoming",
              "pair_after_incoming",
              "triangle_attention_starting_node",
              "pair_after_starting_attention",
              "triangle_attention_ending_node",
              "pair_after_ending_attention",
              "pair_transition",
              "next_pair_state"
            ]
          },
          {
            "id": "module_output",
            "label": "Repeat ×4 and keep only pair",
            "description": "Advance the independently parameterized loop to four blocks, discard the final MSA representation, and expose the final pair representation.",
            "order": 4,
            "node_ids": [
              "advance_four_block_loop",
              "final_msa_state",
              "final_pair_state",
              "discard_msa_and_return_pair",
              "updated_pair_state"
            ]
          }
        ],
        "projectionMode": "standard_block_template",
        "standardBlockRef": "standard_blocks/af3-msa-module.yaml",
        "standardBlockId": "af3_msa_module",
        "variant": "af3_four_block_pair_weighted",
        "variantLabel": "AF3 four-block MSA module",
        "pseudocode": [
          {
            "id": "sample_and_embed_msa",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.sample_and_embed_msa",
            "label": "Sample and embed MSA rows",
            "operation": "msa_sampling_and_embedding",
            "code": "initial_msa_state = embed(sample_rows(msa_features, msa_mask)) + project(input_single_state)",
            "tex": "m^0_{si}=W_m Sample(f^{msa},m^{msa})_{si}+W_s s^{input}_i",
            "inputs": [
              "ports.msa_features",
              "ports.input_single_state",
              "ports.msa_mask"
            ],
            "outputs": [
              "values.initial_msa_state"
            ],
            "codeBindings": [
              {
                "lexeme": "msa_features",
                "access": "read",
                "localRef": "ports.msa_features",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.msa_features",
                "occurrences": [
                  {
                    "start": 38,
                    "end": 50
                  }
                ]
              },
              {
                "lexeme": "input_single_state",
                "access": "read",
                "localRef": "ports.input_single_state",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.input_single_state",
                "occurrences": [
                  {
                    "start": 73,
                    "end": 91
                  }
                ]
              },
              {
                "lexeme": "msa_mask",
                "access": "read",
                "localRef": "ports.msa_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.msa_mask",
                "occurrences": [
                  {
                    "start": 52,
                    "end": 60
                  }
                ]
              },
              {
                "lexeme": "initial_msa_state",
                "access": "write",
                "localRef": "values.initial_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.initial_msa_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 17
                  }
                ]
              }
            ]
          },
          {
            "id": "initialize_loop_state",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.initialize_loop_state",
            "label": "Initialize four-block loop",
            "operation": "loop_state_initialization",
            "code": "current_msa_state, current_pair_state = initial_msa_state, pair_state",
            "inputs": [
              "values.initial_msa_state",
              "ports.pair_state"
            ],
            "outputs": [
              "values.current_msa_state",
              "values.current_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "initial_msa_state",
                "access": "read",
                "localRef": "values.initial_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.initial_msa_state",
                "occurrences": [
                  {
                    "start": 40,
                    "end": 57
                  }
                ]
              },
              {
                "lexeme": "pair_state",
                "access": "read",
                "localRef": "ports.pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.pair_state",
                "occurrences": [
                  {
                    "start": 59,
                    "end": 69
                  }
                ]
              },
              {
                "lexeme": "current_msa_state",
                "access": "write",
                "localRef": "values.current_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.current_msa_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 17
                  }
                ]
              },
              {
                "lexeme": "current_pair_state",
                "access": "write",
                "localRef": "values.current_pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.current_pair_state",
                "occurrences": [
                  {
                    "start": 19,
                    "end": 37
                  }
                ]
              }
            ]
          },
          {
            "id": "outer_product_mean",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.outer_product_mean",
            "label": "Aggregate MSA into pair update",
            "operation": "outer_product_mean",
            "code": "outer_product_delta = outer_product_mean(current_msa_state, msa_mask)",
            "tex": "delta z^{opm}_{ij}=W_o Mean_s(a_{si} tensor_product b_{sj})",
            "inputs": [
              "values.current_msa_state",
              "ports.msa_mask"
            ],
            "outputs": [
              "values.outer_product_delta"
            ],
            "codeBindings": [
              {
                "lexeme": "current_msa_state",
                "access": "read",
                "localRef": "values.current_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.current_msa_state",
                "occurrences": [
                  {
                    "start": 41,
                    "end": 58
                  }
                ]
              },
              {
                "lexeme": "msa_mask",
                "access": "read",
                "localRef": "ports.msa_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.msa_mask",
                "occurrences": [
                  {
                    "start": 60,
                    "end": 68
                  }
                ]
              },
              {
                "lexeme": "outer_product_delta",
                "access": "write",
                "localRef": "values.outer_product_delta",
                "templateFactRef": "standard_blocks.af3_msa_module.values.outer_product_delta",
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
            "id": "add_outer_product_residual",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.add_outer_product_residual",
            "label": "Add MSA-derived pair update",
            "operation": "residual_add",
            "code": "pair_after_outer_product = current_pair_state + outer_product_delta",
            "tex": "z^{opm}=z^l+delta z^{opm}",
            "inputs": [
              "values.current_pair_state",
              "values.outer_product_delta"
            ],
            "outputs": [
              "values.pair_after_outer_product"
            ],
            "codeBindings": [
              {
                "lexeme": "current_pair_state",
                "access": "read",
                "localRef": "values.current_pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.current_pair_state",
                "occurrences": [
                  {
                    "start": 27,
                    "end": 45
                  }
                ]
              },
              {
                "lexeme": "outer_product_delta",
                "access": "read",
                "localRef": "values.outer_product_delta",
                "templateFactRef": "standard_blocks.af3_msa_module.values.outer_product_delta",
                "occurrences": [
                  {
                    "start": 48,
                    "end": 67
                  }
                ]
              },
              {
                "lexeme": "pair_after_outer_product",
                "access": "write",
                "localRef": "values.pair_after_outer_product",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_outer_product",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 24
                  }
                ]
              }
            ]
          },
          {
            "id": "pair_weighted_average",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.pair_weighted_average",
            "label": "Route each MSA row with pair weights",
            "operation": "pair_weighted_averaging",
            "code": "msa_attention_delta = output_project(sigmoid(project_gate(layer_norm(current_msa_state))) * pair_weighted_sum(softmax(project_pair(layer_norm(pair_after_outer_product)) + mask_bias(msa_mask)), project_value(layer_norm(current_msa_state))))",
            "tex": "delta m^{pwa}_{si}=W_o concat_h(g^h_{si} elementwise_product sum_j softmax_j(W_b^h z^{opm}_{ij})v^h_{sj})",
            "inputs": [
              "values.current_msa_state",
              "values.pair_after_outer_product",
              "ports.msa_mask"
            ],
            "outputs": [
              "values.msa_attention_delta"
            ],
            "codeBindings": [
              {
                "lexeme": "current_msa_state",
                "access": "read",
                "localRef": "values.current_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.current_msa_state",
                "occurrences": [
                  {
                    "start": 69,
                    "end": 86
                  },
                  {
                    "start": 218,
                    "end": 235
                  }
                ]
              },
              {
                "lexeme": "pair_after_outer_product",
                "access": "read",
                "localRef": "values.pair_after_outer_product",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_outer_product",
                "occurrences": [
                  {
                    "start": 142,
                    "end": 166
                  }
                ]
              },
              {
                "lexeme": "msa_mask",
                "access": "read",
                "localRef": "ports.msa_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.msa_mask",
                "occurrences": [
                  {
                    "start": 181,
                    "end": 189
                  }
                ]
              },
              {
                "lexeme": "msa_attention_delta",
                "access": "write",
                "localRef": "values.msa_attention_delta",
                "templateFactRef": "standard_blocks.af3_msa_module.values.msa_attention_delta",
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
            "id": "add_msa_attention_residual",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.add_msa_attention_residual",
            "label": "Add pair-routed MSA update",
            "operation": "rowwise_dropout_residual",
            "code": "msa_after_attention = current_msa_state + rowwise_dropout_0_15(msa_attention_delta)",
            "inputs": [
              "values.current_msa_state",
              "values.msa_attention_delta"
            ],
            "outputs": [
              "values.msa_after_attention"
            ],
            "codeBindings": [
              {
                "lexeme": "current_msa_state",
                "access": "read",
                "localRef": "values.current_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.current_msa_state",
                "occurrences": [
                  {
                    "start": 22,
                    "end": 39
                  }
                ]
              },
              {
                "lexeme": "msa_attention_delta",
                "access": "read",
                "localRef": "values.msa_attention_delta",
                "templateFactRef": "standard_blocks.af3_msa_module.values.msa_attention_delta",
                "occurrences": [
                  {
                    "start": 63,
                    "end": 82
                  }
                ]
              },
              {
                "lexeme": "msa_after_attention",
                "access": "write",
                "localRef": "values.msa_after_attention",
                "templateFactRef": "standard_blocks.af3_msa_module.values.msa_after_attention",
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
            "id": "msa_transition",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.msa_transition",
            "label": "Apply MSA SwiGLU transition",
            "operation": "swiglu_transition_residual",
            "code": "next_msa_state = msa_after_attention + swiglu_transition(msa_after_attention)",
            "inputs": [
              "values.msa_after_attention"
            ],
            "outputs": [
              "values.next_msa_state"
            ],
            "codeBindings": [
              {
                "lexeme": "msa_after_attention",
                "access": "read",
                "localRef": "values.msa_after_attention",
                "templateFactRef": "standard_blocks.af3_msa_module.values.msa_after_attention",
                "occurrences": [
                  {
                    "start": 17,
                    "end": 36
                  },
                  {
                    "start": 57,
                    "end": 76
                  }
                ]
              },
              {
                "lexeme": "next_msa_state",
                "access": "write",
                "localRef": "values.next_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.next_msa_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 14
                  }
                ]
              }
            ]
          },
          {
            "id": "triangle_multiplication_outgoing",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.triangle_multiplication_outgoing",
            "label": "Triangle multiplication, outgoing",
            "operation": "triangle_multiplication_outgoing",
            "code": "pair_after_outgoing = pair_after_outer_product + rowwise_dropout_0_25(triangle_multiplication_outgoing(pair_after_outer_product, pair_mask))",
            "inputs": [
              "values.pair_after_outer_product",
              "ports.pair_mask"
            ],
            "outputs": [
              "values.pair_after_outgoing"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_after_outer_product",
                "access": "read",
                "localRef": "values.pair_after_outer_product",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_outer_product",
                "occurrences": [
                  {
                    "start": 22,
                    "end": 46
                  },
                  {
                    "start": 103,
                    "end": 127
                  }
                ]
              },
              {
                "lexeme": "pair_mask",
                "access": "read",
                "localRef": "ports.pair_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.pair_mask",
                "occurrences": [
                  {
                    "start": 129,
                    "end": 138
                  }
                ]
              },
              {
                "lexeme": "pair_after_outgoing",
                "access": "write",
                "localRef": "values.pair_after_outgoing",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_outgoing",
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
            "id": "triangle_multiplication_incoming",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.triangle_multiplication_incoming",
            "label": "Triangle multiplication, incoming",
            "operation": "triangle_multiplication_incoming",
            "code": "pair_after_incoming = pair_after_outgoing + rowwise_dropout_0_25(triangle_multiplication_incoming(pair_after_outgoing, pair_mask))",
            "inputs": [
              "values.pair_after_outgoing",
              "ports.pair_mask"
            ],
            "outputs": [
              "values.pair_after_incoming"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_after_outgoing",
                "access": "read",
                "localRef": "values.pair_after_outgoing",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_outgoing",
                "occurrences": [
                  {
                    "start": 22,
                    "end": 41
                  },
                  {
                    "start": 98,
                    "end": 117
                  }
                ]
              },
              {
                "lexeme": "pair_mask",
                "access": "read",
                "localRef": "ports.pair_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.pair_mask",
                "occurrences": [
                  {
                    "start": 119,
                    "end": 128
                  }
                ]
              },
              {
                "lexeme": "pair_after_incoming",
                "access": "write",
                "localRef": "values.pair_after_incoming",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_incoming",
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
            "id": "triangle_attention_starting_node",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.triangle_attention_starting_node",
            "label": "Triangle attention, starting node",
            "operation": "triangle_attention_starting_node",
            "code": "pair_after_starting_attention = pair_after_incoming + rowwise_dropout_0_25(triangle_attention_starting_node(pair_after_incoming, pair_mask))",
            "inputs": [
              "values.pair_after_incoming",
              "ports.pair_mask"
            ],
            "outputs": [
              "values.pair_after_starting_attention"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_after_incoming",
                "access": "read",
                "localRef": "values.pair_after_incoming",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_incoming",
                "occurrences": [
                  {
                    "start": 32,
                    "end": 51
                  },
                  {
                    "start": 108,
                    "end": 127
                  }
                ]
              },
              {
                "lexeme": "pair_mask",
                "access": "read",
                "localRef": "ports.pair_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.pair_mask",
                "occurrences": [
                  {
                    "start": 129,
                    "end": 138
                  }
                ]
              },
              {
                "lexeme": "pair_after_starting_attention",
                "access": "write",
                "localRef": "values.pair_after_starting_attention",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_starting_attention",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 29
                  }
                ]
              }
            ]
          },
          {
            "id": "triangle_attention_ending_node",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.triangle_attention_ending_node",
            "label": "Triangle attention, ending node",
            "operation": "triangle_attention_ending_node",
            "code": "pair_after_ending_attention = pair_after_starting_attention + columnwise_dropout_0_25(triangle_attention_ending_node(pair_after_starting_attention, pair_mask))",
            "inputs": [
              "values.pair_after_starting_attention",
              "ports.pair_mask"
            ],
            "outputs": [
              "values.pair_after_ending_attention"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_after_starting_attention",
                "access": "read",
                "localRef": "values.pair_after_starting_attention",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_starting_attention",
                "occurrences": [
                  {
                    "start": 30,
                    "end": 59
                  },
                  {
                    "start": 117,
                    "end": 146
                  }
                ]
              },
              {
                "lexeme": "pair_mask",
                "access": "read",
                "localRef": "ports.pair_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.pair_mask",
                "occurrences": [
                  {
                    "start": 148,
                    "end": 157
                  }
                ]
              },
              {
                "lexeme": "pair_after_ending_attention",
                "access": "write",
                "localRef": "values.pair_after_ending_attention",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_ending_attention",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 27
                  }
                ]
              }
            ]
          },
          {
            "id": "pair_transition",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.pair_transition",
            "label": "Apply pair SwiGLU transition",
            "operation": "swiglu_pair_transition_residual",
            "code": "next_pair_state = pair_after_ending_attention + swiglu_pair_transition(pair_after_ending_attention, pair_mask)",
            "inputs": [
              "values.pair_after_ending_attention",
              "ports.pair_mask"
            ],
            "outputs": [
              "values.next_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "pair_after_ending_attention",
                "access": "read",
                "localRef": "values.pair_after_ending_attention",
                "templateFactRef": "standard_blocks.af3_msa_module.values.pair_after_ending_attention",
                "occurrences": [
                  {
                    "start": 18,
                    "end": 45
                  },
                  {
                    "start": 71,
                    "end": 98
                  }
                ]
              },
              {
                "lexeme": "pair_mask",
                "access": "read",
                "localRef": "ports.pair_mask",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.pair_mask",
                "occurrences": [
                  {
                    "start": 100,
                    "end": 109
                  }
                ]
              },
              {
                "lexeme": "next_pair_state",
                "access": "write",
                "localRef": "values.next_pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.next_pair_state",
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
            "id": "advance_four_block_loop",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.advance_four_block_loop",
            "label": "Advance until block 4",
            "operation": "fixed_depth_loop",
            "code": "final_msa_state, final_pair_state = advance_until_block_4(next_msa_state, next_pair_state)",
            "inputs": [
              "values.next_msa_state",
              "values.next_pair_state"
            ],
            "outputs": [
              "values.final_msa_state",
              "values.final_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "next_msa_state",
                "access": "read",
                "localRef": "values.next_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.next_msa_state",
                "occurrences": [
                  {
                    "start": 58,
                    "end": 72
                  }
                ]
              },
              {
                "lexeme": "next_pair_state",
                "access": "read",
                "localRef": "values.next_pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.next_pair_state",
                "occurrences": [
                  {
                    "start": 74,
                    "end": 89
                  }
                ]
              },
              {
                "lexeme": "final_msa_state",
                "access": "write",
                "localRef": "values.final_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.final_msa_state",
                "occurrences": [
                  {
                    "start": 0,
                    "end": 15
                  }
                ]
              },
              {
                "lexeme": "final_pair_state",
                "access": "write",
                "localRef": "values.final_pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.final_pair_state",
                "occurrences": [
                  {
                    "start": 17,
                    "end": 33
                  }
                ]
              }
            ]
          },
          {
            "id": "discard_msa_and_return_pair",
            "templateFactRef": "standard_blocks.af3_msa_module.steps.discard_msa_and_return_pair",
            "label": "Discard MSA and return pair",
            "operation": "boundary_projection",
            "code": "updated_pair_state = return_pair_and_discard_msa(final_pair_state, final_msa_state)",
            "inputs": [
              "values.final_msa_state",
              "values.final_pair_state"
            ],
            "outputs": [
              "ports.updated_pair_state"
            ],
            "codeBindings": [
              {
                "lexeme": "final_msa_state",
                "access": "read",
                "localRef": "values.final_msa_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.final_msa_state",
                "occurrences": [
                  {
                    "start": 67,
                    "end": 82
                  }
                ]
              },
              {
                "lexeme": "final_pair_state",
                "access": "read",
                "localRef": "values.final_pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.values.final_pair_state",
                "occurrences": [
                  {
                    "start": 49,
                    "end": 65
                  }
                ]
              },
              {
                "lexeme": "updated_pair_state",
                "access": "write",
                "localRef": "ports.updated_pair_state",
                "templateFactRef": "standard_blocks.af3_msa_module.ports.updated_pair_state",
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
