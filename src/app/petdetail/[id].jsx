import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import usePetContext from "../../components/context/usePetContext";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function PetDetail() {
  const { id } = useLocalSearchParams();
  const { pets } = usePetContext();
  const pet = pets.find((p) => p.id === id);

  if (!pet) return <Text>Pet não encontrado</Text>;

  return (
    <View style={styles.container}>
      <Pressable style={styles.arrowBack} onPress={() => router.navigate('/mypets')}>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.icon} />
      </Pressable>
      <Image source={{ uri: pet.photo }} style={styles.image} />
      <Text style={styles.name}>{pet.name}</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>{pet.breed}</Text>
        <Text style={styles.info}>{pet.age} anos</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ficha do animal</Text>
      </TouchableOpacity>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.box}><Text>Contato</Text></TouchableOpacity>
        <TouchableOpacity style={styles.box}><Text>Problemas de Saúde</Text></TouchableOpacity>
        <TouchableOpacity style={styles.box}><Text>Vacinas</Text></TouchableOpacity>
        <TouchableOpacity style={styles.box}><Text>Alimentação</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFD400", padding: 20 },
  image: { width: 140, height: 140, borderRadius: 70, alignSelf: "center", marginTop: 40 },
  name: { fontSize: 26, fontWeight: "bold", textAlign: "center", color: "#002E9D", marginTop: 10 },
  infoBox: { flexDirection: "row", justifyContent: "center", marginVertical: 10, gap: 10 },
  info: { backgroundColor: "#002E9D", color: "#fff", borderRadius: 20, padding: 6, fontSize: 16 },
  button: {
    backgroundColor: "#002E9D",
    borderRadius: 12,
    padding: 10,
    marginVertical: 12,
  },
  buttonText: { color: "#FFD400", fontWeight: "bold", textAlign: "center" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 10 },
  box: {
    backgroundColor: "#93B4FF",
    borderRadius: 16,
    width: "48%",
    padding: 20,
    alignItems: "center",
  },
});
