import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {CurrentWeatherStyles} from '../styles/styles';
import {Utils} from '../utils/utils';
export default class CurrentWeather extends Component {
constructor()
{
    super();
    this.formatData = this.formatData.bind(this);
}
    formatData(){
    const { currentWeatherData } = this.props;
    const formattedWeatherData = {
        weather: currentWeatherData.weather[0].main,
        temperature: currentWeatherData.main.temp,
    }



    return formattedWeatherData;
}


    render() {
        const formattedWeatherData = this.formatData();
        return (
            <View style={[CurrentWeatherStyles.weatherContainer,  { backgroundColor: Utils.weatherConditions[formattedWeatherData.weather].color }]}>
                <View style={CurrentWeatherStyles.headerContainer}>
                    <Icon name={Utils.weatherConditions[formattedWeatherData.weather].icon} size={48} color={'#fff'}/>
                    <Text style={CurrentWeatherStyles.tempText}>{formattedWeatherData.temperature}˚C</Text>
                </View>
            </View>
        );
    }
};


CurrentWeather.propTypes = {
    currentWeatherData: PropTypes.object.isRequired,
}