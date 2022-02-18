import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { DataDoctores } from '../data/dataDoctores';

export const DoctoresScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
        {
            DataDoctores.map( doc =>(
                <TouchableOpacity 
                    style={styles.content} 
                    activeOpacity={0.6}
                    onPress={()=>navigation.dispatch(CommonActions.navigate('Detail',doc ))}
                >
                    <Image source={require('../images/doctor-icon.png')} style={styles.img}/>
                    <View>
                        <Text style={styles.title}>{ doc.name }</Text>
                        <Text style={styles.subtitle}>{ doc.especialidad }</Text>
                    </View>
                    <Icon name='chevron-forward-outline' size={ 30 } color='green'/>
                </TouchableOpacity>
            ))
        }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'white',
        marginVertical:10,
        marginHorizontal:5,
        borderRadius:10
    },
    img:{
        width:100,
        height:100,
        borderRadius:100
    },
    title:{
        fontSize:20,
        fontWeight:'800'
    },
    subtitle:{
        fontSize:18,
    }
});
