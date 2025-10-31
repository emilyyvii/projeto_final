import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native';
import Footer from "../components/Footer";
import { Ionicons } from '@expo/vector-icons';
 
export default function Index(){
 
    function signup(){
        router.navigate("/(drawer)/(tabs)")
    }
    return(
 
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require("@/assets/imagens/1.png")}
            />
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/signin')}>
                <Text style={styles.title}>PROFISSIONAL</Text>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles.button} onPress={() => router.navigate('/contact')}>
                <Text style={styles.title}>ENCONTROU PET</Text>
            </TouchableOpacity>
 
            <TouchableOpacity style={styles.button} onPress={() => router .navigate('/signin')}>
                <Text style={styles.title}>DONO PET</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
                <Footer
                    text="Apaixonados por animal"
                    textColor="#fff"
                    showImage={false}
                />
            </View>

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
 
 