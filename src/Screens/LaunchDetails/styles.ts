import styled from 'styled-components/native';
import colors from '../../Assets/colors';
import {Dimensions, Animated} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const Scroll = styled(Animated.ScrollView)`
  background-color: ${colors.black};
`;
export const Container = styled.View`
  background-color: ${colors.black};
  min-height: ${height};
`;

export const ContentContainer = styled.View`
  padding: 0px 16px;
`;

export const BannerContainer = styled.View`
  align-items: center;
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  z-index: -99;
`;

export const Banner = styled(Animated.Image)`
  height: 200;
  width: ${width};
  opacity: 0.8;
`;

export const Name = styled.Text`
  color: ${colors.white};
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 32px;
`;

export const SubTitle = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: 700;
`;

export const Text = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  margin-top: 12px;
  line-height: 24px;
  margin-bottom: 24px;
  font-weight: 500
`;
