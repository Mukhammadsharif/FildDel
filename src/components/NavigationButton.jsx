import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import {COLORS} from "../utils/colors";

export default function NavigationButton({ text, submitFunction }) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={submitFunction}>
            <Text style={styles.text}> { text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    text: {
        color: COLORS.main,
        fontSize: 16,
        fontFamily: 'Helvetica'
    }
})