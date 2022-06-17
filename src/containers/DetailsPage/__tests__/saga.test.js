import { getCarByIdSaga, detailsWatcher } from '../saga';
import ApiService from '../../../global/service';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getCarById } from '../actions';

jest.mock('../../../global/service', () => {
  return {
    getCarById: jest.fn(),
  };
});

describe('getCarByIdSaga', () => {
  let expected, actual, data;
  let generator = null;
  const response = { data: {} };
  const error = { response: { status: 404 }, message: 'error' };

  beforeAll(() => {
    generator = getCarByIdSaga({ payload: 1 });
  });

  it('should call generator functions', () => {
    ApiService.getCarById.mockImplementationOnce(() => {
      return Promise.resolve(response);
    });
    expected = call(ApiService.getCarById, 1);
    actual = generator.next();
    expect(actual.value).toEqual(expected);

    expected = put(getCarById.success(response.data));
    actual = generator.next(response.data);
    expect(actual.value).toEqual(expected);
  });

  it('should catch error', () => {
    expected = put(getCarById.error(error));
    actual = generator.throw(error);
    expect(actual.value).toEqual(expected);
  });
});

describe('detailsPage Watcher', () => {
  it('should watch several actions', () => {
    const generator = detailsWatcher();
    expect(generator.next().value).toEqual(all([takeLatest(getCarById.REQUEST, getCarByIdSaga)]));
  });
});
