import React from 'react'
import {View, StyleSheet} from 'react-native'
import Colors from '../../Constants/colors'

function Card({children}) {
    return <View style={style.inputContainer}>{children}</View>
}

export default Card
const style = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent:'center',
        padding: 0,
        marginTop: 36   ,
        padding: 16,
        marginHorizontal: 24, // left and right space
        backgroundColor: Colors.primayBg,
        borderRadius: 8,
        elevation: 8, // Android shadow
        shadowColor: Colors.red,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.8
    },
})