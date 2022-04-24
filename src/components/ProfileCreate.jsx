import React, { useState, useContext } from 'react'
import { View, StyleSheet, Alert, Platform } from 'react-native'
import { Formik } from 'formik'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../utils/colors'
import InputLight from './InputLight'
import SuccessSubmitButton from './SuccessSubmitButton'
import { GlobalContext } from '../contexts/GlobalContext'

export default function ProfileCreate({ info }) {
    const [surname, setSurname] = useState('')
    const [name, setName] = useState('')
    const [fullname, setFullname] = useState('')
    const [phone, setPhone] = useState('')
    const { doctorId } = useContext(GlobalContext)
    const navigation = useNavigation()

    const changeUser = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        formData.append('surname', surname)
        formData.append('name', name)
        formData.append('patronymic', fullname)
        formData.append('phone', phone)
        formData.append('type_user', 'Физическое лицо')
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
            <Formik initialValues={{ surname: '', name: '', fullname: '', phone: '' }} onSubmit={() => {}}>
                {({ handleSubmit }) => (
                    <View style={{ paddingHorizontal: Platform.OS === 'ios' ? 15 : 0 }}>
                        <InputLight
                            name="surname"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Фамилия"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={surname}
                            onChange={setSurname} />

                        <InputLight
                            name="name"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Имя"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={name}
                            onChange={setName} />

                        <InputLight
                            name="fullname"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Отчество"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={fullname}
                            onChange={setFullname} />

                        <InputLight
                            name="phone"
                            type="text"
                            keyboard="default"
                            input={styles.input}
                            placeholder="Телефон"
                            placeholderTextColor={COLORS.placeholderTextColor}
                            value={phone}
                            onChange={setPhone} />

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
