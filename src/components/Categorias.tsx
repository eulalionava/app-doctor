import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Data } from '../data/Data';
import { Categoria } from './Categoria';

export const Categorias = ()=> {
  return (
      <View style={styles.categorias}>
          {
              Data.map( (item)=>(
                <Categoria 
                    key={ item.id}
                    nombre={item.name} 
                    color={item.color}
                    icono={ item.icon} 
                />
              ))
          }
      </View>
  )
}

const styles = StyleSheet.create({
    categorias:{
        flexDirection:'row',
        flexWrap:'wrap',

    }
});
