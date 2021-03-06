import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Alert, Platform } from 'react-native'
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
                if (s.text === '?????????????????????? ???????????? ??????????????') {
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
                Alert.alert('???????????????? ??????')
            }
        }

        return () => setLoading(!loading)
    }, [loading])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    paddingHorizontal: Platform.OS === 'ios' ? 30 : 0,
                    paddingTop: Platform.OS === 'ios' ? 50 : 0,
                }}>
                    <Text style={styles.title}>?????????????? ??????</Text>

                    <Text style={styles.description}>
                        ?????? ?????????????????? ???? ?????????? {email} ???????? ???? ???????????? ????????????, ?????????????????? ????????????
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
                                            text="?????????????????? ?????? ??????"
                                            submitFunction={() => {
                                                getNumbers()
                                                setCode('')
                                            }} />
                                    ) : (
                                        <SecondSubmitButton
                                            text="??????????"
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
                        text="??????????"
                        submitFunction={() => navigation.goBack()}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(20),
        paddingTop: pixelSizeVertical(50),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
        height: '100%',
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
