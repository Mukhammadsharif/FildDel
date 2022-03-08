import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView, Alert } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input'
import { pixelSizeHorizontal, pixelSizeVertical } from '../utils/normalizeStyle'
import { COLORS } from '../utils/colors'
import SubmitButton from '../components/SubmitButton'
import SecondSubmitButton from '../components/SecondSubmitButton'
import NavigationButton from '../components/NavigationButton'
import { GlobalContext } from '../contexts/GlobalContext'

export default function ForgetPassword({ route }) {
    const navigation = useNavigation()
    const [code, setCode] = useState('')
    const [secondCode, setSecondCode] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const { email, password, code: emailCode } = route.params
    const { setId } = useContext(GlobalContext)

    console.log(emailCode, secondCode, route.params)

    const formData = new FormData()
    formData.append('email', email)

    const getNumbers = async () => {
        await fetch('https://finddel.ru/api/get_registration_code', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((s) => {
                if (s.emailCode) {
                    setSecondCode(s.emailCode)
                } else {
                    Alert.alert(s.text)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    const registerForm = new FormData()
    registerForm.append('email', email)
    registerForm.append('password', password)
    const registerAccount = async () => {
        await fetch('https://finddel.ru/api/registration', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: registerForm,
        })
            .then((response) => response.json())
            .then(async (s) => {
                if (s.text === 'Регистрация прошла успешно') {
                    await setId(s.clientId)
                    await navigation.navigate('TabScreen')
                } else {
                    Alert.alert(s.text)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    useEffect(() => {
        if (loading) {
            if (code === emailCode || code === secondCode) {
                setSubmitted(true)
            } else {
                console.log('ups')
            }
        }

        return () => setLoading(!loading)
    }, [loading])

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <Text style={styles.title}>Введите код</Text>

            <Text style={styles.description}>
                Код отправлен на почту {email} Если не пришло письмо, проверьте «спам»
            </Text>

            <Formik initialValues={{ code: '' }} onSubmit={() => {}}>
                {({ handleSubmit }) => (
                    <>
                        <View style={styles.inputContainer}>
                            <SmoothPinCodeInput
                                value={code}
                                onTextChange={(value) => setCode(value)}
                                cellStyle={styles.cellStyle}
                                textStyle={styles.textStyle}
                                cellStyleFocused={styles.cellStyleFocused}
                                autoFocus
                                onFulfill={() => {
                                    setLoading(true)
                                }} />
                        </View>

                        <View style={{ marginTop: 25 }}>
                            {!submitted ? (
                                <SubmitButton
                                    text="Отправить еще раз"
                                    submitFunction={() => {
                                        getNumbers()
                                        setCode('')
                                    }} />
                            ) : (
                                <SecondSubmitButton
                                    text="Войти"
                                    submitFunction={() => {
                                        registerAccount()
                                        // navigation.navigate('TabScreen')
                                    }} />
                            )}
                        </View>
                    </>
                )}
            </Formik>

            <NavigationButton
                text="Назад"
                submitFunction={() => navigation.goBack()}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(30),
        paddingTop: pixelSizeVertical(50),
        paddingBottom: pixelSizeVertical(202),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
    },
    title: {
        color: COLORS.main,
        fontSize: 26,
        lineHeight: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Helvetica',
    },
    cellStyle: {
        borderWidth: 1,
        width: 84,
        height: 84,
        backgroundColor: COLORS.inputBackgroundColor,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 3,
        marginTop: 30,
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 20,
        fontFamily: 'Helvetica',
    },
    textStyle: {
        fontSize: 41,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Helvetica',
    },
    cellStyleFocused: {
        borderWidth: 1,
        width: 84,
        height: 84,
        backgroundColor: COLORS.inputBackgroundColor,
        borderColor: COLORS.main,
    },
})
