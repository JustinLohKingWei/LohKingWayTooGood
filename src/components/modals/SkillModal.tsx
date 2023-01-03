import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../../App";
import { skill } from "../../data/ExperienceData";
import Project from "../layout/Project";

const SkillModalRoot = styled.div`
  display: flex;
  min-width: 25em;
  width: 50%;
  max-width: 90%;
  min-height: 3em;
  max-height: 90vh;
  border-style: solid;
  border-width: 0.1em;
  border-color: ${(props) => props.theme.secondary};
  background-color: #000000;
  color: ${(props) => props.theme.secondary};
  flex-direction: column;
  align-items: center;
  padding: 1em;
  opacity: 1;
`;

const SkillModalTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: x-large;
  justify-content: center;
  padding: 1em 0 1em 0;
`;
const SkillModalDescription = styled.div`
  display: flex;
  max-width: 95%;
  flex-wrap: wrap;
  font-size: large;
  margin: 1.5em 0 1.5em 0;
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 100%;
  overflow-y: auto;
`;

const SkillModalCloseButton = styled.button`
  display: flex;
  font-size: large;
  width: 10em;
  height: 2em;
  border-radius: 0.25em;
  background-color: ${(props) => props.theme.secondary};
  color: black;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  justify-self: self-end;
  z-index: 5;
  &:hover {
    opacity: 0.5;
  }
`;

type SkillModalProps = {
  skill: skill;
};

function SkillModal({ skill }: SkillModalProps) {
  const { setShowModal }: globalContextTypes = useContext(GlobalContext);
  return (
    <SkillModalRoot>
      <SkillModalTitle>{skill.name}</SkillModalTitle>
      <SkillModalDescription>{skill.description}</SkillModalDescription>
      <ProjectContainer>
        {skill.projectLinks?.map((data) => {
          return <Project project={data} />;
        })}
      </ProjectContainer>

      <SkillModalCloseButton
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </SkillModalCloseButton>
    </SkillModalRoot>
  );
}

export default SkillModal;
