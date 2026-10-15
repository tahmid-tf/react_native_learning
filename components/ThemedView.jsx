import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";

const ThemedView = ({ style, children, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[{ backgroundColor: theme.uiBackground }, style]} {...props} />
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
