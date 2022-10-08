import React from "react"
import { Text, View, SafeAreaView, StyleSheet, Dimensions  } from "react-native"
import { LineChart, ProgressChart } from "react-native-chart-kit"
import { getData } from "../connection/connection"






const Indicator = (props) => {
    return (
      <View>
      <Text style={styles.title}>{props.title}</Text>
      <ProgressChart
        data={{
          labels: ["Temperature", "Humidity", "Pressure", "Optional"], // optional
          data: [0.6, 0.8, 0.7, 0.5] ,
        }}
        width={Dimensions.get("window").width - 16} // from react-native
        height={220}
        yAxisLabel="Temperature"
        chartConfig={{
          backgroundGradientFrom: 'grey',
          backgroundGradientTo: 'grey',
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style = {{
          borderRadius: 16,
        }}
        />
    </View>
    )
  
  }
const styles = StyleSheet.create({  
    container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
     },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'center',
    }
  })
  
  
  export default Indicator