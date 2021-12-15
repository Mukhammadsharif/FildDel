import React, { useState } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity, View, Text, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import { COLORS } from "../utils/colors";
import { Polygon } from "./Svgs";

export default function DropDown({ placeholder, selectedValue, setSelectedValue, data }) {
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
                                    onPress={() => setSelectedValue(item)}
                                    style={styles.dropDownItem}>
                                    <Text key={item} style={styles.itemText}>{ item }</Text>
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
        paddingLeft: 15,
    },
    polygon: {
        position: 'absolute',
        right: 21,
        top: 20,
    },
    placeholder: {
        color: COLORS.placeholderTextColor,
    },
    dropDownItem: {
        height: 40
    },
    itemText: {
        color: COLORS.placeholderTextColor,
    }
})