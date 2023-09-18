// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVZ6bUJrrytWEdou-fHMQjae0kSEffgKs",
  authDomain: "meal-mate-4958a.firebaseapp.com",
  projectId: "meal-mate-4958a",
  storageBucket: "meal-mate-4958a.appspot.com",
  messagingSenderId: "196986606489",
  appId: "1:196986606489:web:3e568da580f6abcdf53908",
  measurementId: "G-1PGKY219TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;