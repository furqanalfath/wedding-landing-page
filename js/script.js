document.getElementById("namaundangan").innerHTML = 
decodeURIComponent(window.location.search.substring(1));


// Countdown timer
var deadline = new Date("Oct 1, 2023 09:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("timer").innerHTML = "<div class='ti hari'>" + days + "<p>Days</p> </div>"
+ "<div class='ti jam'>" + hours + "<p>Hours</p> </div>" + "<div class='ti menit'>" + + minutes + " <p>Minutes</p> </div>" 
+ "<div class='detik'>" +seconds + " <p>Seconds</p> </div>";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demos").innerHTML = "EXPIRED";
    }
}, 1000);




// Play Audio
function playAudio() { 
    const x = document.getElementById("tes");
    const overlay = document.getElementById("undangan")
    x.play(); 
    x.loop = true;
    overlay.classList.add("anotherclass");
    //classes.add("hide-overlay");
  } 