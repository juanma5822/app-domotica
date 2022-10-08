import React from "react"
import { Text, View, SafeAreaView, StyleSheet, Dimensions  } from "react-native"
import { LineChart, ProgressChart } from "react-native-chart-kit"
import ExampleChart from "./components/Example"
import Indicator from "./components/Indicator"
import Route from "./components/Route"
import BezierExampleChart from "./components/Bezier"
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./navigation/Navigation"
import { Button } from "react-native-web"
import { getData } from "./connection/connection"




const App = () => {
  return (
    <SafeAreaView>
      <View style = {styles.container} >
        <ExampleChart title='First example variable'/>
        <Indicator data ={getData()}  title='Second example variable'/>
        <BezierExampleChart title='Third example variable'/>   
        <Button 
          title='Get Data'
          onPress={() => getData()}
        />  
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({  
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
   },
})


export default App