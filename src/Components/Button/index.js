import React from 'react';
import { useSelector } from 'react-redux'
import LottieView from 'lottie-react-native';
import { Container, Touch, Title } from './styles';

const ButtonBase = (props) => {
  const loading = useSelector(state => state.list.loading);

  return (
    <Container>
      <Touch onPress={props.onPress}>
        {!loading ? (
          <Title>{props.title}</Title>
        ) : (
          <LottieView resizeMode="contain" autoSize source={require('../../Animations/loadingButton.json')}  autoPlay loop style={{flex: 1, alignItems:'center', justifyContent: 'center', alignSelf: 'center'}} />
        )}
      </Touch>
    </Container>
      
  );
}

export default ButtonBase;