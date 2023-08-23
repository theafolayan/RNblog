import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";

import { styles } from "./styles";

const Storyblok = new StoryblokClient({
  accessToken: "bJQrwmwzfdfhYHlZQ3YuYwtt",
});
const RenderEmpty = () => (
  <View style={styles.emptyStateView}>
    <Text style={styles.description}>
      Sit tight user, articles will show up here once they're fetched
    </Text>
  </View>
);

const RenderHeader = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.title}> Welcome to RN Blog</Text>
    <Text>
      Here, you'll find a lot of stuff that contains stuff about a lot of stuff.
      You could almost say it's a blog for stuff
    </Text>
  </View>
);

export default function HomeScreen() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    Storyblok.getAll("cdn/stories", {
      starts_with: "articles/",
    })
      .then((response) => {
        setArticles(response);
        console.log("RESPONSE", response);
        // const s = Storyblok.richTextResolver.render(response[2].content.text);
        // console.log(s);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.pageContainer}>
      <FlatList
        ListEmptyComponent={RenderEmpty}
        data={articles}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={RenderHeader}
        renderItem={({ item }) => {
          return (
            <ArticleCard
              title={item.name}
              published_at={item.published_at}
              description={item.content.teaser}
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
      <Text style={styles.date}>{published_at}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};
