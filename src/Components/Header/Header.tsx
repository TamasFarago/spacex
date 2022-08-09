import React from 'react';
import {Container, Logo} from './styles';
import {View} from 'react-native';

const Header = () => {
  return (
    <Container>
      <View />
      <Logo
        source={require('../../Assets/images/logo.png')}
        resizeMode="contain"
      />
    </Container>
  );
};

export default Header;
