import * as firebase from 'firebase';
/**
 * Reemplazar los datos en config con la base de datos oficial
 */
const config = {
  apiKey: "AIzaSyCJG3bFbLAGNIJMD3oLgEzl2DyNNYDGP60",
  authDomain: "multiple-so-many-tests.firebaseapp.com",
  databaseURL: "https://multiple-so-many-tests.firebaseio.com",
  projectId: "multiple-so-many-tests",
  storageBucket: "multiple-so-many-tests.appspot.com",
  messagingSenderId: "322134810980"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};