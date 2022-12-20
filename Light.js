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



// let toggle = document.querySelector(".toggle");
// let text = document.querySelector(".text");
// function Animatedtoggle(){
//     toggle.classList.toggle("active");
//     if(toggle.classList.contains("active"))
//     {
//         // document.getElementById("denId_01_app").src = "./img/60.png";
//         text.innerHTML = "ON";
//         database.ref("/LIVING ROOM").update({
//             "Bulb1" : "ON",
            
//         })
//     }
//     else
//     {
//         // document.getElementById("denId_01_app").src = "./img/59.png";
//         text.innerHTML = "OFF";
//         database.ref("/LIVING ROOM").update({
//             "Bulb1" : "OFF",
//         })
//     }
// }

///////////////////////////////////////////////////
// let toggle2 = document.querySelector(".toggle2");
// let text2 = document.querySelector(".text2");
// function Animatedtoggle2(){
//     toggle2.classList.toggle("active2");
//     if(toggle2.classList.contains("active2"))
//     {
//         document.getElementById("denId_02_app").src = "./img/60.png";
//         text2.innerHTML = "ON";
//         database.ref("/LIVING ROOM").update({
//             "Bulb2" : "ON",
//         })
//     }
//     else
//     {
//         document.getElementById("denId_02_app").src = "./img/59.png";
//         text2.innerHTML = "OFF";
//         database.ref("/LIVING ROOM").update({
//             "Bulb2" : "OFF",
//         })
//     }
// }

var btnOn1 = document.getElementById("btnOnId_01");
var btnOff1 = document.getElementById("btnOffId_01");

var btnOn2 = document.getElementById("btnOnId_02");
var btnOff2 = document.getElementById("btnOffId_02");


btnOn1.onclick = function() {
    document.getElementById("denId_01_app").src = "./img/60.png"
    database.ref("/LIVING ROOM").update({
        "Bulb1" : "ON",
    });
    text1.innerHTML = "ON";
    
    btnOnId_01.style.backgroundColor = "rgb(106, 255, 0)";
    btnOffId_01.style.backgroundColor = "white";
}

    btnOn2.onclick = function() {
    document.getElementById("denId_02_app").src = "./img/60.png"
    database.ref("/LIVING ROOM").update({
        "Bulb2" : "ON",
    });
    text2.innerHTML = "ON";

    btnOnId_02.style.backgroundColor = "rgb(106, 255, 0)";
    btnOffId_02.style.backgroundColor = "white";
}

    btnOff1.onclick = function() {
    document.getElementById("denId_01_app").src = "./img/59.png"
    database.ref("/LIVING ROOM").update({
        "Bulb1" : "OFF",
    });
    text1.innerHTML = "OFF";
    Notification1.innerHTML = " ";

    btnOnId_01.style.backgroundColor = "white";
    btnOffId_01.style.backgroundColor = "rgb(255, 52, 52)";
}
    btnOff2.onclick = function() {
    document.getElementById("denId_02_app").src = "./img/59.png"
    database.ref("/LIVING ROOM").update({
        "Bulb2" : "OFF",
    });
    text2.innerHTML = "OFF";
    Notification2.innerHTML = " ";

    btnOnId_02.style.backgroundColor = "white";
    btnOffId_02.style.backgroundColor = "rgb(255, 52, 52)";
}


// *******************************************************************
database.ref("/LIVING ROOM/Check1").on("value", function(snapshot4_1)
{
    if(snapshot4_1.exists()){
        var  chk1 = snapshot4_1.val();
    }
    database.ref("/LIVING ROOM/Bulb1").on("value", function(snapshot4_b1)
    {
        if(snapshot4_b1.exists()){
            var  B1 = snapshot4_b1.val();
        }

        if(chk1 == 1 && B1 == "ON")
        {
            document.getElementById("denId_01_app").src = "./img/60.png"
            btnOnId_01.style.backgroundColor = "rgb(106, 255, 0)";
            btnOffId_01.style.backgroundColor = "white";

            text1.innerHTML = "ON";
            Notification1.innerHTML = " ";
        }
        if(chk1 == 0 && B1 == "ON")
        {
            document.getElementById("denId_01_app").src = "./img/60.png"
            btnOnId_01.style.backgroundColor = "rgb(106, 255, 0)";
            btnOffId_01.style.backgroundColor = "white";

            text1.innerHTML = "ON";
            Notification1.innerHTML = "Your lights are NOT ON yet";
        }
        console.log(chk1);
        if(B1 == "OFF")
        {
            document.getElementById("denId_01_app").src = "./img/59.png"
            btnOnId_01.style.backgroundColor = "white";
            btnOffId_01.style.backgroundColor = "rgb(255, 52, 52)";

            text1.innerHTML = "OFF";
            Notification1.innerHTML = " ";
        }
        console.log(chk1);
    });
});


database.ref("/LIVING ROOM/Check2").on("value", function(snapshot4_2)
{
    if(snapshot4_2.exists()){
        var  chk2 = snapshot4_2.val();
    }
    database.ref("/LIVING ROOM/Bulb2").on("value", function(snapshot4_b2)
    {
        if(snapshot4_b2.exists()){
            var  B2 = snapshot4_b2.val();
        }

        if(chk2 == 1 && B2 == "ON")
        {
            document.getElementById("denId_02_app").src = "./img/60.png"
            btnOnId_02.style.backgroundColor = "rgb(106, 255, 0)";
            btnOffId_02.style.backgroundColor = "white";

            text2.innerHTML = "ON";
            Notification2.innerHTML = " ";
        }
        if(chk2 == 0 && B2 == "ON")
        {
            document.getElementById("denId_02_app").src = "./img/60.png"
            btnOnId_02.style.backgroundColor = "rgb(106, 255, 0)";
            btnOffId_02.style.backgroundColor = "white";

            text2.innerHTML = "ON";
            Notification2.innerHTML = "Your lights are NOT ON yet";
        }
        console.log(chk2);
        if(B2 == "OFF")
        {
            document.getElementById("denId_02_app").src = "./img/59.png"
            btnOnId_02.style.backgroundColor = "white";
            btnOffId_02.style.backgroundColor = "rgb(255, 52, 52)";

            text2.innerHTML = "OFF";
            Notification2.innerHTML = " ";
        }
        console.log(chk2);
    });
});




// database.ref("/LIVING ROOM/Check1").on("value", function(snapshot4_1)
// {
//     if(snapshot4_1.exists()){
//         var  chk1 = snapshot4_1.val();
//     }
//     database.ref("/LIVING ROOM/Bulb1").on("value", function(snapshot4_b1)
//     {
//         if(snapshot4_b1.exists()){
//             var  B1 = snapshot4_b1.val();
//         }

//         if(chk1 == 1 && B1 == "ON")
//         {
//             document.getElementById("denId_01_app").src = "./img/60.png"
//             text.innerHTML = "ON";
//         }
//         if(chk1 == 0 && B1 == "ON")
//         {
//             document.getElementById("denId_01_app").src = "./img/59.png"
//             text.innerHTML = "OFF";
//         }
//         console.log(chk1);
//         if(chk1 == 0 || B1 == "OFF")
//         {
//             document.getElementById("denId_01_app").src = "./img/59.png"
//             text.innerHTML = "OFF";
//         }
//         console.log(chk1);
//     });
// });

// // --------------------------------------------------------------------------

// database.ref("/LIVING ROOM/Check2").on("value", function(snapshot4_2)
// {
//     if(snapshot4_2.exists()){
//         var  chk2 = snapshot4_2.val();
//     }
//     database.ref("/LIVING ROOM/Bulb2").on("value", function(snapshot4_b2)
//     {
//         if(snapshot4_b2.exists()){
//             var  B2 = snapshot4_b2.val();
//         }

//         if(chk2 == 1 && B2 == "ON")
//         {
//             document.getElementById("denId_02_app").src = "./img/60.png"
//             text2.innerHTML = "ON";
//         }
//         if(chk2 == 0 && B2 == "ON")
//         {
//             document.getElementById("denId_02_app").src = "./img/59.png"
//             text2.innerHTML = "OFF";
//         }
//         console.log(chk2);
//         if(chk2 == 0 || B2 == "OFF")
//         {
//             document.getElementById("denId_02_app").src = "./img/59.png"
//             text2.innerHTML = "OFF";
//         }
//         console.log(chk2);
//     });
// });