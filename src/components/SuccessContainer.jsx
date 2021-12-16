import React, {useState} from 'react'
import { View , Text, StyleSheet, TouchableOpacity} from "react-native"
import {
    SuccessTitle,
    SuccessDescription,
    TNT,
    PEK,
    LinesIcon,
    KTC,
    Baikal,
    Dostavista,
    DPD,
    BuyButton,
    TimeButton
} from "./Svgs"
import {COLORS} from "../utils/colors";
import SubmitButton from "./SubmitButton";
import RecommendationCard from "./RecommentdationCard";
import { useNavigation } from '@react-navigation/native'

export default function SuccessContainer() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(false)

    return (
        <View style={styles.container}>
            <SuccessTitle style={{marginLeft: 15}}/>

            <SuccessDescription style={{marginTop: 20, marginBottom: 11, marginLeft: 15}}/>

            <TouchableOpacity
                style={styles.card}>
                <Text style={styles.titleLeftText}>Компания</Text>

                <View style={styles.titleLeftText}/>

                <View style={styles.titleRightText}>
                    <Text style={styles.rightText}>Сроки, дни</Text>
                    <Text style={styles.rightText}>Стоимость, ₽</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}>
                <TNT width={115} height={22.59} style={{flex: 1}}/>

                <View style={styles.descriptionContainer}/>

                <Text style={styles.description}>от 2 до 4 дней, 1 228 ₽ </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}>
                <PEK width={115} height={28.03} style={{flex: 1}}/>

                <View style={styles.descriptionContainer}>
                    <BuyButton/>
                </View>

                <Text style={styles.description}>от 1 до 5 дней, 128 ₽ </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={!selected ? styles.card : styles.cardSelected}
                onPress={() => setSelected(!selected)}>
                <LinesIcon width={115} height={36.64} style={{flex: 1}}/>

                <View style={styles.descriptionContainer}>
                    <BuyButton style={{marginBottom: 5}}/>
                    <TimeButton/>
                </View>

                <Text style={styles.description}>от 1 до 2 дней, 128 ₽  </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}>
                <KTC width={115} height={30.44} style={{flex: 1}}/>

                <View style={styles.descriptionContainer}/>

                <Text style={styles.description}>от 2 до 4 дней, 111 228 ₽ </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}>
                <Baikal width={115} height={17.87} style={{flex: 1}}/>

                <View style={styles.descriptionContainer}/>

                <Text style={styles.description}>от 2 до 4 дней, 1 228 ₽ </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}>
                <Dostavista width={123} height={18} style={{flex: 1}}/>

                <View style={styles.descriptionContainer}/>

                <Text style={styles.description}>от 2 до 4 дней, 1 228 ₽ </Text>

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.card}>
                <DPD width={115} height={50.88} style={{flex: 1}}/>

                <View style={styles.descriptionContainer}/>

                <Text style={styles.description}>от 2 до 4 дней, 128 ₽ </Text>

            </TouchableOpacity>

            <View style={{paddingHorizontal: 15}}>
                <SubmitButton
                    text={'Оформить доставку'}
                    submitFunction={() => navigation.navigate('FormalizeOrder')}/>

                <Text style={[styles.understanding, { marginTop: 20}]}>
                    Нажимая на кнопку, вы соглашаетесь
                </Text>

                    <TouchableOpacity>
                        <Text style={[styles.linkContainer, { color: COLORS.main}]}>
                            с политикой конфиденциальности.
                        </Text>
                    </TouchableOpacity>

                <Text style={[styles.understanding]}>
                    Стоимость доставки может измениться
                    после забора груза на склад и сверки
                    размеров. Точная сумма появится в
                    личном кабинете и сообщением на эл.почту
                </Text>

                <RecommendationCard/>
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
        fontFamily: 'Helvetica'
    },
    rightText: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica'
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
        paddingLeft: 15
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
    }
})