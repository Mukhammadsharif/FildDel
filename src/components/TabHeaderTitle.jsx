import React from 'react'
import { View, StyleSheet, TouchableOpacity} from 'react-native'
import { TabHeaderLogo, TabHeaderProfile } from "./Svgs";

export default function TabHeaderTitle() {
    return (
        <View style={styles.container}>
            <TabHeaderLogo/>
            <TabHeaderProfile/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    }
})

