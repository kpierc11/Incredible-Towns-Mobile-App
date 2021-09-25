import React, { useEffect, useState } from "react";
import { ScrollView } from "native-base";
import firebaseConfig from "../../firebase";
import Loading from "../ui/Loading";
import { Pressable } from "react-native";
import NewsCard from "../ui/cards/NewsCard";

function NewsScreen({ navigation }: any) {
  const [newsCards, setNewsCards]: any = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    firebaseConfig
      .firestore()
      .collection('News')
      .get()
      .then((snapshot) => {
          const data = snapshot.docs.map((doc) => {
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
          setNewsCards(data);
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
