import firebase from 'firebase';

let firebaseConfig
const API = process.env.REACT_APP_WEATHER_API_KEY
eval('firebaseConfig=' + API);
// console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

function sign() {
    console.log('321');
    firebase.auth().signInWithEmailAndPassword('mingray@gmail.com', '123456')
        .then(() => {
            console.log('太神ㄌ');
        })
        .catch((error) => {
            console.log(error.message);
        }).then(() => {
            var user = firebase.auth().currentUser;
            console.log(user.email);
        })
}

console.log(sign())
console.log('123')

function signout() {
    console.log('321');
    firebase.auth().signOut().then(function () {
        console.log('太神ㄌ');
        var user = firebase.auth().currentUser;
        console.log(user.email);
    }).catch(function (error) {
        // An error happened.
    });
}