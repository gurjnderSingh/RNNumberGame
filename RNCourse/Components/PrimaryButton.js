import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
function ActionHandler() {
    console.log('pressed')
}
// function PrimaryButton({children}) { // destructring
function PrimaryButton(props) { //
    return (
        <View style={style.buttonOuterContainer}>
            <Pressable 
            onPress={ props.onPressBtn}
            style = {({pressed})=> pressed ? [style.buttonInnerContainer,style.opacity] : style.buttonInnerContainer}>
                {/* <Text> {children} </Text> */}
                <Text style = {style.buttonText}> {props.children} </Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    buttonOuterContainer: {
        // borderRadius: 18,
        // backgroundColor:'yellow',
        margin: 4,
        overflow: 'hidden',
    },
    buttonInnerContainer: {
        backgroundColor: 'red',
        marginVertical: 4,
        borderRadius:28,
        paddingHorizontal: 10,
        paddingVertical:14
    },
    buttonText: {
        color:'white',
        textAlign:'center'
    },
    opacity:{
        opacity: 0.4
    }
})
export default PrimaryButton;