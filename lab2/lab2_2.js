import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.container}
        source={require('./assets/IT_Logo.png')}/>
      <Text>Programs</Text>
      <StatusBar style="auto" />
      <View style={styles.container2}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:20,
  },
  container2:{
  }
});
