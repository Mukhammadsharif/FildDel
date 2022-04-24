import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import { TNT, VectorDown, VectorTop } from './Svgs'
import OrderDetail from './OrderDetail'
import { pixelSizeVertical } from '../utils/normalizeStyle'
import { COLORS } from '../utils/colors'

export default function HistoryDetailCard({ order, orders }) {
    const [detail, setDetail] = useState(false)
    const oldTerm = new Date(order.dt.slice(0, 10))
    const termDay = oldTerm.getDate() + 1
    oldTerm.setDate(termDay)
    const newTerm = oldTerm.toLocaleDateString()

    // console.log(JSON.stringify(orders, ' ', 4))

    return (
        <>
            {order.order_status !== 'Удален' ? (
                <>
                    <View style={orders.indexOf(order) % 2 !== 0 ? styles.firstOrderDetailContainer : styles.secondOrderDetailContainer}>
                        <View style={{ flex: 1, justifyContent: 'space-between' }}>
                            <View>
                                <Text style={styles.orderTitleText}>Заказ №</Text>

                                <Text style={styles.orderTitleDescriptionText}>{order.id}</Text>
                            </View>

                            <View style={{ flex: 0.5, justifyContent: 'space-between' }}>
                                <Text style={styles.orderTitleText}>Доставка компанией</Text>
                                <Image
                                    source={{ uri: `https://finddel.ru/assets/images/content/logos/${order.company_logo.replace('svg', 'png')}` }}
                                    style={{ width: '45%', height: '39%' }} />
                            </View>
                        </View>

                        <View style={{ flex: 1.2, justifyContent: 'space-between' }}>
                            <Text style={styles.orderTitleText}>Состояние доставки</Text>

                            <View style={{ justifyContent: 'space-between' }}>
                                <Text style={styles.orderContentSecondText}>
                                    Оформлена:
                                    <Text style={styles.orderContentText}>
                                        {order ? order.dt.slice(0, 10) : ''}
                                    </Text>
                                </Text>

                                {/* <Text style={styles.orderContentSecondText}> */}
                                {/*    Сроки доставки: */}
                                {/*    <Text style={styles.orderContentText}> */}
                                {/*        {newTerm ? ` 20${newTerm.slice(6)}-${newTerm.slice(0, 2)}-${newTerm.slice(3, 5)}` : ''} */}
                                {/*    </Text> */}
                                {/* </Text> */}

                                <Text style={styles.orderContentSecondText}>
                                    Стоимость:
                                    <Text style={styles.orderContentText}> {order.price} ₽</Text>
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.detailButton}
                                onPress={() => setDetail(!detail)}
                            >
                                {!detail ? (
                                    <>
                                        <Text style={styles.linkContainer}>Подробнее</Text>
                                        <VectorDown style={{ marginLeft: 5 }} />
                                    </>
                                ) : (
                                    <>
                                        <Text style={styles.secondLinkContainer}>Скрыть</Text>
                                        <VectorTop style={{ marginLeft: 5 }} />
                                    </>
                                )}

                            </TouchableOpacity>
                        </View>
                    </View>

                    {detail ? <OrderDetail order={order} /> : null}
                </>
            ) : null}
        </>
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
