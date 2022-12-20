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
  color: ${props => props.theme.secondary};
  font-size: 3em ;
`;

function UnderConstruction() {
  return (
    <UnderConstructionRoot>
      <UnderConstructionContainer>Justin is working tirelessly on something cool here<br/>....<br/>or is he?</UnderConstructionContainer>
    </UnderConstructionRoot>
  );
}

export default UnderConstruction;
