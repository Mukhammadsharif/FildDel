import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import {COLORS} from "../utils/colors";

export default function SubmitButton({ text, submitFunction }) {
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
        backgroundColor: COLORS.submitButtonBackground,
        height: 51,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    text: {
        color: COLORS.submitButtonText,
        fontSize: 16,
    }
})