import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import {HorizontalFlatListItemStyle} from '../styles/styles';
import {Utils} from '../utils/utils';

export default class HorizontalFlatListItem extends Component {
    constructor() {
        super();
        this.formatData = this.formatData.bind(this);
    }

    formatData() {
        const {item} = this.props;
        const formattedWeatherData = {
            weather: item.weather[0].main,
            temperature: item.main.temp,
        }


        return formattedWeatherData;
    }


    render() {
        const {item, index } = this.props;
        const formattedWeatherData = this.formatData();
        return (
            <View style={HorizontalFlatListItemStyle.itemContainer}>
                <TouchableOpacity style={HorizontalFlatListItemStyle.button} onPress={() => (this.props.navigation.navigate(('DetailedWeather'), {index: index}))}>
                <Text style={HorizontalFlatListItemStyle.item}>
                    {item.dt_txt}
                </Text>
                <Icon name={Utils.weatherConditions[formattedWeatherData.weather].icon} size={30} color={'#fff'}/>
                <Text style={HorizontalFlatListItemStyle.degree}>
                    {formattedWeatherData.temperature}˚C
                </Text>
                </TouchableOpacity>
            </View>
        );
    }
};


HorizontalFlatListItem.propTypes = {
    item: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    index: PropTypes.number,
}
