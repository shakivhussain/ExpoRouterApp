import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return <Stack>

        <Stack.Screen name='index' options={{
            headerTitle: 'Index Screen',
            headerStyle: {
                backgroundColor: "blue"
            }
        }} />

        <Stack.Screen name='HomeScreen' options={{
            headerTitle: 'Home Screen',
            headerStyle: {
                backgroundColor: "blue"
            }
        }} />


        <Stack.Screen name='users/[id]'

            options={{
                headerTitle: "Users Dynamix Id"
            }} />

    </Stack>

}

export default RootLayout