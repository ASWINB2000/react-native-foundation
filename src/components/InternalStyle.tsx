import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const InternalStyle = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Heyo its all right!</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    textStyle:{
        color:'red',
        fontSize:30,
        backgroundColor:"yellow",
        margin:20,padding:20
    }
})

export default InternalStyle