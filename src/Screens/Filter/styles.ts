import styled from 'styled-components/native';
import colors from '../../Assets/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.black};
  padding: 0px 10px;
`;

export const Header = styled.View`
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  padding: 10px;
`;

export const Icon = styled.Image`
  height: 25px;
  width: 25px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
`;

export const Title = styled.Text`
  color: ${colors.white};
  font-size: 24px;
  font-weight: 600;
`;

export const Option = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  border: 1px solid ${colors.white};
  opacity: 0.9;
  border-radius: 8px;
  margin-top: 20px;
  padding: 20px;
`;

export const OptionButton = styled.TouchableOpacity``;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: ${colors.black};
`;
