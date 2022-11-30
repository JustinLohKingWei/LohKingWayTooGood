import styled from "styled-components";
import { motion } from "framer-motion";
import AboutImage from "../layout/AboutImage";
import SplitScreen from "../layout/SplitScreen";
import AboutPara from "../layout/AboutPara";

const AboutRoot = styled.div`
  display: flex;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden; ;
`;

const initialAbout = {
  opacity: 0,
};

const animateAbout = {
  opacity: 1,
};

const transitionAbout = { duration: 1 };

const exitAbout = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};

function About() {
  return (
    <motion.div
      initial={initialAbout}
      animate={animateAbout}
      transition={transitionAbout}
      exit={exitAbout}
    >
      <AboutRoot>
        <SplitScreen leftWeight={2} rightWeight={1}>
          <AboutPara />
          <AboutImage />
        </SplitScreen>
      </AboutRoot>
    </motion.div>
  );
}

export default About;
