import { IDocFullInfo } from 'types/docs';

export interface State {
  docs: Array<IDocFullInfo>;
  /*   doctorInfo?: IDocFullInfo; */
  isOpen: boolean;
  error?: string;
  loading: boolean;
  widgetLoading: boolean;
}

export enum ActionTypes {
  FETCH_DOCS = 'FETCH_DOCS',
  FETCH_DOCS_SUCCESS = 'FETCH_DOCS_SUCCESS',
  FETCH_DOCS_FAILURE = 'FETCH_DOCS_FAILURE',
  /*   FETCH_DOC_FULL_INFO = 'FETCH_DOC_FULL_INFO',
  FETCH_DOC_FULL_INFO_SUCCESS = 'FETCH_DOC_FULL_INFO_SUCCESS ',
  FETCH_DOC_FULL_INFO_FAILURE = 'FETCH_DOC_FULL_INFO_FAILURE', */
  SHOW_NEXT = 'SHOW_NEXT',
  SHOW_PREVIOUS = 'SHOW_PREVIOUS',
  CHANGE_DATE = 'CHANGE_DATE',
  BOOK = 'BOOK',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
}

export type Action =
  | { type: ActionTypes.FETCH_DOCS }
  | { type: ActionTypes.FETCH_DOCS_SUCCESS; receivedDocs: Array<IDocFullInfo> }
  | { type: ActionTypes.FETCH_DOCS_FAILURE; error: string }
  /*   | { type: ActionTypes.FETCH_DOC_FULL_INFO }
  | { type: ActionTypes.FETCH_DOC_FULL_INFO_SUCCESS; doctorInfo: IDocFullInfo }
  | { type: ActionTypes.FETCH_DOC_FULL_INFO_FAILURE; error: string } */
  | { type: ActionTypes.SHOW_NEXT }
  | { type: ActionTypes.SHOW_PREVIOUS }
  | { type: ActionTypes.CHANGE_DATE }
  | { type: ActionTypes.BOOK }
  | { type: ActionTypes.OPEN }
  | { type: ActionTypes.CLOSE };

export type Dispatch = (action: Action) => void;
export type DocsProviderProps = { children: React.ReactNode };
