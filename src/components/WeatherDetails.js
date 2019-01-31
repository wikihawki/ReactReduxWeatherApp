import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {WeatherDetailStyles} from '../styles/styles';
import {Utils} from '../utils/utils';

export default class WeatherDetails extends Component {
    constructor() {
        super();
        this.formatData = this.formatData.bind(this);
    }

    formatData() {
        const {forecastWeatherData, index} = this.props;
        const formattedWeatherData = {
            weather: forecastWeatherData.list[index * 8].weather[0].main,
            weatherDesc: forecastWeatherData.list[index * 8].weather[0].description,
            temperature: forecastWeatherData.list[index * 8].main.temp,
            temperatureMax: forecastWeatherData.list[index * 8].main.temp_max,
            temperatureMin: forecastWeatherData.list[index * 8].main.temp_min,
            pressure: forecastWeatherData.list[index * 8].main.pressure,
            humidity: forecastWeatherData.list[index * 8].main.humidity,
            clauds: forecastWeatherData.list[index * 8].clouds.all,
        }


        return formattedWeatherData;
    }


    render() {
        const formattedWeatherData = this.formatData();
        return (
            <View
                style={[WeatherDetailStyles.detailContainer, {backgroundColor: Utils.weatherConditions[formattedWeatherData.weather].color}]}>
                <View style={WeatherDetailStyles.headerContainer}>
                    <Icon name={Utils.weatherConditions[formattedWeatherData.weather].icon} size={48} color={'#fff'}/>
                    <View style={WeatherDetailStyles.tempText}>
                        <Text style={WeatherDetailStyles.tempText}> {formattedWeatherData.weatherDesc}</Text>
                        <Text
                            style={WeatherDetailStyles.tempText}> Temperature {formattedWeatherData.temperature}˚C</Text>
                        <Text style={WeatherDetailStyles.tempText}> Temperature
                            max {formattedWeatherData.temperatureMax}˚C</Text>
                        <Text style={WeatherDetailStyles.tempText}> Temperature
                            min {formattedWeatherData.temperatureMin}˚C</Text>
                        <Text style={WeatherDetailStyles.tempText}> Preassure {formattedWeatherData.pressure}</Text>
                        <Text style={WeatherDetailStyles.tempText}> Humidity {formattedWeatherData.humidity}%</Text>
                    </View>
                </View>
            </View>
        );
    }
};


WeatherDetails.propTypes = {
    forecastWeatherData: PropTypes.object.isRequired,
    index: PropTypes.number,
}