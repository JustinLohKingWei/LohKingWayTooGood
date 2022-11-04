import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
import Header from "./Header";
import SplitScreen from "./layout/SplitScreen";

const ContentRoot = styled.div`
  display: flex;
  margin: 0;
  min-height: 81vh ;
`;

function Content() {

  const{content}:globalContextTypes = useContext(GlobalContext)


  return <ContentRoot>{content}</ContentRoot>;
}

export default Content;
