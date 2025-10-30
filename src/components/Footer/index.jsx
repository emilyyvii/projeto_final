import { StyleSheet, Text, View } from 'react-native'

export default function Footer(color) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, color]}>Apaixonados por animais</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    fontStyle: "italic",
  },
});

