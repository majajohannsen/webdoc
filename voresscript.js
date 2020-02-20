"use strict";

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

function aktiverTekstAnimation() {
    for (let i = 0; i <= tekstIdListe.length - 1; i++) {
        if (erSynlig(tekstIdListe[i])) {
            document.getElementById(tekstIdListe[i]).classList.add("roll-in-right");
        } else {
            document.getElementById(tekstIdListe[i]).classList.remove("roll-in-right")
        }
    }
}

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
        billedIndeks = billedliste.lenght - 1; /* hvis der skal tilføjes flere billeder end de 3, så ændre dette styk, til billedIndex = billedliste.length-1; */
    }

    document.getElementById("slidebillede").src = billedliste[billedIndeks];
}


<<
<<
<<
<
HEAD
const AVIdListe = ["spray", "taepper", "farver", "video"]; ===
===
=
//Hovedeprogrammet

const tekstIdListe = ["tekst1", "tekst2", "tekst3", "tekst4"];

window.addEventListener("scroll", function () {
    aktiverTekstAnimation();
    aktiverMultimedier();
});

const AVIdListe = ["spray", "taepper", "farver", "video"]; >>>
>>>
>
webdoc / master
const AVIndholdsliste = [];

AVIndholdsliste[0] = new Audio("Bouncy_Fun_1.mp3");
AVIndholdsliste[1] = new Audio("Walker.mp3");
AVIndholdsliste[2] = new Audio("Funky_Groove.mp3");
AVIndholdsliste[3] = document.getElementById("video");


/*slideshow*/

const billedliste = ["spray-daaser.png", "trae-vaeg.png", "vaeg.png", "beckers.png"];
let billedIndeks = 0;

document.getElementById("frem").addEventListener("click", function () {
    gaaFremad();
})

document.getElementById("tilbage").addEventListener("click", function () {
    gaaTilbage();
})
