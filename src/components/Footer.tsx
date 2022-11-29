import styled from "styled-components";

const FooterRoot = styled.div`
  display: flex;
  width: 100% ;
  min-height: 2vh ;
  justify-content: center;
  color: #FFBE94;
`;

function Footer() {
  return (
    <FooterRoot>
      <h4>Made with Typescript, Styled Components & Framer Motion</h4>
    </FooterRoot>
  );
}

export default Footer;
