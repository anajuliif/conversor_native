import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6e6fa",
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#ba55d3",
    padding: 10,
  },
  input: {
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
    height: 40,
    width: 220,
    textAlign: "center",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  modal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
  },
  centralizar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textomodal: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default styles;
