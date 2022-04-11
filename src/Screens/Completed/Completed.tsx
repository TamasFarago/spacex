import {FlatList} from 'react-native';
import React from 'react';
import useFetch from '../../Hooks/useFetch';
import {Container} from './styles';
import Card from '../../Components/Card';
import {useSelector} from 'react-redux';
import IStateTree from '../../store/IStateTree';
import {ILaunchData} from '../../store/launchList/models';

const Latest = () => {
  useFetch({endpoint: 'past'});

  const {byDate, byStatus, completed, filteredCompleted} = useSelector(
    (state: IStateTree) => state.launchList,
  );

  return (
    <Container>
      <FlatList
        contentContainerStyle={{paddingVertical: 16}}
        initialNumToRender={20}
        data={byDate || byStatus ? filteredCompleted : completed}
        keyExtractor={item => item.mission_name}
        renderItem={({item}: {item: ILaunchData}) => <Card item={item} />}
      />
    </Container>
  );
};

export default Latest;
