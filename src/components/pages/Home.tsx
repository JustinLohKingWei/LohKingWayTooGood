import { motion } from "framer-motion";
import styled from "styled-components";

const HomeRoot = styled.div`
  display: flex;
  min-height: 100%;
  width: 100vw;
  max-width: 100%;
  justify-content: center;
  overflow-y: hidden;
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
  display: flex;
  font-size: xx-large;
  font-family: 'Comic Sans MS';
  color: #ffbe94;
  margin-top: 2em;
  background-color: black ;
  border-radius: 1em ;
  padding: 1em; ;
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
          <Welcome>Being alive is making choices. Between love and hate, between holding out your hand or closing it as a fist....<br/>You have to accept the world as it is.....or fight to change it.<br/>- Carl Manfred</Welcome>
        </motion.div>
      </HomeRoot>
    </motion.div>
  );
}

export default Home;
