import { ScrollView, View } from "native-base";
import React from "react";
import NewsArticleCard from "../ui/cards/NewsArticleCard";

function NewsArticlesScreen({ route }: any) {
  const { date, description, image, title } = route.params;

  return (
    <ScrollView>
      <NewsArticleCard
        date={date}
        description={description}
        image={image}
        title={title}
      />
    </ScrollView>
  );
}

export default NewsArticlesScreen;
