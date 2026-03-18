import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmQ9bkFO9BkE5eeUfc0NxDhenmL69e0f0",
  authDomain: "campus-language-exchange.firebaseapp.com",
  databaseURL: "https://campus-language-exchange-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "campus-language-exchange",
  storageBucket: "campus-language-exchange.firebasestorage.app",
  messagingSenderId: "378531074468",
  appId: "1:378531074468:web:da07ccc26885f948027131",
  measurementId: "G-PW2XZM5F8L"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };