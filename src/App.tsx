import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import styled, { ThemeProvider } from "styled-components";
import React, { createContext, useState } from "react";
import Modal from "./components/modals/Modal";
import { theme, themeList } from "./themes";
import ParticleBackground from "./components/particles/ParticleBackground";

const RootContainer = styled.div`
  display: flex;
  /* background: ${(props) => props.theme.main} url(${(props) =>
    props.theme.wallpaper}) no-repeat left
    top; */
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  /* min-width: 43.7rem; */
  max-width: 120rem;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const GlobalContext = createContext<any>(null);

export type globalContextTypes = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentModal: JSX.Element;
  setCurrentModal: React.Dispatch<React.SetStateAction<JSX.Element>>;
  currentTheme: theme;
  setCurrentTheme: React.Dispatch<React.SetStateAction<theme>>;
};

function App() {
  const [content, setContent] = useState("Home");
  const [showModal, setShowModal] = useState(false);
  const [currentModal, setCurrentModal] = useState(<Modal />);
  const [currentTheme, setCurrentTheme] = useState(themeList[0]);

  const globalContextValues: globalContextTypes = {
    content,
    setContent,
    showModal,
    setShowModal,
    currentModal,
    setCurrentModal,
    currentTheme,
    setCurrentTheme,
  };


  return (
    <GlobalContext.Provider value={globalContextValues}>
      <ThemeProvider theme={currentTheme}>
        <RootContainer>
          <ParticleBackground />
          {showModal ? currentModal : <></>}
          <FlexContainer>
            <Header />
          </FlexContainer>
          <FlexContainer>
            <Content />
          </FlexContainer>
          <FlexContainer>
            <Footer />
          </FlexContainer>
        </RootContainer>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;

