import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'
import {COLORS} from "../utils/colors";
import {MainScreenText} from "./Svgs";
import Iphone from '../assests/images/Iphone.png'
import Map from '../assests/images/Map.png'

export default function MainScreenBanner() {
    return (
        <View style={styles.bannerContainer}>
            <View style={styles.logoContainer}>
                <MainScreenText/>
            </View>

            <View style={styles.imageContainer}>
                <Image source={Iphone} style={styles.iphone}/>
                <Image source={Map} style={styles.map}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        width: '100%',
        height: 122,
        backgroundColor: COLORS.main,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iphone: {
        width: 90,
        height: 140
    },
    map: {
        width: 66,
        height: 114,
        marginTop: 26,
        marginLeft: -2,
    },
    logoContainer: {
        flex: 3,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 29
    },
    imageContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: -18,
        marginLeft: 15
    },
})