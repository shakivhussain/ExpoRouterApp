import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'

const RootLayout = () => {
    return <Tabs>

        <Tabs.Screen name='index' />
        <Tabs.Screen name='HomeScreen' />

    </Tabs>

}

export default RootLayout