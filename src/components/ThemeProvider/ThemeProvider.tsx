import React, { FC } from "react";

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
  isThemeDark: false,
});

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const themeFromStorage = localStorage.getItem("theme");
  const initialThemeFromStorage = themeFromStorage == "dark" ? false : true;
  const [isThemeDark, setIsThemeDark] = React.useState(initialThemeFromStorage);

  const toggleTheme = React.useCallback(() => {
    if (themeFromStorage) {
      const isitDark = themeFromStorage == "dark" ? true : false;
      localStorage.setItem("theme", `${isitDark ? "light" : "dark"}`);
    }
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark, themeFromStorage]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <ThemeContext.Provider value={preferences}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = {
  children: undefined,
};
