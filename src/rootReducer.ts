import { combineReducers } from 'redux';
import homeReducer from './containers/HomePage/reducer';
import detailsReducer from './containers/DetailsPage/reducer';

export default combineReducers({
  homeReducer,
  detailsReducer,
});
