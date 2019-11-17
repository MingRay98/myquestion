import firebase from 'firebase';

let firebaseConfig
const API = process.env.REACT_APP_FIREBASE_API_KEY
const password = process.env.REACT_APP_PASSWORD_API_KEY
// console.log(password)
eval('firebaseConfig=' + API);
// console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();

function sign() {
    firebase.auth().signInWithEmailAndPassword('guest@gmail.com', password)
        .then(() => {
            console.log('login sucess');
        })
        .catch((error) => {
            console.log(error.message);
        }).then(() => {
            var user = firebase.auth().currentUser;
            console.log(user.email);
        })
}

console.log(sign())

function signout() {
    console.log('signout');
    firebase.auth().signOut().then(function () {
        console.log('signout sucess');
        var user = firebase.auth().currentUser;
        console.log(user.email);
    }).catch(function (error) {
        // An error happened.
    });
}

function getdata() {
    let array = []
    console.log('getdata');
    var docRef = db.collection("myquestion");
    docRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            window.array.push({ name: doc.id, score: doc.data().score });
        });
    });
    return array;
}

function storedata() {
    console.log('storedata')
    db.collection("myquestion").doc("handsome").set({
        score: 100
    });
    console.log('done')
}

const a = {

    saveData: (name = '不打名字的人', score = 0) => {
        console.log('storedata')
        db.collection("myquestion").doc(name).set({
            score: score
        });
        console.log('done')
    },
    async getData() {
        let array = []
        console.log('getdata');
        var docRef = db.collection("myquestion").orderBy('score', 'desc');
        await docRef.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                array.push({ name: doc.id, score: doc.data().score });
            });

        });
        return array;
    }

}

export default a;

