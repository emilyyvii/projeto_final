import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_TELEFONE = "@contact_telefone";
const KEY_EMAIL = "@contact_email";

export default function Contact() {
  const router = useRouter();

  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const [editandoTelefone, setEditandoTelefone] = useState(false);
  const [editandoEmail, setEditandoEmail] = useState(false);

  // carregar dados ao montar
  useEffect(() => {
    (async () => {
      try {
        const t = await AsyncStorage.getItem(KEY_TELEFONE);
        const e = await AsyncStorage.getItem(KEY_EMAIL);
        if (t !== null) setTelefone(t);
        if (e !== null) setEmail(e);
      } catch (err) {
        console.warn("Erro ao carregar dados:", err);
      }
    })();
  }, []);

  // salva um valor no AsyncStorage
  const saveToStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value ?? "");
    } catch (err) {
      console.warn("Erro ao salvar:", err);
    }
  };

  // alterna edição do telefone: quando fecha, salva
  const toggleEditTelefone = () => {
    const novo = !editandoTelefone;
    // se estamos saindo do modo edição, salvar
    if (editandoTelefone && !novo) {
      saveToStorage(KEY_TELEFONE, telefone);
      Keyboard.dismiss();
    }
    setEditandoTelefone(novo);
  };

  // alterna edição do email: quando fecha, salva
  const toggleEditEmail = () => {
    const novo = !editandoEmail;
    if (editandoEmail && !novo) {
      saveToStorage(KEY_EMAIL, email);
      Keyboard.dismiss();
    }
    setEditandoEmail(novo);
  };

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#fdcb58" />
        </Pressable>
        <Text style={styles.headerTitle}>Informações de contato</Text>
      </View>


      <View style={styles.Content}>
          {/* Telefone */}
          <View style={styles.infoBox}>
            <View style={styles.infoHeader}>
              <Text style={styles.label}>Número de telefone</Text>
              <Pressable onPress={toggleEditTelefone}>
                <Ionicons name="pencil" size={22} color="#fdcb58" />
              </Pressable>
            </View>
            {editandoTelefone ? (
              <TextInput
                style={styles.input}
                placeholder="Digite o novo número..."
                placeholderTextColor="#999"
                value={telefone}
                onChangeText={setTelefone}
                onSubmitEditing={toggleEditTelefone}
                returnKeyType="done"
              />
            ) : (
              <Text style={styles.value}>{telefone || "—"}</Text>
            )}
          </View>
          {/* Email */}
          <View style={styles.infoBox}>
            <View style={styles.infoHeader}>
              <Text style={styles.label}>E-mail</Text>
              <Pressable onPress={toggleEditEmail}>
                <Ionicons name="pencil" size={22} color="#fdcb58" />
              </Pressable>
            </View>
            {editandoEmail ? (
              <TextInput
                style={styles.input}
                placeholder="Digite o novo e-mail..."
                placeholderTextColor="#999"
                value={email}
                onChangeText={setEmail}
                onSubmitEditing={toggleEditEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="done"
              />
            ) : (
              <Text style={styles.value}>{email || "—"}</Text>
            )}
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7C843",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#002E9D",
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  headerTitle: {
    color: "#fdcb58",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
    Content: {
    marginTop: 300,
    },
  infoBox: {
    backgroundColor: "#142A8C",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    justifyContent: "center",
    width: '90%',
    alignSelf: "center",
    
  },
  infoHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    color: "#fdcb58",
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    color: "#fff",
    fontSize: 15,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
  },
});
