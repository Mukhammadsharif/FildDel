import React, { useContext, useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, Alert } from 'react-native'
import { Card } from 'react-native-paper'
import { Formik } from 'formik'
import { pixelSizeHorizontal } from '../utils/normalizeStyle'
import { COLORS } from '../utils/colors'
import InputLight from '../components/InputLight'
import { CombinedIcon } from '../components/Svgs'
import SubmitButton from '../components/SubmitButton'
import Logos from '../components/Logos'
import { GlobalContext } from '../contexts/GlobalContext'

export default function ObservationScreen() {
    const [number, setNumber] = useState('')
    const [result, setResult] = useState('')
    const { doctorId } = useContext(GlobalContext)
    const getOrderDetail = async (orderId) => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        formData.append('order_id', orderId)
        await fetch('https://finddel.ru/api/order_info', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then(async (s) => {
                if (s) {
                    console.log(s)
                    setResult(s.order_status)
                } else {
                    Alert.alert(s.text)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    useEffect(() => {
        if (number === '') {
            setResult('')
        }
    }, [number])
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={styles.title}>Отследить заказ</Text>
                <Card style={styles.cardContainer}>
                    <Text style={styles.cardNumber}>Введите номер заказа</Text>

                    <Formik initialValues={{ number: '' }} onSubmit={() => {}}>
                        {({ handleSubmit }) => (
                            <View>
                                <InputLight
                                    name="receive"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="1234567890"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={number}
                                    onChange={setNumber} />

                                {result ? (
                                    <Text style={styles.cardNumber}>{result}</Text>
                                ) : null}

                                <SubmitButton
                                    text="Отследить"
                                    icon={<CombinedIcon style={{ marginLeft: 10 }} />}
                                    submitFunction={() => getOrderDetail(number)} />
                            </View>
                        )}
                    </Formik>
                </Card>

                <Logos />

                <Text style={styles.description}>Еще 1348 транспортных компаний</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
    },
    cardContainer: {
        width: '100%',
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 2,
        borderRadius: 0,
        flex: 6,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    title: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        height: 62,
        fontFamily: 'Helvetica',
    },
    cardNumber: {
        marginTop: 20,
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        fontWeight: '300',
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.main,
        paddingTop: 30,
        paddingBottom: 50,
    },
})
