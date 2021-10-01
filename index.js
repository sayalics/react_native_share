/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App );

/* eslint-disable prettier/prettier */
export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
      acc[constant] = constant;
      return acc;
    }, {});
  }
  
  export const createReducer =
    (initialState, reducerMap) =>
    (state = initialState, action = {}) => {
      const reducer = reducerMap[action.type];
  
      return reducer ? reducer(state, action.payload) : state;
    };
  