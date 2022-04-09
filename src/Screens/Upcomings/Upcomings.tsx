import {FlatList} from 'react-native';
import React from 'react';
import {Container} from './styles';
import useFetch from '../../Hooks/useFetch';
import Card from '../../Components/Card';
import { ILaunchData } from '../../interfaces';

const Upcomings = () => {
  const {launches} = useFetch({endpoint: 'upcoming'});

  console.log('UPCOMING', launches);

  return (
    <Container>
      <FlatList
        contentContainerStyle={{paddingTop: 16}}
        initialNumToRender={20}
        data={launches}
        keyExtractor={item => item.mission_name}
        renderItem={({item}: {item: ILaunchData}) => (
          <Card item={item}/>
        )}
      />
    </Container>
  );
};

export default Upcomings;
