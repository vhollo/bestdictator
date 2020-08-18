/* import * as firebase from 'firebase';
import 'firebase/database'; */
const firebaseConfig = {
	apiKey: "AIzaSyD3s7aGtMrrXDSnXi-_F1VSmUspINoOC0A",
	authDomain: "best-dictator.firebaseapp.com",
	databaseURL: "https://best-dictator.firebaseio.com",
	projectId: "best-dictator",
	storageBucket: "best-dictator.appspot.com",
	messagingSenderId: "711065175489",
	appId: "1:711065175489:web:bd836a261972ef82015b40"
};
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let app = firebase.initializeApp(firebaseConfig)
export const db = app.firestore()
export { app };

/* firebase.initializeApp(firebaseConfig);
export { firebase };
export const db = firebase.firestore(); */