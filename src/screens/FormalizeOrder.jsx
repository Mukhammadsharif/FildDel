import React, { useState } from 'react'
import {View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity} from "react-native"
import {pixelSizeHorizontal} from "../utils/normalizeStyle";
import {COLORS} from "../utils/colors";
import {Formik} from "formik";
import InputLight from "../components/InputLight";
import Radio from "../components/Radio";
import TextArea from "../components/TextArea";
import SuccessSubmitButton from "../components/SuccessSubmitButton";
import SubmitButton from "../components/SubmitButton"
import { useNavigation } from '@react-navigation/native'

export default function FormalizeOrder() {
    const navigation = useNavigation()
    const [paySender, setPaySender] = useState(false)
    const [payReceiver, setPayReceiver] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Formik
                    initialValues={{
                        senderSurname: '',
                        senderName: '',
                        senderFullname: '',
                        senderPhone: '',
                        senderEmail: '',
                        senderCompany: '',
                        receiverSurname: '',
                        receiverName: '',
                        receiverFullname: '',
                        receiverPhone: '',
                        receiverEmail: '',
                        receiverCompany: '',
                        comments: '',
                    }}
                    onSubmit={() => {}}>
                    {({ handleSubmit }) => (
                        <>
                            <Text style={styles.text}>Данные отправителя</Text>

                            <View>
                                <Text style={styles.inputLabel}>Фамилия*</Text>

                                <InputLight
                                    name={'senderSurname'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иванов'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>

                                <Text style={styles.inputLabel}>Имя*</Text>

                                <InputLight
                                    name={'senderName'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иван'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>


                                <Text style={styles.inputLabel}>Отчество</Text>

                                <InputLight
                                    name={'senderFullname'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иванович'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>


                                <Text style={styles.inputLabel}>Телефон*</Text>

                                <InputLight
                                    name={'senderPhone'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'+89876543210'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>

                                <Text style={styles.inputLabel}>E-mail*</Text>

                                <InputLight
                                    name={'senderEmail'}
                                    type={'email'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Ivanov123@mail.ru'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>


                                <Text style={styles.inputLabel}>Название компании</Text>

                                <InputLight
                                    name={'senderCompany'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иванович'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>
                            </View>


                            <View style={{marginVertical: 80}}>
                                <Text style={styles.text}>Данные получателья</Text>

                                <Text style={styles.inputLabel}>Фамилия*</Text>

                                <InputLight
                                    name={'receiverSurname'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иванов'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>

                                <Text style={styles.inputLabel}>Имя*</Text>

                                <InputLight
                                    name={'receiverName'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иван'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>


                                <Text style={styles.inputLabel}>Отчество</Text>

                                <InputLight
                                    name={'receiverFullname'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иванович'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>


                                <Text style={styles.inputLabel}>Телефон*</Text>

                                <InputLight
                                    name={'receiverPhone'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'+89876543210'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>

                                <Text style={styles.inputLabel}>E-mail*</Text>

                                <InputLight
                                    name={'receiverEmail'}
                                    type={'email'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Ivanov123@mail.ru'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>


                                <Text style={styles.inputLabel}>Название компании</Text>

                                <InputLight
                                    name={'receiverCompany'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Иванович'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>
                            </View>


                            <View style={{marginBottom: 80}}>
                                <Text style={styles.text}>Оплата</Text>

                                <View style={{flex: 1, flexDirection: 'row', marginTop: 25, marginBottom: 10}}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Radio
                                            radio={paySender}
                                            setRadio={() => {
                                                setPaySender(true)
                                                setPayReceiver(false)
                                            }}/>
                                        <Text style={styles.radioLabel}>Оплачивает отправитель</Text>
                                    </View>

                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <Radio
                                            radio={payReceiver}
                                            setRadio={() => {
                                                    setPaySender(false)
                                                    setPayReceiver(true)
                                            }}/>
                                        <Text style={styles.radioLabel}>Оплачивает получатель</Text>
                                    </View>
                                </View>

                                <Text style={styles.inputLabel}>Комментарий</Text>

                                <View style={{marginRight: 5}}>
                                    <TextArea
                                        name={'comments'}
                                        type={'text'}
                                        keyboard="default"
                                        placeholder={'Введите текст'}
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        multiline={true}
                                        maxLength={500}/>
                                </View>

                                <SuccessSubmitButton
                                    text={'Оформить'}
                                    submitFunction={() => navigation.navigate('OrderPay')}/>

                                <SubmitButton
                                    text={'Сравнить цены'}/>


                                <Text style={styles.warning}>
                                    Счет для оплаты придет на почту отправителя.
                                </Text>

                                <Text style={styles.understanding}>
                                    Нажимая на кнопку, вы соглашаетесь
                                </Text>

                                <TouchableOpacity>
                                    <Text style={[styles.linkContainer, { color: COLORS.main}]}>
                                        с политикой конфиденциальности.
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}
                </Formik>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        paddingTop: 25,
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
    },
    text: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        height: 30,
        fontFamily: 'Helvetica',
    },
    inputLabel: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Helvetica'
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
    },
    radioLabel: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        lineHeight: 22,
        marginLeft: 5,
        paddingRight: 30
    },
    understanding: {
        paddingRight: 43,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
    },
    linkContainer: {
        borderBottomWidth: 1,
        borderColor: COLORS.main,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
        width: 210,
        marginTop: -4,
    },
    warning: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Helvetica',
        marginTop: 20,
        color: 'black'
    }
})