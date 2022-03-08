import React, { useState } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, View, Text, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../utils/colors";
import { Polygon } from "./Svgs";

export default function BigDropDown({ placeholder, selectedValue, setSelectedValue, data }) {
    const [visible, setVisible] = useState(false)
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => setVisible(!visible)}>
                <Text style={styles.placeholder}>{ selectedValue === '' ? placeholder : selectedValue }</Text>

                <Polygon style={styles.polygon}/>
            </TouchableOpacity>

            { visible ? (
                <TouchableWithoutFeedback>
                    <ScrollView
                        style={styles.scroll}
                        showsVerticalScrollIndicator={true}
                        nestedScrollEnabled={true}>
                            {data ? data.map((item) => (
                                <TouchableOpacity
                                    onPress={() => setSelectedValue(item.name)}
                                    style={styles.dropDownItem}>
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <View style={{flex: 1, flexDirection: 'row'}}>
                                            {item.icon}
                                            <Text style={styles.dropText}>{item.name}</Text>
                                        </View>
                                        <Text style={styles.placeholder}>{item.size}</Text>
                                    </View>

                                    <Text style={styles.placeholder}>{item.description}</Text>
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
        paddingTop: 13
    },
    scroll: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        height: 100,
        zIndex: 1,
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
        fontFamily: 'Helvetica'
    },
    dropText: {
        color: COLORS.placeholderTextColor,
        fontFamily: 'Helvetica',
        marginLeft: 5,
    },
    dropDownItem: {
        height: 120,
        paddingTop: 25,
        paddingBottom: 40
    },
    itemText: {
        color: COLORS.placeholderTextColor,
    }
})
