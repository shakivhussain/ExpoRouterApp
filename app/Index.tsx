import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
    return (
        <View>

            <Text > Title Of Home Screen</Text>
            <Link href='/HomeScreen'> Home Screen</Link>
            <Link href="/AboutScreen"> About Screen</Link>
            <Link href="/ContactScreen"> Contact Screen</Link>

        </View>
    )
}

export default index