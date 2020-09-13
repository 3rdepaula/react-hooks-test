import React, { useState, useEffect } from 'react';
import { Text, View, Image, Alert, AsyncStorage } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import * as listActions from '../../Redux/Action/actions'
import InputT from '../../Components/Input'
import { Container } from './styles';
import api from '../../Service/api'
import ButtonBase from '../../Components/Button'


const Login = ({ navigation }) => {
  const loading = useSelector(state => state.list);
  const dispatch = useDispatch()

  const [valueText, onChangeText] = useState('')
  const [valuePass, onChangePass] = useState('')

  useEffect( () => {
    dispatch(listActions.addLoading(false))
    AsyncStorage.getItem('token').then(response => {
      if(response === null){
        dispatch(listActions.addLoading(false))
        dispatch(listActions.addToken(false))
      }else{
        dispatch(listActions.addLoading(false))
        dispatch(listActions.addToken(true))
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])

  function SingIn(){
      var headers = {
          "Content-type": "application/json"
      }
      var json = {
          email: valueText,
          password: valuePass
      }
      console.log("JSON", json) 
      api.post('auth/authenticate', json, { headers }).then(async response => {     
          await AsyncStorage.setItem('token', response.data.token)
          
          dispatch(listActions.addLoading(false))
          dispatch(listActions.addToken(true))
      }).catch(error => {
        console.log(error)
        Alert.alert('Atenção', 'Problema ao Logar');
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
            placeholder="E-MAIL"
            onChangeText={text => onChangeText(text)}
            value={valueText}
            autoCapitalize = 'none'
            textContentType="emailAddress"
            editable={true}
            autoCorrect={false}
            keyboardType="default"
            secureTextEntry = {false}
        />
        <InputT 
            placeholder="SENHA"
            onChangeText={text => onChangePass(text)}
            value={valuePass}
            autoCapitalize = 'none'
            editable={true}
            autoCorrect={false}
            style={{
                marginTop: 50
            }}
            keyboardType="default"
            secureTextEntry = {true}
        />
       </View>
       
       <View style={{ marginTop: 20 }}>
            <ButtonBase 
              title="Entrar"
              onPress={() => SingIn()}
            />
       </View>
       <Text style={{ marginTop: 15 }} onPress={() => navigation.navigate('Registro')}>CADASTRE-SE</Text>
       <Text style={{ marginTop: 15 }} onPress={() => navigation.navigate('Recuperar Senha')}>ESQUECEU SUA SENHA?</Text>

    </Container>
  );
}

export default Login;