import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
import SplitScreen from "./layout/SplitScreen";
import Navbar from "./Navbar";

const HeaderRoot = styled.div`
  z-index: 5;
  display: flex;
  opacity: 70%;
  min-height: 9rem;
  flex-wrap: wrap;
  width: 100vw;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 6em;
  margin: 0.1em 0.1em 0.075em 0.1em;
  &:hover {
    color: #2d112a;
  }
`;

const Subtitle = styled.div`
  display: flex;
  font-family: Montserrat;
  font-size: 2em;
  margin: 0.075em 0.5em 0 0.5em;
`;

function Header() {
  const { setContent }: globalContextTypes = useContext(GlobalContext);
  return (
    <HeaderRoot>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <TitleContainer>
          <Title onClick={() => setContent("Home")}>Justin Loh</Title>
          <Subtitle>Software Engineer, FullStack Web Developer</Subtitle>
        </TitleContainer>
        <Navbar />
      </SplitScreen>
    </HeaderRoot>
  );
}

export default Header;
