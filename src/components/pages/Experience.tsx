import styled from "styled-components";
import { motion } from "framer-motion";
import SplitScreen from "../layout/SplitScreen";
import ExperienceWork from "../layout/ExperienceWork";
import ExperienceProject from "../layout/ExperienceProject";

const ExperienceRoot = styled.div`
  display: flex;
  background-color: yellow;
  min-width: 100%;
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
        <SplitScreen leftWeight={1} rightWeight={1}>
          <ExperienceWork/>
          <ExperienceProject/>
        </SplitScreen>
      </ExperienceRoot>
    </motion.div>
  );
}

export default Experience;
