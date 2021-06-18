$(document).on("change", ".toggle-viz", function (event) {
  if ($(this).attr("id") === "btnradio1") {
    $("#accordionPaperList").removeClass("d-none");
    $("#canvas").addClass("d-none");
  } else {
    $("#accordionPaperList").addClass("d-none");
    $("#canvas").removeClass("d-none");
  }
});

$(document).on("click", ".list-group-keyword", function (event) {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).addClass("active");
  }
});

$(document).on("click", ".dropdown-item-track", function (event) {
  $("#select-track").text($(this).attr("name"));
});

var keyword_filter;
var keyword_cnt;
function initialize_program() {
  myObj = [
    {
      UID: "4",
      title: "Task-Aware Waypoint Sampling for Robotic Planning",
      authors: ["Sarah Keren", "Gerard Canal", "Michael Cashmore"],
      keyphrases: "Task and motion planning\n Robotics\n Waypoint sampling",
      abstract:
        "To achieve a complex task, a robot often needs to navigate in a physical space to complete activities in different locations. For example, it may need to inspect several structures, making multiple observations of each structure from different\n perspectives. Typically, the positions from which these activities can be performed are represented as waypoints – discrete positions that are sampled from the continuous physical space. Existing approaches to waypoint selection either iteratively consider the entire space or each activity separately, which can lead to task planning problems that are more complex than is necessary or to plans of compromised quality. We offer an approach that produces more efficient plans by performing a one-time computation of the connectivity graph and by prioritizing waypoints from which multiple activities can be performed. In addition, we support user specified performance preferences that represent preferences a system operator may have about the generated task plan but that cannot be directly represented in the map used for navigation, such as areas near doorways where it is preferable that the robot does not stop to perform activities. We demonstrate the performance benefits of our approach on simulated manufacturing tasks in an automated factory.",
      topics: [
        "Integrated task and motion planning",
        "Planning with uncertainty in robotics",
      ],
      track: "robotics",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16013",
    },
    {
      UID: "5",
      title:
        "Block Compression and Invariant Pruning for SAT-based Totally-Ordered HTN Planning",
      authors: ["Gregor Behnke"],
      keyphrases: "HTN Planning\n SAT-based Planning\n Pruning",
      abstract:
        "Translations into propositional logic are currently one of the most efficient techniques for solving Totally-Ordered HTN planning problems.\n The two current encodings both iterate over the maximum allowed depth of decomposition.\n Given this depth, they compute a tree that represents all possible decompositions up to this depth.\n Based on this tree, a formula in propositional logic is created.\n We show that much of the computed tree is actually useless as it cannot possibly belong to a solution.\n We provide a technique for removing (parts of) these useless structures using state invariants.\n We further show that is often not necessary to encode all leafs of this tree as separate timesteps, as the prior encodings did.\n Instead, we can compress the leafs into blocks and encode all leafs of a block at one timestep.\n We show that these changes provide an improvement over the state-of-the-art in HTN planning.",
      topics: ["HTN and knowledge-based planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15943",
    },
    {
      UID: "17",
      title:
        "Approximate bi-criteria search by efficient representation of subsets of the Pareto-optimal frontier",
      authors: ["Oren Salzman", "Boris Goldin"],
      keyphrases: "Bicriteria search\n Pareto frontier\n Approximate search",
      abstract:
        "We consider the bi-criteria shortest-path problem where we want to compute shortest paths on a graph that simultaneously balance two cost functions. While this problem has numerous applications, there is usually no path minimizing both cost functions simultaneously. Thus, we typically consider the set of paths where no path is strictly better than the others in both cost functions, a set called the Pareto-optimal frontier. Unfortunately, the size of this set may be exponential in the number of graph vertices and the general problem is NP-hard. While existing schemes to approximate this set exist, they may be slower than exact approaches when applied to relatively small instances and running them on graphs with even a moderate number of nodes is often impractical. The crux of the problem lies in how to efficiently approximate the Pareto-optimal frontier. Our key insight is that the Pareto-optimal frontier can be approximated using pairs of paths. This simple observation allows us to run a best-first-search while efficiently and effectively pruning away intermediate solutions in order to obtain an approximation of the Pareto frontier for any given approximation factor. We compared our approach with an adaptation of BOA*, the state-of-the-art algorithm for computing exact solutions to the bi-criteria shortest-path problem. Our experiments show that as the problem becomes harder, the speedup obtained becomes more pronounced. Specifically, on large roadmaps, when using an approximation factor of 10% we obtain a speedup on the average running time of more than X19.",
      topics: ["Multi-objective planning and scheduling", "Search techniques"],
      track: "main",
      url: "",
    },
    {
      UID: "24",
      title: "Situated Temporal Planning Using Deadline-aware Metareasoning",
      authors: [
        "Shahaf Shperberg",
        "Andrew Coles",
        "Erez Karpas",
        "Wheeler Ruml",
        "Solomon Eyal Shimony",
      ],
      keyphrases:
        "Metareasoning\n Deliberation Scheduling\n Situated Temporal Planning",
      abstract:
        "We address the problem of situated temporal planning, in which an agent's plan can depend on scheduled exogenous events, and thus it becomes important to take the passage of time into account during the planning process. \n Previous work on situated temporal planning has proposed simple pruning strategies, as well as complex schemes for a simplified version of the associated metareasoning problem. Although even the\n simplified version of the metareasoning problem is NP-hard,\n we provide a pseudo-polynomial time\n optimal solution to the case with known deadlines.\n We leverage intuitions emerging from this case to provide a fast greedy\n scheme that significantly improves upon previous schemes even for the case\n of unknown deadlines.\n Finally, we show how this new method can be applied inside an actual situated temporal planner.\n An empirical evaluation suggests that the new planner provides state-of-the-art results on problems where external deadlines play a significant role.",
      topics: ["Temporal planning", "Online/real-time planning and scheduling"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15979",
    },
    {
      UID: "34",
      title: "Jump Point Search with Temporal Obstacles",
      authors: [
        "Shuli Hu",
        "Daniel Harabor",
        "Graeme Gange",
        "Peter Stuckey",
        "Nathan Sturtevant",
      ],
      keyphrases:
        "heuristic\n pathfinding\n jump point search\n temporal obstacles",
      abstract:
        "We consider a novel symmetry breaking algorithm - in the style of Jump Point Search – for pathfinding in 4-connected uniform-cost grids with temporal obstacles that appear and disappear at set times. This problem appears in several important contexts such as multi-agent coordination and computer games. Our approach is evaluated in these contexts and is shown to result in significant improvements, especially when the temporal obstacles are sparse",
      topics: ["Temporal planning", "Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15961",
    },
    {
      UID: "36",
      title:
        "Iterative-deepening Bidirectional Heuristic Search with Restricted Memory",
      authors: [
        "Shahaf Shperberg",
        "Steven Danishevski",
        "Ariel Felner",
        "Nathan Sturtevant",
      ],
      keyphrases:
        "Bidirectional heuristic search\n memory-restricted search\n Meet at the Threshold search",
      abstract:
        "The field of bidirectional heuristic search has greatly advanced in the past few years. However, the subject of memory-restricted bidirectional search has scarcely been pursued.\n In this paper we introduce a general iterative deepening bidirectional heuristic search algorithm (IDBHS) that searches simultaneously from both directions while controlling the meeting point of the search frontiers thus balancing the effort of the forward and backward searches. First we preset the basic variant of IDBHS, whose memory is linear in the search depth. We then add improvements that exploit consistency and front-to-front heuristics. Next, we move to the case where a fixed amount of memory is available to store nodes during the search. Here, we develop two variants of IDBHS: (1) IDBHS+A*, that uses A* as a preliminary stage and moves to IDBHS after memory is exhausted.\n (2) A variant that iteratively stores a partial forward frontier, until memory is exhausted and then tries to match it from the backward side.\n Finally, we empirically compare the new algorithms to existing ones (both unidirectional and bidirectional). In many cases our new algorithms require less runtime and node expansions than the previous methods.",
      topics: ["Search techniques"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15978",
    },
    {
      UID: "37",
      title:
        "A Closer Look at Causal Links: Complexity Results for Delete-Relaxation in Partial Order Causal Link (POCL) Planning",
      authors: ["Pascal Bercher"],
      keyphrases:
        "POP\n POCL planning\n plan-based search\n plan existence problem\n complexity results",
      abstract:
        "Partial Order Causal Link (POCL) planning follows the principle of least commitment in that it maintains only a partial order on its actions to prevent unnecessary early commitment during search. This can reduce the search space significantly by systematically representing up to an exponential number of action sequences in just a single search node. Progress on goal achievement is represented fully by this partial order and by causal links, which represent the causal relationships between these actions as well as between the initial state and goal. Plan existence for a state in classical planning thus corresponds to plan existence for a partial plan in POCL planning. Yet almost no theoretical investigations for POCL plan existence were conducted so far. While delete-relaxation makes plan existence tractable in classical planning, we show it to be NP-hard in POCL planning unless the current plan is totally ordered or causal links are almost completely ignored.",
      topics: ["Classical planning", "Complexity analysis"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15944",
    },
    {
      UID: "38",
      title:
        "Translating Totally Ordered HTN Planning Problems to Classical Planning Problems Using Regular Approximation of Context-Free Languages",
      authors: ["Daniel Höller"],
      keyphrases:
        "HTN planning\n planning system\n translation\n classical planning",
      abstract:
        "There have been several approaches to use techniques from classical planning in HTN planning. While a direct translation is in general not possible due to the different expressiveness, there have been translations of bounded HTN problems and approaches to use classical heuristics in HTN search procedures. In this paper, we introduce a different approach. We exploit methods from the field of Computational Linguistics introduced to approximate Context-Free Languages by Finite Automata. We use them to approximate the decomposition structure of totally ordered (TO) HTN planning problems by classical problems. The resulting problem can then be solved using standard classical planning systems. A subset of TOHTN problems can be translated exactly, i.e., without changing the set of solutions. For problems where an approximation is necessarily, we use an overapproximation, i.e., the set of solutions to the classical problem is a superset of that of the HTN problem. We then use plan verification to check whether a solution is valid and thus obtain a sound and complete overall solver. The resulting system outperforms the state of the art on the IPC 2020 benchmark set in terms of coverage.",
      topics: ["HTN and knowledge-based planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15958",
    },
    {
      UID: "44",
      title:
        "Fully Observable Nondeterministic HTN Planning -- Formalisation and Complexity Results",
      authors: ["Dillon Chen", "Pascal Bercher"],
      keyphrases:
        "HTN Planning\n FOND Planning\n Planning under Uncertainty\n Plan Existence Problem\n Computational Complexity",
      abstract:
        "Much progress has been made in advancing the state of the art of HTN planning theory in recent years. However, scarce studies have been made with regards to the complexity of HTN problems on nondeterministic domains. In this paper we renew and extend existing HTN planning formalisations to fully observable nondeterministic HTN planning. We propose and study different solution criteria which differ in when nondeterministic action outcomes are considered: at plan generation or at plan execution. We integrate our solution criteria with notions of weak and strong plans canonical in nondeterministic planning and identify intriguing similarities and differences with plans in other fields of AI planning.\n \n We also provide completeness results for a majority of HTN problem subclasses and show the significant result that problems are not made any harder under nondeterminism for certain solution criteria by using compilation techniques to deterministic HTN planning. This supports and justifies the practicality and scalability of extending HTN problems over nondeterministic domains to deal with real world scenarios.",
      topics: [
        "HTN and knowledge-based planning",
        "Planning under (non-probabilistic) uncertainty",
        "Complexity analysis",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15949",
    },
    {
      UID: "48",
      title:
        "Explaining path plan optimality: fast explanation methods for navigation meshes using full and incremental inverse optimization",
      authors: ["Martim Brandao", "Amanda Coles", "Daniele Magazzeni"],
      keyphrases:
        "explainable planning\n explainable AI\n path planning\n robot navigation",
      abstract:
        "In this paper we propose methods that provide explanations for path plans, in particular those that answer questions of the type ``why is path A optimal, rather than path B which I expected?''. In line with other work in eXplainable AI Planning (XAIP), such explanations could help users better understand the outputs of path planning methods, as well as help debug or iterate the design of planners and maps. By specializing the explanation methods to path planning, using optimization-based inverse-shortest-paths formulations, we obtain drastic computation time improvements relative to domain-independent XAIP methods, especially as the length of the explanations increases. \n Our method based on incremental optimization achieves interactive rates of 1 second per explanation, which is 3 orders of magnitude faster than generous XAIP baselines. One of the claims of this paper is thus that specialization is required for explanation methods to scale and come closer to real-world usability in path planning domains. We propose and evaluate the methods on large-scale navigation meshes, which are heavily used in the computer game industry and robotics. \n Finally, we show through a user study that, when compared to baseline cost-based explanations, our methods' explanations are more satisfactory, actionable, and effective at updating users' mental model of the problem.",
      topics: [
        "User interface design, visualization, and explanation for a planning and scheduling application",
        "Behavior transparency and explainability",
        "Explanation of planning and learning models",
      ],
      track: "main",
      url: "",
    },
    {
      UID: "49",
      title: "Loop Detection in the PANDA Planning System",
      authors: ["Daniel Höller", "Gregor Behnke"],
      keyphrases: "HTN planning\n loop detection\n graph search",
      abstract:
        "The International Planning Competition (IPC) in 2020 was the first one for a long time to host tracks on Hierarchical Task Network (HTN) planning. HyperTensioN, the winner of the tack on totally ordered problems, comes with an interesting technique: it stores parts of the decomposition path in the state to mark expanded tasks and forces its depth first search to leave recursive structures in the hierarchy. This can be seen as a form of loop detection (LD) -- a technique that is not very common in HTN planning. This might be due to the spirit of encoding enough advice in the model to find plans (so that loop detection is simply not necessary), or because it becomes a computationally hard task in the general (i.e. partially ordered) setting. We integrated several (approximate and exact) techniques for LD into the heuristic progression search of the HTN planning system PANDA. We test our new techniques on the benchmark set of the IPC 2020. Both in the partially ordered (PO) and totally ordered (TO) track, PANDA with LD beats the winners of the competition. In the PO setting, our LD techniques increase the lead in comparison to the IPC systems. In the TO setting, PANDA is placed 3rd place without our LD techniques, but 1st when using it.",
      topics: ["HTN and knowledge-based planning", "Search techniques"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15959",
    },
    {
      UID: "54",
      title:
        "Distributed Fair Scheduling for Information Exchange in Multi-Agent Systems",
      authors: ["Majid Raeis", "S. Jamaloddin Golestani"],
      keyphrases:
        "Distributed scheduling\n Fairness\n Queueing Theory\n Multi-agent systems",
      abstract:
        "Information exchange is a crucial component of many real-world multi-agent systems. However, the communication between the agents involves two major challenges: the limited bandwidth, and the shared communication medium between the agents, which restricts the number of agents that can simultaneously exchange information. While both of these issues need to be addressed in practice, the impact of the latter problem on the performance of the multi-agent systems has often been neglected. This becomes even more important when the agents' information or observations have different importance, in which case the agents require different priorities for accessing the medium and sharing their information. Representing the agents' priorities by fairness weights and normalizing each agent's share by the assigned fairness weight, the goal can be expressed as equalizing the agents' normalized shares of the communication medium. To achieve this goal, we adopt a queueing theoretic approach and propose a distributed fair scheduling algorithm for providing weighted fairness in single-hop networks. Our proposed algorithm guarantees an upper-bound on the normalized share disparity among any pair of agents. This can particularly improve the short-term fairness, which is important in real-time applications. Moreover, our scheduling algorithm adjusts itself dynamically to achieve a high throughput at the same time. The simulation results validate our claims and comparisons with the existing methods show our algorithm's superiority in providing short-term fairness, while achieving a high throughput.",
      topics: [
        "Scheduling",
        "Distributed and multi-agent scheduling",
        "Applications and case studies",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15972",
    },
    {
      UID: "55",
      title:
        "RePReL: Integrating Relational Planning and Reinforcement Learning for Effective Abstraction",
      authors: [
        "Harsha Kokel",
        "Arjun Manoharan",
        "Sriraam Natarajan",
        "Balaraman Ravindran",
        "Prasad Tadepalli",
      ],
      keyphrases:
        "Reinforcement Learning\n Planning\n Relational MDP\n Hierarchical",
      abstract:
        "State abstraction is necessary for better task transfer in complex reinforcement learning environments. Inspired by the benefit of state abstraction in MAXQ and building upon hybrid planner-RL architectures, we propose RePReL, a hierarchical framework that leverages a relational planner to provide useful state abstractions. Our experiments demonstrate that the abstractions enable faster learning and efficient transfer across tasks. More importantly, our framework enables the application of standard RL approaches for learning in structured domains. The benefit of using the state abstractions is critical in relational settings, where the number and/or types of objects are not fixed apriori. Our experiments clearly show that RePReL framework not only achieves better performance and efficient learning on the task at hand but also demonstrates better generalization to unseen tasks.",
      topics: [
        "Reinforcement learning using planning (model-based, Bayesian, deep, etc.)",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16001",
    },
    {
      UID: "60",
      title:
        "Compositional Approach to Translate LTLf/LDLf into Deterministic Finite Automata",
      authors: ["Giuseppe De Giacomo", "Marco Favorito"],
      keyphrases:
        "linear temporal logic on finite traces\n linear dynamic logic on finite traces\n LTLf\n LDLf\n automata\n deterministic finite automata\n compositional approach\n translation from temporal logic to automata",
      abstract:
        "The translation from temporal logics to automata is the workhorse algorithm of several techniques in computer science and AI, such as reactive synthesis, reasoning about actions, FOND planning with temporal specifications, and reinforcement learning with non-Markovian rewards, to name a few. Unfortunately, the problem is computationally intractable, requiring the implementation of several heuristics to make it usable in practice. In this paper, following the recent interest in temporal logic formalisms over finite traces, we present a compositional approach for dealing with translations of Linear Temporal Logic (LTLf) and Linear Dynamic Logic (LDLf) on finite traces into Deterministic Finite Automata (DFA). We inductively transform each LTLf/LDLf subformula into a DFA and combine them through automata operators. By relying on efficient semi-symbolic automata representations, we empirically show our approach's effectiveness and competitiveness with similar tools. Moreover, this is the first work that provides a scalable and practical tool supporting the translation to DFA not only for LTLf but also for full LDLf.",
      topics: [
        "Temporal planning",
        "Planning under (non-probabilistic) uncertainty",
        "Reasoning about action and change",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15954",
    },
    {
      UID: "61",
      title: "Conflict-Free Multi-Agent Meeting",
      authors: [
        "Dor Atzmon",
        "Shahar Idan Freiman",
        "Oscar Epshtein",
        "Oran Shichman",
        "Ariel Felner",
      ],
      keyphrases:
        "Conflict-Free Multi-Agent Meeting\n Multi-Agent Meeting\n Multi-Agent Path Finding\n Iterative Meeting Search\n Multi-Directional Heuristic Search\n Conflict-Free\n Constraint\n MAM\n MAPF\n CF-MAPF",
      abstract:
        "Multi-Agent Meeting (MAM) is the problem of finding a meeting location for multiple agents and paths to that location. Practically, a solution to MAM may contain conflicting paths. A related problem that plans conflict-free paths to a given set of goal locations is the Multi-Agent Path Finding problem (MAPF). In this paper, we solve the Conflict-Free Multi-Agent Meeting problem (CF-MAM). In CF-MAM, we find a meeting location for multiple agents (as in MAM) as well as conflict-free paths (as in MAPF) to that location. We introduce two novel algorithms, which combine MAM and MAPF solvers, for optimally solving CF-MAM. We prove the optimality of both algorithms and compare them experimentally, showing the pros and cons of each algorithm.",
      topics: [
        "Search techniques",
        "Planning activities, motions and paths",
        "Distributed and multi-agent planning",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15942",
    },
    {
      UID: "62",
      title:
        "Online Hedge Reservation for Diverse Plans and Competitive Analysis",
      authors: ["Binghan Wu", "Wei Bao", "Dong Yuan", "Bing Zhou"],
      keyphrases:
        "competitive analysis\n online algorithm\n mobile data plan\n hedge",
      abstract:
        "In this paper, we investigate the plan reservation problem with diverse plans in mobile networks. Pricing schemes include: 1) Pay-as-you-go (PAYG) payment; 2) All-in-one plan: an upfront fee is charged to cover data volume of a period of time; and 3) Directional plan: an upfront fee is charged to cover data volume of a specific app for a period of time. We investigate online plan reservation with competitive analysis, as the data volume is not known until an app is used. The problem is challenging as there are multiple directional plans and one all-in-one plan, creating a large decision space and complicated correlations among the decisions. We propose the Online Hedge Reservation (OHR) Algorithm to solve the problem and prove that it achieves $e^\\beta/(e^\\beta-1)$ competitive ratio when each plan is valid till the end of each calendar month and $2e^\\beta/(e^\\beta-1)$ competitive ratio when each plan is valid for a full month, where $\\beta$ is the ratio of prices of the directional plans and the all-in-one plan. This is an exciting neat extension of the competitive ratio $e/(e-1)$ of the classic ski-rental problem. Finally, trace-driven simulation is conducted to further verify the advantages of the OHR Algorithm.",
      topics: [
        "Online/real-time planning and scheduling",
        "Assessment of impact on end users",
        "Industry / application challenge problems",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15985",
    },
    {
      UID: "67",
      title:
        "E2Coop: Energy Efficient and Cooperative Obstacle Detection and Avoidance for UAV Swarms",
      authors: ["Shuangyao Huang", "Haibo Zhang", "Zhiyi Huang"],
      keyphrases: "PSO\n APF\n Detection\n Avoidance\n UAV",
      abstract:
        "Unmanned Aerial Vehicle (UAV) swarm systems have enabled many long-haul, delay sensitive and hazardous applications. As UAVs are powered by batteries and the airspace they work in is usually highly dynamic, planning trajectories in an energy-efficient way to avoid both UAV-to-UAV and UAV-to-obstacle collisions has become a critical and open problem. In this paper, we present E2Coop, a new scheme designed to avoid collisions for UAV swarms by tightly coupling Artificial Potential Field (APF) with Particle Swarm Planning (PSO) based trajectory planning. In E2Coop, each swarm member maintains an environmental field constructed by superposing the APFs for both the swarm and the detected obstacles, based on which the swarm members perform trajectory planning cooperatively to avoid collisions in an energy-efficient manner. E2Coop exploits the advantages of the active contour model in image processing for trajectory planning. Each swarm member will try to plan its trajectories on the contours of the environment fields to save energy and avoid UAV-to-obstacle collisions. Swarm members that fall within the safeguard distance of each other will plan their trajectories on different contours to avoid collisions within swarm. Simulation results demonstrate that E2Coop can save energy up to 51% compared with two state-of-the-art schemes.",
      topics: [
        "Planning for co-bots and human-robot teaming",
        "Planning activities, motions and paths",
        "Multi-agent planning and learning",
        "Manipulation task and/or motion planning",
      ],
      track: "robotics",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16012",
    },
    {
      UID: "76",
      title:
        "Verifying Plans and Scripts for Robotics Tasks Using Performance Level Profiles",
      authors: ["Alexander Kovalchuk", "Shashank Shekhar", "Ronen Brafman"],
      keyphrases:
        "Plan verification\n Probabilistic-Timed Automata\n Performance-Level Profiles",
      abstract:
        "Performance-Level Profiles (PLPs) were introduced as a type of action representation language suitable for capturing the behavior of functional code for robotics. This paper addresses two issues that PLPs raise: (1) Their formal semantics. (2) How to verify a script or a plan that schedule the use of components that have been documented by PLPs. We provide a formal semantics for PLPs by mapping them to probabilistic timed automata (PTAs). We also show how, given a script that refers to components specified using PLPs, we derive a PTA specification of the entire system. This PTA can be used to verify the system’s properties and answers queries about its behavior. Finally, we empirically evaluate an implemented system based on these ideas, demonstrating its scalability. The result is a pragmatic approach for verifying component-based robotic systems.",
      topics: ["Formal methods for robot planning and control"],
      track: "robotics",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16016",
    },
    {
      UID: "79",
      title:
        "Robust Opponent Modeling via Adversarial Ensemble Reinforcement Learning",
      authors: ["Macheng Shen", "Jonathan How"],
      keyphrases:
        "Opponent modeling\n Multiagent reinforcement learning\n Learning under uncertainty",
      abstract:
        "This paper studies decision-making in two-player scenarios where the type (e.g. adversary, neutral, or teammate) of the other agent (opponent) is uncertain to the decision-making agent (protagonist), which is an abstraction of security-domain applications. In these settings, the reward for the protagonist agent depends on the type of the opponent, but this is private information known only to the opponent itself, and thus hidden from the protagonist. In contrast, as is often the case, the type of the protagonist agent is assumed to be known to the opponent, and this information-asymmetry significantly complicates the protagonist's decision-making. In particular, to determine the best actions to take, the protagonist agent must infer the opponent type from the observations and agent modeling. To address this problem, this paper presents an opponent-type deduction module based on Bayes' rule. This inference module takes as input the imagined opponent's decision-making rule (opponent model) as well as the observed opponent's history of actions and states, and outputs a belief over the opponent's hidden type. A multiagent reinforcement learning approach is used to develop this game-theoretic opponent model through self-play, which avoids the expensive data collection step that requires interaction with a real opponent. Besides, this multiagent approach also captures the strategy interaction and reasoning between agents. In addition, we apply ensemble training to avoid over-fitting to a single opponent model during the training. As a result, the learned protagonist policy is also effective against unseen opponents. Experimental results show that the proposed game-theoretic modeling, explicit opponent type inference and the ensemble training significantly improves the decision-making performance over baseline approaches, and generalizes well against adversaries that have not been seen during the training.",
      topics: [
        "Planning under (non-probabilistic) uncertainty",
        "Reasoning about action and change",
        "Robust planning with incomplete models",
        "Multi-agent planning and learning",
        "Model representation and learning domain models for planning",
        "Description and modeling of novel application domains",
        "Distributed and multi-agent planning",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16006",
    },
    {
      UID: "84",
      title:
        "Hierarchical Freespace Planning for Navigation in Unfamiliar Worlds",
      authors: ["Raj Korpan", "Susan Epstein"],
      keyphrases:
        "hierarchical path planning\n exploration\n autonomous robot navigation",
      abstract:
        "Autonomous navigation in a large, complex space requires a spatial model, but the construction of a detailed map is costly. This paper demonstrates how two kinds of exploration support an alternative to metric mapping, one that facilitates robust hierarchical path planning. High-level exploration builds a global spatial model whose connectivity supports an effective, efficient, freespace planner, while low-level, target-driven exploration addresses areas where the global model lacks knowledge. Empirical results demonstrate successful and efficient travel in three challenging worlds.",
      topics: [
        "Robust planning with incomplete models",
        "Learning methods for robot planning",
        "Applications that involve a combination of learning with planning or scheduling",
        "Representation and acquisition of planning models",
        "Representations for learned models in planning",
        "Model-based reasoning",
        "Real-world robotic planning applications",
        "Planning with uncertainty in robotics",
        "Plan execution, failure detection and recovery",
        "Model representation and learning domain models for planning",
      ],
      track: "robotics",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16015",
    },
    {
      UID: "85",
      title: "Temporal Reasoning with Kinodynamic Networks",
      authors: [
        "Han Zhang",
        "Neelesh Tiruviluamala",
        "Sven Koenig",
        "T. K. Satish Kumar",
      ],
      keyphrases: "Temporal Reasoning\n Scheduling\n Multi-Agent Coordination",
      abstract:
        "Temporal reasoning is central to many AI applications. However, the existing algorithmic frameworks for temporal reasoning are not expressive enough to be applicable to robots with complex kinodynamic constraints typically described using differential equations. For example, while minimum and maximum velocity constraints can be encoded in Simple Temporal Networks (STNs), higher-order kinodynamic constraints cannot be represented in existing frameworks. In this paper, we present a novel framework for temporal reasoning called Kinodynamic Networks (KDNs). KDNs combine elements of existing temporal reasoning frameworks with the idea of Bernstein polynomials. The velocity profiles of robots are represented using Bernstein polynomials; and dynamic constraints on these velocity profiles can be converted to linear constraints on the to-be-determined coefficients of their Bernstein polynomials. We study KDNs for their attractive theoretical properties and apply them to the Multi-Agent Path Finding (MAPF) problem with higher-order kinodynamic constraints. We show that our approach is not only scalable but also yields smooth velocity profiles for all robots that can be executed by their controllers.",
      topics: ["Temporal planning", "Scheduling"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15987",
    },
    {
      UID: "86",
      title:
        "Guiding Robot Exploration in Reinforcement Learning via Automated Planning",
      authors: [
        "Yohei Hayamizu",
        "Saeid Amiri",
        "Kishan Chandan",
        "Keiki Takadama",
        "Shiqi Zhang",
      ],
      keyphrases: "Reinforcement Learning\n Automated Planning\n Robotics",
      abstract:
        "Reinforcement learning (RL) enables an agent to learn from trial-and-error experiences toward achieving long-term goals; automated planning aims to compute plans for accomplishing tasks using action knowledge. Despite their shared goal of completing complex tasks, the development of RL and automated planning has been largely isolated due to their different computational modalities. Focusing on improving RL agents' learning efficiency, we develop Guided Dyna-Q (GDQ) to enable RL agents to reason with action knowledge to avoid exploring less-relevant states. The action knowledge is used for generating artificial experiences from an optimistic simulation. GDQ has been evaluated in simulation and using a mobile robot conducting navigation tasks in a multi-room office environment. Compared with competitive baselines, GDQ significantly reduces the effort in exploration while improving the quality of learned policies.",
      topics: [
        "Reinforcement learning using planning (model-based, Bayesian, deep, etc.)",
        "Planning with uncertainty in robotics",
      ],
      track: "robotics",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16011",
    },
    {
      UID: "99",
      title: "OMCoRP: An Online Mechanism for Competitive Robot Prioritization",
      authors: ["Sankar Das", "Swaprava Nath", "Indranil Saha"],
      keyphrases: "Multi-Robot System\n Collision Avoidance\n Mechanism Design",
      abstract:
        "We propose a collision-avoiding mechanism for a group of robots moving on a shared workspace. Existing algorithms solve this problem either (a) in an offline manner using the source-destination information of all the robots or (b) in an online manner with cooperative robots. We take a paradigm shift to the setting with competitive robots, that may strategically reveal their urgency of reaching the destinations and design online mechanisms that take decisions on-the-fly, reducing the overhead of an offline planning.\n We propose a mechanism OMCoRP in this setting that ensures truthful revelation of the robots' priorities using principles of economic theory and provides locally efficient movement of the robots. It is free from collisions and deadlocks, and handles dynamic arrival of robots. In practice, this mechanism gives a smaller delay for robots of higher priority and scales well for a large number of robots without compromising on the path optimality too much.",
      topics: [
        "Multi-robot planning, scheduling/coordination, and execution",
        "Distributed and multi-agent planning",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15953",
    },
    {
      UID: "109",
      title:
        "Scheduling Stochastic Jobs - Complexity and Approximation Algorithms",
      authors: ["Liangde Tao", "Lin Chen", "Guochuan Zhang"],
      keyphrases:
        "approximation algorithm\n fixed parameter tractable\n inapproximability",
      abstract:
        "Uncertainty is an omnipresent issue in real-world optimization problems. This paper studies a fundamental problem concerning uncertainty, known as the $\\beta$-robust scheduling problem. Given a set of identical machines and a set of jobs whose processing times follow a normal distribution, the goal is to assign jobs to machines such that the probability that all the jobs are completed by a given common due date is maximized. We give the first systematic study on the complexity and algorithms for this problem. A strong negative result is shown by ruling out the existence of any polynomial-time algorithm with a constant approximation ratio for the general problem unless P=NP. On the positive side, we provide the first FPT-AS (fixed parameter tractable approximation scheme) parameterized by the number of different kinds of jobs, which is a common parameter in scheduling problems. It returns a solution arbitrarily close to the optimal solution, provided that the job processing times follow a few different types of distributions. We further complement the theoretical results by implementing our algorithm. The experiments demonstrate that by choosing an appropriate approximation ratio, the algorithm can efficiently compute a near-optimal solution.",
      topics: ["Scheduling", "Scheduling under uncertainty"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15982",
    },
    {
      UID: "118",
      title:
        "Autonomous Building of Structures in Unstructured Environments via AI Planning",
      authors: [
        "Jamie Roberts",
        "Santiago Franco",
        "Adam Stokes",
        "Sara Bernardini",
      ],
      keyphrases: "Task Planning\n 3D\n PDDL\n Robotics",
      abstract:
        "In this paper, we offer a novel AI planning representation, based on a Cartesian coordinate system, for enabling the autonomous operations of Multi-Robot Systems in 3D environments. Each robot in the system has to conform to unique actuation and connection constraints that create a complex set of valid configurations. Our approach allows Multi-Robot Systems to self-assemble themselves into larger structures via AI planning, with the overarching goal of providing structural capabilities in harsh and uncertain environments.\n \n In comparing four different PDDL (Planning Domain Definition Language) domain representations, we show that our novel formulation satisfies the practical requirements emerging from robot deployment in the real world, resulting in an AI planning system that is accurate and efficient. We scale up performance by implementing direct FDR (Finite Domain Representation) generation based on the best performing PDDL model, bypassing the PDDL-to-FDR translation used by the majority of modern planners. The proposed approach is general and can be applied to a broad range of AI problems involving reasoning in 3D spaces.",
      topics: [
        "Evaluation, testing, and validation of planning and scheduling applications",
        "Description and modeling of novel application domains",
        "Engineering issues in using planning and scheduling techniques",
        "Industry / application challenge problems",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15996",
    },
    {
      UID: "120",
      title:
        "LM-cut and Operator Counting Heuristics for Optimal Numeric Planning with Simple Conditions",
      authors: [
        "Ryo Kuroiwa",
        "Alexander Shleyfman",
        "Chiara Piacentini",
        "Margarita Castro",
        "J. Christopher Beck",
      ],
      keyphrases:
        "numeric planning\n heuristic search\n optimal planning\n LM-cut\n planning with resources\n operator-counting",
      abstract:
        "We consider optimal numeric planning with numeric conditions consisting of linear expressions of numeric state variables and actions that increase or decrease numeric state variables by constant quantities. We build on previous research to introduce a new variant of the numeric h^{max} heuristic based on the delete-relaxed version of such planning tasks. Although our h^{max} heuristic is inadmissible, it yields a numeric version of the classical LM-cut heuristic which is admissible. Further, we prove that our LM-cut heuristic neither dominates nor is dominated by the existing numeric heuristic h^{max}_{hbd}. We show that admissibility also holds when integrating the numeric cuts into the operator-counting (OC) heuristic producing an admissible numeric version of the OC heuristic. Through experiments, we demonstrate that both these heuristics compete favorably with the state-of-the-art heuristics: in particular, while sometimes expanding more nodes than other heuristics, numeric OC solves 19 more problem instances than the next closest heuristic.",
      topics: ["Planning in mixed discrete / continuous domains"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15964",
    },
    {
      UID: "123",
      title: "Width-Based Backward Search",
      authors: ["Chao Lei", "Nir Lipovetzky"],
      keyphrases: "classical planning\n search\n regression",
      abstract:
        "It has been shown recently that duality mapping is a viable strategy to turn progression (forward search) into regression (backward search), but the experimental results suggest that the dual versions of standard IPCs benchmarks are quite difficult to solve for heuristic search planners. We aim to study the performance of width based planners over regression. Our experiments show that width-based search can solve dual problems efficiently when the goal state is restricted to single fluent, but it becomes challenging when the goal state contains conjunctive fluents. We then show that the backward versions of best-first width search with the evaluation function f5, BFWS(f5), and its polynomial variant, k-BFWS, are not competitive with their forward versions, but can be orthogonal over the IPC benchmarks. Hence, we propose a front-to-end bidirectional search k-BDWS and its front-to-front variant by integrating forward and backward k-BFWS with the additional intersection check between expanded states whose novelty is 1 in the opposite close list. Practical findings on the challenges of regression in classical planning are briefly discussed.",
      topics: ["Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15965",
    },
    {
      UID: "128",
      title: "Delete-Relaxation Heuristics for Lifted Classical Planning",
      authors: [
        "Augusto B. Corrêa",
        "Guillem Francès",
        "Florian Pommerening",
        "Malte Helmert",
      ],
      keyphrases:
        "lifted planning\n additive heuristic\n delete-relaxation\n classical planning\n grounding\n datalog",
      abstract:
        "Recent research in classical planning has shown the importance of search techniques that operate directly on the lifted representation of the problem, particularly in domains where the ground representation is prohibitively large. In this paper, we show how to compute the additive and maximum heuristics from the lifted representation of a problem. We do this by adapting well-known reachability analysis techniques based on a Datalog formulation of the delete relaxation of the problem. Our adaptation allows us to obtain not only the desired heuristic value, but also other useful heuristic information such as helpful actions. Our empirical evaluation shows that our lifted version of the additive heuristic is competitive with its ground counterpart on most of the standard international competition benchmarks, and significantly outperforms other state-of-the-art lifted heuristic methods in the literature.",
      topics: ["Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15951",
    },
    {
      UID: "130",
      title: "Knowledge Compilation for Nondeterministic Action Languages",
      authors: ["Sergej Scheck", "Alexandre Niveau", "Bruno Zanuttini"],
      keyphrases:
        "knowledge compilation\n action languages\n succinctness\n propositional planning\n planning domain definition language\n STRIPS",
      abstract:
        "We study different languages for representing nondeterministic actions in planning from the point of view of knowledge compilation. Precisely, we consider succintness issues (how succinct is the description of an action in each language?) and complexity issues (tractability or hardness of several queries which arise naturally in planning and belief tracking). We study an abstract, nondeterministic version of PDDL, nondeterministic conditional STRIPS, the language NNFAT of NNF action theories, and the language NPDDLseq obtained by adding a sequence operator to nondeterministic PDDL. We show that these languages have different succinctness and different complexity even for the most natural queries.",
      topics: [
        "Planning under (non-probabilistic) uncertainty",
        "Complexity analysis",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15975",
    },
    {
      UID: "132",
      title: "Flexible FOND Planning with Explicit Fairness Assumptions",
      authors: [
        "Ivan Rodriguez",
        "Blai Bonet",
        "Sebastian Sardina",
        "Hector Geffner",
      ],
      keyphrases:
        "FOND planning\n Fairness semantics\n Qualitative numerical planning\n Generalized planning\n Answer set programming",
      abstract:
        "We consider the problem of reaching a propositional goal condition in fully-observable non-deterministic (FOND) planning under a general class of fairness assumptions that are given explicitly. The fairness assumptions are of the form A/B for disjoints sets of actions A and B that say that state trajectories that contain infinite occurrences of an action a from A and finite occurrence of actions from B, must also contain infinite occurrences of a followed by each one of its possible outcomes. The infinite trajectories that violate this condition are deemed as unfair. The solutions of a FOND problem with fairness assumptions of this form are policies for which all the fair trajectories reach a goal state. We show that strong and strong cyclic FOND planning, as well as QNP planning, a planning model introduced recently for generalized planning, are all special cases of FOND planning with fairness assumptions of this form, which we call FOND+ planning, which can also combine the adversarial, fair, and conditionally fair actions underlying these models. FOND+ planning is a special case of LTL planning that combines the syntax and the complexity of FOND planning with some of the versatility of LTL for expressing fairness constraints. A planner for FOND+ planning is implemented by reducing FOND-planning to answer set programs, a convenient and high-level alternative to SAT, using the facilities provided by the Clingo system. The performance of the resulting planner is evaluated in comparison with strong, strong cyclic, and QNP planners in problems where they apply, and with LTL synthesis tools on others.",
      topics: [
        "Planning under (non-probabilistic) uncertainty",
        "Adversarial planning",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15973",
    },
    {
      UID: "134",
      title:
        "Pattern Databases for Goal-Probability Maximization in Probabilistic Planning",
      authors: [
        "Thorsten Klößner",
        "Álvaro Torralba",
        "Marcel Steinmetz",
        "Jörg Hoffmann",
      ],
      keyphrases:
        "Probabilistic Planning\n Goal-Probability Maximization\n Probabilistic Heuristic Search\n Pattern Databases\n Probabilistic Abstractions",
      abstract:
        "Heuristic search algorithms for goal-probability maximization\n (MaxProb) have been known since a decade. Yet prior work on heuristic\n functions for MaxProb relies on determinization, not actually taking\n the probabilities into account. Here we begin to fix this, by\n introducing MaxProb pattern databases (PDB). We show that, for the\n special case of PDBs in contrast to more general abstractions,\n abstract transitions have a unique probability so that the abstract\n planning task is still an MDP. The resulting heuristic functions are\n admissible, i.e., they upper-bound the real goal probability. We\n identify conditions allowing to admissibly multiply heuristic values\n across several PDBs. Our experiments show that even non-probabilistic\n PDB heuristics often outperform previous MaxProb heuristics, and that\n our new probabilistic PDBs can in turn yield significant performance\n gains over non-probabilistic ones.",
      topics: ["Probabilistic planning, MDPs and POMDPs"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15963",
    },
    {
      UID: "139",
      title: "Dantzig-Wolfe Decomposition for Cost Partitioning",
      authors: [
        "Florian Pommerening",
        "Thomas Keller",
        "Valentina Halasi",
        "Jendrik Seipp",
        "Silvan Sievers",
        "Malte Helmert",
      ],
      keyphrases:
        "cost partitioning\n Dantzig-Wolfe decomposition\n classical planning\n optimal planning\n heuristic search\n abstractions\n problem decomposition",
      abstract:
        "Optimal cost partitioning can produce high quality heuristic estimates even from small abstractions. It can be computed with a linear program (LP) but the size of this LP often makes this impractical. Recent work used Lagrangian decomposition to speed up the computation. Here we use a different decomposition technique called Dantzig-Wolfe decomposition to tackle the problem. This gives new insights into optimal cost partitioning and has several advantages over Lagrangian decomposition: our method has an explicit stopping condition that detects when a cost partitioning is optimal; it can deal with general cost functions; and it does not consider abstractions in the linear program that do not contribute to the heuristic value. We also show the advantage of the method empirically and investigate several improvements that are useful for all cost partitioning methods.",
      topics: ["OR techniques", "Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15971",
    },
    {
      UID: "140",
      title:
        "The Consistent Case in Bidirectional Search and a Bucket-to-Bucket Algorithm as a Middle Ground between Front-to-End and Front-to-Front",
      authors: ["Vidal Alcázar"],
      keyphrases: "bidirectional\n heuristic\n consistency",
      abstract:
        "Recently, the proposal of individual bounds that use heuristic inaccuracies in front-to-end bidirectional search has improved the state of the art. These bounds apply to pairs of states as well, so we create a new definition of must-expand pairs when consistency is exploited explicitly. Furthermore, the lower bound of such pairs can also be seen as an admissible estimation of the lowest cost of any path between both states thanks to its formulation as a triangle inequality. This cost depends only on the g values and the heuristic estimates and not on the states themselves. Therefore, by grouping nodes by these values in buckets, such an estimate can be computed for sets of nodes and not individual pairs without loss of information. This bucket-to-bucket computation, although as expensive as front-to-front in the worst case, allows implementing a near-optimal algorithm with respect to front-to-end algorithms that use heuristic inaccuracies. Experiments show that bucket-to-bucket algorithms are the state of the art in the Pancake Problem and offer an insightful measurement of how far front-to-end algorithms are from their theoretical limit.",
      topics: ["Search techniques"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15941",
    },
    {
      UID: "143",
      title: "Decentralized Refinement Planning and Acting",
      authors: ["Ruoxi Li", "Sunandita Patra", "Dana Nau"],
      keyphrases:
        "Multi-agent systems\n Decentralized cooperative agents\n Hierarchical task refinement\n Integrating acting and planning\n Operational models\n Online planning",
      abstract:
        "We describe Dec-RPAE, a system for decentralized multi-agent acting and planning in partially observable and nondeterministic environments. The system includes both an acting component and an online planning component. The acting component is similar to RAE, a well-known acting engine, but incorporates changes that enable it to be used by autonomous agents working independently in a collaborative setting.\n Agents can communicate with each other to exchange information about their states, tasks, goals and plans in order to cooperatively succeed in missions. Communication is not always guaranteed or free, and agents need to reason about strategies to achieve optimal success and efficiency in missions under various constraints and with possibility of failures. \n Each agent runs a local copy of Dec-RPAE, with a set of hierarchical refinement methods using operational models that specify various ways to accomplish its designated tasks. To perform actions, the agent uses Dec-RPAE's acting component to execute the methods in the agent's environment. To advise the acting component on which method to execute, the planning component repeatedly does Monte Carlo simulations of the methods to estimate their potential outcomes.\n Our experimental results demonstrate that this online planning process is useful for improving the agents’ performance in cooperative missions.",
      topics: [
        "HTN and knowledge-based planning",
        "Distributed and multi-agent scheduling",
        "Online/real-time planning and scheduling",
        "Multi-robot planning, scheduling/coordination, and execution",
        "Distributed and multi-agent planning",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15966",
    },
    {
      UID: "144",
      title: "Abstraction-Guided Policy Recovery from Expert Demonstrations",
      authors: [
        "Canmanie T. Ponnambalam",
        "Frans A. Oliehoek",
        "Matthijs T. J. Spaan",
      ],
      keyphrases:
        "imitation learning\n behavior cloning\n state abstraction\n offline reinforcement learning",
      abstract:
        "The goal in behavior cloning is to extract meaningful information from expert demonstrations and reproduce the same behavior autonomously. However, the available data is unlikely to exhaustively cover the potential problem space. As a result, the quality of automated decision making is compromised when out-of-distribution states are encountered, possibly due to unforeseen or unmodelled effects in the environment. Our novel approach RECO uses only the offline data available to recover a behavioral cloning agent from unknown states. Given expert trajectories, RECO learns both an imitation policy and recovery policy. Our contribution is a method for learning this recovery policy that steers the agent back to the trajectories in the data set from unknown states. While there is, per definition, no data available to learn the recovery policy, we exploit abstractions to generalize beyond the available data and generate a simulator for the recovery problem. The simulator is then used to solve the recovery problem by traditional methods. When the most appropriate abstraction for the given data is unknown, our method selects the best recovery policy from a set generated by several candidate abstractions. In tabular domains, where we assume an agent must call for help if it is in an unknown state, we show how RECO results in drastically fewer calls to a supervisor without compromising solution quality and with relatively few trajectories provided by an expert. We also introduce a continuous adaptation of our method and demonstrate the ability of RECO to recover an agent from states where its supervised-learning-based imitation policy would otherwise fail.",
      topics: [
        "Reinforcement learning using planning (model-based, Bayesian, deep, etc.)",
        "Learning in planning and scheduling",
        "Robust planning with incomplete models",
        "Plan execution, failure detection and recovery",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16004",
    },
    {
      UID: "145",
      title:
        "Predicted Composite Signed-Distance Fields for Real-Time Motion Planning in Dynamic Environments",
      authors: ["Mark Finean", "Wolfgang Merkt", "Ioannis Havoutis"],
      keyphrases:
        "Motion and path planning\n Collision avoidance\n Perception for grasping and manipulation\n Dynamic environments\n Moving obstacles\n Trajectory prediction",
      abstract:
        "We present a novel framework for motion planning in dynamic environments that accounts for the predicted trajectories of moving objects. We explore the use of composite signed-distance fields in motion planning and detail how they can be used to both generate signed-distance fields (SDFs) in real-time and enable SDF-based motion planners to incorporate predicted obstacle motions; to achieve this, we introduce the concept of `predicted signed-distance fields’. We benchmark our approach of using composite SDFs against performing exact SDF calculations on the workspace occupancy grid. Our proposed technique generates predictions substantially faster and typically exhibits an 81-97% reduction in time for subsequent predictions. We integrate our framework with the GPMP2 motion planner to demonstrate a full implementation of our approach in real-time, enabling a 7-DoF Panda manipulator to smoothly avoid a moving obstacle in simulation and hardware experiments.",
      topics: [
        "Representation and acquisition of planning models",
        "Real-world robotic planning applications",
        "Manipulation task and/or motion planning",
      ],
      track: "robotics",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16010",
    },
    {
      UID: "146",
      title: "Endomorphisms of Lifted Planning Problems",
      authors: ["Rostislav Horcik", "Daniel Fišer"],
      keyphrases:
        "Lifted pruning\n Endomorphism\n Lifted mutex group\n PDDL\n Symmetry",
      abstract:
        "Classical planning tasks are usually modelled in the PDDL which is a schematic language based on first-order logic. Nevertheless, most of the current planners turn this first-order representation into a propositional one via the grounding process. It is well known that the grounding process may cause an exponential blowup. Therefore it is important to detect which grounded atoms are redundant in a sense that they are not necessary for finding a plan and therefore the grounding process does not need to generate them. This is usually done by a relaxed reachability analysis, which can be improved by employing structural symmetries. Symmetries are bijective self-maps preserving the structure of the PDDL task. In this paper, we introduce a new method which is based on self-maps preserving the structure but which need not be bijective. We call these maps PDDL endomorphisms and we show that they can be used for pruning of redundant objects even if they appear in a reachable atom. We formulate the computation of endomorphisms as a constraint satisfaction problem (CSP) that can be solved by an off-the-shelf CSP solver.",
      topics: ["Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15960",
    },
    {
      UID: "147",
      title:
        "Data-Driven Decision-Theoretic Planning using Recurrent Sum-Product-Max Networks",
      authors: ["Hari Tatavarti", "Prashant Doshi", "Layton Hayes"],
      keyphrases:
        "machine learning\n RDDL\n sequential decision making\n tractable probabilistic models",
      abstract:
        "Sum-product networks (SPN) are knowledge compilation models and are related to other graphical models for efficient probabilistic inference such as arithmetic circuits and AND/OR graphs. Recent investigations into generalizing SPNs have yielded sum-product-max networks(SPMN) which offer a data-driven alternative for decision making that has predominantly relied on handcrafted models. However, SPMNs are not suited for decision-theoretic planning which involves sequential decision making over multiple time steps. In this paper, we present recurrent SPMNs (RSPMN) that learn from and model decision-making data over time. RSPMNs utilize a template network that is unfolded as needed depending on the length of the data sequence. This is significant as RSPMNs not only inherit the benefits of SPNs in being data driven and mostly tractable, they are also well suited for planning problems. We establish conditions on the template network, which guarantee that the resulting SPMN is valid, and present a structure learning algorithm to learn a sound template. RSPMNs learned on a testbed of data sets, some generated using RDDLSim, yield MEUs and policies that are close to the optimal on perfectly-observed domains and easily improve on a recent batch-constrained RL method.",
      topics: [
        "Model representation and learning domain models for planning",
        "Learning domain and action models for planning",
        "Representations for learned models in planning",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16009",
    },
    {
      UID: "151",
      title:
        "On the Compilability and Expressive Power of State-Dependent Action Costs",
      authors: [
        "David Speck",
        "David Borukhson",
        "Robert Mattmüller",
        "Bernhard Nebel",
      ],
      keyphrases:
        "classical planning\n state-dependent action costs\n compilability",
      abstract:
        "While state-dependent action costs are practically relevant and have been studied before, it is still unclear if they are an essential feature of planning tasks. In this paper, we study to what extent state-dependent action costs are an essential feature by analyzing under which circumstances they can be compiled away. We give a complete classification for all combinations of action cost functions and possible cost measures for the compilations.\n Our theoretical results show that if both task sizes and plan lengths are to be preserved polynomially, then the boundary between compilability and non-compilability lies between FP and FPSPACE computable action cost functions (under a mild assumption on the polynomial hierarchy). Preserving task sizes polynomially and plan lengths linearly at the same time is impossible.",
      topics: ["Classical planning", "Complexity analysis"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15981",
    },
    {
      UID: "152",
      title:
        "Learning Heuristic Selection with Dynamic Algorithm Configuration",
      authors: [
        "David Speck",
        "André Biedenkapp",
        "Frank Hutter",
        "Robert Mattmüller",
        "Marius Lindauer",
      ],
      keyphrases:
        "satisficing planning\n heuristic search\n heuristic selection\n learning heuristics",
      abstract:
        "A key challenge in satisficing planning is to use multiple heuristics within one heuristic search. An aggregation of multiple heuristic estimates, for example by taking the maximum, has the disadvantage that bad estimates of a single heuristic can negatively affect the whole search. Since the performance of a heuristic varies from instance to instance, approaches such as algorithm selection can be successfully applied. In addition, alternating between multiple heuristics during the search makes it possible to use all heuristics equally and improve performance. However, all these approaches ignore the internal search dynamics of a planning system, which can help to select the most helpful heuristics for the current expansion step. We show that dynamic algorithm configuration can be used for dynamic heuristic selection which takes into account the internal search dynamics of a planning system. Furthermore, we prove that this approach generalizes over existing approaches and that it can exponentially improve the performance of the heuristic search. To learn dynamic heuristic selection, we propose an approach based on reinforcement learning and show empirically that domain-wise learned policies, which take the internal search dynamics of a planning system into account, can exceed existing approaches.",
      topics: [
        "Classical planning",
        "Learning effective heuristics and other forms of control knowledge",
        "Learning to improve the effectiveness of planning & scheduling systems",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16008",
    },
    {
      UID: "153",
      title: "Exploiting Cyclic Dependencies in Landmark Heuristics",
      authors: ["Clemens Büchner", "Thomas Keller", "Malte Helmert"],
      keyphrases:
        "optimal planning\n landmarks\n classical planning\n heuristic search\n linear program",
      abstract:
        "Landmarks of a planning task denote properties that must be satisfied\n by all plans. Existing landmark heuristics exploit that each landmark\n must be achieved at least once. However, if the orderings between the\n landmarks induce cyclic dependencies, one of the landmarks in each\n cycle must be achieved an additional time. We propose two novel\n heuristics for cost-optimal planning that consider cyclic dependencies\n between landmarks in addition to the cost for achieving all landmarks\n once.\n \n We show that our heuristics dominate the minimum hitting set solution\n over any set of landmarks as well as h+ if all delete-relaxation\n landmarks are considered. An experimental evaluation on benchmarks\n from the International Planning Competition reveals that exploiting\n cyclic dependencies pays off.",
      topics: ["OR techniques", "Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15948",
    },
    {
      UID: "163",
      title: "Automated design of fMRI paradigms",
      authors: ["Katherine Esper", "Felipe Meneguzzi"],
      keyphrases: "PDDL+\n Neuroscience Domains\n Novel Planning Domains",
      abstract:
        "Neuroimaging techniques have been widely used in recent decades to assess brain activation patterns for neuroscience. Task design is the most important challenge for neuroimaging studies, to achieve the best modeling for assessing brain patterns within and across subjects. Specifically, functional magnetic resonance imaging (fMRI) experiments rely on the precise and effective design of sequences of stimuli indented to activate specific brain regions (i.e. paradigm design). In this paper, we use PDDL+ to model fMRI paradigms so that neuroscientists can use automated planning to design neuroimaging paradigms in a declarative way. Planning neuroimaging paradigms is especially important for functional studies and presurgical planning. The former should help to ensure an experimental design that allows the analysis of the brain regions that are interesting in the study. The latter should help surgeons select the correct stimuli for a presurgical, non-invasive, exploration of the cognitive functions that might be affected by debridement of brain lesions.",
      topics: [
        "Planning in mixed discrete / continuous domains",
        "Integration of multiple planning and scheduling techniques, or of planning and scheduling techniques with techniques from other areas or disciplines",
        "Description and modeling of novel application domains",
        "Temporal planning",
      ],
      track: "applications",
      url: "",
    },
    {
      UID: "165",
      title:
        "Scalable Rail Planning and Replanning: Winning the 2020 Flatland Challenge",
      authors: [
        "Jiaoyang Li",
        "Zhe Chen",
        "Yi Zheng",
        "Shao-Hung Chan",
        "Daniel Harabor",
        "Peter J. Stuckey",
        "Hang Ma",
        "Sven Koenig",
      ],
      keyphrases:
        "Multi-agent path finding\n Rail planning\n Robust planning under uncertainty",
      abstract:
        "Multi-Agent Path Finding (MAPF) is the combinatorial problem of finding collision-free paths for multiple agents on a graph. This paper describes MAPF-based software for solving train planning and replanning problems on large-scale railway networks under uncertainty. The software recently won the 2020 Flatland Challenge, a NeurIPS competition trying to determine how to efficiently manage dense traffic on rail networks. The software incorporates many state-of-the-art MAPF, or in general, optimization technologies, such as prioritized planning, large neighborhood search, safe interval path planning, minimum communication policies, parallel computing, and simulated annealing. It can plan collision-free paths for thousands of trains within a few minutes and deliver deadlock-free actions in real-time during execution.",
      topics: [
        "Industry / application challenge problems",
        "Experiences in development, deployment, and maintenance of planning and scheduling applications",
        "Planning activities, motions and paths",
        "Integration of multiple planning and scheduling techniques, or of planning and scheduling techniques with techniques from other areas or disciplines",
        "Search techniques",
        "Distributed and multi-agent planning",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15994",
    },
    {
      UID: "180",
      title:
        "DeepFreight: A Model-free Deep-reinforcement-learning-based Algorithm for Multi-transfer Freight Delivery",
      authors: [
        "Jiayu Chen",
        "Abhishek K. Umrawal",
        "Tian Lan",
        "Vaneet Aggarwal",
      ],
      keyphrases:
        "Multi-agent Reinforcement Learning\n Freight Delivery\n Fleet Management\n Intelligent Transportation System",
      abstract:
        "With the freight delivery demands and shipping costs increasing rapidly, intelligent control of fleets to enable efficient and cost-conscious solutions becomes an important problem. In this paper, we propose DeepFreight, a model-free deep-reinforcement-learning-based algorithm for multi-transfer freight delivery, which includes two closely-collaborative components: truck-dispatch and package-matching. Specifically, a deep multi-agent reinforcement learning framework called QMIX is leveraged to learn a dispatch policy, with which we can obtain the multi-step joint vehicle dispatch decisions for the fleet with respect to the delivery requests. Then an efficient multi-transfer matching algorithm is executed to assign the delivery requests to the trucks. Also, DeepFreight is integrated with a Mixed-Integer Linear Programming optimizer for further optimization. The evaluation results shows that the proposed system is highly scalable and ensures a 100% delivery success while maintaining low delivery-time and fuel consumption.",
      topics: [
        "Distributed and multi-agent scheduling",
        "Multi-objective planning and scheduling",
        "Industry / application challenge problems",
        "Learning to improve the effectiveness of planning & scheduling systems",
        "Applications that involve a combination of learning with planning or scheduling",
        "Learning in planning and scheduling",
        "Multi-agent planning and learning",
        "Probabilistic planning, MDPs and POMDPs",
        "Reinforcement learning using planning (model-based, Bayesian, deep, etc.)",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15998",
    },
    {
      UID: "187",
      title: "Approximate Novelty Search",
      authors: [
        "Anubhav Singh",
        "Nir Lipovetzky",
        "Miquel Ramirez",
        "Javier Segovia",
      ],
      keyphrases: "AI Planning\n Width-based Planning\n Satisficing Planners",
      abstract:
        "Width-based search algorithms seek plans by prioritizing states according to a suitably defined measure of novelty, that maps states into a set of novelty categories. Space and time complexity to evaluate state novelty is known to be exponential on the cardinality of the set. We present novel methods to obtain polynomial approximations of novelty and width-based search. First, we approximate novelty computation via random sampling and Bloom filters, reducing the runtime and memory footprint. Second, we approximate the best-first search using an adaptive policy that decides whether to forgo the expansion of nodes in the open list. These two techniques are integrated into existing width-based algorithms, resulting in new planners that perform significantly better than other state-of-the-art planners over benchmarks from the International Planning Competitions.",
      topics: ["Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15980",
    },
    {
      UID: "190",
      title:
        "A Simulator-based Planning Framework for Optimizing Autonomous Greenhouse Control Strategy",
      authors: [
        "Zhicheng An",
        "Xiaoyan Cao",
        "Yao Yao",
        "Wanpeng Zhang",
        "Lanqing Li",
        "Yue Wang",
        "Shihui Guo",
        "Dijun Luo",
      ],
      keyphrases:
        "Simulator-based planning\n Greenhouse control strategy\n Artificial intelligence\n Reinforcement learning\n Heuristic algorithm",
      abstract:
        "The rapidly growing global population presents challenges and demands for efficient production of healthy fresh food. Autonomous greenhouse equipped with standard sensors and actuators (such as heating and lighting) which enables control of indoor climate for crop production, contributes to producing higher yields. However, it requires skilled and expensive labor, as well as a large amount of energy. An autonomous greenhouse control strategy, powered by AI algorithms by optimizing the yields and resource use simultaneously, offers an ideal solution to the dilemma. \n In this paper, we propose a two-stage planning framework to automatically optimize greenhouse control setpoints given specific outside weather conditions. Firstly, we take advantage of cumulative planting data and horticulture knowledge to build a multi-modular simulator using neural networks, to simulate climate change and crop growth in the greenhouse. Secondly, two AI algorithms (reinforcement learning and heuristic algorithm) as planning methods are applied to obtain optimal control strategies based on the simulator.\n We evaluate our framework on a cherry-tomato planting dataset and demonstrate that the simulator is able to simulate greenhouse planting processes with high accuracy and fast speed. Moreover, the control strategies produced by the AI algorithms all obtain superhuman performance, in particular, significantly outperform all teams of the second “Autonomous Greenhouse Challenge” in terms of net profits.",
      topics: [
        "Integration of multiple planning and scheduling techniques, or of planning and scheduling techniques with techniques from other areas or disciplines",
        "Description and modeling of novel application domains",
        "Industry / application challenge problems",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15989",
    },
    {
      UID: "191",
      title: "A Competitive Analysis of Online Multi-Agent Path Finding",
      authors: ["Hang Ma"],
      keyphrases:
        "multi-agent path finding\n competitive analysis\n online algorithms",
      abstract:
        "We study online Multi-Agent Path Finding (MAPF), where new agents are constantly revealed over time and all agents must find collision-free paths to their given goal locations. We classify online MAPF algorithms into different categories based on (1) controllability (the set of agents that they can plan paths for at each time) and (2) rationality (the quality of paths they plan) and study the relationships between them. We perform a competitive analysis for each category of online MAPF algorithms with respect to commonly used objective functions. We show that a naive algorithm that routes newly revealed agents one at a time in sequence achieves a competitive ratio that is asymptotically bounded from both below and above by the number of agents with respect to flowtime and makespan. We then show a counter-intuitive result that, if rerouting of previously revealed agents is not allowed, any rational online MAPF algorithms, including ones that plan optimal paths for all newly revealed agents, have the same asymptotic competitive ratio as the naive algorithm, even on 2D 4-neighbor grids. We also derive constant lower bounds of the competitive ratio of any rational online MPAF algorithms that allow rerouting. The results thus provide theoretical insights into the effectiveness of using MAPF algorithms in an online setting for the first time.",
      topics: [
        "Online/real-time planning and scheduling",
        "Planning activities, motions and paths",
        "Distributed and multi-agent planning",
        "Complexity analysis",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15967",
    },
    {
      UID: "201",
      title:
        "Learning and Exploiting Shaped Reward Models for Large Scale Multiagent RL",
      authors: ["Arambam James Singh", "Akshat Kumar", "Hoong Chuin Lau"],
      keyphrases:
        "Multiagent Sequential Decision Making\n Decentralized POMDPs\n Multiagent Reinforcement Learning",
      abstract:
        "Many real world systems involve interaction among large number of agents to achieve a common goal, for example, air traffic control. Several model-free RL algorithms have been proposed for such settings. A key limitation is that the empirical reward signal in model-free case is not very effective in addressing the \\textit{multiagent credit assignment} problem, which determines an agent's contribution to the team's success. This results in lower solution quality and high sample complexity. To address this, we contribute (a) an approach to learn a differentiable \\textit{reward model} for both continuous and discrete action setting by exploiting the collective nature of interactions among agents, a feature commonly present in large scale multiagent applications; (b) a \\textit{shaped} reward model analytically derived from the learned reward model to address the key challenge of credit assignment; (c) a model-based multiagent RL approach that integrates shaped rewards into well known RL algorithms such as policy gradient, soft-actor critic. Empirically, our learned reward models are accurate than previous methods. Our approaches achieve better solution quality than previous approaches on both synthetic and real world instances of the air-traffic control problem, and cooperative navigation with large number of agents.",
      topics: [
        "Multi-agent planning and learning",
        "Probabilistic planning, MDPs and POMDPs",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16007",
    },
    {
      UID: "206",
      title: "Contracting and Compressing Shortest Path Databases",
      authors: [
        "Bojie Shen",
        "Muhammad Aamir Cheema",
        "Daniel Harabor",
        "Peter Stuckey",
      ],
      keyphrases:
        "Shortest Path\n Compressed Path Databases\n Contraction Hierarchies",
      abstract:
        "Compressed Path Databases (CPD) are powerful database-driven methods for shortest path extraction in grids and in spatial networks. Yet CPDs have two main drawbacks: (1) constructing the database requires an offline all-pairs precompute, which can sometimes be prohibitive and; (2) extracting a path requires a number of database lookups equal to its number of edges, which can be costly in terms of time. In this work, we consider how CPD methods can be improved and enhanced by: (i) contracting the input graph before preprocessing and; (ii) by limiting the preprocessing step to only a selected subset of graph nodes. We also describe a new bi-directional path extraction algorithm which we call CH-CPD. In a range of experiments on road networks, we show that CH-CPD substantially improves on conventional CPDs in terms of preprocessing costs and online performance. We also report convincing query time improvements against a range of methods from the recent literature.",
      topics: ["Planning activities, motions and paths", "Search techniques"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15977",
    },
    {
      UID: "208",
      title:
        "Integrating Knowledge Compilation with Reinforcement Learning for Routes",
      authors: ["Jiajing Ling", "Kushagra Chandak", "Akshat Kumar"],
      keyphrases:
        "multiagent sequential decision making\n decentralized POMDPs\n Reinforcement Learning\n Knowledge Representation and Reasoning",
      abstract:
        "Combinatorial domains with constraints remain challenging in sequential decision-making processes as random exploration by agent(s) in such settings is unlikely to generate useful reward signals. We address cooperative multiagent pathfinding under uncertainty and partial observability where agents move from their respective sources to destinations while also satisfying constraints (e.g., visiting landmarks). Our contributions include: (1) compiling static domain knowledge such as underlying graph connectivity and constraints using propositional logic based decision diagrams, (2) developing modular techniques to integrate such knowledge with deep reinforcement learning (RL) algorithms, and (3) developing fast algorithms to query the compiled knowledge for accelerated simulation of RL. Empirically, our approach can tractably represent the domain constraints and improve the sample complexity and solution quality on several instances.",
      topics: [
        "Representations for learned models in planning",
        "Multi-agent planning and learning",
        "Probabilistic planning, MDPs and POMDPs",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16002",
    },
    {
      UID: "209",
      title:
        "Towards Time-Optimal Any-Angle Path Planning With Dynamic Obstacles",
      authors: ["Konstantin Yakovlev", "Anton Andreychuk"],
      keyphrases:
        "path planning\n pathfinding\n any-angle\n SIPP\n dynamic obstacles",
      abstract:
        "Path finding is well-studied problem in AI which is often framed as graph search. Any-angle path finding is a technique that augments initial graph with additional edges to build shorter paths to the goal. Indeed, optimal algorithms for any-angle path finding in static environments exist. However, when dynamic obstacles are present and the objective to be minimized is time, these algorithms can no longer guarantee optimality. In this work we elaborate on why this is the case and what techniques can be used to solve the problem optimally. We present two algorithms, grounded in the same idea, that can obtain provably optimal solutions of the considered problem. We believe these algorithms are the first of that kind. We conduct a thorough empirical evaluation showing that in certain setups one of the suggested methods might be as fast as the greedy non-optimal solver while providing solutions of a better quality. In some (rare) cases the difference in cost is up to 76\\%, while on average it is lower than one percent (the same cost difference is typically observed between optimal and greedy any-angle solvers in static environments).",
      topics: [
        "Planning for explainable machine learning",
        "Search techniques",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15986",
    },
    {
      UID: "215",
      title: "Translations from Discretised PDDL+ to Numeric Planning",
      authors: ["Francesco Percassi", "Enrico Scala", "Mauro Vallati"],
      keyphrases: "Hybrid PDDL+ Planning\n Translation\n Numeric Planning",
      abstract:
        "Hybrid PDDL+ models are amongst the most advanced models of systems and the resulting problems are notoriously difficult for planning engines to cope with. An additional limiting factor for the exploitation of PDDL+ approaches in real-world applications is the restricted number of domain-independent planning engines that can reason upon those models.\n \n With the aim of deepening the understanding of PDDL+ models, in this work we study a novel mapping between a time discretisation of PDDL+ and numeric planning as for PDDL2.1 (level 2). The proposed mapping not only clarifies the relationship between these two formalisms, but also enables the use of a wider pool of engines, thus fostering the use of hybrid planning in real-world applications. Our experimental analysis shows the usefulness of the proposed translation, and demonstrates the potential of the approach for improving the solvability of complex PDDL+ instances.",
      topics: ["Planning in mixed discrete / continuous domains"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15969",
    },
    {
      UID: "219",
      title:
        "On Planning with Qualitative State-Trajectory Constraints in PDDL3 by Compiling them Away",
      authors: [
        "Luigi Bonassi",
        "Alfonso Emilio Gerevini",
        "Francesco Percassi",
        "Enrico Scala",
      ],
      keyphrases: "Compilation\n State-trajectory constraints\n PDDL3.0",
      abstract:
        "We tackle the problem of classical planning with qualitative state-trajectory constraints as those that can be expressed in \\pddlthree. These kinds of constraints allow a user to formally specify which temporal properties a plan has to conform with through a class of LTL formulae. We study a compilation-based approach that, without resorting to automata for representing and dealing with such properties, takes a \\pddlthree problem and generates a classical planning problem with conditional effects that is solvable iff so is the \\pddlthree problem. Our compilation leverages from the notion of regression for planning with conditional effects, and shows how this can be used to rework preconditions and conditional effects in a way to (i) prohibit executions that irreversibly violate temporal constraints (ii) promote executions that traverse those necessary subgoals implied by the temporal specification. \n An extensive experimental analysis shows that our approach performs better than \n both the native and other compilation-based approaches on the majority of the benchmark domains.",
      topics: ["Classical planning", "HTN and knowledge-based planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15945",
    },
    {
      UID: "222",
      title: "Improving AlphaZero Using Monte-Carlo Graph Search",
      authors: ["Johannes Czech", "Patrick Korus", "Kristian Kersting"],
      keyphrases:
        "Monte-Carlo Tree Search\n Graph Search\n Directed Acyclic Graphs\n Upper Confidence bounds for Trees\n Epsilon-Greedy Search\n Chess\n Crazyhouse\n AlphaZero",
      abstract:
        "The AlphaZero algorithm has been successfully applied in a range of discrete domains, most notably board games. It utilizes a neural network, that learns a value and policy function to guide the exploration in a Monte-Carlo Tree Search. Although many search improvements have been proposed for Monte-Carlo Tree Search in the past, most of them refer to an older variant of the Upper Confidence bounds for Trees algorithm that does not use a policy for planning. We introduce a new, improved search algorithm for AlphaZero which generalizes the search tree to a directed acyclic graph. This enables information flow across different subtrees and greatly reduces memory consumption. Along with Monte-Carlo Graph Search, we propose a number of further extensions, such as the inclusion of Epsilon-Greedy exploration, a revised terminal solver and the integration of domain knowledge as constraints. In our evaluations, we use the CrazyAra engine on chess and crazyhouse as examples to show that these changes bring significant improvements to AlphaZero.",
      topics: [
        "Probabilistic planning, MDPs and POMDPs",
        "Applications that involve a combination of learning with planning or scheduling",
        "Learning in planning and scheduling",
        "Applications and case studies",
        "Search techniques",
        "Adversarial planning",
        "Evaluation, testing, and validation of planning and scheduling applications",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15952",
    },
    {
      UID: "230",
      title: "Subset-Saturated Transition Cost Partitioning",
      authors: ["Dominik Drexler", "Jendrik Seipp", "David Speck"],
      keyphrases:
        "Optimal Classical Planning\n Heuristic Search\n Transition Cost Partitioning\n Cost Saturation",
      abstract:
        "Cost partitioning admissibly combines the information from multiple heuristics for optimal state-space search. One of the strongest cost partitioning algorithms is saturated cost partitioning. It considers the heuristics in sequence and assigns to each heuristic the minimal fraction of the remaining costs that are needed for preserving all heuristic estimates. Saturated cost partitioning has recently been generalized in two directions: first, by allowing to use different costs for the transitions induced by the same operator, and second, by preserving the heuristic estimates for only a subset of states. In this work, we unify these two generalizations and show that the resulting subset-saturated transition cost partitioning algorithm usually yields stronger heuristics than the two generalizations by themselves.",
      topics: ["Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15955",
    },
    {
      UID: "238",
      title:
        "GRAND-VISION: An Intelligent System for Optimized Deployment Scheduling of Law Enforcement Agents",
      authors: [
        "Jonathan Chase",
        "Phong Tran",
        "Long Kang",
        "Tony Le",
        "Hoong Chuin Lau",
      ],
      keyphrases:
        "Public Security\n Deployment Planning\n Incident Prediction\n Patrol Scheduling",
      abstract:
        "Law enforcement agencies in dense urban environments, faced with a wide range of incidents to handle and limited manpower, are turning to data-driven AI to inform their policing strategy. In this paper we present a patrol scheduling system called GRAND-VISION: Ground Response Allocation and Deployment - Visualization, Simulation, and Optimization. The system employs deep learning to generate incident sets that are used to train a patrol schedule that can accommodate varying manpower, break times, manual pre-allocations, and a variety of spatio-temporal demand features. The complexity of the scenario results in a system with real world applicability, which we demonstrate through simulation on historical data obtained from a large urban law enforcement agency.",
      topics: [
        "Evaluation, testing, and validation of planning and scheduling applications",
        "Integration of multiple planning and scheduling techniques, or of planning and scheduling techniques with techniques from other areas or disciplines",
        "Description and modeling of novel application domains",
        "Industry / application challenge problems",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15992",
    },
    {
      UID: "257",
      title:
        "Privacy-Preserving Algorithm for Decoupling of Multi-Agent Plans with Uncertainty",
      authors: ["Yuening Zhang", "Brian Williams"],
      keyphrases:
        "temporal network\n temporal decoupling\n multi-agent systems\n multi-agent scheduling and execution\n privacy",
      abstract:
        "The execution of multi-agent plans often requires communication between agents in order to synchronize their tasks. In cases where communication is unreliable or undesirable, temporal decoupling algorithms allow agents to find a distributed execution strategy beforehand without requiring perfect communication on the fly. The state-of-the-art Multi-Agent Simple Temporal Network with Uncertainty (MaSTNU) framework extends the decoupling problem for Multi-Agent Simple Temporal Network (MaSTN) to allow the modeling of uncertain durations and allow agents to communicate when certain events occur and communication is available. However, the existing approach assumes centralized knowledge of the MaSTNU, whereas in the multi-agent context, privacy is an important concern. In this paper, we propose a distributed, privacy-preserving algorithm for finding distributed execution strategies for MaSTNU. Experiments also showed significant speed-up of the proposed algorithm when the multi-agent plan is loosely coupled and mostly private.",
      topics: [
        "Scheduling",
        "Distributed and multi-agent scheduling",
        "Scheduling under uncertainty",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15988",
    },
    {
      UID: "261",
      title: "In-Station Train Dispatching: A PDDL+ Planning Approach",
      authors: [
        "Matteo Cardellini",
        "Marco Maratea",
        "Mauro Vallati",
        "Gianluca Boleto",
        "Luca Oneto",
      ],
      keyphrases:
        "In-Station Train Dispatching\n Train Traffic Control\n Hybrid Planning",
      abstract:
        "Railways play a significant economical role in our society for transporting both goods or passengers. In railway networks, stations are probably the most critical points for interconnecting trains' routes: in a restricted geographical area, a potentially large number of trains have to stop according to an official timetable, with the concrete risk of accumulating delays that can then have a knockout effect on the rest of the network. In this context, in-station train dispatching plays a central role in maximising the effective utilisation of available railway infrastructures and in mitigating the impact of incidents and delays. Unfortunately, in-station train dispatching is still largely handled manually by human operators in charge of a group of stations.\n \n In this paper we make a step towards supporting the operator with some automatic tool, by describing an approach for performing in-station dispatching by means of automated planning techniques. Given the mixed discrete-continuous nature of the problem, we employ PDDL+ for the specification of the problem, and the ENHSP planning engine enhanced by domain-specific solving techniques. Results on a range of scenarios, using real-data of a station of the North West of Italy, show the potential of our approach.",
      topics: [
        "Evaluation, testing, and validation of planning and scheduling applications",
        "Description and modeling of novel application domains",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15991",
    },
    {
      UID: "264",
      title: "Generalized Planning as Heuristic Search",
      authors: [
        "Javier Segovia-Aguas",
        "Sergio Jimenez Celorrio",
        "Anders Jonsson",
      ],
      keyphrases:
        "Learning and deriving generalized plans\n Heuristics for plan generalization\n Generalized planning\n Planning and learning",
      abstract:
        "Although heuristic search is one of the most successful approaches to classical planning, this planning paradigm does not apply straightforwardly to Generalized Planning (GP). Planning as heuristic search traditionally addresses the computation of sequential plans by searching in a grounded state-space. On the other hand, GP aims at computing algorithm-like plans that can branch and loop, and that generalize to a (possibly infinite) set of planning instances. This paper adapts the {\\em planning as heuristic search} paradigm to the particularities of GP and presents the first native heuristic search approach to GP. First, the paper defines a novel GP solution space that is independent of the number of planning instances in a GP problem, and the size of these instances. Second, the paper defines several evaluation and heuristic functions, that do not require grounding, for guiding a combinatorial search in the GP solution space, making it possible to handle state variables with large numerical domains (e.g. integers). Lastly, the paper defines an algorithm for GP called Best-First Generalized Planning (BFGP), that implements a best-first search in the solution space guided by our evaluation/heuristic functions.",
      topics: [
        "Learning effective heuristics and other forms of control knowledge",
        "Learning to improve the effectiveness of planning & scheduling systems",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16005",
    },
    {
      UID: "273",
      title: "Meta Reinforcement Learning for Heuristic Planing",
      authors: ["Ricardo Luna Gutierrez", "Matteo Leonetti"],
      keyphrases:
        "heuristic planning\n meta-reinforcement learning\n meta-learning\n reinforcement learning",
      abstract:
        "Heuristic planning has a central role in classical planning applications and competitions. Thanks to this success, there has been an increasing interest in using Deep Learning to create high-quality heuristics in a supervised fashion, learning from optimal solutions of previously solved planning problems. Meta-Reinforcement learning is a fast growing research area concerned with learning, from many tasks, behaviours that can quickly generalize to new tasks from the same distribution of the training ones. We make a connection between meta-reinforcement learning and heuristic planning, showing that heuristic functions meta-learned from planning problems, in a given domain, can outperform both popular domain-independent heuristics, and heuristics learned by supervised learning. Furthermore, while most supervised learning algorithms rely on ad-hoc encodings of the state representation, our method uses as input a general PDDL 3.1 description. We evaluated our heuristic with an A* planner on six domains from the International Planning Competition, showing that the meta-learned heuristic leads to the expansion, on average, of fewer states than three popular heuristics used by the FastDownward planner, and a supervised-learned heuristic.",
      topics: [
        "Learning effective heuristics and other forms of control knowledge",
        "Learning to improve the effectiveness of planning & scheduling systems",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16003",
    },
    {
      UID: "274",
      title:
        "Rule-based shielding for Partially Observable Monte-Carlo Planning",
      authors: ["Giulio Mazzi", "Alberto Castellini", "Alessandro Farinelli"],
      keyphrases: "POMDPs\n POMCP\n MAX-SMT\n anomaly detection\n verification",
      abstract:
        "Partially Observable Monte-Carlo Planning (POMCP) is a powerful online algorithm able to generate approximate policies for large Partially Observable Markov Decision Processes. The online nature of this method supports scalability by avoiding complete policy representation. The lack of an explicit representation however hinders policy interpretability and makes policy verification very complex. In this work, we propose two contributions. The first is a method for identifying unexpected actions selected by POMCP with respect to expert prior knowledge of the task. The second is a shielding approach that prevents POMCP from selecting unexpected actions. The first method is based on Satisfiability Modulo Theory (SMT). It inspects traces (i.e., sequences of belief-action-observation triplets) generated by POMCP to compute the parameters of logical formulas about policy properties defined by the expert. The second contribution is a module that uses online the logical formulas to identify anomalous actions selected by POMCP and substitute those actions with actions that satisfy the logical formulas fulfilling expert knowledge. We evaluate our approach on Tiger, a standard benchmark for POMDPs, and a real-world problem related to mobile robot navigation. Results show that the shielded POMCP outperforms the standard POMCP in a case study in which a wrong parameter of POMCP makes it select wrong actions from time to time. Moreover, we show that the approach keeps good performance also if the parameters of the logical formula are optimized using trajectories containing some wrong actions.",
      topics: [
        "Execution, monitoring and repair",
        "Learning in planning and scheduling",
        "Probabilistic planning, MDPs and POMDPs",
      ],
      track: "main",
      url: "",
    },
    {
      UID: "282",
      title: "Automatic Instance Generation for Classical Planning",
      authors: ["Álvaro Torralba", "Jendrik Seipp", "Silvan Sievers"],
      keyphrases: "classical planning\n benchmarks\n automatic configuration",
      abstract:
        "The benchmarks from previous International Planning Competitions (IPCs) are the de-facto standard for evaluating planning algorithms. The IPC set is both a collection of planning domains and a selection of instances from these domains. Most of the domains come with a parameterized generator that generates new instances for a given set of parameter values. Due to the steady progress of planning research the instances generated by the IPC organizers are often inadequate to evaluate current planners. To alleviate this problem, we introduce an automatic method that selects instances for a given domain. Our method takes into account constraints from the domain designer as well as the performance of current planners to generate an instance set of appropriate difficulty, while avoiding too much bias with respect to the considered planners. We show that the resulting benchmark set is superior to the IPC set and has the potential of improving empirical evaluation of planning research.",
      topics: ["Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15983",
    },
    {
      UID: "287",
      title: "Online Saturated Cost Partitioning for Classical Planning",
      authors: ["Jendrik Seipp"],
      keyphrases:
        "optimal classical planning\n cost partitioning\n heuristic search",
      abstract:
        "Cost partitioning is a general method for admissibly summing up heuristic estimates for optimal state-space search. Most cost partitioning algorithms can optimize the resulting cost-partitioned heuristic for a specific state. Since computing a new cost-partitioned heuristic for each evaluated state is usually too expensive in practice, the strongest planners based on cost partitioning over abstraction heuristics precompute a set of cost-partitioned heuristics before the search and maximize over their estimates during the search. This makes state evaluations very fast, but since there is no better termination criterion than a time limit, it requires a long precomputation phase, even for the simplest planning tasks. A prototypical example for this is the Scorpion planner which computes saturated cost partitionings over abstraction heuristics offline before the search. Using Scorpion as a case study, we show that by incrementally extending the set of cost-partitioned heuristics online during the search, we drastically speed up the planning process and even solve slightly more tasks.",
      topics: ["Classical planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15976",
    },
    {
      UID: "297",
      title:
        "S*: A Heuristic Information-Based Approximation Framework for Multi-Goal Path Finding",
      authors: ["Kenny Chour", "Sivakumar Rathinam", "R Ravi"],
      keyphrases:
        "Minimum Cost Path Problem\n Heuristic Search Methods\n Approximation Algorithms\n Traveling Salesman Problem",
      abstract:
        "We combine ideas from uni-directional and bi-directional heuristic search, and approximation algorithms for the Traveling Salesman Problem, to develop a novel framework for a Target Path Finding (TPF) problem that provides a 2-approximation guarantee. TPF aims to find a least-cost path from a start location to a destination such that each node in a given set of targets is visited at least once along the path. We present numerical results to illustrate the advantages of our framework over conventional alternates in terms of the number of explored nodes and run time.",
      topics: ["Classical planning", "Search techniques"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15950",
    },
    {
      UID: "300",
      title:
        "Automated Production Scheduling for Artificial Teeth Manufacturing",
      authors: [
        "Felix Winter",
        "Christoph Mrkvicka",
        "Nysret Musliu",
        "Jakob Preininger",
      ],
      keyphrases:
        "machine scheduling\n metaheuristics\n constraint programming",
      abstract:
        "In industrial artificial teeth manufacturing, nowadays a high level of automation is utilized to produce a large quantity of teeth in short production cycles.\n As a large variety of different product shapes and colors have to be processed on a single machine, the creation of efficient production schedules becomes a very challenging task.\n Due to the complexity of the problem and several cost minimization objectives that need to be considered, there is a large potential to improve the currently manually created schedules with automated solution methods.\n \n In this paper, we formally specify and solve a novel challenging real-life machine batch scheduling problem from the area of artificial teeth manufacturing.\n Additionally, we provide a collection of real-life benchmark instances that can be used to evaluate solution methods for the problem.\n \n To efficiently solve the problem, we propose an innovative construction heuristic and metaheuristic approach as well as an exact method using constraint programming.\n An extensive experimental evaluation shows that exact techniques can efficiently solve small scheduling scenarios and can provide optimal solutions for three instances. Furthermore, we show that the proposed metaheuristic approach is able to reach optimal results for small instances and can find high quality solutions also for large real-life benchmark instances.",
      topics: [
        "Description and modeling of novel application domains",
        "Industry / application challenge problems",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15997",
    },
    {
      UID: "305",
      title: "Multiple Plans are Better than One: Diverse Stochastic Planning",
      authors: ["Mahsa Ghasemi", "Evan Scope Crafts", "Bo Zhao", "Ufuk Topcu"],
      keyphrases:
        "Stochastic Planning\n Quality Diversity\n Markov Decision Process",
      abstract:
        "In planning problems, it is often challenging to fully model the desired specifications. In particular, in human-robot interaction, such difficulty may arise due to human's preferences that are either private or complex to model. Consequently, the resulting objective function can only partially capture the specifications and optimizing that may lead to poor performance with respect to the true specifications. Motivated by this challenge, we formulate a problem, called diverse stochastic planning, that aims to generate a set of representative --- small and diverse --- behaviors that are near-optimal with respect to the known objective. In particular, the problem aims to compute a set of diverse and near-optimal policies for systems modeled by a Markov decision process. We cast the problem as a constrained nonlinear optimization for which we propose a solution relying on the Frank-Wolfe method. We then prove that the proposed solution converges to a stationary point and demonstrate its efficacy in several planning problems.",
      topics: [
        "Multi-objective planning and scheduling",
        "Planning under (non-probabilistic) uncertainty",
        "Probabilistic planning, MDPs and POMDPs",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15956",
    },
    {
      UID: "306",
      title:
        "vPlanSim: An Open Source Graphical Interface for the Visualisation and Simulation of AI Systems",
      authors: [
        "Jamie Roberts",
        "Georgios Mastorakis",
        "Brad Lazaruk",
        "Santiago Franco",
        "Adam Stokes",
        "Sara Bernardini",
      ],
      keyphrases: "PDDL\n 3D Visualisation\n Explainability",
      abstract:
        "We introduce vPlanSim, an open source tool to aid in AI PDDL development. This tool is primarily aimed at researchers and developers who need a visual representation of their planning problem so that they can make useful insights into the performance of their system, and also to naturally convey their system to others. It is an open-source tool which allows a user to quickly and easily visualise a target environment to generate the problem files and also to visualise a plan. It is particularly well suited to spatial planning problems. This paper will demonstrate vPlanSim on 2D and 3D planning problems. vPlanSim is based on a small and carefully considered set of dependencies such as VTK and PyQt. It can be set up on different platforms and compiled from source with minimal effort. The code is and maintained via a clear code review mechanism. We welcome contributions from the open-source community.",
      topics: [
        "User interface design, visualization, and explanation for a planning and scheduling application",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15995",
    },
    {
      UID: "309",
      title:
        "Non-Deterministic Conformant Planning Using a Counterexample-Guided Incremental Compilation to Classical Planning",
      authors: ["Alban Grastien", "Enrico Scala"],
      keyphrases:
        "Conformant planning\n SAT\n Counter-example guided abstraction refinement",
      abstract:
        "We address the problem of non-deterministic conformant planning, \n i.e., the problem of finding a plan in a non-deterministic context \n where the system is not observable. \n Our approach uses an unsound reduction from conformant planning to classical planning\n to find a candidate plan; \n the validity of this plan is then verified by a SAT solver;\n if the plan is invalid, the reduction is revised to make guarantee \n that the invalid plan will not be valid in the classical planning problem. \n This procedure is executed until a valid plan is proved, \n or it is shown that there is no plan.\n Experiments show that this approach is competitive with the existing solvers, \n and is able to solve difficult instances.",
      topics: ["Conformant/contingent planning"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15974",
    },
    {
      UID: "312",
      title:
        "Blind Decision Making: Reinforcement Learning with Delayed Observations",
      authors: ["Mridul Agarwal", "Vaneet Aggarwal"],
      keyphrases:
        "Reinforcement Learning\n Delayed Reinforcement Learning\n Planning and Control",
      abstract:
        "Reinforcement learning typically assumes that the state update from the previous actions happens instantaneously, and thus can be used for making future decisions. However, this may not always be true. When the state update is not available, the decision taken is partly in the blind since it cannot rely on the current state information. This paper proposes an approach, where the delay in the knowledge of the state can be used, and the decisions are made based on the available information which may not include the current state information. One approach could be to include the actions after the last-known state as a part of the state information, however, that leads to an increased state-space making the problem complex and slower in convergence. The proposed algorithm gives an alternate approach where the state space is not enlarged, as compared to the case when there is no delay in the state update. Evaluations on the basic RL environments further illustrate the improved performance of the proposed algorithm.",
      topics: [
        "OR techniques",
        "Reinforcement learning using planning (model-based, Bayesian, deep, etc.)",
        "Theoretical aspects of planning and learning",
        "Probabilistic planning, MDPs and POMDPs",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15940",
    },
    {
      UID: "322",
      title: "Hierarchical Width-Based Planning and Learning",
      authors: ["Miquel Junyent", "Vicenç Gómez", "Anders Jonsson"],
      keyphrases: "Hierarchical planning\n Iterated Width\n IW\n Atari",
      abstract:
        "Width-based search methods have demonstrated state-of-the-art performance in a wide range of testbeds, from classical planning problems to image-based simulators such as Atari games. These methods scale independently of the size of the state-space, but exponentially in the problem width. In practice, running the algorithm with a width larger than 1 is computationally intractable, prohibiting IW from solving higher width problems. In this paper, we present a hierarchical algorithm that plans at two levels of abstraction. A high-level planner uses abstract features that are incrementally discovered from low-level pruning decisions. We illustrate this algorithm in classical planning PDDL domains as well as in pixel-based simulator domains. In classical planning, we show how IW(1) at two levels of abstraction can solve problems of width 2. For pixel-based domains, we show how in combination with a learned policy and a learned value function, the proposed hierarchical IW can outperform current flat IW-based planners in Atari games with sparse rewards.",
      topics: [
        "Reinforcement learning using planning (model-based, Bayesian, deep, etc.)",
        "Learning to improve the effectiveness of planning & scheduling systems",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15999",
    },
    {
      UID: "325",
      title:
        "Scheduling with Complete Multipartite Incompatibility Graph on Parallel Machines",
      authors: ["Marek Kubale", "Krzysztof Turowski", "Tytus Pikies"],
      keyphrases:
        "job scheduling\n uniform machines\n makespan\n total completion time\n approximation schemes\n NP-hardness\n incompatibility graph",
      abstract:
        "In this paper we consider a problem of job scheduling on parallel machines with a presence of incompatibilities between jobs. The incompatibility relation can be modeled as a complete multipartite graph in which each edge denotes a pair of jobs that cannot be scheduled on the same machine. Our research stems from the works of Bodlaender, Jansen, and Woeginger (1994) and Bodlaender and Jansen (1993). In particular, we pursue the line investigated recently by Mallek, Bendraouche, and Boudhar (2019). \n \n We provide several results concerning schedules, optimal or approximate with respect to the two most popular criteria of optimality: Cmax (makespan) and ΣCj (total completion time). We consider a variety of machine types in our paper: identical, uniform, and unrelated. Our results consist of delimitation of the easy (polynomial) and NP-hard problems within these constraints. We also provide algorithms, either polynomial exact algorithms for the easier problems, or algorithms with a guaranteed constant worst-case approximation ratio. \n \n In particular, we fill the gap on research for the problem of finding a schedule with the smallest ΣCj on uniform machines. We address this problem by developing a linear programming relaxation technique with an appropriate rounding, which to our knowledge is a novelty for this criterion in the considered setting.",
      topics: [
        "Classical planning",
        "Scheduling",
        "Multi-objective planning and scheduling",
        "Complexity analysis",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15970",
    },
    {
      UID: "328",
      title:
        "Total Completion Time Minimization for Scheduling with Incompatibility Cliques",
      authors: [
        "Klaus Jansen",
        "Alexandra Lassota",
        "Marten Maack",
        "Tytus Pikies",
      ],
      keyphrases:
        "identical machines\n unrelated machines\n total completion time\n scheduling\n bags\n cliques\n FPT\n n-fold IP",
      abstract:
        "This paper considers parallel machine scheduling with incompatibilities between jobs. The jobs form a graph equivalent to a collection of disjoint cliques. No two jobs in a clique are allowed to be assigned to the same machine. \n Scheduling with incompatibilities between jobs represents a well-established line of research in scheduling theory and the case of disjoint cliques has received increasing attention in recent years. While the research up to this point has been focused on the makespan objective, we broaden the scope and study the classical total completion time criterion. In the setting without incompatibilities, this objective is well known to admit polynomial time algorithms even for unrelated machines, via matching techniques. We show that the introduction of incompatibility cliques results in a richer, more interesting picture. We prove that scheduling on identical machines remains solvable in polynomial time, while scheduling on unrelated machines becomes APX-hard. Next, we study the problem under the paradigm of fixed-parameter tractable algorithms (FPT). In particular, we consider a problem variant with assignment restrictions for the cliques rather than the jobs. We prove that, despite still being APX-hard, it can be solved in FPT time with respect to the number of cliques. Moreover, we show that the problem on unrelated machines can be solved in FPT time for other reasonable parameters, i.e. the parameters triple: number of machines, maximum processing time, and number of job kinds. The latter result is an extension of known results for the case without incompatibilities, and can even be further extended to the case of total weighted completion time. All of the FPT results make use of n-fold Integer Programs that recently have received great attention by proving their usefulness for scheduling problems. By this we open another interesting arc of research on the considered class of graphs.",
      topics: [
        "Scheduling",
        "Integration of multiple planning and scheduling techniques, or of planning and scheduling techniques with techniques from other areas or disciplines",
        "Multi-objective planning and scheduling",
        "Complexity analysis",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15962",
    },
    {
      UID: "338",
      title:
        "Computing Opportunities to Augment Plans for Novel Replanning during Execution",
      authors: ["Daniel Borrajo", "Manuela Veloso"],
      keyphrases:
        "Planning with opportunities\n Planning and execution\n Plan monitoring",
      abstract:
        "Traditionally, planning provides for execution plans as sequences of actions with preconditions and effects. Execution monitoring identifies failure conditions when the preconditions of an action do not match the state. Interestingly, planning proceeds by consuming a given initial state and abandoning reasoning about any facts not true in that state. In this paper, we define opportunities as such missing facts, and contribute an algorithm to compute them and augment a plan for execution with them. We then introduce a new execution opportunity monitoring that focusedly checks for these opportunities at each execution state. Opportunistic replanning proceeds now from the new state including the detected opportunities.",
      topics: ["Execution, monitoring and repair"],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15946",
    },
    {
      UID: "339",
      title:
        "PLGRIM: Hierarchical Value Learning for Large-scale Exploration in Unknown Environments",
      authors: [
        "Sung-Kyun Kim",
        "Amanda Bouman",
        "Gautam Salhotra",
        "David Fan",
        "Kyohei Otsu",
        "Joel Burdick",
        "Aliakbar Aghamohammadi",
      ],
      keyphrases:
        "Large-scale exploration\n Hierarchical planning\n Stochastic coverage planning\n POMDPs",
      abstract:
        "In order for a robot to explore an unknown environment autonomously, it must account for uncertainty in sensor measurements, hazard assessment, localization, and motion execution. Making decisions for maximal reward in a stochastic setting requires learning values and constructing policies over belief space, i.e., probability distribution of the robot-world state. Value learning over belief spaces suffer from computational challenges in high-dimensional spaces, such as large spatial environments and long temporal horizons for exploration. At the same time, it should be adaptive and resilient to disturbances at run time in order to ensure the robot’s safety, as required in many real-world applications. This work proposes a scalable value learning framework, PLGRIM (Probabilistic Local and Global Reasoning on Information roadMaps), that bridges the gap between (i) local, risk-aware resiliency and (ii) global, reward seeking mission objectives. By leveraging hierarchical belief-space planners with information-rich graph structures, PLGRIM can address large-scale exploration problems while providing locally near-optimal coverage plans. PLGRIM is a step toward enabling belief space planners on physical robots operating in unknown and complex environments. We validate our proposed framework with a high-fidelity dynamic simulation in diverse environments and with physical hardware, Boston Dynamics’ Spot robot, in a lava tube.",
      topics: [
        "Real-world robotic planning applications",
        "Planning with uncertainty in robotics",
      ],
      track: "robotics",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16014",
    },
    {
      UID: "345",
      title: "Conflict-Based Increasing Cost Search",
      authors: [
        "Thayne T. Walker",
        "Nathan Sturtevant",
        "Han Zhang",
        "Jiaoyang Li",
        "Sven Koenig",
        "Ariel Felner",
        "T. K. Satish Kumar",
      ],
      keyphrases: "multi-agent\n search\n heuristic search\n planning",
      abstract:
        "Two popular optimal search-based solvers for the multi-agent pathfinding (MAPF) problem, Conflict-Based Search (CBS) and Increasing Cost Tree Search (ICTS) have been extended separately for non-unit costs and for symmetry breaking with great success. However, a generalized approach to symmetry breaking in non-unit cost domains remains an open question. In this work, we introduce a new algorithm: Conflict-Based Increasing Cost Search (CBICS), which is capable of applying symmetry breaking in non-unit cost domains by combining the strengths of CBS and ICTS. CBICS shows better performance in both unit and non-unit cost domains in many cases.",
      topics: [
        "Planning in mixed discrete / continuous domains",
        "Multi-robot planning, scheduling/coordination, and execution",
        "Multi-agent planning and learning",
        "Distributed and multi-agent planning",
      ],
      track: "main",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15984",
    },
    {
      UID: "353",
      title:
        "Speeding Up Search-Based Motion Planning using Expansion Delay Heuristics",
      authors: ["Jasmeet Kaur", "Ishani Chatterjee", "Maxim Likhachev"],
      keyphrases: "Learning Heuristics\n Motion Planning\n Heuristic Search",
      abstract:
        "Suboptimal search algorithms are a popular way to find solutions to planning problems faster by trading off solution optimality for search time. This is often achieved with the help of inadmissible heuristics. Prior work has explored ways to learn such inadmissible heuristics. However, it has focused on learning the heuristic value as an estimate of the cost to reach a goal. In this paper, we present a different approach that computes inadmissible heuristics by learning Expansion Delay for transitions in the state space. Expansion Delay is defined as the number of states expanded during the search between two consecutive states. Expansion Delay can be used as a measure of the depth of local minima regions i.e., regions where the heuristic(s) are weakly correlated with the true cost-to-goal (Vats, Narayanan and Likhachev 2017). Our key idea is to learn this measure in order to guide the search such that it reduces the total Expansion delay for reaching the goal and hence, avoid local minima regions in the state space. We analyze our method on 3D (x, y, theta) planning and Humanoid footstep planning. We find that the heuristics computed using our technique result in finding feasible plans faster.",
      topics: [
        "Learning effective heuristics and other forms of control knowledge",
      ],
      track: "learning",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/16000",
    },
    {
      UID: "354",
      title:
        "A Deep Ensemble Method for Multi-Agent Reinforcement Learning: A Case Study on Air Traffic Control",
      authors: [
        "Supriyo Ghosh",
        "Sean Laguna",
        "Shiau Hong Lim",
        "Laura Wynter",
        "Hasan Poonawala",
      ],
      keyphrases:
        "Reinforcement Learning\n Deep Ensemble Learning\n Air Traffic Control",
      abstract:
        "Reinforcement learning (RL), a promising framework for data-driven decision making in an uncertain environment, has successfully been applied in many real-world operation and control problems. However, the application of RL in a large-scale decentralized multi-agent environment remains a challenging problem due to the partial observability and limited communications between agents. In this paper, we develop a model-based kernel RL approach and a model-free deep RL approach for learning a decentralized, shared policy among homogeneous agents. By leveraging the strengths of both these methods, we further propose a novel deep ensemble multi-agent reinforcement learning (MARL) method that efficiently learns to arbitrate between the decisions of the local kernel-based RL model and the wider-reaching deep RL model. We validate the proposed deep ensemble method on a highly challenging real-world air traffic control problem, where the goal is to provide effective guidance to aircraft to avoid air traffic congestion, conflicting situations, and to improve arrival timeliness, by dynamically recommending adjustments of aircraft speeds in real-time. Extensive empirical results from an open-source air traffic management simulation model, developed by Eurocontrol and built on a real-world data set including thousands of aircrafts, demonstrate that our proposed deep ensemble MARL method significantly outperforms three state-of-the-art benchmark approaches.",
      topics: [
        "Integration of multiple planning and scheduling techniques, or of planning and scheduling techniques with techniques from other areas or disciplines",
      ],
      track: "applications",
      url: "https://ojs.aaai.org/index.php/ICAPS/article/view/15993",
    },
    {
      UID: "360",
      title:
        "Constrained Multiagent Markov Decision Processes: a Taxonomy of Problems and Algorithms",
      authors: [
        "Frits de Nijs",
        "Erwin Walraven",
        "Mathijs De Weerdt",
        "Matthijs T. J. Spaan",
      ],
      keyphrases: "",
      abstract:
        "In domains such as electric vehicle charging, smart distribution grids and autonomous warehouses, multiple agents share the same resources. When planning the use of these resources, agents need to deal with the uncertainty in these domains. Although several models and algorithms for such constrained multiagent planning problems under uncertainty have been proposed in the literature, it remains unclear when which algorithm can be applied. In this survey we conceptualize these domains and establish a generic problem class based on Markov decision processes. We identify and compare the conditions under which algorithms from the planning literature for problems in this class can be applied: whether constraints are soft or hard, whether agents are continuously connected, whether the domain is fully observable, whether a constraint is momentarily (instantaneous) or on a budget, and whether the constraint is on a single resource or on multiple. Further we discuss the advantages and disadvantages of these algorithms. We conclude by identifying open problems that are directly related to the conceptualized domains, as well as in adjacent research areas.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "361",
      title:
        "Constraint-based Scheduling for Paint Shops in the Automotive Supply Industry",
      authors: ["Felix Winter", "Nysret Musliu"],
      keyphrases: "",
      abstract:
        "Factories in the automotive supply industry paint a large number of items requested by car manufacturing companies on a daily basis. As these factories face numerous constraints and optimization objectives, finding a good schedule becomes a challenging task in practice, and full-time employees are expected to manually create feasible production plans.\n In this study, we propose novel constraint programming models for a real-life paint shop scheduling problem. We evaluate and compare our models experimentally by performing a series of benchmark experiments using real-life instances in the industry. We also show that the decision variant of the paint shop scheduling problem is NP-complete.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "362",
      title:
        "What do you really want to do? Towards a Theory of Intentions for Human-Robot Collaboration",
      authors: ["Mohan Sridharan", "Rocio Gomez", "Heather Riley"],
      keyphrases: "",
      abstract:
        "The architecture described in this paper encodes a theory of intentions based on the key principles of non-procrastination, persistence, and refinement, and by automatically limiting reasoning to relevant knowledge and observations. The architecture reasons with transition diagrams of any given domain at two different resolutions, with the fine-resolution description defined as a refinement of, and hence tightly-coupled to, a coarse-resolution description. For any given goal, non-monotonic logical reasoning with the coarse-resolution description computes an activity, i.e., a plan, comprising a sequence of abstract actions to be executed to achieve the goal. Each abstract action is implemented as a sequence of concrete actions by automatically zooming to and reasoning with the part of the fine-resolution transition diagram relevant to the current coarse-resolution transition and the goal. Each concrete action in this sequence is executed using probabilistic models of the uncertainty in sensing and actuation, and the corresponding fine-resolution outcomes are used to infer coarse-resolution observations that are added to the coarse-resolution history. The architecture’s capabilities are evaluated in the context of a simulated robot assisting humans in an office domain, on a physical robot (Baxter) manipulating tabletop objects, and on a wheeled robot (Turtlebot) moving objects to particular places or people. The experimental results indicate improvements in reliability and computational efficiency compared with an architecture that does not include the theory of intentions, and an architecture that does not include zooming for fine-resolution reasoning.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "363",
      title:
        "Attributed Transition-based Domain Control Knowledge for Domain-Independent Planning",
      authors: [
        "Lukas Chrpa",
        "Roman Barták",
        "Jindřich Vodrážka",
        "Marta Vomlelová",
      ],
      keyphrases: "",
      abstract:
        "Domain-independent planning decouples planning task specification and planning engines. As the specification is usually describing only the physics of the environment, actions and a goal, the planning engines being generic solvers designed to solve any planning task tend to struggle with tasks that can be easily solved by domain-specific algorithms. Additional control knowledge can, to large extent, bridge such a performance gap. Instead of providing a specific planner supporting a given form of control knowledge, control knowledge can be directly encoded within the planning task specification and thus can be exploited by generic planners. In this paper, we propose Attributed Transition-Based Domain Control Knowledge (ATB-DCK) that is represented by a finite state automaton with attributed states, referring to specific states of objects, connected by transitions imposing constraints on action applicability. ATB-DCK, roughly speaking, represents “grammar” of solution plans that guides the search. We show that ATB-DCK can be compiled into a classical planning task and thus it complements domain-independent planning techniques. Using several domains from the International Planning Competitions as benchmarks, we demonstrate that this approach often considerably improves efficiency of existing state-of-the-art planning engines.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "364",
      title: "Landmark-based approaches for goal recognition as planning",
      authors: ["Ramon Fraga Pereira", "Nir Oren", "Felipe Meneguzzi"],
      keyphrases: "",
      abstract:
        "Recognizing goals and plans from complete or partial observations can be efficiently achieved through automated planning techniques. In many applications, it is important to recognize goals and plans not only accurately, but also quickly. To address this challenge, we develop novel goal recognition approaches based on planning techniques that rely on planning landmarks. In automated planning, landmarks are properties (or actions) that cannot be avoided to achieve a goal. We show the applicability of a number of planning techniques with an emphasis on landmarks for goal recognition tasks in two settings: (1) we use the concept of landmarks to develop goal recognition heuristics; and (2) we develop a landmark-based filtering method to refine existing planning-based goal and plan recognition approaches. These recognition approaches are empirically evaluated in experiments over several classical planning domains. We show that our goal recognition approaches yield not only accuracy comparable to (and often higher than) other state-of-the-art techniques, but also result in substantially faster recognition time over existing techniques.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "365",
      title: "Self-Reliant Rovers for Increased Mission Productivity",
      authors: [
        "Daniel Gaines",
        "Gary Doran",
        "Michael Paton",
        "Brandon Rothrock",
        "Joseph Russino",
        "Ryan Mackey",
        "Robert Anderson",
        "Raymond Francis",
        "Chet Joswig",
        "Heather Justice",
        "Ksenia Kolcio",
        "Gregg Rabideau",
        "Steve Schaffer",
        "Jacek Sawoniewicz",
        "Ashwin Vasavada",
        "Ali-Akbar Agha-Mohammadi",
      ],
      keyphrases: "",
      abstract:
        "Achieving consistently high levels of productivity has been a challenge for Mars surface missions. While the rovers have made major discoveries and dramatically increased our understanding of Mars, they require a great deal of interaction from the operations teams, and achieving mission objectives can take longer than anticipated when productivity is paced by the ground teams' ability to react. We have conducted a project to explore technologies and techniques for creating Self-Reliant Rovers: rovers that are able to maintain high levels of productivity with reduced reliance on ground interactions. This paper describes the design of Self-Reliant Rovers and a prototype implementation that we deployed on a research rover. We evaluated the system by conducting a simulated campaign in which members of the Mars Science Laboratory (Curiosity rover) science team used our rover to explore a geographical region. The evaluation demonstrated the system's ability to maintain high levels of productivity with limited communication with operators.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "366",
      title: "Safe Multi-Agent Pathfinding with Time Uncertainty",
      authors: [
        "Tomer Shahar",
        "Shashank Shekhar",
        "Dor Atzmon",
        "Abdallah Saffidine",
        "Brendan Juba",
        "Roni Stern",
      ],
      keyphrases: "",
      abstract:
        "In many real-world scenarios, the time it takes for a mobile agent, e.g., a robot, to move from one location to another may vary due to exogenous events and be difficult to predict accurately. Planning in such scenarios is challenging, especially in the context of Multi-Agent Pathfinding (MAPF), where the goal is to find paths to multiple agents and temporal coordination is necessary to avoid collisions. In this work, we consider a MAPF problem with this form of time uncertainty, where we are only given upper and lower bounds on the time it takes each agent to move. The objective is to find a safe solution, which is a solution that can be executed by all agents and is guaranteed to avoid collisions.\n We propose two complete and optimal algorithms for finding safe solutions based on well-known MAPF algorithms, namely, A* with Operator Decomposition (A*+OD) and Conflict-Based Search (CBS). Experimentally, we observe that on several standard MAPF grids the CBS-based algorithm performs better. We also explore the option of online replanning in this context, i.e., modifying the agents' plans during execution, to reduce the overall execution cost. We consider two online settings: (a) when an agent can sense the current time and its current location, and (b) when the agents can also communicate seamlessly during execution. For each setting, we propose a replanning algorithm and analyze its behavior theoretically and empirically. Our experimental evaluation confirms that indeed online replanning in both settings can significantly reduce solution cost.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "367",
      title: "Adaptive Smoothing for Path Integral Control",
      authors: [
        "Dominik Thalmeier",
        "Hilbert J. Kappen",
        "Simone Totaro",
        "Vicenç Gómez",
      ],
      keyphrases: "",
      abstract:
        "In Path Integral control problems a representation of an optimally controlled dynamical system can be formally computed and serve as a guidepost to learn a parametrized policy. The Path Integral Cross-Entropy (PICE) method tries to exploit this, but is hampered by poor sample efficiency. We propose a model-free algorithm called ASPIC (Adaptive Smoothing of Path Integral Control) that applies an inf-convolution to the cost function to speedup convergence of policy optimization. We identify PICE as the infinite smoothing limit of such technique and show that the sample efficiency problems that PICE suffers disappear for finite levels of smoothing. For zero smoothing, ASPIC becomes a greedy optimization of the cost, which is the standard approach in current reinforcement learning. ASPIC adapts the smoothness parameter to keep the variance of the gradient estimator at a predefined level, independently of the number of samples. We show analytically and empirically that intermediate levels of smoothing are optimal, which renders the new method superior to both PICE and direct cost optimization.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "368",
      title:
        "Computational Complexity of Computing Symmetries in Finite-Domain Planning",
      authors: ["Alexander Shleyfman", "Peter Jonsson"],
      keyphrases: "",
      abstract:
        "Symmetry-based pruning is a powerful method for reducing the search effort in finite-domain planning. This method is based on exploiting an automorphism group connected to the ground description of the planning task – these automorphisms are known as structural symmetries. In particular, we are interested in the StructSym problem where the generators of this group are to be computed. It has been observed in practice that the StructSym problem is surprisingly easy to solve. We explain this phenomenon by showing that StructSym is GI-complete, i.e., the graph isomorphism problem is polynomial-time equivalent to it and, consequently, solvable in quasi-polynomial time. This implies that it is solvable substantially faster than most computationally hard problems encountered in AI. We accompany this result by identifying natural restrictions of the planning task and its causal graph that ensure that StructSym can be solved in polynomial time. Given that the StructSym problem is GI-complete and thus solvable quite efficiently, it is interesting to analyse if other symmetries (than those that are encompassed by the StructSym problem) can be computed and/or analysed efficiently, too. To this end, we present a highly negative result: checking whether there exists an automorphism of the state transition graph that maps one state s into another state t is a PSPACE-hard problem and, consequently, at least as hard as the planning problem itself.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
    {
      UID: "370",
      title: "Selecting goals in oversubscription planning using relaxed plans",
      authors: ["Angel Garcia-Olaya", "Tomas De La Rosa", "Daniel Borrajo"],
      keyphrases: "",
      abstract:
        "Planning deals with the task of finding an ordered set of actions that achieves some goals from an initial state. In many real-world applications it is unfeasible to find a plan achieving all goals due to limitations in the available resources. A common case consists of having a bound on a given cost measure that is less than the optimal cost needed to achieve all goals. Oversubscription planning (OSP) is the field of Automated Planning dealing with such kinds of problems. Usually, OSP generates plans that achieve only a subset of the goals set. In this paper we present a new technique to a priori select goals in no-hard-goals satisficing OSP by searching in the space of subsets of goals. A key property of the proposed approach is that it is planner-independent once the goals have been selected; it creates a new non-OSP problem that can be solved using off-the-shelf planners. Extensive experimental results show that the proposed approach outperforms state-of-the-art OSP techniques in several domains of the International Planning Competition.",
      topics: [],
      track: "JOURNAL",
      url: "",
    },
  ];
  keyword_filter = [];
  top.program = [];
  for (var id in myObj) {
    top.program.push(myObj[id]);
    top.program[id]["render"] = true;
    top.program[id]["render_track"] = true;
    top.program[id]["render_topics"] = true;
  }
  update_keyword_count();
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function setup_paper_page() {
  //if (top.program.length == 0){
  //alert("this is the problem");
  //	await sleep(1000);
  // }
  update_keyword_count();
  render_paper_list();
  render_keyword_columns();
}

function reset_program() {
  var non_zero_keywords_left = false;
  for (var tpc in keyword_cnt) {
    if (keyword_cnt[tpc] > 0) {
      non_zero_keywords_left = true;
    }
  }
  if (non_zero_keywords_left == false) {
    keyword_filter = [];
    reset_topics_program();
  }

  for (var id in top.program) {
    top.program[id]["render"] = true;
  }
  update_keyword_count();
}

function reset_track_program() {
  var non_zero_keywords_left = false;
  for (var tpc in keyword_cnt) {
    if (keyword_cnt[tpc] > 0) {
      non_zero_keywords_left = true;
    }
  }
  if (non_zero_keywords_left == false) {
    keyword_filter = [];
    reset_topics_program();
  }

  for (var id in top.program) {
    top.program[id]["render_track"] = true;
  }
  update_keyword_count();
  render_paper_list();
  render_keyword_columns();
}
function reset_topics_program() {
  for (var id in top.program) {
    top.program[id]["render_topics"] = true;
  }
}

function render_with_topics(track) {
  for (var id in top.program) {
    if (top.program[id]["track"] == track) {
      top.program[id]["render_track"] = true;
    } else {
      top.program[id]["render_track"] = false;
    }
  }
  update_keyword_count();
  render_paper_list();
  render_keyword_columns();
}

function update_keyword_count() {
  keyword_cnt = {};
  for (var id in top.program) {
    if (
      top.program[id]["render"] == true &&
      top.program[id]["render_track"] == true &&
      top.program[id]["render_topics"] == true
    ) {
      for (tpc_id in top.program[id]["topics"]) {
        tpc = top.program[id]["topics"][tpc_id];
        if (tpc in keyword_cnt) {
          keyword_cnt[tpc] += 1;
        } else {
          keyword_cnt[tpc] = 1;
        }
      }
    }
  }
}

function update(search_string) {
  var str_parts = search_string.toLowerCase().split(" ");
  reset_program();
  if (str_parts.length > 0) {
    for (var s_id in str_parts) {
      for (var id in top.program) {
        if (top.program[id]["render"] == true) {
          var keyword_match_found = false;
          var match_found = false;
          if (
            top.program[id]["title"].toLowerCase().includes(str_parts[s_id]) ==
            true
          ) {
            match_found = true;
          }
          for (var k_id in top.program[id]["authors"]) {
            if (
              top.program[id]["authors"][k_id]
                .toLowerCase()
                .includes(str_parts[s_id]) == true
            ) {
              match_found = true;
            }
          }
          if (
            top.program[id]["abstract"]
              .toLowerCase()
              .includes(str_parts[s_id]) == true
          ) {
            match_found = true;
          }
          if (
            top.program[id]["track"].toLowerCase().includes(str_parts[s_id]) ==
            true
          ) {
            match_found = true;
          }
          for (var k_id in top.program[id]["topics"]) {
            if (
              top.program[id]["topics"][k_id]
                .toLowerCase()
                .includes(str_parts[s_id]) == true
            ) {
              match_found = true;
            }
          }
          for (var k_id in top.program[id]["topics"]) {
            if (
              top.program[id]["topics"][k_id]
                .toLowerCase()
                .includes(str_parts[s_id]) == true
            ) {
              match_found = true;
            }
          }
          if (match_found != true) {
            top.program[id]["render"] = false;
          }
          if (keyword_filter.length > 0) {
            var all_keywords_match = true;
            for (var keywrd_id in keyword_filter) {
              var keywrd = keyword_filter[keywrd_id];
              var keyword_match_found = false;
              for (var k_id in top.program[id]["topics"]) {
                if (top.program[id]["topics"][k_id] == keywrd) {
                  keyword_match_found = true;
                }
              }
              if (keyword_match_found == false) {
                all_keywords_match = false;
              }
            }
            if (all_keywords_match != true) {
              top.program[id]["render_topics"] = false;
            }
          }
        }
      }
    }
  }
  update_keyword_count();
  render_paper_list();
  render_keyword_columns();
}

function render_paper_list() {
  var paper_cntr = 0;
  counter_template_str = "@CNTR_CNT@";
  keyword_template_str = `<span style="max-width: 100%;text-overflow: ellipsis;overflow: hidden;margin: 2px" class="badge bg-secondary">@INDIV_KEYWORD@</span>`;
  template_str = `
                <div class="accordion-item mb-1">
                    <h2 class="accordion-header" id="flush-heading@ID@">
                      <button
                        class="accordion-button accordion-header-item collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse@ID@"
                      >
                        @TITLE@
                      </button>
                    </h2>
                    <div
                      id="flush-collapse@ID@"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionPaperList"
                    >
                      <div class="accordion-body">
                        <div class="mb-3">
                          @KEYWORD@
                        </div>
                        <p class="mb-2">
                          <b>Authors: </b>
                          @AUTHOR_STR@
                        </p>
                        <p>
                          <b>Abstract: </b>
                          @ABSTRACT@
                        </p>
                        <a href=@URL@ target="_blank" type="button" class="btn btn-dark btn-sm">
                          PDF
                        </a>
                      </div>
                    </div>
                  </div>
                 `;
  str = "";
  for (var id in top.program) {
    element = top.program[id];
    keyword_str = "";
    if (
      element["render"] == true &&
      element["render_track"] == true &&
      element["render_topics"] == true
    ) {
      paper_cntr += 1;
      for (var k in element["topics"]) {
        keyword_str += keyword_template_str.replace(
          /@INDIV_KEYWORD@/g,
          element["topics"][k]
        );
      }
      if (element["url"] != "") {
        url_str = element["url"];
      } else {
        url_str = "#";
      }
      if (element["authors"].length > 1) {
        author_str =
          element["authors"].slice(0, -1).join(", ") +
          ", and " +
          element["authors"][element["authors"].length - 1];
      } else {
        author_str = element["authors"][0];
      }
      str += template_str
        .replace(/@ID@/g, element["UID"])
        .replace(/@TITLE@/g, element["title"])
        .replace(/@KEYWORD@/g, keyword_str)
        .replace(/@AUTHOR_STR@/g, author_str)
        .replace(/@ABSTRACT@/g, element["abstract"])
        .replace(/@URL@/g, url_str);
    }
  }

  var accordion = document.getElementById("accordionPaperList");
  accordion.innerHTML = str;
  var cntr_element = document.getElementById("counter");
  cntr_element.innerHTML = counter_template_str.replace(
    "@CNTR_CNT@",
    paper_cntr
  );
}

function update_paper_list_for_topics() {
  keyword_filter = [];
  for (var keyword in keyword_cnt) {
    if (keyword_cnt[keyword] > 0) {
      keyword_anchor = document.getElementById("KEYWORD_" + keyword);
      is_active = false;
      for (var cid in keyword_anchor.classList) {
        if (keyword_anchor.classList[cid] == "active") {
          is_active = true;
        }
      }
      if (is_active == true) {
        keyword_filter.push(keyword);
      }
    }
  }
  for (var id in top.program) {
    if (keyword_filter.length > 0) {
      if (
        top.program[id]["render"] == true &&
        top.program[id]["render_track"] == true
      ) {
        var all_keywords_match = true;

        for (var keywrd_id in keyword_filter) {
          var keywrd = keyword_filter[keywrd_id];

          keyword_match_found = false;
          for (var k_id in top.program[id]["topics"]) {
            if (top.program[id]["topics"][k_id] == keywrd) {
              keyword_match_found = true;
            }
          }
          if (keyword_match_found == false) {
            all_keywords_match = false;
          }
        }
        if (all_keywords_match != true) {
          top.program[id]["render_topics"] = false;
        } else {
          top.program[id]["render_topics"] = true;
        }
      }
    } else {
      top.program[id]["render_topics"] = true;
    }
  }
  update_keyword_count();
  render_paper_list();
  render_keyword_columns();
}

function render_keyword_columns() {
  // Create items array
  var items = Object.keys(keyword_cnt).map(function (key) {
    return [key, keyword_cnt[key]];
  });

  // Sort the array based on the second element
  items.sort(function (first, second) {
    return second[1] - first[1];
  });

  topics_str = `
                <a
                    href="javascript:update_paper_list_for_topics();currentTippy = null;start()"
                    class="list-group-item list-group-keyword list-group-item-action d-flex justify-content-between align-items-start@ACT@"
                    id="KEYWORD_@TPC@"
                  >
                    @TPC@
                    <span class="badge bg-secondary rounded-pill" style="margin-left:10px">@CNT@</span>
                  </a>
                 `;
  str = "";
  for (var tpc_cnt_id in items) {
    tpc_cnt = items[tpc_cnt_id];
    tpc = tpc_cnt[0];
    cnt = tpc_cnt[1];

    active_str = "";
    for (var id in keyword_filter) {
      if (tpc == keyword_filter[id]) {
        active_str = " active";
      }
    }
    str += topics_str
      .replace(/@TPC@/g, tpc)
      .replace(/@ACT@/g, active_str)
      .replace(/@CNT@/g, cnt);
  }

  var column = document.getElementById("Keyword_column");
  column.innerHTML = str;
}
