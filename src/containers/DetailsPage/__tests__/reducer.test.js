import detailsReducer, { selectors } from '../reducer';

describe('Details Reducer', () => {
  let action, mockState;
  beforeEach(() => {
    mockState = {
      carDetails: {
        data: null,
        loading: false,
        error: null,
      },
    };
  });

  it('should return initial state if action type is undefined', () => {
    expect(detailsReducer(undefined, {})).toEqual(mockState);
  });

  describe('selectors test', () => {
    let mockSelectorState;
    beforeEach(() => {
      mockSelectorState = {
        detailsReducer: mockState,
      };
    });

    it('should return carsList', () => {
      expect(selectors.detailsData(mockSelectorState)).toEqual(mockState.carDetails.data);
    });

    it('should return loading', () => {
      expect(selectors.detailsLoading(mockSelectorState)).toEqual(mockState.carDetails.loading);
    });
  });
});
