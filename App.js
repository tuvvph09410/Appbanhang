
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { LoginStackNatigation } from "./src/screenStack/StackNatigation";

export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNatigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
