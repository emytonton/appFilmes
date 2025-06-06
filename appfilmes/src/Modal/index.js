import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Descricao(props){
    return(
        <View style = {styles.container}>
            <View style = {styles.modalContainer}>
                <TouchableOpacity style = {styles.btn} onPress={props.voltar}>
                    <Text style = {{color: '#FFF', fontSize: 16, textAlign: 'center', fontWeight: 'bold'}}>VOLTAR</Text>
                </TouchableOpacity>

                <Text style = {styles.titulo}>{props.filme.nome}</Text>
                <Text style = {styles.sinopse}>Sinopse:</Text>
                <Text style = {styles.descricao}>{props.filme.sinopse}</Text>
                
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
container:{
    marginLeft:10,
    marginRight: 10,
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end'
},
modalContainer:{ 
    height: '80%',
    backgroundColor: '#000',
    borderTopLeftRadius:5,
    borderTopRightRadius: 5

},
btn:{
    backgroundColor: 'red', 
    padding: 10,
    borderTopLeftRadius:5,
    borderTopRightRadius: 5
},
titulo:{
    textAlign:'center',
    color: '#FFF',
    padding: 10,
    fontSize: 28,
    fontWeight: 'bold'
},
sinopse:{
    color: '#FFF',
    fontSize:18, 
    marginBottom: 8,
    marginLeft: 10
},
descricao:{
    color: '#FFF',
    marginLeft: 10,
    marginRight: 10
}

});