import { View, Text,Image } from 'react-native'
import React from 'react'

const ProfileImageComponent = () => {
  return (
    <View>
      <Image source={require("../app/assets/passport_picture.jpg")}
      style={{width:100,height:100,borderRadius:50}}
      />
      
    </View>
  )
}

export default ProfileImageComponent