import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, SafeAreaView, Text, TouchableOpacity } from "react-native"
import {pixelSizeHorizontal, pixelSizeVertical} from "../utils/normalizeStyle"
import MainScreenBanner from "../components/MainScreenBanner"
import { COLORS } from "../utils/colors"
import { Card } from 'react-native-paper'
import {Formik} from "formik";
import InputLight from "../components/InputLight"
import {PEK, TNT, VectorDown, VectorTop} from "../components/Svgs"
import OrderDetail from "../components/OrderDetail"

export default function HistoryScreen() {
    const [history, showHistory] = useState(true)
    const [detail, setDetail] = useState(false)
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

                        <View>
                            <View style={styles.firstOrderDetailContainer}>
                                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                                        <View>
                                            <Text style={styles.orderTitleText}>Заказ №</Text>

                                            <Text style={styles.orderTitleDescriptionText}>1234567890</Text>
                                        </View>

                                        <View style={{flex: 0.5, justifyContent: 'space-between'}}>
                                            <Text style={styles.orderTitleText}>Доставка компанией</Text>
                                            <TNT width={115} height={22}/>
                                        </View>
                                    </View>

                                    <View style={{flex: 1.2, justifyContent: 'space-between'}}>
                                        <Text style={styles.orderTitleText}>Состояние доставки</Text>

                                        <View style={{justifyContent: 'space-between'}}>
                                            <Text style={styles.orderContentSecondText}>
                                                Оформлена:
                                                <Text style={styles.orderContentText}> 28.11.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Сроки доставки:
                                                <Text style={styles.orderContentText}> 09.12.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Стоимость:
                                                <Text style={styles.orderContentText}> 1 228 ₽</Text>
                                            </Text>
                                        </View>

                                        <TouchableOpacity
                                            style={styles.detailButton}
                                            onPress={() => setDetail(!detail)}
                                        >
                                            {!detail ? (
                                                <>
                                                    <Text style={styles.linkContainer}>Подробнее</Text>
                                                    <VectorDown style={{marginLeft: 5}}/>
                                                </>
                                            ) : (
                                                <>
                                                    <Text style={styles.secondLinkContainer}>Скрыть</Text>
                                                    <VectorTop style={{marginLeft: 5}}/>
                                                </>
                                            )}


                                        </TouchableOpacity>
                                    </View>
                            </View>

                            {detail ? <OrderDetail/> : null}

                            <View style={styles.secondOrderDetailContainer}>
                                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                                        <View>
                                            <Text style={styles.orderTitleText}>Заказ №</Text>

                                            <Text style={styles.orderTitleDescriptionText}>1234567890</Text>
                                        </View>

                                        <View style={{flex: 0.5, justifyContent: 'space-between'}}>
                                            <Text style={styles.orderTitleText}>Доставка компанией</Text>
                                            <PEK width={115} height={22}/>
                                        </View>
                                    </View>

                                    <View style={{flex: 1.2, justifyContent: 'space-between'}}>
                                        <Text style={styles.orderTitleText}>Состояние доставки</Text>

                                        <View style={{justifyContent: 'space-between'}}>
                                            <Text style={styles.orderContentSecondText}>
                                                Оформлена:
                                                <Text style={styles.orderContentText}> 28.11.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Сроки доставки:
                                                <Text style={styles.orderContentText}> 09.12.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Стоимость:
                                                <Text style={styles.orderContentText}> 1 228 ₽</Text>
                                            </Text>
                                        </View>

                                        <TouchableOpacity style={styles.detailButton}>
                                            <Text style={styles.linkContainer}>Подробнее</Text>
                                            <VectorDown style={{marginLeft: 5}}/>
                                        </TouchableOpacity>
                                    </View>
                            </View>

                            <View style={styles.firstOrderDetailContainer}>
                                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                                        <View>
                                            <Text style={styles.orderTitleText}>Заказ №</Text>

                                            <Text style={styles.orderTitleDescriptionText}>1234567890</Text>
                                        </View>

                                        <View style={{flex: 0.5, justifyContent: 'space-between'}}>
                                            <Text style={styles.orderTitleText}>Доставка компанией</Text>
                                            <TNT width={115} height={22}/>
                                        </View>
                                    </View>

                                    <View style={{flex: 1.2, justifyContent: 'space-between'}}>
                                        <Text style={styles.orderTitleText}>Состояние доставки</Text>

                                        <View style={{justifyContent: 'space-between'}}>
                                            <Text style={styles.orderContentSecondText}>
                                                Оформлена:
                                                <Text style={styles.orderContentText}> 28.11.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Сроки доставки:
                                                <Text style={styles.orderContentText}> 09.12.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Стоимость:
                                                <Text style={styles.orderContentText}> 1 228 ₽</Text>
                                            </Text>
                                        </View>

                                        <TouchableOpacity style={styles.detailButton}>
                                            <Text style={styles.linkContainer}>Подробнее</Text>
                                            <VectorDown style={{marginLeft: 5}}/>
                                        </TouchableOpacity>
                                    </View>
                            </View>


                            <View style={styles.secondOrderDetailContainer}>
                                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                                        <View>
                                            <Text style={styles.orderTitleText}>Заказ №</Text>

                                            <Text style={styles.orderTitleDescriptionText}>1234567890</Text>
                                        </View>

                                        <View style={{flex: 0.5, justifyContent: 'space-between'}}>
                                            <Text style={styles.orderTitleText}>Доставка компанией</Text>
                                            <TNT width={115} height={22}/>
                                        </View>
                                    </View>

                                    <View style={{flex: 1.2, justifyContent: 'space-between'}}>
                                        <Text style={styles.orderTitleText}>Состояние доставки</Text>

                                        <View style={{justifyContent: 'space-between'}}>
                                            <Text style={styles.orderContentSecondText}>
                                                Оформлена:
                                                <Text style={styles.orderContentText}> 28.11.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Сроки доставки:
                                                <Text style={styles.orderContentText}> 09.12.21</Text>
                                            </Text>

                                            <Text style={styles.orderContentSecondText}>
                                                Стоимость:
                                                <Text style={styles.orderContentText}> 1 228 ₽</Text>
                                            </Text>
                                        </View>

                                        <TouchableOpacity style={styles.detailButton}>
                                            <Text style={styles.linkContainer}>Подробнее</Text>
                                            <VectorDown style={{marginLeft: 5}}/>
                                        </TouchableOpacity>
                                    </View>
                            </View>

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
        color: 'black'
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
        alignItems: 'center'
    }
})