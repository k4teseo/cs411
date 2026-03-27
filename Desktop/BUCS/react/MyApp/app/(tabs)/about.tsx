import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Text>This is the about page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
