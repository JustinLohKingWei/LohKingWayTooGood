import styled from "styled-components";

const HeaderRoot = styled.div`
  display: block;
  background-color: cadetblue;
  z-index: 5 ;
`;

function Header() {
  return <HeaderRoot>
    <h1>Header</h1></HeaderRoot>;
}

export default Header;
