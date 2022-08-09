import styled from 'styled-components/native';
import colors from '../../Assets/colors';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export const Container = styled.View`
  background-color: ${colors.black};
  flex: 1;
`;

export const Card = styled.View`
  margin: 10px;
  background-color: ${colors.grey};
  height: 80px;
  width: ${width * 0.9};
  align-self: center;
`;
