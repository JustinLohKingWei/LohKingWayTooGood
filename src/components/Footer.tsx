import styled from "styled-components";

const FooterRoot = styled.div`
  display: flex;
  background-color: #142d4c;
  position: fixed;
  bottom: 0px;
  z-index: 5 ;
  width: 100% ;
  min-height: 10vh ;
`;

function Footer() {
  return (
    <FooterRoot>
      <h2>PLEASE FUCKING WORK WHAT IS YOUR PROBLEM</h2>
    </FooterRoot>
  );
}

export default Footer;
