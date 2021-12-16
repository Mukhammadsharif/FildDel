import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"
import {COLORS} from "../utils/colors";
import SuccessSubmitButton from "./SuccessSubmitButton";

export default function OrderDetail() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.downloadContainer}>
                    <TouchableOpacity>
                        <Text style={styles.downloadText}>Скачать Договор</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={[styles.downloadText, { width: 140}]}>Скачать Накладная</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.senderReceiverContainer}>
                    <View>
                        <Text style={styles.orderTitleText}>Отправитель</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentSecondText}>
                                Отправитель:
                                <Text style={styles.orderContentText}> Фамилия Имя Отчечество</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                ООО “Название компании”
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Телефон:
                                <Text style={styles.orderContentText}> +7 (999) 999-99-99</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Еmail:
                                <Text style={styles.orderContentText}> example1@mail.ru</Text>
                            </Text>

                            <Text style={styles.orderContentText}>
                                г. Город,
                                <Text style={styles.orderContentSecondText}> ул. Название улицы, д.Номер дома</Text>
                            </Text>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.orderTitleText}>/ Получатель</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentSecondText}>
                                Отправитель:
                                <Text style={styles.orderContentText}> Фамилия Имя Отчечество</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                ООО “Название компании”
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Телефон:
                                <Text style={styles.orderContentText}> +7 (999) 999-99-99</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Еmail:
                                <Text style={styles.orderContentText}> example1@mail.ru</Text>
                            </Text>

                            <Text style={styles.orderContentText}>
                                г. Город,
                                <Text style={styles.orderContentSecondText}> ул. Название улицы, д.Номер дома</Text>
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.orderDetailsContainer}>
                    <Text style={[styles.orderTitleText, { marginBottom: 10 }]}>Детали доставки</Text>

                    <Text style={styles.orderContentSecondText}>
                        Компания:
                        <Text style={styles.orderContentText}> Название компании</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Тариф:
                        <Text style={styles.orderContentText}> Название тарифа</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Способ доставки:
                        <Text style={styles.orderContentText}> склад-склад</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Вид груза:
                        <Text style={styles.orderContentText}> коробка</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Категория груза:
                        <Text style={styles.orderContentText}> ТНП</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Вес:
                        <Text style={styles.orderContentText}> 53кг</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Расстояние:
                        <Text style={styles.orderContentText}> 128км</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Кол-во мест:
                        <Text style={styles.orderContentText}> 2</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Габариты:
                        <Text style={styles.orderContentText}> 43х28х228см</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Страхование:
                        <Text style={styles.orderContentText}> Нет</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Обрешетка:
                        <Text style={styles.orderContentText}> Нет</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Комментарий:
                        <Text style={styles.orderContentText}> Текст комментария</Text>
                    </Text>

                    <Text style={styles.orderContentSecondText}>
                        Стоимость:
                        <Text style={styles.orderContentText}> 1 228 ₽</Text>
                    </Text>
                </View>

                <Text style={[styles.orderTitleText, { marginTop: 20 }]}>Состояние доставки</Text>

                <Text style={[styles.orderContentSecondText, { marginTop: 10 }]}>
                    Оформлен.
                    <Text style={styles.orderContentText}> Ожидает оплаты</Text>
                </Text>

                <SuccessSubmitButton
                    text={'Оплатить 1 228 ₽'}/>

                <Text style={styles.changeOrder}>Изменить данные о заказе</Text>
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
        justifyContent: 'space-between'
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
        justifyContent: 'space-between'
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
    }
})