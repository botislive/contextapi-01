import React from "react";

export const TodoContext = React.createContext();

export const TodoHook = () => {
    return React.useContext(TodoContext);
}