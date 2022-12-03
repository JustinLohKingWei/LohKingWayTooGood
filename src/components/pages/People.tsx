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
  min-height: 43.7rem;
`;

const PeopleDescriptionContainer = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  height: 100%;
  padding-top: 2em;
`;
const PeopleDescriptionHolder = styled.div`
  display: flex;
  border-radius: 2em ;
  padding: 2em;
  min-width: 65rem;
  background-color: #000000;
  opacity: 0.6;
  max-height: 35rem;

`;

const PeopleDescription = styled.div`
  color: white;
  font-size: large;
  white-space: pre-line;
  word-wrap: break-word;
  word-break: break-all; 
  border-width: 0 0 0 0.1em;
  border-color: #ffffff;
  border-style: solid;
  padding: 1em;
  max-width: 55em;
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
        <SplitScreen leftWeight={1} rightWeight={2}>
          <List peopleList={PeopleList} setcurrentPeople={setCurrentPeople} />
          <PeopleDescriptionContainer>
            <PeopleDescriptionHolder>
              <PeopleDescription>{currentPeople.description}</PeopleDescription>
            </PeopleDescriptionHolder>
          </PeopleDescriptionContainer>
        </SplitScreen>
      </PeopleRoot>
    </motion.div>
  );
}

export default People;
