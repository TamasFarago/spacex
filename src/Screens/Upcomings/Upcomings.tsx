import {FlatList} from 'react-native';
import React from 'react';
import {Container} from './styles';
import useFetch from '../../Hooks/useFetch';
import Card from '../../Components/Card';
import {ILaunchData} from '../../store/launchList/models';
import {useSelector} from 'react-redux';
import IStateTree from '../../store/IStateTree';
import {ActivityIndicator} from 'react-native';

const Upcomings = () => {
  const {loading} = useFetch({endpoint: 'upcoming'});

  const {byDate, byStatus, upcomings, filteredUpcomings} = useSelector(
    (state: IStateTree) => state.launchList,
  );

  return (
    <Container>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          contentContainerStyle={{paddingTop: 16}}
          initialNumToRender={20}
          data={byDate || byStatus ? filteredUpcomings : upcomings}
          keyExtractor={item => item.mission_name}
          renderItem={({item}: {item: ILaunchData}) => <Card item={item} />}
        />
      )}
    </Container>
  );
};

export default Upcomings;
