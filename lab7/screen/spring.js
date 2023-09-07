
import React,{ useRef } from "react";
import {View,Text,Button,StyleSheet,Animated} from "react-native";

const Springscreen = () => {
  const springAnim = useRef(new Animated.Value(0.1)).current; // Initial value for opacity: 0

  const spring = () => {
    console.log("spring");
    Animated.spring(springAnim, {
      toValue: 0.5,
      friction:2,
      useNativeDriver: false,
    }).start(()=>{springAnim.setValue(0.1)});
  };

  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.imageContainer, { transform:[{scale:springAnim}] }]} source={require("../assets/IT_Logo.png")}>
      </Animated.Image>
      <Button style={styles.button} title="SPRING" onPress={spring} />
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      flex:1,
      width:1000,
      height:150
    },
    button:{
      flex:1,
      paddingHorizontal:20,
      margin:10,
    }
  });
  
  export default Springscreen;