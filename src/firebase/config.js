import {initializeApp} from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyAKSdWZf1796xM4Bd-RAMWE0ThZW2Bxzj4",
  authDomain: "my-first-project-d0cdf.firebaseapp.com",
  projectId: "my-first-project-d0cdf",
  storageBucket: "my-first-project-d0cdf.appspot.com",
  messagingSenderId: "199511164313",
  appId: "1:199511164313:web:d9c0a25f2f85b69b68ff08",
  measurementId: "G-MFEDNKTWVY"
};

export const Firebase = initializeApp(firebaseConfig)