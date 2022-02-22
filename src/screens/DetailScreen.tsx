import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Boton } from '../components/Boton';
import { Calendario } from '../components/Calendario';
import { Horarios } from '../components/Horarios';
import { RootStackParam } from '../navigator/Navigation';

interface Props extends StackScreenProps<RootStackParam,'Detail'>{};

export const DetailScreen = ({route,navigation}:Props) => {
    const param =  route.params;
    const [horario,setHorario] = useState(0);

    const seleccionarHora =(tipo:number)=>{
        setHorario(tipo);
    }
    
    return (
        <ScrollView>
            <SafeAreaView style={{flex:1}}>
                <StatusBar barStyle="light-content" backgroundColor='#AC58FA' />
                <TouchableOpacity 
                    activeOpacity={1}
                    style={{backgroundColor:'#AC58FA'}}
                    onPress={ ()=> navigation.goBack() }
                >
                    <Icon name='arrow-back-outline' size={25} color='white'/>
                </TouchableOpacity>
                <View style={styles.perfil}>
                    <Image 
                        source={require('../images/doctor-icon.png')}
                        style={styles.img}/>
                    <Text style={{fontWeight:'bold',fontSize:25}}>{param.name}</Text>
                    <Text style={{fontSize:15,fontWeight:'bold'}}>{param.especialidad}</Text>
                    <Text style={{fontSize:18}}>{param.descripcion}</Text>
                </View>
                <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
                    <Boton icon='call-outline' color='#00FF80'/>
                    <Boton icon='chatbubble-outline' color='#FF8000'/>
                    <Boton icon='person-outline' color='#FA58AC'/>
                </View>
                <View style={styles.banner}>
                    <Text style={{fontSize:22,fontWeight:'bold',paddingHorizontal:10}}>Realiza tu cita</Text>
                    <Image source={require('../images/medico.png')} style={{width:200,height:200}} />
                </View>
                <Calendario/>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}>
                    <TouchableOpacity 
                        onPress={ ()=>seleccionarHora(0) }
                        style={{
                            ...styles.hora,
                            backgroundColor: horario === 0 ? '#00BFFF':'white'
                        }}
                    >
                        <Text style={{fontWeight:'bold',fontSize:20}}>AM</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={ ()=>seleccionarHora(1) }
                        style={{
                            ...styles.hora,
                            backgroundColor: horario === 1 ? '#00BFFF':'white'
                        }}
                    >
                        <Text style={{fontWeight:'bold',fontSize:20}}>PM</Text>
                    </TouchableOpacity>
                </View>
                <Horarios/>
            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    perfil:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:300,
        backgroundColor:'#AC58FA'
    },
    img:{
        width:150,
        height:150,
        borderRadius:100
    },
    banner:{
        backgroundColor:'#CEECF5',
        borderRadius:10,
        height:200,
        marginHorizontal:10,
        flexDirection:'row',justifyContent:'space-between',
        alignItems:'center'
    },
    hora:{
        backgroundColor:'white',
        width:150,
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        borderRadius:10
    }
});
