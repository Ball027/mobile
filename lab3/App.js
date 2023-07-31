import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View,TextInput, ScrollView} from 'react-native';

export default function App() {
  const [textinput,setText] = useState("");
  const [array,setArray] = useState([]);

  return (
    <>
      <View style={styles.container}>
        <Text style={{fontSize:20}}>สมุดบันทึก</Text>
        <TextInput keyboardType='default' style={styles.input} placeholder="เพิ่มข้อความที่นี้"
         onChangeText={(input) => {setText(input)}}/>
        <Button title='บันทึก' style={styles.button} onPress={()=>{array.push(textinput),setText(""),setArray(array)}}></Button>
      </View>
      <ScrollView contentContainerStyle={styles.container2}>
        <View style={{flexDirection:"column"}}>
          {array.map((item)=>{
            return(
                <Text style={{fontSize:20}}>{item}</Text>
            )
          })}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    margin:12,
    padding:5,
    borderWidth:1,
    width:200
  },
  button:{
    width:200,
    paddingHorizontal:12
  }
});
