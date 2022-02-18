import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const Calendario = () => {
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);

    const showDatePicker = () => {
        setIsCalendarVisible(true);
    };

    const hideDatePicker = () => {
        setIsCalendarVisible(false);
    };

    const handleConfirm = (date:Date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View style={{marginHorizontal:10}}>
            <TouchableOpacity
            activeOpacity={0.8}
                style={styles.calendar}
                onPress={ showDatePicker }
            >
                <Text style={styles.title}>Seleccionar fecha</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isCalendarVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    calendar:{
        marginVertical:20,
        backgroundColor:'#00BFFF',
        height:40,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:15,
        color:'white'
    }
});
