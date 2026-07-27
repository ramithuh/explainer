// Generated from visualizers/atom14/atom14.yaml. Do not edit by hand.
export const atom14Atlas = {
  "schema_version": "atom14-visualizer-v0.1",
  "id": "atom14",
  "title": "Atom14 atlas",
  "description": "A residue-by-residue reference for AlphaFold's compact 14-slot heavy-atom representation.",
  "source": {
    "label": "AlphaFold residue_constants.py",
    "revision": "c77e5d2a8961d1a353632c462914ff0a32a950f6",
    "locator": "restype_name_to_atom14_names",
    "url": "https://github.com/google-deepmind/alphafold/blob/c77e5d2a8961d1a353632c462914ff0a32a950f6/alphafold/common/residue_constants.py#L543-L568"
  },
  "notes": [
    "Slots 0 through 3 are the shared peptide-backbone atoms N, CA, C, and O.",
    "Side-chain atoms begin at slot 4; unused positions are padding and are masked out.",
    "Diagrams show heavy-atom connectivity, not hydrogens, protonation, formal charge, or resonance."
  ],
  "categories": [
    {
      "id": "basic",
      "label": "Basic",
      "description": "Positively charged or readily protonated side chains"
    },
    {
      "id": "acidic",
      "label": "Acidic",
      "description": "Negatively charged carboxylate side chains"
    },
    {
      "id": "polar",
      "label": "Polar",
      "description": "Polar, uncharged side chains"
    },
    {
      "id": "special",
      "label": "Special",
      "description": "Distinct backbone or side-chain geometry"
    },
    {
      "id": "hydrophobic",
      "label": "Hydrophobic",
      "description": "Nonpolar and aromatic side chains"
    }
  ],
  "common_layout": {
    "N": [
      12,
      20
    ],
    "CA": [
      30,
      30
    ],
    "C": [
      51,
      20
    ],
    "O": [
      68,
      8
    ],
    "CB": [
      30,
      51
    ]
  },
  "residues": [
    {
      "id": "ALA",
      "one_letter": "A",
      "name": "Alanine",
      "category": "hydrophobic",
      "summary": "A single methyl side-chain carbon; the smallest residue with a CB.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ]
      ]
    },
    {
      "id": "ARG",
      "one_letter": "R",
      "name": "Arginine",
      "category": "basic",
      "summary": "A three-carbon stem ending in a planar guanidinium group.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD",
        "NE",
        "CZ",
        "NH1",
        "NH2",
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          44,
          66
        ],
        "CD": [
          58,
          52
        ],
        "NE": [
          70,
          68
        ],
        "CZ": [
          82,
          54
        ],
        "NH1": [
          83,
          34
        ],
        "NH2": [
          94,
          69
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD"
        ],
        [
          "CD",
          "NE"
        ],
        [
          "NE",
          "CZ"
        ],
        [
          "CZ",
          "NH1"
        ],
        [
          "CZ",
          "NH2"
        ]
      ]
    },
    {
      "id": "ASN",
      "one_letter": "N",
      "name": "Asparagine",
      "category": "polar",
      "summary": "A short side chain ending in a carboxamide oxygen and nitrogen.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "OD1",
        "ND2",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          47,
          67
        ],
        "OD1": [
          62,
          55
        ],
        "ND2": [
          62,
          80
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "OD1"
        ],
        [
          "CG",
          "ND2"
        ]
      ]
    },
    {
      "id": "ASP",
      "one_letter": "D",
      "name": "Aspartic acid",
      "category": "acidic",
      "summary": "A short side chain ending in two symmetry-related carboxylate oxygens.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "OD1",
        "OD2",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          47,
          67
        ],
        "OD1": [
          62,
          55
        ],
        "OD2": [
          62,
          80
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "OD1"
        ],
        [
          "CG",
          "OD2"
        ]
      ]
    },
    {
      "id": "CYS",
      "one_letter": "C",
      "name": "Cysteine",
      "category": "special",
      "summary": "A compact thiol side chain whose sulfur can form disulfide bonds.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "SG",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "SG": [
          47,
          68
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "SG"
        ]
      ]
    },
    {
      "id": "GLN",
      "one_letter": "Q",
      "name": "Glutamine",
      "category": "polar",
      "summary": "A two-carbon stem ending in a carboxamide oxygen and nitrogen.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD",
        "OE1",
        "NE2",
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          44,
          67
        ],
        "CD": [
          59,
          55
        ],
        "OE1": [
          73,
          43
        ],
        "NE2": [
          74,
          69
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD"
        ],
        [
          "CD",
          "OE1"
        ],
        [
          "CD",
          "NE2"
        ]
      ]
    },
    {
      "id": "GLU",
      "one_letter": "E",
      "name": "Glutamic acid",
      "category": "acidic",
      "summary": "A two-carbon stem ending in two symmetry-related carboxylate oxygens.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD",
        "OE1",
        "OE2",
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          44,
          67
        ],
        "CD": [
          59,
          55
        ],
        "OE1": [
          73,
          43
        ],
        "OE2": [
          74,
          69
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD"
        ],
        [
          "CD",
          "OE1"
        ],
        [
          "CD",
          "OE2"
        ]
      ]
    },
    {
      "id": "GLY",
      "one_letter": "G",
      "name": "Glycine",
      "category": "special",
      "summary": "No CB or side-chain heavy atom; only the four backbone slots are occupied.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ]
      ]
    },
    {
      "id": "HIS",
      "one_letter": "H",
      "name": "Histidine",
      "category": "basic",
      "summary": "A five-membered aromatic imidazole ring containing two nitrogens.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "ND1",
        "CD2",
        "CE1",
        "NE2",
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          44,
          64
        ],
        "ND1": [
          57,
          51
        ],
        "CD2": [
          57,
          80
        ],
        "CE1": [
          72,
          58
        ],
        "NE2": [
          72,
          75
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "ND1"
        ],
        [
          "CG",
          "CD2"
        ],
        [
          "ND1",
          "CE1"
        ],
        [
          "CD2",
          "NE2"
        ],
        [
          "CE1",
          "NE2"
        ]
      ]
    },
    {
      "id": "ILE",
      "one_letter": "I",
      "name": "Isoleucine",
      "category": "hydrophobic",
      "summary": "Branches at CB, with one branch extending through CG1 to CD1.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG1",
        "CG2",
        "CD1",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG1": [
          46,
          64
        ],
        "CG2": [
          24,
          74
        ],
        "CD1": [
          61,
          79
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG1"
        ],
        [
          "CB",
          "CG2"
        ],
        [
          "CG1",
          "CD1"
        ]
      ]
    },
    {
      "id": "LEU",
      "one_letter": "L",
      "name": "Leucine",
      "category": "hydrophobic",
      "summary": "Extends to CG before splitting into two terminal delta carbons.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD1",
        "CD2",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          46,
          66
        ],
        "CD1": [
          61,
          53
        ],
        "CD2": [
          61,
          80
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD1"
        ],
        [
          "CG",
          "CD2"
        ]
      ]
    },
    {
      "id": "LYS",
      "one_letter": "K",
      "name": "Lysine",
      "category": "basic",
      "summary": "A four-carbon chain ending in the terminal amine nitrogen NZ.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD",
        "CE",
        "NZ",
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          43,
          66
        ],
        "CD": [
          56,
          53
        ],
        "CE": [
          69,
          67
        ],
        "NZ": [
          83,
          53
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD"
        ],
        [
          "CD",
          "CE"
        ],
        [
          "CE",
          "NZ"
        ]
      ]
    },
    {
      "id": "MET",
      "one_letter": "M",
      "name": "Methionine",
      "category": "hydrophobic",
      "summary": "A flexible chain with sulfur SD between CG and the terminal CE.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "SD",
        "CE",
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          44,
          67
        ],
        "SD": [
          59,
          54
        ],
        "CE": [
          75,
          68
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "SD"
        ],
        [
          "SD",
          "CE"
        ]
      ]
    },
    {
      "id": "PHE",
      "one_letter": "F",
      "name": "Phenylalanine",
      "category": "hydrophobic",
      "summary": "A benzyl side chain whose six aromatic carbons occupy slots 5 through 10.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD1",
        "CD2",
        "CE1",
        "CE2",
        "CZ",
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          43,
          65
        ],
        "CD1": [
          57,
          51
        ],
        "CD2": [
          57,
          79
        ],
        "CE1": [
          74,
          51
        ],
        "CE2": [
          74,
          79
        ],
        "CZ": [
          87,
          65
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD1"
        ],
        [
          "CG",
          "CD2"
        ],
        [
          "CD1",
          "CE1"
        ],
        [
          "CD2",
          "CE2"
        ],
        [
          "CE1",
          "CZ"
        ],
        [
          "CE2",
          "CZ"
        ]
      ]
    },
    {
      "id": "PRO",
      "one_letter": "P",
      "name": "Proline",
      "category": "special",
      "summary": "Its side chain folds back to the backbone N, closing a five-membered ring.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG": [
          18,
          67
        ],
        "CD": [
          6,
          49
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD"
        ],
        [
          "CD",
          "N"
        ]
      ]
    },
    {
      "id": "SER",
      "one_letter": "S",
      "name": "Serine",
      "category": "polar",
      "summary": "A single side-chain oxygen OG follows CB.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "OG",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "OG": [
          47,
          68
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "OG"
        ]
      ]
    },
    {
      "id": "THR",
      "one_letter": "T",
      "name": "Threonine",
      "category": "polar",
      "summary": "CB branches directly to oxygen OG1 and methyl carbon CG2.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "OG1",
        "CG2",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "OG1": [
          46,
          62
        ],
        "CG2": [
          29,
          78
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "OG1"
        ],
        [
          "CB",
          "CG2"
        ]
      ]
    },
    {
      "id": "TRP",
      "one_letter": "W",
      "name": "Tryptophan",
      "category": "hydrophobic",
      "summary": "The only residue that fills all 14 slots, through a fused indole ring.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD1",
        "CD2",
        "NE1",
        "CE2",
        "CE3",
        "CZ2",
        "CZ3",
        "CH2"
      ],
      "layout": {
        "CG": [
          41,
          56
        ],
        "CD1": [
          54,
          43
        ],
        "CD2": [
          50,
          71
        ],
        "NE1": [
          67,
          50
        ],
        "CE2": [
          65,
          66
        ],
        "CE3": [
          48,
          87
        ],
        "CZ2": [
          79,
          71
        ],
        "CZ3": [
          62,
          96
        ],
        "CH2": [
          77,
          88
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD1"
        ],
        [
          "CG",
          "CD2"
        ],
        [
          "CD1",
          "NE1"
        ],
        [
          "NE1",
          "CE2"
        ],
        [
          "CE2",
          "CD2"
        ],
        [
          "CD2",
          "CE3"
        ],
        [
          "CE3",
          "CZ3"
        ],
        [
          "CZ3",
          "CH2"
        ],
        [
          "CH2",
          "CZ2"
        ],
        [
          "CZ2",
          "CE2"
        ]
      ]
    },
    {
      "id": "TYR",
      "one_letter": "Y",
      "name": "Tyrosine",
      "category": "hydrophobic",
      "summary": "A phenyl ring extended by the hydroxyl oxygen OH at slot 11.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG",
        "CD1",
        "CD2",
        "CE1",
        "CE2",
        "CZ",
        "OH",
        null,
        null
      ],
      "layout": {
        "CG": [
          40,
          64
        ],
        "CD1": [
          52,
          50
        ],
        "CD2": [
          52,
          78
        ],
        "CE1": [
          67,
          50
        ],
        "CE2": [
          67,
          78
        ],
        "CZ": [
          79,
          64
        ],
        "OH": [
          93,
          64
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG"
        ],
        [
          "CG",
          "CD1"
        ],
        [
          "CG",
          "CD2"
        ],
        [
          "CD1",
          "CE1"
        ],
        [
          "CD2",
          "CE2"
        ],
        [
          "CE1",
          "CZ"
        ],
        [
          "CE2",
          "CZ"
        ],
        [
          "CZ",
          "OH"
        ]
      ]
    },
    {
      "id": "VAL",
      "one_letter": "V",
      "name": "Valine",
      "category": "hydrophobic",
      "summary": "CB branches immediately into the two terminal gamma carbons.",
      "slots": [
        "N",
        "CA",
        "C",
        "O",
        "CB",
        "CG1",
        "CG2",
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "layout": {
        "CG1": [
          46,
          62
        ],
        "CG2": [
          29,
          78
        ]
      },
      "bonds": [
        [
          "N",
          "CA"
        ],
        [
          "CA",
          "C"
        ],
        [
          "C",
          "O"
        ],
        [
          "CA",
          "CB"
        ],
        [
          "CB",
          "CG1"
        ],
        [
          "CB",
          "CG2"
        ]
      ]
    }
  ]
};
