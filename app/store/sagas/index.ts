import { takeEvery, all } from 'redux-saga/effects';
import loadingSaga from './loadingSaga';

export default function* watch() {
  yield all([takeEvery("LOADING", loadingSaga)]);
}
