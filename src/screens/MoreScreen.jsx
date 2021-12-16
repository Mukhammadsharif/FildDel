import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView } from "react-native"
import { useNavigation } from '@react-navigation/native'
import {pixelSizeHorizontal} from "../utils/normalizeStyle"
import {COLORS} from "../utils/colors"
import {Cards, VectorBottomBlack, VectorTopBlack} from "../components/Svgs"
import AboutDetail from "../components/AboutDetail";
import PartnersDetail from "../components/PartnersDetail";

export default function MoreScreen() {
    const navigation = useNavigation()
    const [about, setAbout] = useState(false)
    const [partners, setPartners] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.aboutContainer}>
                    <TouchableOpacity
                        style={styles.aboutTextContainer}
                        onPress={() => setAbout(!about)}
                    >
                        <Text style={styles.title}>О компании</Text>

                        {about ? <VectorTopBlack/> : <VectorBottomBlack/>}
                    </TouchableOpacity>

                    {about ? <AboutDetail/> : null}
                </View>

                <View style={styles.aboutContainer}>
                    <TouchableOpacity
                        style={styles.aboutTextContainer}
                        onPress={() => setPartners(!partners)}
                    >
                        <Text style={styles.title}>Наши партнеры</Text>

                        {partners ? <VectorTopBlack/> : <VectorBottomBlack/>}
                    </TouchableOpacity>

                    {partners ? <PartnersDetail/> : null}
                </View>

                <View style={styles.contactContainer}>
                    <Text style={styles.title}>Контакты</Text>

                    <View>
                        <Text style={styles.orderTitleText}>Ждем вашего звонка с 8:00 до 18:00, Пн-Пт</Text>
                        <Text style={styles.underlined}>+7 ( 499 ) 350 29 97</Text>
                    </View>

                    <View>
                        <Text style={styles.orderTitleText}>Почта</Text>
                        <Text style={styles.underlined}>poisk@finddel.ru</Text>
                    </View>
                </View>

                <View style={styles.politicsContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Politics')}>
                        <Text style={styles.touchableText}>Политика конфиденциальности</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Agreement')}>
                        <Text style={styles.touchableText}>Пользовательское соглашение</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Offer')}>
                        <Text style={styles.touchableText}>Приглашение к сотрудничеству</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={[styles.touchableText, {textDecorationLine: 'underline'}]}>Договор</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('PayRules')}>
                        <Text style={styles.touchableText}>Правила оплаты/Политика безопасности </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.touchableText}>@Сервис подбора доставки FindDel</Text>
                    </TouchableOpacity>
                </View>

               <View style={styles.cardsContainer}>
                   <Cards/>
               </View>

                <View style={styles.descriptionContainer}>
                    <Text style={styles.orderContentSecondText}>ООО «АрктикТранс»</Text>

                    <Text style={styles.orderContentSecondText}>
                        Юр. адрес: 108840,г. Москва, г. Троицк,
                        площадь Академическая,д. 1, этаж 0,оф2
                    </Text>

                    <Text style={styles.orderContentSecondText}>ИНН 7751170859</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
    },
    aboutContainer: {
        minHeight: 72,
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
        paddingTop: 25,
    },
    aboutTextContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        fontFamily: 'Helvetica',
    },
    contactContainer: {
        height: 216,
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
        justifyContent: 'space-between',
        paddingVertical: 25,
    },
    orderTitleText: {
        fontSize: 12,
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
    },
    underlined: {
        textDecorationLine: 'underline',
        fontSize: 24,
        fontWeight: 'bold',
    },
    politicsContainer: {
        height: 242,
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
        justifyContent: 'space-between',
        paddingVertical: 25,
    },
    touchableText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
    },
    cardsContainer: {
        height: 91,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
    },
    descriptionContainer: {
        height: 136,
        paddingVertical: 25,
        justifyContent: 'space-between',
        // marginTop: 100,
    },
    orderContentSecondText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
        marginTop: 2,
    },
})