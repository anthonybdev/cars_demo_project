import { all } from 'redux-saga/effects';
import { homePageWatcher } from './containers/HomePage/saga';
import { detailsWatcher } from './containers/DetailsPage/saga';

export default function* rootSaga() {
  yield all([homePageWatcher(), detailsWatcher()]);
}
