import { useContext } from "react";
import styled from "styled-components";
import { globalContextTypes, GlobalContext } from "../App";

const NavbarRoot = styled.div`
  display: flex;
  padding-top: 6em;
`;

const NavbarList = styled.div`
  display: flex;
  min-width: 70em;
  padding: 0.2em;
  min-height: 2.5em;
  padding-left: 8em;
  padding-right: 2em;
  column-gap: 1em;
  justify-content: flex-end;
`;
const NavbarButtonContainer = styled.div`
  opacity: 100%;
  color: black;
  padding: 1em;
`;

const NavbarButton = styled.button`
  font-size: x-large;
  font-family: Montserrat;
`;

function Navbar() {
  const { setContent }: globalContextTypes = useContext(GlobalContext);
  return (
    <NavbarRoot>
      <NavbarList>
        <NavbarButtonContainer>
          <NavbarButton onClick={()=>setContent("About")}>About Me</NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton onClick={()=>setContent("Experience")}>Experience</NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton onClick={()=>setContent("CoolStuff")}>Cool Stuff I do</NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton onClick={()=>setContent("People")}>Important People</NavbarButton>
        </NavbarButtonContainer>
      </NavbarList>
    </NavbarRoot>
  );
}

export default Navbar;
