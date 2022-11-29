import { motion } from "framer-motion";
import styled from "styled-components";

const HomeRoot = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100%;
  justify-content:center;
`;

const initialHome = { opacity: 0};

const animateHome = { opacity: 1};

const transitionHome = {duration:1};

const exitHome = {opacity:0,transition:{
  duration: 0.5
}};

function Home() {
  return (
    <motion.div
      initial={initialHome}
      animate={animateHome}
      transition={transitionHome}
      exit={exitHome}
    >
      <HomeRoot><h1>Welcome To My Cool Ass Website yo</h1></HomeRoot>
    </motion.div>
  );
}

export default Home;
