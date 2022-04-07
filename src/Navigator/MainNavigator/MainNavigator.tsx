import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabNavigator from '../TopTabNavigator';
import colors from '../../Assets/colors';

type MainStackParamList = {
  Tab: undefined
}

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'Launches',
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: colors.white,
      }}>
      <Stack.Screen name="Tab" component={TopTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
