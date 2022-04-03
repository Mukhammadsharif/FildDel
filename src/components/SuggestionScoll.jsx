import React, { useState } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, View, Text, TouchableWithoutFeedback, Platform } from 'react-native'
import { COLORS } from '../utils/colors'

export default function SuggestionScroll({ selectedValue, setSelectedValue, data, visible, setVisible }) {
    return (
        <View style={Platform.OS === 'ios' ? { zIndex: 10 } : null}>
            { visible ? (
                <TouchableWithoutFeedback>
                    <ScrollView
                        style={styles.scroll}
                        showsVerticalScrollIndicator
                        nestedScrollEnabled>
                        {data ? data.map((item) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setSelectedValue(item.value)
                                    setVisible(!visible)
                                }}
                                style={styles.dropDownItem}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={styles.dropText}>{item.value}</Text>
                                </View>
                            </TouchableOpacity>
                        )) : null}
                    </ScrollView>
                </TouchableWithoutFeedback>
            ) : null }
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        marginTop: 5,
        backgroundColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        paddingHorizontal: 15,
        paddingTop: 13,
    },
    scroll: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        zIndex: 3,
        flex: 1,
        backgroundColor: COLORS.inputBackgroundColor,
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    polygon: {
        position: 'absolute',
        right: 21,
        top: 20,
    },
    placeholder: {
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
    },
    dropText: {
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
        marginLeft: 5,
    },
    dropDownItem: {
        height: 30,
        paddingTop: 2,
        paddingBottom: 2,
    },
    itemText: {
        color: COLORS.placeholderTextColor,
    },
})
