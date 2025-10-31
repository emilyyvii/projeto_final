import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Footer({ text, textColor = "#000", showImage = false }) {
  return (
    <View style={styles.container}>
      {showImage && (
        <Image
          source={require("@/assets/imagens/")} 
          style={styles.image}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  image: {
    width: 120,
    height: 40,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontStyle: "italic",
  },
});
