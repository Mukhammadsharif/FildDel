import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native"
import { pixelSizeHorizontal, pixelSizeVertical } from "../utils/normalizeStyle"
import { COLORS } from "../utils/colors"
import InputLight from "../components/InputLight"
import { LeftRight, Polygon } from "../components/Svgs"
import { Formik } from "formik"
import Switch from "../components/Switch"
import Radio from "../components/Radio"
import TextArea from "../components/TextArea"
import SubmitButton from "../components/SubmitButton"
import CustomModal from '../components/Modal'
import UnSuccessContainer from "../components/UnSuccessContainer"
import SuccessContainer from "../components/SuccessContainer"

export default function PlusScreen() {
    const [toggle, setToggle] = useState(false)
    const [firstRadio, setFirstRadio] = useState(true)
    const [secondRadio, setSecondRadio] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [success, setSuccess] = useState(true)
    const [unSuccess, setUnSuccess] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            if(modalVisible) {
                 setUnSuccess(!unSuccess)
                 setSuccess(!success)
            }
            setModalVisible(false)
        }, 5000)
    }, [modalVisible])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>
                <View style={{paddingHorizontal: 15}}>
                    <Text style={styles.title}>Подбор доставки</Text>

                     <Formik initialValues={{from: '', to: '', convert: '', comments: '',}} onSubmit={() => {}}>
                        {({ handleSubmit }) => (

                            <View>
                                <Text style={styles.inputLabel}>Откуда</Text>

                                <View style={styles.addressContainer}>
                                    <InputLight
                                        name={'from'}
                                        type={'text'}
                                        keyboard="default"
                                        input={styles.addressInput}
                                        placeholder={'Введите адрес отправления'}
                                        placeholderTextColor={COLORS.placeholderTextColor}/>

                                    <TouchableOpacity style={styles.leftRightContainer}>
                                        <LeftRight/>
                                    </TouchableOpacity>
                                </View>

                                <Text style={styles.inputLabel}>Куда</Text>

                                <InputLight
                                    name={'to'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Введите адрес получателя'}
                                    placeholderTextColor={COLORS.placeholderTextColor}/>


                                <Text style={styles.inputLabel}>Способ доставки</Text>

                                <InputLight
                                    name={'to'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'От двери до двери'}
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    button={() => <Polygon/>}/>



                                <Text style={styles.inputLabel}>Вид груза</Text>

                                <InputLight
                                    name={'to'}
                                    type={'text'}
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder={'Конверт'}
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    button={() => <Polygon/>}/>


                                <View style={styles.loadContainer}>
                                    <View style={styles.load}>
                                        <Text style={styles.inputLabel}>Груз</Text>
                                        <InputLight
                                            name={'to'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'Автошины'}
                                            placeholderTextColor={COLORS.placeholderTextColor}
                                            button={() => <Polygon/>}/>
                                    </View>

                                    <View style={styles.weight}>
                                        <Text style={styles.inputLabel}>Вес, кг</Text>

                                        <InputLight
                                            name={'to'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'432'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>
                                </View>

                                <View style={styles.loadContainer}>
                                    <View style={{flex: 1, marginRight: 5}}>
                                        <Text style={!toggle ? styles.inputLabel : styles.inputLabelDisabled}>Объем, cм³</Text>

                                        <InputLight
                                            name={'to'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'1'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>

                                    <View style={{flex: 1, marginLeft: 5}}>
                                        <Text style={toggle ? styles.inputLabel : styles.inputLabelDisabled}>Кол-во мест</Text>

                                        <InputLight
                                            name={'to'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'123'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>
                                </View>

                                <View style={styles.switchContainer}>
                                    <Text style={!toggle ? styles.switchTextRight : styles.switchTextDisabledRight}>Расчет по объему</Text>

                                    <Switch toggle={toggle} setToggle={setToggle}/>

                                    <Text style={toggle ? styles.switchTextLeft : styles.switchTextDisabledLeft}>Расчет по кол-во мест</Text>
                                </View>

                                <Text style={styles.inputLabel}>Габариты, см</Text>

                                <View style={styles.loadContainer}>
                                    <View style={{flex: 1, marginLeft: 5}}>
                                        <InputLight
                                            name={'to'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'200'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>

                                    <View style={{flex: 1, marginHorizontal: 5}}>
                                        <InputLight
                                            name={'to'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'200'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>

                                    <View style={{flex: 1, marginRight: 5}}>
                                        <InputLight
                                            name={'to'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'200'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>
                                </View>

                                <View style={styles.insuranceContainer}>
                                    <View style={styles.insurance}>
                                        <Radio radio={firstRadio} setRadio={() => {
                                            setFirstRadio(true)
                                            setSecondRadio(false)
                                        }}/>

                                        <Text style={styles.insuranceText}>Обрешетка груза</Text>
                                    </View>

                                    <View style={styles.insurance}>
                                        <Radio radio={secondRadio} setRadio={() => {
                                            setFirstRadio(false)
                                            setSecondRadio(true)
                                        }}/>

                                        <Text style={styles.insuranceText}>Страховка груза</Text>
                                    </View>
                                </View>

                                <Text style={styles.inputLabel}>Комментарий</Text>

                                <View style={{marginRight: 5}}>
                                    <TextArea
                                        name={'comments'}
                                        value={'comments'}
                                        type={'text'}
                                        keyboard="default"
                                        placeholder={'Введите текст'}
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        multiline={true}
                                        maxLength={500}
                                        />
                                </View>

                                <SubmitButton text={'Сравнить цены'} submitFunction={() => setModalVisible(true)}/>
                            </View>
                        )}
                     </Formik>
                </View>

                { unSuccess && !success? (
                    <UnSuccessContainer/>
                ) : null }

                { success  && !unSuccess ? (
                    <SuccessContainer/>
                ) : null }



                <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
    },
    title: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        fontFamily: 'Helvetica',
        marginBottom: 10
    },
    addressContainer: {
        flexDirection: 'row',
    },
    addressInput: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
        width: '85%'
    },
    inputLabel: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: 'black'
    },
    leftRightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        marginTop: 5,
        marginLeft: -50
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
    },
    loadContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    load: {
        flex: 2
    },
    weight: {
        flex: 1,
        marginLeft: 10
    },
    inputLabelDisabled: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: COLORS.inputLabelDisabled,
    },
    switchContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    switchTextRight: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'right',
        flex: 2,
        marginRight: 8,
        color: 'black'
    },
    switchTextLeft: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'left',
        flex: 2,
        marginLeft: 8,
        color: 'black'
    },
    switchTextDisabledRight: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'right',
        color: COLORS.inputLabelDisabled,
        flex: 2,
        marginRight: 8,
    },
    switchTextDisabledLeft: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'left',
        color: COLORS.inputLabelDisabled,
        flex: 2,
        marginLeft: 8,
    },
    insuranceContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 7,
    },
    insurance: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    insuranceText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        lineHeight: 22,
        marginLeft: 5,
    }
})