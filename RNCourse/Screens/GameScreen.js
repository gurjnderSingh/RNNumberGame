import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Title from '../Components/Title'
import Colors from '../Constants/colors'
function GameScreen() {
    return (
        <View style={style.screen}>
            <Title>Opponent's Gues</Title>
            <View>
                <Text>  Higher or Lower?</Text>
            </View>
        </View>
    )   
}
const style = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.primayBg,
        padding: 24
    },
   
})
export default GameScreen