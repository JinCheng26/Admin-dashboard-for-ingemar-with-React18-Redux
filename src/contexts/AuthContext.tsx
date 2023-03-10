import React, { useEffect, useReducer, useContext, useMemo, createContext } from "react";

type State = {
  [x: string]: string | boolean;
};

type Actions = {};

const INIT_STATE = {};

const AuthContext = createContext<[State, Actions]>([INIT_STATE, {}]);
AuthContext.displayName = "AuthContext";

function reducer(state: object, { type, payload }: { type: string; payload: string | boolean }) {
  return {
    ...state,
    [type]: payload,
  };
}

type ProviderProps = {
  children: React.ReactNode;
};

const AuthContextProvider = (props: ProviderProps) => {
  const [state, setState] = useReducer(reducer, INIT_STATE);

  return (
    <AuthContext.Provider value={useMemo(() => [{ ...state }, {}], [state])}>{props.children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};

export { AuthContextProvider, useAuthContext };
