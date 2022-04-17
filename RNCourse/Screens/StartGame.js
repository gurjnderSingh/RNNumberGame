import React, { useState } from 'react'
import {
    TextInput,
    View,
    StyleSheet,
    Alert,
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import PrimaryButton from '../Components/UI/PrimaryButton';
import Title from '../Components/UI/Title';
import Colors from '../Constants/colors';
import InstructionComponent from '../Components/UI/InstructionComponent';
import Card from '../Components/UI/Card';


function StartGameScreen({ onNumberConfirmed }) {
    const [enterdNumber, setEnteredNumber] = useState('')
    const { widht, height } = useWindowDimensions();

    function onChangeText(enteredText) {
        setEnteredNumber(enteredText)
    }
    function confirmInputHandler() {
        const intValue = parseInt(enterdNumber)
        if (isNaN(intValue) || intValue < 0 || intValue > 99) {
            // Alert.prompt
            Alert.alert(
                'Title-Some Error in Number',
                'Message-Not a number or Less than 0 or greater than 99',
                [{ text: "Cancel", style: 'destructive', onPress: resetInputHandler }]
            )
        }
        onNumberConfirmed(intValue)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }
    let marginTopDistance = height < 380 ? 0 : 10
    return (
        <ScrollView>
        <KeyboardAvoidingView style={style.rootContainer} behavior='position'>
            <View style={[style.rootContainer, { marginTop: marginTopDistance }]}>
                <Title>Guess My Number</Title>
                {/* <View style={style.inputContainer}> */}
                <Card>
                    <InstructionComponent>Enter Number</InstructionComponent>
                    <TextInput
                        style={style.numberInput}
                        maxLength={2}
                        keyboardType="number-pad"
                        value={enterdNumber}
                        onChangeText={onChangeText}
                    />
                    <View style={style.buttonsContainer}>
                        <View style={style.buttonContainer}>
                            <PrimaryButton onPressBtn={resetInputHandler}>Reset</PrimaryButton>
                        </View>
                        <View style={style.buttonContainer}>
                            <PrimaryButton onPressBtn={confirmInputHandler}>Confrim</PrimaryButton>
                        </View>
                    </View>
                </Card>
            </View>
        </KeyboardAvoidingView>
        </ScrollView>
    )
}
const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    inputContainer: {
        alignItems: 'center',
        padding: 0,
        marginTop: 40,
        padding: 16,
        marginHorizontal: 24, // left and right space
        backgroundColor: Colors.primayBg,
        borderRadius: 8,
        elevation: 8, // Android shadow

        shadowColor: 'cyan',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.8
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
        color: 'yellow',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})
export default StartGameScreen;