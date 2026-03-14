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

Simon and Newell also gave AI its foundational claim: the Physical Symbol System Hypothesis — that intelligence *is* physical symbol manipulation. The field took that claim and built increasingly powerful symbol-manipulating machines. But Simon's science of the artificial required physical symbols for a different purpose — not to exhibit intelligence, but to formally specify designed systems. That second use of symbols is the one that got dropped.

Simon framed every artificial system as an interface between an inner environment and an outer one — the internal composition and processes on one side, the external world the system is embedded in on the other. That framing, articulated in 1969, is almost verbatim what BERT's boundary concept formalizes: inner environment as subsystems and internal network, outer environment as sources, sinks, and milieu, and the boundary itself — with its interfaces, porosity, and perceptive fuzziness — as Simon's interface in formal computational clothing. Mobus formalized the concept in 2022. BERT implements it in code. That is a 57-year arc from insight to computational artifact.

This convergence is not accidental. Simon won the Nobel Prize in Economics (1978) for bounded rationality and the Turing Award (1975) with Newell for the PSSH. He is simultaneously the intellectual father of behavioral economics, cognitive science, artificial intelligence, and design theory. The work described here sits at the intersection of all four — which is what systems science *is*.

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

BERT's primitives — Subsystem, Source, Sink, Interface, Flow — are physical symbols in exactly Simon and Newell's sense: discrete tokens that designate real-world entities, participate in formal operations, and can be created, composed, and destroyed. But they are deployed not for intelligent action, as the Physical Symbol System Hypothesis intended, but for ontological specification. The System Language is a physical symbol system whose purpose is to formally assert what kind of system exists — not to exhibit intelligence about it.

BERT models are machine-readable — an OWL/RDF ontology with 40 implemented concepts, a JSON schema, and a simulation bridge to Mesa currently 60% complete — the BERT JSON parser and archetype-to-behavior mappings are built; the final wiring of BERT subsystems to Mesa agent step logic is in progress. They are not diagrams. They are formal specifications that drive simulation.

These assertions are not informal. BERT's grammar constraints are machine-verified in Lean 4, with a bridge theorem that formally characterizes what is preserved and what is lost when a Mobus model projects down to Bunge's CES ontology. Six categories of information have no Bunge counterpart — milieu, flow capacity, boundary properties, transformation functions, history, and timescale. SL models contain strictly more information than Bunge-style descriptions. The theorem proves it.

The AgentModel's Reactive/Anticipatory/Intentional hierarchy is Simon's bounded rationality made formal — agents modeled not as perfect optimizers but as systems with cognitive limits, whose interactions generate the emergent behavior that formal specification exists to capture.

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
| Simon & Newell | *Human Problem Solving* (1972) | PSSH — intelligence is symbol manipulation; but symbols also specify |
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

---

## References

### Foundational Works

**Simon, H.A.** (1969). *The Sciences of the Artificial*. MIT Press.
The origin of the design question. Defines artificial systems as interfaces between inner and outer environments, introduces the science of the artificial as distinct from natural science, and frames the designer's question: *how ought things to be in order to attain goals and to function?*

**Simon, H.A., & Newell, A.** (1972). *Human Problem Solving*. Prentice-Hall.
Establishes the information processing systems framework — the authors' preferred alternative to "artificial intelligence." Grounds cognition in formal symbol manipulation and bounded rationality.

**Newell, A., & Simon, H.A.** (1976). Computer science as empirical inquiry: Symbols and search. *Communications of the ACM, 19*(3), 113–126.
The Turing Award lecture. States the Physical Symbol System Hypothesis: a physical symbol system has the necessary and sufficient means for general intelligent action.

**Simon, H.A.** (1955). A behavioral model of rational choice. *Quarterly Journal of Economics, 69*(1), 99–118.
Introduces bounded rationality — agents make decisions within cognitive limits, not as perfect optimizers. The theoretical foundation for agent-based modeling and BERT's Reactive/Anticipatory/Intentional AgentModel hierarchy.

**Pearl, J.** (2000). *Causality: Models, Reasoning, and Inference*. Cambridge University Press.
The ladder of causation: association, intervention, counterfactual. Demonstrates that statistical models are permanently on the first rung — mechanism must be asserted, not inferred.

---

### Systems Science Foundations

**Bunge, M.** (1979). *Treatise on Basic Philosophy, Vol. 4: Ontology II — A World of Systems*. D. Reidel.
Source of the CESM ontology: Composition, Environment, Structure, Mechanism. The philosophical grounding for what systems models formally assert.

**Mobus, G.E., & Kalton, M.C.** (2015). *Principles of Systems Science*. Springer.
Comprehensive systems science framework. Foundation for BERT's ontological elements, hierarchy, and flow taxonomy.

**Mobus, G.E.** (2022). *Systems Science: Theory, Analysis, Modeling, and Design*. Springer.
Direct theoretical grounding for BERT. Source of the 8-tuple formalism S = ⟨C, N, E, G, B, T, H, Δt⟩, Deep Systems Analysis methodology, and the complexity classification framework.

---

### AI Paradigm Sources

**LeCun, Y.** (2022). A path towards autonomous machine intelligence (Version 0.9.2). *OpenReview*.
[https://openreview.net/forum?id=BZ5a1r-kVsf](https://openreview.net/forum?id=BZ5a1r-kVsf)
Articulates world models as a paradigm — machines that build internal representations of how the world evolves. The most credible internal critique of the statistical learning paradigm.

**Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A.N., Kaiser, Ł., & Polosukhin, I.** (2017). Attention is all you need. *Advances in Neural Information Processing Systems, 30*.
The transformer architecture. Origin of the language model lineage — GPT, Claude, Gemini and everything that followed.

**LeCun, Y., Bengio, Y., & Hinton, G.** (2015). Deep learning. *Nature, 521*, 436–444.
The vision model lineage. Establishes deep learning as the paradigm for pattern extraction from perceptual data.

---

### BERT and This Work

**Thornton, S.** (2025). A Deep Systems Analysis of Bitcoin. Working Paper, Binghamton University.
Application of Deep Systems Analysis to Bitcoin as a complex adaptive system. The reference model for the BERT System Language Specification.

**Halcyonic Systems.** (2026). *BERT System Language Specification v0.1*.
[https://github.com/halcyonic-systems/bert](https://github.com/halcyonic-systems/bert)
The formal specification of the System Language implemented in BERT. Covers 40 Mobus concepts with Lean 4-verified grammar constraints and a bridge theorem characterizing information loss in projection to Bunge's CES ontology.

**Halcyonic Systems.** (2023–2026). *BERT: Bounded Entity Reasoning Toolkit* (v0.3.0).
[https://github.com/halcyonic-systems/bert](https://github.com/halcyonic-systems/bert)
The open-source desktop application implementing the System Language. Built in Rust/Tauri/Bevy.

---

### Related Work

**Voshmgir, S., & Zargham, M.** (2020). Foundations of cryptoeconomic systems. *Vienna University of Economics and Business Research Institute for Cryptoeconomics Working Paper*.
Establishes cryptoeconomic systems as complex socioeconomic networks requiring interdisciplinary analysis — the applied domain where BERT's systems models have immediate research value.

**Mesa Development Team.** (2026). *Mesa 3.5.0: Agent-based modeling in Python*.
[https://github.com/projectmesa/mesa/releases/tag/v3.5.0](https://github.com/projectmesa/mesa/releases/tag/v3.5.0)
Released February 15, 2026. Provides event scheduling, DataFrame-to-agent instantiation, and scenario management that directly enables the BERT-to-simulation bridge.

---

*BERT is open source: [github.com/halcyonic-systems/bert](https://github.com/halcyonic-systems/bert)*
*Halcyonic Systems: [halcyonic.systems](https://halcyonic.systems)*
*System Language Specification v0.1 — March 2026*
