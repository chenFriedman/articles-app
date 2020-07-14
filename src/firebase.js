// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';
const config = {
  apiKey: "AIzaSyCH7W8TDbJWaSXUFwsM2AdsAwmlMLmXqBw",
  authDomain: "articles-app.firebaseapp.com",
  databaseURL: "https://articles-app-c7b10.firebaseio.com/",
  projectID: "articles-app-c7b10",
  storageBucket: "articles-app.appspot.com",
  // messagingSenderId: ""
}
firebase.initializeApp(config);

export default firebase;