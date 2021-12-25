import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD5gGkYAwND26y8nbLmFPPTyneADDx9KXI",
    authDomain: "test-form-c63aa.firebaseapp.com",
    databaseURL: "https://test-form-c63aa-default-rtdb.firebaseio.com",
    projectId: "test-form-c63aa",
    storageBucket: "test-form-c63aa.appspot.com",
    messagingSenderId: "726651045197",
    appId: "1:726651045197:web:5192c8e8db672e8e422304"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const providerGoogle = new firebase.auth.GoogleAuthProvider();
// const providerGithub = new firebase.auth.GithubAuthProvider();

export { db, auth, providerGoogle };
