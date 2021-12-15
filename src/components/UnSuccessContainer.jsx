import React from 'react'
import {Text, StyleSheet, View} from "react-native";
import {COLORS} from "../utils/colors";
import RecommendationCard from "./RecommentdationCard";

export default function UnSuccessContainer() {
    return(
        <View style={{paddingHorizontal: 15}}>
            <Text style={styles.unSuccessText}>К сожалению, мы не нашли подходящих вариантов доставки</Text>

            <RecommendationCard/>
        </View>
    )
}

const styles = StyleSheet.create({
    unSuccessText: {
        fontSize: 16,
        lineHeight: 22,
        marginTop: 20,
        color: COLORS.unSuccessText,
    }
})