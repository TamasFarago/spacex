import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CompletedScreen from '../../Screens/Completed';
import UpcomingsScreen from '../../Screens/Upcomings';
import {tabBarScreenOptions} from './utils';
import {Icon} from './styles';

type TopNavigatorParamList = {
  Upcomings: undefined;
  Completed: undefined;
};

const Tab = createMaterialTopTabNavigator<TopNavigatorParamList>();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions}>
      <Tab.Screen
        name="Upcomings"
        component={UpcomingsScreen}
        options={{
          tabBarIcon: () => (
            <Icon source={require('../../Assets/icons/clock.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedScreen}
        options={{
          tabBarIcon: () => (
            <Icon source={require('../../Assets/icons/completed.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
