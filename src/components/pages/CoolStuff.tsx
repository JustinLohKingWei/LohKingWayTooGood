import styled from "styled-components";
import { motion } from "framer-motion";
import ServerBoard from "../layout/ServerBoard";

const CoolStuffRoot = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100%;
  justify-content:center;
`;

const initialCoolStuff = {
  opacity: 0,
};

const animateCoolStuff = {
  opacity: 1,
};

const transitionCoolStuff = { duration: 1 };

const exitCoolStuff = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};

function CoolStuff() {
  return (
    <motion.div
      initial={initialCoolStuff}
      animate={animateCoolStuff}
      transition={transitionCoolStuff}
      exit={exitCoolStuff}
    >
      <CoolStuffRoot><ServerBoard/></CoolStuffRoot>
    </motion.div>
  );
}

export default CoolStuff;