import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native"
import {pixelSizeHorizontal, pixelSizeVertical} from "../utils/normalizeStyle"
import MainScreenBanner from "../components/MainScreenBanner"
import { COLORS } from "../utils/colors"
import { Card } from 'react-native-paper'
import {Formik} from "formik";
import InputLight from "../components/InputLight";

export default function HistoryScreen() {
    const [history, showHistory] = useState(true)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                { !history ? (
                    <View style={{ paddingHorizontal: pixelSizeHorizontal(15) }}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>История доставок</Text>

                            <Text style={styles.titleDescription}>
                                Здесь Вы сможете контролировать доставки.
                                У Вас пока что нет заказов.
                            </Text>
                        </View>

                         <MainScreenBanner/>
                    </View>
                ) : (
                    <>
                        <View style={{ paddingHorizontal: pixelSizeHorizontal(15) }}>
                            <Card style={styles.cardContainer}>
                                <Text style={styles.searchText}>Поиск заказа</Text>

                                <Formik initialValues={{search: ''}} onSubmit={() => {}}>
                                    {({ handleSubmit }) => (
                                        <View style={styles.searchContainer}>
                                            <InputLight
                                                 name={'search'}
                                                 type={'text'}
                                                 keyboard="default"
                                                 input={styles.searchInput}
                                                 placeholder={'Введите данные доставки'}
                                                 placeholderTextColor={COLORS.placeholderTextColor}/>

                                            <TouchableOpacity
                                                style={styles.searchButton}>
                                                <Text style={styles.searchButtonText}>Найти</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </Formik>
                            </Card>

                            <Text style={[styles.title, { marginVertical: 30 }]}>История доставок</Text>
                        </View>


                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: pixelSizeVertical(25),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
    },
    titleContainer: {
        justifyContent: 'space-between',
    },
    title: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        fontFamily: 'Helvetica',
    },
    titleDescription: {
        fontSize: 14,
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
        marginVertical: 10,
    },
    cardContainer: {
        height: 128,
        width: '100%',
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 2,
        borderRadius: 0,
        flex: 6,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30,
    },
    searchText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
    },
    searchContainer: {
        flexDirection: 'row',
        flex: 1,
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    searchInput : {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 10,
        width: '70%',
    },
    searchButton: {
        height: 50,
        width: 94,
        backgroundColor: COLORS.searchButtonBackground,
        marginTop: 10,
        marginLeft: -100,
        justifyContent: "center",
        alignItems: "center"
    },
    searchButtonText: {
        fontSize: 16,
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica'
    }
})