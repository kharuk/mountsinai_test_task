import React, { createContext, useEffect, useReducer, useContext } from 'react';
/* import { Spinner } from '../../components'; */
import { IDoc } from 'types/docs';
import { getDocs } from 'api';

//export const DataContext = createContext<Array<IDoc> | null>(null);

/* interface Props {
  children: React.ReactNode;
}
export const CountProvider = ({ children }: Props) => {
  useEffect(() => {
    await getDocs();
  }, []);

  const [state, dispatch] = React.useReducer(countReducer, { count: 0 });
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>{children}</CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};  */

interface State {
  docs: Array<IDoc>;
  isOpen: boolean;
}

enum ActionTypes {
  SHOW_NEXT = 'SHOW_NEXT',
  SHOW_PREVIOUS = 'SHOW_PREVIOUS',
  CHANGE_DATE = 'CHANGE_DATE',
  BOOK = 'BOOK',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

type Action =
  | { type: ActionTypes.SHOW_NEXT }
  | { type: ActionTypes.SHOW_PREVIOUS }
  | { type: ActionTypes.CHANGE_DATE }
  | { type: ActionTypes.BOOK }
  | { type: ActionTypes.OPEN }
  | { type: ActionTypes.CLOSE };

type Dispatch = (action: Action) => void;
type DocsProviderProps = { children: React.ReactNode };

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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function DocsProvider({ children }: DocsProviderProps) {
  const [state, dispatch] = useReducer(docsReducer, { docs: [], isOpen: false });
  return (
    <DocsStateContext.Provider value={state}>
      <DocsDispatchContext.Provider value={dispatch}>{children}</DocsDispatchContext.Provider>
    </DocsStateContext.Provider>
  );
}

function useCountState() {
  const context = useContext(DocsStateContext);
  if (context === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return context;
}

function useCountDispatch() {
  const context = React.useContext(DocsDispatchContext);
  if (context === undefined) {
    throw new Error('useCountDispatch must be used within a CountProvider');
  }
  return context;
}

export { DocsProvider, useCountState, useCountDispatch };
