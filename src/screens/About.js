import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.center}>
      <Text>This is the home About</Text>
      
   </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default About;