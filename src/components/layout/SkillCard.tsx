import styled from "styled-components";
import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiJava,
  DiCss3,
  DiDatabase,
  DiMongodb,
  DiDjango,
} from "react-icons/di";
import {
  SiCplusplus,
  SiFlutter,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { FaPencilRuler } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { skill } from "../../data/ExperienceData";
import { useContext } from "react";
import { globalContextTypes, GlobalContext } from "../../App";
import Modal from "../modals/Modal";
import SkillModal from "../modals/SkillModal";
const SkillCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
  height: 9.75em;
  background-color: black;
  opacity: 0.9;
  color: white;
  align-items: center;
  margin: 1em;
  &:hover {
    background-color: #171616;
  }
`;

const SkillCardLogoContainer = styled.div`
  display: block;
  margin: auto;
`;

const SkillCardNameContainer = styled.div`
  display: block;
  width: 100%;
  height: 2.5em;
`;

const SkillCardNameHolder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.secondary};
  font-size: 1.025em;
`;

type SkillCardProps = {
  skill: skill;
};

function SkillCard({ skill }: SkillCardProps) {
  const { setShowModal, setCurrentModal, currentTheme }: globalContextTypes =
    useContext(GlobalContext);
  const openModal = () => {
    setShowModal(true);
    setCurrentModal(
      <Modal>
        <SkillModal skill={skill} />
      </Modal>
    );
  };

  return (
    <SkillCardRoot
      onClick={() => {
        openModal();
      }}
    >
      <SkillCardLogoContainer>
        {skill.name === "JavaScript" ? (
          <DiJavascript1 size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "React" ? (
          <DiReact size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "Python" ? (
          <DiPython size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "TypeScript" ? (
          <SiTypescript size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "HTML/CSS" ? (
          <DiCss3 size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "UI/UX Engineering" ? (
          <FaPencilRuler size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}

        {skill.name === "Java" ? (
          <DiJava size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "C++" ? (
          <SiCplusplus size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "SQL" ? (
          <DiDatabase size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "Node JS" ? (
          <SiNodedotjs size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "Django" ? (
          <DiDjango size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "MongoDB" ? (
          <DiMongodb size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
        {skill.name === "Flutter" ? (
          <SiFlutter size="4em" color={currentTheme.secondary} />
        ) : (
          <></>
        )}
      </SkillCardLogoContainer>
      <SkillCardNameContainer>
        <SkillCardNameHolder>{skill.name}</SkillCardNameHolder>
      </SkillCardNameContainer>
    </SkillCardRoot>
  );
}
export default SkillCard;
