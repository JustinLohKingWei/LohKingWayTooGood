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
  min-width: 14.5em;
  justify-content: center;
  font-size: xx-large;
`;

function ExperienceWork() {
  return <ExperienceWorkRoot><ExperienceWorkTitle>Work</ExperienceWorkTitle>
    {WorkData.map((data)=>{return(<WorkCard work={data}/>)})}</ExperienceWorkRoot>;
}

export default ExperienceWork;
