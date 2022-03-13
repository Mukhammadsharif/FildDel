import React, { useState, useContext, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, SafeAreaView, Alert } from 'react-native'
import { COLORS } from '../utils/colors'
import { TNT } from '../components/Svgs'
import SuccessSubmitButton from '../components/SuccessSubmitButton'
import { GlobalContext } from '../contexts/GlobalContext'

export default function OrderPay() {
    const { doctorId, orderId, price } = useContext(GlobalContext)
    const [order, setOrder] = useState(null)

    const getOrderDetail = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        formData.append('order_id', orderId)
        await fetch('https://finddel.ru/api/order_info', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((s) => {
                if (s) {
                    setOrder(s)
                    Alert.alert(s.text)
                } else {
                    Alert.alert(s.text)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    useEffect(() => { getOrderDetail() }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={styles.text}>Оплата</Text>

                <View style={styles.content}>

                    <View style={styles.orderTitleContainer}>

                        <View style={styles.orderTitleFirstDetail}>
                            <Text style={styles.orderTitleText}>Доставка компанией</Text>
                            <TNT width={110} height={21} />
                        </View>

                        <View style={styles.orderTitleSecondDetail}>
                            <Text style={styles.orderTitleText}>Заказ №</Text>
                            <Text style={styles.orderTitleDescriptionText}>{orderId || ''}</Text>
                        </View>
                    </View>

                    <View style={styles.orderContainer}>
                        <Text style={styles.orderTitleText}>Отправитель</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentText}>
                                {order ? `${order.sender_surname} ${order.sender_name} ${order.sender_patronymic}` : ''}
                            </Text>

                            <Text style={styles.orderContentText}>{order ? order.sender_company_name : ''}</Text>

                            <Text style={styles.orderContentText}>
                                {order ? order.place_from : ''}
                                {/* <Text style={styles.orderContentSecondText}> */}
                                {/*    ул. Название улицы, д. 28 */}
                                {/* </Text> */}
                            </Text>
                        </View>

                        <Text style={[styles.orderTitleText, { marginBottom: -5 }]}>/ Получатель</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentText}>
                                {order ? `${order.rec_surname} ${order.rec_name} ${order.rec_patronymic}` : ''}
                            </Text>

                            <Text style={styles.orderContentText}>
                                {order ? order.rec_company_name : ''}
                            </Text>

                            <Text style={styles.orderContentText}>
                                {order ? order.place_to : ''}
                                {/* <Text style={styles.orderContentSecondText}> */}
                                {/*    ул. Название улицы, д. 28 */}
                                {/* </Text> */}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.orderDetailContainer}>
                        <Text style={styles.orderTitleText}>Детали доставки</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentSecondText}>
                                Способ доставки:
                                <Text style={[styles.orderContentText, { color: 'black' }]}>
                                    {order ? order.type_delivery : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Вид груза:
                                <Text style={[styles.orderContentText, { color: 'black' }]}>
                                    {order ? order.type_cargo : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Вес:
                                <Text style={[styles.orderContentText, { color: 'black' }]}>
                                    {order ? `${order.weight}кг` : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Расстояние:
                                <Text style={[styles.orderContentText, { color: 'black' }]}>
                                    {order ? `${order.distance}км` : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Кол-во мест:
                                <Text style={[styles.orderContentText, { color: 'black' }]}>
                                    {order ? order.count_places : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Габариты:
                                <Text style={[styles.orderContentText, { color: 'black' }]}>
                                    { order ? `${order.length}x${order.width}x${order.height} см` : '' }
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Комментарий:
                                <Text style={[styles.orderContentText, { color: 'black' }]}>
                                    {order ? order.comment : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Стоимость:
                                {/* eslint-disable-next-line max-len */}
                                <Text style={[styles.orderContentText, { color: 'black' }]}> {order ? price : ''} ₽</Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.orderStatusContainer}>
                        <Text style={styles.orderTitleText}>Состояние доставки</Text>

                        <Text style={[styles.orderContentSecondText, { marginTop: 10 }]}>
                            Сроки доставки:
                            <Text style={[styles.orderContentText, { color: 'black' }]}>
                                {order ? order.order_status : ''}
                            </Text>
                        </Text>

                        <Text style={styles.orderContentSecondText}>Стоимость доставки:</Text>

                        <Text style={styles.priceText}>{price} ₽</Text>
                    </View>

                    <SuccessSubmitButton
                        text={`Оплатить ${price} ₽`} />

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        height: 42,
        fontFamily: 'Helvetica',
        paddingLeft: 15,
    },
    content: {
        backgroundColor: COLORS.inputBackgroundColor,
        paddingBottom: 110,
        paddingHorizontal: 15,
    },
    orderTitleContainer: {
        height: 90,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
    },
    orderTitleFirstDetail: {
        flex: 3.2,
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    orderTitleSecondDetail: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    orderTitleText: {
        fontSize: 12,
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
    },
    orderTitleDescriptionText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
    },
    orderContainer: {
        paddingVertical: 20,
        height: 224,
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
        justifyContent: 'space-between',
    },
    orderContentText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        marginTop: 2,
    },
    orderContentSecondText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
        marginTop: 2,
    },
    orderDetailContainer: {
        paddingVertical: 20,
        height: 247,
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
    },
    orderStatusContainer: {
        paddingTop: 20,
    },
    priceText: {
        color: COLORS.main,
        fontSize: 41,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: 50,
        paddingVertical: 10,
    },
})
