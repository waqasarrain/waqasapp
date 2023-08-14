import React, { useEffect, useState } from "react";
import { Button, Text, View } from 'react-native'
const Effecthook = () => {
    const [counts, SetCounts] = useState(0);
    const [number, setNumber] = useState(0);
    // useEffect(() => {
    //     console.warn(counts)
    // }, [counts])
    
    return (



        <View>
            <Text style={{ fontSize: 30 }}> count change: {counts} </Text>
            <Text style={{ fontSize: 30 }} > number change: {number} </Text>
            <Button title="press me to cont" onPress={() => SetCounts(counts + 1)} />
            <Button title="press me to number" onPress={() => setNumber(number + 1)} />
            <User info={{ counts, number }} />
        </View>


    )

}
const User = (props) => {

    useEffect(()=>{
        console.warn(props.info.number)
    },[props.info.counts])

   
    


    return (
        <View>
            <Text style={{ fontSize: 30 }}> {props.info.counts} </Text>
            <Text style={{ fontSize: 30 }}> {props.info.number} </Text>
        </View>
    )
}
export default Effecthook;














































// import React, { useEffect, useState } from "react";
// import { Button, Text, View } from 'react-native';
// const Effecthook = () => {

//     const [count, setCount] = useState(5);
//     const [number, setNumber] = useState(1);

//     // useEffect(() => {
//     //     console.warn(count)
//     // })

//     return (
//         <View>
//             <Text style={{ fontSize: 25 }}> Count Number is Updating: {count}  </Text>
//             <Text style={{ fontSize: 25 }}> Update Number: {number} </Text>
//             <Button title="Press me to update count number" onPress={() => setCount(count + 1)} />
//             <Button title="Press me to update number" onPress={() => setNumber(number + 1)} />
//             <User info={{number,count}} />
//         </View>
//     )
// }
// const User = (props) => {
//     // console.warn(props.info.number)

//     useEffect(()=>{
//         console.warn(props.info.number)
//     },[])


//     return (
//         <View>
//             <Text> Number: {props.info.number} </Text>
//             <Text> Count: {props.info.count}</Text>
//         </View>
//     )
// }
// export default Effecthook;