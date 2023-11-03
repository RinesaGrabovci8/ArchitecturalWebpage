import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
    lang: localStorage.getItem("lang") || "en",
    username: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
};

const Context = createContext(initialState);

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
  
    return( 
    <Context.Provider value={{ state, dispatch }}>
        {children}
    </Context.Provider>
    )
};
  
export { Context, ContextProvider };