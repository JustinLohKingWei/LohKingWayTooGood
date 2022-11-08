import { motion } from "framer-motion";
import styled from "styled-components";

const HomeRoot = styled.div`
  background-color: gold;
  display: flex;
  min-width: 100vw;
  min-height: 100%;
`;

const initialHome = { opacity: 0 };

const animateHome = { opacity: 1 };

const transitionHome = { duration: 5 };

const exitHome = { x: -300, opacity: 0 };

function Home() {
  return (
    <motion.div
      initial={initialHome}
      animate={animateHome}
      transition={transitionHome}
      exit={exitHome}
    >
      <HomeRoot>home</HomeRoot>
    </motion.div>
  );
}

export default Home;
