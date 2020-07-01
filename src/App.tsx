import React from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";
import usePersistedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { cardsInfo } from "./utils/constants";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Card from "./components/Card";
import { Content } from "./components/Content/styles";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} />
        <Content>
          {cardsInfo.map((item) => (
            <Card title={item.title} description={item.description} />
          ))}
        </Content>
      </div>
    </ThemeProvider>
  );
}

export default App;
