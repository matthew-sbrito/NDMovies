import { createContext, useContext } from "react";
import { DefaultTheme } from "styled-components";
import { ndmovie } from "../styles/theme/ndmovie";
import { usePersistState } from "../utils/usePersisteState";

interface IThemeContext {
  theme: object;
  toggleTheme(): void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistState<DefaultTheme>("theme", ndmovie);

  function toggleTheme(): void{
    // const chooseTheme = theme.
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

export { ThemeProvider, useTheme };
