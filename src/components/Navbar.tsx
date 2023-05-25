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
  width: 100%;
  min-height: 2.5em;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const NavbarButtonContainer = styled.div`
  display: flex;
  margin: 0.5em;
`;

const NavbarButton = styled.button`
  padding: 0.2em;
  border-radius: 0.25em;
  font-size: 2em;
  font-family: Montserrat;
  background: #7c1717;
  color: ${(props) => props.theme.secondary};
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    opacity: 0.75;
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
