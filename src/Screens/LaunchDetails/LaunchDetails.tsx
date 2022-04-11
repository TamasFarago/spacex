import {Animated} from 'react-native';
import React, {useRef} from 'react';
import {
  Scroll,
  Container,
  BannerContainer,
  Banner,
  Name,
  ContentContainer,
  Text,
  SubTitle,
} from './styles';
import {useRoute} from '@react-navigation/native';
import {ScreenRouteProps} from './interfaces';
import {formatDate, missionStatus} from '../utils';

const LaunchDetails = () => {
  const {
    params: {details},
  } = useRoute<ScreenRouteProps>();

  const scrollViewRef = useRef(new Animated.Value(0)).current;

  const bannerPosition = scrollViewRef.interpolate({
    inputRange: [-300, 0, 300],
    outputRange: [-300 / 2, 0, 150 * 0.75],
  });

  const bannerSize = scrollViewRef.interpolate({
    inputRange: [-300, -50, 0, 300],
    outputRange: [2.3, 1.5, 1.5, 1.5],
  });

  return (
    <Scroll
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollViewRef}}}],
        {
          useNativeDriver: true,
        },
      )}
      scrollEventThrottle={16}>
      <Container>
        <BannerContainer>
          {!details.links.flickr_images.length ? (
            <Banner
              source={require('../../Assets/images/rocket.jpg')}
              resizeMode="stretch"
              style={{
                transform: [{translateY: bannerPosition}, {scale: bannerSize}],
              }}
            />
          ) : (
            <Banner
              source={{uri: details.links.flickr_images[0]}}
              resizeMode="stretch"
              style={{
                transform: [{translateY: bannerPosition}, {scale: bannerSize}],
              }}
            />
          )}
        <Name>{details.mission_name}</Name>
        </BannerContainer>
        <ContentContainer>
          <SubTitle>Launch Date</SubTitle>
          <Text>{formatDate(details.launch_date_local)}</Text>
          {details.details && (
            <>
              <SubTitle>Details</SubTitle>
              <Text>{details.details}</Text>
            </>
          )}
          <SubTitle>Launch Site</SubTitle>
          <Text>{details.launch_site.site_name_long}</Text>
          <SubTitle>Mission Status</SubTitle>
          <Text>{missionStatus(details.launch_success)}</Text>
        </ContentContainer>
      </Container>
    </Scroll>
  );
};

export default LaunchDetails;
