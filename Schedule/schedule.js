import { paperData } from "./paperData.js";
import { TutorialContent } from "./tutorialData.js";
import { WorkshopContent } from "./workshopData.js";

var app = new Vue({
  el: "#app",
  data: {
    paper: paperData,
    titleOfWeek1: "DC, Workshops, and Tutorials <br> Week 1",
    titleOfWeek2: "Main Conference <br> Week 2",
    nowYear: new Date().getFullYear(),
    nowMonth: new Date().getMonth() + 1,
    nowDay: new Date().getDate(),
    nowZone: new Date().getTimezoneOffset() / -60,
    nowHour: new Date().getTimezoneOffset() / 60 - 4 + new Date().getHours(),
    day: [{ sty: "style_day" }, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    week: 1,
    keywords: "",
    searchShow: {},
    zone: new Date().getTimezoneOffset() / -60,
    zoneOptions: [
      { text: "UTC +12", value: 12 },
      { text: "UTC +11", value: 11 },
      { text: "UTC +10", value: 10 },
      { text: "UTC +9", value: 9 },
      { text: "UTC +8", value: 8 },
      { text: "UTC +7", value: 7 },
      { text: "UTC +6", value: 6 },
      { text: "UTC +5", value: 5 },
      { text: "UTC +4", value: 4 },
      { text: "UTC +3", value: 3 },
      { text: "UTC +2", value: 2 },
      { text: "UTC +1", value: 1 },
      { text: "UTC +0", value: 0 },
      { text: "UTC -1", value: -1 },
      { text: "UTC -2", value: -2 },
      { text: "UTC -3", value: -3 },
      { text: "UTC -4", value: -4 },
      { text: "UTC -5", value: -5 },
      { text: "UTC -6", value: -6 },
      { text: "UTC -7", value: -7 },
      { text: "UTC -8", value: -8 },
      { text: "UTC -9", value: -9 },
      { text: "UTC -10", value: -10 },
      { text: "UTC -11", value: -11 },
    ],
    week1_prog: 1,
    HSDIP_DAY: 4,
    Workshop_Days: [4, 5, 6],
    Tutorials: [
      "",
      "Hands-on Introduction to dcss-ai-wrapper: A Dungeon Crawl Stone Soup API for AI Planning",
      "Trustworthy AI: A Computational Perspective",
    ],
    Week1_tutorial: [
      {
        day: 3,
        tutorial_list: [
          [{ type: "tutorial_session", num: 1, time: 7, endtime: 11 }],
          [{ type: "tutorial_session", num: 2, time: 7, endtime: 11 }],
        ],
      },
    ],
    tutNum: "",
    date: [
      " ",
      "1st",
      "2nd",
      "3rd",
      "4th",
      "5th",
      "6th",
      "7th",
      "8th",
      "9th",
      "10th",
      "11th",
      "12th",
      "13th",
      "14th",
    ],
    gather:
      '<div class="gather"><a href="https://gather.town/app/V6z77iZjpGdUzBPo/ICAPS21" target="_blank"><strong>Live Get-Together</strong></a></div>',
    session: [
      "",
	  "Search",
	  "Scheduling",
	  "Hierarchical Task Networks",
	  "Classical Planning | Path Planning | Search",
	  "Probabilistic Planning",
	  "Search",
	  "Non-Deterministic Planning | Oversubscription Planning",
	  "Explainability | Richer Formalisms",
	  "Classical Planning | Search",
	  "Probabilistic Planning | Scheduling | Robotics",
	  "Hybrid Planning| Conformant Planning",
	  "Path Planning | Search",
	  "Temporal Planning | Numeric Planning | Reinforcement Learning",
	  "Reinforcement Learning",
	  "Classical Planning",
      "Classical Planning | Search",
      "Classical Planning",
	  "Scheduling",
      "Execution | Control",
      "Temporal Planning | Numeric Planning | Reinforcement Learning",
	  "Representation | Generalized Planning",
	  "Representation | Partial Order Planning | Multi-Agent Planning",
	  "Reinforcement Learning",
    ],
    DC_day: 2,
    workshop_day: 4,
    workshop_list: [
      "HSDIP",
      "WIPC",
      "INTEX",
      "XAIP",
      "HPLAN",
      "FINPLAN",
      "PRL",
      "KEPS",
      "PLANROB",
      "SPARK",
    ],
    DC_sched: [
      {
        type: "dc_start",
        num: 1,
        startHour: 10,
        startMin: 0,
        endHour: 10,
        endMin: 15,
      },
      {
        type: "Socializing",
        num: 2,
        startHour: 10,
        startMin: 15,
        endHour: 10,
        endMin: 30,
      },
      {
        type: "dc_session",
        num: 3,
        session_num: 1,
        startHour: 10,
        startMin: 30,
        endHour: 11,
        endMin: 0,
      },
      {
        type: "break",
        num: 4,
        startHour: 11,
        startMin: 0,
        endHour: 11,
        endMin: 10,
      },
      {
        type: "DC Invited Talk",
        num: 5,
        startHour: 11,
        startMin: 10,
        endHour: 11,
        endMin: 40,
      },
      {
        type: "dc_session",
        num: 6,
        session_num: 2,
        startHour: 11,
        startMin: 40,
        endHour: 12,
        endMin: 10,
      },
      {
        type: "break",
        num: 7,
        startHour: 12,
        startMin: 10,
        endHour: 12,
        endMin: 40,
      },
      {
        type: "DC Panel",
        num: 8,
        startHour: 12,
        startMin: 40,
        endHour: 13,
        endMin: 10,
      },
      {
        type: "dc_session",
        num: 9,
        session_num: 3,
        startHour: 13,
        startMin: 10,
        endHour: 13,
        endMin: 40,
      },
      {
        type: "break",
        num: 10,
        startHour: 13,
        startMin: 40,
        endHour: 13,
        endMin: 50,
      },
      {
        type: "DC Invited Talk",
        num: 11,
        startHour: 13,
        startMin: 50,
        endHour: 14,
        endMin: 20,
      },
      {
        type: "Socializing",
        num: 12,
        startHour: 14,
        startMin: 20,
        endHour: 14,
        endMin: 30,
      },
      {
        type: "End",
        num: 13,
        startHour: 14,
        startMin: 30,
        endHour: 14,
        endMin: 30,
      },
    ],
    Workshop: [],
    DC_programs: [
      "",
      "Intro / Welcome (Sarah and Jeremy)",
      "Student Round Robin Intro (All)",
      "Session 1",
      "Short Break",
      "Invited talk: Ron Petrik",
      "Session 2",
      "Long Break",
      "Panel Disucssion: Paths to Profession",
      "Session 3",
      "Short Break",
      "Invited talk: Kartik Talamadupula",
      "Quiz Show/Bingo card?",
      "END",
    ],
    DC_session_info: ["","","","Ebaa Alnazer, Matan Sudry, Qisong Yang, Shahaf S. Shperberg, Anubhav Singh,Marshall Clifton",
                      "","","Alexander Tuisov, Ronen Nir, Simona Ondrckova, Clemens Buchner, Augusto B. Correa, Luigi Bonassi",
                      "","","Chao Lei, Thiago D. Simao , Andrew Murray, Ruoxi Li, Kristyna Pantuckova","","",""],
    Week2: [
      [
        { day: 9, type: "gather", time: 0, end: 1 },
        { type: "session", num: 1, time: 1, end: 2 },
        { type: "session", num: 2, time: 2, end: 3 },
        { type: "session", num: 3, time: 3, end: 4 },
        { type: "Socializing", time: 4, end: 6 },
        { type: "gather", time: 6, end: 7 },
        { type: "session", num: 4, time: 7, end: 8 },
        { type: "session", num: 5, time: 8, timeMin: 0, end: 8, endMin: 45, type2: "Opening Remarks", time2: 8, timeMin2: 45, end2: 9, endMin2: 0},
        { type: "Invited Talk", time: 9, end: 10 },
        { type: "Industry Talks", time: 10, end: 12 },
        { type: "Socializing", time: 12, end: 14 },
        { type: "session", num: 1, time: 14, end: 15 },
        { type: "session", num: 2, time: 15, end: 16 },
        { type: "session", num: 3, time: 16, end: 17 },
        { type: "gather", time: 17, end: 18 },
        { type: "Socializing", time: 18, end: 20 },
        { type: "session", num: 4, time: 20, end: 21 },
        { type: "session", num: 5, time: 21, end: 22 },
        { type: "gather", time: 22, end: 23 },
      ],
      [
        { day: 10, type: "gather", time: 0, end: 1 },
        { type: "session", num: 6, time: 1, end: 2 },
        { type: "session", num: 7, time: 2, end: 3 },
        { type: "session", num: 8, time: 3, end: 4 },
        { type: "Socializing", time: 4, end: 6 },
        { type: "gather", time: 6, end: 7 },
        { type: "session", num: 9, time: 7, end: 8 },
        { type: "Competitions", time: 8, end: 11 },
        { type: "Invited Talk", time: 11, end: 12 },
        { type: "Socializing", time: 12, end: 14 },
        { type: "session", num: 7, time: 14, end: 15 },
        { type: "session", num: 6, time: 15, end: 16 },
        { type: "session", num: 8, time: 16, end: 17 },
        { type: "gather", time: 17, end: 18 },
        { type: "Socializing", time: 18, end: 20 },
        { type: "session", num: 9, time: 20, end: 21 },
        { type: "gather", time: 21, end: 23 },
      ],
      [
        { day: 11, type: "gather", time: 0, end: 1 },
        { type: "gather", num: 10, time: 1, tiemMin:0, end: 1, endMin:15, type2:"session", time2:1, timeMin2: 15, end2: 2, endMin2: 0 },
        { type: "session", num: 11, time: 2, end: 3 },
        { type: "session", num: 12, time: 3, end: 4 },
        { type: "Socializing", time: 4, end: 6 },
        { type: "gather", time: 6, end: 7 },
        { type: "session", num: 13, time: 7, end: 8 },
        { type: "session", num: 14, time: 8, end: 9 },
        { type: "Invited Talk", time: 9, end: 10 },
		{ type: "Demos", time: 10, end: 11 },		
        { type: "Demos/ Diversity Event", time: 11, end: 12 },
		{ type: "Diversity Event", time: 12, end: 13 },
        { type: "Socializing", time: 13, end: 14 },
        { type: "session", num: 12, time: 14, end: 15 },
        { type: "session", num: 11, time: 15, end: 16 },
        { type: "session", num: 10, time: 16, timeMin:0, end: 16, endMin:45},
        { type: "gather", time: 17, end: 18 },
        { type: "Socializing", time: 18, end: 20 },
        { type: "session", num: 13, time: 20, end: 21 },
        { type: "session", num: 14, time: 21, end: 22 },
        { type: "gather", time: 22, end: 23 },
      ],
      [
        { day: 12, type: "gather", time: 0, end: 1 },
        { type: "session", num: 15, time: 1, end: 2 },
        { type: "session", num: 16, time: 2, end: 3 },
        { type: "session", num: 17, time: 3, end: 4 },
        { type: "Socializing", time: 4, end: 6 },
        { type: "gather", time: 6, end: 7 },
        { type: "session", num: 18, time: 7, end: 8 },
        { type: "Community Meeting", time: 8, end: 10 },
        { type: "Community Socializing", time: 10, end: 12 },
        { type: "Socializing", time: 12, end: 14 },
        { type: "session", num: 15, time: 14, end: 15 },
        { type: "session", num: 16, time: 15, end: 16 },
        { type: "session", num: 17, time: 16, end: 17 },
        { type: "gather", time: 17, end: 18 },
        { type: "Socializing", time: 18, end: 20 },
        { type: "session", num: 18, time: 20, end: 21 },
        { type: "gather", time: 21, end: 23 },
      ],
      [
        { day: 13, type: "gather", time: 0, end: 1 },
        { type: "gather", num: 19, time: 1, tiemMin:0, end: 2, endMin:30, type2:"session", time2:1, timeMin2: 30, end2: 2, endMin2: 0 },
        { type: "session", num: 20, time: 2, end: 3 },
        { type: "session", num: 21, time: 3, end: 4 },
        { type: "Socializing", time: 4, end: 6 },
        { type: "gather", time: 6, end: 7 },
        { type: "session", num: 22, time: 7, end: 8 },
        { type: "session", num: 23, time: 8, end: 9 },
        { type: "Posters", time: 9, end: 11 },
        { type: "Invited Talk", time: 11, end: 12 },
        { type: "Socializing", time: 12, end: 14 },
        { type: "gather", num: 19, time: 14, tiemMin:0, end: 15, endMin:30, type2:"session", time2:14, timeMin2: 30, end2: 15, endMin2: 0 },
        { type: "session", num: 20, time: 15, end: 16 },
        { type: "session", num: 21, time: 16, end: 17 },
        { type: "gather", time: 17, end: 18 },
        { type: "Socializing", time: 18, end: 20 },
        { type: "session", num: 22, time: 20, end: 21 },
        { type: "session", num: 23, time: 21, end: 22 },
        { type: "gather", time: 22, end: 23 },
      ],
    ],
    modal_sessionNum: "",
    modal_type: "",
    modal_date: "",
    modal_time: "",
	modal_timeMin: "",
    modal_end: "",
	modal_endMin: "",
    sessionPaper: [
      [],
      [
        { id: 139, paper: "Dantzig-Wolfe Decomposition for Cost Partitioning" },
        {
          id: 153,
          paper: "Exploiting Cyclic Dependencies in Landmark Heuristics",
        },
        { id: 230, paper: "Subset-Saturated Transition Cost Partitioning" },
        {
          id: 287,
          paper: "Online Saturated Cost Partitioning for Classical Planning",
        },
      ],
      [
        {
          id: 151,
          paper:
            "On the Compilability and Expressive Power of State-Dependent Action Costs",
        },
        {
          id: 152,
          paper:
            "Learning Heuristic Selection with Dynamic Algorithm Configuration",
        },
        {
          id: 282,
          paper: "Automatic Instance Generation for Classical Planning",
        },
        {
          id: 368,
          paper:
            "Computational Complexity of Computing Symmetries in Finite-Domain Planning",
        },
      ],
      [
        {
          id: 36,
          paper:
            "Iterative-deepening Bidirectional Heuristic Search with Restricted Memory",
        },
        {
          id: 128,
          paper: "Delete-Relaxation Heuristics for Lifted Classical Planning",
        },
        { id: 146, paper: "Endomorphisms of Lifted Planning Problems" },
        { id: 322, paper: "Hierarchical Width-Based Planning and Learning" },
      ],
      [
        {
          id: 17,
          paper:
            "Approximate bi-criteria search by efficient representation of subsets of the Pareto-optimal frontier",
        },
        { id: 61, paper: "Conflict-Free Multi-Agent Meeting" },
        {
          id: 99,
          paper:
            "OMCoRP: An Online Mechanism for Competitive Robot Prioritization",
        },
        {
          id: 366,
          paper: "Safe Multi-Agent Pathfinding with Time Uncertainty",
        },
      ],
      [
        {
          id: 191,
          paper: "A Competitive Analysis of Online Multi-Agent Path Finding",
        },
        { id: 345, paper: "Conflict-Based Increasing Cost Search" },
        {
          id: 353,
          paper:
            "Speeding Up Search-Based Motion Planning using Expansion Delay Heuristics",
        },
        {
          id: 165,
          paper:
            "Scalable Rail Planning and Replanning: Winning the 2020 Flatland Challenge",
        },
      ],
      [
        { id: 34, paper: "Jump Point Search with Temporal Obstacles" },
        { id: 123, paper: "Width-Based Backward Search" },
        {
          id: 140,
          paper:
            "The Consistent Case in Bidirectional Search and a Bucket-to-Bucket Algorithm as a Middle Ground between Front-to-End and Front-to-Front",
        },
        {
          id: 206,
          paper: "Contracting and Compressing Shortest Path Databases",
        },
      ],
      [
        {
          id: 67,
          paper:
            "E2Coop: Energy Efficient and Cooperative Obstacle Detection and Avoidance for UAV Swarms",
        },
        {
          id: 84,
          paper:
            "Hierarchical Freespace Planning for Navigation in Unfamiliar Worlds",
        },
        { id: 187, paper: "Approximate Novelty Search" },
        {
          id: 297,
          paper:
            "S*: A Heuristic Information-Based Approximation Framework for Multi-Goal Path Finding",
        },
      ],
      [
        {
          id: 145,
          paper:
            "Predicted Composite Signed-Distance Fields for Real-Time Motion Planning in Dynamic Environments",
        },
        {
          id: 209,
          paper:
            "Towards Time-Optimal Any-Angle Path Planning With Dynamic Obstacles",
        },
        {
          id: 222,
          paper: "Improving AlphaZero Using Monte-Carlo Graph Search",
        },
        {
          id: 363,
          paper:
            "Attributed Transition-based Domain Control Knowledge for Domain-Independent Planning",
        },
      ],
      [
        { id: 4, paper: "Task-Aware Waypoint Sampling for Robotic Planning" },
        {
          id: 76,
          paper:
            "Verifying Plans and Scripts for Robotics Tasks Using Performance Level Profiles",
        },
        {
          id: 261,
          paper: "In-Station Train Dispatching: A PDDL+ Planning Approach",
        },
        {
          id: 309,
          paper:
            "Non-Deterministic Conformant Planning Using a Counterexample-Guided Incremental Compilation to Classical Planning",
        },
      ],
      [
        {
          id: 132,
          paper: "Flexible FOND Planning with Explicit Fairness Assumptions",
        },
        {
          id: 134,
          paper:
            "Pattern Databases for Goal-Probability Maximization in Probabilistic Planning",
        },
        {
          id: 274,
          paper:
            "Rule-based shielding for Partially Observable Monte-Carlo Planning",
        },
        {
          id: 370,
          paper:
            "Selecting goals in oversubscription planning using relaxed plans",
        },
      ],
      [
        {
          id: 147,
          paper:
            "Data-Driven Decision-Theoretic Planning using Recurrent Sum-Product-Max Networks",
        },
        {
          id: 305,
          paper:
            "Multiple Plans are Better than One: Diverse Stochastic Planning",
        },
      ],
      [
        {
          id: 79,
          paper:
            "Robust Opponent Modeling via Adversarial Ensemble Reinforcement Learning",
        },
        {
          id: 201,
          paper:
            "Learning and Exploiting Shaped Reward Models for Large Scale Multiagent RL",
        },
        {
          id: 208,
          paper:
            "Integrating Knowledge Compilation with Reinforcement Learning for Routes",
        },
        {
          id: 180,
          paper:
            "DeepFreight: A Model-free Deep-reinforcement-learning-based Algorithm for Multi-transfer Freight Delivery",
        },
      ],
      [
        {
          id: 86,
          paper:
            "Guiding Robot Exploration in Reinforcement Learning via Automated Planning",
        },
        {
          id: 190,
          paper:
            "A Simulator-based Planning Framework for Optimizing Autonomous Greenhouse Control Strategy",
        },
        {
          id: 354,
          paper:
            "A Deep Ensemble Method for Multi-Agent Reinforcement Learning: A Case Study on Air Traffic Control",
        },
        {
          id: 360,
          paper:
            "Constrained Multiagent Markov Decision Processes: a Taxonomy of Problems and Algorithms",
        },
      ],
      [
        {
          id: 24,
          paper:
            "Situated Temporal Planning Using Deadline-aware Metareasoning",
        },
        {
          id: 144,
          paper:
            "Abstraction-Guided Policy Recovery from Expert Demonstrations",
        },
        {
          id: 215,
          paper: "Translations from Discretised PDDL+ to Numeric Planning",
        },
        { id: 273, paper: "Meta Reinforcement Learning for Heuristic Planing" },
      ],
      [
        {
          id: 55,
          paper:
            "RePReL: Integrating Relational Planning and Reinforcement Learning for Effective Abstraction",
        },
        {
          id: 120,
          paper:
            "LM-cut and Operator Counting Heuristics for Optimal Numeric Planning with Simple Conditions",
        },
        {
          id: 257,
          paper:
            "Privacy-Preserving Algorithm for Decoupling of Multi-Agent Plans with Uncertainty",
        },
        {
          id: 312,
          paper:
            "Blind Decision Making: Reinforcement Learning with Delayed Observations",
        },
      ],
      [
        {
          id: 300,
          paper:
            "Automated Production Scheduling for Artificial Teeth Manufacturing",
        },
        {
          id: 35,
          paper:
            "Scheduling with Complete Multipartite Incompatibility Graph on Parallel Machines",
        },
        {
          id: 328,
          paper:
            "Total Completion Time Minimization for Scheduling with Incompatibility Cliques",
        },
        {
          id: 361,
          paper:
            "Constraint-based Scheduling for Paint Shops in the Automotive Supply Industry",
        },
      ],
      [
        {
          id: 54,
          paper:
            "Distributed Fair Scheduling for Information Exchange in Multi-Agent Systems",
        },
        {
          id: 62,
          paper:
            "Online Hedge Reservation for Diverse Plans and Competitive Analysis",
        },
        {
          id: 109,
          paper:
            "Scheduling Stochastic Jobs - Complexity and Approximation Algorithms",
        },
        {
          id: 238,
          paper:
            "GRAND-VISION: An Intelligent System for Optimized Deployment Scheduling of Law Enforcement Agents",
        },
      ],
      [
        {
          id: 48,
          paper:
            "Explaining path plan optimality: fast explanation methods for navigation meshes using full and incremental inverse optimization",
        },
        {
          id: 60,
          paper:
            "Compositional Approach to Translate LTLf/LDLf into Deterministic Finite Automata",
        },
        {
          id: 219,
          paper:
            "On Planning with Qualitative State-Trajectory Constraints in PDDL3 by Compiling them Away",
        },
        {
          id: 306,
          paper:
            "vPlanSim: An Open Source Graphical Interface for the Visualisation and Simulation of AI Systems",
        },
      ],
      [
        {
          id: 5,
          paper:
            "Block Compression and Invariant Pruning for SAT-based Totally-Ordered HTN Planning",
        },
        {
          id: 38,
          paper:
            "Translating Totally Ordered HTN Planning Problems to Classical Planning Problems Using Regular Approximation of Context-Free Languages",
        },
        {
          id: 44,
          paper:
            "Fully Observable Nondeterministic HTN Planning -- Formalisation and Complexity Results",
        },
        { id: 49, paper: "Loop Detection in the PANDA Planning System" },
      ],
      [
        {
          id: 118,
          paper:
            "Autonomous Building of Structures in Unstructured Environments via AI Planning",
        },
        {
          id: 130,
          paper: "Knowledge Compilation for Nondeterministic Action Languages",
        },
        { id: 264, paper: "Generalized Planning as Heuristic Search" },
        {
          id: 362,
          paper:
            "What do you really want to do? Towards a Theory of Intentions for Human-Robot Collaboration",
        },
      ],
      [
        {
          id: 37,
          paper:
            "A Closer Look at Causal Links: Complexity Results for Delete-Relaxation in Partial Order Causal Link (POCL) Planning",
        },
        { id: 143, paper: "Decentralized Refinement Planning and Acting" },
        { id: 163, paper: "Automated design of fMRI paradigms" },
        {
          id: 364,
          paper: "Landmark-based approaches for goal recognition as planning",
        },
      ],
      [
        { id: 85, paper: "Temporal Reasoning with Kinodynamic Networks" },
        {
          id: 339,
          paper:
            "PLGRIM: Hierarchical Value Learning for Large-scale Exploration in Unknown Environments",
        },
        {
          id: 365,
          paper: "Self-Reliant Rovers for Increased Mission Productivity",
        },
      ],
      [
        {
          id: 338,
          paper:
            "Computing Opportunities to Augment Plans for Novel Replanning during Execution",
        },
        { id: 367, paper: "Adaptive Smoothing for Path Integral Control" },
      ],
    ],
    sum: 0,
    oldTime: new Date(),
    min_str: "00",
	invitedNum: "",
	InvitedSpeakers: ["Manuela Veloso", "Stefan Edelkamp", "Jieping Ye", "", "Richard Sutton"],
	Chairs: ["Robert Goldman", "Susanne	Biundo", "Qiang	Yang", "", "Michael Katz"],
	IndustryTalk: [
		{title:"Industrial Scheduling and Planning", authors:"Yuan Mingxuan"},
		{title:"Environment Learning - Data-Driven Approaches for Real-World Decision Optimization", authors:"Wei-Wei Tu"},
		{title:"Automated Planning and Constraint Reasoning for High Throughput Laboratory Automation", authors:"Dan Bryce"},
		{title:"Planning for Controlling Business-to-business Applications", authors:"Hector Palacious"},
		{title:"Designing Goal-Oriented Conversational Agents using Automated Planning", authors:"Tathagata Chakraborti"},
		{title:"Autonomously responding to the environment with a distributed space system", authors:"Nick Cramer"}
	]
  },
  //computed:{
  //setWorkShopClass:function(workshop_name){
  //      let class_map = {};
  //      for (let i=0; i< this.workshop_list.length; i++){
  //           if (workshop_name == this.workshop_list[i]){
  //               class_map[this.workshop_list[i]] = true;
  //           }
  //           else{
  //               class_map[this.workshop_list[i]] = false;
  //           }
  //      }
  //    return class_map;
  //},
  //},
  methods: {
    isWorkshopTime: function (time, workshop, workshop_day) {
      if (
        WorkshopContent[workshop]["timepoints"][workshop_day].includes(time)
      ) {
        return true;
      }
      return false;
    },
    getWorkShopUrl: function (workshop) {
      return WorkshopContent[workshop]["link"];
    },
    getTutorialContent: function (tutorial_num) {
      return TutorialContent[tutorial_num]["description"];
    },
    getTutorialName: function (tutorial_num) {
      return TutorialContent[tutorial_num]["name"];
    },
    searchEnter: function () {
      let i = "",
        j = "",
        k = "";
      for (k in this.searchShow) this.$set(this.searchShow, k, false);
      for (i in this.paper) {
        for (j in this.paper[i]) {
          if (this.paper[i][j].id == this.keywords.toLowerCase())
            this.$set(this.searchShow, "session" + i.toString(), true);
          else if (
            this.paper[i][j].title
              .toLowerCase()
              .indexOf(this.keywords.toLowerCase()) >= 0
          )
            this.$set(this.searchShow, "session" + i.toString(), true);
          else if (
            this.paper[i][j].authors
              .toLowerCase()
              .indexOf(this.keywords.toLowerCase()) >= 0
          )
            this.$set(this.searchShow, "session" + i.toString(), true);
          else if (
            this.paper[i][j].keywords
              .toLowerCase()
              .indexOf(this.keywords.toLowerCase()) >= 0
          )
            this.$set(this.searchShow, "session" + i.toString(), true);
        }
      }
      for (i in this.session) {
        if (
          this.session[i].toLowerCase().indexOf(this.keywords.toLowerCase()) >=
          0
        )
          this.$set(this.searchShow, "session" + i.toString(), true);
        if (i.toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
          this.$set(this.searchShow, "session" + i.toString(), true);
      }
	  for (i = 1; i < 24; i++) {
		  if (("session" + i).indexOf(this.keywords.toLowerCase()) >= 0) this.$set(this.searchShow, "session" + i, true);
	  }
      if ("Session".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "session", true);
      if (
        "Live Get-Together"
          .toLowerCase()
          .indexOf(this.keywords.toLowerCase()) >= 0
      )
        this.$set(this.searchShow, "gather", true);
      if ("Socializing".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "Socializing", true);
      if (
        "Community Meeting"
          .toLowerCase()
          .indexOf(this.keywords.toLowerCase()) >= 0
      )
        this.$set(this.searchShow, "Community Meeting", true);
      if (
        "Community Socializing"
          .toLowerCase()
          .indexOf(this.keywords.toLowerCase()) >= 0
      )
        this.$set(this.searchShow, "Community Socializing", true);
      if (
        "Invited Talk".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0
      )
        this.$set(this.searchShow, "Invited Talk", true);
      if ("Industry Talks".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "Industry Talks", true);
      if (
        "Competitions".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0
      )
        this.$set(this.searchShow, "Competitions", true);
	  if ("Demos".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "Demos", true);
      if ("Demos/ Diversity Event".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "Demos/ Diversity Event", true);
      if ("Posters".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "Posters", true);
	  if ("Opening Remarks".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "Opening Remarks", true);
	  if ("Diversity Event".toLowerCase().indexOf(this.keywords.toLowerCase()) >= 0)
        this.$set(this.searchShow, "Diversity Event", true);
    },
    searchReset: function () {
      this.keywords = "";
      this.searchEnter();
    },
	styleType: function (type) {
		if (type == 'session'){
			return "background-color: #eff7eb;"
		}
		else if (type == 'gather'){
			return "background-color: #bbdfff;"
		}
		else if (type == 'Socializing'){
			return "background-color: #ced5df;"
		}
		else{
			return "background-color: #ffeac5;"
		}
	},
	setHeigth: function(begin, end){
		if (end - begin == 1 || end - begin == 0){
			return "height: 100px"
		}
		else if (end - begin == 2){
			return "height: 200px"
		}
		else if (end - begin == 3){
			return "height: 300px"
		}
	},
	activityWidth: function(begin, end) {
		if (end - begin == 15) {
			return "width: 25%"
		}
		else if (end - begin == 30) {
			return "width: 50%"
		}
		else {
			return "width: 75%"
		}
	},
	setInsideHeight: function(begin, end){
		if (end - begin == 1 || end - begin == 0){
			return "height: 41px"
		}
		else if (end - begin == 2){
			return "height: 141px"
		}
		else if (end - begin == 3){
			return "height: 241px"
		}
	},
    showDay: function (day, hour) {
		if (this.zone + hour + 4 < 0)
		  return (
			"Aug " + this.date[day - 1] + " " + (this.zone + hour + 28) + ":00"
		  );
		else if (this.zone + hour + 4 > 23)
		  return (
			"Aug " + this.date[day + 1] + " " + (this.zone + hour - 20) + ":00"
		  );
		else
		  return "Aug " + this.date[day] + " " + (this.zone + hour + 4) + ":00";
	},
	showDayMin: function (day, begin, bmin, end, emin) {
		if (bmin == 0){bmin = '00'}
		if (emin == 0){emin = '00'}
		if (this.zone + begin + 4 < 0)
		  return (
			"Aug " + this.date[day - 1] + " " + (this.zone + begin + 28) + ":" + bmin + "-" + (this.zone + end + 28) + ":" + emin 
		  );
		else if (this.zone + begin + 4 > 23)
		  return (
			"Aug " + this.date[day + 1] + " " + (this.zone + begin - 20) + ":" + bmin + "-" + (this.zone + end - 20) + ":" + emin
		  );
		else
		  return "Aug " + this.date[day] + " " + (this.zone + begin + 4) + ":" + bmin + "-" + (this.zone + end + 4) + ":" + emin
	  },
    showDayWithMin: function (day, hour, min) {
      if (min == 0) {
        min = "00";
      }
      if (this.zone + hour + 4 < 0)
        return (
          "Aug " +
          this.date[day - 1] +
          " " +
          (this.zone + hour + 28) +
          ":" +
          min
        );
      else if (this.zone + hour + 4 > 23)
        return (
          "Aug " +
          this.date[day + 1] +
          " " +
          (this.zone + hour - 20) +
          ":" +
          min
        );
      else
        return (
          "Aug " + this.date[day] + " " + (this.zone + hour + 4) + ":" + min
        );
    },
    showModalDay: function () {
	  if (this.modal_timeMin == 0) this.modal_timeMin = '00';
	  if (this.modal_endMin == 0) this.modal_endMin = '00';
      if (this.zone + this.modal_time + 4 < 0)
        return (
          "Aug " +
          this.date[this.modal_date - 1] +
          " " +
          (this.zone + this.modal_time + 28) +
          ":" + 
		  this.modal_timeMin +
		  " - " +
          (this.zone + this.modal_end + 28) +
          ":" +
		  this.modal_endMin
        );
      else if (this.zone + this.modal_time + 4 > 23)
        return (
          "Aug " +
          this.date[this.modal_date + 1] +
          " " +
          (this.zone + this.modal_time - 20) +
		  ":" + 
		  this.modal_timeMin +
		  " - " +
          (this.zone + this.modal_end - 20) +
		  ":" +
		  this.modal_endMin
        );
      else
        return (
          "Aug " +
          this.date[this.modal_date] +
          " " +
          (this.zone + this.modal_time + 4) +
		  ":" + 
		  this.modal_timeMin +
		  " - " +
          (this.zone + this.modal_end + 4) +
		  ":" +
		  this.modal_endMin
        );
    },
    isOver: function (day, hour) {
      if (this.nowHour < 0) {
        this.nowHour = this.nowHour + 24;
        this.nowDay--;
      }
      if (this.nowHour > 23) {
        this.nowHour = this.nowHour - 24;
        this.nowDay++;
      }
      // console.log(this.nowYear,this.nowMonth,this.nowDay,this.nowHour);
      if (this.nowYear > 2021) return "text-decoration: line-through;";
      else if (this.nowYear == 2021 && this.nowMonth > 8) return "text-decoration: line-through;"
      else if (this.nowYear == 2021 && this.nowMonth == 8 && this.nowDay > day)
        return "text-decoration: line-through;"
      else if (
        this.nowYear == 2021 &&
        this.nowMonth == 8 &&
        this.nowDay == day &&
        this.nowHour > hour
      )
        return "text-decoration: line-through;";
    },
	sessionText: function(num){
		if (this.session[num].length > 16){
			return this.session[num].substring(0,16) + "..."
		}
		else return this.session[num].substring(0,16)
	},
    setModalDetail: function (num, type, date, time, end, data = "") {
      this.modal_sessionNum = num.toString();
      this.modal_type = type;
      this.modal_date = date;
      this.modal_time = time;
      this.modal_end = end;
      this.modal_data = data;
    },
	setModalDetailMin: function (num, type, date, time, timeMin, end, endMin) {
		this.modal_sessionNum = num.toString();
		this.modal_type = type;
		this.modal_date = date;
		this.modal_time = time;
		this.modal_timeMin = timeMin;
		this.modal_end = end;
		this.modal_endMin = endMin;
	},
    setModalColor: function (type) {
      if (type == "session" || type == "dc_session") return "background:#E2EFDA";
      else if (type == "Socializing") return "background:#ACB9CA";
      else return "background:#ffdea3";
    },
    setChannelID: function (id) {
      window.localStorage.setItem("channel", id);
    },
    setWorkShopClassFunc: function (workshop_name) {
      let class_map = {};
      for (let i = 0; i < this.workshop_list.length; i++) {
        if (workshop_name == this.workshop_list[i]) {
          class_map[this.workshop_list[i]] = true;
        } else {
          class_map[this.workshop_list[i]] = false;
        }
      }
      return class_map;
    },
    setHeight: function (begin, end) {
      if (end - begin == 2) return "heigth:20vh";
      else if (end - begin == 3) return "height:30vh";
      else return "height:10vh";
    },
	setInvitedNum: function(num){
		this.invitedNum = num;
	}
  },
  mounted: function () {
    for (let i = 1; i < 24; i++) {
      let j = "session" + i.toString();
      this.$set(this.searchShow, j, true);
    }
    this.$set(this.searchShow, "session", true);
    this.$set(this.searchShow, "gather", true);
    this.$set(this.searchShow, "Socializing", true);
    this.$set(this.searchShow, "Community Meeting", true);
    this.$set(this.searchShow, "Community Socializing", true);
    this.$set(this.searchShow, "Invited Talk", true);
    this.$set(this.searchShow, "Industry Talks", true);
    this.$set(this.searchShow, "Competitions", true);
    this.$set(this.searchShow, "Demos", true);
    this.$set(this.searchShow, "Demos/ Diversity Event", true);
    this.$set(this.searchShow, "Posters", true);
	this.$set(this.searchShow, "Opening Remarks", true);	
	this.$set(this.searchShow, "Diversity Event", true);	

    this.tutNum = decodeURI(window.location.href).split("=")[1];
  },
});
