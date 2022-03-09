import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import { Card } from 'react-native-paper'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { pixelSizeHorizontal } from '../utils/normalizeStyle'
import MainScreenBanner from '../components/MainScreenBanner'
import { COLORS } from '../utils/colors'
import InputLight from '../components/InputLight'
import { BigTruck,
    Box,
    CombinedIcon,
    Convert,
    Dangerous,
    LeftRight,
    Paket,
    Palet,
    Telejka,
    Truck } from '../components/Svgs'
import SubmitButton from '../components/SubmitButton'
import Logos from '../components/Logos'
import BigDropDown from '../components/BigDropDown'
import SuggestionScroll from '../components/SuggestionScoll'

export default function MainScreen() {
    const [selectedValue, setSelectedValue] = useState('')
    const [fromAddress, setFromAddress] = useState('')
    const [toAddress, setToAddress] = useState('')
    const [suggestions, setSuggestions] = useState('')
    const [toSuggestions, setToSuggestions] = useState('')
    const [fromSug, setFromSug] = useState(false)
    const [toSug, setToSug] = useState(false)
    const navigation = useNavigation()
    const data = [
        { name: 'Конверт',
            size: '35x25x5 см / до 2 кг',
            description: 'Маленькие предметы: документы,бижутерия, аксессуары',
            icon: (<Convert />) },
        { name: 'Пакет',
            size: '40х30х20 см / до 5 кг',
            description: 'Небольшие отправления обувь, одежда, мелкая техника',
            icon: (<Paket />) },
        { name: 'Коробка',
            size: '60х40х30 см / до 20 кг',
            description: 'Средний размер: набор посуды, домашний текстиль',
            icon: (<Box />) },
        { name: 'Тележка',
            size: '100x50x50 см / до 50 кг',
            description: 'Тяжелая большая посылка: велосипед,крупная кухонная техника',
            icon: (<Telejka />) },
        { name: 'Палет',
            size: '120x80x80 см / от 50 кг',
            description: 'Крупный груз: мебель, крупная бытовая техника',
            icon: (<Palet />) },
        { name: 'Фургон',
            size: '200x90x90 см / от 5 тонн',
            description: 'Крупный груз: мебель, крупная техника,инструменты',
            icon: (<Truck />) },
        { name: 'Фура',
            size: '300x100x100 см / от 10 тонн',
            description: 'Крупный груз: крупная техника, машины, спецтехника',
            icon: (<BigTruck />) },
        { name: 'Опасный груз',
            size: '',
            description: 'Взрывчатые материалы, газы,легковоспламеняющиеся жидкости',
            icon: (<Dangerous />) },
    ]

    const getSuggestions = async () => {
        const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
        const token = 'e20c4782abff75fe134b4a179a0d5f3bcc22c81b'
        const query = fromAddress

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                query,
                locations: [
                    { country: 'Россия' },
                    { country: 'Беларусь' },
                    { country: 'Узбекистан' },
                ],
            }),
        }

        fetch(url, options)
            .then((response) => response.text())
            .then((result) => setSuggestions(JSON.parse(result)))
            .catch((error) => console.log('error', error))
    }

    useEffect(() => {
        if (fromAddress !== '') {
            getSuggestions()
            setFromSug(!fromSug)
        }
    }, [fromAddress])

    const getToSuggestions = async () => {
        const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
        const token = 'e20c4782abff75fe134b4a179a0d5f3bcc22c81b'
        const query = toAddress

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                query,
                locations: [
                    { country: 'Россия' },
                    { country: 'Беларусь' },
                    { country: 'Узбекистан' },
                ],
            }),
        }

        fetch(url, options)
            .then((response) => response.text())
            .then((result) => setToSuggestions(JSON.parse(result)))
            .catch((error) => console.log('error', error))
    }

    useEffect(() => {
        if (toAddress !== '') {
            getToSuggestions()
            setToSug(!toSug)
        }
    }, [toAddress])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                <MainScreenBanner />

                <Text style={styles.text}>Сравнить цены</Text>

                <Card style={styles.cardContainer}>
                    <Formik initialValues={{ address: '', receive: '', convert: '' }} onSubmit={() => {}}>
                        {({ handleSubmit }) => (
                            <View>
                                <Text style={styles.inputLabel}>Откуда</Text>
                                <View style={styles.addressContainer}>
                                    <InputLight
                                        name="address"
                                        type="text"
                                        keyboard="default"
                                        input={styles.addressInput}
                                        placeholder="Введите адрес отправления"
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        value={fromAddress}
                                        onChange={setFromAddress} />

                                    <TouchableOpacity
                                        style={styles.leftRightContainer}
                                        onPress={() => {
                                            const change = fromAddress
                                            setFromAddress(toAddress)
                                            setToAddress(change)
                                        }}
                                    >
                                        <LeftRight />
                                    </TouchableOpacity>
                                </View>

                                {fromSug ? (
                                    <SuggestionScroll
                                        visible={fromSug}
                                        setVisible={setFromSug}
                                        data={suggestions.suggestions}
                                        setSelectedValue={setFromAddress} />
                                ) : null}

                                <Text style={styles.inputLabel}>Куда</Text>
                                <InputLight
                                    name="receive"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Введите адрес отправления"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={toAddress}
                                    onChange={setToAddress} />

                                {toSug ? (
                                    <SuggestionScroll
                                        visible={toSug}
                                        setVisible={setToSug}
                                        data={toSuggestions.suggestions}
                                        setSelectedValue={setToAddress} />
                                ) : null}

                                <Text style={styles.inputLabel}>Вид груза</Text>

                                <BigDropDown
                                    selectedValue={selectedValue}
                                    setSelectedValue={setSelectedValue}
                                    placeholder="Конверт"
                                    data={data}
                                />

                                <SubmitButton
                                    text="Сравнить цены"
                                    icon={<CombinedIcon style={{ marginLeft: 10 }} />}
                                    submitFunction={() => {
                                        navigation.navigate('PlusScreen', {
                                            fromAddress,
                                            toAddress,
                                        })
                                    }} />
                            </View>
                        )}
                    </Formik>
                </Card>

                <Logos />

                <Text style={styles.description}>Еще 1348 транспортных компаний</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
    },
    cardContainer: {
        height: 395,
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
    },
    text: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        height: 67,
        fontFamily: 'Helvetica',
    },
    addressContainer: {
        flexDirection: 'row',
    },
    addressInput: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
        width: '90%',
    },
    inputLabel: {
        marginTop: 20,
        fontSize: 16,
    },
    leftRightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -20,
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.main,
        paddingTop: 30,
        paddingBottom: 50,
    },
})
