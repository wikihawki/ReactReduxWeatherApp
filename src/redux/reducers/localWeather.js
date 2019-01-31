import { LOCAL_WEATHER } from '../actions/types';

const initialState = {
    isFetchingPermissions: true,
    isFetchingData:true,
    locationPermission: false,
    locationData: {},
    currentWeatherData: {},
    forecastWeatherData: {},
    APP: null,
};

export function localWeatherReducer (state = initialState, action) {
    switch (action.type) {
        case LOCAL_WEATHER.REQUEST_LOCATION_PERMISSION:
            return {
                ...state,
                isFetchingPermissions: true,
            };
        case LOCAL_WEATHER.LOCATION_PERMISSION_SUCCESS:
            return {
                ...state,
                isFetchingPermissions: false,
                locationPermission: true,
            };
        case LOCAL_WEATHER.LOCATION_PERMISSION_FAILURE:
            return {
                ...state,
                isFetchingPermissions: false,
            };
        case LOCAL_WEATHER.REQUEST_WEATHER_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
        case LOCAL_WEATHER.REQUEST_WEATHER_DATA_SUCCESS:
            return {
                ...state,
                locationData: action.locationData,
                currentWeatherData: action.currentWeatherData,
                forecastWeatherData: action.forecastWeatherData,
                isFetchingData: false,
            };
        case LOCAL_WEATHER.REQUEST_WEATHER_DATA_FAILURE:
            return {
                ...state,
                isFetchingData: false,
            };
        default:
            return state;
    }
};
