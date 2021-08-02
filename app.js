var mysound = document.getElementById("mysound");
var icon = document.getElementById("icon");

// Creating a function that will change 
// pause to play and vice-versa
icon.onclick = function() {
    if (mysound.paused) {

        // If paused then play the 
        // music and change the image
        mysound.play();
        icon.src = "img/pause.png";
    } else {
        mysound.pause();
        icon.src = "img/play.png";
    }
}    