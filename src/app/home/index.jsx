import { View, Image, StyleSheet, Pressable, Text} from "react-native"
import { router } from "expo-router";

export default function Home(){
    return(
        <View style={styles.container} >

           <Image style={styles.image} source={require("@/assets/imagens/header.png")} />

           <Pressable onPress={() => router .navigate('/signin')}>
           <Image  source={require("@/assets/imagens/localizacao.png")} />
           <Text>Esqueci a senha</Text>
           </Pressable>
           
        </View>
    )
}


const styles = StyleSheet.create({
 
    image:{
        width:413
    }

})
