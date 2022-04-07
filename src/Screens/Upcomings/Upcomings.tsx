import {Text, View} from 'react-native';
import React, {useCallback} from 'react';
import colors from '../../Assets/colors';
import {useFocusEffect} from '@react-navigation/native';
import useFetch from '../../Hooks/useFetch';

const Upcomings = () => {
  const {launches} = useFetch({endpoint: 'upcoming'});

  console.log('UPCOMING', launches);

  return (
    <View style={{flex: 1, backgroundColor: colors.black}}>
      <Text>Upcomings</Text>
    </View>
  );
};

export default Upcomings;
