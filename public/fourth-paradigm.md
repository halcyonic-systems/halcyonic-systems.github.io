# Systems Models: The Fourth Paradigm
## On the kind of knowledge AI cannot learn

*By Shingai Thornton, with Claude — March 2026*

---

> Every AI paradigm learns structure from data.  
> Systems models assert structure from theory.  
> And Simon knew the difference before Dartmouth.

---

## The Thread That Got Dropped

In 1956, a group of researchers convened at Dartmouth College and named their field "artificial intelligence." The name stuck. But two of the most consequential people in that room — Herbert Simon and Allen Newell — were never entirely comfortable with it. They preferred a different phrase: *information processing systems*. Simon would later say, without apology, that what they were doing before Dartmouth they had simply called operations research.

The distinction wasn't modesty. It was precision.

An information processing system takes inputs, transforms them according to rules, and produces outputs. That is a clean, formal, measurable description of what computers actually do. "Artificial intelligence" smuggles in something else — a suggestion of mind, of understanding, of something more than transformation. Simon and Newell resisted the smuggling. In *The Sciences of the Artificial* (1969), Simon drew the line explicitly: designed systems require a different science than natural systems. Natural science describes what *is*. The science of the artificial studies what *could be* — systems specified to meet goals, authored to behave in particular ways.

Simon's science of the artificial was organized around a single question: not *how are things?* — that is natural science's domain — but *how ought things to be designed in order to function and attain goals?* It is the designer's question. It requires specifying what a system is, how it is bounded, what it must do. No amount of observation produces that specification. It has to be authored.

The "AI" branding won rhetorically. The categorical distinction Simon was preserving got lost.

Fifty years passed.

---

## What the Field Built

The last decade has produced three dominant paradigms, each more capable than anything Simon's generation could have imagined.

Vision models learn structure from pixels. The face unlock on your phone. The radiology AI flagging tumors. The system reading your license plate at the parking garage. From LeCun's early convolutional networks to Meta's I-JEPA, the progression is a story of increasingly sophisticated pattern extraction from images — learned representations of what visual scenes contain.

Language models learn structure from tokens. The assistant drafting your emails. The tool summarizing contracts. The system you're reading this alongside. The transformer architecture (Vaswani et al., 2017) unleashed a lineage — GPT, Claude, Gemini — that compresses the statistical structure of human language into parameters. At sufficient scale, this turns out to be extraordinarily useful.

World models learn structure from state transitions. The robotics systems learning to navigate physical space. The autonomous vehicles building internal maps of traffic dynamics. The game-playing agents that mastered Go and StarCraft by simulating forward from current state. LeCun's 2022 paper, "A Path Towards Autonomous Machine Intelligence," articulates the broader ambition: machines that build internal models of how the world evolves, enabling planning and prediction beyond reactive pattern matching.

Three paradigms. Each more sophisticated than the last. Each sharing a single epistemic posture: *structure is extracted from data*. The architecture changes. The epistemology doesn't.

---

## The First Crack

Judea Pearl saw the limitation clearly in *Causality* (2000). His ladder of causation has three rungs: association, intervention, counterfactual. Statistical models — no matter how large, no matter how well-trained — are permanently on the first rung. They can tell you what correlates with what. They cannot tell you what would happen if you intervened. They cannot reason about causes.

Causal models require asserting mechanism, not inferring it. You have to say: *this variable causes that one, through this pathway*. No training run produces that claim. It has to be authored.

Pearl's insight is the first crack in the paradigm. It points toward a different kind of knowledge — structural, mechanistic, explicit — that cannot be learned from data regardless of how much data you have.

---

## The Gap

Here is the question none of the three paradigms ask. Not vision models. Not language models. Not world models. Not even Pearl's causal models, fully:

*What kind of system is this, and why does it behave the way it does?*

This is not a prediction question. It is not a pattern recognition question. It is not a question about what states follow what other states.

It is an ontological and mechanistic question. Answering it requires asserting composition — what entities constitute the system. Asserting environment — what the system is embedded within and coupled to. Asserting structure — the relations among components. Asserting mechanism — the processes that generate emergent behavior.

This is Mario Bunge's CESM ontology. This is George Mobus's systems science formalism. This is what no training run produces, because it is not a property of data. It is a property of understanding.

This is not a fourth option on the same menu. Vision models, language models, and world models all answer variations of the same question — what pattern is in this data? Systems models answer a different question entirely. They don't compete; they occupy a different epistemic dimension.

AI cannot learn structural specification because specification is not a property of data — it is a commitment made by an author who accepts the consequences of being wrong.

An LLM knows what has been *said* about Bitcoin. A systems model specifies what Bitcoin *is* — its boundary, its subsystems, the flows of energy and information between them, the feedback mechanisms that generate decentralization as an emergent property. These are different kinds of knowledge. One is compressed from observation. The other is formally authored from theory.

---

## The Resolution

BERT — the Bounded Entity Reasoning Toolkit — is the authoring environment for that fourth question.

It implements a typed System Language grounded in Mobus's 8-tuple formalism: every system has components, an internal network, an environment, external flows, a boundary, a transformation function, a history, and a characteristic timescale. These are not metadata fields. They are the ontological commitments of a formal model.

BERT models are machine-readable — an OWL/RDF ontology with 40 implemented concepts, a JSON schema, and a simulation bridge to Mesa currently 60% complete — the BERT JSON parser and archetype-to-behavior mappings are built; the final wiring of BERT subsystems to Mesa agent step logic is in progress. They are not diagrams. They are formal specifications that drive simulation.

These assertions are not informal. BERT's grammar constraints are machine-verified in Lean 4, with a bridge theorem that formally characterizes what is preserved and what is lost when a Mobus model projects down to Bunge's CES ontology. Six categories of information have no Bunge counterpart — milieu, flow capacity, boundary properties, transformation functions, history, and timescale. SL models contain strictly more information than Bunge-style descriptions. The theorem proves it.

The System Language Specification v0.1, completed in March 2026, covers 40 of approximately 101 concepts in Mobus's full ontology — the structural and compositional foundation. The dynamics layer, the feedback loops, homeostasis, emergence, attractors — that is the frontier of v2 and beyond. This is v0.1 of a paradigm, not its completion.

---

## Why Now

The world in March 2026 is drowning in complexity it cannot describe. Climate systems, financial contagion, AI governance, cryptoeconomic infrastructure, geopolitical realignment — every consequential problem of this moment is a systems problem. The dominant tools for reasoning about them are either too reductive, too informal, or too opaque. None of them can answer Simon's question.

The AI moment makes this more urgent, not less. As AI agents begin operating inside economic and governance systems at scale — and they are — the need to formally specify those systems becomes critical. You cannot govern what you cannot describe. This is not philosophical abstraction in March 2026 — it is the operational bottleneck for every team implementing the EU AI Act, the US executive orders on AI, and China's algorithmic regulations. Every governance framework struggling to define system boundaries, specify accountability, and mandate transparency is facing the absence of formal systems models. You cannot simulate what you have not formally modeled. You cannot reason about emergent behavior in systems you have only described in natural language.

The current AI paradigm is extraordinarily good at compressing what has already happened. It is structurally incapable of formally specifying what should be built. That gap — between pattern recognition and system design — is precisely where formal systems models live.

Simon and Newell named this territory in 1972. The field walked away from it. The tools to return to it now exist.

This is the work we were supposed to be doing.

---

## The Intellectual Stack

| Figure | Work | Contribution |
|--------|------|-------------|
| Simon & Newell | *Human Problem Solving* (1972) | IPS — what AI actually is, formally |
| Simon | *The Sciences of the Artificial* (1969) | Designed systems require a different science |
| Pearl | *Causality* (2000) | Statistical models cannot reach mechanism |
| LeCun | *A Path Towards Autonomous Machine Intelligence* (2022) | Even world models are learned, not asserted |
| Mobus | *Systems Science* (2022) | Formal ontology for what systems models assert |
| Bunge | CESM ontology | Composition, Environment, Structure, Mechanism |

---

## The Argument, For Different Rooms

**For AI researchers and engineers:**
> Vision models, language models, world models — all learn structure from data. Systems models assert structure from theory. BERT is the authoring environment for that fourth paradigm.

**For systems scientists and complexity researchers:**
> Simon called it information processing — transformation functions all the way down. Systems models describe the systems those functions run inside. BERT is the authoring environment for that distinction.

**For anyone reasoning about complex problems:**
> Every AI model learns patterns from data. A systems model formally describes what a system *is* — its parts, its boundaries, what flows through it, and why it behaves the way it does. That's not a learning problem. It's an authoring problem.

---

## A Note on Authorship

This document was written jointly by Shingai Thornton and Claude (Anthropic). The intellectual content — the theoretical lineage, the framing, the design decisions in the System Language Specification — is Shingai's. Claude served as interlocutor, accelerant, and co-author of prose.

This arrangement is itself an instance of the argument. The work of formally specifying complex systems cannot be delegated to a language model. It requires human judgment, domain expertise, and theoretical grounding that no training run produces. What AI accelerates is the synthesis — the movement from accumulated understanding to coherent artifact.

The humans remain in the loop. That is not a constraint on the work. It is the point of it.

---

*BERT is open source: [github.com/halcyonic-systems/bert](https://github.com/halcyonic-systems/bert)*  
*Halcyonic Systems: [halcyonic.systems](https://halcyonic.systems)*  
*System Language Specification v0.1 — March 2026*
