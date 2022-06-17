/* eslint-disable no-unused-vars */
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { InitStateType as HomePageReducerType } from '../containers/HomePage/types';
import { InitStateType as DetailsReducerType } from '../containers/DetailsPage/types';

export interface AsyncAction {
  request: (payload?: any) => Action | PayloadAction;
  success: (payload?: any) => Action | PayloadAction;
  error: (payload?: any) => Action | PayloadAction;
  REQUEST: string;
  SUCCESS: string;
  ERROR: string;
}

export interface AsyncConstant {
  GET: string;
  POST: string;
  PUT: string;
  PATCH: string;
  DELETE: string;
}

export interface RootReducerType {
  homeReducer: HomePageReducerType;
  detailsReducer: DetailsReducerType;
}
