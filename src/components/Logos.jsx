import React from 'react'
import {View, StyleSheet} from "react-native";
import {Baikal, Dostavista, EnergyIcon, FastPoint, GTD, KTC, LinesIcon, PEK, RGGroup, TNT} from "./Svgs";
import {COLORS} from "../utils/colors";

export default function Logos() {
    return (
        <View style={styles.logosContainer}>
                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                     <View style={{flex: 1}}>
                            <View style={styles.card}>
                                <EnergyIcon/>
                            </View>

                            <View style={styles.card}>
                                <LinesIcon/>
                            </View>


                             <View style={styles.card}>
                                 <Dostavista/>
                             </View>

                             <View style={styles.card}>
                                 <GTD/>
                             </View>

                             <View style={styles.card}>
                                 <RGGroup/>
                             </View>
                     </View>

                     <View style={{flex: 1}}>
                            <View style={styles.card}>
                                <TNT/>
                            </View>

                            <View style={styles.card}>
                                <PEK/>
                            </View>


                             <View style={styles.card}>
                                 <Baikal/>
                             </View>

                             <View style={styles.card}>
                                 <KTC/>
                             </View>

                             <View style={styles.card}>
                                 <FastPoint/>
                             </View>
                     </View>
                 </View>
             </View>
    )
}

const styles = StyleSheet.create({
    logosContainer: {
        height: 470,
        width: '100%',
        marginTop: 40,
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 2,
        borderRadius: 0,
        backgroundColor: '#FFFFFF'
    },
    card: {
        width: '100%',
        height: '20%',
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 1,
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
})