import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({route,navigation}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  // const {title, steps, image, duration, complexity, affordability} = route.params;
  // return (
  //   <View style={styles.mealItem}>
  //     <View>
  //         <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
  //           <ImageBackground
  //             source={{ uri: image }}
  //             style={styles.bgImage}
  //           >
  //             <View style={styles.titleContainer}>
  //               <Text style={styles.title} numberOfLines={1}>
  //                 Dish: {title}
  //               </Text>
  //             </View>
  //           </ImageBackground>
  //         </View>
  //     </View>
          
  //     <View style={styles.screen}>
  //       <Text>Steps: {steps}</Text>
  //       <View style={styles.screen}>
  //         <Button
  //           title="Go Back to Categories"
  //           onPress={() => {
  //           // เขียนโค้ดเพิ่ม
  //           navigation.navigate("Categories");
  //           }}
  //         />
  //       </View>
  //     </View>
          
  //   </View>

  // );
  const name = route.params.mealtitle;
  const todo = route.params.mealsteps;

  return (
    <View style={styles.screen}>
      {/* <Text>The Meal Detail Screen!</Text> */}
      <Text>{name}</Text>
      <Text>{todo}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.popToTop()
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
