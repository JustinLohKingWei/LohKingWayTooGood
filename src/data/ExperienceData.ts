export type work = {
  name: string;
};

export const WorkData = [{ name: "Atomata", startdate: "" }, {}];

export type skill = {
  name: string;
  noOfProjects?: number;
  description: string;
  usageRating?: number;
  skillRating?: number;
};

export const SkillData: skill[] = [
  {
    name: "JavaScript",
    description:
      "The language of the web broswer. As someone who primarily works in web development. JavaScript is my bread and butter.",
  },
  {
    name: "React",
    description:
      "The trendy way of frontend development. Once you learn React, you never go back.",
  },
  {
    name: "TypeScript",
    description:
      "The better and more secure version of JavaScript, that is if you don't mind the extra syntax, and all the type errors during the development phase",
  },
  {
    name: "Python",
    description:
      "My first python application was a command line server application. That was how simple python is to learn.\n\n Say what you want about it, but the simplicty of python is truly one of it's greatest boons.",
  },
  {
    name: "Java",
    description:
      "The language that everyone had been sayign would die for the past decade, yet is still around",
  },
  {
    name: "C++",
    description: "Why god why",
  },
];
