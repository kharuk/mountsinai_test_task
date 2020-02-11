import { IDoc } from 'types/docs';

export interface State {
  docs: Array<IDoc>;
  isOpen: boolean;
  error?: string;
  loading: boolean;
}

export enum ActionTypes {
  FETCH_DOCS = 'FETCH_DOCS',
  FETCH_SUCCESS = 'FETCH_SUCCESS ',
  FETCH_FAILED = 'FETCH_FAILED',
  SHOW_NEXT = 'SHOW_NEXT',
  SHOW_PREVIOUS = 'SHOW_PREVIOUS',
  CHANGE_DATE = 'CHANGE_DATE',
  BOOK = 'BOOK',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export type Action =
  | { type: ActionTypes.FETCH_DOCS }
  | { type: ActionTypes.FETCH_SUCCESS; receivedDocs: Array<IDoc> }
  | { type: ActionTypes.FETCH_FAILED; error: string }
  | { type: ActionTypes.SHOW_NEXT }
  | { type: ActionTypes.SHOW_PREVIOUS }
  | { type: ActionTypes.CHANGE_DATE }
  | { type: ActionTypes.BOOK }
  | { type: ActionTypes.OPEN }
  | { type: ActionTypes.CLOSE };

export type Dispatch = (action: Action) => void;
export type DocsProviderProps = { children: React.ReactNode };
