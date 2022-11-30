import styled from "styled-components";

const FooterRoot = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  color: #ffbe94;
`;

function Footer() {
  return (
    <FooterRoot>
      <h4>Made with React Typescript, Styled Components & Framer Motion</h4>
    </FooterRoot>
  );
}

export default Footer;
