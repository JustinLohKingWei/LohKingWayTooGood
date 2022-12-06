import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { PeopleList } from "../../data/PeopleData";
import List from "../layout/List";
import SplitScreen from "../layout/SplitScreen";

const PeopleRoot = styled.div`
  /* background-color: #ffffff; */
  display: flex;
  width: 100vw;
  max-width: 100% ;
  min-height: 43.7rem;
`;

const PeopleListContainer = styled.div`

  display: flex;
  justify-content: center;
  padding: 5% 5% 0 5%;
  max-height: 40rem;
  flex: 1 ;
`;

const PeopleDescriptionContainer = styled.div`
max-width:100%;
  display: flex;
  max-width: 100%;
  justify-content: center;
  height: 100%;
  padding: 0 5% 0 5%;

`;
const PeopleDescriptionHolder = styled.div`
  display: flex;
  border-radius: 2em;
  padding: 3%;
  background-color: #000000;
  opacity: 0.9;
  max-height: 35rem;
  margin: 2em 2.5em 0 2.5em;
  min-width: 90%;
`;

const PeopleDescription = styled.div`
  color: #ffbe94;
  font-size:  x-large;
  white-space: pre-line;
  word-wrap: break-word;
  border-width: 0 0 0 0.1em;
  border-color: #ffbe94;
  border-style: solid;
  padding: 1em;
  min-width: 10em;
  overflow-y: auto ;
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
    PeopleList[0
      // PeopleList.findIndex((element: people) => element.name === "Arry Pottah")
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
          <PeopleListContainer>
            <List peopleList={PeopleList} setcurrentPeople={setCurrentPeople} />
          </PeopleListContainer>
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
