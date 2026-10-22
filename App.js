import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Welcome = ({code,name}) => {
  return (
    <Text>Welcome to {code}, - {name}</Text>
  )
}

class ModuleInfo extends React.Component {
  render() {
    return (<View>
       <Text>These are my modules this semester:</Text>
      <Welcome code ="C346" name="Mobile App Development" />
      <Welcome code ="C105" name="Introduction to programming" />
      <Welcome code ="C337" name="Immersive Technologies" />
      </View>
    )
  }
}



export default function App() {
  return (
    <View style={styles.container}>
      <ModuleInfo/>



      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
