import styled from "styled-components";

const HeaderRoot = styled.div`
  background-color: cadetblue;
  z-index: 5 ;
  display: flex ;
  opacity: 50% ;
`;

function Header() {
  return <HeaderRoot>
    <h1>Header</h1></HeaderRoot>;
}

export default Header;
