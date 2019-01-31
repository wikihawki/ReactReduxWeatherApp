

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
//Actions
import {requestLocationPermission, requestWeatherForCurrentLocation} from '../redux/actions/localWeather';
//Components
import CurrentWeather from '../components/CurrentWeather';
import Forecast from '../components/Forecast';
//Styles
import {transparentHeaderStyle} from '../styles/navigation';

class LocalWeather extends Component {

    static navigationOptions = ({navigation}) => ({
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
    });

    componentWillMount() {
        const {requestLocation, requestWeatherData} = this.props;
        requestLocation();
        requestWeatherData();
    }

    render() {
        const {locationIsPermitted, fetchingData, currentWeather, forecastWeatherData} = this.props;
        return (
            <View style={styles.wrapper}>
                {(locationIsPermitted || fetchingData) ? (
                    <Text>Fetching The Weather</Text>
                ) : (
                    <View style={styles.componentWrapper}>
                        <CurrentWeather currentWeatherData={currentWeather}/>
                        <Forecast forecastWeatherData={forecastWeatherData} weather={ currentWeather.weather[0].main} navigation={this.props.navigation}/>
                    </View>

                )}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    componentWrapper: {
        flex: 1,
        width: '100%',
    },
});

const mapStateToProps = state => ({
    locationIsPermitted: state.localWeatherReducer.isFetchingPermissions,
    fetchingData: state.localWeatherReducer.isFetchingData,
    currentWeather: state.localWeatherReducer.currentWeatherData,
    forecastWeatherData: state.localWeatherReducer.forecastWeatherData,
});

const mapDispatchToProps = dispatch => ({
    requestLocation: () => dispatch(requestLocationPermission()),
    requestWeatherData: () => dispatch(requestWeatherForCurrentLocation())

});
export default connect(mapStateToProps, mapDispatchToProps)(LocalWeather);