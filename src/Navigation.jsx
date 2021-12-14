import React, { useState, useContext, useCallback } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text } from 'react-native'
import FirstScreen from "./screens/FirstScreen"
import Register from "./screens/Register"
import HeaderTitle from "./components/HeaderTitle";
import Login from "./screens/Login";
import ResetPassword from "./screens/ResetPassword";
import ForgetPassword from "./screens/ForgetPassword";
import MainScreen from "./screens/MainScreen";
import TabHeaderTitle from "./components/TabHeaderTitle";
import ObservationScreen from './screens/ObservationScreen'
import PlusScreen from './screens/PlusScreen'
import HistoryScreen  from './screens/HistoryScreen'
import MoreScreen from './screens/MoreScreen'
import {IconHistory, IconHome, IconMore, IconObservation, IconPlus} from "./components/Svgs";
import {COLORS} from "./utils/colors";



const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'FirstScreen'} component={FirstScreen} options={{headerShown: false}}/>
                <Stack.Screen
                    name={'Register'}
                    component={Register}
                    options={{
                        headerLeft: () => null,
                        headerStyle: {
                            height: 220,
                            borderBottomWidth: 2
                        },
                        headerTitle: () =>
                            <HeaderTitle/>
                    }}/>
                    <Stack.Screen
                        name={'Login'}
                        component={Login}
                        options={{
                            headerLeft: () => null,
                            headerStyle: {
                                height: 220,
                                borderBottomWidth: 2
                            },
                            headerTitle: () =>
                                <HeaderTitle/>
                    }}/>
                    <Stack.Screen
                        name={'ResetPassword'}
                        component={ResetPassword}
                        options={{
                            headerLeft: () => null,
                            headerStyle: {
                                height: 220,
                                borderBottomWidth: 2
                            },
                            headerTitle: () =>
                                <HeaderTitle/>
                    }}/>
                    <Stack.Screen
                        name={'ForgetPassword'}
                        component={ForgetPassword}
                        options={{
                            headerLeft: () => null,
                            headerStyle: {
                                height: 220,
                                borderBottomWidth: 2
                            },
                            headerTitle: () =>
                                <HeaderTitle/>
                    }}/>
                    <Stack.Screen
                        name={'TabScreen'}
                        component={TabScreen}
                        options={{
                            headerLeft: () => null,
                            headerStyle: {
                                height: 93,
                                borderBottomWidth: 2,
                            },
                            headerTitle: () => <TabHeaderTitle/>,
                        }}/>
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
            tabBarHideOnKeyboard: true,
        }}>
            <Tab.Screen
                name={'MainScreen'}
                component={MainScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconHome fill={focused ? COLORS.main : COLORS.iconInactiveColor}/>,
                    tabBarLabel: 'Главный',
                    tabBarActiveTintColor: COLORS.main,
                }}/>

            <Tab.Screen
                name={'ObservationScreen'}
                component={ObservationScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconObservation fill={focused ? COLORS.main : COLORS.iconInactiveColor}/>,
                    tabBarLabel: 'Отследить',
                    tabBarActiveTintColor: COLORS.main,
                }}/>

            <Tab.Screen
                name={'PlusScreen'}
                component={PlusScreen}
                options={{
                    tabBarIcon: ({ focused}) => <IconPlus fill={focused ? COLORS.main : COLORS.iconInactiveColor}/>,
                    tabBarLabel: 'Подбор',
                    tabBarActiveTintColor: COLORS.main,
                }}/>

            <Tab.Screen
                name={'HistoryScreen'}
                component={HistoryScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconHistory fill={focused ? COLORS.main : COLORS.iconInactiveColor}/>,
                    tabBarLabel: 'История',
                    tabBarActiveTintColor: COLORS.main,
                }}/>

            <Tab.Screen
                name={'MoreScreen'}
                component={MoreScreen}
                options={{
                    tabBarIcon: ({ focused }) => <IconMore fill={focused ? COLORS.main : COLORS.iconInactiveColor}/>,
                    tabBarLabel: 'Еще',
                    tabBarActiveTintColor: COLORS.main,
                }}/>
        </Tab.Navigator>
    )
}