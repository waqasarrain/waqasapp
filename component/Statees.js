import React, { useState } from "react";
import{View, Text,Button}from "react-native";
const Statees=()=>{
    const[name, setName]=useState("Ali");
    const[age, setAge]=useState(25);


    return(
       <View>
        <Text style={{
            fontSize: 30
        }}>
            My first app 
        
        </Text>
        <Text style={{
            fontSize: 30
        }}>
            First name is:  {name}
        
        </Text>
        <Text style={{
            fontSize: 30
        }}>
            My age is: {age}
        </Text>
        <Button title="press me" onPress={()=>setName("nouman")}/>
        <Button title="press me" onPress={()=>setAge(50)}/>
        <Home name={name} age={age}/>
       </View>
    )
}
const Home=(props)=>{
    console.warn(props.age)
    return(
    
        <View>
            <Text style={{
                fontSize: 30
            }}>
                Last name is:{props.name}
            </Text>
            <Text style={{
                fontSize: 30
            }}>
                Your current age is: {props.age}
            </Text>
        </View>
    )

 }
 export default Statees;