import {StyleSheet} from 'react-native';


/*
export const currentWeatherStyles = StyleSheet.create({
    weatherContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tempText: {
        fontSize: 72,
        color: '#fff'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 60,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});
*/

export const CurrentWeatherStyles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f7b733'
    },
    headerContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempText: {
        fontSize: 48,
        color: '#fff'
    },

    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});


export const ForecastStyle = StyleSheet.create({
    listContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        marginTop: 0,
        backgroundColor: '#f7b733',
        justifyContent: 'flex-end',
    },
    container: {
        height: 150,
    },
    dataContainer: {
        backgroundColor: 'black',
        opacity: 0.5,
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    icon: {
        width: 75,
        height: 75,
        marginRight: 20
    },
    tempContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    darkText: {
        fontSize: 18
    },
    lightText: {
        color: "#9a9a9a"
    },
    slightMargin: {
        marginRight: 1
    }
});

export const HorizontalFlatListItemStyle = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4,
    },
    item: {
        fontSize: 9,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        margin: 15,

    },
    degree: {
        fontSize: 16,
        color: 'white',
        margin: 10,

    },
    button: {
        position:'absolute',
        alignItems: 'center',
        top: 0,
        bottom:0,
        left:0,
        right:0,
    }
})

export const WeatherDetailStyles = StyleSheet.create({
    detailContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f7b733'
    },
    headerContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempText: {
        fontSize: 18,
        color: '#fff'
    },

    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#fff'
    }
});