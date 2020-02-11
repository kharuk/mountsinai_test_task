import { getDocs } from 'api';
import { ActionTypes, Dispatch } from './types';

const fetchDoctors = async (dispatch: Dispatch) => {
  dispatch({ type: ActionTypes.FETCH_DOCS });
  try {
    const receivedDocs = await getDocs();
    dispatch({ type: ActionTypes.FETCH_DOCS_SUCCESS, receivedDocs });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_DOCS_FAILURE, error: 'Something went wrong' });
  }
};

export { fetchDoctors };
