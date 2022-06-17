import { all, takeLatest, put, call } from 'redux-saga/effects';
import service from '../../global/service';
import * as actions from './actions';
import { CarType } from './types';

export function* getAllCarsSaga() {
  try {
    const response: CarType = yield call(service.getAllCars);
    yield put(actions.getAllCars.success(response));
  } catch (e) {
    yield put(actions.getAllCars.error(e));
  }
}

export function* homePageWatcher() {
  yield all([takeLatest(actions.getAllCars.REQUEST, getAllCarsSaga)]);
}
