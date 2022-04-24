import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { COLORS } from '../utils/colors'

export default function SuccessDetail({ item, selectedOffer, setSelectedOffer, setPrice }) {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const getSize = async () => {
        Image.getSize(`https://finddel.ru/assets/images/content/logos/${item.company_logo.replace('svg', 'png')}`, (w, h) => {
            setWidth(w)
            setHeight(h)
        })
    }

    useEffect(() => { getSize() }, [item])
    return (
        <TouchableOpacity
            style={item.offer_id === selectedOffer.offer_id ? styles.cardSelected : styles.card}
            onPress={() => {
                setSelectedOffer({})
                setSelectedOffer(item)
                setPrice(item.price)
            }}>

            <View style={{ width: '65%' }}>
                <Image
                    source={{ uri: `https://finddel.ru/assets/images/content/logos/${item.company_logo.replace('svg', 'png')}` }}
                    style={{ width, height }} />
            </View>

            <View style={{ width: '35%' }}>
                <Text style={styles.description}>
                    {/* eslint-disable-next-line max-len */}
                    {item.term.includes('менеджер') ? 'Уточняйте у менеджера' : `${item.term} дней,`}      {item.term.includes('менеджер') ? '' : `${item.price} ₽`}
                </Text>
            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 89,
        borderBottomWidth: 1,
        borderColor: COLORS.cardSelected,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    cardSelected: {
        height: 89,
        borderBottomWidth: 1,
        borderColor: COLORS.cardSelected,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: COLORS.cardSelected,
        paddingLeft: 15,
    },
    descriptionContainer: {
        flex: 1.35,
        alignItems: 'center',
    },
    description: {
        fontSize: 16,
        lineHeight: 22,
        fontFamily: 'Helvetica',
        flex: 1,
        paddingRight: 24,
        color: COLORS.placeholderTextColor,
        paddingLeft: 15,
        paddingTop: 13,
    },
})
