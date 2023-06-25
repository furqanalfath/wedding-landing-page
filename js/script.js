//document.getElementById("demo").innerHTML = 
//decodeURIComponent(window.location.search.substring(1));

var deadline = new Date("Oct 1, 2023 09:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("demos").innerHTML = "<span class='hari'>" + days + " hari </span>"
+ "<span class='jam'>" + hours + " jam </span>" + "<span class='menit'>" + + minutes + " menit </span>" 
+ "<span class='detik'>" +seconds + " detik </span>";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demos").innerHTML = "EXPIRED";
    }
}, 1000);