import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import {COLORS} from "../utils/colors";
import InputLight from "./InputLight";
import SubmitButton from "./SubmitButton";
import {Formik} from "formik";
import SuccessSubmitButton from "./SuccessSubmitButton";

export default function ProfileCreate() {
    return (
        <>
            <Formik initialValues={{surname: '', name: '', fullname: '', phone: ''}} onSubmit={() => {}}>
                    {({ handleSubmit }) => (
                        <View>
                            <InputLight
                                name={'surname'}
                                type={'text'}
                                keyboard="default"
                                input={styles.input}
                                placeholder={'Фамилия'}
                                placeholderTextColor={COLORS.placeholderTextColor}/>

                            <InputLight
                                name={'name'}
                                type={'text'}
                                keyboard="default"
                                input={styles.input}
                                placeholder={'Имя'}
                                placeholderTextColor={COLORS.placeholderTextColor}/>

                            <InputLight
                                name={'fullname'}
                                type={'text'}
                                keyboard="default"
                                input={styles.input}
                                placeholder={'Отчество'}
                                placeholderTextColor={COLORS.placeholderTextColor}/>


                            <InputLight
                                name={'phone'}
                                type={'text'}
                                keyboard="default"
                                input={styles.input}
                                placeholder={'Телефон'}
                                placeholderTextColor={COLORS.placeholderTextColor}/>

                            <SuccessSubmitButton
                                text={'Создать'}
                                submitFunction={handleSubmit}
                            />
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
})