import * as sapper from '@sapper/app';
//var globalFirebase = firebase;
/* const firebaseConfig = {
	apiKey: "AIzaSyD3s7aGtMrrXDSnXi-_F1VSmUspINoOC0A",
	authDomain: "best-dictator.firebaseapp.com",
	databaseURL: "https://best-dictator.firebaseio.com",
	projectId: "best-dictator",
	storageBucket: "best-dictator.appspot.com",
	messagingSenderId: "711065175489",
	appId: "1:711065175489:web:bd836a261972ef82015b40"
}; */
/*
firebase.initializeApp(firebaseConfig);
 */
/* import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let app = firebase.initializeApp(firebaseConfig)
window.db = app.firestore()
 */
sapper.start({
	target: document.querySelector('#sapper')
})//.then(() => { firebase.initializeApp(firebaseConfig) })

//export var globalFirebase = firebase