import React from 'react'
import { View, Text, StyleSheet, Image} from "react-native"
import { HeaderLogo, HeaderDescription} from "./Svgs";
import Iphone from '../assests/images/Iphone.png'
import Map from '../assests/images/Map.png'
import {COLORS} from "../utils/colors";
import {pixelSizeHorizontal, pixelSizeVertical} from "../utils/normalizeStyle";

export default function HeaderTitle() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.logoContainer}>
                    <HeaderLogo/>
                    <HeaderDescription/>
                </View>

                <View style={styles.imageContainer}>
                    <Image source={Iphone} style={styles.iphone}/>
                    <Image source={Map} style={styles.map}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: pixelSizeHorizontal(15),
        paddingVertical: pixelSizeVertical(30),
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        backgroundColor: COLORS.main,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10
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
        marginTop: -15
    },
    iphone: {
        width: 90,
        height: 140
    },
    map: {
        width: 66,
        height: 114
    }
})