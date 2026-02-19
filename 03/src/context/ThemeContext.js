import React from "react";

export const ThemeContext = React.createContext();

export const ThemeToggleHook=()  => {
           return React.useContext(ThemeContext);
}