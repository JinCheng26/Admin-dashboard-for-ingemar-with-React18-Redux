import React, { useEffect, useReducer, useContext, useMemo, createContext } from "react";

type State = {
  [x: string]: string | boolean;
};

type Actions = {};

const INIT_STATE = {};

const AppContext = createContext<[State, Actions]>([INIT_STATE, {}]);
AppContext.displayName = "AppContext";

function reducer(state: object, { type, payload }: { type: string; payload: string | boolean }) {
  return {
    ...state,
    [type]: payload,
  };
}

type ProviderProps = {
  children: React.ReactNode;
};

const AppContextProvider = (props: ProviderProps) => {
  const [state, setState] = useReducer(reducer, INIT_STATE);

  return <AppContext.Provider value={useMemo(() => [{ ...state }, {}], [state])}>{props.children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
