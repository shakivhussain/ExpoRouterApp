import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const AboutScreen = () => {
    return (
        <View>
            <Text>About Screen</Text>
            {/* <Link href='/Index'>Back</Link> */}
            <Link href='/users/12'>Goto Users Screen</Link>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({})