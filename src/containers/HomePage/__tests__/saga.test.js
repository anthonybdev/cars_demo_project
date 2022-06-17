import { getAllCarsSaga, homePageWatcher } from '../saga';
import ApiService from '../../../global/service';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { getAllCars } from '../actions';

jest.mock('../../../global/service', () => {
  return {
    getAllCars: jest.fn(),
  };
});

describe('getAllCarsSaga', () => {
  let expected, actual, data;
  let generator = null;
  const response = { data: {} };
  const error = { response: { status: 404 }, message: 'error' };

  beforeAll(() => {
    generator = getAllCarsSaga();
  });

  it('should call generator functions', () => {
    ApiService.getAllCars.mockImplementationOnce(() => {
      return Promise.resolve(response);
    });
    expected = call(ApiService.getAllCars);
    actual = generator.next();
    expect(actual.value).toEqual(expected);

    expected = put(getAllCars.success(response.data));
    actual = generator.next(response.data);
    expect(actual.value).toEqual(expected);
  });

  it('should catch error', () => {
    expected = put(getAllCars.error(error));
    actual = generator.throw(error);
    expect(actual.value).toEqual(expected);
  });
});

describe('homePageWatcher', () => {
  it('should watch several actions', () => {
    const generator = homePageWatcher();
    expect(generator.next().value).toEqual(all([takeLatest(getAllCars.REQUEST, getAllCarsSaga)]));
  });
});
