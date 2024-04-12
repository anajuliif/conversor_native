import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  Button,
} from "react-native";
import styles from "./styles/StyleSheet";

//o useState da const "cel" vai inicializar com um valor vazio
//o useState da const "fah" também
//a const do modal vai inicializar com o valor de "false"
export default function App() {
  const [cel, setCelsius] = useState("");
  const [fah, setFahrenheit] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  //o parseFloat converte uma string para número
  //a const fahrenheit vai converter a temperatura de celsius para fahrenheit
  //o setFahrenheit vai receber esse novo valor da const fahrenheit, e a setFarenheit vai passar esse novo valor para a const fah
  function calcTemperatura() {
    const fahrenheit = (parseFloat(cel) * 9) / 5 + 32;
    setFahrenheit(fahrenheit);
    setModalVisible(true);
  }

  function limparInput() {
    setCelsius("");
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Conversor de temperaturas </Text>
      <TextInput
        style={styles.input}
        placeholder="Insira a temperatura em °C"
        onChangeText={(cel) => setCelsius(cel)}
        inputMode="numeric"
        value={cel}
      />
      <TouchableOpacity style={styles.botao} onPress={calcTemperatura}>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestFechar={() => {
          limparInput();
        }}
      >
        <View style={styles.centralizar}>
          <View style={styles.modal}>
            <Text style={styles.textomodal}>
              A temperatura convertida é {fah}°F
            </Text>
            <Button title="Fechar" onPress={limparInput} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
