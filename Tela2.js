import { View, Text, StyleSheet } from "react-native";

export default function Tela2() {
  return (
    <View style={styles.tela}>
      <View style={styles.metadeCima}>
        <Text style={styles.texto}>TERCEIRO</Text>
        <Text style={styles.texto}>SEGUNDO</Text>
        <Text style={styles.texto}>PRIMEIRO</Text>
      </View>

      <View style={styles.metadeBaixo}>
        <View style={styles.quadrado}>
          <Text>3</Text>
        </View>
        <View style={styles.quadrado}>
          <Text>2</Text>
        </View>
        <View style={styles.quadrado}>
          <Text>1</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  metadeCima: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: 10,
  },
  texto: {
    fontSize: 20,
  },
  metadeBaixo: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "black",
    justifyContent: "space-around",
    alignItems: "center",
  },
  quadrado: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
