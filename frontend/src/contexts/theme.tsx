import { createContext, useContext, useEffect, useState } from "react";
import { DefaultTheme } from "styled-components";
import { usePersistState } from "../utils/usePersisteState";

import { ThemeProvider } from "styled-components";
import light from "../styles/theme/light";
import dark from "../styles/theme/dark";

interface IMyThemeContext {
  theme: DefaultTheme;
  toggleTheme(): void;
}

const MyThemeContext = createContext<IMyThemeContext>({} as IMyThemeContext);

const MyThemeProvider: React.FC = ({ children }) => {
  const [titleTheme, setTitleTheme] = usePersistState<string>("theme", light.title);

  const [theme, setTheme] = useState<DefaultTheme>({} as DefaultTheme);

  const toggleTheme = () => {
    let changeTheme = titleTheme === "light" ? dark.title : light.title;  
    setTitleTheme(changeTheme);
  };

  useEffect(() => {
    const chooseTheme = titleTheme === "light" ? light : dark;
    setTheme(chooseTheme);
  }, [titleTheme]);

  return (
    <MyThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};

const useMyTheme = (): IMyThemeContext => {
  const context = useContext(MyThemeContext);

  return context;
};

export { MyThemeProvider, useMyTheme };
