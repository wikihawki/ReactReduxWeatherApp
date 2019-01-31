import React, {Component} from 'react';
import {
    View,
    FlatList
} from 'react-native';
import PropTypes from 'prop-types';


import HorizontalFlatListItem from "../components/HorizontalFlatListItem";


import {ForecastStyle} from '../styles/styles';
import {Utils} from '../utils/utils';

export default class Forecast extends Component {
    constructor() {
        super();
        this.formatData = this.formatData.bind(this);
    }


    formatData() {
        const {forecastWeatherData} = this.props;
        const formattedWeatherData = {
            list: forecastWeatherData.list.filter((element, index) => (index % 8 === 0)),
        }
        return formattedWeatherData;
    }


    render() {
        const {weather} = this.props;
        const formattedForecastData = this.formatData();
        return (
            <View style={[ForecastStyle.listContainer, {backgroundColor: Utils.weatherConditions[weather].color}]}>
                <View style={ForecastStyle.container}>

                    <FlatList
                        style={ForecastStyle.dataContainer}
                        data={formattedForecastData.list}
                        horizontal={true}
                        renderItem={({item, index}) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentalFlatList={this}
                                                        navigation={this.props.navigation}/>
                            )
                        }}
                        keyExtractor={item => item.dt_txt}
                    />
                </View>
            </View>

        );
    }
};


Forecast.propTypes = {
    forecastWeatherData: PropTypes.object.isRequired,
    navigation: PropTypes.object.isRequired,
    weather: PropTypes.string,
}
