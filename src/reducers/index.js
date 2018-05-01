import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  // assign a reducer to the state it's responsible for.
  weather: WeatherReducer
});

export default rootReducer;
