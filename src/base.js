import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyBnQpFCJ0E4cCJgR7kjBJJAB8NnhZIm5sI",
    authDomain: "catch-of-the-day-mateus.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mateus.firebaseio.com",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };

export default base;
