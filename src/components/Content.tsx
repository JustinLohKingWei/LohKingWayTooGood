import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
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
      {/* <AnimatePresence>{content === "Home" && <Home />}</AnimatePresence>
      <AnimatePresence>{content === "About" && <About />}</AnimatePresence>
      <AnimatePresence >{content === "Experience" && <Experience/>}</AnimatePresence> */}
      <AnimatePresence mode="wait">
        {content === "Home" && <Home key="Home"/>}
        {content === "About" && <About key="About"/>}
        {content === "Experience" && <Experience key="Experience" />}
        </AnimatePresence>
    </ContentRoot>
  );
}

export default Content;
