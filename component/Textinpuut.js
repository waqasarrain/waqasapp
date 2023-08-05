import React, { useState } from "react";
import {View , Text, TextInput } from 'react-native'
const Textinpuut = ()=>{
    const[name, setName]=useState("")
    return(
     <View style={
        {
            alignItems:'center'
            
        }
     }>
        <Text style={{
            fontSize: 30
        }}>
            Enter your name:{name}
        </Text>
        <TextInput style={{
            borderWidth:2,
             
            borderColor:'blue',
        }} placeholder="please inter here" onChangeText={(abx)=>setName(abx)}>

        </TextInput>

     </View>
    )
}

  
export default Textinpuut;