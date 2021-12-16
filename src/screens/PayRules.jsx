import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import {pixelSizeHorizontal} from "../utils/normalizeStyle";
import {COLORS} from "../utils/colors";
import {Cards} from "../components/Svgs";

export default function PayRules() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.firstTitle}>Правила оплаты</Text>

                <Text style={styles.secondTitle}>Политика безопасности</Text>

                <Text style={styles.dateText}>
                    При оплате заказа банковской картой, обработка платежа (включая ввод номера карты)
                    происходит на защищенной странице процессинговой системы, которая прошла международную
                    сертификацию. Это значит, что Ваши конфиденциальные данные (реквизиты карты,
                    регистрационные данные и др.) не поступают в интернет-магазин, их обработка полностью
                    защищена и никто, в том числе наш интернет-магазин, не может получить персональные и
                    банковские данные клиента. При работе с карточными данными применяется стандарт защиты
                    информации, разработанный международными платёжными системами Visa и Masterсard-Payment
                    Card Industry Data Security Standard (PCI DSS), что обеспечивает безопасную обработку
                    реквизитов Банковской карты Держателя. Применяемая технология передачи данных гарантирует
                    безопасность по сделкам с Банковскими картами путем использования протоколов Secure
                    Sockets Layer (SSL), Verifiedby Visa, Secure Code,и закрытых банковских сетей, имеющих
                    высшую степень защиты.
                </Text>

                <View style={styles.cardsContainer}>
                    <Cards/>
                </View>

                <Text style={styles.dateText}>
                    Уважаемые Клиенты, информируем Вас о том, что при запросе возврата денежных средств
                    при отказе от покупки, возврат производится исключительно на ту же банковскую карту,
                    с которой была произведена оплата
                </Text>
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
    firstTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        fontFamily: 'Helvetica',
        marginTop: 25,
    },
    secondTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        fontFamily: 'Helvetica',
        marginBottom: 20,
    },
    dateText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        fontWeight: '300',
        textAlign: 'justify',
        lineHeight: 22,
    },
    subTitle: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        fontWeight: '300',
        marginVertical: 20,
        textAlign: 'justify'
    },
    cardsContainer: {
        height: 91,
        justifyContent: 'center',
        alignItems: 'center',
    },
})