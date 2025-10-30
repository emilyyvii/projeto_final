import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'

export default function Footer (){
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Apaixonados por animais</Text>
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
        color: "#fff",
        fontSize: 15,
        fontStyle: "italic",
  
    }
})