import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Descricao from "../Modal";

export default function Filmes({data}){

    const  [visibleModal, setVisibleModal] = useState(false);
    return(
        <View>
            <View style = {styles.card}>
                <Text style = {styles.titulo}>{data.nome}</Text>

                <Image 
                source={{uri:data.foto}}
                style = {styles.capa}
                />
                <View style = {styles.areaBnt}>
                    <TouchableOpacity style = {styles.bnt}  onPress = { () => setVisibleModal(true)}>
                       <Text style = {styles.textBnt}>DESCRIÇÃO</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal animationType="slide" visible = {visibleModal} transparent = {true} >
                <Descricao filme = {data} voltar = { () => setVisibleModal(false)}/>
            </Modal>
        </View>
    );
}


const styles = StyleSheet.create({
    card:{
        backgroundColor: '#FFF',
        margin: 15,
        elevation: 2
    },
    capa: {
        height: 250,
        zIndex:2
    },
    titulo: {
        padding:15,
        fontSize: 18
    },
    areaBnt:{
        alignItems: 'flex-end',
        marginTop: -45,
        zIndex:9
    },
    bnt:{
        width: 100,
        backgroundColor: '#FFF',
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    textBnt:{
        fontWeight: 'bold',
        textAlign: 'center'
    }
});