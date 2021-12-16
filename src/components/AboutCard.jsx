import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {COLORS} from "../utils/colors";
import {AboutCardGroup, LogoDescription} from "./Svgs";

export default function AboutCard() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Сравнить цены</Text>
            <Text style={styles.title}>на доставку</Text>

            <Text style={styles.description}>
                Рассчитаем стоимость сразу
                в нескольких транспортных компаниях,
                чтобы вы смогли сравнить и выбрать лучшие условия
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Заключить договор</Text>
            </TouchableOpacity>

            <AboutCardGroup/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 80,
        paddingVertical: 40,
        backgroundColor: COLORS.main,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
    title: {
        fontSize: 32,
        lineHeight: 40,
        fontFamily: 'Helvetica',
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    description: {
        paddingVertical: 20,
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        color: '#FFFFFF',
    },
    button: {
        width: 261,
        height: 51,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    buttonText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
    }
})