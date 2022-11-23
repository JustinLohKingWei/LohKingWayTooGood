import styled from "styled-components"
import { people, PeopleList } from "../../data/PeopleData"


type ListProps = {
    peopleList : people[]
    setcurrentPeople :React.Dispatch<React.SetStateAction<people>>
}


const ListRoot = styled.div`
display: flex ;
flex-direction: column ;
`
const ListItem = styled.div`
display: block ;
`

function List( {peopleList,setcurrentPeople} : ListProps ) {

    return(<ListRoot>
    {peopleList.map((data)=>{return(
        <ListItem onClick={()=>setcurrentPeople(PeopleList[PeopleList.findIndex((element:people)=>element.name===data.name)])}>{data.name}</ListItem >
    )})}
    </ListRoot>)
    
}

export default List