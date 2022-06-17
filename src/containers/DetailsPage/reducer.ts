import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { InitStateType } from './types';
import { asyncReducerHandler } from '../../global/redux';
import { RootReducerType } from '../../global/types';

const initialState: InitStateType = {
  carDetails: {
    data: null,
    loading: false,
    error: null,
  },
};

const reducer = createReducer(initialState, {
  ...asyncReducerHandler(actions.getCarById, 'carDetails'),
});

const detailsData = (state: RootReducerType) => state.detailsReducer.carDetails.data;
const detailsLoading = (state: RootReducerType) => state.detailsReducer.carDetails.loading;

export const selectors = {
  detailsData,
  detailsLoading,
};

export default reducer;
