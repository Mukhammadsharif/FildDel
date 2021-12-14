import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import {COLORS} from "../utils/colors";

export default function SecondSubmitButton({ text, submitFunction }) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={submitFunction}>
            <Text style={styles.text}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.main,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Helvetica',
    }
})