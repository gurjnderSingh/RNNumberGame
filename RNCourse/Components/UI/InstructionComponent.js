import React from 'react'
import {StyleSheet,Text} from 'react-native'

function InstructionComponent({children, style}) {
    return <Text style={[styles.text, style]}>{children}</Text>
}

export default InstructionComponent
const styles = StyleSheet.create({
    text: {
      color: 'white',
     fontSize: 20,
     fontWeight: '500'
    },
})