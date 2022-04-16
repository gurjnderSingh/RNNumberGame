import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../../Constants/colors'
function GuessLoginItem({guess, roundNumber}) {
    return (
        <View style={style.rootContainer}>
            <Text style={style.text}>#{roundNumber} </Text>
            <Text style={style.text}>{guess} </Text>
        </View>
    )
}

export default GuessLoginItem
const style = StyleSheet.create({
    rootContainer: {
        marginTop:30,
        borderRadius:30,
        borderColor:'white',
        borderWidth:2,
        marginVertical: -20,
        padding: 12,
        flexDirection:'row',
        backgroundColor:Colors.red,
        justifyContent: 'space-between',
        width:'100%'
    },
    text:{
        color:'white',
        fontSize: 30,
        fontWeight: '500'
    }

})