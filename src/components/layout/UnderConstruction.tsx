import styled from "styled-components";

const UnderConstructionRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const UnderConstructionContainer = styled.div`
  display: flex;
  background-color: black;
  opacity: 0.9;
  padding:1em;
  color: #ffbe94;
  font-size: 5em ;
`;

function UnderConstruction() {
  return (
    <UnderConstructionRoot>
      <UnderConstructionContainer>I'm Still Figuring It Out! Stay Tuned!</UnderConstructionContainer>
    </UnderConstructionRoot>
  );
}

export default UnderConstruction;
