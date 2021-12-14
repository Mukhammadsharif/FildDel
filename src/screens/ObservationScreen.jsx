import React from 'react'
import { View, StyleSheet } from "react-native"
import {pixelSizeHorizontal, pixelSizeVertical} from "../utils/normalizeStyle";
import MainScreenBanner from "../components/MainScreenBanner";
import {COLORS} from "../utils/colors";

export default function ObservationScreen() {
    return (
        <View style={styles.container}>
            <MainScreenBanner/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        paddingVertical: pixelSizeVertical(25),
        backgroundColor: COLORS.mainBackground,
        flex: 1,
    }
})