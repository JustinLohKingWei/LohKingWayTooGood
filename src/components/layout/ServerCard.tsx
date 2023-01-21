import { FaSignal } from "react-icons/fa";
import styled from "styled-components";
import { server } from "../../data/ServerData";

const ServerCardRoot = styled.div`
  display: flex;
  background-color: #00000094;
  max-width: 95%;
  justify-content: center;
  align-items: center;
  min-height: 3em;
`;

const ServerName = styled.div`
  display: flex;
  min-width: 5em;
  width: 20em;
  padding-left: 1em;
  flex-wrap: wrap ;
  word-break: break-all;
`;

const ServerType = styled.div`
  display: flex;
  min-width: 5em;
  width: 20em;
  padding-left: 1em;
  flex-wrap: wrap ;
`;

const ServerStatus = styled.div`
  display: flex;
  min-width: 5em;
  width: 20em;
  padding-left: 1em;
  flex-wrap: wrap ;
  word-break: break-all;
`;
type ServerCardProps = {
  server?: server;
  isHeader?: boolean;
};

function ServerCard({ server, isHeader = false }: ServerCardProps) {
  if (isHeader)
    return (
      <ServerCardRoot>
        <ServerName>Server Name</ServerName>
        <ServerType>Server Type</ServerType>
        <ServerStatus>Server Status</ServerStatus>
      </ServerCardRoot>
    );
  else
    return (
      <ServerCardRoot>
        <ServerName>{server?.name}</ServerName>
        <ServerType>{server?.type}</ServerType>
        <ServerStatus>
          {server?.status === "Online" ? (
            <FaSignal color="green" size="2em" />
          ) : (
            <FaSignal color="red" size="2em" />
          )}
        </ServerStatus>
      </ServerCardRoot>
    );
}

export default ServerCard;
