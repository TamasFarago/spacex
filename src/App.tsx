import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import Navigator from './Navigator';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Navigator />
    </>
  );
};

export default App;
