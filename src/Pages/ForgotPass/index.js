import React, {useState} from 'react';
import {View, Image, Alert, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as listActions from '../../Redux/Action/actions';
import InputT from '../../Components/Input';
import {Container} from './styles';
import ButtonBase from '../../Components/Button';
import api from '../../Service/api';

const Login = ({navigation}) => {
  const loading = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const [valueText, onChangeText] = useState('');
  const [valueCod, onChangeCod] = useState('');
  const [valueNewPass, onChangeNewPass] = useState('');
  const [verify, setVerify] = useState(false);

  function Forgot() {
    dispatch(listActions.addLoading(true));
    var headers = {
      'Content-type': 'application/json',
    };

    var json = {
      email: valueText,
    };

    api
      .post('auth/forgot_password', json, {headers})
      .then((response) => {
        console.log(response.status);
        if (response.status == 200) {
          setVerify(true);
        }

        dispatch(listActions.addLoading(false));
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Atenção', 'Problema ao tentar recuperar senha');
        dispatch(listActions.addLoading(false));
      });
  }

  function Reset() {
    dispatch(listActions.addLoading(true));
    var headers = {
      'Content-type': 'application/json',
    };

    var json = {
      token: valueCod,
      email: valueText,
      password: valueNewPass,
    };

    api
      .post('auth/reset_password', json, {headers})
      .then((response) => {
        console.log(response.data);
        if (response.status == 200) {
          setVerify(false);
          navigation.navigate('Login');
        }

        dispatch(listActions.addLoading(false));
      })
      .catch((error) => {
        console.log(error);
        Alert.alert('Atenção', 'Problema ao tentar recuperar senha');
        dispatch(listActions.addLoading(false));
      });
  }

  return (
    <Container>
      <View style={{marginTop: 70, height: 100}}>
        <Image
          style={{height: 130, width: 120}}
          source={require('../../assets/Logo/dart.jpg')}
        />
      </View>

      <View style={{alignSelf: 'center', marginTop: 100, alignItems: 'center'}}>
        <Text>
          Insira seu e-mail e verifique sua caixa de email com a nova chave para
          mudar a senha
        </Text>
        {!verify ? (
          <View>
            <InputT
              placeholder="E-MAIL"
              onChangeText={(text) => onChangeText(text)}
              value={valueText}
              textContentType="emailAddress"
              editable={true}
              autoCapitalize="none"
              autoCorrect={false}
              style={{
                marginTop: 50,
              }}
              keyboardType="default"
              secureTextEntry={false}
            />

            <View style={{marginTop: 50}}>
              <ButtonBase title="Enviar" onPress={() => Forgot()} />
            </View>
          </View>
        ) : (
          <View>
            <InputT
              placeholder="E-MAIL"
              onChangeText={(text) => onChangeText(text)}
              value={valueText}
              textContentType="emailAddress"
              autoCapitalize="none"
              editable={true}
              autoCorrect={false}
              style={{
                marginTop: 50,
              }}
              keyboardType="default"
              secureTextEntry={false}
            />

            <InputT
              placeholder="Código"
              onChangeText={(text) => onChangeCod(text)}
              value={valueCod}
              textContentType="default"
              autoCapitalize="none"
              editable={true}
              autoCorrect={false}
              style={{
                marginTop: 50,
              }}
              keyboardType="default"
              secureTextEntry={false}
            />

            <InputT
              placeholder="Nova Senha"
              onChangeText={(text) => onChangeNewPass(text)}
              value={valueNewPass}
              textContentType="default"
              autoCapitalize="none"
              editable={true}
              autoCorrect={false}
              style={{
                marginTop: 50,
              }}
              keyboardType="default"
              secureTextEntry={true}
            />

            <View style={{marginTop: 50}}>
              <ButtonBase title="Enviar" onPress={() => Reset()} />
            </View>
          </View>
        )}
      </View>
    </Container>
  );
};

export default Login;
