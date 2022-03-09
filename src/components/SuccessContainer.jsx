import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SuccessTitle,
    SuccessDescription,
    TNT,
    PEK,
    LinesIcon,
    KTC,
    Baikal,
    Dostavista,
    DPD,
    BuyButton,
    TimeButton } from './Svgs'
import { COLORS } from '../utils/colors'
import SubmitButton from './SubmitButton'
import RecommendationCard from './RecommentdationCard'

export default function SuccessContainer({ offers, selectedOffer, setSelectedOffer }) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <SuccessTitle style={{ marginLeft: 15 }} />

            <SuccessDescription style={{ marginTop: 20, marginBottom: 11, marginLeft: 15 }} />

            <TouchableOpacity
                style={styles.card}>
                <Text style={styles.titleLeftText}>Компания</Text>

                <View style={styles.titleLeftText} />

                <View style={styles.titleRightText}>
                    <Text style={styles.rightText}>Сроки, дни</Text>
                    <Text style={styles.rightText}>Стоимость, ₽</Text>
                </View>

            </TouchableOpacity>

            { offers ? offers.map((item) => (
                <TouchableOpacity
                    style={item.offer_id === selectedOffer.offer_id ? styles.cardSelected : styles.card}
                    onPress={() => {
                        setSelectedOffer({})
                        setSelectedOffer(item)
                    }}>
                    <TNT width={115} height={22.59} style={{ flex: 1 }} />

                    <View style={styles.descriptionContainer} />

                    <Text style={styles.description}>
                        {/* eslint-disable-next-line max-len */}
                        {item.term.includes('менеджер') ? 'Уточняйте у менеджера' : `${item.term} дней`},      {item.price} ₽
                    </Text>

                </TouchableOpacity>
            )) : null}

            <View style={{ paddingHorizontal: 15 }}>
                <SubmitButton
                    text="Оформить доставку"
                    submitFunction={() => navigation.navigate('FormalizeOrder', { offerId: selectedOffer.offer_id })} />

                <Text style={[styles.understanding, { marginTop: 20 }]}>
                    Нажимая на кнопку, вы соглашаетесь
                </Text>

                <TouchableOpacity>
                    <Text style={[styles.linkContainer, { color: COLORS.main }]}>
                        с политикой конфиденциальности.
                    </Text>
                </TouchableOpacity>

                <Text style={[styles.understanding]}>
                    Стоимость доставки может измениться
                    после забора груза на склад и сверки
                    размеров. Точная сумма появится в
                    личном кабинете и сообщением на эл.почту
                </Text>

                <RecommendationCard />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
    },
    card: {
        height: 89,
        borderBottomWidth: 1,
        borderColor: COLORS.cardSelected,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    cardSelected: {
        height: 89,
        borderBottomWidth: 1,
        borderColor: COLORS.cardSelected,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.cardSelected,
        paddingLeft: 15,
    },
    titleRightText: {
        paddingRight: 37,
        paddingLeft: 15,
        flex: 0.75,
    },
    titleLeftText: {
        flex: 1,
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
    },
    rightText: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
    },
    descriptionContainer: {
        flex: 1.35,
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        flex: 1,
        paddingRight: 24,
        color: COLORS.placeholderTextColor,
        paddingLeft: 15,
    },
    understanding: {
        paddingRight: 80,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
    },
    linkContainer: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
        marginTop: -4,
        textDecorationLine: 'underline',
    },
})
