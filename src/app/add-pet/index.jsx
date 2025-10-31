import { useState } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet } from "react-native";
import usePetContext from "../../components/context/usePetContext";
import { router } from "expo-router";

export default function AddPet() {
  const { addPet } = usePetContext();
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSave = () => {
    if (!name || !breed || !age || !photo) return alert("Preencha todos os campos!");
    addPet({ name, breed, age, photo });
    router.replace("/mypets");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Pet</Text>
      <Text>Foto do Pet:</Text>
      <TextInput style={styles.input} placeholder="URL da Foto" value={photo} onChangeText={setPhoto} />
      {photo ? <Image source={{ uri: photo }} style={styles.preview} /> : null}
      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Raça" value={breed} onChangeText={setBreed} />
      <TextInput style={styles.input} placeholder="Idade" value={age} onChangeText={setAge} />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#fdcb58",
    borderColor: "#141496",  
    borderWidth: 20,          
    borderRadius: 6   
  },
  title: { 
    fontSize: 22, 
    fontWeight: "bold", 
    marginBottom: 16 
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  preview: { width: 100, height: 100, borderRadius: 50, alignSelf: "center", marginVertical: 10 },
});
