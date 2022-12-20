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
  color: ${props => props.theme.secondary};
  opacity: 0.9;
  max-height: 35rem;
  min-width: 15em;
  width: 90%;
  padding: 0em 2em 1em 2em;
  border-radius: 2em;
`;

const AboutParaHolder = styled.div`
  display: flex;
  font-size: 1em;
  white-space: pre-line;
  font-family: "Comic Sans MS";
  padding-bottom: 1em;
  overflow-y: scroll;
  min-width: 15em;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    opacity: 1;
    background-color: ${props => props.theme.secondary};
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
