import React from 'react'
import {TouchableOpacity, View, StyleSheet} from "react-native";
import {COLORS} from "../utils/colors";

export default function Switch({ toggle, setToggle}) {
    return (
        <TouchableOpacity
            style={styles.switch}
            onPress={() => setToggle(!toggle)}>
            <View style={toggle ? styles.toggleButtonOff : styles.toggleButtonOn}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    switch: {
        flex: 0.5,
        width: 31,
        height: 25,
        borderColor: COLORS.main,
        borderWidth: 1,
        borderRadius: 15,
        justifyContent: 'center',
    },
    toggleButtonOn: {
        width: 15,
        height: 15,
        backgroundColor: COLORS.main,
        borderRadius: 25,
        marginHorizontal: 3,
        alignSelf: 'flex-start'
    },
    toggleButtonOff: {
        width: 15,
        height: 15,
        backgroundColor: COLORS.main,
        borderRadius: 25,
        marginHorizontal: 3,
        alignSelf: 'flex-end',
    }
})