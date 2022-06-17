import homeReducer, { selectors } from '../reducer';
import { getAllCars } from '../actions';
describe('HomeReducer', () => {
  let action, mockState;
  beforeEach(() => {
    mockState = {
      carsList: {
        data: null,
        loading: false,
        error: null,
      },
    };
  });

  it('should return initial state if action type is undefined', () => {
    expect(homeReducer(undefined, {})).toEqual(mockState);
  });

  it('getAllCars request', () => {
    action = { type: getAllCars.REQUEST };
    expect(homeReducer(mockState, action)).toEqual({
      ...mockState,
      carsList: {
        ...mockState.carsList,
        loading: true,
      },
    });
  });

  it('getAllCars success', () => {
    action = { type: getAllCars.SUCCESS, payload: 'data' };
    expect(homeReducer(mockState, action)).toEqual({
      ...mockState,
      carsList: {
        ...mockState.carsList,
        data: 'data',
        loading: false,
        error: null,
      },
    });
  });

  it('getAllCars error', () => {
    action = { type: getAllCars.ERROR, payload: 'error' };
    expect(homeReducer(mockState, action)).toEqual({
      ...mockState,
      carsList: {
        ...mockState.carsList,
        error: 'error',
        loading: false,
        data: null,
      },
    });
  });

  describe('selectors test', () => {
    let mockSelectorState;
    beforeEach(() => {
      mockSelectorState = {
        homeReducer: mockState,
      };
    });

    it('should return carsList', () => {
      expect(selectors.carsList(mockSelectorState)).toEqual(mockState.carsList.data);
    });

    it('should return loading', () => {
      expect(selectors.carsLoading(mockSelectorState)).toEqual(mockState.carsList.loading);
    });
  });
});
