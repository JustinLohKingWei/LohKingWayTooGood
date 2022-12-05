import styled from "styled-components";
import { DiJavascript1, DiPython, DiReact,DiJava } from "react-icons/di";
import { SiCplusplus, SiTypescript } from "react-icons/si";
import { skill } from "../../data/ExperienceData";
const SkillCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 12em;
  height: 12em;
  background-color: black;
  opacity: 0.9;
  color: white;
  align-items: center;
  margin: 1em;
  &:hover {
    width: 12.5em;
    height: 12.5em;
  }
`;

const SkillCardLogoContainer = styled.div`
  display: block;
  margin: auto;
`;

const SkillCardRatingContainer = styled.div`
  display: block;
  width: 100%;
  min-height: 3em;
  background-color: red;
`;
const SkillCardUsageContainer = styled.div`
  display: block;
  width: 100%;
  min-height: 3em;
  background-color: #00ff0d;
`;

type SkillCardProps = {
  skill: skill;
};

function SkillCard({ skill }: SkillCardProps) {
  return (
    <SkillCardRoot>
      <SkillCardLogoContainer>
        {skill.name === "JavaScript" ? (
          <DiJavascript1 size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "React" ? (
          <DiReact size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "Python" ? (
          <DiPython size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "TypeScript" ? (
          <SiTypescript size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "Java" ? (
          <DiJava size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
         {skill.name === "C++" ? (
          <SiCplusplus size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
      </SkillCardLogoContainer>
      <SkillCardRatingContainer>Skill</SkillCardRatingContainer>
      <SkillCardUsageContainer>Usage</SkillCardUsageContainer>
    </SkillCardRoot>
  );
}
export default SkillCard;
