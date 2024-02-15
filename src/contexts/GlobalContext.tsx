"use client";

import React from "react";

type ThemeMode = "devMode" | "designMode";

interface GlobalStorageProps {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
  handleThemeChange: () => void;
}

export const GlobalContext = React.createContext<GlobalStorageProps>({
  themeMode: "devMode",
  setThemeMode: () => {},
  handleThemeChange: () => {},
});

export const GlobalStorage = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = React.useState<ThemeMode>("devMode");

  function handleThemeChange() {
    const html = document.documentElement;

    setThemeMode((prev) => {
      if (prev === "devMode") {
        html.classList.remove("devMode");
        html.classList.add("designMode");
      } else {
        html.classList.remove("designMode");
        html.classList.add("devMode");
      }

      if (prev === "devMode") return "designMode";

      return "devMode";
    });

    //Restart title css animation
    const subtitle = document.querySelector<HTMLElement>("[data-subtitle]");
    
    if (subtitle) {
      subtitle.classList.remove("animate");
      subtitle.offsetWidth;
      subtitle.classList.add("animate");
    }
  }

  return (
    <GlobalContext.Provider
      value={{ themeMode, setThemeMode, handleThemeChange }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
