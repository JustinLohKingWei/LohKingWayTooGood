import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../App";
import About from "./pages/About";
import CoolStuff from "./pages/CoolStuff";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import People from "./pages/People";

const ContentRoot = styled.div`
  display: flex;
  height: 43.7rem;
`;

function Content() {
  // Use this context hook to change pages
  const { content }: globalContextTypes = useContext(GlobalContext);

  return (
    <ContentRoot>
      <AnimatePresence mode="wait">
        {content === "Home" && <Home key="Home"/>}
        {content === "About" && <About key="About"/>}
        {content === "Experience" && <Experience key="Experience" />}
        {content === "People" && <People key="People" />}
        {content === "CoolStuff" && <CoolStuff key="CoolStuff" />}
        </AnimatePresence>
    </ContentRoot>
  );
}

export default Content;
