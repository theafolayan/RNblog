import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import StoryblokClient from "storyblok-js-client";
// const articles = [
//   {
//     title: "Article 1",
//     published_at: "Wed 25 2023",
//     description:
//       "Artile 1 is an example of how a subscription can work at scale.",
//   },
//   {
//     title: "Article 2",
//     published_at: "Wed 25 2023",
//     description:
//       "Artile 1 is an example of how a subscription can work at scale.",
//   },
//   {
//     title: "Article 3",
//     published_at: "Wed 25 2023",
//     description:
//       "Artile 1 is an example of how a subscription can work at scale.",
//   },
//   {
//     title: "Article 4",
//     published_at: "Wed 25 2023",
//     description:
//       "Artile 1 is an example of how a subscription can work at scale.",
//   },
//   {
//     title: "Article 1",
//     published_at: "Wed 25 2023",
//     description:
//       "Artile 1 is an example of how a subscription can work at scale.",
//   },
//   {
//     title: "Article 1",
//     published_at: "Wed 25 2023",
//     description:
//       "Artile 1 is an example of how a subscription can work at scale.",
//   },
// ];

const Storyblok = new StoryblokClient({
  accessToken: "bJQrwmwzfdfhYHlZQ3YuYwtt",
});
const RenderEmptycomponent = () => (
  <View style={styles.emptyStateView}>
    <Text style={styles.description}>
      Sit tight user, articles will show up here once they're fetched
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
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <View style={styles.pageContainer}>
      <FlatList
        ListEmptyComponent={RenderEmptycomponent}
        data={articles}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.title}> Welcome to RN Blog</Text>
            <Text>
              Here, you'll find a lot of stuff that contains stuff about a lot
              of stuff. You could almost say it's a blog for stuff
            </Text>
          </View>
        }
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

const styles = StyleSheet.create({
  pageContainer: {
    paddingHorizontal: 20,
  },
  headerContainer: {
    marginTop: 40,
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "red",
    paddingVertical: 20,
  },
  emptyStateView: {
    alignItems: "center",
  },
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    marginVertical: 5,
    fontWeight: "600",
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
  },
  date: {
    fontSize: 13,
    color: "grey",
  },
});
