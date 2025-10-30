import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";


export default function Redefinir(){
    return(
        <View style={styles.container}>
            <View style={styles.white}>
                <Text style={styles.title}>
                    Bem Vindo!!
                </Text>
                 <Text style={styles.text}>
                    Informe o e-mail para qual deseja redefinir sua senha
                </Text>
                <TextInput/>
                 <Pressable style={styles.button} >
                    <Text style={styles.textobotao}>
                        ENVIAR
                    </Text>
                </Pressable>
            </View>
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
        paddingLeft:30,
        paddingBottom: 350,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    title:{
        color: 'black',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 85
        
    },
    text:{
        color: '#BLACK',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor:'#141496',
        borderRadius: 20,
        padding: 10,
        marginLeft: 100,
        marginRight:100


    },
    textobotao:{
        textAlign: 'center',
        color: '#fff',
    }


})

