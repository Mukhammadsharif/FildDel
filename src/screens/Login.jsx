import React, { useState, useContext } from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView, Alert } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { pixelSizeHorizontal, pixelSizeVertical } from '../utils/normalizeStyle'
import InputLight from '../components/InputLight'
import { COLORS } from '../utils/colors'
import SubmitButton from '../components/SubmitButton'
import NavigationButton from '../components/NavigationButton'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Login() {
    const navigation = useNavigation()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const { setId } = useContext(GlobalContext)

    const login = async () => {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('password', password)
        if (email && email.includes('@')) {
            await fetch('https://finddel.ru/api/login', {
                method: 'POST',
                headers: {
                    ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((s) => {
                    if (s.clientId) {
                        setId(s.clientId)
                        navigation.navigate('TabScreen')
                    } else {
                        Alert.alert(s.text)
                    }
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="height">
            <Text style={styles.title}>Вход</Text>

            <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
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
                            text="Войти"
                            submitFunction={() => login()}
                        />
                    </View>
                )}
            </Formik>

            <NavigationButton
                text="Забыл пароль"
                submitFunction={() => navigation.navigate('ResetPassword')}
            />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(30),
        paddingTop: pixelSizeVertical(50),
        paddingBottom: pixelSizeVertical(230),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
        justifyContent: 'space-around',
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
    inputContainer: {

    },
})
