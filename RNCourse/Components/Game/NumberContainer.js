import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

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
        borderColor: 'yellow',
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 40

    },title:{
        padding: 5,
        fontWeight: '400',
        color:'yellow',
        fontSize:50,
        textAlign:'center'
    }
})