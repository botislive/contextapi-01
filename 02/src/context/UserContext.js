import React from "react";

export const UserContext = React.createContext()

export const UserHook=()=>{
    return React.useContext(UserContext)
}