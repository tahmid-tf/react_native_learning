import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot, Stack } from "expo-router";

const RootLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ddd",
          },
          headerTintColor: "#333",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ headerShown: true, title: "Home" }}
        />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen name="contact" options={{ title: "Contact" }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
