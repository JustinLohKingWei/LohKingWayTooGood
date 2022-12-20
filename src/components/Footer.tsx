import styled from "styled-components";

const FooterRoot = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
  /* color: ${props => props.theme.secondary} */
  color : ${props => props.theme.secondary};
  flex-wrap: wrap ;
  background-color:${props => props.theme.main} ;
`;

function Footer() {
  return (
    <FooterRoot>
      <h4>Made with React Typescript, Styled Components & Framer Motion</h4>
    </FooterRoot>
  );
}

export default Footer;
