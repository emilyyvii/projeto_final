import Button from "@/components/Button";
import { router } from "expo-router";
import { Image, View, Text, Pressable, StyleSheet, TextInput } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Footer from "../../components/Footer";

export default function SignUp(){
    return(
        <View style={styles.container}>
        <Image style={styles.image} source={require("@/assets/imagens/2.png")} />
  
        <View style={styles.card}>
        <View style={styles.socialContainer}>
           <FontAwesome name="google" size={40} color="#EA4335" />
           <FontAwesome name="facebook" size={40}  color="#1877F2" />
           <Ionicons name="mail" size={40} color="#000" />
        </View>
          <Text style={styles.title}>Bem vindo(a)!</Text>
  
          {/* Campo Nome */}
          <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor="#000"
            />
          </View>

           {/* Campo Email */}
           <View style={styles.inputContainer}>
           <Ionicons name="mail" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#000"
            />
          </View>

           {/* Campo Telefone */}
           <View style={styles.inputContainer}>
           <Ionicons name="call" size={20} color="#000" />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              placeholderTextColor="#000"
            />
          </View>
  
          {/* Campo Senha */}
          <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#000"
              secureTextEntry
            />
          </View>
  
          {/* Botão Criar */}
          <Button title={"Criar conta"} onPress={() => console.log("Entrou!")} />
        </View>
        <Footer />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#141496",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
        top: -20,
      },
    card: {
      backgroundColor: "#fff",
      borderRadius: 20,
      width: "85%",
      paddingVertical: 40,
      paddingHorizontal: 30,
      alignItems: "stretch",
      gap: 20,
      elevation: 5, // sombra no Android
      bottom: 120


    },
    title: {
      color: "#fdcb58",
      fontSize: 24,
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 15,
    },
    socialContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 20,
    },
    socialIcon: {
      width: 40,
      height: 40,
      resizeMode: "contain",
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      paddingVertical: 8,
      marginVertical: 10,
    },
    icon: {
      marginRight: 10,
    },
    input: {
      flex: 1,
      color: "#000",
      fontSize: 16,
      paddingVertical: 4,
    },
    password: {
      color: "#0c3f8c",
      textDecorationLine: "underline",
      textAlign: "left",
      marginVertical: 10,
    },
    button: {
      backgroundColor: "#141496",
      paddingVertical: 12,
      borderRadius: 10,
      marginTop: 10,
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    footerText: {
      color: "#fff",
      fontSize: 14,
      textAlign: "center",
      marginTop: 15,
    },
  });
  