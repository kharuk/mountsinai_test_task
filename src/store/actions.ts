import { getDocs } from 'api';
import { ActionTypes, Dispatch } from './types';

async function fetchDoctors(dispatch: Dispatch) {
  dispatch({ type: ActionTypes.FETCH_DOCS });
  try {
    const receivedDocs = await getDocs();
    dispatch({ type: ActionTypes.FETCH_SUCCESS, receivedDocs });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_FAILED, error: 'Something went wrong' });
  }
}

export { fetchDoctors };
