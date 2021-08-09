$(document).ready(function () {
  // 'use strict'

  let get_votes_url = "https://icaps21.icaps-conference.org/demoscripts";
  let post_vote_url = "https://icaps21.icaps-conference.org/demoscripts/vote";
  var cache_total_vote = 0;

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (form.checkValidity()) {
          let votes = [];

          $("#vote-candidates")
            .closest("form")
            .find("input:checkbox:checked")
            .each(function (index, item) {
              votes.push(item.getAttribute("id"));
            });

          votes.splice(votes.indexOf("invalidCheck"), 1);

          $.ajax({
            url: post_vote_url,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ id: $("#email").val(), Votes: votes }),
            success: function (data) {
              alert("Your vote was saved successfully!");
            },
            error: function (data) {
              alert(
                "Your vote could not be saved. Please notify the demo chairs about this error."
              );
            },
          });
        }

        event.preventDefault();
        event.stopPropagation();

        form.classList.add("was-validated");
      },
      false
    );
  });

  $.ajax({
    url: get_votes_url,
    type: "GET",
    dataType: "json",
    cors: true,
    contentType: "application/json",
    secure: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    success: function (data) {
      var cache_total_vote = data["total"];
      $("#total-vote-count").text(cache_total_vote);

      data["top_3"].forEach(function (item, index) {
        let percentage_count = 0;

        if (cache_total_vote > 0)
          percentage_count = Math.floor((100 * item) / cache_total_vote);

        $("#vote-number-" + index).text(percentage_count + "%");
        $("#vote-number-" + index)
          .siblings(".progress-bar")
          .css("width", percentage_count + "%");
      });
    },
  });

  $(".log-software-click").click(function (e) {
    $.ajax({
      url: e.currentTarget.attributes.loggerref.value,
      type: "GET",
      dataType: "json",
      cors: true,
      contentType: "application/json",
      secure: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  });

  $(document).on("click", ".log-demo-click", function (e) {
    let url = "https://icaps21.icaps-conference.org/demoscripts/button_clicks";
    let click_data = {
      demo_id: $(this).parent().attr("id").replace("card-", ""),
      button_type: e.currentTarget.name,
    };

    $.ajax({
      url: url,
      type: "GET",
      data: click_data,
    });
  });

  $(".log-software-click").click(function (e) {
    $.ajax({
      url: e.currentTarget.attributes.loggerref.value,
      type: "GET",
      dataType: "json",
      cors: true,
      contentType: "application/json",
      secure: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  });

  let vote_element =
    '<input class="form-check-input" type="checkbox" value="" id="votd-[id]"><label class="form-check-label" for="votd-[id]"><strong>[title]</strong> by [authors]</label><hr/>';
  let demo_element =
    '<div class="mb-4"> <div class="card"> <img src="../assets/images/demos/[id].png" class="card-img-top"/><div id="card-[id]" class="card-body"><p class="card-text small"><strong>[title]</strong> by [authors].</p><a class="btn btn-sm btn-danger log-demo-click" href="[link]" name="interact">Interact</a><a class="btn btn-sm btn-outline-primary log-demo-click m-2" href="[video]" target="_blank" name="video"><i class="bi bi-camera-reels"></i></a><a class="btn btn-sm btn-outline-primary log-demo-click" href="demos/[id].pdf" target="_blank" name="read"><i class="bi bi-book"></i></a><a class="btn btn-sm btn-outline-primary log-demo-click m-2 website-d-none" href="[website]" target="_blank" name="website"><i class="bi bi-cursor"></i></a></div></div></div>';

  let demo_data = get_demo_data();
  let randomized_demo_data = demo_data
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  let column_tally = 0;

  $.each(randomized_demo_data, function (index, item) {
    new_vote_element = JSON.parse(JSON.stringify(vote_element));
    new_demo_element = JSON.parse(JSON.stringify(demo_element));
    column_tally += 1;

    $.each(item, function (key, value) {
      new_demo_element = new_demo_element.replaceAll("[" + key + "]", value);
      new_vote_element = new_vote_element.replaceAll("[" + key + "]", value);
    });

    if (!item["website"])
      new_demo_element = new_demo_element.replace("website-d-none", "d-none");

    if (column_tally > 18) column_tally = 18;

    let current_id = "#demo-area-" + Math.ceil(column_tally / 6);
    $(current_id).html($(current_id).html() + new_demo_element);
    $("#vote-candidates").html($("#vote-candidates").html() + new_vote_element);
  });

  function login_view() {
    $("#login-area").addClass("d-none");
    $("#form-area").removeClass("d-none");
  }

  function get_demo_data() {
    return [
      {
        title:
          "A Decentralized Reinforcement Learning System for Patrol Routing",
        authors: "Avijit Roy and Nisheeth Srivastava",
        abstract:
          "We model the placement of first-responder patrol vehicles on a city map as a multi-agent reinforcement learning problem, where individual agents learn desirable locations for parking based on dynamically updated geo-localized emergency call records. The model is able to outline reasonable patrol locations and routes, adapting to changes in the geographical pattern of call locations, and permits optimization of routes accommodating fuel economy and other cost-based concerns into account in a principled way. We also present an actual patrolling system we have developed around this model, and present simulated results comparing its performance vis-a-vis centroid-based patrol location prediction and judgments made by humans.",
        link: "../attending",
        video:
          "https://www.youtube.com/watch?v=nsMXzXfeEmM&t=14s&ab_channel=LearningHowMachineLearns",
        id: 376,
      },
      {
        title: "Demos for a Course in Single-Agent Heuristic Search",
        authors: "Nathan Sturtevant",
        abstract:
          "This abstract describes material from a course in Single-Agent Heuristic Search which is available at <a href='http://www.movingai.com/SAS/' target='_blank'>http://www.movingai.com/SAS/</a>. We cover the motivation and history of the material, as well as a brief description of the content.",
        link: "../attending",
        video: "https://www.youtube.com/watch?v=rc-cxvUSxeM",
        id: 382,
      },
      {
        title:
          "A Demonstration of Refinement Acting, Planning and Learning System Using Operational Models",
        authors:
          "Sunandita Patra, James Mason, Malik Ghallab, Paolo Traverso, and Dana Nau",
        abstract:
          "We demonstrate a system with integrated acting, planning, and learning algorithms that uses hierarchical operational models to perform tasks in dynamically changing environments. In AI research, synthesizing a plan of action has typically used descriptive models of the actions that abstractly specify what might happen as a result of an action and are tailored for efficiently computing state transitions. However, executing the planned actions has needed operational models, in which rich computational control structures and closed-loop online decision-making are used to specify how to perform an action in a nondeterministic execution context, react to events and adapt to an unfolding situation. Deliberative actors, which integrate acting and planning, have typically needed to use both of these models together---which causes problems when attempting to develop the different models, verify their consistency, and smoothly interleave acting and planning. As an alternative, we demonstrate an acting and planning engine in which both planning and acting use the same operational models. These rely on hierarchical task-oriented refinement methods offering rich control structures. In addition, we also have learning strategies that guide the actor and the planner.",
        link: "../attending",
        video: "https://www.youtube.com/watch?v=T1ZkBmHrERk",
        id: 391,
      },
      {
        title:
          "Model and Graphical Tool to Formalize Human-Robot Interaction Based on Automated Planning",
        authors:
          "Alba Gragera, Ángel García-Olaya, Fernando Fernández, and Rebeca Marfil",
        abstract:
          "The implementation of use cases in Social Autonomous Robotics is a complex and time-consuming task to be developed by domain experts and engineers, involving a large knowledge acquisition process. The resulting use case description must also be formalized taking into account stochastic events that may occur in the real world. Existing works rely on Automated Planning to deploy robotic use cases, where the standard Planning Domain Description Language (PDDL) is assumed. In order to facilitate to domain experts the description of the use case we propose a novel tool to create the model through state transition diagrams. From this diagram, the system automatically generates the PDDL files. A video demonstration is available.",
        link: "../attending",
        video: "http://bit.ly/icaps2021demo",
        id: 392,
      },
      {
        title: "Alternative Pathfinding in Game Maps and Indoor Venues",
        authors: "Lingxiao Li and Muhammad Aamir Cheema",
        abstract:
          "Given a source s and a target t, alternative pathfinding aims to return a set of k alternative paths from s to t such that these paths are short, meaningful (e.g., no un-necessary detours), and significantly different from each other. While alternative pathfinding in road networks has received significant attention, to the best of our knowledge, it has not been studied in maps with obstacles such as game maps and indoor venues, e.g., airport, shopping center etc. Furthermore, it is not clear whether the techniques designed for road networks generate high-quality alternative paths for game maps and indoor venues. To this end, we present a web-based demonstration system that visualises the alternative paths in game maps and indoor venues generated by three of the most popular techniques originally designed for the road networks. This system will help evaluating these techniques and identifying potential limitations that must be addressed for better alternative pathfinding in game maps and indoor venues.",
        link: "../attending",
        video:
          "https://www.youtube.com/watch?v=-Q74GYFZnBI&ab_channel=LingxiaoLi",
        id: 383,
      },
      {
        title:
          "Multi-Robot Coordination in Operations and Maintenance of Off Shore Wind Farms with Temporal Planning",
        authors: "Ferdian Jovan and Sara Bernardini",
        abstract:
          "This paper explores the use of temporal planning for multi-robot coordination in operation and maintenance applications. Due to limited resources and energy to perform multiple missions, an efficient tool capable of optimising mission allocations without the need for major re-planning of the missions is required. We improve the performance of centralised mission planner by combining an adaptive problem generator with temporal planning to obtain feasible plans. We create a simulator, a GAZEBO simulated environment unifying heterogeneous autonomous systems for offshore wind farms application, integrate our method, and demonstrate our approach to plan generation for an inspection, maintenance, and repair of an offshore wind turbine.",
        link: "../attending",
        video: "https://www.youtube.com/watch?v=jIan_k-FOBg&ab_channel=FF",
        id: 380,
      },
      {
        title: "FOND4LTLf: FOND Planning for LTLf/PLTLf Goals as a Service",
        authors: "Giuseppe De Giacomo and Francesco Fuggitti",
        abstract:
          "Planning is a central area in Artificial Intelligence (AI) concerned with the decision making performed by autonomous agents with the aim of achieving some goals. In the last decades, extensive literature has been produced in Fully Observable Non-Deterministic (FOND) planning for temporally extended goals when the specification is expressed using one of the several finite trace variants of LTL. Numerous applications have been developed to solve the problem, but most of them require special knowledge. In this demonstration, we present FOND4LTLf, a web service tool that allows solving FOND planning for LTLf/PLTLf goals as an integrated tool with editor, planners and policy visualizer.",
        link: "../attending",
        video:
          "https://drive.google.com/file/d/1HdJpLWJXekyxCaa4UbrUcBymsHGNcd24/view?usp=sharing",
        id: 388,
      },
      {
        title: "Lydia: A Tool for Compositional LTLf/LDLf Synthesis",
        authors: "Marco Favorito and Giuseppe De Giacomo",
        abstract:
          "This demonstration describes Lydia, a tool for the translation of Linear Temporal Logic on Finite Traces (LTLf) and Linear Dynamic Logic on Finite Traces (LDLf) into Deterministic Finite Automata (DFA), and for performing LTLf/LDLf synthesis. Lydia implements a novel *compositional* technique to handle such transformation, and the contribution has been accepted as a publication to the main track. This demo is a companion of the accepted publication. Notably, it is the first tool that provides the transformation from LDLf to DFA. The tool can be used in different ways: as a command-line tool, as a C++ library, through an exposed web service, with a web app, and using the Python programming language.",
        link: "../attending",
        video:
          "https://drive.google.com/file/d/1bP7nD2RdoEfMxCsUXivHqbfvJex6i20A/view?usp=sharing",
        id: 393,
      },
      {
        title:
          "PRUDENT - A Generic Dialog Agent for Information Retrieval That Can Flexibly Mix Automated Planning and Reinforcement Learning",
        authors: "Vishal Pallagani, Biplav Srivastava, and Sparsh Agrawal",
        abstract:
          "With easy availability of large data sets online, like product catalogs and open data, a common business problem is to allow users to search them for information. However, this information is inaccessible to a lot of people as they are unaware of query languages used for searching through data. In this demonstration, we present PRUDENT - where we harness the power of dialog systems to help the user search for information using natural language. PRUDENT makes use of a planner to adapt to the content structure of the data source and retrieve results, thereby, making the dialog agent generic. However, PDDL based planning needs models and one would want to learn plans over time. Hence, RL based plan generation is also desirable. We show a system which can do this and demonstrate the viability of our approach on large data sets of UNSPSC and ICD-10.",
        link: "../attending",
        video: "https://youtu.be/X2l7eW6dyBc",
        id: 381,
      },
      {
        title:
          "PDSim: Simulating Classical Planning Domains with the Unity Game Engine",
        authors: "Emanuele De Pellegrin and Ronald Petrick",
        abstract:
          "The solution of a classical planning problem consists of a sequence of actions mapping the initial state to the goal state. The output of a plan is often provided as raw text, which can be difficult to follow and interpret, especially with large plans. Simulating a plan generated by an automated planner using visual feedback, such as animations of 3D models and environments, can be an important tool for quickly evaluating the quality of a plan and improving the design of planning domains and problems. In this system demonstration, we present the latest version of PDSim, an external tool that can be installed on the Unity game engine adding support for the simulation of classical plans using 3D animations and visualisation methods that can be defined by the user.",
        link: "../attending",
        video: "https://www.youtube.com/watch?v=5CRYWIcFIw4",
        id: 387,
      },
      {
        title: "Visual Planning Domain Design for PDDL using Blockly",
        authors: "Filip Dvorak, Anil Agarwal, and Nikolay Baklanov",
        abstract:
          "Industrialization of automated planning leads to a need to manage the life-cycle of planning models, and quite often the life cycle will include non-expert users, for whom the verbose logical models in planning languages are not the best communication instrument. We are attempting to bridge the gap using popular drag-and drop visual framework Blockly, developing an open-source tool that would seamlessly translate between Problem Domain Definition Language (PDDL) and Blockly.",
        link: "../attending",
        video: "https://www.youtube.com/watch?v=dEV2mICb11g",
        id: 385,
      },
      {
        title:
          "Scalable Rail Planning and Replanning: Winning the 2020 Flatland Challenge",
        authors:
          "Jiaoyang Li, Zhe Chen, Yi Zheng, Shao-Hung Chan, Daniel Harabor, Peter J. Stuckey, Hang Ma, and Sven Koenig",
        abstract:
          "Multi-Agent Path Finding (MAPF) is the combinatorial problem of finding collision-free paths for multiple agents on a graph. This abstract describes MAPF-based software for solving train planning and replanning problems on large-scale rail networks under uncertainty. The software recently won the 2020 Flatland Challenge, a NeurIPS competition trying to efficiently manage dense traffic on rail networks. The software incorporates many state-of-the-art MAPF or, in general, optimization technologies, such as prioritized planning, safe interval path planning, parallel computing, simulated annealing, large neighborhood search, and minimum communication policies. It can plan collision-free paths for thousands of trains within a few minutes and deliver deadlock-free actions in real-time during execution.",
        link: "../attending",
        video: "https://youtu.be/Pw4GBL1UhPA",
        id: 384,
      },
      {
        title:
          "Human-guided Collaborative Problem Solving: A Natural Language based Framework",
        authors:
          "Harsha Kokel, Mayukh Das, Rakibul Islam, Julia Bonn, Jon Cai, Soham Dan, Anjali Narayan-Chen, Prashant Jayannavar, Janardhan Doppa, Julia Hockenmaier, Sriraam Natarajan, Martha Palmer, and Dan Roth",
        abstract:
          "We consider the problem of human-machine collaborative problem solving as a planning task coupled with natural language communication. Our framework consists of three components -- a natural language engine that parses the language utterances to a formal representation and vice-versa, a concept learner that induces generalized concepts for plans based on limited interactions with the user and an HTN planner that solves the task based on human interaction. We illustrate the ability of this framework to address the key challenges of collaborative problem solving by demonstrating it on a collaborative building task in a Minecraft-based blocksworld domain.",
        link: "../attending",
        video: "https://www.youtube.com/watch?v=q1pWe4aahF0&feature=youtu.be",
        website: "https://starling.utdallas.edu/papers/collaborative-ps/",
        id: 375,
      },
      {
        title:
          "FairVizARD: A Visualization System for Assessing Fairness of Ride-Sharing Matching Algorithms",
        authors:
          "Ashwin Kumar, Sanket Shah, Meghna Lowalekar, Pradeep Varakantham, Alvitta Ottley, and William Yeoh",
        abstract:
          "There is growing interest in algorithms that match passengers with drivers in ride-sharing problems, and it is of interest to visualize pertinent information of the output of these algorithms in order to evaluate their performance across different metrics and tradeoffs between them. In this paper, we introduce a system, called FairVizARD, that visualizes the output of these algorithms across different geographic and temporal resolutions, allowing users to easily compare the performance and fairness of multiple ride-sharing allocation algorithms.",
        link: "../attending",
        video: "https://youtu.be/0-G-o4E0gKM",
        id: 374,
      },
      {
        title:
          "GRAND-VISION: An Intelligent System for Optimized Deployment Scheduling of Law Enforcement Agents",
        authors:
          "Jonathan Chase, Phong Tran, Long Kang, Tony Le, and Hoong Chuin Lau",
        abstract:
          "Law enforcement agencies in dense urban environments, faced with a wide range of incidents and limited manpower, are turning to data-driven AI to inform their policing strategy. We present an intelligent patrol scheduling system called GRAND-VISION: Ground Response Allocation and Deployment - Visualization, Simulation, and Optimization. The system employs deep learning, trained on real historical incident data, to generate incident sets that are used to plan daily patrol schedules that can accommodate varying manpower, break times, manual pre-allocations, and a variety of spatio-temporal demand features. The complexity of the scenario results in a system with real world applicability, which we have developed in partnership with a large urban law enforcement agency.",
        link: "../attending",
        video: "https://youtu.be/jsxGKxXSeNs",
        id: 386,
      },
      {
        title: "Playing Angry Birds with a Domain-Independent PDDL+ Planner",
        authors:
          "Wiktor Piotrowski, Roni Stern, Matthew Klenk, Shiwali Mohan, Jacob Le, and Johan de Kleer",
        abstract:
          "This demo paper presents the first system for playing the popular Angry Birds game using a domain-independent planner. Our system models Angry Birds levels using PDDL+, a planning language for mixed discrete/continuous domains. It uses a domain-independent PDDL+ planner to generate plans and executes them. In this demo paper, we present the system's PDDL+ model for this domain, identify key design decisions that reduce the problem complexity, and compare the performance of our system to model-specific methods for this domain. The results show that our system's performance is on par with other domain-specific systems for Angry Birds, suggesting the applicability of domain-independent planning to this benchmark AI challenge.",
        link: "../attending",
        video: "https://bit.ly/35065UZ",
        id: 390,
      },
      {
        title:
          "An Interface for Communicating Branching Plans for Human-Agent Decision Making",
        authors: "Julie Porteous, Alan Lindsay, and Fred Charles",
        abstract:
          "Recent advances in visualisation technologies have opened up new possibilities for human-agent communication. In particular, visualisation of agent planned actions can play an important role in allowing human users to understand agent intentions and to help decide when control can be delegated or when human decision making is required. This is especially true for application domains where branched plans are required due to the typical uncertainty experienced. We have developed an interface which uses 3D visualisation to communicate key details of such plans to practitioners. The system has been used in experiments to evaluate the impact of presentation mode on practitioner understanding.",
        link: "../attending",
        video: "https://youtu.be/xhkqNbAa4Bs",
        website: "https://bab.bournemouth.ac.uk/icapswebgl/",
        id: 378,
      },
      {
        title: "Planning for Automated Composition of Aggregated Assistants",
        authors:
          "Tathagata Chakraborti, Shubham Agarwal, Krissy Brimijoin, Prerna Agarwal, Yara Rizk, Dario Silva Moran, Scott Boag, and Yasaman Khazaeni",
        abstract:
          "An aggregated assistant is realized as an orchestrated set of individual capabilities called skills. In this demo, we will show how complex behaviors of such an assistant can be composed on the fly using automated planning.",
        link: "../attending",
        video: "https://youtu.be/K7FPcl-IYgE",
        website: "https://www.ibm.com/cloud/automation/watson-orchestrate",
        id: 389,
      },
      {
        title: "A Planning.Domains Plugin for Heuristic Visualization",
        authors:
          "Caitlin Aspinall, Cam Cunningham, Ellie Sekine, and Christian Muise",
        abstract:
          "Heuristics are at the heart of every planner. From the simple to the complex, they drive both satisficing and optimal planning approaches. Despite their pervasiveness, there has been relatively little effort towards systematically visualizing them. We introduce a plugin for the online editor at Planning.Domains that is capable of visualizing the heuristic computation of a manually explored state space. Our initial implementation demonstrates the hadd heuristic, but the framework serves as an extensible base for other heuristics in the field of automated planning.",
        link: "../attending",
        video: "https://www.youtube.com/watch?v=avR_WZfe5E8",
        id: 377,
      },
    ];
  }
});
