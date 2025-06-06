import React, {useEffect, useState} from 'react';
import {StyleSheet,Text, View, FlatList} from 'react-native';
import api from './src/services/api';
import Filmes from './src/filmes';

function App(){

  const [filmes, setFilmes] = useState([]);

  useEffect(  () => {

    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes') // rota
      setFilmes(response.data); // salva os filmes
      
    }

    loadFilmes();
  }, []);



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


const styles = StyleSheet.create({
  container:{
    flex:1,
  }
});

export default App;
