import rootSaga from '../rootSaga';
import { all } from 'redux-saga/effects';
import { homePageWatcher } from '../containers/HomePage/saga';
import { detailsWatcher } from '../containers/DetailsPage/saga';

describe('Root Saga Test', () => {
  let generator = null;

  beforeAll(() => {
    generator = rootSaga();
  });

  it('should call generator function', () => {
    const expected = all([homePageWatcher(), detailsWatcher()]);
    const actual = generator.next();

    expect(actual.value).toEqual(expected);
  });
});
