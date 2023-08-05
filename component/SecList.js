import React from "react";
import { Text, View, SectionList } from 'react-native';
const SecList = () => {
    const user = [
        {
            id: 1,
            name: "ali",
            data: ["Java", "C++", ".net"]

        },
        {
            id: 2,
            name: "Subhan",
            data: ["react", "java", "Laravel", "Opp"]
        },
        {
            id: 3,
            name: "Waqas",
            data: ["react", "java", "Laravel", "Opp"]
        }
    ]
    return (

        <View>
            <Text style={{ fontSize: 31 }}>Section List in react native</Text>
            <SectionList
                sections={user}
                renderItem={({ item }) => <View><Text>{item}</Text></View>}
                renderSectionHeader={({section:{name}})=>(
                    <Text style={{fontSize:32, backgroundColor:"red",}}>{name}</Text>
                )
            }
            />


        </View>
    )
}
export default SecList;