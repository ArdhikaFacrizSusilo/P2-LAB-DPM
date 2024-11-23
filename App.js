import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.centerText}>Ardhika Facriz Susilo</Text>

      {/* Kontainer untuk kotak dengan tata letak FlexBox */}
      <View style={styles.boxContainer}>
        {/* Kotak 1 */}
        <TouchableOpacity style={[styles.box, styles.box1]}>
          <Text style={styles.boxText}>Kotak 1</Text>
        </TouchableOpacity>
        {/* Kotak 2 */}
        <TouchableOpacity style={[styles.box, styles.box2]}>
          <Text style={styles.boxText}>Kotak 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8", // Latar belakang abu-abu cerah
  },
  centerText: {
    fontSize: 24,
    color: "#4a90e2", // Warna biru
    fontWeight: "bold",
    marginBottom: 50,
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  box1: {
    backgroundColor: "#ff6f61", // Warna oranye kemerahan
  },
  box2: {
    backgroundColor: "#50c878", // Warna hijau
  },
  boxText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
