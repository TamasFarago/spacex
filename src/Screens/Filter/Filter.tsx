import React from 'react';
import {
  Container,
  Icon,
  Button,
  Header,
  Title,
  Option,
  Scroll,
  OptionButton,
} from './styles';
import {useDispatch} from 'react-redux';
import {
  filtersByLatest,
  filtersByOldest,
  filtersBySuccess,
  filtersByFailed,
  removeFilters,
} from '../../store/launchList/actions';
import { useNavigation } from '@react-navigation/native';
import { FilterNavigationProp } from '../../Screens/Filter/interfaces';

const Filter = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<FilterNavigationProp>()

  const filterLatest = () => {
    dispatch(filtersByLatest());
    navigation.goBack()
  };

  const filterOldest = () => {
    dispatch(filtersByOldest());
    navigation.goBack()
  };

  const filterSuccess = () => {
    dispatch(filtersBySuccess());
    navigation.goBack()
  };

  const filterFailed = () => {
    dispatch(filtersByFailed());
    navigation.goBack()
  };

  const clear = () => {
    dispatch(removeFilters());
    navigation.goBack()
  };

  return (
    <Container>
      <Header>
        <Button onPress={() => navigation.goBack()}>
          <Icon source={require('../../Assets/icons/arrow.png')} />
        </Button>
      </Header>
      <Scroll>
        <Title>Pick a filter option</Title>
        <OptionButton onPress={filterOldest}>
          <Option>Filter by Oldest</Option>
        </OptionButton>
        <OptionButton onPress={filterLatest}>
          <Option>Filter by newest</Option>
        </OptionButton>
        <OptionButton onPress={filterSuccess}>
          <Option>Filter by Successful launch</Option>
        </OptionButton>
        <OptionButton onPress={filterFailed}>
          <Option>Filter by Failed launch</Option>
        </OptionButton>
        <OptionButton onPress={clear}>
          <Option>Clear filter</Option>
        </OptionButton>
      </Scroll>
    </Container>
  );
};

export default Filter;
