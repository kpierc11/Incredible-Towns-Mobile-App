import React, { ReactComponentElement, ReactElement, useState } from "react";
import { ScrollView } from "native-base";
import SearchBar from "../ui/SearchBar";
import firebaseConfig from "../../firebase";
import DirectoryCard from "../ui/DirectoryCard";

function Directory() {
  const db = firebaseConfig.firestore();

  const [directoryCards, setDirectoryCards]: any = useState([]);

  React.useEffect(() => {
    db.collection("Business")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          setDirectoryCards(
            <DirectoryCard
              uri={documentSnapshot.get("image")}
              heading={documentSnapshot.get("name")}
              text={documentSnapshot.get("description")}
            />
          );
        });
      });
  });

  return (
    <>
      <ScrollView>
        <SearchBar />
        {directoryCards}
      </ScrollView>
    </>
  );
}

export default Directory;
