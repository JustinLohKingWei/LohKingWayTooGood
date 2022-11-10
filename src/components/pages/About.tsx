import styled from "styled-components";
import { motion } from "framer-motion";

const AboutRoot = styled.div`
  background-color: #6f6c58;
  display: flex;
  min-width: 100vw;
  min-height: 100%;
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
      <AboutRoot>About</AboutRoot>
    </motion.div>
  );
}

export default About;
