import React from 'react'
import {View, TextInput, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 42,
        width: "92%",
        borderRadius: 25,
        marginTop: 20
    },
    textInput: {
        marginTop: 0,
        width: "100%",
        borderColor: "#0B3270",
        borderWidth: 1,
        paddingLeft: 15
    }

})

export default function Loginscreen(props){
    return <View style={styles.container}>
        <TextInput style={{...styles.container, ...styles.textInput}} {...props} />
    </View>
}