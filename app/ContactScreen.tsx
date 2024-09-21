import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ContactScreen = () => {
  return (
    <View>
      <Text>Contact Screen</Text>
      <Link href='/Index'>Back</Link>
    </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({})