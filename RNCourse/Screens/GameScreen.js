import React, {useState,useEffect} from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Title from '../Components/UI/Title'
import NumberContainer from '../Components/Game/NumberContainer'
import Colors from '../Constants/colors'
import PrimaryButton from '../Components/UI/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
    const rndNm = Math.floor(Math.random() * (max-min)) +  min
    if (rndNm === exclude) {
       return generateRandomBetween(min, max, exclude);
    } else {
        return rndNm;
    }
}
let minBoundary = 1
let maxBoundry = 100

function GameScreen({userInput, onGameOver}) {
    const initialGuess = generateRandomBetween(0,100,userInput)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(()=>{
        console.log('checking here -> ',currentGuess,userInput)
        if (currentGuess === userInput) {
            onGameOver();
        }
    },[currentGuess,onGameOver,userInput])

    function nextGuessHandler(direction) {
        if ((currentGuess > userInput && direction == 'higher') || (currentGuess < userInput && direction == 'lower')) {
            Alert.alert(
                'Alert',
                'You know number is in other range. So dont lie',
                [{text: 'Cancel', style:'cancel'}]
            )
            return
        }
        if (direction === 'lower') {
            maxBoundry = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        let newGuess =  generateRandomBetween(minBoundary,maxBoundry,currentGuess)
        setCurrentGuess(newGuess)
    }
    return (
        
        <View style={style.screen}>
            {console.log("-----------",userInput)}
            <Title>Opponent's Gues</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style = {{color: 'white'}}>  Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPressBtn={nextGuessHandler.bind(this,'higher')}>+</PrimaryButton>
                    <PrimaryButton onPressBtn={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
                </View>
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