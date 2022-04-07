import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Latest from '../../Screens/Latest';
import Upcomings from '../../Screens/Upcomings';
import {tabBarScreenOptions} from './utils';
import {View} from "react-native"

type TopNavigatorParamList = {
  Upcomings: undefined;
  Latest: undefined;
};

const Tab = createMaterialTopTabNavigator<TopNavigatorParamList>();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={tabBarScreenOptions}>
      <Tab.Screen
        name="Upcomings"
        component={Upcomings}
        options={{
          tabBarIcon: () => <View style={{height: 20, width: 20, backgroundColor: "red"}} />,
        }}
      />
      <Tab.Screen name="Latest" component={Latest} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
