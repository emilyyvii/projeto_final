import { Image, View, Text, TextInput } from "react-native";
export default function Cadastro(){
    return(
        <View>
        <Image source={require('@/assets/imagens/2.png')}/>
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
        </View>
        </View>
    )
}