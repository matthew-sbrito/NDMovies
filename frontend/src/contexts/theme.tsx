import { createContext, useContext } from "react";
import { DefaultTheme } from "styled-components";
import { ndmovie } from "../styles/theme/ndmovie";
import { usePersistState } from "../utils/usePersisteState";

import * as Styled from "styled-components";

interface IThemeContext {
  theme: DefaultTheme;
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistState<DefaultTheme>("theme", ndmovie);

  function toggleTheme(): void {
    // const chooseTheme = theme.
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Styled.ThemeProvider theme={theme}>{children}</Styled.ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
