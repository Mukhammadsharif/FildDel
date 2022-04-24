import React, { useState, useContext, useCallback, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform } from 'react-native'
import FirstScreen from './screens/FirstScreen'
import Register from './screens/Register'
import HeaderTitle from './components/HeaderTitle'
import Login from './screens/Login'
import ResetPassword from './screens/ResetPassword'
import ForgetPassword from './screens/ForgetPassword'
import MainScreen from './screens/MainScreen'
import TabHeaderTitle from './components/TabHeaderTitle'
import ObservationScreen from './screens/ObservationScreen'
import PlusScreen from './screens/PlusScreen'
import HistoryScreen from './screens/HistoryScreen'
import MoreScreen from './screens/MoreScreen'
import FormalizeOrder from './screens/FormalizeOrder'
import OrderPay from './screens/OrderPay'
import Politics from './screens/Politics'
import Agreement from './screens/Agreement'
import Offer from './screens/Offer'
import PayRules from './screens/PayRules'
import Profile from './screens/Profile'
import ProfileRegister from './screens/ProfileRegister'
import { IconHistory, IconHome, IconMore, IconObservation, IconPlus } from './components/Svgs'
import { COLORS } from './utils/colors'
import StackHeader from './components/StackHeader'
import ProfileHeaderTitle from './components/ProfileHeaderTitle'
import { GlobalContext } from './contexts/GlobalContext'
import { showNotification } from './notification.android'
import { showNotificationIos } from './notification.ios'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Navigation() {
    const { doctorId } = useContext(GlobalContext)
    const [orders, setOrders] = useState(null)

    const getOrderHistory = async () => {
        const formData = new FormData()
        formData.append('clientId', doctorId)
        await fetch('https://finddel.ru/api/orders', {
            method: 'POST',
            headers: {
                ApiKey: 'Kv73gXP39dNSU39CBnd77Dmw',
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((s) => {
                if (s.orders) {
                    setOrders(s.orders)
                } else {
                    // Alert.alert(s.text)
                    console.log(s)
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    useEffect(() => { setInterval(() => getOrderHistory(), 1800000) }, [])

    useEffect(() => {
        if (orders) {
            const newStatusItem = orders.find((item) => item.new_order_status === 1)
            if (newStatusItem) {
                if (Platform.OS === 'ios') {
                    showNotificationIos(`Изменение статуса по №${newStatusItem.id}`,
                        newStatusItem.order_status)
                } else {
                    showNotification(`Изменение статуса по Заказу №${newStatusItem.id}`,
                        newStatusItem.order_status)
                }
            }
        }
    }, [orders])

    const initial = doctorId ? 'TabScreen' : 'Register'

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initial}>
                <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 220,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <HeaderTitle />,
                    }} />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 220,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <HeaderTitle />,
                    }} />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 220,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <HeaderTitle />,
                    }} />
                <Stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 220,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <HeaderTitle />,
                    }} />
                <Stack.Screen
                    name="TabScreen"
                    component={TabScreen}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <TabHeaderTitle />,
                    }} />

                <Stack.Screen
                    name="FormalizeOrder"
                    component={FormalizeOrder}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <StackHeader />,
                    }} />

                <Stack.Screen
                    name="Politics"
                    component={Politics}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <StackHeader />,
                    }} />

                <Stack.Screen
                    name="Agreement"
                    component={Agreement}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <StackHeader />,
                    }} />

                <Stack.Screen
                    name="Offer"
                    component={Offer}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <StackHeader />,
                    }} />

                <Stack.Screen
                    name="PayRules"
                    component={PayRules}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <StackHeader />,
                    }} />

                <Stack.Screen
                    name="OrderPay"
                    component={OrderPay}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <StackHeader />,
                    }} />

                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <ProfileHeaderTitle />,
                    }} />

                <Stack.Screen
                    name="ProfileRegister"
                    component={ProfileRegister}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 93,
                            borderBottomWidth: 2,
                        },
                        headerTitle: () => <ProfileHeaderTitle />,
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

function TabScreen() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
                paddingBottom: 10,
            },
            tabBarLabelStyle: {
                fontFamily: 'Helvetica',
            },
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen
                name="MainScreen"
                component={MainScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconHome fill={focused ? COLORS.main : COLORS.iconInactiveColor} />,
                    tabBarLabel: 'Главный',
                    tabBarActiveTintColor: COLORS.main,
                }} />

            <Tab.Screen
                name="ObservationScreen"
                component={ObservationScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconObservation fill={focused ? COLORS.main : COLORS.iconInactiveColor} />,
                    tabBarLabel: 'Отследить',
                    tabBarActiveTintColor: COLORS.main,
                }} />

            <Tab.Screen
                name="PlusScreen"
                component={PlusScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconPlus fill={focused ? COLORS.main : COLORS.iconInactiveColor} />,
                    tabBarLabel: 'Подбор',
                    tabBarActiveTintColor: COLORS.main,
                }} />

            <Tab.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconHistory fill={focused ? COLORS.main : COLORS.iconInactiveColor} />,
                    tabBarLabel: 'История',
                    tabBarActiveTintColor: COLORS.main,
                }} />

            <Tab.Screen
                name="MoreScreen"
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconMore fill={focused ? COLORS.main : COLORS.iconInactiveColor} />,
                    tabBarLabel: 'Еще',
                    tabBarActiveTintColor: COLORS.main,
                }} />
        </Tab.Navigator>
    )
}
