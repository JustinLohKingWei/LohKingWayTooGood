import { motion } from "framer-motion";
import styled from "styled-components";
import { WorkData } from "../../data/ExperienceData";
import WorkCard from "./WorkCard";

const ExperienceWorkRoot = styled.div`
  display: flex;
  width: 100%;
  min-width: 20em;
  max-height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 2em 0 1em 0;
`;

const ExperienceWorkTitle = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: xx-large;
  font-weight: bold;
`;

const workContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
    },
  },
};

const workItemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

function ExperienceWork() {
  return (
    <ExperienceWorkRoot>
      <ExperienceWorkTitle>Work</ExperienceWorkTitle>
      <motion.div
        variants={workContainerVariants}
        initial="hidden"
        animate="show"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {WorkData.map((data) => {
          return (
            <motion.div
              variants={workItemVariants}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <WorkCard work={data} />
            </motion.div>
          );
        })}
      </motion.div>
    </ExperienceWorkRoot>
  );
}

export default ExperienceWork;
