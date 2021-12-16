import React, { useState } from 'react'
import {View, StyleSheet, ScrollView, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import {Card} from "react-native-paper";
import {BigUser, Organization, User} from "../components/Svgs";
import ProfileCreate from "../components/ProfileCreate";
import OrganizationCreate from "../components/OrganizationCreate";
import ProfileChange from "../components/ProfileChange";
import OrganizationChange from "../components/OrganizationChange";
import {COLORS} from "../utils/colors";

export default function ProfileRegister({ route }) {
    const [user, setUser] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Ваш кабинет</Text>

                <View style={styles.cardsContainer}>
                    {user ? (
                        <TouchableOpacity
                            style={{flex: 1}}
                            onPress={() => setUser(!user)}>
                            <Card>
                                <View style={styles.card}>
                                    <View style={styles.iconContainer}>
                                        <BigUser/>
                                    </View>

                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>Иванов Иван Иванович</Text>
                                        <Text style={styles.textDisabled}>Загрузить аватар</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                    ): (
                        <TouchableOpacity
                            style={{flex: 1}}
                            onPress={() => setUser(!user)}>
                            <Card>
                                <View style={styles.card}>
                                    <View style={styles.iconContainer}>
                                        <BigUser/>
                                    </View>

                                    <View style={styles.textContainer}>
                                        <Text style={styles.text}>ООО “Название”</Text>
                                        <Text style={styles.textDisabled}>Изменить логотип</Text>
                                    </View>
                                </View>
                            </Card>
                        </TouchableOpacity>
                        )}
                </View>

                { user ? <ProfileChange/> : <OrganizationChange/>}
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
    card: {
        height: 100,
        shadowColor: COLORS.shadowColor,
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 20,
        borderColor: COLORS.main,
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        color: 'black'
    },
    textDisabled: {
        fontSize: 14,
        lineHeight: 17.5,
        fontFamily: 'Helvetica',
        color: COLORS.placeholderTextColor,
    },
    textContainer: {
        marginLeft: 16,
    }
})