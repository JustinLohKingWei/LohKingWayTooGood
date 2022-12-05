import styled from "styled-components";
import { SkillData } from "../../data/ExperienceData";
import SkillCard from "./SkillCard";

const ExperienceProjectRoot = styled.div`
  display: flex;
  width: 100%;
  min-width: 20em;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

function ExperienceProject() {
  return (
    <ExperienceProjectRoot>
      {SkillData.map((data)=>{return(<SkillCard skill={data}></SkillCard>)})}
    </ExperienceProjectRoot>
  );
}

export default ExperienceProject;
