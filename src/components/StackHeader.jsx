import React from 'react'
import { View, StyleSheet, TouchableOpacity} from 'react-native'
import {LeftIcon, StackLogo, TabHeaderProfile} from "./Svgs"
import { useNavigation } from '@react-navigation/native'

export default function StackHeader() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftIcon/>
            </TouchableOpacity>

            <StackLogo/>

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
        marginBottom: 8,
    }
})