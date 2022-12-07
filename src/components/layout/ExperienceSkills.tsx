import styled from "styled-components";
import { SkillData } from "../../data/ExperienceData";
import SkillCard from "./SkillCard";

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
  min-width: 14.5em;
  justify-content: center;
  font-size: xx-large;
  font-weight: bold ;
`;

const ExperienceCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0 1em 0;
`;

function ExperienceSkills() {
  return (
    <ExperienceSkillRoot>
      <ExperienceSkillTitle>Skills</ExperienceSkillTitle>
      <ExperienceCardContainer>
        {SkillData.map((data) => {
          return <SkillCard skill={data}></SkillCard>;
        })}
      </ExperienceCardContainer>
    </ExperienceSkillRoot>
  );
}

export default ExperienceSkills;
