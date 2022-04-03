import React, { useState, useContext } from 'react'
import { View, StyleSheet, Alert, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../utils/colors'
import InputLight from './InputLight'
import SubmitButton from './SubmitButton'
import SuccessSubmitButton from './SuccessSubmitButton'
import { GlobalContext } from '../contexts/GlobalContext'

export default function OrganizationCreate() {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const { doctorId } = useContext(GlobalContext)
    const navigation = useNavigation()

    const changeUser = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        formData.append('surname', surname)
        formData.append('name', name)
        formData.append('type_user', 'Юридическое лицо')
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
                    navigation.navigate('ProfileRegister')
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    return (
        <>
            <Formik initialValues={{ name: '', number: '' }} onSubmit={() => {}}>
                {({ handleSubmit }) => (
                    <View>
                        <InputLight
                            name="surname"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Фамилия"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={surname}
                            onChange={setSurname}
                        />

                        <InputLight
                            name="name"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Имя"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={name}
                            onChange={setName}
                        />

                        <SuccessSubmitButton
                            text="Создать"
                            submitFunction={() => changeUser()}
                        />
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
})
