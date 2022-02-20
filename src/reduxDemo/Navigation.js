import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GetData from '../reduxDemo/GetData';
import SaveData from '../reduxDemo/SaveData';
import {Provider} from 'react-redux';

import configureStore from './store';

const Stack = createStackNavigator();

const store = configureStore();

const Navigation = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Save" component={SaveData} />
          <Stack.Screen name="Get" component={GetData} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
