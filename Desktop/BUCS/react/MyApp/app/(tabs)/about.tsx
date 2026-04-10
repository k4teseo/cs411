import { Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { styles } from "../../assets/my_styles";
const NYC = require("../../assets/images/NYC.jpeg");

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About NYC</Text>
      <Image source={NYC} style={styles.nyc} />
      <Text style={styles.text}>
        New York City is the largest city in America. It also happens to be my
        home. We have the best bacon egg & cheese sandwiches in the world.
      </Text>
    </View>
  );
}
