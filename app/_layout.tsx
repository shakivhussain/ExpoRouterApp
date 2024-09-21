import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return <Stack>

        <Stack.Screen name='index' options={{
            headerTitle: 'Index Screen',
            headerStyle: {
                backgroundColor: "blue"
            },
            contentStyle: {

                
            }
        }} />
        <Stack.Screen name='users/[id]' />

    </Stack>

}

export default RootLayout