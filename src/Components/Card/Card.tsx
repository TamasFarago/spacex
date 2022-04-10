import React from 'react';
import {
  CardContainer,
  CardContent,
  Date,
  Name,
  Icon,
  SuccessText,
} from './styles';
import {formatDate} from '../../Screens/utils';
import {ILaunchData} from '../../interfaces';
import {useNavigation} from '@react-navigation/native';
import {LaunchDetailsNavigationProp} from './interfaces';

const Card = ({item}: {item: ILaunchData}) => {
  const navigation = useNavigation<LaunchDetailsNavigationProp>();
  const status = item.launch_success;

  return (
    <CardContainer
      activeOpacity={0.8}
      onPress={() => navigation.navigate('LaunchDetails', {details: item})}>
      <CardContent>
        <Date>{formatDate(item.launch_date_local)}</Date>
        <Name>{item.mission_name}</Name>
        {status !== null && (
          <SuccessText status={status}>
            {status ? 'Success' : 'Failure'}
          </SuccessText>
        )}
      </CardContent>
      <Icon source={{uri: item.links.mission_patch_small}} resizeMode="contain" />
    </CardContainer>
  );
};

export default Card;
