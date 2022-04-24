import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Linking, Alert, Platform } from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import { COLORS } from '../utils/colors'
import SuccessSubmitButton from './SuccessSubmitButton'

export default function OrderDetail({ order }) {
    const paySum = async () => {
        const formData = new FormData()
        formData.append('sum', order.price)
        formData.append('orderid', order.id)
        await fetch('https://finddel.server.paykeeper.ru/create', {
            method: 'POST',
            body: formData,
        })
            .then((response) => Linking.openURL(response.url))
    }

    const downloadFile = (url) => {
        if (Platform.OS === 'ios') {
            Linking.openURL(url.replace(' ', '%20'))
        } else if (order.documents.length > 0 && order.documents[0][1]) {
            const date = new Date()
            const { config, fs } = RNFetchBlob
            const { PictureDir } = fs.dirs
            const options = {
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: `${PictureDir}/me_${Math.floor(date.getTime() + date.getSeconds() / 2)}`,
                    description: 'Скачивание файла',
                },
            }
            config(options).fetch('GET', url.replace(' ', '%20')).then((res) => {
                console.log(res, 'response')
            })
        } else {
            Alert.alert('На базе нет такого документа')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {order.documents && order.documents.length ? (
                    <View style={styles.downloadContainer}>
                        {order.documents.length ? order.documents.map((item) => (
                            <TouchableOpacity onPress={() => downloadFile(item[1])}>
                                <Text style={styles.downloadText}>Скачать {item[0]}</Text>
                            </TouchableOpacity>
                        )) : null}
                    </View>
                ) : null}

                <View style={styles.senderReceiverContainer}>
                    <View>
                        <Text style={styles.orderTitleText}>Отправитель</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentSecondText}>
                                Отправитель:
                                <Text style={styles.orderContentText}>
                                    {/* eslint-disable-next-line max-len */}
                                    {order ? `${order.sender_surname} ${order.sender_name} ${order.sender_patronymic}` : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                {order ? `ООО${order.sender_company_name}` : ''}
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Телефон:
                                <Text style={styles.orderContentText}>
                                    {order ? order.sender_phone : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Еmail:
                                <Text style={styles.orderContentText}>
                                    {order ? order.sender_email : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentText}>
                                г. Город,
                                <Text style={styles.orderContentSecondText}>
                                    {order ? order.place_from : ''}
                                </Text>
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.orderTitleText}>/ Получатель</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentSecondText}>
                                Отправитель:
                                <Text style={styles.orderContentText}>
                                    {order ? `${order.rec_surname} ${order.rec_name} ${order.rec_patronymic}` : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                {order ? `ООО${order.rec_company_name}` : ''}
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Телефон:
                                <Text style={styles.orderContentText}>
                                    {order ? order.rec_phone : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Еmail:
                                <Text style={styles.orderContentText}>
                                    {order ? order.rec_email : ''}
                                </Text>
                            </Text>

                            <Text style={styles.orderContentText}>
                                г. Город,
                                <Text style={styles.orderContentSecondText}>
                                    {order ? order.place_to : ''}
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.orderDetailsContainer}>
                    <Text style={[styles.orderTitleText, { marginBottom: 10 }]}>Детали доставки</Text>

                    <Text style={styles.orderContentSecondText}>
                        Компания:
                        <Text style={styles.orderContentText}> {order.company_name}</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Тариф:
                        <Text style={styles.orderContentText}> {order.tariff_name}</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Способ доставки:
                        <Text style={styles.orderContentText}>
                            {order ? order.type_delivery : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Вид груза:
                        <Text style={styles.orderContentText}>
                            {order ? order.type_cargo : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Категория груза:
                        <Text style={styles.orderContentText}>
                            {order ? order.category_cargo : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Вес:
                        <Text style={styles.orderContentText}>
                            {order ? `${order.weight}кг` : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Расстояние:
                        <Text style={styles.orderContentText}>
                            {order ? `${order.distance}км` : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Кол-во мест:
                        <Text style={styles.orderContentText}>
                            {order ? order.count_places : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Габариты:
                        <Text style={styles.orderContentText}>
                            {order ? `${order.length}x${order.width}x${order.height}см` : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Страхование:
                        <Text style={styles.orderContentText}>
                            {/* eslint-disable-next-line no-nested-ternary */}
                            {order ? order.cargo_insurance !== '0' ? 'Да' : 'Нет' : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Обрешетка:
                        <Text style={styles.orderContentText}>
                            {/* eslint-disable-next-line no-nested-ternary */}
                            {order ? order.cargo_box !== '0' ? 'Да' : 'Нет' : ''}
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Комментарий:
                        <Text style={styles.orderContentText}>
                            { order ? order.comment : '' }
                        </Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Стоимость:
                        <Text style={styles.orderContentText}> {order ? order.price : ''} ₽</Text>
                    </Text>
                </View>

                <Text style={[styles.orderTitleText, { marginTop: 20 }]}>Состояние доставки</Text>

                <Text style={[styles.orderContentSecondText, { marginTop: 10 }]}>
                    {order ? order.order_status : ''}
                    <Text style={styles.orderContentText}>
                        {/* eslint-disable-next-line no-nested-ternary */}
                    </Text>
                </Text>

                {order && order.ready_to_pay && !order.paid ? (
                    <SuccessSubmitButton
                        text={`Оплатить ${order.price} ₽`}
                        submitFunction={() => paySum()} />
                ) : null}

                {/* <Text style={styles.changeOrder}>Изменить данные о заказе</Text> */}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: COLORS.inputBackgroundColor,
    },
    downloadContainer: {
        height: 96,
        borderColor: COLORS.borderColor,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    downloadText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        textDecorationLine: 'underline',
    },
    senderReceiverContainer: {
        height: 338,
        borderColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
    orderTitleText: {
        fontSize: 12,
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
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
    orderDetailsContainer: {
        height: 359,
        borderColor: COLORS.borderColor,
        borderBottomWidth: 1,
        paddingVertical: 20,
    },
    changeOrder: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        alignSelf: 'center',
        marginVertical: 30,
        textDecorationLine: 'underline',
    },
})
