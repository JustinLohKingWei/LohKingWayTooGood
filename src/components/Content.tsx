import styled from "styled-components";
import Header from "./Header";
import SplitScreen from "./layout/SplitScreen";

const ContentRoot = styled.div`
  display: flex;
  margin: 0;
  min-height: 81vh ;
`;

function Content() {
  return <ContentRoot>Content</ContentRoot>;
}

export default Content;
