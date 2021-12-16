import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import Logos from "./Logos";

export default function PartnersDetail() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Мы сотрудничаем с более 1000 транспортных компаний,
                каждый день пополняя список надежными партнерами
            </Text>

            <Logos/>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 40,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
    }
})