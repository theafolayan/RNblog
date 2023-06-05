import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const ArticleCard = ({ title, description, published_at }) => {
  return (
    <View>
      <Text style={styles.title}>{article}</Text>
      <Text>{published_at}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
  },
  date: {
    fontWeight: 13,
  },
});
