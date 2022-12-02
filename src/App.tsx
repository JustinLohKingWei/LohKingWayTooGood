import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import styled from "styled-components";
import React, { createContext, useState } from "react";
import Wallpaper from "./resources/wallpaper.jpg";

const RootContainer = styled.div`
  display: flex;
  background: #2d112a url(${Wallpaper}) no-repeat left top;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  /* min-width: 43.7rem; */
  max-width: 129rem;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const GlobalContext = createContext<any>(null);

export type globalContextTypes = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
};

function App() {
  const [content, setContent] = useState("Home");

  const globalContextValues: globalContextTypes = { content, setContent };

  return (
    <RootContainer>
      <GlobalContext.Provider value={globalContextValues}>
        <FlexContainer>
          <Header />
        </FlexContainer>
        <FlexContainer>
          <Content />
        </FlexContainer>
        <FlexContainer>
          <Footer />
        </FlexContainer>
      </GlobalContext.Provider>
    </RootContainer>
  );
}

export default App;
