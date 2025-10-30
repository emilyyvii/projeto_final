import { Image, View, Text, TextInput } from "react-native";
export default function SingIn(){
    return(
        <View>
        <Image source={require('@/assets/imagens/2.png')}/>
        <View>
           <Text>Bem vindo(a)</Text>
           <Text>Login:</Text>
            <TextInput/>
            <Text>Senha</Text>
            
        </View>
        </View>
    )
}