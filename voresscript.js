"use strict";


// ------Video-------

//used to configure how far away the video shoud play, could be made dynamic to adjust with viewport height
var hasClicked = false;
var videoPlayDistance = 400;

//all video elements in array
var videos = document.getElementsByTagName("video");
//all bounding client rects from video array
var videoBoundingClientRects = new Array(videos.length);


function updateVideoBoundingClientRects() {
    for (var i = 0; i < videos.length; i++) {
        videoBoundingClientRects[i] = videos[i].getBoundingClientRect();
    }
}

//used with videoBoundingClientRect array, index is index of said array
function getVideoDistanceFromViewport(index) {
    //gets height of viewport
    var viewPortHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    //gets the middle position of video and finds how far it is from the middle of the viewport
    return Math.abs(((videoBoundingClientRects[index].top + videoBoundingClientRects[index].bottom) / 2) - viewPortHeight / 2);
}

//returns video object and distance
function getClosestVideo() {
    updateVideoBoundingClientRects();
    var closestVideo = videos[0];
    var closestLength = getVideoDistanceFromViewport(0);
    for (var i = 1; i < videoBoundingClientRects.length; i++) {
        if (closestLength > getVideoDistanceFromViewport(i)) {
            closestVideo = videos[i];
            closestLength = getVideoDistanceFromViewport(i);
        }
    }
    closestLength = Math.abs(closestLength);
    return [closestVideo, closestLength];
}

function stopAllVideos() {
    for (var i = 0; i < videos.length; i++) {
        videos[i].pause();
    }
}

function isVideoVisible() {
    if (hasClicked) {
        var closest = getClosestVideo();
        if (closest[1] <= videoPlayDistance) {
            closest[0].loop = true;
            closest[0].play();
        } else {
            stopAllVideos();
        }
    }
}
//------Video SLUT-----------


//------
function erSynlig(elementId) {
    const elementBoks = document.getElementById(elementId).getBoundingClientRect();
    const halvtredsPct = elementBoks.height * 0.5;
    const start = window.innerHeight - halvtredsPct;

    if (elementBoks.top <= start && elementBoks.bottom - halvtredsPct > 0) {
        return true;
    } else {
        return false;
    }
}

//------Videoer--------
function aktiverMultimedier() {
    for (let i = 0; i <= AVIdListe.length - 1; i++) {
        if (erSynlig(AVIdListe[i])) {
            AVIndholdsliste[i].loop = true;
            AVIndholdsliste[i].play();
        } else {
            AVIndholdsliste[i].pause();
            AVIndholdsliste[i].currentTime = 0;
        }
    }
}


//----------Slideshow--------------
function gaaFremad() {
    if (billedIndeks < billedliste.length - 1) {
        billedIndeks++;
    } else {
        billedIndeks = 0;
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}

function gaaTilbage() {
    if (billedIndeks > 0) {
        billedIndeks--;
    } else {
        billedIndeks = billedliste.length - 1; /* hvis der skal tilføjes flere billeder end de 3, så ændre dette styk, til billedIndex = billedliste.length-1; */
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}



//Hovedeprogrammet

var audio = new Audio('audio/arabisk_musik.mp3');

//-------slideshow-------

const billedliste = ["images/farve-palette.jpg", "images/kurve.jpg", "images/trae.jpg", "images/malingbotter.jpg", "images/farveplader.jpeg", "images/bil.jpg", "images/teapper.jpg", "images/tree.jpg"];
let billedIndeks = 0;

//Event listeners
document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
})

// -------- MOAB ---------
window.addEventListener("scroll", function () {
    let kultur = erSynlig("kultur")
    if (kultur) {
        audio.play();
    } else {
        audio.pause()
    }
    isVideoVisible();
});

window.addEventListener("click", function () {
    hasClicked = true;
    isVideoVisible();
});
