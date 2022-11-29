import styled from "styled-components";

const AboutParaRoot = styled.div`
  display: flex;
  min-height: 100%;
  padding: 5%;
`;

const AboutParaContainer = styled.div`
  display: flex;
  background-color: black;
  
  color: white;
  opacity: 0.8;
  min-height: 40vh;
  max-height: 60vh;
  min-width: 90%;
  padding: 2em;
  border-radius: 2em;
  font-size: large ;
  white-space: pre-line;
  font-family: cursive ;
`;

function AboutPara() {
    const placeholdertext = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  return (
    <AboutParaRoot>
      <AboutParaContainer> {placeholdertext}</AboutParaContainer>
    </AboutParaRoot>
  );
}

export default AboutPara;
