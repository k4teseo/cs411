import { View } from "@/components/Themed";
import { Text, FlatList } from "react-native";
import { styles } from "../../assets/my_styles";
import { useState, useEffect } from "react";

// Define the Joke type
type Joke = {
  id: number;
  joke: string;
  contributor: string;
};

export default function JokeListScreen() {
  // Declare state variable that will hold API response
  const [jokesList, setJokesList] = useState<Joke[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch all jokex from the API
  const fetchJokesList = async () => {
    const response = await fetch("http://10.0.0.171:8000/dadjokes/api/jokes");
    const data = await response.json();
    setJokesList(data);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchJokesList();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchJokesList();
  }, []);

  return (
    <View style={styles.container}>
      // Display the list of Jokes
      <FlatList
        data={jokesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.joke}</Text>
            <Text>{item.contributor}</Text>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}
