import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Footer from "../components/Footer";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("@/assets/imagens/1.png")}
      />

      {/* PROFISSIONAL */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/signin")}
      >
        <Text style={styles.title}>PROFISSIONAL</Text>
      </TouchableOpacity>

      {/* ENCONTREI PET (visitante) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/contact?tipo=encontrou")}
      >
        <Text style={styles.title}>ENCONTREI PET</Text>
      </TouchableOpacity>

      {/* DONO PET (exemplo) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.navigate("/signin")}
      >
        <Text style={styles.title}>DONO PET</Text>
      </TouchableOpacity>

      <Footer
        text="Apaixonados por animal"
        textColor="#fff"
        showImage={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 32,
        padding:60,
        backgroundColor:"#141496"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        color:"black",
        textAlign:"center"
    },
    button:{
        backgroundColor:"#fdcb58",
        borderRadius: 10,
        paddingHorizontal: 32,
        paddingVertical:10,
        width:"100%",
        height:50,
        top: 150
    },
    img:{
        width:300,
        height:75,
        top:80
    },
    footer: {
        marginTop: 320
    }
})
 
 
