import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import  Icon  from 'react-native-vector-icons/Ionicons'
import { horarios } from '../data/horarios'

export const Horarios = () => {
    const [hora,setHora] = useState(1);

    const seleccionarHorario =(horario:number)=>{
       setHora(horario);
    }

    return (
        <View style={styles.content}>
            {
                horarios.map(  (res) =>(
                    <TouchableOpacity
                        activeOpacity={0.6} 
                        onPress={ ()=>seleccionarHorario(res.id) }
                        key={res.id} 
                        style={{
                            ...styles.hora,
                            backgroundColor:hora ==res.id ? '#00BFFF':'white'
                        }}
                    >
                        <Icon name='time-outline' size={20}/>
                        <Text style={{color:'black'}}>{res.hora}</Text>
                    </TouchableOpacity>
                ))      
            }
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        margin:10,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    hora:{
        flexDirection:'row',
        justifyContent:'space-around',
        paddingVertical:10,
        width:110,
        margin:10
    }
});
