import {
    createStackNavigator,
  } from 'react-navigation';
  import LocalWeather from '../screens/LocalWeather';
import DetailedWeather from "../screens/DetailedWeather";
  
  const AppRouteConfigs = createStackNavigator({
    LocalWeather: { screen: LocalWeather },
    DetailedWeather: {screen:DetailedWeather},
  });
  
  export default AppRouteConfigs;
  