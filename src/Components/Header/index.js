import React from 'react';
import { AsyncStorage } from 'react-native';
import { useDispatch } from "react-redux";
import * as listActions from '../../Redux/Action/actions';
import { Container, Icon, Exit } from './styles';

const Header = () => {
  const dispatch = useDispatch();

  async function exit() {
    await AsyncStorage.removeItem('token');

    AsyncStorage.clear();
    dispatch(listActions.addToken(false))
  }


  return (
    <Container>
        <Icon source={require('../../assets/Logo/dart.jpg')} />
        <Exit onPress={() => exit()}>Sair</Exit>
    </Container>
  );
}

export default Header;