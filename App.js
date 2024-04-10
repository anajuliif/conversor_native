import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const [cel, setCelsius] = useState("");
  const [fah, setFarenheit] = useState("");

  function calcTemperatura() {
    fah = (parseFloat(cel) * 9) / 5 + 32;
    window.alert("A temperatura em fahrenheit é" + fah);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Conversor de temperaturas </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a temperatura em celsius"
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={calcTemperatura}
        onChangeText={(cel) => setCelsius(cel)}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fa",
    alignItems: "center",
  },
  botao: {
    borderRadius: 10,
    backgroundColor: "#ba55d3",
  },
  input: {
    borderRadius: 10,
    backgroundColor: "white",
    height: 20,
    width: 220,
  },
  titulo: {
    fontWeight: "bold",
  },
});
