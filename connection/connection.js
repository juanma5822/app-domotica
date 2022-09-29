import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, update } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyBM8gM8N-s911h5UdOUnhJK6LmrwGk8SD0",
authDomain: "estado-73a8e.firebaseapp.com",
databaseURL: "https://estado-73a8e.firebaseio.com",
projectId: "estado-73a8e",
storageBucket: "estado-73a8e.appspot.com",
messagingSenderId: "372469981080",
appId: "1:372469981080:web:eca2386f401711f40715ed",
measurementId: "G-ZGXQHRLYR4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
console.log('APP NAME: ', app.name);

export function getData () {
  let returnArr = []
  let helper = []
  console.log('getting data from firebase');
  const db =  getDatabase()
  const dbState = ref(db, 'Estado', )
  try {
    onValue(dbState, (snapshot) => {
      let data = snapshot.val();
      console.log("DATA RETURNED=================>",data);
      returnArr.push(Object.keys(data))
      helper = returnArr.forEach((item) => {
        return helper.push(item)
      })
    })
  }catch (error) {
    console.log(error)
  }
  return helper
}

