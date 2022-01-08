var app = new Vue({
	el: '#app',
	data:{
		sessionNum:'',
		session:{
			Session1:[
				{paper:'Dantzig-Wolfe Decomposition for Cost Partitioning'},
				{paper:'Exploiting Cyclic Dependencies in Landmark Heuristics'},
				{paper:'Subset-Saturated Transition Cost Partitioning'},
				{paper:'Online Saturated Cost Partitioning for Classical Planning'}
			],
			Session2:[
				{paper:'On the Compilability and Expressive Power of State-Dependent Action Costs'},
				{paper:'Learning Heuristic Selection with Dynamic Algorithm Configuration'},
				{paper:'Automatic Instance Generation for Classical Planning'},
				{paper:'Computational Complexity of Computing Symmetries in Finite-Domain Planning'}
			],
			Session3:[
				{paper:'Iterative-deepening Bidirectional Heuristic Search with Restricted Memory'},
				{paper:'Delete-Relaxation Heuristics for Lifted Classical Planning'},
				{paper:'Endomorphisms of Lifted Planning Problems'},
				{paper:'Hierarchical Width-Based Planning and Learning'}
			],
			Session4:[
				{paper:'Approximate bi-criteria search by efficient representation of subsets of the Pareto-optimal frontier'},
				{paper:'Conflict-Free Multi-Agent Meeting'},
				{paper:'OMCoRP: An Online Mechanism for Competitive Robot Prioritization'},
				{paper:'Safe Multi-Agent Pathfinding with Time Uncertainty'}
			],
			Session5:[
				{paper:'A Competitive Analysis of Online Multi-Agent Path Finding'},
				{paper:'Conflict-Based Increasing Cost Search'},
				{paper:'Speeding Up Search-Based Motion Planning using Expansion Delay Heuristics'},
				{paper:'Scalable Rail Planning and Replanning: Winning the 2020 Flatland Challenge'}
			],
			Session6:[
				{paper:'Jump Point Search with Temporal Obstacles'},
				{paper:'Width-Based Backward Search'},
				{paper:'The Consistent Case in Bidirectional Search and a Bucket-to-Bucket Algorithm as a Middle Ground between Front-to-End and Front-to-Front'},
				{paper:'Contracting and Compressing Shortest Path Databases'}
			],
			Session7:[
				{paper:'E2Coop: Energy Efficient and Cooperative Obstacle Detection and Avoidance for UAV Swarms'},
				{paper:'Hierarchical Freespace Planning for Navigation in Unfamiliar Worlds'},
				{paper:'Approximate Novelty Search'},
				{paper:'S*: A Heuristic Information-Based Approximation Framework for Multi-Goal Path Finding'}
			],
			Session8:[
				{paper:'Predicted Composite Signed-Distance Fields for Real-Time Motion Planning in Dynamic Environments'},
				{paper:'Towards Time-Optimal Any-Angle Path Planning With Dynamic Obstacles'},
				{paper:'Improving AlphaZero Using Monte-Carlo Graph Search'},
				{paper:'Attributed Transition-based Domain Control Knowledge for Domain-Independent Planning'}
			],
			Session9:[
				{paper:'Task-Aware Waypoint Sampling for Robotic Planning'},
				{paper:'Verifying Plans and Scripts for Robotics Tasks Using Performance Level Profiles'},
				{paper:'In-Station Train Dispatching: A PDDL+ Planning Approach'},
				{paper:'Non-Deterministic Conformant Planning Using a Counterexample-Guided Incremental Compilation to Classical Planning'}
			],
			Session10:[
				{paper:'Flexible FOND Planning with Explicit Fairness Assumptions'},
				{paper:'Pattern Databases for Goal-Probability Maximization in Probabilistic Planning'},
				{paper:'Rule-based shielding for Partially Observable Monte-Carlo Planning'},
				{paper:'Selecting goals in oversubscription planning using relaxed plans'}
			],
			Session11:[
				{paper:'Data-Driven Decision-Theoretic Planning using Recurrent Sum-Product-Max Networks'},
				{paper:'Multiple Plans are Better than One: Diverse Stochastic Planning'}
			],
			Session12:[
				{paper:'Robust Opponent Modeling via Adversarial Ensemble Reinforcement Learning'},
				{paper:'Learning and Exploiting Shaped Reward Models for Large Scale Multiagent RL'},
				{paper:'Integrating Knowledge Compilation with Reinforcement Learning for Routes'},
				{paper:'DeepFreight: A Model-free Deep-reinforcement-learning-based Algorithm for Multi-transfer Freight Delivery'}
			],
			Session13:[
				{paper:'Guiding Robot Exploration in Reinforcement Learning via Automated Planning'},
				{paper:'A Simulator-based Planning Framework for Optimizing Autonomous Greenhouse Control Strategy'},
				{paper:'A Deep Ensemble Method for Multi-Agent Reinforcement Learning: A Case Study on Air Traffic Control'},
				{paper:'Constrained Multiagent Markov Decision Processes: a Taxonomy of Problems and Algorithms'}
			],
			Session14:[
				{paper:'Situated Temporal Planning Using Deadline-aware Metareasoning'},
				{paper:'Abstraction-Guided Policy Recovery from Expert Demonstrations'},
				{paper:'Translations from Discretised PDDL+ to Numeric Planning'},
				{paper:'Meta Reinforcement Learning for Heuristic Planing'}
			],
			Session15:[
				{paper:'RePReL: Integrating Relational Planning and Reinforcement Learning for Effective Abstraction'},
				{paper:'LM-cut and Operator Counting Heuristics for Optimal Numeric Planning with Simple Conditions'},
				{paper:'Privacy-Preserving Algorithm for Decoupling of Multi-Agent Plans with Uncertainty'},
				{paper:'Blind Decision Making: Reinforcement Learning with Delayed Observations'}
			],
			Session16:[
				{paper:'Automated Production Scheduling for Artificial Teeth Manufacturing'},
				{paper:'Scheduling with Complete Multipartite Incompatibility Graph on Parallel Machines'},
				{paper:'Total Completion Time Minimization for Scheduling with Incompatibility Cliques'},
				{paper:'Constraint-based Scheduling for Paint Shops in the Automotive Supply Industry'}
			],
			Session17:[
				{paper:'Distributed Fair Scheduling for Information Exchange in Multi-Agent Systems'},
				{paper:'Online Hedge Reservation for Diverse Plans and Competitive Analysis'},
				{paper:'Scheduling Stochastic Jobs - Complexity and Approximation Algorithms'},
				{paper:'GRAND-VISION: An Intelligent System for Optimized Deployment Scheduling of Law Enforcement Agents'}
			],
			Session18:[
				{paper:'Explaining path plan optimality: fast explanation methods for navigation meshes using full and incremental inverse optimization'},
				{paper:'Compositional Approach to Translate LTLf/LDLf into Deterministic Finite Automata'},
				{paper:'On Planning with Qualitative State-Trajectory Constraints in PDDL3 by Compiling them Away'},
				{paper:'vPlanSim: An Open Source Graphical Interface for the Visualisation and Simulation of AI Systems'}
			],
			Session19:[
				{paper:'Block Compression and Invariant Pruning for SAT-based Totally-Ordered HTN Planning'},
				{paper:'Translating Totally Ordered HTN Planning Problems to Classical Planning Problems Using Regular Approximation of Context-Free Languages'},
				{paper:'Fully Observable Nondeterministic HTN Planning -- Formalisation and Complexity Results'},
				{paper:'Loop Detection in the PANDA Planning System'}
			],
			Session20:[
				{paper:'Autonomous Building of Structures in Unstructured Environments via AI Planning'},
				{paper:'Knowledge Compilation for Nondeterministic Action Languages'},
				{paper:'Generalized Planning as Heuristic Search'},
				{paper:'What do you really want to do? Towards a Theory of Intentions for Human-Robot Collaboration'}
			],
			Session21:[
				{paper:'A Closer Look at Causal Links: Complexity Results for Delete-Relaxation in Partial Order Causal Link (POCL) Planning'},
				{paper:'Decentralized Refinement Planning and Acting'},
				{paper:'Automated design of fMRI paradigms'},
				{paper:'Landmark-based approaches for goal recognition as planning'}
			],
			Session22:[
				{paper:'Temporal Reasoning with Kinodynamic Networks'},
				{paper:'PLGRIM: Hierarchical Value Learning for Large-scale Exploration in Unknown Environments'},
				{paper:'Self-Reliant Rovers for Increased Mission Productivity'}
			],
			Session23:[
				{paper:'Computing Opportunities to Augment Plans for Novel Replanning during Execution'},
				{paper:'Adaptive Smoothing for Path Integral Control'}
			]			
		},
		sum:0,
		oldTime: new Date,
	},
	mounted(){
		this.sessionNum = decodeURI(window.location.href).split('=')[1];
		// setInterval(function(){
		// 	axios.post(backendBaseUrl+'/api/users/forgotemailverify',this.user)
		// },60000)
	}
})