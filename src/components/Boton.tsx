import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/Ionicons'

interface Props{
    icon:string,
    color:string
}

export const Boton = ({icon,color}:Props) => {
  return (
    <TouchableOpacity
        activeOpacity={0.8}
        style={{
            ...styles.boton,
            backgroundColor:color
        }}
    >
        <Icon name={icon} size={30} color='white'/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    boton:{
        paddingVertical:10,
        borderRadius:10,
        paddingHorizontal:40
    }
});
