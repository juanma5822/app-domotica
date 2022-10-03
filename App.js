import React from "react"
import { Text, View, SafeAreaView, StyleSheet, Dimensions  } from "react-native"
import { LineChart, ProgressChart } from "react-native-chart-kit"
import ExampleChart from "./components/Example"
import Indicator from "./components/Indicator"


const App = () => {
  return (
    <SafeAreaView>
      <View style = {styles.container} >
        <ExampleChart title='example variable'/>
        <Indicator title='example variable'/>
        
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