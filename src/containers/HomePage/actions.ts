import { asyncActionCreator } from '../../global/redux';
import * as constants from './constants';

export const getAllCars = asyncActionCreator(constants.GET_ALL_CARS);
