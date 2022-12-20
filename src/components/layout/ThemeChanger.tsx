import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, globalContextTypes } from "../../App";
import { themeList } from "../../themes";

const ThemeChangerRoot = styled.div`
  display: flex;
  width: 25em;
  min-width: 5em;
  height: 5em;
  align-items: center;
  justify-content: center;
  min-height: 2em;
`;

const ThemeChangerButton = styled.button`
  display: flex;
  border-radius: 1em ;
  min-width: 10em;
  min-height: 3em;
  font-size: larger;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: ${(props) => props.theme.secondary};
`;

function ThemeChanger() {
  const { currentTheme, setCurrentTheme }: globalContextTypes =
    useContext(GlobalContext);
  return (
    <ThemeChangerRoot>
      <ThemeChangerButton
        onClick={() => {
          setCurrentTheme(
            themeList[
              (themeList.indexOf(currentTheme) +
                (1 % themeList.length) +
                themeList.length) %
                themeList.length
            ]
          );
        }}
      >
        {currentTheme.name}
      </ThemeChangerButton>
    </ThemeChangerRoot>
  );
}

export default ThemeChanger;
