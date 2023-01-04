export type work = {
  name: string;
  position: string;
  relatedTags?: string[];
  description?: string;
};

export const WorkData: work[] = [
  {
    name: "Atomata",
    position: "Software Engineer",
    relatedTags: [
      "React",
      "TypeScript",
      "MUI",
      "Node",
      "UI/UX Design",
      "Agile",
      "Scrum",
    ],
    description:
      'Atomata, a startup company founded by unity developers James McCafferty and Matthieu Dubois with the vision of Project Epista, a way of showcasing their highly detailed 3D models using a web based learning application with a "Show & Tell" style of presentation. \n\n The project got off to a rough start. Half of the initial 9 man team decided to pursue other interests and stepped down from the project, leaving behind a 5 man team with limited knowledge of web application development and the integration of the unity models.\n\n The remaining 8 month sprint would become one of the most challenging times for the remaining members of the project. Each of the 3 month sprint cycle felt like a mad race to deliver major features using foreign frameworks, while also completing extensive documentation tasks.\n\n Yet, the team morale soared like never before. We gave each other mentoring sessions, and surprised each other with birthday celebrations. We cheered and laughed togther, but also cried and griped together. The daily standups eventually grew into a routine and at all times everyone knew how the entire application worked, and which member had the best knowledges of each specific aspect. \n\nWe felt indestructible, and the results of our project certainly proved our worth to our stakeholders.',
  },
  { name: "Majesthe", position: "Supervisor" },
];

export type project = {
  name: string;
  link: string;
  description: string;
};

export type skill = {
  name: string;
  description: string;
  skillRating: number;
  projectLinks?: project[];
};

export const SkillData: skill[] = [
  {
    name: "JavaScript",
    description:
      "The language of the modern web broswer. As someone who primarily works in web development. JavaScript is my bread and butter.",
    skillRating: 5,
    projectLinks: [
      {
        name: "node-httpc",
        link: "https://github.com/JustinLohKingWei/node-httpc",
        description:
          "A Command Line client Application used to carry out http requests using TCP protocol.",
      },
      {
        name: "You Dee Pee",
        link: "https://github.com/JustinLohKingWei/you-dee-pee",
        description:
          "A complete file server architecture consisting of the Node HttpC cilent application, a router, and the Httpfs server application",
      },
      {
        name: "Godzilla Enterprise Resource System Application",
        link: "https://github.com/serum-390/soen390-team16-godzilla",
        description:
          "An ERP system for a bicycle manufacturing company with complete product and employee management.",
      },
    ],
  },
  {
    name: "React",
    description:
      "React has been my prefered frontend framework due to its versatility. My first React project was an Enterprise Resource Planning Application for my Mini Capstone, and it has been my library of choice for Frontend Development ever since.",
    skillRating: 5,
    projectLinks: [
      {
        name: "LohKingWayTooGood.com",
        link: "https://lohkingwaytoogood.com",
        description: "My Personal Portfolio Website built in React Typescript.",
      },

      {
        name: "Better Todo-Todo",
        link: "https://github.com/JustinLohKingWei/Better-todotodo",
        description:
          "My implementation of the TodoMVC Exercise using a react TS application",
      },
      {
        name: "Humble Bundle Scraper",
        link: "https://github.com/humble-scraper/client",
        description:
          "A frontend application for Ethan's Web Scrapping services from the Humble Bundle Site.",
      },
      {
        name: "Project Epista",
        link: "https://github.com/atomata/capstone_WebClient",
        description:
          'A 3D Educational application featuring "Show & Tell" style presentations built as a React TS application with a unity-webgl layer.',
      },
      {
        name: "Godzilla Enterprise Resource System Application",
        link: "https://github.com/serum-390/soen390-team16-godzilla",
        description:
          "An ERP system for a bicycle manufacturing company with complete product and employee management.",
      },
    ],
  },
  {
    name: "TypeScript",
    description:
      "The better and more secure version of JavaScript, that is if you don't mind the extra syntax, and all the type errors during the development phase",
    skillRating: 5,
    projectLinks: [
      {
        name: "LohKingWayTooGood.com",
        link: "https://lohkingwaytoogood.com",
        description: "My Personal Portfolio Website built in React Typescript.",
      },
      {
        name: "Project Epista",
        link: "https://github.com/atomata/capstone_WebClient",
        description:
          'A 3D Educational application featuring "Show & Tell" style presentations built as a React TS application with a unity-webgl layer.',
      },
      {
        name: "Humble Bundle Scraper",
        link: "https://github.com/humble-scraper/client",
        description:
          "A frontend application for Ethan's Web Scrapping services from the Humble Bundle Site.",
      },
      {
        name: "Better Todo-Todo",
        link: "https://github.com/JustinLohKingWei/Better-todotodo",
        description:
          "My implementation of the TodoMVC Exercise using a react TS application",
      },
    ],
  },
  {
    name: "Python",
    description:
      "My first python application was a command line server application. That was how simple python is to learn.\n\n Say what you want about it, but the simplicty of python is truly one of it's greatest boons.",
    skillRating: 5,
    projectLinks: [
      {
        name: "dtest",
        link: "https://github.com/JustinLohKingWei/dtest",
        description:
          "Python CLI application which is able conduct a diabetical test on some patient data based on their blood test results",
      },
      {
        name: "httpfs",
        link: "https://github.com/JustinLohKingWei/httpfs",
        description:
          "Python CLI application which spins up a file server on a designated port. Receives http requests, processes and serves up text files",
      },
      {
        name: "The greatest joke ever",
        link: "https://github.com/JustinLohKingWei/The-greatest-joke-ever",
        description:
          "A python script made to send joke emails using SMTP as a prank for my friend haw",
      },
      {
        name: "Sentimental Analysis",
        link: "https://github.com/JustinLohKingWei/Sentimental_Analysis_Boi",
        description:
          "Python script used in determining the affinity value of a given paragraph",
      },
      {
        name: "Puzzle Solver 9000",
        link: "https://github.com/JustinLohKingWei/Puzzle-Solver-9000",
        description: "Python script to solve a given 3x3 puzzle",
      },
      {
        name: "Chatbot for Course Related Questions",
        link: "https://github.com/VoltDriver/474Project",
        description:
          "Chatbot for answering course related questions using knowledge graphs and rdflib, along with the rasa chatbot framework to.",
      },
    ],
  },
  {
    name: "UI/UX Engineering",
    description:
      "Planning, Wireframing, prototyping and user-testing for the most optimal user friendly design is key in all my projects. I find joy in bridging the gap between developer intentions and user needs and thoughts, and believe it is the most important aspect in app design.",
    skillRating: 5,

    projectLinks: [
      {
        name: "Project Epista",
        link: "https://github.com/atomata/capstone_WebClient",
        description:
          'A 3D Educational application featuring "Show & Tell" style presentations built as a React TS application with a unity-webgl layer.',
      },
    ],
  },
  {
    name: "HTML/CSS",
    description:
      "Cascading Styled Sheets is used for defining layouts, colors, events and animations in web applications, and is commonly used in conjuction with HTML, or Hyper text markup language. As a web developer, I use HTML and CSS in every Frontend project such as React.\n\n My preffered styling API is the styled components library, yet I sometimes resort to using classic HTML/CSS modules if the project requires me to do so.",
    skillRating: 5,
    projectLinks: [
      {
        name: "Better TodoTodo",
        link: "https://github.com/JustinLohKingWei/Better-todotodo",
        description:
          "While my preffered styling API is the styled-components library, this project was deliberately done in a traditional CSS module configuration. ",
      },
    ],
  },

  {
    name: "Java",
    description:
      "The first programming language I learned most of my programming concepts from including data structures, algorithmns, process threading.",
    skillRating: 3,
    projectLinks: [
      {
        name: "BattleShip",
        link: "https://github.com/hawschiat/battleship-game",
        description:
          "Small Holliday Project to reproduce the iconic boardgame with my friend Haw",
      },
      {
        name: "Smart Home System",
        link: "https://github.com/Emperor42/soen343",
        description:
          "A smart home system made with javafx, which reads an input file and acts as a controller of different devices",
      },
    ],
  },
  {
    name: "Node JS",
    description:
      "Javascript Runtime Environment I have occasionally used. My experience in Node JS primarily comes in the use of the Express JS framework to set up REST APIs for backend servers to communicate with databases such as MongoDB, or the occasional use of writing CLI for functional tasks.",
    skillRating: 3,
    projectLinks: [
      {
        name: "Node HttpC",
        link: "https://github.com/JustinLohKingWei/node-httpc",
        description:
          "A Client Application built using the node js cli library to send http requests to a given endpoint. Part of a 3-stage client server architecture project. ",
      },
      {
        name: "LohKingWayTooGood-Backend",
        link: "https://github.com/JustinLohKingWei/LohKingWayTooGood-Backend",
        description:
          "Acting backend for the LohKingWayTooGood MERN application stack built with Express JS middleware",
      },
    ],
  },
  {
    name: "MongoDB",
    description:
      "A powerful database which stores objects using document models and schemas. I use Mongo Atlas clusters in conjuction with Express JS as a database",
    skillRating: 2,
    projectLinks: [
      {
        name: "LohKingWayTooGood-Backend",
        link: "https://github.com/JustinLohKingWei/LohKingWayTooGood-Backend",
        description:
          "Acting backend for the LohKingWayTooGood MERN application stack",
      },
    ],
  },
  {
    name: "Django",
    description:
      "A lightweight, simple method of setting up API endpoints for backend architecture.",
    skillRating: 2,
  },

  {
    name: "C++",
    description:
      "A programming language aimed more towards memory conservation. Basic knowledge and some Experience.",
    skillRating: 2,
    projectLinks: [
      {
        name: "Eight Minute Empire Board Game",
        link: "https://github.com/JustinLohKingWei/EightMinuteEmpireGame",
        description:
          "A C++ fantasy board game with turn based mechanics. Features a player vs computer environment where both sides battle for control of a given map input",
      },
    ],
  },

  {
    name: "Flutter",
    description:
      "My preferred development library for mobile platforms in contrast to Android Studios.",
    skillRating: 2,
    projectLinks: [
      {
        name: "Local Time App",
        link: "https://github.com/JustinLohKingWei/LocalTimeApp",
        description:
          "A mobile app which displays different time zones, and changes its background and theme accordingly",
      },
      {
        name: "Wild Sheep Chase",
        link: "https://github.com/JustinLohKingWei/wild_sheep_chase",
        description:
          "A flutter app made for ordering at one of my favorite cafes",
      },
    ],
  },
  {
    name: "SQL",
    description: "Structured Query Language. Some experience in this.",
    skillRating: 1,
  },
];
