import { ScrollView, Image } from "react-native";
import { Text, View } from "@/components/Themed";
import { styles } from "../../assets/my_styles";

export default function DetailScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Places I've Traveled</Text>
      <Image
        source={{
          uri: "https://cs-people.bu.edu/kateseo/images/amsterdam.jpg",
        }}
        style={styles.nyc}
      />
      <Text style={styles.title}>Amsterdam, Netherlands</Text>
      <Text style={styles.text}>
        Amsterdam is my favorite city in Europe. I've been there three times. My
        favorite places to go eat are Fou Fow Udon and Corner Store. My favorite
        place to shop is Nho Girl. My favorite clubs are Radion, Club RAUM, and
        Tillatec.
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Image
        source={{
          uri: "https://cs-people.bu.edu/kateseo/images/paris.jpg",
        }}
        style={styles.nyc}
      />
      <Text style={styles.title}>Paris, France</Text>
      <Text style={styles.text}>
        Paris is a place I want to move to eventually. I love Paris because it's
        a very beautiful city. I also love fashion, and the shopping in Paris is
        amazing. People say Parisians are rude, but I've only had good
        interactions with the people there. The only downside is that it can get
        quite expensive.
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Image
        source={{
          uri: "https://cs-people.bu.edu/kateseo/images/berlin.jpg",
        }}
        style={styles.nyc}
      />
      <Text style={styles.title}>Berlin, Germany</Text>
      <Text style={styles.text}>
        As a DJ and a techno music lover, Berlin is a must visit. I love this
        city because it is pretty affordable, and you can see how creative and
        artistic the people living there are. The clubs have some of the best
        soundsystems in the world, which is great for me as a music lover. The
        vintage shopping is also great.
      </Text>
    </ScrollView>
  );
}
