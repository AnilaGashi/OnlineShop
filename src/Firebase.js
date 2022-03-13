import firebase from 'firebase';
import store from './store';
const settings = { timestampsInSnapshots: true };



const config = {
    apiKey: "AIzaSyBS_B5DUk8Mj6ZyQhuoGKeqTHSNJqe1jd8",
    authDomain: "test-1-ee05d.firebaseapp.com",
    databaseURL: "https://test-1-ee05d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "test-1-ee05d",
    storageBucket: "test-1-ee05d.appspot.com",
    messagingSenderId: "38554853781",
    appId: "1:38554853781:web:7af0651e727a5cc525d69c",
    measurementId: "G-6LVDYBTHF8"
  };

firebase.initializeApp(config);

firebase.firestore().settings(settings);


firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

// firebase.auth().onAuthStateChanged(product => {
//     store.dispatch("fetchProduct", product);
// });

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

export default firebase;