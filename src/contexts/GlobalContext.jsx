import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

export const GlobalContext = createContext({})

export function GlobalProvider({ children }) {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [headerOptions, setHeaderOptions] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [mins, setMins] = useState(5)
    const [secs, setSecs] = useState(0)

    // useEffect(() => {
    //     AsyncStorage.getItem('token').then(async (value) => {
    //         setToken(value)
    //         // const { response } = await notifications.request({ headers: { Authorization: `Token ${value}` } })
    //         // setNotificationCount(response?.notificationsCount || 0)
    //         return AsyncStorage.getItem('user')
    //     }).then((value) => {
    //         setUser(JSON.parse(value))
    //         setIsLoaded(true)
    //     })
    // }, [])
    //
    // async function auth(newToken, newUser) {
    //     setToken(newToken)
    //     setUser(newUser)
    //     await AsyncStorage.setItem('token', newToken)
    //     await AsyncStorage.setItem('user', JSON.stringify(newUser))
    // }
    //
    // async function signOut(navigation) {
    //     setToken(null)
    //     setUser({})
    //     await AsyncStorage.removeItem('token')
    //     await AsyncStorage.removeItem('user')
    //     navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    // }

    return (
        <GlobalContext.Provider value={{
            token,
            user,
            // auth,
            // signOut,
            headerOptions,
            mins,
            setMins,
            setSecs,
            secs,
            setHeaderOptions,
            setUser,
        }}>
            {isLoaded ? children : null}
        </GlobalContext.Provider>
    )
}
