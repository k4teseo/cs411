import { Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { styles } from "../../assets/my_styles";
const headshot = require("../../assets/images/Headshot.png");

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Image source={headshot} style={styles.headshot} />
      <Text style={styles.text}>
        My name is Kate and I am a senior studying computer science at Boston
        University. I am originally from New York City, and I love traveling,
        trying new cafes, and DJing.
      </Text>
    </View>
  );
}
