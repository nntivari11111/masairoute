import React, { useContext, useReducer, useState } from "react";

export const AppContext = React.createContext();

// useReducer
// initState
// reducer( currentState, action ) => returns newState
// action is just an object
// { type: "" }
// it can other fields
const initState = {
  isAuth: false,
  token: null
};
function reducer(state, action) {
  console.log(action.type+"dd",state)
  switch (action.type) {
    
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.token
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    default: {
      return state;
    }
  }
}

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);
  
  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}
