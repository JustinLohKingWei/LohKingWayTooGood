import styled from "styled-components";
import { SkillData } from "../../data/ExperienceData";
import SkillCard from "./SkillCard";
import { motion } from "framer-motion";

const ExperienceSkillRoot = styled.div`
  display: flex;
  width: 100%;
  min-width: 20em;
  max-height: 100%;
  align-items: center;
  flex-direction: column;
  padding: 2em 0 1em 0;
`;

const ExperienceSkillTitle = styled.div`
  display: flex;
  width: 100%;
  /* min-width: 14.5em; */
  justify-content: center;
  font-size: xx-large;
  font-weight: bold;
`;

const ExperienceCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0 1em 0;
  justify-content: center;
`;

const skillContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

function ExperienceSkills() {
  return (
    <ExperienceSkillRoot>
      <ExperienceSkillTitle>Skills</ExperienceSkillTitle>
      <motion.div
        variants={skillContainerVariants}
        initial="hidden"
        animate="show"
      >
        <ExperienceCardContainer>
          {SkillData.map((data) => {
            return (
              <motion.div variants={skillItemVariants}>
                <SkillCard skill={data}></SkillCard>
              </motion.div>
            );
          })}
        </ExperienceCardContainer>
      </motion.div>
    </ExperienceSkillRoot>
  );
}

export default ExperienceSkills;
