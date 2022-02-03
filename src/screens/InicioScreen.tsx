import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';

export const InicioScreen = ()=> {

    const navigation = useNavigation();

    return (
        <View style={{ flex:1}}>
            <View style={ styles.contentBlanco}>
                <View style={ styles.contentAzul}>
                    <Image source={ require('../images/doc.png')} style={ styles.img }/>
                    <View style={{ top:150,alignItems:'center'}}>
                        <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>Doctor en Linea</Text>
                        <Text style={{fontWeight:'bold',color:'white',fontSize:15}}>Encuentra tu doctor</Text>
                        <TouchableOpacity
                            style={{ marginVertical:20}}
                            onPress={ ()=> navigation.navigate('Home' as any )}
                        >
                            <View>
                                <Icon name='caret-forward-circle-outline' size={ 50 } color='orange'/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content:{

    },
    contentBlanco:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'flex-end',
        flexDirection:'column',
    },
    contentAzul:{
        height:500,
        backgroundColor:'#2E2EFE',
        borderTopRightRadius:200,
        position:'relative'
    },
    img:{
        position:'absolute',
        width:300,
        height:300,
        right:'20%',
        top:-200,
    }
});
