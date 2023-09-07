import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, Easing } from "react-native";

const Sequencescreen = (props) => {
  const fadeout = useRef(new Animated.Value(1)).current;
  const spinAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  const spin = spinAnim.interpolate({
    inputRange: [0, 0.5,1],
    outputRange: ["0deg", "360deg", "0deg"],
  });

  const animate = ()=>{
    Animated.sequence([
      Animated.timing(fadeout, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }),
    Animated.timing(fadeout, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }),
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 5000,
      // easing: Easing.bounce,
      useNativeDriver: true,
    })
  ]).start(()=>{fadeout.setValue(1)})
  }

  return (
    <View style={styles.container}>
      <Animated.Image style={[styles.fadingContainer, { transform:[{scale:0.5},{rotate:spin}],opacity: fadeout }]} source={require("../assets/IT_Logo.png")}>
      </Animated.Image>
      <Button title="RUN SEQUENCE" onPress={animate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  fadingContainer: {
    flex:1,
    width:1000,
    height:50
  },
});

export default Sequencescreen;
