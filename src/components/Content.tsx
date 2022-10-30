import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import SplitScreen from "./layout/SplitScreen"

const ContentRoot =  styled.div`
display: flex;
background-color: #c3b7b7;
margin:0 ;
min-height: 81vh;
;
`
const TestComponentLeft = styled.div.attrs({children:  "Hello"}

)`
background-color:red ;
`
const TestComponentRight = styled.div.attrs({children:  "World"}

)`
background-color:green ;
`

function Content(){
    return(
        
        <ContentRoot>
        <SplitScreen leftWeight={1} rightWeight={1}>
            <TestComponentLeft/><TestComponentRight/>
        </SplitScreen>
        </ContentRoot>
    )
}

export default Content