import React,{useState} from 'react'
import { TextInput, View, StyleSheet, Alert} from 'react-native'
import PrimaryButton from '../Components/UI/PrimaryButton';
import Colors from '../Constants/colors';

function StartGameScreen({onNumberConfirmed}) {
    const [enterdNumber, setEnteredNumber] = useState('')
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
                [{text: "Cancel",style:'destructive',onPress: resetInputHandler }]
            )
        }
        console.log(intValue)
        onNumberConfirmed(intValue)
    }
    function resetInputHandler() {
        setEnteredNumber('')
    }
    return (
        <View style={style.inputContainer}>
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
        </View>
    )
}
const style = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        padding: 0,
        marginTop: 100,
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
        // backgroundColor: 'yellow',
        flexDirection: 'row',
        // width: "100%",
        // alignItems:'flex-end',
        // justifyContent:'space-evenly'
    },
    buttonContainer: {
        flex: 1
    }


})
export default StartGameScreen;