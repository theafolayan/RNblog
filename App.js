import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "bJQrwmwzfdfhYHlZQ3YuYwtt",
});

Storyblok.getAll("cdn/stories", {
  starts_with: "articles/",
})
  .then((response) => {
    console.log("ARTICLES", response);
  })
  .catch((error) => {
    console.log(error);
  });

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});