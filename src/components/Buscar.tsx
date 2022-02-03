import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';

export const Buscar = ()=> {
  return (
      <View style={ styles.buscar }>
          <Icon name='search-outline' size={ 30 } color='white' />
          <TextInput
            style={ styles.input}
            placeholder='Buscar'
            autoCorrect={ false }
          />
      </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginRight:20
    },
    buscar:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        borderRadius:20,
        backgroundColor:'#D8D8D8',
        opacity:0.5,
        paddingHorizontal:5,
        marginBottom:20
    }
});
