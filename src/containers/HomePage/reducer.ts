import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';
import { InitStateType } from './types';
import { asyncReducerHandler } from '../../global/redux';
import { RootReducerType } from '../../global/types';

const initialState: InitStateType = {
  carsList: {
    data: null,
    loading: false,
    error: null,
  },
};

const reducer = createReducer(initialState, {
  ...asyncReducerHandler(actions.getAllCars, 'carsList'),
});

const carsList = (state: RootReducerType) => state.homeReducer.carsList.data;
const carsLoading = (state: RootReducerType) => state.homeReducer.carsList.loading;

export const selectors = {
  carsList,
  carsLoading,
};

export default reducer;
