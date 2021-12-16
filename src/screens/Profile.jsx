import React, { useState } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native'
import {COLORS} from "../utils/colors";
import {Card} from "react-native-paper";
import {Organization, User} from "../components/Svgs";
import ProfileCreate from "../components/ProfileCreate";
import OrganizationCreate from "../components/OrganizationCreate";

export default function Profile() {
    const [user, setUser] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Ваш кабинет</Text>

                <View style={styles.cardsContainer}>
                    <TouchableOpacity
                        style={{flex: 1, marginRight: 7.5}}
                        onPress={() => setUser(true)}>
                        <Card style={user ? styles.card : styles.cardDisabled}>
                            <View style={styles.iconContainer}>
                                <User/>
                            </View>

                            <Text style={user ? styles.text : styles.textDisabled}>Физ. лицо</Text>
                        </Card>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{flex: 1, marginLeft: 7.5}}
                        onPress={() => setUser(false)}>
                        <Card style={!user ? styles.card : styles.cardDisabled}>
                            <View style={styles.iconContainer}>
                                <Organization/>
                            </View>

                            <Text style={!user ? styles.text : styles.textDisabled}>Юр. лицо</Text>
                        </Card>
                    </TouchableOpacity>
                </View>

                { user ? <ProfileCreate/> : <OrganizationCreate/>}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 18,
        lineHeight: 21,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        marginBottom: 10,
    },
    cardDisabled: {
        height: 100,
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderColor: COLORS.shadowColor,
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15,
    },
    card: {
        height: 100,
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 15,
        borderColor: COLORS.main
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        color: 'black'
    },
    textDisabled: {
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        color: COLORS.iconInactiveColor,
    },
    iconContainer: {
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        backgroundColor: COLORS.iconColor,
        borderRadius: 25
    }
})