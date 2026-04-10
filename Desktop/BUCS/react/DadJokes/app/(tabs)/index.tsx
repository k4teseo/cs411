import { View } from "@/components/Themed";
import { Text, Image } from "react-native";
import { styles } from "../../assets/my_styles";
import { useState, useEffect } from "react";

// Define the types Joke and Picture
type Joke = {
  id: number;
  joke: string;
  contributor: string;
};
type Picture = {
  id: number;
  image_url: string;
  contributor: string;
};

export default function IndexScreen() {
  // Declare state variables that will hold API response
  const [joke, setJoke] = useState<Joke | null>(null);
  const [picture, setPicture] = useState<Picture | null>(null);

  // Fetch a joke from the random joke API
  const fetchJoke = async () => {
    const response = await fetch("http://10.0.0.171:8000/dadjokes/api/random");
    const data = await response.json();
    console.log("joke data:", data);
    setJoke(data);
  };
  useEffect(() => {
    fetchJoke();
  }, []);

  // Fetch a picture from the random picture API
  const fetchPicture = async () => {
    const response = await fetch(
      "http://10.0.0.171:8000/dadjokes/api/random_picture",
    );
    const data = await response.json();
    console.log("picture data:", data);
    setPicture(data);
  };
  useEffect(() => {
    fetchPicture();
  }, []);

  useEffect(() => {
    console.log(picture?.image_url);
  }, [picture]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        // Display the Joke
        <Text>{joke?.joke}</Text>
        //Display the Picture
        <Image source={{ uri: picture?.image_url }} style={styles.picture} />
      </View>
    </View>
  );
}
