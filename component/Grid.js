import React from "react";
import { StyleSheet, Text, View } from 'react-native';
const Grid = () => {
    const grap = [
        {
            id: 1,
            name: "ali"
        },
        {
            id: 2,
            name: "ali"
        },
        {
            id: 3,
            name: "ali"
        },
        {
            id: 4,
            name: "ali"
        },
        {
            id: 5,
            name: "ali"
        },
        {
            id: 6,
            name: "ali"
        },
        {
            id: 7,
            name: "ali"
        }
    ]
    return (
        

        <View style={{flexDirection:"row", flex:1, flexWrap:"wrap"}}>
             
                
            
            {
                grap.map((item) => <Text style= {styles.item}> {item.name} </Text>)
            }
        </View>
        
    )
}
const styles = StyleSheet.create({
    item: {
        justifyContent:"center",

          height:150,
          width:150, 
          borderColor:'red',
          color:"white",
          backgroundColor:"blue",
          padding:10, 
          margin:10, 
          textAlignVertical:"center", 
          textAlign:"center", 
          

    }
})
export default Grid; 