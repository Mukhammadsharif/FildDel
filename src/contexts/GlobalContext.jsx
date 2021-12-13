import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { usePersistState } from '../utils/state'
import { GENERAL } from '../urls'
// eslint-disable-next-line import/no-cycle
import { useGetRequest } from '../hooks/request'

export const GlobalContext = createContext({})

export function GlobalProvider({ children }) {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [headerOptions, setHeaderOptions] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const [mins, setMins] = useState(5)
    const [secs, setSecs] = useState(0)
    const [lang, setLang] = usePersistState('language', 'ru')
    const [notificationCount, setNotificationCount] = useState(0)
    const notifications = useGetRequest({ url: GENERAL })

    useEffect(() => {
        AsyncStorage.getItem('token').then(async (value) => {
            setToken(value)
            const { response } = await notifications.request({ headers: { Authorization: `Token ${value}` } })
            setNotificationCount(response?.notificationsCount || 0)
            return AsyncStorage.getItem('user')
        }).then((value) => {
            setUser(JSON.parse(value))
            setIsLoaded(true)
        })
    }, [])

    async function auth(newToken, newUser) {
        setToken(newToken)
        setUser(newUser)
        await AsyncStorage.setItem('token', newToken)
        await AsyncStorage.setItem('user', JSON.stringify(newUser))
    }

    async function signOut(navigation) {
        setToken(null)
        setUser({})
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user')
        navigation.reset({ index: 0, routes: [{ name: 'Login' }] })
    }

    return (
        <GlobalContext.Provider value={{
            token,
            user,
            auth,
            notificationCount,
            setNotificationCount,
            signOut,
            headerOptions,
            mins,
            setMins,
            setSecs,
            secs,
            setHeaderOptions,
            setLang,
            setUser,
            lang,
        }}>
            {isLoaded ? children : null}
        </GlobalContext.Provider>
    )
}
