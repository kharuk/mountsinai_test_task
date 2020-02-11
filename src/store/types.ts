import { IDocFullInfo } from 'types/docs';

export interface State {
  docs: Array<IDocFullInfo>;
  error?: string;
  loading: boolean;
}

export enum ActionTypes {
  FETCH_DOCS = 'FETCH_DOCS',
  FETCH_DOCS_SUCCESS = 'FETCH_DOCS_SUCCESS',
  FETCH_DOCS_FAILURE = 'FETCH_DOCS_FAILURE',
}

export type Action =
  | { type: ActionTypes.FETCH_DOCS }
  | { type: ActionTypes.FETCH_DOCS_SUCCESS; receivedDocs: Array<IDocFullInfo> }
  | { type: ActionTypes.FETCH_DOCS_FAILURE; error: string };

export type Dispatch = (action: Action) => void;
export type DocsProviderProps = { children: React.ReactNode };
