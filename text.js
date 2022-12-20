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

// let a = document.getElementById('han');
// a.oninput =()=>{
//     let b = x.value - 135;
//     let c = y/3.93;
//     document.getElementById('circle').style.strokeDasharray = a.value;
//     document.querySelector('text').innerHTML = c.toFixed(2) + '%';
// }

// OFFICIAL
// let number = document.getElementById("number");
// let counter = 0;
// setInterval(() => {
//     if(counter == 25){
//         clearInterval();
//     }else{
//         counter +=1;
//         number.innerHTML = counter +"°C"; 
//     }
    
// }, 10)

// let number2 = document.getElementById("number2");
// let counter2 = 0;
// setInterval(() => {
//     if(counter2 == 80){
//         clearInterval();
//     }else{
//         counter2 +=1;
//         number2.innerHTML = counter2 +"%"; 
//     }
    
// }, 10)

// ///////////////////////////////////////////////////////////////



// TEST

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 25){
        clearInterval();
    }else{
        counter +=1;
        number.innerHTML = counter +"°C"; 
    }
    
}, 10)


// -----------------------------------------------------

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 80){
        clearInterval();
    }else{
        counter2 +=1;
        number2.innerHTML = counter2 +"%"; 
    }
    
}, 10)
// ///////////////////////////////////////////////////////////////










// function Animatedtoggle(){
//     toggle.classList.toggle("active");
//     if(toggle.classList.contains("active")){
//         text.innerHTML = "ON";
//     }
//     else{
//         text.innerHTML = "OFF";
//     }
// }

// let toggle =document.querySelector(".toggle");
// let text=document.querySelector(".text");
// function Animatedtoggle(){
//     toggle.classList.toggle("active");
//     if(toggle.classList.contains("active")){
//         document.getElementById("denId_01").src = "densang.png";
//         text.innerHTML = "ON";
//         firebase.database().ref("/phong_bep").update({
//             "Led1":'1'
            
//         })
//     }
//     else{
//         document.getElementById("denId_01").src = "light.png";
//         text.innerHTML = "OFF";
//         firebase.database().ref("/phong_bep").update({
//             "Led1":'0'
//         })
//     }
// }

// ///////////////////////////////////////////////////////////////////////////////
var power = document.getElementById("power");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var propeller_id = document.getElementById("propeller_id");
let onoff = 0;

power.onclick = function() {
    if(onoff == 1)
    {
        onoff = 0;
        document.getElementById("power").src = "./img/66.png"
        database.ref("/LIVING ROOM/FAN").update({
            "STATUS" : "OFF" 
        });
    }
    else
    {
        onoff = 1;
        document.getElementById("power").src = "./img/66.png"

        document.getElementById("button1").src = "./img/69.png"
        document.getElementById("button2").src = "./img/71.png"
        document.getElementById("button3").src = "./img/73.png"

        document.getElementById("propeller_id").style.animationDuration = "0s";
        database.ref("/LIVING ROOM/FAN").update({
            "STATUS" : "OFF",
            "LEVEL" : "0",
         });
    }
}

button1.onclick = function() {
    if(onoff == 1)
    {
        document.getElementById("button1").src = "./img/70.png"
        document.getElementById("button2").src = "./img/71.png"
        document.getElementById("button3").src = "./img/73.png"
        
        document.getElementById("propeller_id").style.animationDuration = "0.75s";
        database.ref("/LIVING ROOM/FAN").update({
            "LEVEL" : "1",
         });
    }
}

button2.onclick = function() {
    if(onoff == 1)
    {
        document.getElementById("button1").src = "./img/69.png"
        document.getElementById("button2").src = "./img/72.png"
        document.getElementById("button3").src = "./img/73.png"
        
        document.getElementById("propeller_id").style.animationDuration = "0.5s";
        database.ref("/LIVING ROOM/FAN").update({
            "LEVEL" : "2",
         });
    }
}

button3.onclick = function() {
    if(onoff == 1)
    {
        document.getElementById("button1").src = "./img/69.png"
        document.getElementById("button2").src = "./img/71.png"
        document.getElementById("button3").src = "./img/74.png"
        
        document.getElementById("propeller_id").style.animationDuration = "0.25s";
        database.ref("/LIVING ROOM/FAN").update({
            "LEVEL" : "3",
         });
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////
var btnOn1 = document.getElementById("btnOnId_01");
var btnOff1 = document.getElementById("btnOffId_01");

var btnOn2 = document.getElementById("btnOnId_02");
var btnOff2 = document.getElementById("btnOffId_02");


btnOn1.onclick = function() {
    document.getElementById("denId_01").src = "./img/60.png"
    database.ref("/LIVING ROOM").update({
        "Bulb1" : "ON",
    });
    btnOnId_01.style.backgroundColor = "rgb(106, 255, 0)";
    btnOffId_01.style.backgroundColor = "white";
}

btnOn2.onclick = function() {
    document.getElementById("denId_02").src = "./img/60.png"
    database.ref("/LIVING ROOM").update({
        "Bulb2" : "ON",
    });
    btnOnId_02.style.backgroundColor = "rgb(106, 255, 0)";
    btnOffId_02.style.backgroundColor = "white";
}

btnOff1.onclick = function() {
    document.getElementById("denId_01").src = "./img/59.png"
    database.ref("/LIVING ROOM").update({
        "Bulb1" : "OFF",
    });
    btnOnId_01.style.backgroundColor = "white";
    btnOffId_01.style.backgroundColor = "rgb(255, 52, 52)";
}
btnOff2.onclick = function() {
    document.getElementById("denId_02").src = "./img/59.png"
    database.ref("/LIVING ROOM").update({
        "Bulb2" : "OFF",
    });
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
            document.getElementById("denId_01").src = "./img/60.png"
            btnOnId_01.style.backgroundColor = "rgb(106, 255, 0)";
            btnOffId_01.style.backgroundColor = "white";
        }
        if(chk1 == 0 && B1 == "ON")
        {
            document.getElementById("denId_01").src = "./img/59.png"
            btnOnId_01.style.backgroundColor = "white";
            btnOffId_01.style.backgroundColor = "rgb(255, 52, 52)";
        }
        console.log(chk1);
        if(chk1 == 0 || B1 == "OFF")
        {
            document.getElementById("denId_01").src = "./img/59.png"
            btnOnId_01.style.backgroundColor = "white";
            btnOffId_01.style.backgroundColor = "rgb(255, 52, 52)";
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
            document.getElementById("denId_02").src = "./img/60.png"
            btnOnId_02.style.backgroundColor = "rgb(106, 255, 0)";
            btnOffId_02.style.backgroundColor = "white";
        }
        if(chk2 == 0 && B2 == "ON")
        {
            document.getElementById("denId_02").src = "./img/59.png"
            btnOnId_02.style.backgroundColor = "white";
            btnOffId_02.style.backgroundColor = "rgb(255, 52, 52)";
        }
        console.log(chk2);
        if(chk2 == 0 || B2 == "OFF")
        {
            document.getElementById("denId_02").src = "./img/59.png"
            btnOnId_02.style.backgroundColor = "white";
            btnOffId_02.style.backgroundColor = "rgb(255, 52, 52)";
        }
        console.log(chk2);
    });
});
