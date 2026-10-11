import { View, Text, StyleSheet } from "react-native";

export default function Tela1() {
  return (
    <View style={styles.tela}>
      <View style={styles.metadeCima}>
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

      <View style={styles.metadeBaixo}>
        <Text style={styles.titulo}>HELLO WORLD</Text>
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
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    padding: 10,
  },
  quadrado: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  metadeBaixo: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
  },
});
