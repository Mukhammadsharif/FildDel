import React, { useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, ScrollView, Alert, Platform } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { pixelSizeHorizontal, pixelSizeVertical } from '../utils/normalizeStyle'
import InputLight from '../components/InputLight'
import { COLORS } from '../utils/colors'
import SubmitButton from '../components/SubmitButton'
import NavigationButton from '../components/NavigationButton'

export default function ResetPassword() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')

    const resetPassword = async () => {
        const formData = new FormData()
        formData.append('username', email)
        if (email && email.includes('@')) {
            await fetch('https://finddel.ru/api/repair_password', {
                method: 'POST',
                headers: {
                    ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
                },
                body: formData,
            })
                .then((response) => response.json())
                .then((s) => {
                    Alert.alert(s.text)
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    paddingHorizontal: Platform.OS === 'ios' ? 30 : 0,
                    paddingTop: Platform.OS === 'ios' ? 50 : 0,
                }}>
                    <Text style={styles.title}>Восстановление пароля</Text>

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

                                <SubmitButton
                                    text="Получить код"
                                    submitFunction={() => resetPassword()}
                                />
                            </View>
                        )}
                    </Formik>

                    <NavigationButton
                        text="Назад"
                        submitFunction={() => navigation.goBack()}
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
        height: '100%',
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 30,
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
