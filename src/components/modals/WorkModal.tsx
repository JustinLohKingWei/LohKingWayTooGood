import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../../App";
import { work } from "../../data/ExperienceData";

const WorkModalRoot = styled.div`
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
  gap: 1em;
`;

const WorkPosition = styled.div`
  display: flex;
  width: 98%;
  font-size: xx-large;
  /* background-color: ${(props) => props.theme.secondary};
  color: #000000; */
  padding: 0.5em;
`;

const WorkTagContainer = styled.div`
  display: flex;
  width: 98%;
  flex-wrap: wrap;
`;

const WorkTagItem = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.secondary};
  color: #000000;
  margin: 0.1em 0.5em 0.1em 0.5em;
  padding: 0.5em;
  border-radius: 0.5em;
`;

const WorkDescription = styled.div`
  display: flex;
  width: 98%;
  white-space: pre-line;
  background-color: #171617;
  padding: 0.5em;
`;

const WorkModalCloseButton = styled.button`
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

type workCardProps = {
  work: work;
};

function WorkModal({ work }: workCardProps) {
  const { setShowModal }: globalContextTypes = useContext(GlobalContext);
  return (
    <WorkModalRoot>
      <WorkPosition>{work.position}</WorkPosition>
      {work.relatedTags ? (
        <WorkTagContainer>
          {work.relatedTags.map((data) => {
            return <WorkTagItem>{data}</WorkTagItem>;
          })}
        </WorkTagContainer>
      ) : (
        <></>
      )}
      {work.description ? (
        <WorkDescription>{work.description}</WorkDescription>
      ) : (
        <></>
      )}
      <WorkModalCloseButton
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </WorkModalCloseButton>
    </WorkModalRoot>
  );
}

export default WorkModal;
