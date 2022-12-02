import styled from "styled-components";
import { motion } from "framer-motion";
import UnderConstruction from "../layout/UnderConstruction";

const ExperienceRoot = styled.div`
  display: flex;
  width: 100vw;
  min-height: 43.7rem;
`;

const initialExperience = { opacity: 0 };

const animateExperience = { opacity: 1 };

const transitionExperience = { duration: 1 };

const exitExperience = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};

function Experience() {
  return (
    <motion.div
      initial={initialExperience}
      animate={animateExperience}
      transition={transitionExperience}
      exit={exitExperience}
    >
      <ExperienceRoot>
     

        <UnderConstruction/>
      </ExperienceRoot>
    </motion.div>
  );
}

export default Experience;
