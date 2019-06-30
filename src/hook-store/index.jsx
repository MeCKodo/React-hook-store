import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext({});

const StoreProvider = ({ reducer, initState, children }) => {
  return (
    // useReducer(reducer, initState) = [state, dispatch]
    <StoreContext.Provider value={useReducer(reducer, initState)}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreContext, StoreProvider, useStore };
