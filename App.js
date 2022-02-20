import React from 'react';
import {LogBox} from 'react-native';
import Navigation from './src/mobx-2/Navigation';
import MobxSimpleExample from './src/mobx/MobxSimpleExample';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <>
      {/* <MobxSimpleExample /> */}
      <Navigation />
    </>
  );
};

export default App;
