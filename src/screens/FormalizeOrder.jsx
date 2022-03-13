import React, { useState, useContext } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { pixelSizeHorizontal } from '../utils/normalizeStyle'
import { COLORS } from '../utils/colors'
import InputLight from '../components/InputLight'
import Radio from '../components/Radio'
import TextArea from '../components/TextArea'
import SuccessSubmitButton from '../components/SuccessSubmitButton'
import SubmitButton from '../components/SubmitButton'
import { GlobalContext } from '../contexts/GlobalContext'

export default function FormalizeOrder({ route }) {
    const navigation = useNavigation()
    const [paySender, setPaySender] = useState(false)
    const [payReceiver, setPayReceiver] = useState(true)
    const [senderSurname, setSenderSurname] = useState('')
    const [senderName, setSenderName] = useState('')
    const [senderPatronymic, setSenderPatronymic] = useState('')
    const [senderPhone, setSenderPhone] = useState('')
    const [senderEmail, setSenderEmail] = useState('')
    const [senderCompany, setSenderCompany] = useState('')
    const [recSurname, setRecSurname] = useState('')
    const [recName, setRecName] = useState('')
    const [recPatronymic, setRecPatronymic] = useState('')
    const [recPhone, setRecPhone] = useState('')
    const [recEmail, setRecEmail] = useState('')
    const [recCompany, setRecCompany] = useState('')
    const [comment, setComment] = useState('')
    const { offerId } = route.params
    const { doctorId, setOrderId } = useContext(GlobalContext)

    const orderOffer = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        formData.append('offer_id', offerId)
        formData.append('sender_surname', senderSurname)
        formData.append('sender_name', senderName)
        formData.append('sender_patronymic', senderPatronymic)
        formData.append('sender_phone', senderPhone)
        formData.append('sender_email', senderEmail)
        formData.append('sender_company_name', senderCompany)
        formData.append('rec_surname', recSurname)
        formData.append('rec_name', recName)
        formData.append('rec_patronymic', recPatronymic)
        formData.append('rec_phone', recPhone)
        formData.append('rec_email', recEmail)
        formData.append('rec_company_name', recCompany)
        formData.append('who_pay', paySender ? 'отправитель' : 'получатель')
        formData.append('comment', comment)
        await fetch('https://finddel.ru/api/place_order', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((s) => {
                if (s.orderId) {
                    setOrderId(s.orderId)
                } else {
                    Alert.alert(s.text)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

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
                                    name="senderSurname"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иванов"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={senderSurname}
                                    onChange={setSenderSurname} />

                                <Text style={styles.inputLabel}>Имя*</Text>

                                <InputLight
                                    name="senderName"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иван"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={senderName}
                                    onChange={setSenderName} />

                                <Text style={styles.inputLabel}>Отчество</Text>

                                <InputLight
                                    name="senderFullname"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иванович"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={senderPatronymic}
                                    onChange={setSenderPatronymic} />

                                <Text style={styles.inputLabel}>Телефон*</Text>

                                <InputLight
                                    name="senderPhone"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="+89876543210"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={senderPhone}
                                    onChange={setSenderPhone} />

                                <Text style={styles.inputLabel}>E-mail*</Text>

                                <InputLight
                                    name="senderEmail"
                                    type="email"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Ivanov123@mail.ru"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={senderEmail}
                                    onChange={setSenderEmail} />

                                <Text style={styles.inputLabel}>Название компании</Text>

                                <InputLight
                                    name="senderCompany"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иванович"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={senderCompany}
                                    onChange={setSenderCompany} />
                            </View>

                            <View style={{ marginVertical: 80 }}>
                                <Text style={styles.text}>Данные получателья</Text>

                                <Text style={styles.inputLabel}>Фамилия*</Text>

                                <InputLight
                                    name="receiverSurname"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иванов"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={recSurname}
                                    onChange={setRecSurname} />

                                <Text style={styles.inputLabel}>Имя*</Text>

                                <InputLight
                                    name="receiverName"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иван"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={recName}
                                    onChange={setRecName} />

                                <Text style={styles.inputLabel}>Отчество</Text>

                                <InputLight
                                    name="receiverFullname"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иванович"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={recPatronymic}
                                    onChange={setRecPatronymic} />

                                <Text style={styles.inputLabel}>Телефон*</Text>

                                <InputLight
                                    name="receiverPhone"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="+89876543210"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={recPhone}
                                    onChange={setRecPhone} />

                                <Text style={styles.inputLabel}>E-mail*</Text>

                                <InputLight
                                    name="receiverEmail"
                                    type="email"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Ivanov123@mail.ru"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={recEmail}
                                    onChange={setRecEmail} />

                                <Text style={styles.inputLabel}>Название компании</Text>

                                <InputLight
                                    name="receiverCompany"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Иванович"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={recCompany}
                                    onChange={setRecCompany} />
                            </View>

                            <View style={{ marginBottom: 80 }}>
                                <Text style={styles.text}>Оплата</Text>

                                <View style={{ flex: 1, flexDirection: 'row', marginTop: 25, marginBottom: 10 }}>
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Radio
                                            radio={paySender}
                                            setRadio={() => {
                                                setPaySender(true)
                                                setPayReceiver(false)
                                            }} />
                                        <Text style={styles.radioLabel}>Оплачивает отправитель</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Radio
                                            radio={payReceiver}
                                            setRadio={() => {
                                                setPaySender(false)
                                                setPayReceiver(true)
                                            }} />
                                        <Text style={styles.radioLabel}>Оплачивает получатель</Text>
                                    </View>
                                </View>

                                <Text style={styles.inputLabel}>Комментарий</Text>

                                <View style={{ marginRight: 5 }}>
                                    <TextArea
                                        name="comments"
                                        type="text"
                                        keyboard="default"
                                        placeholder="Введите текст"
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        multiline
                                        maxLength={500}
                                        value={comment}
                                        onChange={setComment} />
                                </View>

                                <SuccessSubmitButton
                                    text="Оформить"
                                    submitFunction={() => {
                                        orderOffer()
                                        navigation.navigate('OrderPay')
                                    }} />

                                <SubmitButton
                                    text="Сравнить цены"
                                    submitFunction={() => navigation.goBack()} />

                                <Text style={styles.warning}>
                                    Счет для оплаты придет на почту отправителя.
                                </Text>

                                <Text style={styles.understanding}>
                                    Нажимая на кнопку, вы соглашаетесь
                                </Text>

                                <TouchableOpacity>
                                    <Text style={[styles.linkContainer, { color: COLORS.main }]}>
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
        fontFamily: 'Helvetica',
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
        paddingRight: 30,
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
        color: 'black',
    },
})
