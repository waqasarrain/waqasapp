import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
const Loopcomponent = () => {
    const users = [
        {
            id: 1,
            name: "ali",
            Email: "waqaws@kjafd.com",
        },
        {
            id: 2,
            name: "TAlha",
            Email: "waqaws@fja.com",
        },
        {
            id: 3,
            name: "nomi",
            Email: "waqaws@fja",
        },
        {
            id: 4,
            name: "Subhan",
            Email: "waqaws@fja",
        }
    ]
    return (
        <View>
            <Text style={{ fontSize: 29 }}>
                Component in Loop With flatlsit
            </Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserData item={item} />}
                
            />
        </View>
    )
}
const UserData = (props) => {
    const item = props.item
    return (
        <View style={styles.item} >
            <Text style={styles.box}>{item.name}</Text>
            <Text style={styles.box}>{item.Email}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    item: {
        borderWidth: 2,
        flex: 1,
        flexDirection: "row",
        margin: 2,


    },
    box: {
        fontSize: 27,
        textAlign: "center",

    }
})
export default Loopcomponent;