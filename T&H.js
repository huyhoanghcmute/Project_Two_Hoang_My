const firebaseConfig = {
    apiKey: "AIzaSyDv0hgdYzZ7IajTbHz4bc0dAYeUp0OyXgA",
    authDomain: "do-an-2-6c5ed.firebaseapp.com",
    databaseURL: "https://do-an-2-6c5ed-default-rtdb.firebaseio.com",
    projectId: "do-an-2-6c5ed",
    storageBucket: "do-an-2-6c5ed.appspot.com",
    messagingSenderId: "686674470192",
    appId: "1:686674470192:web:6823cf9679c92c8491d4f5",
    measurementId: "G-QPYCGMWVHX"
  };
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

// ////////////////////////////////////////////////////////////////////
database.ref("/LIVING ROOM/Humi").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
    } else
        console.log("No data available!")
});

database.ref("/LIVING ROOM/Temp").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
    } else
        console.log("No data available!")
});

