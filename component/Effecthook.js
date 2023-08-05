import React, { useEffect, useState } from "react";
import { Button, Text, View } from 'react-native';
const Effecthook = () => {
    const [count ,setCount]= useState( 23)
    useEffect(( )=>{
        console.warn("hello" )
    }, [])

    return (
    <View>
        <Text> Nomi </Text>
        <Button title="press me" onPress={()=>setCount(14)}/>
        
    </View>
)
}
export default Effecthook;