import axios from 'axios';
// Key for https://openweathermap.org/forecast5
const API_KEY = '54e103461aacea8cdd1d3a5102eb4073';
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export default function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request // TODO passing a promise that resolves to the weather data.
  }
}
/* Middleware - Functions that take an action and depending on the action type & payload
 * Middleware can choose to let the action pass through, manipulate it, or stop it
 * BEFORE it reaches a reducer. They are gate keepers. You call an action, middleware hijacks it,
 * Passes it on to the reducer if it feels like it.  */
