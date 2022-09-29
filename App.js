import React, {useState} from 'react';
import { StyleSheet,Pressable,Button,View, Text, Image, ScrollView, TextInput } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import {getData} from './connection/connection'

const retrieveData = getData()

console.log('RETRIEVED DATA: ', retrieveData)

const screenWidth = Dimensions.get("window").width;
const data1 = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};
const chartConfig = {
  backgroundGradientFrom: "#fefefe", // lado izquierdo color opacidad
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fefefe", //lado derecho color opacidad
  backgroundGradientToOpacity: 0.8,
  color: (opacity = 100) => `rgba(8,7,7)`, // Cambia color leyenda
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: retrieveData,
      color: (opacity = 0) => `rgba(224,36,8)`, // optional
      strokeWidth: 1 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};

const App = () => {

  const [lightPressed, SetlightPressed] = useState(0);

  let textLog = '';
  if (lightPressed > 1) {
    textLog = lightPressed + 'x onPress';
  } else if (lightPressed > 0) {
    textLog = 'onPress';
  }  

  return (
    <ScrollView>
      <Text style={{ justifyContent: "center", alignItems: "center", textAlign:"center" }} >Some more text</Text>
      <View style={{ justifyContent: "left", alignItems: "left" }}>
        
        
        <Image
          source={{
            uri: 'https://static.eldiario.es/clip/bf0f3543-8fc5-4b4a-a6e5-099c3f2420d3_16-9-discover-aspect-ratio_default_0.jpg',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      
      <Pressable
        onPress={() => {
          SetlightPressed((current) => current + 1);
          retrieveData()
        }}
        
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'green'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'ON'}
          </Text>
        )}
      </Pressable>
      <View style={styles.logBox}>
        <Text testID="pressable_press_console">{textLog}</Text>
      </View>
      <LineChart
        data={data}
        width={400}
        height={300}
        chartConfig={chartConfig}
        bezier
      />
      <ProgressChart
        data={data1}
        width={screenWidth}
        height={220}
        strokeWidth={12}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
        
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 2,
    width:80,
    height:50,
    justifyContent: 'center',
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

export default App;