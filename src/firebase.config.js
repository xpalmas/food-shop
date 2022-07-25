import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAhNpUoBukj9XD5goQCgRrbYvW2iM7YPmU",
    authDomain: "food-shop-534d9.firebaseapp.com",
    databaseURL: "https://food-shop-534d9-default-rtdb.firebaseio.com",
    projectId: "food-shop-534d9",
    storageBucket: "food-shop-534d9.appspot.com",
    messagingSenderId: "102283846020",
    appId: "1:102283846020:web:6d46ac61d929051bee7dd1"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};
