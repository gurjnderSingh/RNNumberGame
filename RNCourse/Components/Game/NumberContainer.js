import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import Colors from '../../Constants/colors';
function NumberContainer({children}) {
    return (
        <View style={style.continer}>
            <Text style={style.title}>{children}</Text>
        </View>
    )
}
export default NumberContainer;

const style = StyleSheet.create({
    continer:{
        color:Colors.red,
        borderColor:Colors.red, 
        borderWidth: 4,
        borderRadius: 10,
        marginVertical: 40

    },title:{
        padding: 5,
        fontWeight: '400',
        color:Colors.red,
        fontSize:50,
        textAlign:'center'
    }
})