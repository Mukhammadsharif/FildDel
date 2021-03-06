import React, { useState, useEffect, useContext, useRef } from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity, Alert } from 'react-native'
import { Formik } from 'formik'
import { COLORS } from '../utils/colors'
import InputLight from '../components/InputLight'
import { BigTruck, Box, Convert, Dangerous, LeftRight, Paket, Palet, Telejka, Truck } from '../components/Svgs'
import Switch from '../components/Switch'
import Radio from '../components/Radio'
import TextArea from '../components/TextArea'
import SubmitButton from '../components/SubmitButton'
import CustomModal from '../components/Modal'
import UnSuccessContainer from '../components/UnSuccessContainer'
import SuccessContainer from '../components/SuccessContainer'
import DropDown from '../components/DropDown'
import BigDropDown from '../components/BigDropDown'
import SuggestionScroll from '../components/SuggestionScoll'
import { cargoData } from '../utils/data'
import { GlobalContext } from '../contexts/GlobalContext'

export default function PlusScreen() {
    const [toggle, setToggle] = useState(false)
    const [firstRadio, setFirstRadio] = useState(true)
    const [secondRadio, setSecondRadio] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [fromSug, setFromSug] = useState(false)
    const [toSug, setToSug] = useState(false)
    const [delivery, setDelivery] = useState('')
    const [cargo, setCargo] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [length, setLength] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [comment, setComment] = useState('')
    const [size, setSize] = useState('')
    const [weight, setWeight] = useState('')
    const [count, setCount] = useState('')
    const [offers, setOffers] = useState(null)
    const [suggestions, setSuggestions] = useState('')
    const [toSuggestions, setToSuggestions] = useState('')
    const [selectedOffer, setSelectedOffer] = useState({})
    const [loading, setLoading] = useState('0')
    const { doctorId, fromAddress, toAddress, type } = useContext(GlobalContext)
    const scrollViewRef = useRef()

    const data = [
        { name: '??????????????',
            size: '35x25x5 ???? / ???? 2 ????',
            description: '?????????????????? ????????????????: ??????????????????,??????????????????, ????????????????????',
            icon: (<Convert />) },
        { name: '??????????',
            size: '40??30??20 ???? / ???? 5 ????',
            description: '?????????????????? ?????????????????????? ??????????, ????????????, ???????????? ??????????????',
            icon: (<Paket />) },
        { name: '??????????????',
            size: '60??40??30 ???? / ???? 20 ????',
            description: '?????????????? ????????????: ?????????? ????????????, ???????????????? ????????????????',
            icon: (<Box />) },
        { name: '??????????????',
            size: '100x50x50 ???? / ???? 50 ????',
            description: '?????????????? ?????????????? ??????????????: ??????????????????,?????????????? ???????????????? ??????????????',
            icon: (<Telejka />) },
        { name: '??????????',
            size: '120x80x80 ???? / ???? 50 ????',
            description: '?????????????? ????????: ????????????, ?????????????? ?????????????? ??????????????',
            icon: (<Palet />) },
        { name: '????????????',
            size: '200x90x90 ???? / ???? 5 ????????',
            description: '?????????????? ????????: ????????????, ?????????????? ??????????????,??????????????????????',
            icon: (<Truck />) },
        { name: '????????',
            size: '300x100x100 ???? / ???? 10 ????????',
            description: '?????????????? ????????: ?????????????? ??????????????, ????????????, ??????????????????????',
            icon: (<BigTruck />) },
        { name: '?????????????? ????????',
            size: '',
            description: '???????????????????? ??????????????????, ????????,?????????????????????????????????????????? ????????????????',
            icon: (<Dangerous />) },
    ]

    const deliveryData = ['??????????-??????????', '??????????-??????????', '???? ?????????? ???? ??????????', '??????????-??????????']

    const checkAllParams = () => {
        if (!toggle) {
            if (size && weight) {
                getDelivers()
            } else if (!size) {
                Alert.alert('?????????????? ?????????? ????????????')
            } else if (!weight) {
                Alert.alert('?????????????? ?????? ????????????')
            }
        } else if (count && weight) {
            getDelivers()
        } else if (!count) {
            Alert.alert('?????????????? ???????????????????? ????????????')
        } else if (!weight) {
            Alert.alert('?????????????? ?????? ????????????')
        }
    }

    const getDelivers = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        formData.append('place_from', from)
        formData.append('place_to', to)
        formData.append('length', parseFloat(length))
        formData.append('width', parseFloat(width))
        formData.append('height', parseFloat(height))
        formData.append('volume', parseFloat(size))
        formData.append('weight', parseFloat(weight))
        count !== '' ? formData.append('count_places', count) : null
        formData.append('type_calculate', toggle ? count : size)
        formData.append('category_cargo', cargo)
        formData.append('type_cargo', selectedValue)
        formData.append('type_delivery', delivery)
        formData.append('cargo_insurance', firstRadio ? 1 : 0)
        formData.append('cargo_box', secondRadio ? 1 : 0)
        formData.append('distance', 100)
        setModalVisible(true)
        await fetch('https://finddel.ru/api/get_deliveries_list', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((s) => {
                console.log(s, 'synta')
                if (s.offers) {
                    setOffers(s.offers)
                    setModalVisible(false)
                    console.log(s, 's')
                    scrollViewRef.current.scrollToEnd({ animated: true })
                } else {
                    Alert.alert(s.text)
                    setModalVisible(false)
                    setOffers(false)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    const getSuggestions = async () => {
        const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
        const token = 'e20c4782abff75fe134b4a179a0d5f3bcc22c81b'
        const query = from

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                query,
                locations: [
                    { country: '????????????' },
                    { country: '????????????????' },
                    { country: '????????????????????' },
                ],
            }),
        }

        fetch(url, options)
            .then((response) => response.text())
            .then((result) => setSuggestions(JSON.parse(result)))
            .then(() => setFromSug(true))
            .catch((error) => console.log('error', error))
    }

    useEffect(() => {
        checkSugFrom()
    }, [from])

    const checkSugFrom = () => {
        if (from !== '' && !fromAddress) {
            getSuggestions()
            setFromSug(false)
        } else if (fromAddress && from) {
            if (fromAddress !== from) {
                getSuggestions()
                setFromSug(false)
            }
        }
    }

    const getToSuggestions = async () => {
        const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address'
        const token = 'e20c4782abff75fe134b4a179a0d5f3bcc22c81b'
        const query = to

        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${token}`,
            },
            body: JSON.stringify({
                query,
                locations: [
                    { country: '????????????' },
                    { country: '????????????????' },
                    { country: '????????????????????' },
                ],
            }),
        }

        fetch(url, options)
            .then((response) => response.text())
            .then((result) => setToSuggestions(JSON.parse(result)))
            .then(() => setToSug(true))
            .catch((error) => console.log('error', error))
    }

    useEffect(() => {
        checkSugTo()
    }, [to])

    const checkSugTo = () => {
        if (to !== '' && !toAddress) {
            getToSuggestions()
            setToSug(false)
        } else if (toAddress && to) {
            if (toAddress !== to) {
                getToSuggestions()
                setToSug(false)
            }
        }
    }

    useEffect(() => {
        if (fromAddress) {
            setFrom(fromAddress)
            setFromSug(false)
        }
        if (toAddress) {
            setTo(toAddress)
        }
        if (type) {
            setSelectedValue(type)
        }
    }, [fromAddress, toAddress, type])

    const calc = async (size) => {
        const result = (Math.cbrt(size) * 100).toPrecision(6)
        await setHeight(result.toString())
        await setWidth(result.toString())
        await setLength(result.toString())
    }

    useEffect(() => {
        if (size && size !== loading) {
            calc(size)
        }
    }, [size])

    useEffect(() => {
        if (length && width && height) {
            const result = ((length / 100) * (width / 100) * (height / 100)).toPrecision(3)
            if (size !== result) {
                setSize(result.toString())
                setLoading(result.toString())
            }
        }
    }, [length, width, height])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
                ref={scrollViewRef}
            >
                <View style={{ paddingHorizontal: 15 }}>
                    <Text style={styles.title}>???????????? ????????????????</Text>

                    <Formik
                        initialValues={{ from: '',
                            to: '',
                            length: '',
                            width: '',
                            height: '',
                            comments: '',
                            size: '',
                            count: '',
                            weight: '' }}
                        onSubmit={() => {}} enableReinitialize>
                        {({ setFieldValue }) => (

                            <View>
                                <Text style={styles.inputLabel}>????????????</Text>

                                <View style={styles.addressContainer}>
                                    <InputLight
                                        name="from"
                                        type="text"
                                        keyboard="default"
                                        input={styles.addressInput}
                                        placeholder="?????????????? ?????????? ??????????????????????"
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        value={from}
                                        onChange={setFrom} />

                                    <TouchableOpacity
                                        style={styles.leftRightContainer}
                                        onPress={() => {
                                            const change = from
                                            setFrom(to)
                                            setTo(change)
                                        }}
                                    >
                                        <LeftRight />
                                    </TouchableOpacity>
                                </View>

                                {fromSug ? (
                                    <SuggestionScroll
                                        visible={fromSug}
                                        setVisible={setFromSug}
                                        data={suggestions.suggestions}
                                        setSelectedValue={setFrom} />
                                ) : null}

                                <Text style={styles.inputLabel}>????????</Text>

                                <InputLight
                                    name="to"
                                    type="text"
                                    keyboard="default"
                                    input={styles.input}
                                    placeholder="?????????????? ?????????? ????????????????????"
                                    placeholderTextColor={COLORS.placeholderTextColor}
                                    value={to}
                                    onChange={setTo} />

                                {toSug ? (
                                    <SuggestionScroll
                                        visible={toSug}
                                        setVisible={setToSug}
                                        data={toSuggestions.suggestions}
                                        setSelectedValue={setTo} />
                                ) : null}

                                <Text style={styles.inputLabel}>???????????? ????????????????</Text>

                                <DropDown
                                    placeholder={deliveryData[0]}
                                    data={deliveryData}
                                    selectedValue={delivery}
                                    setSelectedValue={setDelivery}
                                    zIndex={9} />

                                <Text style={styles.inputLabel}>?????? ??????????</Text>

                                <BigDropDown
                                    selectedValue={selectedValue}
                                    setSelectedValue={setSelectedValue}
                                    placeholder="??????????????"
                                    data={data} />

                                <View style={styles.loadContainer}>
                                    <View style={styles.load}>
                                        <Text style={styles.inputLabel}>????????</Text>
                                        <DropDown
                                            placeholder={cargoData[0]}
                                            data={cargoData}
                                            selectedValue={cargo}
                                            setSelectedValue={setCargo}
                                            zIndex={14}
                                        />
                                    </View>

                                    <View style={styles.weight}>
                                        <Text style={styles.inputLabel}>??????, ????</Text>

                                        <InputLight
                                            name="weight"
                                            type="text"
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder="432"
                                            placeholderTextColor={COLORS.placeholderTextColor}
                                            value={weight}
                                            onChange={setWeight} />
                                    </View>
                                </View>

                                <View style={[styles.loadContainer, { zIndex: -1 }]}>
                                    <View style={{ flex: 1, marginRight: 5 }}>
                                        <Text style={!toggle ? styles.inputLabel : styles.inputLabelDisabled}>
                                            ??????????, ????
                                        </Text>

                                        <InputLight
                                            name="size"
                                            type="text"
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder="1"
                                            placeholderTextColor={COLORS.placeholderTextColor}
                                            value={size}
                                            onChange={setSize}
                                            editable={!toggle} />
                                    </View>

                                    <View style={{ flex: 1, marginLeft: 5 }}>
                                        <Text style={toggle ? styles.inputLabel : styles.inputLabelDisabled}>
                                            ??????-???? ????????
                                        </Text>

                                        <InputLight
                                            name="count"
                                            type="text"
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder="123"
                                            placeholderTextColor={COLORS.placeholderTextColor}
                                            value={count}
                                            onChange={setCount}
                                            editable={!!toggle} />
                                    </View>
                                </View>

                                <View style={styles.switchContainer}>
                                    <Text style={!toggle ? styles.switchTextRight : styles.switchTextDisabledRight}>
                                        ???????????? ???? ????????????
                                    </Text>

                                    <Switch toggle={toggle} setToggle={setToggle} />

                                    <Text style={toggle ? styles.switchTextLeft : styles.switchTextDisabledLeft}>
                                        ???????????? ???? ??????-???? ????????
                                    </Text>
                                </View>

                                <Text style={styles.inputLabel}>????????????????, ????</Text>

                                <View style={styles.loadContainer}>
                                    <View style={{ flex: 1, marginLeft: 5 }}>
                                        <InputLight
                                            name="length"
                                            type="text"
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder="200"
                                            placeholderTextColor={COLORS.placeholderTextColor}
                                            value={length}
                                            onChange={setLength} />
                                    </View>

                                    <View style={{ flex: 1, marginHorizontal: 5 }}>
                                        <InputLight
                                            name="width"
                                            type="text"
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder="200"
                                            placeholderTextColor={COLORS.placeholderTextColor}
                                            value={width}
                                            onChange={setWidth} />
                                    </View>

                                    <View style={{ flex: 1, marginRight: 5 }}>
                                        <InputLight
                                            name="height"
                                            type="text"
                                            keyboard="default"
                                            input={styles.input}
                                            placeholder="200"
                                            placeholderTextColor={COLORS.placeholderTextColor}
                                            value={height}
                                            onChange={setHeight}
                                            editable />
                                    </View>
                                </View>

                                <View style={styles.insuranceContainer}>
                                    <View style={styles.insurance}>
                                        <Radio radio={firstRadio} setRadio={() => {
                                            setFirstRadio(!firstRadio)
                                        }} />

                                        <Text style={styles.insuranceText}>?????????????????? ??????????</Text>
                                    </View>

                                    <View style={styles.insurance}>
                                        <Radio radio={secondRadio} setRadio={() => {
                                            setSecondRadio(!secondRadio)
                                        }} />

                                        <Text style={styles.insuranceText}>?????????????????? ??????????</Text>
                                    </View>
                                </View>

                                <Text style={styles.inputLabel}>??????????????????????</Text>

                                <View style={{ marginRight: 5 }}>
                                    <TextArea
                                        name="comments"
                                        type="text"
                                        keyboard="default"
                                        placeholder="?????????????? ??????????"
                                        placeholderTextColor={COLORS.placeholderTextColor}
                                        multiline
                                        maxLength={500}
                                        value={comment}
                                        onChange={setComment} />
                                </View>

                                <SubmitButton text="???????????????? ????????" submitFunction={() => {
                                    checkAllParams()
                                }} />
                            </View>
                        )}
                    </Formik>
                </View>

                { offers === false ? (
                    <UnSuccessContainer />
                ) : null }

                { offers ? (

                    <SuccessContainer
                        offers={offers}
                        selectedOffer={selectedOffer}
                        setSelectedOffer={setSelectedOffer}
                    />

                ) : null }

                <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        backgroundColor: COLORS.mainScreenBackground,
        flex: 1,
    },
    title: {
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 22,
        fontFamily: 'Helvetica',
        marginBottom: 10,
    },
    addressContainer: {
        flexDirection: 'row',
    },
    addressInput: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
        width: '85%',
    },
    inputLabel: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: 'black',
    },
    leftRightContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        marginTop: 5,
        marginLeft: -50,
    },
    input: {
        height: 50,
        backgroundColor: COLORS.inputBackgroundColor,
        borderWidth: 1,
        borderColor: COLORS.inputBackgroundColor,
        borderRadius: 0,
        marginTop: 5,
    },
    loadContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    load: {
        flex: 2,
    },
    weight: {
        flex: 1,
        marginLeft: 10,
    },
    inputLabelDisabled: {
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Helvetica',
        color: COLORS.inputLabelDisabled,
    },
    switchContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    switchTextRight: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'right',
        flex: 2,
        marginRight: 8,
        color: 'black',
    },
    switchTextLeft: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'left',
        flex: 2,
        marginLeft: 8,
        color: 'black',
    },
    switchTextDisabledRight: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'right',
        color: COLORS.inputLabelDisabled,
        flex: 2,
        marginRight: 8,
    },
    switchTextDisabledLeft: {
        fontSize: 14,
        fontFamily: 'Helvetica',
        textAlign: 'left',
        color: COLORS.inputLabelDisabled,
        flex: 2,
        marginLeft: 8,
    },
    insuranceContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 7,
    },
    insurance: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    insuranceText: {
        fontSize: 16,
        fontFamily: 'Helvetica',
        lineHeight: 22,
        marginLeft: 5,
    },
})
