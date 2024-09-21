import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'

const Users = () => {

    const { id } = useLocalSearchParams()

    return (
        <View>
            <Text>User : {id}</Text>

            <Link href='/AboutScreen'>About Screen</Link>
        </View>
    )
}

export default Users