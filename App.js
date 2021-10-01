import React from 'react';
import ShareComponent from './src/ShareComponent.js';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const App = () => {
  return (
    <Provider store={configureStore()}>
      <ShareComponent />
    </Provider>
  );
};
export default App;
