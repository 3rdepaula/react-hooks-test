import React from 'react';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <LottieView resizeMode="contain" autoSize source={require('../../Animations/loading.json')} style={{ height: 80, width: 80 }} autoPlay loop />
  );
}

export default Loading;