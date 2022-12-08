// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDZUvub3LY4BvY0aLJB2nSVist1FaLSvXI",
	authDomain: "sanoma-1ed9f.firebaseapp.com",
	projectId: "sanoma-1ed9f",
	storageBucket: "sanoma-1ed9f.appspot.com",
	messagingSenderId: "516203677835",
	appId: "1:516203677835:web:7a3d1a857bd148eadbec8e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
