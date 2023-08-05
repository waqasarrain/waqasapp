import React, { useState } from "react";
import { View, Text, TextInput, Button } from 'react-native'
const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show , setShow] = useState (false);
    const cleardata = ()=>{
        setName("");
        setEmail("");
        setEmail("");
        setShow("");
    }
    return (
        <View >
            <TextInput style={{
                borderWidth: 2,
                padding: 2,
                marginBottom: 10,
                marginTop: 10,
            }} placeholder="Enter your name" onChangeText={(text) => setName(text)}>

            </TextInput >
            <TextInput style={{
                borderWidth: 2,
                padding: 2,
                marginBottom: 10,
            }} placeholder= "Enter your Email" onChangeText={(text) => setEmail(text)}>

            </TextInput>
            <TextInput style={{
                borderWidth: 2,

                paddingLeft: 2,
                marginBottom: 10,

            }} placeholder="Enter your Password" onChangeText={(text) => setPassword(text)}>

            </TextInput>
                <View style={{marginBottom: 10, 
                    marginTop: 10, 
                    padding: 2,}}>
                   <Button title="Print me " onPress={()=>setShow(true)} />
                  
                    </View>
                    <Button  title="Clear me  " onPress={()=>cleardata()}  />
                    {
                        show ? 
                       
                            <View>
                                <Text>
                                    My Name is : {name}
                                </Text>
                                <Text>
                                    My Email is  is : {email}
                                </Text>
                                <Text>
                                    My Password is : {password}
                                </Text>
                                </View> :null
                    }
                    
        </View>
       

    )
}
export default Form;












// import React, { useState } from 'react';
// import { View, Text, NativeAppEventEmitter, TextComponent, TextInput, Button } from 'react-native';
// const Form =()=>{
//     const[name, setName]=useState("");
//     const[email, setEmail]=useState("");
//     const[password, setPassword]=useState("");
//     const[show, setShow]=useState(false);
//     const cleardata = ()=>{
//         setName("");
//         setEmail("");
//         setPassword("");
//         setShow("");
//     }
//     return(
//         <View style={{
//             flex:1,
//             justifyContent:'center',
//             padding:10,
//         }}>
//             <TextInput style={{ borderWidth:2, padding:5, borderRadius:15, marginBottom:5}}
//             placeholder='Type your name here'
//             onChangeText={(text)=>setName(text)}
//             value={name}
//             />
//              <TextInput style={{ borderWidth:2, padding:5, borderRadius:15,marginBottom:5 }}
//             placeholder='Type your email here'
//             onChangeText={(text)=>setEmail(text)}
//             value={email}
//             />
//             <TextInput style={{ borderWidth:2, padding:5, borderRadius:15 }}
//             placeholder='Type your Password here'
//             onChangeText={(text)=>setPassword(text)}
//             secureTextEntry={true}
//             value={password}
//             />
//             <View style={{
//                 marginTop:10,
//                 marginBottom:10,
//             }}>
//             <Button title='Print Values' onPress={()=>setShow(true)} />
//             </View>
//             <Button title='Clear Values' onPress={()=>cleardata()} />

//             {
//                 show ? <View>
//                 <Text style={{fontSize:12}}> My name is: {name} </Text>
//                 <Text style={{fontSize:12}}> My email is: {email} </Text>
//                 <Text style={{fontSize:12}}> My password is: {password} </Text>
//             </View> : null
//             }

//         </View>
//     )
// }

// export default Form





















