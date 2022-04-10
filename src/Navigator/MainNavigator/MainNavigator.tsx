import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TopTabNavigator from '../TopTabNavigator';
import colors from '../../Assets/colors';
import LaunchDetailsScreen from "../../Screens/LaunchDetails"
import { ILaunchData } from '../../interfaces';
import Header from '../../Components/Header';

export type MainStackParamList = {
  Tab: undefined,
  LaunchDetails: {
    details: ILaunchData
  }
}

const Stack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.black,
        },
        headerTintColor: colors.primary,
        headerTitle: () => <Header/>
      }}>
      <Stack.Screen name="Tab" component={TopTabNavigator} options={{title: "Launches"}} />
      <Stack.Screen name="LaunchDetails" component={LaunchDetailsScreen} options={{title: "Launch Details"}}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;
