import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import StackNavigation from "./src/navigation/StackNavigate";

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}
export default App;