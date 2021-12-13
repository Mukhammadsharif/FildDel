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
            </Stack.Navigator>
        </NavigationContainer>
    )
}