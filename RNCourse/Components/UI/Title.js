import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../../Constants/colors'

function Title({ children }) {
    return (
        // <View style={style.rootContainer}>
            <Text style={style.title}>{children}</Text>
        // </View>
    )
}

export default Title

const style = StyleSheet.create({
    rootContainer:{
        flex: 1, 
        alignItems: 'center'
    },
    title: {
        color: Colors.titleColor,
        borderWidth: 4,
        borderColor: Colors.titleColor,
        fontSize: 24,
        padding: 16,
        textAlign: 'center',
        borderRadius: 20,
        fontWeight: '700',
        marginVertical: 30,
        marginHorizontal: 40,
        maxWidth: '80%'
    }
})