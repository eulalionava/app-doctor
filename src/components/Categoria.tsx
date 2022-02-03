import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';

interface Props{
    nombre:string,
    color:string,
    icono:string
}

export const Categoria = ({nombre,color,icono}:Props)=> {
  return(
    <TouchableOpacity 
        style={{
            ...styles.categoria,
            backgroundColor:color
        }}
        activeOpacity={0.8}
    >
        <Icon name={ icono } size={ 45 } />
        <Text style={{color:'white',fontWeight:'bold'}}>
            { nombre }
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    categoria:{
        backgroundColor:'white',
        width:100,
        height:100,
        borderRadius:25,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        marginRight:30,

        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
});
