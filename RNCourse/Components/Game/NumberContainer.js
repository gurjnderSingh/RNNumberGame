import React from 'react'
import {Text, View, StyleSheet, Dimensions} from 'react-native'
import Colors from '../../Constants/colors';
function NumberContainer({children}) {
    return (
        <View style={style.continer}>
            <Text style={style.title}>{children}</Text>
        </View>
    )
}
export default NumberContainer;
let deviceWidth = Dimensions.get('window').width
const style = StyleSheet.create({
    continer:{
        color:Colors.red,
        borderColor:Colors.green, 
        borderWidth: 4,
        borderRadius: 2,
        marginVertical: 0,
        marginHorizontal: 60
    },
    title:{
        padding: deviceWidth < 380 ? 5 : 5,
        fontWeight: '400',
        color:Colors.red,
        fontSize: deviceWidth < 380 ? 20 : 30,
        textAlign:'center'
    }
})