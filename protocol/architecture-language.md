# Architecture Language v0.4

Status: **current implemented contract**.

Architecture YAML is the durable semantic source for a model or system. It
describes canonical objects, hierarchy, information flow, specialized
semantics, evidence, and explicit decomposition closure. Boards select and
present this graph; they do not redefine it.

Related contracts:

- `protocol/fact-ownership.md`: one owner for every fact;
- `protocol/architecture-coverage.md`: breadth closure and depth frontiers;
- `protocol/architecture-projection-model.md`: architecture-derived boards;
- `protocol/bibliography.md`: canonical source metadata and typed citations.

## Top-Level Shape

```yaml
schema_version: architecture-v0.4
id: stable_architecture_id
name: Human Readable Name
family: transformer
status: draft
task_modes: [generation]

sources: []
decomposition: {}
execution: {}
state_semantics: {}
conditioning: []
scale_transitions: []
training_inference: {}
representations: []
value_sites: []
modules: []
relations: []
claims: []
open_questions: []
```

Use stable semantic `snake_case` IDs. Cross-object references are typed:

```yaml
modules.ddpm_sampler
representations.input_latent
value_sites.latent_before_step
relations.current_latent_enters_reverse_step
claims.sampler_is_fixed_math
```

## Sources and Evidence

Source metadata lives once in `references/bibliography.yaml`. Architecture
facts cite it with a typed role:

```yaml
evidence:
  status: confirmed_from_code
  refs:
    - source_ref: dit_models_code
      role: implementation_evidence
      lines: DiT.forward
      note: The forward pass combines timestep and class embeddings.
```

Supported certainty states are:

- `confirmed_from_code`;
- `confirmed_from_paper`;
- `confirmed_from_docs`;
- `inferred`; and
- `open_question`.

Every nontrivial module, representation, relation, claim, conditioning use,
scale transition, and state-lifecycle assertion needs evidence. Do not infer
historical priority from a citation; record origin claims separately with
their own evidence.

## Decomposition and Hierarchy

Every module has exactly one `parent_ref`, rooted at `architecture`. Child
membership and hierarchy depth are derived from these references.

```yaml
decomposition:
  status: complete
  evidence:
    status: confirmed_from_code
    refs:
      - source_ref: implementation_source
        role: implementation_evidence

modules:
  - id: denoiser
    parent_ref: architecture
    decomposition:
      status: complete

  - id: external_decoder
    parent_ref: architecture
    decomposition:
      status: opaque
      reason: external_pretrained_component
```

Every scope declares one decomposition status:

- `complete`: its immediate child set is asserted exhaustive;
- `partial`: sibling breadth may still be missing and `reason` is required;
- `leaf`: intentional terminal at the current explanatory granularity; or
- `opaque`: component is accounted for but internals are intentionally not
  modeled, with a required `reason`.

Never author a second child list or expected count. See
`protocol/architecture-coverage.md` for compiler invariants and generated
coverage reports.

## Representations and Value Sites

A representation describes a reusable tensor or stream type:

```yaml
representations:
  - id: diffusion_latent
    scale: spatial
    semantic_role: mutable latent in reverse diffusion
    shape: "B x 4 x I x I"
    carries:
      - noised image content
    evidence:
      status: confirmed_from_code
      refs:
        - source_ref: implementation_source
          role: implementation_evidence
```

A value site describes one concrete architectural occurrence of that type:

```yaml
value_sites:
  - id: latent_before_step
    representation_ref: representations.diffusion_latent
    scope_ref: modules.ddpm_sampler
    role: state_read

  - id: latent_after_step
    representation_ref: representations.diffusion_latent
    scope_ref: modules.ddpm_sampler
    role: state_write
```

Split mutable before/after values into distinct sites. Never express a state
update as an ambiguous self-edge. Task-native inputs and outputs use
`scope_ref: architecture` and `boundary: input|output`.

`representations` own reusable shape, scale, and meaning. `value_sites` own
occurrence scope, boundary, and local role. Producers and consumers are
derived from relations.

## Modules

Modules are semantic processing units: adapters, stacks, formulas, samplers,
heads, decoders, or reusable mechanism occurrences.

```yaml
modules:
  - id: reverse_diffusion_step
    parent_ref: modules.ddpm_sampler
    decomposition:
      status: leaf
    label: DDPM Sampling Formula
    kind: sampling_formula
    role: combine the current latent and model prediction into the next latent
    scale: spatial
    evidence:
      status: confirmed_from_code
      refs:
        - source_ref: implementation_source
          role: implementation_evidence
```

Optional module fields include `repeats`, `depth`, `attention`,
`standard_block_ref`, `pseudocode_ref`, and `frozen`. Do not author module
`inputs` or `outputs`; canonical relations define the interface.

## Canonical Relations

Relations are the sole owners of information-flow identity and endpoints:

```yaml
relations:
  - id: current_latent_enters_reverse_step
    from: value_sites.latent_before_step
    to: modules.reverse_diffusion_step
    kind: data_flow
    carries:
      - representations.diffusion_latent
    operation: reverse_diffusion_update
    evidence:
      status: confirmed_from_code
      refs:
        - source_ref: implementation_source
          role: implementation_evidence
```

Every relation has a stable semantic ID and typed endpoints. Common kinds
include `data_flow`, `conditioning`, `state_update`, `index_flow`, `skip`, and
`control`. `carries` references representation types; `operation` names the
architectural action.

Do not author anonymous architecture `edges`, duplicated module interfaces,
or board-local semantic flow. The compiler derives module/value-site
interfaces and projected board edges from relations.

## State Semantics

State semantics group related value-site occurrences and describe their shared
lifecycle:

```yaml
state_semantics:
  sampling_latent:
    representation_ref: representations.diffusion_latent
    value_site_refs:
      - value_sites.latent_before_step
      - value_sites.latent_after_step
    lifecycle: iterative_loop_state
    notes:
      - Before and after sites distinguish x_t from x_(t-1).
    evidence:
      status: confirmed_from_code
      refs:
        - source_ref: implementation_source
          role: implementation_evidence
```

The group owns lifecycle interpretation and notes. It does not author `role`,
`produced_by`, `consumed_by`, or `updated_by`. Site roles come from
`value_sites`; interfaces come from relations. A value site may belong to at
most one state group, and every grouped site must use the declared
representation.

## Conditioning

Conditioning records how a canonical conditioning relation is used:

```yaml
conditioning:
  - id: block_adaln_zero
    relation_ref: relations.cond_vector_enters_adaln_mlp
    mode: adaln_zero
    standard_block_ref: standard_blocks/adaln-zero-conditioning.yaml
    updates_source: false
    evidence:
      status: confirmed_from_code
      refs:
        - source_ref: implementation_source
          role: implementation_evidence
```

The relation owns source and target; the conditioning entry owns the mechanism
such as `adaln_zero`, `pair_bias`, `gate`, `additive_injection`,
`concatenation`, or `cross_attention`. Do not copy relation endpoints into the
conditioning entry.

## Scale Transitions

Scale transitions interpret an ordered canonical flow path:

```yaml
scale_transitions:
  - id: item_to_group_pool
    relation_path:
      - relations.encoded_items_enter_group_pool
      - relations.group_pool_produces_group_state
    index_relation_ref: relations.group_index_guides_pooling
    aggregation: scatter_mean
    copy_vs_pool: pool
    evidence:
      status: confirmed_from_code
      refs:
        - source_ref: implementation_source
          role: implementation_evidence
```

The path must be continuous and run from a value site to a value site. An
optional `index_relation_ref` must identify an `index_flow` into that path.
Endpoints, endpoint scales, projection modules, and index-map occurrences are
derived; do not author them again.

## Execution and Training/Inference

`execution` owns dynamic behavior not recoverable from a static graph:

```yaml
execution:
  loops:
    - id: denoising_loop
      repeats: num_sampling_steps
      reruns:
        - modules.denoiser
        - modules.reverse_diffusion_step
      cached: []
      notes: []
      evidence:
        status: confirmed_from_code
        refs:
          - source_ref: implementation_source
            role: implementation_evidence
```

Use it for sampling loops, recycling, recurrent refinement, cached state, and
phase-specific reruns. `training_inference` owns objectives, schedules,
samplers, latent codecs, teacher forcing, self-conditioning, and deployment
notes when relevant.

## Claims and Open Questions

Claims are named, evidence-backed statements suitable for inspectors, stories,
and comparisons. Open questions preserve unresolved facts rather than hiding
them in prose:

```yaml
claims:
  - id: sampler_formula_has_no_learned_weights
    statement: The reverse update is fixed schedule math around model outputs.
    evidence:
      status: confirmed_from_code
      refs:
        - source_ref: implementation_source
          role: implementation_evidence

open_questions:
  - id: unresolved_boundary
    question: Is this cache refreshed during inference?
    status: unresolved
```

## Compilation

The Ruby compiler stack validates and derives the browser manifest:

```text
architecture-v0.4 YAML
  -> ownership validation
  -> decomposition coverage validation/compilation
  -> semantic board projection
  -> architecture-manifest-v0.4 JavaScript
```

Generated convenience fields include value-site producer/consumer indexes,
conditioning endpoints, scale-transition endpoints/scales, hierarchy coverage,
and projected board edges. They are compiler output, not alternate authoring
locations.

Legacy architecture-v0.1/v0.2/v0.3 compatibility and migration behavior are
documented in `protocol/architecture-projection-model.md`; new sources use
architecture-v0.4.
