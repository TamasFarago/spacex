import React from 'react';
import {Container, Logo, Icon, Button} from './styles';
import {useNavigation} from '@react-navigation/native';
import { View } from 'react-native';
import { FilterNavigationProp } from '../../Screens/Filter/interfaces';

const Header = () => {
  const navigation = useNavigation<FilterNavigationProp>();

  const openFilter = () => {
    navigation.navigate("Filter")
  }

  return (
    <Container>
      <View />
      <Logo source={require("../../Assets/images/logo.png")} resizeMode="contain"/>
      <Button onPress={openFilter}>
        <Icon source={require("../../Assets/icons/filter.png")}/>
      </Button>
    </Container>
  );
};

export default Header;
