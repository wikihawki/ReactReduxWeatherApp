
import AppRouteConfigs from '../../navigators/AppRouteConfigs';

const firstAction = AppRouteConfigs.router.getActionForPathAndParams('LocalWeather');
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
  const nextState = AppRouteConfigs.router.getStateForAction(action, state);

  return nextState || state;
};
