import { useContext } from "react";
import styled from "styled-components";
import { globalContextTypes, GlobalContext } from "../App";

const NavbarRoot = styled.div`
  display: flex;
  padding-top: 3em;
  width: 100%;
`;

const NavbarList = styled.div`
  display: flex;
  min-height: 2.5em;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const NavbarButtonContainer = styled.div`
  padding: 0.5em;
`;

const NavbarButton = styled.button`
  font-size: 2em;
  font-family: Montserrat;
  background: black;
  /* border-color: #ffbe94; */
  color: #ffbe94;
  opacity: 1;
  &:hover {
    background-color: #211e1e;
  }
  &:focus {
    color: #ffff94;;
    background-color: #141212;
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
            Acknowledgements
          </NavbarButton>
        </NavbarButtonContainer>
      </NavbarList>
    </NavbarRoot>
  );
}

export default Navbar;
