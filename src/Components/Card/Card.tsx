import React from 'react';
import {
  CardContainer,
  CardContent,
  Date,
  Name,
  Icon,
  SuccessText,
  CardBackground,
} from './styles';
import {formatDate} from '../../Screens/utils';
import { ILaunchData } from '../../store/launchList/models';
import {useNavigation} from '@react-navigation/native';
import {LaunchDetailsNavigationProp} from './interfaces';

const Card = ({item}: {item: ILaunchData}) => {
  const navigation = useNavigation<LaunchDetailsNavigationProp>();
  const status = item.launch_success;

  return (
    <CardContainer
      activeOpacity={0.8}
      onPress={() => navigation.navigate('LaunchDetails', {details: item})}
      background={
        item.links.flickr_images.length && item.links.flickr_images[0]
      }>
      <CardBackground
        imageStyle={{borderRadius: 8, opacity: 0.7}}
        source={
          item.links.flickr_images.length
            ? {uri: item.links.flickr_images[0]}
            : require('../../Assets/images/rocket.jpg')
        }>
        <CardContent>
          <Date>{formatDate(item.launch_date_local)}</Date>
          <Name>{item.mission_name}</Name>
          {status !== null && (
            <SuccessText status={status}>
              {status ? 'Success' : 'Failure'}
            </SuccessText>
          )}
        </CardContent>
        <Icon
          source={{uri: item.links.mission_patch_small}}
          resizeMode="contain"
        />
      </CardBackground>
    </CardContainer>
  );
};

export default Card;
