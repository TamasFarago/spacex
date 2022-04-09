import colors from '../../Assets/colors';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import { Dimensions } from 'react-native';

const width = Dimensions.get("screen").width

export const tabBarScreenOptions: MaterialTopTabNavigationOptions = {
  tabBarLabelStyle: {fontSize: 12, color: colors.white, fontWeight: '600'},
  tabBarStyle: {backgroundColor: colors.black},
  tabBarIndicatorStyle: {backgroundColor: colors.primary},
  tabBarItemStyle: {flexDirection: "row", alignItems: "center",},
  tabBarIndicatorContainerStyle: {width: width * 0.8, marginHorizontal: 20},
  tabBarBounces: false,
};

