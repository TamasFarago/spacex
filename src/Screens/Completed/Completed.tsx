import {FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../Hooks/useFetch';
import {Container} from './styles';
import { ILaunchData } from '../../interfaces';
import Card from '../../Components/Card';

const Latest = () => {
  const {launches} = useFetch({endpoint: 'past'});

  console.log('LATEST', launches);
  return (
    <Container>
      <FlatList
        contentContainerStyle={{paddingVertical: 16}}
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

export default Latest;
