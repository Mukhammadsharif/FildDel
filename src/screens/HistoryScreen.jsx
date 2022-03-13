import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity, Alert } from 'react-native'
import { Card } from 'react-native-paper'
import { Formik } from 'formik'
import { pixelSizeHorizontal, pixelSizeVertical } from '../utils/normalizeStyle'
import MainScreenBanner from '../components/MainScreenBanner'
import { COLORS } from '../utils/colors'
import InputLight from '../components/InputLight'
import { PEK, TNT, VectorDown, VectorTop } from '../components/Svgs'
import OrderDetail from '../components/OrderDetail'
import HistoryDetailCard from '../components/HistoryDetailCared'
import { GlobalContext } from '../contexts/GlobalContext'

export default function HistoryScreen() {
    const [history, showHistory] = useState(false)
    const [detail, setDetail] = useState(false)
    const [orders, setOrders] = useState(null)
    const { doctorId } = useContext(GlobalContext)

    const getOrderHistory = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        await fetch('https://finddel.ru/api/orders', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((s) => {
                if (s.orders) {
                    setOrders(s.orders)
                    showHistory(true)
                } else {
                    Alert.alert(s.text)
                    showHistory(false)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
                showHistory(false)
            })
    }

    useEffect(() => { getOrderHistory() }, [])
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

                        <MainScreenBanner />
                    </View>
                ) : (
                    <>
                        <View style={{ paddingHorizontal: pixelSizeHorizontal(15) }}>
                            <Card style={styles.cardContainer}>
                                <Text style={styles.searchText}>Поиск заказа</Text>

                                <Formik initialValues={{ search: '' }} onSubmit={() => {}}>
                                    {({ handleSubmit }) => (
                                        <View style={styles.searchContainer}>
                                            <InputLight
                                                name="search"
                                                type="text"
                                                keyboard="default"
                                                input={styles.searchInput}
                                                placeholder="Введите данные доставки"
                                                placeholderTextColor={COLORS.placeholderTextColor} />

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

                        <View>
                            {orders ? orders.map((item) => (
                                <HistoryDetailCard order={item} orders={orders} />
                            )) : null}
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
        shadowOffset: { width: 5, height: 5 },
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
        alignItems: 'center',
    },
    searchInput: {
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        fontSize: 16,
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
    },
    firstOrderDetailContainer: {
        height: 174,
        backgroundColor: COLORS.inputBackgroundColor,
        paddingVertical: 20,
        paddingHorizontal: 15,
        flex: 1,
        flexDirection: 'row',
    },
    secondOrderDetailContainer: {
        height: 174,
        paddingVertical: 20,
        paddingHorizontal: 15,
        flex: 1,
        flexDirection: 'row',
    },
    orderTitleText: {
        fontSize: 12,
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
    },
    orderTitleDescriptionText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        marginTop: 10,
    },
    orderContentText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        marginTop: 2,
        color: 'black',
    },
    orderContentSecondText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
        marginTop: 2,
    },
    linkContainer: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Helvetica',
        color: COLORS.main,
        marginTop: -4,
        textDecorationLine: 'underline',
    },
    secondLinkContainer: {
        fontSize: 16,
        lineHeight: 20,
        fontFamily: 'Helvetica',
        color: COLORS.main,
        marginTop: -4,
        textDecorationLine: 'underline',
    },
    detailButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
