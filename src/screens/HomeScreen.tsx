import React, { useEffect, useState } from 'react'
import { Text, View,SafeAreaView, StatusBar, StyleSheet,TouchableOpacity, FlatList } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Buscar } from '../components/Buscar';
import { Categorias } from '../components/Categorias';
import { Doctores } from '../components/Doctores';
import { DataDoctores } from '../data/dataDoctores';

export const HomeScreen = ()=> {

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#2E64FE'}}>
            <StatusBar barStyle="light-content" backgroundColor='#2E64FE' />
            <View style={styles.content}>
                <View style={styles.menu}>
                    <Icon name='list-outline' size={ 30 } color='white' />
                    <Icon name='notifications-outline' size={ 30 } color='orange' />
                </View>

                {/* Componente buscar */}
                <Buscar/>
                <Text style={styles.title}>Categorias</Text>
                <Categorias/>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginTop:20
                }}>
                    <Text style={styles.text}>Doctores</Text>
                    <TouchableOpacity>
                        <Text style={{
                                ...styles.text,
                                backgroundColor:'gray',
                                paddingLeft:10,
                                paddingRight:10,
                                borderRadius:20,
                            }}>
                            All
                        </Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={ DataDoctores }
                    keyExtractor={ (item)=>item.id.toString()}
                    renderItem={ ({item,index}) =>(<Doctores item={ item } index={ index }/>) }
                    horizontal={ false }
                    showsHorizontalScrollIndicator={ false }
                />

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        backgroundColor:'#2E64FE',
        marginHorizontal:10
    },
    title:{
        fontWeight:'500',
        fontSize:25,
        color:'white',
        marginVertical:20
    },
    menu:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:20
    },
    text:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',        
    }
});
