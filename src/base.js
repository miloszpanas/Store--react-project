import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiH4G8A0sM0voLhx3qTS_N5gHBBlQtg_4",
  authDomain: "react-store-project.firebaseapp.com",
  databaseURL: "https://react-store-project.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is  a named export
export { firebaseApp };

// default export
export default base;
