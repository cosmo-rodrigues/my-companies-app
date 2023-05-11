import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { dark } from '../../styles/themes/dark';
import { light } from '../../styles/themes/light';

interface ITheme {
  theme: DefaultTheme;
  setTheme: Dispatch<SetStateAction<string>>;
}

const DEFAULT_THEME_VALUE = {
  theme: {},
  setTheme: (string: string) => string,
};

export const ThemeContext = createContext<ITheme>(
  DEFAULT_THEME_VALUE as any
) as any;

export function UserThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = () => {
    if (theme.title === 'light') {
      return setTheme(dark);
    }
    return setTheme(light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
