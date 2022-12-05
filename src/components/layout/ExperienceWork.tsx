import styled from "styled-components";
import Card from "./SkillCard";

const ExperienceWorkRoot = styled.div`
  display: flex;
  width: 100%;
  height:100%;
  justify-content: center ;
  align-items: center;
`;

function ExperienceWork() {
  return <ExperienceWorkRoot>Work</ExperienceWorkRoot>;
}

export default ExperienceWork;
