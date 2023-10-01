import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
// import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
const FavoritesScreen = (props) => {
  const {navigation } = props
  const availableMeals = useSelector(state => state.meals.favoriteMeals)
  const favMeals = availableMeals.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return (
    <View style={styles.screen}>
      <MealList
        style={{ width: "100%" }}
        listdata={favMeals}
        navigation={navigation}
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

export default FavoritesScreen;