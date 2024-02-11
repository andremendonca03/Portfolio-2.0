'use client';

import React from "react";

type ThemeMode = "devMode" | "designMode";

interface GlobalStorageProps {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export const GlobalContext = React.createContext<GlobalStorageProps>({
  themeMode: "devMode",
  setThemeMode: () => {},
});

export const GlobalStorage = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = React.useState<ThemeMode>("devMode");

  React.useEffect(() => {
    const html = document.documentElement;
    if (html) {
      html.classList.toggle("devMode");
      html.classList.toggle("designMode");
    }
  }, [themeMode]);

  return (
    <GlobalContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </GlobalContext.Provider>
  );
};
