import { View, Text } from 'react-native'
import React from 'react'
import st from '../utils/style'

const ExternalStyle = () => {
  return (
    <View style={st.shadowStyle}>
      <Text style={st.textStyle}>Here we go again!</Text>
    </View>
  )
}

export default ExternalStyle