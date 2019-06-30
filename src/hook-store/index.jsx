import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext({});

const StoreProvider = ({ reducer, initState, children }) => {
  return (
    <StoreContext.Provider value={useReducer(reducer, initState)}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => useContext(StoreContext);

export { StoreContext, StoreProvider, useStoreContext };
