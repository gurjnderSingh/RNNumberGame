import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Alert, FlatList, useWindowDimensions } from 'react-native'
import Title from '../Components/UI/Title'
import NumberContainer from '../Components/Game/NumberContainer'
import Colors from '../Constants/colors'
import PrimaryButton from '../Components/UI/PrimaryButton'
import InstructionComponent from '../Components/UI/InstructionComponent'
import Card from '../Components/UI/Card'
import GuessLoginItem from '../Components/UI/GuessLoginItem'
function generateRandomBetween(min, max, exclude) {
    const rndNm = Math.floor(Math.random() * (max - min)) + min
    if (rndNm === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNm;
    }
}
let minBoundary = 1
let maxBoundry = 100

function GameScreen({ userInput, onGameOver }) {
    const { width, height } = useWindowDimensions()
    const initialGuess = generateRandomBetween(0, 100, userInput)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [totoalGuesses, setTotoalGuesses] = useState([initialGuess])
    useEffect(() => {
        console.log('checking here -> ', currentGuess, userInput)
        if (currentGuess === userInput) {
            onGameOver(totoalGuesses.length);
        }
    }, [currentGuess, onGameOver, userInput])
    useEffect(() => {
        minBoundary = 1
        maxBoundry = 100
    }, [])

    function nextGuessHandler(direction) {
        if ((currentGuess > userInput && direction == 'higher') || (currentGuess < userInput && direction == 'lower')) {
            Alert.alert(
                'Alert',
                'You know number is in other range. So dont lie',
                [{ text: 'Cancel', style: 'cancel' }]
            )
            return
        }
        if (direction === 'lower') {
            maxBoundry = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        let newGuess = generateRandomBetween(minBoundary, maxBoundry, currentGuess)
        setCurrentGuess(newGuess)
        setTotoalGuesses(prevGuesses => [newGuess, ...prevGuesses])
    }
    let guessRoundListLength = totoalGuesses.length
    let content = <>
     <Title>Opponent's Gues</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
    <View>
        <Card>
            <InstructionComponent style={style.textBottomSpace}>Higher or Lower?</InstructionComponent>
            <View style={style.buttonsContainer}>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPressBtn={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                </View>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPressBtn={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
        </Card>
        </View>
    </>
    if (height < 480) {
        content = <>
        <Title>Opponent's Gues</Title>
         <View style={style.buttonsContainer}>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPressBtn={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
                </View>
                <View style={style.buttonContainer}>
                    <NumberContainer>{currentGuess}</NumberContainer>
                </View>
                <View style={style.buttonContainer}>
                    <PrimaryButton onPressBtn={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
        </>
    }

    return (
        <View style={style.screen}>
            {content}
            <FlatList
                data={totoalGuesses}
                renderItem={(itemData) => <GuessLoginItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />}
                key={({ item }) => item}
            />
        </View>
    )
}
const style = StyleSheet.create({
    textBottomSpace: {
        marginBottom: 20
    },
    buttonContainer: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    screen: {
        flex: 1,
        padding: 24,
    },

})
export default GameScreen