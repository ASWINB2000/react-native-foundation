import { View, Text, Button,Pressable} from 'react-native'
import React from 'react'

const ButtonComponent = () => {
  return (
    <View>
      <Text>Lets explore buttons</Text>
      {/* <Button title='Press Me' color='teal' disabled></Button> */}
      <Button title="Click" onPress={()=>console.warn("Pressed")}></Button>
      <Pressable onPress={()=>console.log("Pressed")}>
        <Text style={{color:"teal"}}>Press Me</Text>
      </Pressable>
      <Pressable onPressIn={()=>console.log("On Pressed In")}>
        <Text style={{color:"blue"}}>Press Me</Text>
      </Pressable>
      <Pressable onLongPress={()=>console.log("On Pressed Out")}>
        <Text style={{color:"grey"}}>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default ButtonComponent