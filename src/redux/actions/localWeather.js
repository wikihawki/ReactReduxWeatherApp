import {PermissionsAndroid} from 'react-native';
import {LOCAL_WEATHER} from "./types"
import { NavigationActions } from 'react-navigation';
import {config, CURRENT_WEATHER_MAP_URL, FORECAST_WEATHER_MAP_URL} from '../../data/config';

export const requestPermission = () => ({
    type: LOCAL_WEATHER.REQUEST_LOCATION_PERMISSION,
});

export const requestPermissionSuccess = () => ({
    type: LOCAL_WEATHER.LOCATION_PERMISSION_SUCCESS,
});

export const requestPermissionFailure = () => ({
    type: LOCAL_WEATHER.LOCATION_PERMISSION_FAILURE,
});

export const requestWeatherData = () => ({
    type: LOCAL_WEATHER.REQUEST_WEATHER_DATA,
});

export const requestWeatherDataSuccess = (locationData, currentWeatherData, forecastWeatherData) => ({
    type: LOCAL_WEATHER.REQUEST_WEATHER_DATA_SUCCESS,
    locationData: locationData,
    currentWeatherData: currentWeatherData,
    forecastWeatherData: forecastWeatherData,
});

export const requestWeatherDataFailure = () => ({
    type: LOCAL_WEATHER.REQUEST_WEATHER_DATA_FAILURE,
});

export function wrap(fn) {
    return function (dispatch) {
        fn().catch(error => dispatch({type: 'ERROR', error}));
    };
}

export const requestLocationPermission = () => {
    return (dispatch) => {
        dispatch(wrap(async () => {

            try {
                dispatch(requestPermission());
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        'title': 'Example App',
                        'message': 'Example App access to your location ',
                        'buttonNeutral': 'Ask Me Later',
                        'buttonNegative': 'Cancel',
                        'buttonPositive': 'OK',
                    })
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    dispatch(requestPermissionSuccess());
                } else {
                    dispatch(requestPermissionFailure());
                }
            } catch (err) {
                dispatch(requestPermissionFailure());
            }


        }));
    };
}

export const requestWeatherForCurrentLocation = () => {
    return (dispatch) => {
        dispatch(wrap(async () => {

            try {
                dispatch(requestWeatherData());
                navigator.geolocation.getCurrentPosition(
                    async (position) => {
                        let URL = `${CURRENT_WEATHER_MAP_URL.url}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${config.API_KEY}&units=metric`;
                        const currentWeather = await fetch(URL)
                            .then((response) => response.json())
                            .then((responseJson) => {
                                return responseJson;
                            });
                        URL = `${FORECAST_WEATHER_MAP_URL.url}?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=${config.API_KEY}&units=metric`;

                        const forecastWeather = await fetch(URL)
                            .then((response) => response.json())
                            .then((responseJson) => {
                                return responseJson;
                            });
                        if (currentWeather.cod != 200 || forecastWeather.cod != 200) {
                            return dispatch(requestWeatherDataFailure())
                        }
                        return dispatch(requestWeatherDataSuccess(position, currentWeather, forecastWeather));
                    },
                    error => {
                        dispatch(requestWeatherDataFailure())
                    }
                );

            } catch (err) {
                dispatch(requestWeatherDataFailure())
            }


        }));
    };
}

export const goToComponent = () =>
{
    return (dispatch) => {
        dispatch(NavigationActions.navigate({ routeName: 'DetailedWeather'}));
    };
}

