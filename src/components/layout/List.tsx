import styled from "styled-components";
import { people, PeopleList } from "../../data/PeopleData";

type ListProps = {
  peopleList: people[];
  setcurrentPeople: React.Dispatch<React.SetStateAction<people>>;
};

const ListRoot = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.div`
  margin: 0.25em 0.1em 0.25em 0.1em;
  padding: 0.1em 0.5em 0.1em 0.5em;
  font-size: x-large;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: rgb(0, 0, 0, 0.7);
    color: white;
  }
  &:focus {
    background-color: rgb(0, 0, 0, 0.7);
    color: red;
  }
`;
function List({ peopleList, setcurrentPeople }: ListProps) {
  return (
    <ListRoot>
      {peopleList.map((data) => {
        let tab = 0;
        return (
          <div>
            <ListItem
              tabIndex={++tab}
              onClick={() =>
                setcurrentPeople(
                  PeopleList[
                    PeopleList.findIndex(
                      (element: people) => element.name === data.name
                    )
                  ]
                )
              }
            >
              {data.name}
            </ListItem>
          </div>
        );
      })}
    </ListRoot>
  );
}

export default List;
