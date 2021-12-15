import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import {COLORS} from "../utils/colors";

export default function Radio({ radio, setRadio }) {
    return (
        <TouchableOpacity style={styles.container} onPress={setRadio}>
            { radio ? <View style={styles.button}/> : null }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 21,
        height: 21,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.main,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 15,
        height: 15,
        backgroundColor: COLORS.main,
        borderRadius: 25
    }
})