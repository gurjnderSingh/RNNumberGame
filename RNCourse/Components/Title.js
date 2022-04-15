import React from 'react'
import {Text, StyleSheet} from 'react-native'
import Colors from '../Constants/colors'
function Title({children}) {
    return <Text style = {style.title}>{children}</Text>
}

export default Title

const style =  StyleSheet.create({
    title:{
        color: Colors.titleColor,
        borderWidth: 4,
        borderColor:Colors.titleColor,
        fontSize: 24,
        padding:16,
        textAlign:'center',
        borderRadius:20,
        fontWeight:'700'

    }
})