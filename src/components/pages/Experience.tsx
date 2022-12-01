import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceRoot = styled.div`
  display: flex;
  background-color:  yellow;
  min-width: 100%;
  min-height: 100%;
`;

const initialExperience = { opacity: 0 };

const animateExperience = { opacity: 1 };

const transitionExperience = { duration:1};

const exitExperience = { opacity: 0,transition:{
  duration: 0.5
}};

function Experience() {
  return (
    <motion.div
      initial={initialExperience}
      animate={animateExperience}
      transition={transitionExperience}
      exit={exitExperience}
    >
      <ExperienceRoot>Experience</ExperienceRoot>
    </motion.div>
  );
}

export default Experience;
