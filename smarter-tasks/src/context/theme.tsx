import React, { createContext, useState } from "react";

// const ThemeContext = createContext('light')
interface ThemeContextProps {
  theme: string;
  setTheme: (color: string) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light");
  const valueToShare = {
    theme: theme,
    setTheme: setTheme,
  };
  return (
    <ThemeContext.Provider value={valueToShare}>
      {children}
    </ThemeContext.Provider>
  );
};

// export default { ThemeContext, ThemeProvider };
