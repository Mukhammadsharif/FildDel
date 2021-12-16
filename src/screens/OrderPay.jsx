import React from "react"
import { View, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native'
import { COLORS } from "../utils/colors";
import { TNT } from "../components/Svgs";
import SuccessSubmitButton from "../components/SuccessSubmitButton";

export default function OrderPay() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={styles.text}>Оплата</Text>

                <View style={styles.content}>

                    <View style={styles.orderTitleContainer}>

                        <View style={styles.orderTitleFirstDetail}>
                            <Text style={styles.orderTitleText}>Доставка компанией</Text>
                            <TNT width={110} height={21}/>
                        </View>

                        <View style={styles.orderTitleSecondDetail}>
                            <Text style={styles.orderTitleText}>Заказ №</Text>
                            <Text style={styles.orderTitleDescriptionText}>1234567890</Text>
                        </View>
                    </View>


                    <View style={styles.orderContainer}>
                        <Text style={styles.orderTitleText}>Отправитель</Text>

                        <View style={{marginTop: 10}}>
                            <Text style={styles.orderContentText}>Фамилия Имя Отчечество</Text>

                            <Text style={styles.orderContentText}>ООО “Название компании”</Text>

                            <Text style={styles.orderContentText}>
                                г. Город,
                                <Text style={styles.orderContentSecondText}>
                                    ул. Название улицы, д. 28
                                </Text>
                            </Text>
                        </View>

                        <Text style={[styles.orderTitleText, {marginBottom: -5}]}>/ Получатель</Text>

                        <View style={{marginTop: 10}}>
                            <Text style={styles.orderContentText}>Фамилия Имя Отчечество</Text>

                            <Text style={styles.orderContentText}>ООО “Название компании”</Text>

                            <Text style={styles.orderContentText}>
                                г. Москва,
                                <Text style={styles.orderContentSecondText}>
                                    ул. Название улицы, д. 28
                                </Text>
                            </Text>
                        </View>
                    </View>

                    <View style={styles.orderDetailContainer}>
                        <Text style={styles.orderTitleText}>Детали доставки</Text>

                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.orderContentSecondText}>
                                Способ доставки:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}> обычный</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                 Вид груза:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}> коробка</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Вес:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}> 53 кг</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Расстояние:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}>  128 км</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Кол-во мест:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}> 2</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Габариты:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}> 43х28х228 см</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Комментарий:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}> текст будет написан</Text>
                            </Text>

                            <Text style={styles.orderContentSecondText}>
                                Стоимость:
                                <Text style={[styles.orderContentText,{ color: 'black'}]}> 1 228 ₽</Text>
                            </Text>
                        </View>
                    </View>

                   <View style={styles.orderStatusContainer}>
                        <Text style={styles.orderTitleText}>Состояние доставки</Text>

                        <Text style={[styles.orderContentSecondText, { marginTop: 10 }]}>
                            Сроки доставки:
                            <Text style={[styles.orderContentText,{ color: 'black'}]}> 2-7 дней</Text>
                        </Text>

                        <Text style={styles.orderContentSecondText}>Стоимость доставки:</Text>

                        <Text style={styles.priceText}>1 228 ₽</Text>
                   </View>

                    <SuccessSubmitButton
                        text={'Оплатить 1 228 ₽'}/>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
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
        paddingHorizontal: 15
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
        paddingTop: 20
    },
    priceText: {
        color: COLORS.main,
        fontSize: 41,
        fontWeight: 'bold',
        fontFamily: 'Helvetica',
        lineHeight: 50,
        paddingVertical: 10
    }
})