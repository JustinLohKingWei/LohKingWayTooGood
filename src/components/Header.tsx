import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
import SplitScreen from "./layout/SplitScreen";
import Navbar from "./Navbar";

const HeaderRoot = styled.div`
  z-index: 5;
  display: flex;
  min-height: 9rem;
  flex-wrap: wrap;
  width: 100vw;
  font-family: "futura-pt", Futura, sans-serif;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  opacity: 0.8;
  color : ${props => props.theme.secondary};
  &:hover {
    color: #c3c0c3;
  }
`;

const Title = styled.div`
  display: flex;
  /* font-family: Montserrat, sans-serif; */
  font-weight: bold;
  font-size: 6em;
  margin: 0.1em 0.1em 0.075em 0.1em;

`;

const Subtitle = styled.div`
  display: flex;
  /* font-family: Montserrat; */
  font-size: 2em;
  margin: 0.075em 0.5em 0 0.5em;
`;

function Header() {
  const { setContent }: globalContextTypes = useContext(GlobalContext);
  return (
    <HeaderRoot>
      <SplitScreen leftWeight={1} rightWeight={1}>
        <TitleContainer onClick={() => setContent("Home")}>
          <Title>Justin Loh</Title>
          <Subtitle>Software Engineer, FullStack Web Developer</Subtitle>
        </TitleContainer>
        <Navbar />
      </SplitScreen>
    </HeaderRoot>
  );
}

export default Header;
