import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import {COLORS} from "../utils/colors";
import {Actual, Economic, Fast, One, Safe, Three, Two} from '../components/Svgs'
import AboutCard from "./AboutCard";
import ChanceCard from "./ChanceCard";

export default function AboutDetail() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.firstContent}>
                    <Text style={styles.text}>
                        FindDel — сервис подбора транспортных услуг.
                        Каждый день мы анализируем более тысячи транспортных компаний,
                        чтобы предложить клиентам лучшие цены за минимальные сроки
                    </Text>

                    <Text style={[styles.text, { marginTop: 20}]}>Мы ценим Ваше время!</Text>

                    <Text style={styles.scoresText}>1 320+</Text>

                    <Text style={styles.text}>транспортных компаний,</Text>
                    <Text style={styles.text}>анализируемых ежедневно</Text>

                    <Text style={styles.scoresText}>280 000+</Text>

                    <Text style={styles.text}>заказов ежедневно доставляют</Text>
                    <Text style={styles.text}>партнеры Delivery Service клиентам</Text>

                    <Text style={styles.scoresText}>3 800 000+</Text>

                    <Text style={styles.text}>довольных клиентов</Text>
                </View>

                <View style={styles.missionContainer}>
                    <Text style={styles.mission}>Миссия</Text>

                    <Text style={styles.missionDescription}>
                        Сделать грузоперевозки максимально удобными,
                        быстрыми и надежными, гарантируя поиск лучших
                        предложений по доставке
                    </Text>
                </View>

                <View style={styles.workContainer}>
                    <Text style={styles.workTitle}>Как работает</Text>
                    <Text style={styles.workTitle}>сервис?</Text>

                    <Text style={[styles.text, { marginTop: 20}]}>Просто, как раз, два, три</Text>

                    <One style={styles.number} fill={COLORS.placeholderTextColor}/>

                    <Text style={[styles.workSubtitle, { marginTop: 70}]}>Введите данные</Text>

                    <Text style={styles.subTitleText}>
                        Заполните заявку, заполнив все поля для расчета вариантов доставки
                    </Text>
                </View>

                <View style={styles.workContainer}>
                    <Two style={[styles.number, { top: 20}]}/>

                    <Text style={styles.workSubtitle}>Выберите лучшее предложение</Text>

                    <Text style={styles.subTitleText}>
                        Выберите наиболее подходящее
                        предложение по стоимости и срокам
                        доставки из всех перевозчиков
                    </Text>
                </View>

                <View style={{ paddingTop: 40 }}>
                    <Three style={[styles.number, { top: 20}]}/>

                    <Text style={styles.workSubtitle}>Оформите заявку</Text>

                    <Text style={styles.subTitleText}>
                        После нажатия на кнопку “Оформить”, наш сотрудник
                        свяжется с Вами для подтверждения даты забора груза
                    </Text>
                </View>

                <AboutCard/>

                 <Text style={styles.why}>Почему</Text>
                 <Text style={styles.why}>выбирают нас</Text>

                <ChanceCard
                    icon={<Economic/>}
                    title={'Экономно'}
                    text={'Анализируем более 1320 транспортных компаний, чтобы предложить ' +
                    'лучшие цены за минимальные сроки'}/>

                <ChanceCard
                    icon={<Fast/>}
                    title={'Быстро'}
                    text={'Подберём для Вас лучшую цену ' +
                    'и сроки доставки сразу из нескольких компаний грузоперевозчиков в 2 клика'}/>

                <ChanceCard
                    icon={<Actual/>}
                    title={'Актуально'}
                    text={'Каждый день пополняем список грузоперевозчиков, ' +
                    'чтобы сделать лучшую цену и сроки доставки'}/>

                <ChanceCard
                    icon={<Safe/>}
                    title={'Безопасно'}
                    text={'Работаем только с проверенными грузоперевозчиками. ' +
                    'Все посылки страхуются и их можно отследить'}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 80,
        flex: 1
    },
    text: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        lineHeight: 22,
        paddingRight: 15,
    },
    firstContent: {
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
    },
    scoresText: {
        marginTop: 30,
        marginBottom: 10,
        fontSize: 66,
        lineHeight: 80,
        color: COLORS.main,
        fontFamily: 'Helvetica'
    },
    missionContainer: {
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
        paddingVertical: 40,
        justifyContent: 'space-between'
    },
    mission: {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: '700',
        color: COLORS.main,
        fontFamily: 'Helvetica'
    },
    missionDescription: {
        fontSize: 29,
        lineHeight: 35,
        fontFamily: 'Helvetica',
        fontWeight: '200',
        marginTop: 10
    },
    workContainer: {
        borderBottomWidth: 1,
        borderColor: COLORS.borderColor,
        paddingVertical: 40,
    },
    workTitle: {
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 39,
        color: COLORS.main,
        fontFamily: 'Helvetica',
    },
    workSubtitle: {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: 'bold',
        paddingLeft: 25,
        marginBottom: 20,
    },
    subTitleText: {
        fontFamily: 'Helvetica',
        fontSize: 16,
        lineHeight: 22,
        paddingRight: 25,
        paddingLeft: 25,
    },
    number: {
        position: 'absolute',
        top: 205
    },
    why: {
        fontSize: 32,
        lineHeight: 39,
        color: COLORS.main,
        fontWeight: 'bold',
        fontFamily: 'Helvetica'
    }
})