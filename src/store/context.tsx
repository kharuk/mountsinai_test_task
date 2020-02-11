import React, { createContext, useReducer, useContext } from 'react';
import { State, Action, ActionTypes, DocsProviderProps, Dispatch } from './types';

const DocsStateContext = createContext<State | undefined>(undefined);
const DocsDispatchContext = createContext<Dispatch | undefined>(undefined);

const docsReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DOCS: {
      return { ...state, loading: true };
    }
    case ActionTypes.FETCH_DOCS_SUCCESS: {
      return { ...state, loading: false, docs: action.receivedDocs };
    }
    case ActionTypes.FETCH_DOCS_FAILURE: {
      return { ...state, loading: false, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};

const DocsProvider = ({ children }: DocsProviderProps) => {
  const [state, dispatch] = useReducer(docsReducer, {
    docs: [],
    loading: false,
  });
  return (
    <DocsStateContext.Provider value={state}>
      <DocsDispatchContext.Provider value={dispatch}>{children}</DocsDispatchContext.Provider>
    </DocsStateContext.Provider>
  );
};

const useDocsState = () => {
  const context = useContext(DocsStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a DocsProvider');
  }
  return context;
};

const useDocsDispatch = () => {
  const context = React.useContext(DocsDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a DocsProvider');
  }
  return context;
};

export { DocsProvider, useDocsState, useDocsDispatch };
