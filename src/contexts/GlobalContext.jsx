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
    const [doctorId, setDoctorId] = useState(null)
    const [load, setLoad] = useState(false)
    const [proAccount, setProAccount] = useState(false)
    const [clinicModal, setClinicModal] = useState(false)
    const [createAccount, setCreateAccount] = useState(false)

    useEffect(() => {
        AsyncStorage.getItem('id').then(async (value) => {
            console.log(value, 'value')
            setDoctorId(value)
            // const { response } = await notifications.request({ headers: { Authorization: `Token ${value}` } })
            // setNotificationCount(response?.notificationsCount || 0)
            return AsyncStorage.getItem('user')
        }).then((value) => {
            setUser(JSON.parse(value))
            setIsLoaded(true)

            return AsyncStorage.getItem('id')
        }).then(async (value) => {
            setDoctorId(JSON.parse(value))
        })
    }, [])

    async function auth(newToken, newUser) {
        setToken(newToken)
        setUser(newUser)
        await AsyncStorage.setItem('token', newToken.toString())
        await AsyncStorage.setItem('user', JSON.stringify(newUser))
    }

    async function signOut(navigation) {
        setToken(null)
        setUser({})
        await AsyncStorage.removeItem('token')
        await AsyncStorage.removeItem('user')
        await AsyncStorage.removeItem('id')
    }

    async function setId(id) {
        await setDoctorId(id)
        await AsyncStorage.setItem('id', JSON.stringify(id))
    }

    return (
        <GlobalContext.Provider value={{
            token,
            user,
            auth,
            signOut,
            headerOptions,
            mins,
            setMins,
            setSecs,
            secs,
            setHeaderOptions,
            setUser,
            setId,
            doctorId,
            load,
            setLoad,
            proAccount,
            setProAccount,
            clinicModal,
            setClinicModal,
            createAccount,
            setCreateAccount,
        }}>
            {isLoaded ? children : null}
        </GlobalContext.Provider>
    )
}
