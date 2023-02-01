import { motion } from "framer-motion";
import styled from "styled-components";
import useDate from "../../hooks/useDate";
import ThemeChanger from "../layout/ThemeChanger";

const HomeRoot = styled.div`
  display: flex;
  min-height: 100%;
  width: 100vw;
  max-width: 100%;
  align-items: center;
  overflow-y: hidden;
  flex-direction: column;
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
  font-family: "Comic Sans MS";
  color: ${(props) => props.theme.secondary};
  margin-top: 2em;
  background-color: black;
  border-radius: 1em;
  padding: 1em; ;
`;

const initialWelcome = { opacity: 0.2, y: 50 };
const animateWelcome = { opacity: 1, y: 0 };
const transtionWelcome = { duration: 1.5 };
const exitWelcome = { opacity: 0, y: 50 };

const ThemeHolder = styled.div`
  display: flex;
  width: 100%;
  min-height: 15em;
  align-items: center;
  justify-content: center;
`;

const initialThemeHolder = { opacity: 0 };
const animateThemeHolder = { opacity: 1 };
const transtionThemeHolder = { duration: 1.5 };
const exitThemeHolder = { opacity: 0 };

function Home() {
  const { hours, seconds} = useDate();

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
          <Welcome>
            <>{seconds}</>
            {/* Being alive is making choices. Between love and hate, between
            holding out your hand or closing it as a fist....
            <br />
            You have to accept the world as it is.....or fight to change it.
            <br />- Carl Manfred  */}
          </Welcome>
        </motion.div>
        <motion.div
          initial={initialThemeHolder}
          animate={animateThemeHolder}
          transition={transtionThemeHolder}
          exit={exitThemeHolder}
        >
          <ThemeHolder>
            <ThemeChanger />
          </ThemeHolder>
        </motion.div>
      </HomeRoot>
    </motion.div>
  );
}

export default Home;
