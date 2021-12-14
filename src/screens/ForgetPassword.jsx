import React, { useState } from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView} from 'react-native'
import { Formik } from "formik";
import {pixelSizeHorizontal, pixelSizeVertical} from "../utils/normalizeStyle";
import {COLORS} from "../utils/colors";
import SubmitButton from "../components/SubmitButton";
import SecondSubmitButton from '../components/SecondSubmitButton'
import NavigationButton from "../components/NavigationButton";
import { useNavigation } from '@react-navigation/native'
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

export default function ForgetPassword() {
    const navigation = useNavigation()
    const [code, setCode] = useState('')
    const [submitted, setSubmitted] = useState(false)

    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <Text style={styles.title}>Введите код</Text>

            <Text style={styles.description}>
                Код отправлен на почту example1@mail.ru.
                Если не пришло письмо, проверьте «спам»
            </Text>


                <Formik initialValues={{code: ''}} onSubmit={() => {}}>
                    {({ handleSubmit }) => (
                        <>
                            <View style={styles.inputContainer}>
                                <SmoothPinCodeInput
                                    value={code}
                                    onTextChange={(value) => setCode(value)}
                                    cellStyle={styles.cellStyle}
                                    textStyle={styles.textStyle}
                                    cellStyleFocused={styles.cellStyleFocused}
                                    autoFocus={true}
                                    onFulfill={() => setSubmitted(true)}/>
                            </View>

                            {!submitted ? (
                                <SubmitButton
                                    text={'Отправить еще раз'}
                                    submitFunction={handleSubmit}/>
                            ) : (
                                <SecondSubmitButton
                                    text={'Войти'}
                                    submitFunction={() => {
                                       navigation.navigate('TabScreen')
                                    }}/>
                            )}
                        </>
                    )}
                </Formik>

                <NavigationButton
                    text={'Назад'}
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
        justifyContent: 'space-around'
    },
    input : {
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
        borderRadius: 3
    },
    inputContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    description: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 10,
        fontFamily: 'Helvetica',
    },
    textStyle: {
        fontSize: 41,
        fontWeight: 'bold',
        color: 'black',
        fontFamily: 'Helvetica',
    },
    cellStyleFocused:{
        borderWidth: 1,
        width: 84,
        height: 84,
        backgroundColor: COLORS.inputBackgroundColor,
        borderColor: COLORS.main,
    }
})