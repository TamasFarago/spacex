import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container} from './styles';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import { filtersByOldest } from '../../store/launchList/actions';

const Header = () => {
  const navigation = useNavigation();
 
  const dispatch = useDispatch();

  const filter = () => {
      dispatch(filtersByOldest())
  }

  return (
    <Container>
      <TouchableOpacity onPress={filter}>
        <Text style={{color: 'white'}}>FILTER</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
