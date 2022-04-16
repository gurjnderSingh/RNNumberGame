import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Title from '../Components/UI/Title'
import Colors from '../Constants/colors'
import PrimaryButton from '../Components/UI/PrimaryButton'

function GameOverScreen({roundedNumber, userInput, onGameAgainStart}) {
     return (
          <View style={style.rootContainer}>
               <Title>Game is Over</Title>
               <View style={style.imageContainer}>
                    <Image source={require('../Assests/sucess.png')}
                         style={style.image}
                    />
               </View>
               <Text style={style.overAllText}>Your phone needed
                     <Text style={style.hightlightText}> {roundedNumber} </Text>
                      rounds to guess the number <Text style={style.hightlightText}> {userInput} </Text></Text>
               <PrimaryButton onPressBtn={onGameAgainStart}>Start Game Again</PrimaryButton>
          </View>
     )
}
export default GameOverScreen
const style = StyleSheet.create({
     hightlightText: {
          fontSize: 20,
          color: Colors.red,
          fontWeight: '600'
     },
     overAllText:{
          fontSize:20
     },
     rootContainer: {
          flex: 1,
          marginHorizontal: 30,
          justifyContent: 'center',
          // alignItems:'center',
          // backgroundColor:'red'
     },
     imageContainer: {
          overflow: 'hidden',
          marginVertical: 30,
          alignContent: 'center',
          alignItems: 'center'
     },
     image: {
          width: 300,
          height: 300,
          borderRadius: 150,
          borderWidth: 1,
     }
})