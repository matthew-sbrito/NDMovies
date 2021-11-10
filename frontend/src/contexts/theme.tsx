import { createContext, useContext } from "react";
import { ndmovie } from "../styles/theme/ndmovie";
import { usePersistState } from "../utils/usePersisteState";

interface IThemeContext {
  theme: object;
  toggleTheme(): void;
}

export interface IThemeProps{
  title: string;
  backgroundColor: string;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistState<IThemeProps>("theme", ndmovie);

  function toggleTheme(): void{
    // const chooseTheme = theme.title
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
