import React, { createContext, useReducer, useContext } from 'react';
import { State, Action, ActionTypes, DocsProviderProps, Dispatch } from './types';

const DocsStateContext = createContext<State | undefined>(undefined);
const DocsDispatchContext = createContext<Dispatch | undefined>(undefined);

function docsReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionTypes.OPEN: {
      return { ...state, isOpen: true };
    }
    case ActionTypes.CLOSE: {
      return { ...state, isOpen: false };
    }
    case ActionTypes.FETCH_DOCS: {
      return { ...state, loading: true };
    }
    case ActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, docs: action.receivedDocs };
    }
    case ActionTypes.FETCH_FAILED: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DocsProvider({ children }: DocsProviderProps) {
  const [state, dispatch] = useReducer(docsReducer, { docs: [], isOpen: false, loading: false });
  return (
    <DocsStateContext.Provider value={state}>
      <DocsDispatchContext.Provider value={dispatch}>{children}</DocsDispatchContext.Provider>
    </DocsStateContext.Provider>
  );
}

function useDocsState() {
  const context = useContext(DocsStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a DocsProvider');
  }
  return context;
}

function useDocsDispatch() {
  const context = React.useContext(DocsDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a DocsProvider');
  }
  return context;
}

export { DocsProvider, useDocsState, useDocsDispatch };
