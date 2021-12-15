import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity} from "react-native"
import {COLORS} from "../utils/colors"
import {RecomTitle, RecomDescription, RecomImage} from "./Svgs";

export default function RecommendationCard() {
    return (
        <View style={styles.container}>
            <RecomTitle/>

            <RecomDescription style={{marginTop: 20}}/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Написать</Text>
            </TouchableOpacity>

            <RecomImage style={{marginTop: 43, alignSelf: 'center'}}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
        height: 613,
        backgroundColor: COLORS.main,
        borderRadius: 10,
        paddingVertical: 40,
        paddingHorizontal: 15,
        flex: 1
    },
    button: {
        width: 184,
        height: 51,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
    }
})