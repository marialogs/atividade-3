import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Tela3() {
  return (
    <View style={styles.tela}>
      <View style={styles.topo}>
        <Text style={styles.bemVindo}>BEMVINDO</Text>
        <Text style={styles.nome}>FULANO</Text>
      </View>

      <View style={styles.meio}>
        <TouchableOpacity style={styles.botao}>
          <Text>COMPRAR</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        <TouchableOpacity style={styles.botaoSair}>
          <Text>SAIR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    padding: 10,
  },
  topo: {
    flex: 1,
  },
  bemVindo: {
    fontSize: 30,
  },
  nome: {
    fontSize: 16,
  },
  meio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  botao: {
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  rodape: {
    flex: 1,
    justifyContent: "flex-end",
  },
  botaoSair: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    alignItems: "center",
  },
});
