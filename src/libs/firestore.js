import firebase from 'firebase/app'
// Required for side-effects
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAgvbmOg2eHeAN1TXF85p4l2yEkIkjQ2Bk',
  authDomain: 'arielmagbanua.firebaseapp.com',
  databaseURL: 'https://arielmagbanua.firebaseio.com',
  projectId: 'arielmagbanua',
  storageBucket: 'arielmagbanua.appspot.com',
  messagingSenderId: '40927591444',
  appId: '1:40927591444:web:e5b68237bd554c32947b01',
  measurementId: 'G-J9DDBCR3Z0'
})

const firestore = firebase.firestore()

export {
  firestore
}
