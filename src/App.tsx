import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import styled from "styled-components";
import React, { createContext, useState } from "react";
import Wallpaper from "./resources/wallpaper.jpg";

const RootContainer = styled.div`
  background-image: url(${Wallpaper});
  overflow: hidden;
`;

const BlockContainer = styled.div`
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
        <BlockContainer>
          <Header />
        </BlockContainer>
        <BlockContainer>
          <Content />
        </BlockContainer>
        <BlockContainer>
          <Footer />
        </BlockContainer>
      </GlobalContext.Provider>
    </RootContainer>
  );
}

export default App;
