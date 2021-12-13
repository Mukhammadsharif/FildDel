import React, { useEffect } from "react"
import { View, StyleSheet, Text} from "react-native"
import { MainLogo, LogoDescription } from "../components/Svgs"
import { useNavigation } from '@react-navigation/native'
import {heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel} from "../utils/normalizeStyle";
import {COLORS} from "../utils/colors";

export default function FirstScreen() {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.navigate('Register')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <MainLogo/>
                    <Text style={styles.logoText}>Сервис подбора доставки</Text>
                </View>

                <View style={styles.descriptionContainer}>
                    <LogoDescription/>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: pixelSizeHorizontal(15),
        paddingTop: pixelSizeVertical(80),
        paddingBottom: pixelSizeVertical(90),
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.mainBackground
    },
    content: {
        backgroundColor: COLORS.main,
        width: '100%',
        height: '100%',
        borderRadius: 10,
        flex: 1
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    descriptionContainer: {
        flex: 1,
        marginLeft: -10
    },
    logoText: {
        color: COLORS.mainText,
        fontSize: 20,
        fontWeight: '300',
        marginTop: pixelSizeVertical(19),
    }
})