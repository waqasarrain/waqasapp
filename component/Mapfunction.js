import React from "react";
import { ScrollView, StyleSheet, Text, View, scro} from 'react-native';
const Mapfunction = () => {
    const user =[
        {
            id:1,
            name :"waqas"
        },
        {
            id:2,
            name :"Nomi"
        },
        {
            id:3,
            name :"TAlha"
        },
        {
            id:4,
            name :"hamza"
        },
        {
            id:5,
            name :"mlika"
        },
        {
            id:6,
            name :"Misha"
        },
        {
            id:7,
            name :"Sidra"
        }
    ]
    return (
        <View>
            <Text style={{
                fontSize: 31,
                
            }}>
                List with Map Function
            </Text>
            <ScrollView>
            
            {
               
                user.map((item)=><View style={styles.mapdesign} ><Text style={styles.textBox}>{item.name}</Text></View>)
                
            } 
            </ScrollView>

        </View>
    )
}
const styles= StyleSheet.create({
    textBox:{
        padding:2, 
        margen:10, 
        fontSize: 31, 
    },
    mapdesign:{
        borderBottomColor:"red",
        borderWidth:1,
        backgroundColor: 'blue',
        marginBottom:100,

    }
})

export default Mapfunction;