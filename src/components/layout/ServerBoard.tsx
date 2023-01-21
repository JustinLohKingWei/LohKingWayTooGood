import styled from "styled-components";
import { testServer, testServer2 } from "../../data/ServerData";
import ServerCard from "./ServerCard";

const ServerBoardRoot = styled.div`
  display: flex;
  margin: 5em;
  width: 70%;
  height: 18em;
  background-color: #000000de;
  color: ${(props) => props.theme.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const SectionHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

function ServerBoard() {
  return (
    <ServerBoardRoot>
      <SectionHeader><h2>Justin's Super Cool Server List</h2></SectionHeader>
      <ServerCard isHeader={true} />
      <ServerCard server={testServer} />
      <ServerCard server={testServer2} />
    </ServerBoardRoot>
  );
}

export default ServerBoard;
