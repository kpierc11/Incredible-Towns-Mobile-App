import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import firebaseConfig from "../../firebase";
import Loading from "../ui/Loading";
import { Pressable } from "react-native";
import NewsCard from "../ui/cards/NewsCard";

function NewsScreen({ navigation }: any) {
  let newsCards: any[] = [];
  const [isLoading, setLoading] = useState(true);

  const newsRef = firebaseConfig.firestore().collection("News").get();

  return (
    <ScrollView>
      <NewsCard
        date={"March 22, 2021"}
        description={
          "Bengaluru (also called Bangalore) is the center of India's high-tech industry. It is located in southern India on the Deccan Plateau.The city is also known for its parks and nightlife. Bangalore is the major center of India's IT industry, popularly known as the Silicon Valley of India."
        }
        image={
          "https://cloudinary.hbs.edu/hbsit/image/upload/s--EmT0lNtW--/f_auto,c_fill,h_375,w_750,/v20200101/6978C1C20B650473DD135E5352D37D55.jpg"
        }
        title={"The Garden City"}
      />
      <NewsCard
        date={"March 22, 2021"}
        description={
          "Bengaluru (also called Bangalore) is the center of India's high-tech industry. It is located in southern India on the Deccan Plateau.The city is also known for its parks and nightlife. Bangalore is the major center of India's IT industry, popularly known as the Silicon Valley of India."
        }
        image={
          "https://cloudinary.hbs.edu/hbsit/image/upload/s--EmT0lNtW--/f_auto,c_fill,h_375,w_750,/v20200101/6978C1C20B650473DD135E5352D37D55.jpg"
        }
        title={"The Garden City"}
      />
      <NewsCard
        date={"March 22, 2021"}
        description={
          "Bengaluru (also called Bangalore) is the center of India's high-tech industry. It is located in southern India on the Deccan Plateau.The city is also known for its parks and nightlife. Bangalore is the major center of India's IT industry, popularly known as the Silicon Valley of India."
        }
        image={
          "https://cloudinary.hbs.edu/hbsit/image/upload/s--EmT0lNtW--/f_auto,c_fill,h_375,w_750,/v20200101/6978C1C20B650473DD135E5352D37D55.jpg"
        }
        title={"The Garden City"}
      />
      <NewsCard
        date={"March 22, 2021"}
        description={
          "Bengaluru (also called Bangalore) is the center of India's high-tech industry. It is located in southern India on the Deccan Plateau.The city is also known for its parks and nightlife. Bangalore is the major center of India's IT industry, popularly known as the Silicon Valley of India."
        }
        image={
          "https://cloudinary.hbs.edu/hbsit/image/upload/s--EmT0lNtW--/f_auto,c_fill,h_375,w_750,/v20200101/6978C1C20B650473DD135E5352D37D55.jpg"
        }
        title={"The Garden City"}
      />
    </ScrollView>
  );
}

export default NewsScreen;
