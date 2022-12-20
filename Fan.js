
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

var power = document.getElementById("power");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

var propeller_id = document.getElementById("propeller_id");
let onoff = 0;

power.onclick = function() {
    if(onoff == 0)
    {
        onoff = 1;
        document.getElementById("power").src = "./img/67.png"
        database.ref("/LIVING ROOM/FAN").update({
            "STATUS" : "ON" 
        });
    }
    else
    {
        onoff = 0;
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
        
        document.getElementById("propeller_id").style.animationDuration = "1s";
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
// ------------------------------ĐỒNG BỘ-------------------------------------------------------
database.ref("/LIVING ROOM/FAN/STATUS").on("value", function(snapshot3_1)
{
    if(snapshot3_1.exists()){
        var  stt = snapshot3_1.val();
        console.log(stt);
    }
    database.ref("/LIVING ROOM/FAN/LEVEL").on("value", function(snapshot3)
    {
        if(snapshot3.exists()){
            var  level = snapshot3.val();
            console.log(level);
        }

        if(stt == "OFF")
        {
            document.getElementById("power").src = "./img/66.png"

            document.getElementById("button1").src = "./img/69.png"
            document.getElementById("button2").src = "./img/71.png"
            document.getElementById("button3").src = "./img/73.png"

            document.getElementById("propeller_id").style.animationDuration = "0s";
        }

        if(level == 0 && stt == "OFF")
        {
            document.getElementById("power").src = "./img/66.png"

            document.getElementById("button1").src = "./img/69.png"
            document.getElementById("button2").src = "./img/71.png"
            document.getElementById("button3").src = "./img/73.png"

            document.getElementById("propeller_id").style.animationDuration = "0s";
        }

        if(level == 0 && stt == "ON")
        {
            document.getElementById("power").src = "./img/67.png"

            document.getElementById("button1").src = "./img/69.png"
            document.getElementById("button2").src = "./img/71.png"
            document.getElementById("button3").src = "./img/73.png"

            document.getElementById("propeller_id").style.animationDuration = "0s";
        }

        if(level == 1 && stt == "ON")
        {
            document.getElementById("power").src = "./img/67.png"

            document.getElementById("button1").src = "./img/70.png"
            document.getElementById("button2").src = "./img/71.png"
            document.getElementById("button3").src = "./img/73.png"
            
            document.getElementById("propeller_id").style.animationDuration = "0.75s";
        }

        if(level == 2 && stt == "ON")
        {
            document.getElementById("power").src = "./img/67.png"

            document.getElementById("button1").src = "./img/69.png"
            document.getElementById("button2").src = "./img/72.png"
            document.getElementById("button3").src = "./img/73.png"
            
            document.getElementById("propeller_id").style.animationDuration = "0.5s";
        }

        if(level == 3 && stt == "ON")
        {
            document.getElementById("power").src = "./img/67.png"
            
            document.getElementById("button1").src = "./img/69.png"
            document.getElementById("button2").src = "./img/71.png"
            document.getElementById("button3").src = "./img/74.png"
            
            document.getElementById("propeller_id").style.animationDuration = "0.25s";
        }
    });
});