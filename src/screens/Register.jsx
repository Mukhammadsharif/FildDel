import React, { useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Alert, Platform } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { pixelSizeHorizontal, pixelSizeVertical } from '../utils/normalizeStyle'
import InputLight from '../components/InputLight'
import { COLORS } from '../utils/colors'
import SubmitButton from '../components/SubmitButton'
import NavigationButton from '../components/NavigationButton'

export default function Register() {
    const navigation = useNavigation()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const onSubmit = async (info) => {
        const formData = new FormData()
        formData.append('email', info.email)
        if (info.email && info.email.includes('@')) {
            await fetch('https://finddel.ru/api/check_email_availability', {
                method: 'POST',
                headers: {
                    ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((s) => {
                    if (s.text === 'Email доступен для регистрации') {
                        getNumbers(formData)
                    } else {
                        Alert.alert(s.text)
                    }
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
        }
    }

    const getNumbers = async (formData) => {
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
                    navigation.navigate('ForgetPassword', { password, code: s.emailCode, email })
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
                <View style={{
                    paddingHorizontal: Platform.OS === 'ios' ? 30 : 0,
                    paddingTop: Platform.OS === 'ios' ? 50 : 0,
                }}>
                    <Text style={styles.title}>Регистрация</Text>
                    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
                        {({ handleSubmit }) => (
                            <View style={styles.inputContainer}>
                                <InputLight
                                    name="email"
                                    type="email"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="E-mail"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={email}
                                    onChange={setEmail} />

                                <InputLight
                                    name="password"
                                    type="password"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="Пароль"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={password}
                                    onChange={setPassword} />

                                <SubmitButton
                                    text="Получить код"
                                    submitFunction={handleSubmit}
                                />
                            </View>
                        )}
                    </Formik>

                    <NavigationButton
                        text="Вход"
                        submitFunction={() => navigation.navigate('Login')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(30),
        paddingTop: pixelSizeVertical(50),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
        justifyContent: 'space-around',
        height: '100%',
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 20,
    },
    title: {
        color: COLORS.main,
        fontSize: 26,
        lineHeight: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Helvetica',
    },
})
