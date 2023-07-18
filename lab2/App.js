import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View,Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/IT_Logo.png')}/>
        <Text style={{fontSize:24}} >Programs</Text>
        
      </View>
      <ScrollView style={styles.container2}>
        <Image style={styles.Image}
          source={require('./assets/course-bach-it.jpg')}/>
        <TouchableOpacity><Text style={styles.text}>Infomation Technology</Text></TouchableOpacity>
        <Image style={styles.Image}
          source={require('./assets/course-bach-dsba.jpg')}/>
        <TouchableOpacity><Text style={styles.text}>Data Science and Business Analytics</Text></TouchableOpacity>
        <Image style={styles.Image}
          source={require('./assets/course-bach-bit.jpg')}/>
        <TouchableOpacity><Text style={styles.text}>Business Information Technology</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.text}>(International Program)</Text></TouchableOpacity>
        <Image style={styles.Image}
          source={require('./assets/course-bach-ait.jpg')}/>
        <TouchableOpacity><Text style={styles.text}>Artifical Intelligence Technology</Text></TouchableOpacity>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    flexDirection:'row',
    color:'blue',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container2: {
    flex:1,
    backgroundColor: 'lightgray',
    paddingHorizontal:2,
    gap:5,

  },
  logo:{
    width:80,
    height:80,
  },
  Image:{
    width:'100%',
  },
  text:{
    fontSize:20,
    textAlign:'center',
  }

});
