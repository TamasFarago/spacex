import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import Navigator from './Navigator';
import Provider from './Providers/StoreProvider/StoreProvider';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Provider>
        <Navigator />
      </Provider>
    </>
  );
};

export default App;
