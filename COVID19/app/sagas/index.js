/**
 *  Redux saga class init
 */
import { takeLeading, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import worldSaga from './worldSaga';
import countriesSaga from './countriesSaga';

export default function* watch() {
  yield all([
    worldRequest(),
    countriesRequest(),
  ])
}

export function* worldRequest() {
  yield takeLeading(types.WORLD_GENERAL_REQUEST, worldSaga);
}
export function* countriesRequest() {
  yield takeLeading(types.COUNTRIES_REQUEST, countriesSaga);
}