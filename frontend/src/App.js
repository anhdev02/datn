import { useEffect } from 'react';
import './App.css';
import AppRoute from './route/AppRoute';
import { gapi } from 'gapi-script';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const clientId = '335382432614-f0dk0dgc63afpf808693jrtjtqigggs4.apps.googleusercontent.com';

const firebaseConfig = {
  apiKey: "AIzaSyAGwSK7CZ8y_HcDsfp9om80T8_g-IhUTtQ",
  authDomain: "locknlock-d1171.firebaseapp.com",
  projectId: "locknlock-d1171",
  storageBucket: "locknlock-d1171.appspot.com",
  messagingSenderId: "665280456918",
  appId: "1:665280456918:web:780e0797768823eb6d4177",
  measurementId: "G-JPWM8RHNYX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  useEffect(() => {
    const loadGoogleSignInAPI = () => {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: clientId,
          scope: ''
        }).catch((error) => {
          console.error('Không thể khởi tạo Google Sign-In API:', error);
        });
      });
    };
  
    loadGoogleSignInAPI();
  }, []);
  return (
    <AppRoute/>
  );
}

export default App;
