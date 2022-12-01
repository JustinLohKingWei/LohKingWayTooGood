import { motion } from "framer-motion";
import styled from "styled-components";

const HomeRoot = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100%;
  justify-content: center;
`;

const initialHome = { opacity: 0 };

const animateHome = { opacity: 1 };

const transitionHome = { duration: 1 };

const exitHome = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};

const Welcome = styled.div`
  font-size: xx-large;
  font-family: cursive;
  color: #2d112a;
  margin-top: 2em;
  min-width: 100%;
`;

const initialWelcome = { opacity: 0.2, y: 50 };
const animateWelcome = { opacity: 1, y: 0 };
const transtionWelcome = { duration: 1.5 };
const exitWelcome = { opacity: 0, y: 50 };

function Home() {
  return (
    <motion.div
      initial={initialHome}
      animate={animateHome}
      transition={transitionHome}
      exit={exitHome}
    >
      <HomeRoot>
        <motion.div
          initial={initialWelcome}
          animate={animateWelcome}
          transition={transtionWelcome}
          exit={exitWelcome}
        >
          <Welcome>Welcome To My Cool Ass Website yo</Welcome>
        </motion.div>
      </HomeRoot>
    </motion.div>
  );
}

export default Home;
