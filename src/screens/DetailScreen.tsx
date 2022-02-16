import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Boton } from '../components/Boton';
import { Calendario } from '../components/Calendario';
import { RootStackParam } from '../navigator/Navigation';

interface Props extends StackScreenProps<RootStackParam,'Detail'>{};

export const DetailScreen = ({route,navigation}:Props) => {
    const param =  route.params;
    
    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar barStyle="light-content" backgroundColor='#AC58FA' />
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
        </SafeAreaView>
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
    }
});
