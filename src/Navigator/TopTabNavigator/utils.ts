import colors from '../../Assets/colors';
import { MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';

export const tabBarScreenOptions: MaterialTopTabNavigationOptions = {
  tabBarLabelStyle: {fontSize: 12, color: colors.white, fontWeight: '600'},
  tabBarStyle: {backgroundColor: colors.black},
  tabBarIndicatorStyle: {backgroundColor: colors.primary},
  tabBarItemStyle: {flexDirection: "row"}
};

