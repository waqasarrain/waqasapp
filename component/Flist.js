import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
const Flist = () => {
    const user = [
        {
            id: 1,
            name: "waqas"
        },

        {
            id: 2,
            name: "nomi"
        },
        {
            id: 3,
            name: "Talha"
        },
        {
            id: 4,
            name: "Talha nabou"
        },
    ]
    return (
        <View>
            <Text>
                List with flat list componts
            </Text>
            <FlatList 
            data={user}
            renderItem={({item})=><Text>{item.name}</Text>}
            />
        </View>
    )
}

export default Flist; 