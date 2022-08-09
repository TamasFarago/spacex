import {FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../Hooks/useFetch';
import {Container} from './styles';
import Card from '../../Components/Card';
import {useSelector} from 'react-redux';
import IStateTree from '../../store/IStateTree';
import {ILaunchData} from '../../store/launchList/models';
import {ActivityIndicator} from 'react-native';
import {useRoute} from '@react-navigation/native';

const LaunchList = () => {
  const route = useRoute();
  const endpoint = route.name === 'Completed' ? 'past' : 'upcoming';
  const {loading} = useFetch({endpoint});
  const {completed} = useSelector((state: IStateTree) => state.launchList);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{paddingVertical: 16}}
          initialNumToRender={20}
          data={completed}
          keyExtractor={item => item.mission_name}
          renderItem={({item}: {item: ILaunchData}) => <Card item={item} />}
        />
      )}
    </Container>
  );
};

export default LaunchList;
