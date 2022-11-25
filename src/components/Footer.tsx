import styled from "styled-components";

const FooterRoot = styled.div`
  display: flex;
  background-color: #142d4c;
  position: fixed;
  bottom: 0px;
  z-index: 5 ;
  width: 100% ;
  min-height: 3vh ;
  justify-content: center;
`;

function Footer() {
  return (
    <FooterRoot>
      <h4>Made with Typescript, Styled Components & Framer Motion,</h4>
    </FooterRoot>
  );
}

export default Footer;
