import { View, Text,Image } from 'react-native'
import React from 'react'

const ImageComponent = () => {
  return (
    <View>
      <Text>Images</Text>
      <Image source={require("../app/assets/cosq.jpg")}
        style={{width:200,height:200}}
      />
      <Image source={{uri: "https://static.dc.com/dc/files/default_images/Char_Thumb_Batman_20190116_5c3fc4b40fae42.85141247.jpg?w=384"}} 
        style={{width:300,height:300}}/>
        
    
    </View>
  )
}

export default ImageComponent