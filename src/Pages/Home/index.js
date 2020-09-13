import React, { useState, useEffect } from 'react';
import { Text,View,ScrollView, SafeAreaView } from 'react-native';
import { useSelector, useDispatch} from "react-redux";
import * as listActions from '../../Redux/Action/actions';
import Axios from 'axios';
import Card from '../../Components/Card';
import Header from '../../Components/Header';

import Loading from '../../Components/Loading';

import { Container } from './styles';

const Home = () => {
  [categories, setCategories] = useState([]);
  const loading = useSelector(state => state.list);
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get('https://swapi.dev/api/people/').then(response => {
      setCategories(response.data.results)
      dispatch(listActions.addLoading(true))
    }).catch(error => {
      dispatch(listActions.addLoading(true))
      console.log(error)
    })
  }, [])

  return (
    <Container>
      <Header/>
      {!loading.loading ? (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Loading />
        </SafeAreaView>
      ) : (
        <View>
          {categories.length != 0 ? (
          <ScrollView>
            {categories.map((item, i) => (
              <View key={i} style={{ textAlign: 'center' }}>
                <Card  title={item.name}/>
              </View>
            ))}
          </ScrollView>
        ): (
          <Text style={{ textAlign: 'center'}}>Não foi possivel carregar os dados da API SWAPI</Text>
        )}
        </View>  
      )}
    </Container>
  ); 
}

export default Home; 