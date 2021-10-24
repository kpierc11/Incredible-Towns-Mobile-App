import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import firebaseConfig from "../../firebase";
import Loading from "../ui/Loading";
import { Pressable } from "react-native";
import NewsCard from "../ui/cards/NewsCard";

function NewsScreen({ navigation }: any) {
  let newsCards:any[] = [];
  const [isLoading, setLoading] = useState(true);

  const newsRef = firebaseConfig.firestore().collection('News').get();

  useEffect(() => {
    newsRef
      .then((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            return (
              <Pressable
                key={doc.id}
                delayLongPress={180}
                onLongPress={() => {
                  navigation.navigate("Articles", {
                    date: doc.get("date"),
                    description: doc.get("description"),
                    image: doc.get("image"),
                    title: doc.get("title"),
                  });
                }}
              >
                <NewsCard
                  key={doc.id}
                  date={doc.get("date")}
                  description={doc.get("description")}
                  image={doc.get("description")}
                  title={doc.get("title")}
                />
              </Pressable>
            );
          });
          newsCards= data;
          setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return <ScrollView>{newsCards}</ScrollView>;
  }
}

export default NewsScreen;
