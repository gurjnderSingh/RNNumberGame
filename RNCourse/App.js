import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, ScrollView, FlatList, SafeAreaView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GameScreen from './Screens/GameScreen';
import StartGameScreen from './Screens/StartGame';
import GameOverScreen from './Screens/GameOverScreen';

function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(false)

  function showGameScreen(finalisedNumber) {
    setUserNumber(finalisedNumber)
  }
  let Screen = <StartGameScreen onNumberConfirmed={showGameScreen}/>

  function onGameFinished() {
    console.log('called game finished')
    console.log(gameOver)
    setGameOver(true)
  }
  if (userNumber) {
    Screen = <GameScreen userInput={userNumber} onGameOver={onGameFinished}/>
  }
  if (gameOver) {
    Screen =  <GameOverScreen/>
  }
  return (
    <View style={style.rootView}>
      {/* <ImageBackground
        style={style.rootView}
        source={require('./Assests/alll.png')}
        resizeMode="contain"
        imageStyle={style.opacity}
      > */}
        <SafeAreaView style={style.rootView}> 
          {Screen}
        </SafeAreaView>
      {/* </ImageBackground> */}
    </View>
  )
}
const style = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor:Colors.backgroundColor
  },
  backgroundImage: {
    opacity: 0.1
  }
})
export default App;