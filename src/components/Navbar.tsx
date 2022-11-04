import styled from "styled-components";

const NavbarRoot = styled.div`
  display: flex;
  padding-top: 6em;
`;

const NavbarList = styled.div`
  display: flex;
  background-color: black;
  /* opacity: 30% ; */
  min-width: 70em;
  padding: 0.2em;
  min-height: 2.5em;
  padding-right: 8em;
  column-gap: 3em;
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
  return (
    <NavbarRoot>
      <NavbarList>
        <NavbarButtonContainer>
          <NavbarButton>About Me</NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton>Experience</NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton>Cool Stuff I do</NavbarButton>
        </NavbarButtonContainer>
        <NavbarButtonContainer>
          <NavbarButton>Important People</NavbarButton>
        </NavbarButtonContainer>
      </NavbarList>
    </NavbarRoot>
  );
}

export default Navbar;
