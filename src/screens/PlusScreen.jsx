import React, { useState, useEffect } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity } from "react-native"
import { pixelSizeHorizontal, pixelSizeVertical } from "../utils/normalizeStyle"
import { COLORS } from "../utils/colors"
import InputLight from "../components/InputLight"
import {BigTruck, Box, Convert, Dangerous, LeftRight, Paket, Palet, Polygon, Telejka, Truck} from "../components/Svgs"
import { Formik } from "formik"
import Switch from "../components/Switch"
import Radio from "../components/Radio"
import TextArea from "../components/TextArea"
import SubmitButton from "../components/SubmitButton"
import CustomModal from '../components/Modal'
import UnSuccessContainer from "../components/UnSuccessContainer"
import SuccessContainer from "../components/SuccessContainer"
import DropDown from "../components/DropDown";
import BigDropDown from "../components/BigDropDown";

export default function PlusScreen() {
    const [toggle, setToggle] = useState(false)
    const [firstRadio, setFirstRadio] = useState(true)
    const [secondRadio, setSecondRadio] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [success, setSuccess] = useState(true)
    const [unSuccess, setUnSuccess] = useState(false)
    const [delivery, setDelivery] = useState('')
    const [cargo, setCargo] = useState('')
    const [typeCargo, setTypeCargo] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const data = [
        { name: 'Конверт', size: '35x25x5 см / до 2 кг', description: 'Маленькие предметы: документы,бижутерия, аксессуары', icon: (<Convert/>) },
        { name: 'Пакет', size: '40х30х20 см / до 5 кг', description: 'Небольшие отправления обувь, одежда, мелкая техника', icon: (<Paket/>) },
        { name: 'Коробка', size: '60х40х30 см / до 20 кг', description: 'Средний размер: набор посуды, домашний текстиль', icon: (<Box/>) },
        { name: 'Тележка', size: '100x50x50 см / до 50 кг', description: 'Тяжелая большая посылка: велосипед,крупная кухонная техника', icon: (<Telejka/>) },
        { name: 'Палет', size: '120x80x80 см / от 50 кг', description: 'Крупный груз: мебель, крупная бытовая техника', icon: (<Palet/>) },
        { name: 'Фургон', size: '200x90x90 см / от 5 тонн', description: 'Крупный груз: мебель, крупная техника,инструменты', icon: (<Truck/>) },
        { name: 'Фура', size: '300x100x100 см / от 10 тонн', description: 'Крупный груз: крупная техника, машины, спецтехника', icon: (<BigTruck/>) },
        { name: 'Опасный груз', size: '', description: 'Взрывчатые материалы, газы,легковоспламеняющиеся жидкости', icon: (<Dangerous/>) },
    ]

    const deliveryData = ['Склад-склад', 'Склад-дверь', 'От двери до двери', 'Дверь-склад']
    const cargoData = ['Автомашины', 'Арматура', 'Бумага', 'Бытовая техника', 'Вагонка']

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

                     <Formik
                         initialValues={{from: '',
                                         to: '',
                                         shape: '',
                                         length: '',
                                         width: '',
                                         height: '',
                                         comments: '',
                                         size: '',
                                         count: '',
                                         weight: '',
                                        }}
                         onSubmit={() => {}}>
                        {({ handleSubmit, setFieldValue }) => (

                            <View>
                                <Text style={styles.inputLabel}>Откуда</Text>

                                <View style={styles.addressContainer}>
                                    <InputLight
                                        name='from'
                                        type={'text'}
                                        keyboard="default"
                                        input={styles.addressInput}
                                        placeholder={'Введите адрес отправления'}
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        onChange={(e) => setFieldValue('from', e)}/>

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
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    onChange={(e) => setFieldValue('to', e)}/>


                                <Text style={styles.inputLabel}>Способ доставки</Text>

                                <DropDown
                                    placeholder={deliveryData[0]}
                                    data={deliveryData}
                                    selectedValue={delivery}
                                    setSelectedValue={setDelivery}/>



                                <Text style={styles.inputLabel}>Вид груза</Text>

                                <BigDropDown
                                     selectedValue={selectedValue}
                                     setSelectedValue={setSelectedValue}
                                     placeholder={'Конверт'}
                                     data={data}/>


                                <View style={styles.loadContainer}>
                                    <View style={styles.load}>
                                        <Text style={styles.inputLabel}>Груз</Text>
                                        <DropDown
                                            data={cargoData}
                                            selectedValue={cargo}
                                            setSelectedValue={setCargo}
                                        />
                                    </View>

                                    <View style={styles.weight}>
                                        <Text style={styles.inputLabel}>Вес, кг</Text>

                                        <InputLight
                                            name={'weight'}
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
                                            name={'size'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'1'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>

                                    <View style={{flex: 1, marginLeft: 5}}>
                                        <Text style={toggle ? styles.inputLabel : styles.inputLabelDisabled}>Кол-во мест</Text>

                                        <InputLight
                                            name={'count'}
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
                                            name={'length'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'200'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>

                                    <View style={{flex: 1, marginHorizontal: 5}}>
                                        <InputLight
                                            name={'width'}
                                            type={'text'}
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder={'200'}
                                            placeholderTextColor={COLORS.placeholderTextColor}/>
                                    </View>

                                    <View style={{flex: 1, marginRight: 5}}>
                                        <InputLight
                                            name={'height'}
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
                                            setFirstRadio(!firstRadio)
                                        }}/>

                                        <Text style={styles.insuranceText}>Обрешетка груза</Text>
                                    </View>

                                    <View style={styles.insurance}>
                                        <Radio radio={secondRadio} setRadio={() => {
                                            setSecondRadio(!secondRadio)
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
                                        maxLength={500}/>
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