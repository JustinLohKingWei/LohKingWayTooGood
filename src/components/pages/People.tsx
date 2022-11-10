import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { people, PeopleList } from "../../data/PeopleData";

const PeopleRoot = styled.div`
  background-color: #0de643;
  display: flex;
  min-width: 100vw;
  min-height: 100%;
`;

const initialPeople = {
  opacity: 0,
};

const animatePeople = {
  opacity: 1,
};

const transitionPeople = { duration: 1 };

const exitPeople = {
  opacity: 0,
  transition: {
    duration: 0.5,
  },
};

function People() {

  // snipet which finds a certain people object in the people array
const [currentPeople,setCurrentPeople] = useState(PeopleList[PeopleList.findIndex((element:people)=>element.name==="Arry Pottah")])

  return (
    <motion.div
      initial={initialPeople}
      animate={animatePeople}
      transition={transitionPeople}
      exit={exitPeople}
    >
      <PeopleRoot>{currentPeople?.description}</PeopleRoot>
    </motion.div>
  );
}

export default People;
