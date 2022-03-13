import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ChanceCard({ icon, title, text }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                { icon }
                <Text style={styles.title}>{ title }</Text>
            </View>

            <Text style={styles.text}>{ text }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontSize: 26,
        lineHeight: 32,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        marginLeft: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        paddingRight: 30,
        marginTop: 20,
    },
})
