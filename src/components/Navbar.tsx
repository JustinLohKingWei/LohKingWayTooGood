import { useContext } from "react";
import styled from "styled-components";
import { globalContextTypes, GlobalContext } from "../App";

const NavbarRoot = styled.div`
  display: flex;
  padding-top: 5em;
  width: 100%;
`;

const NavbarList = styled.div`
  display: flex;
  min-height: 2.5em;
  column-gap: 1em;
`;
const NavbarButtonContainer = styled.div`
  opacity: 100%;
  color: black;
  padding: 1em;
`;

const NavbarButton = styled.button`
  font-size: x-large;
  font-family: Montserrat;
  background: none;
  border-color: #ffbe94;
  &:hover {
    background-color: #f2caaf;
  }
  &:focus {
    background-color: #ffbe94;
    color: red;
  }
`;

function Navbar() {
  const { setContent }: globalContextTypes = useContext(GlobalContext);
  return (
    <NavbarRoot>
      <NavbarList>
        <NavbarButtonContainer>
          <NavbarButton onClick={() => setContent("About")}>
            About Me
          </NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton onClick={() => setContent("Experience")}>
            Experience
          </NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton onClick={() => setContent("CoolStuff")}>
            Cool Stuff
          </NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton onClick={() => setContent("People")}>
            Important People
          </NavbarButton>
        </NavbarButtonContainer>
      </NavbarList>
    </NavbarRoot>
  );
}

export default Navbar;
