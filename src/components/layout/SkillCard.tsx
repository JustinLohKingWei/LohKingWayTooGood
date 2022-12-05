import styled from "styled-components";
import {
  DiJavascript1,
  DiPython,
  DiReact,
  DiJava,
  DiHtml5,
  DiCss3,
  DiDatabase,
  DiMongodb,
  DiDjango,
} from "react-icons/di";
import { SiCplusplus, SiNodedotjs, SiTypescript } from "react-icons/si";
import { FaPencilRuler } from "react-icons/fa";
import {AiFillStar} from "react-icons/ai"
import { skill } from "../../data/ExperienceData";
const SkillCardRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 10em;
  height: 10em;
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
  height: 2em;
`;

const SkillCardNameHolder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: #ffbe94;
`;
const SkillCardRatingContainer = styled.div`
  display: block;
  width: 100%;
  height: 2em;
`;

const SkillCardRatingHolder = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

type SkillCardProps = {
  skill: skill;
};

function SkillCard({ skill }: SkillCardProps) {
 const rating =  new Array(skill.skillRating);
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
        {skill.name === "HTML" ? <DiHtml5 size="4em" color="#ffbe94" /> : <></>}
        {skill.name === "CSS" ? <DiCss3 size="4em" color="#ffbe94" /> : <></>}
        {skill.name === "UI/UX Engineering" ? (
          <FaPencilRuler size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}

        {skill.name === "Java" ? <DiJava size="4em" color="#ffbe94" /> : <></>}
        {skill.name === "C++" ? (
          <SiCplusplus size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "SQL" ? (
          <DiDatabase size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "Node JS" ? (
          <SiNodedotjs size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "Django" ? (
          <DiDjango size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
        {skill.name === "MongoDB" ? (
          <DiMongodb size="4em" color="#ffbe94" />
        ) : (
          <></>
        )}
      </SkillCardLogoContainer>
      <SkillCardNameContainer>
        <SkillCardNameHolder>{skill.name}</SkillCardNameHolder>
      </SkillCardNameContainer>
      <SkillCardRatingContainer>
        <SkillCardRatingHolder>{rating.map(()=>{return(<AiFillStar size="1em" color="#ffbe94"/>)})}</SkillCardRatingHolder>
      </SkillCardRatingContainer>
    </SkillCardRoot>
  );
}
export default SkillCard;
