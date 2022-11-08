import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
import Header from "./Header";
import SplitScreen from "./layout/SplitScreen";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Home from "./pages/Home";

const ContentRoot = styled.div`
  display: flex;
  margin: 0;
  min-height: 81vh;
`;


function Content() {
  // Use this context hook to change pages
  const { content }: globalContextTypes = useContext(GlobalContext);

  return (
    <ContentRoot>
      <AnimatePresence mode="wait">
      {content === "Home" ? <Home /> : <></>}
      {content === "About" ? <About /> : <></>}
      {content === "Experience" ? <Experience /> : <></>}
      </AnimatePresence>
    </ContentRoot>
  );
}

export default Content;
