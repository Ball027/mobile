
import React,{ useRef } from "react";
import {View,Text,Button,StyleSheet,Animated,Easing} from "react-native";

const Parallelscreen = () => {
  const springAnim = useRef(new Animated.Value(0.2)).current; // Initial value for opacity: 0
  const tranani = useRef(new Animated.Value(0)).current;

  const tran = tranani.interpolate({
    inputRange: [0, 0.25, 0.5, 0.75, 1],
    outputRange: [0, -50, 0, 50, 0],
  });

  const animate = ()=>{
    Animated.parallel([
      Animated.spring(springAnim, {
        toValue: 0.5,
        friction:2,
        useNativeDriver: false,
      }),
      Animated.timing(tranani, {
        toValue: 1,
        duration: 3000,
        easing: Easing.bounce,
        useNativeDriver: false,
      })
    ]).start(()=>{springAnim.setValue(0.2),tranani.setValue(0)})
  }
  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.imageContainer, { transform:[{scale:springAnim}] }]} source={require("../assets/IT_Logo.png")}>
      </Animated.Image>
      <Animated.Text style={[styles.text, { transform:[{scale:1},{translateX:tran}] }]}>Welcome to Faculty of IT!!</Animated.Text>
      <Button style={styles.button} title="RUN PARALLEL" onPress={animate} />
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      flex:1,
      width:700,
      height:300
    },
    text:{
      flex:1,
      fontSize:30,
      color:"gold",
      fontWeight:"bold"
    },
    button:{

      paddingHorizontal:20,
      margin:10,
    }
  });
  
  export default Parallelscreen;