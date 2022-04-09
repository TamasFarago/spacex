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

const Card = ({item}: {item: ILaunchData}) => {
  const status = item.launch_success;
  return (
    <CardContainer>
      <CardContent>
        <Date>{formatDate(item.launch_date_local)}</Date>
        <Name>{item.mission_name}</Name>
        {status !== null && (
          <SuccessText status={status}>
            {status ? 'Success' : 'Failure'}
          </SuccessText>
        )}
      </CardContent>
      <Icon source={{uri: item.links.mission_patch}} resizeMode="contain" />
    </CardContainer>
  );
};

export default Card;
