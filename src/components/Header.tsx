import styled from "styled-components";
import SplitScreen from "./layout/SplitScreen";
import Navbar from "./Navbar";

const HeaderRoot = styled.div`
  z-index: 5;
  display: flex;
  opacity: 50%;
  min-height: 14vh;
  overflow:visible;
  flex-wrap: wrap;
`;

const Title = styled.div`
  display: block;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 6em;
  margin: 0.1em;
`;

const Subtitle = styled.div`
  display: block;
  font-family: Montserrat;
  font-size: 1.5em;
  margin: 0.1em;
`;

function Header() {


  return (
    <HeaderRoot>
      <SplitScreen leftWeight={1} rightWeight={2}>
        <>
          <Title>Johnny Sins</Title>
          <Subtitle>"Astronaut, Doctor, Plumber, Firefighter, Pizza Deliveryman</Subtitle>
        </>
        <Navbar/>
      </SplitScreen>
    </HeaderRoot>
  );
}

export default Header;
