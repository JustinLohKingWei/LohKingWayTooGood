import styled from "styled-components";
import { work } from "../../data/ExperienceData";

const WorkCardRoot = styled.div`
  display: flex;
  width: 60%;
  height: 5em;
  background-color: black;
  color: ${(props) => props.theme.secondary};
  margin: 1em 0 1em 0;
  padding: 1em;
  border-radius: 1em;
  flex-direction: column;
  &:hover {
    background-color: #171616;
  }
`;

const WorkCardTitle = styled.div`
  width: 100%;
  font-size: x-large;
  font-weight: bold;
`;

const WorkCardPosition = styled.div`
  width: 100%;
  font-size: large;
`;

type wordCardProps = {
  work: work;
};

function WorkCard({ work }: wordCardProps) {
  return (
    <WorkCardRoot>
      <WorkCardTitle>{work.name}</WorkCardTitle>
      <WorkCardPosition>{work.position}</WorkCardPosition>
    </WorkCardRoot>
  );
}

export default WorkCard;
