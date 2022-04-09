import styled from 'styled-components/native';
import colors from '../../Assets/colors';
import {Dimensions} from 'react-native';

const width = Dimensions.get('screen').width;

export const Container = styled.View`
  background-color: ${colors.black};
  flex: 1;
`;

export const CardContainer = styled.View`
  margin: 10px;
  padding: 16px;
  background-color: ${colors.grey};
  width: ${width * 0.9};
  align-self: center;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.View``;

export const Date = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-weight: 700;
  font-size: 24px;
`;

export const Icon = styled.Image`
  height: 50px;
  width: 50px;
`;

export const SuccessText = styled.Text<{status: string}>`
  color: ${(p) => p.status ? colors.success : colors.warning};
  font-size: 16px;
  margin-top: 10px;
  font-weight: 600;
`;
