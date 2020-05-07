import * as firebase from 'firebase';
import 'firebase/firestore';
import product from '../models/productModel';

const firebaseConfig = {
    apiKey: "AIzaSyDruYB-2SPSCvQ_OzRbPYLOd5EDqKiy674",
    authDomain: "hill-interiors-app.firebaseapp.com",
    databaseURL: "https://hill-interiors-app.firebaseio.com",
    projectId: "hill-interiors-app",
    storageBucket: "hill-interiors-app.appspot.com",
    messagingSenderId: "949832383871",
    appId: "1:949832383871:web:c4ac9b36fdcd5b7708ee4a",
    measurementId: "G-Y0W42R3R97"
  };

let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore(app);

// export const getAllProducts = () => db.collection("products").get().then((querySnapshot) => {
//     let fetchedProducts = [];
//     querySnapshot.forEach((doc) => {
//         const data = {id: doc.id, ...doc.data()};
//         fetchedProducts.push(new product(...data));
//         // console.log(data)
//     });
//     return fetchedProducts;
// });

export const getAllProducts = async () => {
    const snapshot = await firebase.firestore().collection('products').get();
    return snapshot.docs.map(doc => {
        const data = doc.data();
        return new product(
            doc.id,
            data.code,
            data.name,
            data.description,
            data.imageURLs,
            data.stock,
            data.height,
            data.width,
            data.depth,
            data.weight,
            data.color,
            data.material,
            data.price
            );
    });
}
