import firebase from 'firebase'
var config = { 
    apiKey: "AIzaSyD9NozfSULo1fw4ozE9opkUVS2NhCui1V8",
    authDomain: "hjoin-us.firebaseapp.com",
    databaseURL: "https://hjoin-us.firebaseio.com",
    projectId: "hjoin-us",
    storageBucket: "hjoin-us.appspot.com",
    messagingSenderId: "844233409758"
};
var fire = firebase.initializeApp(config);
export default fire;