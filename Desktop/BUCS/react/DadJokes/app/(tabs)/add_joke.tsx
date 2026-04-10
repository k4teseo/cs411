import { View } from "@/components/Themed";
import { TextInput, Button, Text } from "react-native";
import { styles } from "../../assets/my_styles";
import { useState } from "react";

export default function AddJoke() {
  // declare state variables
  const [joke, setJoke] = useState("");
  const [contributor, setContributor] = useState("");
  const [message, setMessage] = useState("");

  // Post new joke to API
  const addJoke = async () => {
    const response = await fetch("http://10.0.0.171:8000/dadjokes/api/jokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        joke: joke,
        contributor: contributor,
      }),
    });
    const newJoke = await response.json();
    console.log("new joke:", newJoke);
    setMessage("Joke added successfully!");

    // clear the input after submitting
    setJoke("");
    setContributor("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Dad joke"
          value={joke}
          onChangeText={setJoke}
        />
        <TextInput
          style={styles.input}
          placeholder="Contributor"
          value={contributor}
          onChangeText={setContributor}
        />
        <Button title="Add joke" onPress={addJoke} />
        <Text>{message}</Text>
      </View>
    </View>
  );
}
