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
    if (cel === "") {
      alert("Insira um valor no input, por favor");
    } else {
      const fahrenheit = (parseFloat(cel) * 9) / 5 + 32;
      setFahrenheit(fahrenheit);
      setModalVisible(true);
    }
  }
  //esta função vai limpar o input quando o usuário fechar o modal, por isso o setCelsius esta vazio
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
        //"onChangeText" vai mudar o valor de "cel" para o valor que o usuário inserir no input
        onChangeText={(cel) => setCelsius(cel)}
        inputMode="numeric"
        value={cel}
      />
      <TouchableOpacity style={styles.botao} onPress={calcTemperatura}>
        <Text>Calcular</Text>
      </TouchableOpacity>

      <Modal
        //o "transparent={true}" modal, permite que a tela do modal não ocupe a tela principal toda
        transparent={true}
        visible={modalVisible}
        //"onRequestFechar" está chamando a função "limparInput" para quando o modal for fechado, o input esteja limpo
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
