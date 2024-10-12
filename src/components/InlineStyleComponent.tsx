import { View, Text } from 'react-native'
import React from 'react'

const InlineStyleComponent = () => {
  return (
    <View>
      <View style={{backgroundColor:'red',width:100,height:100,margin:20}}/>
      <View style={{backgroundColor:'green',width:100,height:100,margin:20}}/>
      <View style={{backgroundColor:'blue',width:100,height:100,margin:20}}/>
      <View style={{backgroundColor:'grey',width:100,height:100,margin:20}}/>
    </View>
  )
}

export default InlineStyleComponent