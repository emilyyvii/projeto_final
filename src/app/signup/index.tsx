import { Image, View, Text, TextInput, StyleSheet, Button } from "react-native";
import { router } from "expo-router";
export default function Cadastro(){
    return(
        <View style={styles.container}>
        <Image  source={require('@/assets/imagens/2.png')}/>
        <View>
           <Text>Bem-vindo(a)</Text>

           <Text>Nome:</Text>
            <TextInput/>
            <Text>Email:</Text>
            <TextInput/>
            <Text>Telefone</Text>
            <TextInput/>
            <Text>Senha</Text>
            <TextInput/>
            <Button title="oi" onPress={() => router .navigate('/signin/index')}></Button>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:" #141496"
    }

  });