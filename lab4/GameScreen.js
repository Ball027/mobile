import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput,Keyboard } from "react-native";
import Colors from "../constants/colors";

const GameScreen = (props) => {
  // ...เพิ่มโค้ดกำหนด state...
  const [enteredValue,setEnteredValue] = useState("");
  const [selectedNumber,setSelectedNumber] = useState();
  const [confirmed,setConfirmed] = useState(false);
  const [rounds,setRounds] = useState(0);

  let confirmedOutput;

  // ส่วนแสดงผลลัพธ์การทายตัวเลขของผู้เล่น
  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{selectedNumber}</Text>
        </View>
        <Text style={styles.resultContainer}>The anwser is {props.answer > selectedNumber ? 'greater':props.answer < selectedNumber ? 'lower':props.answer == selectedNumber ?props.onGameOver(rounds):""} Round:{rounds}</Text>
      </View>
    );
  }

  // ฟังก์ชันสำหรับอัพเดทค่าที่ผู้เล่นกรอกให้กับสเตท enteredValue
   const numberInputHandler = (inputText) => {
    setEnteredValue(inputText)
  //   ...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ด้วยค่า inputText ที่รับมา
   };

  // ฟังก์ชันสำหรับเคลียร์ค่าในสเตท enteredValue
   const resetInputHandler = () => {
    setEnteredValue("")
     //...เพิ่มโค้ด...อัพเดทค่าสเตท enteredValue ให้เป็น ""
   };

  // ฟังก์ชันสำหรับอัพเดทค่าสเตทต่างๆ เมื่อผู้เล่นกด confirm
  const confirmInputHandler = () => {
    if(enteredValue===""){
      setSelectedNumber(0)
      setEnteredValue("")
      setConfirmed(true)
      setRounds(rounds+1);
      Keyboard.dismiss();
    }
    else{
      setSelectedNumber(parseInt(enteredValue))
      setEnteredValue("")
      setConfirmed(true)
      setRounds(rounds+1);
      Keyboard.dismiss(); 
    }
  //   ...เพิ่มโค้ด แปลงค่า enteredValue ให้เป็นตัวเลข
  //   ...เพิ่มโค้ด อัพเดทค่าในสเตทต่างๆ ตามที่กำหนด
   };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text>Guess a Number</Text>
        <TextInput
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          //...เพิ่ม property value และ onChangeText...
           value={enteredValue} 
           onChangeText={(input) => numberInputHandler(input)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={()=>{resetInputHandler();console.log(enteredValue)}}
                  
              
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={()=>{
                confirmInputHandler();
                console.log(enteredValue)}
              }/>
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 1,
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameScreen;
