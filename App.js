import { StatusBar } from 'expo-status-bar';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Welcomepage from './screens/Welcome';
import Loginpage from './screens/login';
import Registerpage from './screens/signup';
import Dashboard from './screens/Dashboard';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzTRf46vzcCfsFd5NQuyx-OhZIgFKwUiI",
  authDomain: "learn-program-ce484.firebaseapp.com",
  projectId: "learn-program-ce484",
  storageBucket: "learn-program-ce484.appspot.com",
  messagingSenderId: "228895438039",
  appId: "1:228895438039:web:03631fb1d11f90fc9e2c92",
  measurementId: "G-72WQ6658MG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
signInWithEmailAndPassword(auth,'patelriya275@gmail.com', '123456789')
  .then(async(userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const token = await userCredential.user.getIdToken();
    console.log(token);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // ..
  });

  // await signInWithEmailAndPassword(auth, user.email, user.password)
  // .then(async (userCredential) => {
  //     token = await userCredential.user.getIdToken()
  //     let uid = await userCredential.user.uid
  //     await collections.users.updateOne({ _id: result._id }, { $set: {'firebase_uuid': uid} })
  // }).catch(async function(error) {
  //     if ('auth/user-not-found' == error.code) {
  //         await createUserWithEmailAndPassword(auth, user.email, user.password)
  //         .then(async (userCredential) => {
  //             token = await userCredential.user.getIdToken()
  //             let uid = await userCredential.user.uid
  //             await collections.users.updateOne({ _id: result._id }, { $set: {'firebase_uuid': uid} })
  //         }).catch(function(error) {
  //             console.log('error', error)
  //         })
  //     }
  // });

const navigator = createStackNavigator(
  {
    Welcome: Welcomepage,
    Login: Loginpage,
    Registerpage:Registerpage,
    Dashboard:Dashboard,
  },
  {
    initialRouteName:'Welcome',
    defaultNavigationOptions:{
      title: 'Learning'
    }
  }
);
export default createAppContainer(navigator);