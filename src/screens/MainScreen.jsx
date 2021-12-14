import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView} from "react-native"
import {pixelSizeHorizontal, pixelSizeVertical} from "../utils/normalizeStyle";
import MainScreenBanner from "../components/MainScreenBanner";
import {COLORS} from "../utils/colors"
import { Card } from "react-native-paper"
import {Formik} from "formik";
import InputLight from "../components/InputLight";
import {
    CombinedIcon,
    LeftRight,
    EnergyIcon,
    LinesIcon,
    Dostavista,
    GTD,
    RGGroup,
    TNT,
    PEK,
    Baikal, KTC, FastPoint, Polygon
} from "../components/Svgs";
import SubmitButton from "../components/SubmitButton";

export default function MainScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <MainScreenBanner/>

            <Text style={styles.text}>Сравнить цены</Text>

             <Card style={styles.cardContainer}>
                 <Formik initialValues={{address: '', receive: '', convert: ''}} onSubmit={() => {}}>
                    {({ handleSubmit }) => (
                         <View>
                             <Text style={styles.inputLabel}>Откуда</Text>
                             <View style={styles.addressContainer}>
                                 <InputLight
                                     name={'address'}
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
                                     name={'receive'}
                                     type={'text'}
                                     keyboard="default"
                                     input={styles.input}
                                     placeholder={'Введите адрес отправления'}
                                     placeholderTextColor={COLORS.placeholderTextColor}/>

                             <Text style={styles.inputLabel}>Вид груза</Text>
                             <InputLight
                                     name={'convert'}
                                     type={'text'}
                                     keyboard="default"
                                     input={styles.input}
                                     placeholder={'Конверт'}
                                     placeholderTextColor={COLORS.placeholderTextColor}
                                     button={() => <Polygon/>}/>

                             <SubmitButton
                                text={'Сравнить цены'}
                                icon={<CombinedIcon style={{marginLeft: 10}}/>}/>
                         </View>
                    )}
                 </Formik>
             </Card>

             <View style={styles.logosContainer}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                     <View style={{flex: 1}}>
                            <View style={styles.card}>
                                <EnergyIcon/>
                            </View>

                            <View style={styles.card}>
                                <LinesIcon/>
                            </View>


                             <View style={styles.card}>
                                 <Dostavista/>
                             </View>

                             <View style={styles.card}>
                                 <GTD/>
                             </View>

                             <View style={styles.card}>
                                 <RGGroup/>
                             </View>
                     </View>

                     <View style={{flex: 1}}>
                            <View style={styles.card}>
                                <TNT/>
                            </View>

                            <View style={styles.card}>
                                <PEK/>
                            </View>


                             <View style={styles.card}>
                                 <Baikal/>
                             </View>

                             <View style={styles.card}>
                                 <KTC/>
                             </View>

                             <View style={styles.card}>
                                 <FastPoint/>
                             </View>
                     </View>
                 </View>
             </View>

             <Text style={styles.description}>Еще 1348 транспортных компаний</Text>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        paddingVertical: pixelSizeVertical(25),
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
    },
    cardContainer: {
        height: 395,
        width: '100%',
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 2,
        borderRadius: 0,
        flex: 6,
        paddingHorizontal: 20,
    },
    text: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        height: 67,
    },
    addressContainer: {
        flexDirection: 'row',
    },
    addressInput : {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
        width: '90%'
    },
    inputLabel: {
        marginTop: 20,
        fontSize: 16,
    },
    leftRightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -20
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
    },
    logosContainer: {
        height: 470,
        width: '100%',
        marginTop: 40,
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 2,
        borderRadius: 0,
        backgroundColor: '#FFFFFF'
    },
    card: {
        width: '100%',
        height: '20%',
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 1,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.main,
        paddingTop: 30,
        paddingBottom: 50
    }
})