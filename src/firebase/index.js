// Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

// Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import firebaseConfig from "@/firebase/firebaseConfig";

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
// var database = firebase.database();
// console.log(firebase)
// let db = firebase.firestore();
// console.log(db.collection("car"));
// db.collection("car").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//         console.log(doc.data())
//     });
// });

export default firebase;
