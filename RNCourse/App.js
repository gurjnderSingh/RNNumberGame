import React, { useState, useEffect } from 'react';
import { ImageBackground, Text, View, StyleSheet, Button, ScrollView, FlatList, SafeAreaView } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import GameScreen from './Screens/GameScreen';
import StartGameScreen from './Screens/StartGame';
import GameOverScreen from './Screens/GameOverScreen';

function App() {
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(false)
  const [totalRounds, setTotalRounds] = useState(0)

  function showGameScreen(finalisedNumber) {
    setUserNumber(finalisedNumber)
  }
  let Screen = <StartGameScreen onNumberConfirmed={showGameScreen} />

  function onGameFinished(totalRounds) {
    console.log(gameOver)
    setGameOver(true)
    setTotalRounds(totalRounds)
  }
  function startGameAgain() {
    setGameOver(false)
    setUserNumber(null)
  }
  if (userNumber) {
    Screen = <GameScreen userInput={userNumber} onGameOver={onGameFinished} />
  }
  if (gameOver) {
    Screen = <GameOverScreen userInput={userNumber} roundedNumber={totalRounds} onGameAgainStart={startGameAgain} />
  }
  return (
    <View style={style.rootView}>
      <ImageBackground
        style={style.rootView}
        source={require('./Assests/Bg.png')}
        resizeMode="cover"
        imageStyle={style.opacity}
      >
      <SafeAreaView style={style.rootView}>
        {Screen}
      </SafeAreaView>
      </ImageBackground>
    </View>
  )
}
const style = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection:'column',
    // alignItems:'center'
    // backgroundColor: 'white'
  },
  backgroundImage: {
    opacity: 0.2
  }
})
export default App;