import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import {COLORS} from "../utils/colors";
import InputLight from "./InputLight";
import SubmitButton from "./SubmitButton";
import {Formik} from "formik";
import SuccessSubmitButton from "./SuccessSubmitButton";

export default function ProfileChange() {
    return (
        <>
            <Formik initialValues={{email: '', phone: ''}} onSubmit={() => {}}>
                    {({ handleSubmit }) => (
                        <View>
                            <InputLight
                                name={'email'}
                                type={'email'}
                                keyboard="default"
                                input={styles.input}
                                placeholder={'Email'}
                                placeholderTextColor={COLORS.placeholderTextColor}/>

                            <InputLight
                                name={'phone'}
                                type={'text'}
                                keyboard="default"
                                input={styles.input}
                                placeholder={'Ваш телефон'}
                                placeholderTextColor={COLORS.placeholderTextColor}/>


                            <SuccessSubmitButton
                                text={'Изменить'}
                                submitFunction={handleSubmit}
                            />

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>Выйти</Text>
                            </TouchableOpacity>
                        </View>
                    )}
            </Formik>
        </>
    )
}

const styles = StyleSheet.create({
    input : {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 20
    },
    button: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        color: COLORS.submitButtonBackground,
        fontFamily: 'Helvetica',
    }
})