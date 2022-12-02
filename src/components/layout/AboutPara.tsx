import styled from "styled-components";
import { AboutProfile } from "../../data/AboutData";

const AboutParaRoot = styled.div`
  display: flex;
  max-height: 40rem;
  padding: 5% 5% 0 5%;
`;

const AboutParaContainer = styled.div`
  display: flex;
  background-color: black;
  color: white;
  opacity: 0.8;
  max-height: 35rem;
  min-width: 90%;
  padding: 2em 2em 0 2em;
  border-radius: 2em;
`;

const AboutParaHolder = styled.div`
  display: flex;
  font-size: large;
  white-space: pre-line;
  font-family: cursive;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    opacity: 1;
    background-color: #ffbe94;
    max-height: 5em;
  }
`;

function AboutPara() {
  return (
    <AboutParaRoot>
      <AboutParaContainer>
        <AboutParaHolder> {AboutProfile.description}</AboutParaHolder>
      </AboutParaContainer>
    </AboutParaRoot>
  );
}

export default AboutPara;
