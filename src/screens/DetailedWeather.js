
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    View,
    StyleSheet,
} from 'react-native';

//Components
import WeatherDetails from '../components/WeatherDetails';
//Styles
import {transparentHeaderStyle} from '../styles/navigation';

class DetailedWeather extends Component {

    static navigationOptions = ({navigation}) => ({
        headerStyle: transparentHeaderStyle,
        headerTransparent: true,
    });

    render() {
        const index = this.props.navigation.getParam('index', 0);
        return (
            <View style={styles.wrapper}>
                <View  style={styles.componentWrapper}>
                   <WeatherDetails forecastWeatherData={this.props.forecastWeatherData} index={index}/>
                </View>
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
    forecastWeatherData: state.localWeatherReducer.forecastWeatherData,
});
export default connect(mapStateToProps)(DetailedWeather);