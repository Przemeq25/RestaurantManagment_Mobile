import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {alertReducer} from './alertReducer';
import {registerReducer} from './registerReducer';
import {basketReducer} from './basketReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  register: registerReducer,
  basket: basketReducer,
});
