import { combineReducers } from 'redux';
import {nav} from './navigation';
import {localWeatherReducer} from './localWeather';

export default combineReducers({
    nav,
    localWeatherReducer}
);