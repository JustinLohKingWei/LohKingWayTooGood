import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceRoot = styled.div`
  background-color: #0d38e6;
  display: flex;
  min-width: 100vw;
  min-height: 100%;
`;

const initialExperience = { opacity: 0 };

const animateExperience = { opacity: 1 };

const transitionExperience = { duration: 3 };

const exitExperience = { opacity: 0 };

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
