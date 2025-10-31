
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import usePetContext from "../../components/context/usePetContext";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../../components/Footer";

export default function MyPets() {
  const { pets } = usePetContext();

  return (
    <View style={styles.container}>
      <Pressable style={styles.arrowBack} onPress={() => router.navigate('/home')}>
      <Ionicons name="arrow-back" size={24} color="black" style={styles.icon} />
      </Pressable>
      <Text style={styles.title}>Meus Pets</Text>
      <FlatList
        data={pets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.petCard}
            onPress={() => router.push(`/petdetail/${item.id}`)}
          >
            <Image source={{ uri: item.photo }} style={styles.photo} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => router.push("/add-pet")}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
      <Footer 
        text="Apaixonados por animal"
        textColor="#000"
        showImage={true}
        style={styles.footer}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#002E9D", padding: 16 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20 },
  petCard: { alignItems: "center", marginBottom: 16 },
  photo: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  name: { fontSize: 18, color: "#fff" },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
    backgroundColor: "#FFD400",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: { fontSize: 32, color: "#002E9D", fontWeight: "bold" },
  
});


