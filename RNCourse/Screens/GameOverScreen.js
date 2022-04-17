import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, useWindowDimensions, ScrollView } from 'react-native'
import Title from '../Components/UI/Title'
import Colors from '../Constants/colors'
import PrimaryButton from '../Components/UI/PrimaryButton'
// let deviceWidth = Dimensions.get('window').width

function GameOverScreen({ roundedNumber, userInput, onGameAgainStart }) {
     const { width, height } = useWindowDimensions()
     let imageSize = 300
     if (width < 380) {
          imageSize = 150
     }
     if (height < 400) {
          imageSize = 80
     }

     const imageStyle = {
          width: imageSize,
          height: imageSize,
          borderRadius: imageSize / 2
     }
     return (
          <ScrollView style={style.rootContainer}>
               <View style={style.rootContainer}>
                    <Title>Game is Over</Title>
                    <View style={[style.imageContainer]}>
                         <Image source={require('../Assests/sucess.png')}
                              style={[style.image, imageStyle]}
                         />
                    </View>
                    <Text style={style.overAllText}>Your phone needed
                         <Text style={style.hightlightText}> {roundedNumber} </Text>
                         rounds to guess the number <Text style={style.hightlightText}> {userInput} </Text></Text>
                    <PrimaryButton onPressBtn={onGameAgainStart}>Start Game Again</PrimaryButton>
               </View>
          </ScrollView>
     )
}
export default GameOverScreen
const style = StyleSheet.create({
     hightlightText: {
          fontSize: 20,
          color: Colors.red,
          fontWeight: '600'
     },
     overAllText: {
          fontSize: 20,
          marginHorizontal: 20,
     },
     rootContainer: {
          flex: 1,
     },
     imageContainer: {
          overflow: 'hidden',
          marginVertical: 30,
          alignContent: 'center',
          alignItems: 'center'
     },
     image: {
          // width: deviceWidth < 380 ? 150 : 300,
          // height: deviceWidth < 380 ? 150 : 300,
          // borderRadius: deviceWidth < 380 ? 75 : 150,
          borderWidth: 1,
     }
})