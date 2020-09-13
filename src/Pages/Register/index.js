import React, { useState } from 'react';
import { View, Image, AsyncStorage, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import * as listActions from '../../Redux/Action/actions'
import InputT from '../../Components/Input'
import { Container } from './styles';
import ButtonBase from '../../Components/Button';
import api from '../../Service/api';



const ForgotPass = () => {
    const loading = useSelector(state => state.list);
    const dispatch = useDispatch()

    const [valueName, onChangeName] = useState('')
    const [valueText, onChangeText] = useState('')
    const [valuePass, onChangePass] = useState('')

  function form(){
      dispatch(listActions.addLoading(true))
      var headers = {
          "Content-type": "application/json"
      }
      var json = {
          name: valueName,
          email: valueText,
          password: valuePass
      }
      console.log("JSON", json) 
      api.post('auth/register', json, { headers }).then(response => {
        console.log(response.data)
        dispatch(listActions.addLoading(false))
        AsyncStorage.setItem('token', response.data.token)
        dispatch(listActions.addToken(true))
      }).catch(error => {
        console.log(error)
        Alert.alert('Atenção', 'Problema ao se registrar');
        dispatch(listActions.addLoading(false))
      })
  }

  return (
    <Container>
        <View style={{marginTop: 70, height: 100}}>
        <Image
            style={{height: 130, width: 120}}
            source={require('../../assets/Logo/dart.jpg')}
        />
        </View>
        
       <View style={{alignSelf: 'center', marginTop: 100}}>
       <InputT 
            placeholder="NOME"
            onChangeText={text => onChangeName(text)}
            value={valueName}
            autoCapitalize = 'none'
            editable={true}
            autoCorrect={false}
            keyboardType="default"
            secureTextEntry = {false}
        />
        <InputT 
            placeholder="E-MAIL"
            onChangeText={text => onChangeText(text)}
            value={valueText}
            autoCapitalize = 'none'
            textContentType="emailAddress"
            editable={true}
            autoCorrect={false}
            style={{
              marginTop: 50
            }}
            keyboardType="default"
            secureTextEntry = {false}
        />
        <InputT 
            placeholder="SENHA"
            onChangeText={text => onChangePass(text)}
            value={valuePass}
            editable={true}
            autoCorrect={false}
            style={{
                marginTop: 50
            }}
            keyboardType="default"
            secureTextEntry = {true}
        />
       </View>
       
       <View style={{marginTop: 30}}>
        <ButtonBase 
            title="Registrar"
            onPress={() => form()}
        />
       </View>
    </Container>
  );
}

export default ForgotPass;