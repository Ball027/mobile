import React from "react";
// import library ที่จำเป็น
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
//import screen
import Springscreen from "../screen/spring";
import Sequencescreen from "../screen/sequence";
import Parallelscreen from "../screen/parallel";

const Tab = createBottomTabNavigator();



export default function MyNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Spring" component={Springscreen} options={{
          tabBarIcon: () => {
            return <Ionicons name="alert-outline" size={30} color="black" />;
          },
        }} />
        <Tab.Screen name="Sequence" component={Sequencescreen} options={{
          tabBarIcon:() =>{
            return<Ionicons name="cellular-sharp" size={30} color="black" />;
          }
        }}/>
        <Tab.Screen name="Parallel" component={Parallelscreen} options={{
          tabBarIcon:() =>{
            return<Ionicons name="pulse-sharp" size={30} color="black" />;
          }
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}