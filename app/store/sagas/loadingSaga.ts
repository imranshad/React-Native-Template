/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

// worker Saga
export default function* loadingAsync() {
  yield put({type:"LOADING",payload:false});
}
