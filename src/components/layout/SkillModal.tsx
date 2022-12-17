import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../../App";
import { skill } from "../../data/ExperienceData";
import Project from "./Project";

const SkillModalRoot = styled.div`
  display: flex;
  min-width: 25em;
  width: 50%;
  min-height: 3em;
  max-height: 90vh ;
  border-style:solid;
  border-width: 0.1em ;
  border-color: #ffbe94 ;
  /* background-color: #2d112a; */
  background-color: #000000;
  color: #ffbe94;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5em;
  opacity: 1;
`;

const SkillModalTitle = styled.div`
  display: flex;
  width: 100%;
  font-size: x-large;
  justify-content: center;
  padding: 1em 0 1em 0 ;
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
  max-width: 100% ;
  overflow-y: auto ;
`;

const SkillModalCloseButton = styled.button`
  display: flex;
  font-size: large;
  width: 10em;
  height: 2em;
  background-color:  #ffbe94;
  color:black;
  justify-content: center;
  align-items: center ;
  align-self: flex-end;
  justify-self: self-end ;
  z-index:5;
  &:hover {
    background-color: #f6aa78;
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
