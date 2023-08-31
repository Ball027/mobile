import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavoritesScreen = (props) => {
  // console.log(navigation)
  // const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  // return (
  //   <View style={styles.screen}>
  //     <MealList
  //       listData={favMeals}
  //       navigation={navigation}
  //     />
  //   </View>
  // );
  return (
    <View style={styles.screen}>
      <Text>The Favorites Screen!</Text>
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

export default FavoritesScreen;
