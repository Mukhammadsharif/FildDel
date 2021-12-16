import React from 'react'
import { View, StyleSheet, TouchableOpacity} from 'react-native'
import { TabHeaderLogo, TabHeaderProfile } from "./Svgs"
import { useNavigation } from '@react-navigation/native'

export default function ProfileHeaderTitle() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TabHeaderLogo/>
            <TouchableOpacity onPress={() => navigation.navigate('ProfileRegister')}>
                <TabHeaderProfile/>
            </TouchableOpacity>
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

