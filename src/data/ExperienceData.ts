export type work = {
  name: string;
  position: string;
};

export const WorkData: work[] = [
  { name: "Atomata", position: "Software Developer (React TS)" },
  { name: "Le Majesthe", position: "Supervisor" },
];

export type skill = {
  name: string;
  noOfProjects?: number;
  description: string;
  skillRating: number;
};

export const SkillData: skill[] = [
  {
    name: "JavaScript",
    description:
      "The language of the web broswer. As someone who primarily works in web development. JavaScript is my bread and butter.",
    skillRating: 5,
  },
  {
    name: "React",
    description:
      "The trendy way of frontend development. Once you learn React, you never go back.",
    skillRating: 5,
  },
  {
    name: "TypeScript",
    description:
      "The better and more secure version of JavaScript, that is if you don't mind the extra syntax, and all the type errors during the development phase",
    skillRating: 5,
  },
  {
    name: "Python",
    description:
      "My first python application was a command line server application. That was how simple python is to learn.\n\n Say what you want about it, but the simplicty of python is truly one of it's greatest boons.",
    skillRating: 5,
  },
  { name: "UI/UX Engineering", description: "I like this", skillRating: 5 },
  {
    name: "HTML",
    description: "HTML",
    skillRating: 5,
  },
  { name: "CSS", description: "C ASS ASS", skillRating: 5 },

  {
    name: "Java",
    description:
      "The language that everyone had been sayign would die for the past decade, yet is still around",
    skillRating: 3,
  },
  {
    name: "C++",
    description: "Why god why",
    skillRating: 2,
  },
  {
    name: "SQL",
    description: "Ew",
    skillRating: 1,
  },
  { name: "Node JS", description: "Damn son", skillRating: 1 },
  {
    name: "Django",
    description: "Cool",
    skillRating: 3,
  },
  {
    name: "MongoDB",
    description: "Mongoboi",
    skillRating: 1,
  },
];
