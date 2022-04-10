import {FlatList} from 'react-native';
import React from 'react';
import {Container} from './styles';
import useFetch from '../../Hooks/useFetch';
import Card from '../../Components/Card';
import { ILaunchData } from '../../interfaces';
import { useNavigation } from '@react-navigation/native';
import {useSelector} from "react-redux"
import IStateTree from '../../store/IStateTree';

const Upcomings = () => {
  const {launches} = useFetch({endpoint: 'upcoming'});
  const navigation = useNavigation()

  console.log('UPCOMING', launches);

  const data = useSelector((state: IStateTree) => state.launchList.data)
  console.log("YAAAA", data)

  return (
    <Container>
      {/* <Header /> */}
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
