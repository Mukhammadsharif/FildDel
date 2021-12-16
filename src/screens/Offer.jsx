import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native"
import {pixelSizeHorizontal} from "../utils/normalizeStyle";
import {COLORS} from "../utils/colors";
import SubmitButton from "../components/SubmitButton";

export default function Offer() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Приглашение к сотрудничеству</Text>

                <Text style={styles.dateText}>Хотите стать частью компании FindDel?</Text>

                <Text style={styles.dateText}>Напишите нам на эл. почту</Text>

                <Text style={[styles.dateText, { textDecorationLine: 'underline'}]}>support@finddel.ru</Text>

                <SubmitButton
                    text={'Написать'}/>

                <TouchableOpacity style={styles.downloadContainer}>
                    <Text style={[styles.dateText, { textDecorationLine: 'underline', color: COLORS.main}]}>
                        Скачать договор
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        fontFamily: 'Helvetica',
        marginTop: 25,
        marginBottom: 20,
    },
    dateText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        fontWeight: '300',
        textAlign: 'justify',
        lineHeight: 22,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        fontWeight: '300',
        marginVertical: 20,
        textAlign: 'justify'
    },
    downloadContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
})