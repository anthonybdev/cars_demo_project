import { asyncActionCreator } from '../../global/redux';
import * as constants from './constants';

export const getCarById = asyncActionCreator(constants.GET_CAR_BY_ID);
