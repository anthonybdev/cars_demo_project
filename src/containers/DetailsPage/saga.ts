import { all, takeLatest, put, call } from 'redux-saga/effects';
import service from '../../global/service';
import * as actions from './actions';
import { CarType } from '../HomePage/types';

export function* getCarByIdSaga({ payload }: { payload: number; type: string }) {
  try {
    const response: CarType = yield call(service.getCarById, payload);
    yield put(actions.getCarById.success(response));
  } catch (e) {
    yield put(actions.getCarById.error(e));
  }
}

export function* detailsWatcher() {
  yield all([takeLatest(actions.getCarById.REQUEST, getCarByIdSaga)]);
}
