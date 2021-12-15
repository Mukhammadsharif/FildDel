import React from 'react'
import { View, StyleSheet, Text, KeyboardAvoidingView, ScrollView} from 'react-native'
import { Formik } from "formik";
import {pixelSizeHorizontal, pixelSizeVertical} from "../utils/normalizeStyle";
import InputLight from "../components/InputLight";
import {COLORS} from "../utils/colors";
import SubmitButton from "../components/SubmitButton";
import NavigationButton from "../components/NavigationButton";
import { useNavigation } from '@react-navigation/native'

export default function ResetPassword() {
    const navigation = useNavigation()
    return (
        <KeyboardAvoidingView style={styles.container} behavior={'height'}>
            <Text style={styles.title}>Восстановление пароля</Text>


                <Formik initialValues={{email: '', password: ''}} onSubmit={() => {}}>
                    {({ handleSubmit }) => (
                        <View style={styles.inputContainer}>
                            <InputLight
                                name={'email'}
                                type={'email'}
                                keyboard="default"
                                input={styles.input}
                                placeholder={'E-mail'}
                                placeholderTextColor={COLORS.placeholderTextColor}/>

                            <SubmitButton
                                text={'Получить код'}
                                submitFunction={() => navigation.navigate('ForgetPassword')}
                            />
                        </View>
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
        paddingBottom: pixelSizeVertical(310),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
    },
    input : {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 30
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