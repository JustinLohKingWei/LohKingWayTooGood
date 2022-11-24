import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { people, PeopleList } from "../../data/PeopleData";
import List from "../layout/List";
import SplitScreen from "../layout/SplitScreen";

const PeopleRoot = styled.div`
  /* background-color: #ffffff; */
  display: flex;
  min-width: 100vw;
  min-height: 100%;
`;

const PeopleDescriptionContainer = styled.div`
  max-width: 75vw;
  padding: 0.5em
`;

const PeopleDescription = styled.div`
  display: block;
  overflow: auto;
  overflow-block: auto;
  overflow-wrap: break-word;
  font-size: large;
  border-width: 0 0 0 0.1em;
  border-color: black ;
  border-style: solid;
  padding: 0.5em
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
  const [currentPeople, setCurrentPeople] = useState(
    PeopleList[
      PeopleList.findIndex((element: people) => element.name === "Arry Pottah")
    ]
  );

  return (
    <motion.div
      initial={initialPeople}
      animate={animatePeople}
      transition={transitionPeople}
      exit={exitPeople}
    >
      <PeopleRoot>
        <SplitScreen leftWeight={1} rightWeight={5}>
          <List peopleList={PeopleList} setcurrentPeople={setCurrentPeople} />
          <PeopleDescriptionContainer>
            <PeopleDescription>{currentPeople.description}</PeopleDescription>
          </PeopleDescriptionContainer>
        </SplitScreen>
      </PeopleRoot>
    </motion.div>
  );
}

export default People;
