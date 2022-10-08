import React from "react"
import { Text, View, SafeAreaView, StyleSheet, Dimension, Button  } from "react-native"
import { LineChart, ProgressChart } from "react-native-chart-kit"



const Route = (props) => {
    return (
    <View>
    <Button 
     title = {props.route}
     onPress = {props.onPress}
    />
    </View>
    )
}  
export default Route