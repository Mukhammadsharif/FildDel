import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Platform } from 'react-native'
import Navigation from './src/Navigation'
import { GlobalProvider } from './src/contexts/GlobalContext'

export default function App() {
    return (
        <GlobalProvider>
            <StatusBar
                backgroundColor="#000"
                barStyle={Platform.OS === 'ios' ? 'light-content' : null} />
            <Navigation />
        </GlobalProvider>
    )
}
