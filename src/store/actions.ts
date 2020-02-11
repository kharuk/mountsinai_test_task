import { getDocs, getDoctorById } from 'api';
import { ActionTypes, Dispatch } from './types';

async function fetchDoctors(dispatch: Dispatch) {
  dispatch({ type: ActionTypes.FETCH_DOCS });
  try {
    const receivedDocs = await getDocs();
    dispatch({ type: ActionTypes.FETCH_DOCS_SUCCESS, receivedDocs });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_DOCS_FAILURE, error: 'Something went wrong' });
  }
}

async function fetchDoctorFullInfo(dispatch: Dispatch, id: string) {
  dispatch({ type: ActionTypes.FETCH_DOC_FULL_INFO });
  try {
    const doctorInfo = await getDoctorById(id);
    dispatch({ type: ActionTypes.FETCH_DOC_FULL_INFO_SUCCESS, doctorInfo });
  } catch (error) {
    dispatch({ type: ActionTypes.FETCH_DOC_FULL_INFO_FAILURE, error: 'Something went wrong' });
  }
}

export { fetchDoctors, fetchDoctorFullInfo };
