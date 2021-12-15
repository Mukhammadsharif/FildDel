import * as React from 'react';
import { Modal, TouchableOpacity, StyleSheet, View } from "react-native";
import { Card } from "react-native-paper";
import { LoadingText } from "./Svgs";
import Spinner from 'react-native-spinkit'
import { COLORS } from "../utils/colors";


export default function CustomModal ({ modalVisible, setModalVisible })  {

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
                      <Spinner
                        type={'Circle'}
                        color={COLORS.main}
                        size={120}/>
                      <LoadingText style={{marginTop: 31}}/>
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
        height: 500,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
