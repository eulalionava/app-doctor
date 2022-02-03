import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { IntDoctores } from '../interfaces/IntDoctores';

interface Props{
  item:IntDoctores,
  index:number
}

export const Doctores = ({item,index}:Props) => {
  return (
    <View>
      {
        index < 3 && (
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.container}
          >
            <Image source={require('../images/doctor-icon.png')} style={styles.img}/>
            <View>
                <Text>{item.name}</Text>
                <Text>{item.especialidad}</Text>
            </View>
            <Icon name='chevron-forward-outline' size={ 40 } color='green'/>
          </TouchableOpacity>
        )
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    width:'100%',
    borderRadius:5,
    marginTop:20,
    backgroundColor:'#FAFAFA',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,

  },
  img:{
    width:70,
    height:70,
    borderRadius:100
  }
});
