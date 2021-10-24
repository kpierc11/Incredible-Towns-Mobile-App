import firebaseConfig from "../firebase";

interface IBusiness {
  city: string;
  description: string;
  email: string;
  image: string;
  name: string;
  phone: string;
  state: string;
  website: string;
  zipcode: string;
}

class DirectoryModel {
  constructor() {}

  async getAllBusinesses() {
    const data:IBusiness[] = []
    const businessRef = await firebaseConfig.firestore().collection('Business').orderBy('name').get();

    businessRef.query.onSnapshot((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{
          const business: IBusiness = {
            name: doc.get("name"),
            city: doc.get("city"),
            description: doc.get("description"),
            email: doc.get("email"),
            image: doc.get("image"),
            phone: doc.get("phone"),
            state: doc.get("state"),
            website: doc.get("website"),
            zipcode: doc.get("zipcode"),
          };
          data.push(business);
        })
    })

    return data;
  }
}

export default DirectoryModel;
