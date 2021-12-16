import * as React from 'react';
import { Modal, TouchableOpacity, StyleSheet, View, Pressable, Text } from "react-native"
import { useNavigation } from '@react-navigation/native'
import { Card } from "react-native-paper";
import { Close } from "./Svgs";
import { COLORS } from "../utils/colors";
import {Formik} from "formik";
import InputLight from "./InputLight";
import SubmitButton from "./SubmitButton";


export default function RecomModal ({ modalVisible, setModalVisible })  {

    const navigation = useNavigation()
      return (
          <Modal
              onShow={() => setModalVisible(true)}
              onRequestClose={() => setModalVisible(false)}
              visible={modalVisible}
              animationType={'fade'}
              hardwareAccelerated={true}
              transparent={true}
              statusBarTranslucent>
              <TouchableOpacity style={styles.modalContainer}>
                  <Card>
                      <View style={styles.modalContent}>
                          <Pressable style={styles.icon} onPress={() => setModalVisible(false)}>
                              <Close/>
                          </Pressable>

                          <Text style={styles.title}>Обратная связь</Text>

                          <Text style={styles.subTitle}>
                              Оставьте заявку, наши специалисты
                              свяжутся с вами и учтут пожелания
                          </Text>

                          <Formik
                             initialValues={{name: '', phone: '', comments: ''}} onSubmit={() => {}}>
                            {({ handleSubmit }) => (
                                <View>
                                    <InputLight
                                        name={'size'}
                                        type={'text'}
                                        keyboard="default"
                                        input={styles.input}
                                        placeholder={'Введите имя'}
                                        placeholderTextColor={COLORS.placeholderTextColor}/>

                                    <InputLight
                                        name={'phone'}
                                        type={'text'}
                                        keyboard="default"
                                        input={styles.input}
                                        placeholder={'Введите телефон'}
                                        placeholderTextColor={COLORS.placeholderTextColor}/>

                                    <InputLight
                                        name={'comments'}
                                        type={'text'}
                                        keyboard="default"
                                        input={styles.textArea}
                                        placeholder={'Введите телефон'}
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        multiline={true}/>


                                    <SubmitButton
                                        text={'Отправить'}/>
                                </View>
                            )}
                          </Formik>

                          <Text style={styles.footerText}>
                              Нажимая на кнопку, вы соглашаетесь

                              <TouchableOpacity onPress={() => {
                                  setModalVisible(false)
                                  navigation.navigate('Politics')
                              }}>
                                  <Text style={{color: COLORS.main, textDecorationLine: 'underline'}}>
                                      с политикой конфиденциальности
                                  </Text>
                              </TouchableOpacity>
                          </Text>
                      </View>
                  </Card>
              </TouchableOpacity>
          </Modal>
      )

}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(66, 66, 66, 0.7)',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },
    modalContent: {
        height: 627,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingTop: 26,
        paddingBottom: 40,
        paddingHorizontal: 15,
    },
    icon: {
        paddingRight: 15,
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 26,
        lineHeight: 31,
        fontWeight: 'bold',
        color: COLORS.main,
        fontFamily: 'Helvetica',
        textAlign: 'center',
        marginTop: 36,
        marginBottom: 10,
    },
    subTitle: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 20,
    },
    textArea: {
        height: 100,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 20,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        color: '#686866',
        fontSize: 14,
        fontFamily: 'Helvetica',
        paddingVertical: 15,
    },
    footerText: {
        textAlign: 'center',
        marginTop: 30,
        paddingHorizontal: 60,
        fontSize: 14,
        fontFamily: 'Helvetica',
        lineHeight: 19,
    }
})
