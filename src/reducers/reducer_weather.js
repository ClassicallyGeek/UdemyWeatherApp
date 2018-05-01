import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // the promise in the payload is resolved by middleware "redux promise" before it gets to the reducer.
  switch(action.type) {
    case FETCH_WEATHER:
      // No state.push because that's manipluating existing array.
      // return state.concat([action.payload.data]); // Because concat returns a new array.
      return [action.payload.data, ...state]; // ES6 Syntax of the above concat statement -- inserts new array at front.
  }
    return state;
}
