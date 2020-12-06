import React, {createContext,useContext,useReducer} from "react";


//prepare data layer
export const StateContext = createContext();

//children= > App
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children} 
    </StateContext.Provider>
);

//A hook to pull info from data layer
export const useStateValue = () => useContext(StateContext);