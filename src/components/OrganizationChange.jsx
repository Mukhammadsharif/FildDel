import React, { useContext, useState, useEffect } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert, Platform } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../utils/colors'
import InputLight from './InputLight'
import SuccessSubmitButton from './SuccessSubmitButton'
import { GlobalContext } from '../contexts/GlobalContext'

export default function OrganizationChange({ info }) {
    const [name, setName] = useState('')
    const [inn, setInn] = useState('')
    const [phone, setPhone] = useState('')
    const { signOut, doctorId } = useContext(GlobalContext)
    const navigation = useNavigation()

    const changeUser = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        formData.append('name', name)
        formData.append('inn', inn)
        formData.append('phone', phone)
        await fetch('https://finddel.ru/api/change_account', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((s) => {
                if (s) {
                    Alert.alert(s.text)
                    navigation.navigate('TabScreen')
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    useEffect(() => {
        if (info) {
            setName(info.name)
            setInn(info.inn)
            setPhone(info.phone)
        }
    }, [info])
    return (
        <>
            <Formik initialValues={{ name: '', phone: '', number: '' }} onSubmit={() => {}}>
                {({ handleSubmit }) => (
                    <View style={{ paddingHorizontal: Platform.OS === 'ios' ? 15 : 0 }}>
                        <InputLight
                            name="name"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Название компании"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={name}
                            onChange={setName} />

                        <InputLight
                            name="number"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="ИНН"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={inn}
                            onChange={setInn} />

                        <InputLight
                            name="phone"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Ваш телефон"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={phone}
                            onChange={setPhone} />

                        <SuccessSubmitButton
                            text="Изменить"
                            submitFunction={() => changeUser()}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                signOut()
                                navigation.navigate('Login')
                            }}
                        >
                            <Text style={styles.text}>Выйти</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 20,
    },
    button: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        color: COLORS.submitButtonBackground,
        fontFamily: 'Helvetica',
    },
})
