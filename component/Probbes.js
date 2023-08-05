import React, { useState } from "react";
import{View, Text, Button}from 'react-native';
const Probbes=()=>{
   const [name,setName]=useState("nouman");
   const [age,setAge] = useState(20);
 
  return(
<View style={{alignItems:"center"}}>
  <Text style={{fontSize:20}} >
    My name is : {name}
  </Text>
  <Text style={{fontSize:20}} >
    your age is : {age}
  </Text>
  <Button title="press me"onPress={()=>setName("waqas")}/>
  <Button title="press me"onPress={()=>setAge(50)}/>
</View>
  )
}

export default Probbes;





// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// const APP=()=>{
//   const [show, setShow]=useState("Waqas");
//   const [age, setAge]=useState(0)
//   return(
//     <View style={{
//       flex:1,
//       alignItems:'center',
//       justifyContent:'center',
//     }}>
//       <Text style={{
//         fontSize:25,
//       }}> My Name is: {show}  </Text>
//       <Text style={{
//         fontSize:25,
//       }}> My age is: {age}  </Text>
//       <Text style={{
//         fontSize:25,
//       }}> My Name is: {age} </Text>
//       <Text style={{
//         fontSize:25,
//       }}> My Name is: {show}  </Text>
//       <Button title='Press me to update Name' onPress={()=>setShow("Nauman Tariq")}/>
//       <Button title='Press me to update Age' onPress={()=>setAge(25)}/>
//     </View>
//   )
// }
// export default APP;
