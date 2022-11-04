import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import styled from "styled-components";
import { useState } from "react";

const RootContainer = styled.div`
  background-image: linear-gradient(135deg, #f5f7fa 0%, #b8c6db 100%);
  overflow: hidden ;
`;

function App() {

  enum ContentPages {about='about',experience='experience'}

  const [content,setContent] = useState<ContentPages>(ContentPages.about);





  return (
    <RootContainer>
      <Header />
      <Content />
      <Footer />
    </RootContainer>
  );
}

export default App;
