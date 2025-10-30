import Button from "@/components/Button";
import Footer from "../../components/Footer";
import { router } from "expo-router";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import { Ionicons} from "@expo/vector-icons";

export default function Password(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require("@/assets/imagens/2.png")} />
            <View style={styles.white}>
                <Text style={styles.title}>
                    Bem Vindo(a)!!
                </Text>
                <Image style={styles.img} source={require("@/assets/imagens/redefinir.png")} />
                 <Text style={styles.text}>
                    Insira uma nova senha
                </Text>
                 <View style={styles.linha}>
          <Ionicons name="lock-closed" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#000"
              secureTextEntry
            />
          </View>
          <View style={styles.linha}>
          <Ionicons name="lock-closed" size={20} color="#000" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirmação"
              placeholderTextColor="#000"
              secureTextEntry
            />
          </View>
                 <Button title={"REDEFINIR"} onPress={() => router.navigate('/signin')} />
                
            </View>
            <Footer />
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141496',
        alignItems: 'center',
        gap: 25,
        justifyContent: 'center'
    },
    white:{
        backgroundColor: "#fff",
        borderRadius: 20,
        width: "80%",
        padding: 35,
        gap: 20,
        bottom: 120,
        alignItems: "stretch",
        height: 480,
    },
    title:{
          color: "#000",
        fontSize: 26,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: -40,
        
    },
    text:{
        color: '#000',
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: 'bold',
    },
    input:{
        flex: 1,
        backgroundColor: "transparent",
        color: "#000",
        paddingVertical: 4,
    },
    icon: {
        marginRight: 8,
    },
    image:{
        top: 4,
    },
    linha:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 8,
        marginVertical: 10,
    },
    img:{
          width: 100,        
        height: 100,       
        resizeMode: 'contain',
        alignSelf: 'center',
        marginVertical: 10, 
    }
})

