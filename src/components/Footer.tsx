import styled from "styled-components";

const FooterRoot = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  /* color: ${(props) => props.theme.secondary} */
  color: ${(props) => props.theme.secondary};
  flex-wrap: wrap;
  /* background-color:${(props) => props.theme.main} ; */
`;

const FooterContainer = styled.div`
  display: flex;
  background-color: #000000a7;
  padding: 1em 2em 1em 2em;
  justify-content: center;
  border-radius: 0.5em;
`;

function Footer() {
  return (
    <FooterRoot>
      <FooterContainer>
        Made with React Typescript, Styled Components & Framer Motion & Particle
        JS
      </FooterContainer>
    </FooterRoot>
  );
}

export default Footer;
