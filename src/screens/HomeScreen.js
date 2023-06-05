import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const articles = [
  {
    title: "Article 1",
    published_at: "Wed 25 2023",
    description:
      "Artile 1 is an example of how a subscription can work at scale.",
  },
  {
    title: "Article 1",
    published_at: "Wed 25 2023",
    description:
      "Artile 1 is an example of how a subscription can work at scale.",
  },
  {
    title: "Article 1",
    published_at: "Wed 25 2023",
    description:
      "Artile 1 is an example of how a subscription can work at scale.",
  },
  {
    title: "Article 1",
    published_at: "Wed 25 2023",
    description:
      "Artile 1 is an example of how a subscription can work at scale.",
  },
  {
    title: "Article 1",
    published_at: "Wed 25 2023",
    description:
      "Artile 1 is an example of how a subscription can work at scale.",
  },
  {
    title: "Article 1",
    published_at: "Wed 25 2023",
    description:
      "Artile 1 is an example of how a subscription can work at scale.",
  },
];

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <FlatList
        data={articles}
        renderItem={({ item }) => {
          return (
            <ArticleCard
              title={item.title}
              published_at={item.published_at}
              description={item.description}
            />
          );
        }}
      />
    </View>
  );
}

const ArticleCard = ({ title, description, published_at }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{published_at}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
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
