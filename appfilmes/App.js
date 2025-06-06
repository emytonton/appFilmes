import React, {useEffect, useState} from 'react';
import {StyleSheet,Text, View, FlatList, ActivityIndicator} from 'react-native';
import api from './src/services/api';
import Filmes from './src/filmes';

function App(){

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(  () => {

    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes') // rota
      setFilmes(response.data); // salva os filmes
      setLoading(false);
      
    }

    loadFilmes();
  }, []);



  if(loading){
    return(
      <View style = {{alignItems: 'center', justifyContent: 'center', flex:1}}> 
      <ActivityIndicator 
      color = '#121212'
      size = {45}
      />
      </View>
    )
  }else{
      return (
    <View style={styles.container}>
      <FlatList 
      data = {filmes}
      keyExtractor = { item => String(item.id) }
      renderItem = { ({item})  => <Filmes data = {item} /> }
      />
    </View>
  );
  }


  }



const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;
