import styled from 'styled-components/native';
import colors from '../../Assets/colors';
import {Dimensions} from 'react-native';

export const Container = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  align-self: center;
  width: ${Dimensions.get('screen').width};
  justify-content: center;
  background-color: ${colors.black};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 50px;
`;

export const Icon = styled.Image`
  height: 20px;
  width: 20px;
`;

export const Button = styled.TouchableOpacity`
  /* padding: 20px; */
  position: absolute;
  right: 20;
`;
