var pkg = {
    page: 0,
    category: "",
    subcategory: "",
    title: "",
    bgimage: "",
    audio: ""
}

var savedPkg = localStorage.getItem("pkg");

if (savedPkg) {
    pkg = JSON.parse(savedPkg);
}

//debug
console.log(pkg);

var handler = {
    set: function (obj, mode, func) {
        console.log(`[handler]: ${obj} ${mode} ${func}`);
        if (mode == "cat") {
            SavePkg();
            loadCategory();
        }
        if (mode == "audio") {
            SavePkg();
        }
    }
}

var prox = new Proxy(pkg, handler);

//page 1 functions for the subcategory page
function ChangeCategory(mode) {
    window.location.href = "subcategory.html";
    pkg.category = mode;
    pkg.page = 2;
    if (mode == "relax") {
        pkg.title = "Relaxation";
        pkg.bgimage = "relaxation.jpg";
    } else if (mode == "sleep") {
        pkg.title = "Sleep";
        pkg.bgimage = "sleep.jpeg";
    } else if (mode == "zen") {
        pkg.title = "Zen";
        pkg.bgimage = "zen.jpg";
    } else if (mode == "concentration") {
        pkg.title = "Concentration";
        pkg.bgimage = "concentration.jpg";
    } else if (mode == "study") {
        pkg.title = "Study";
        pkg.bgimage = "study.jpeg";
    } else if (mode == "background") {
        pkg.title = "Background";
        pkg.bgimage = "background.jpeg";
    }
    prox.cat = mode;
}


//page 2 functions for the music player page
function ChangeAudio(mode) {
    window.location.href = "MusicPlayerTemplate.html";
    pkg.title = (mode.charAt(0).toUpperCase() + mode.slice(1)).split('.')[0];
    pkg.subcategory = mode.split('.')[0];
    pkg.page = 3;
    pkg.audio = mode;
    prox.audio = mode;
}


// console.log(prox);  



function SavePkg() {
    localStorage.setItem("savedPkg", JSON.stringify(pkg));
}

function loadCategory() {
    SavePkg();
    let catShow = document.querySelectorAll('.' + pkg.category);
    for (var i = 0; i < 5; i++) {
        if (catShow[i] != null)
            catShow[i].style.display = "flex";
    }
}

function setTitle() {
    let catTitle = document.getElementById('head');
    catTitle.innerHTML = pkg.title;
}

function trackTitle() {
    let title = document.getElementById('title');
    title.innerHTML = pkg.title;
}

function setBackground() {
    document.body.style.background = `url('../imgs/${pkg.bgimage}')`;
}


//page 3 function
// function loadAudio(){
//     var audio = document.querySelector("#audio");
//     audio.src = pkg.subcategory;
//     pkg.page = 3;
//     localStorage.setItem("pkg", JSON.stringify (pkg));
//     window.location.href="MusicPlayerTemplate.html";
// }


function SavePkg() {
    localStorage.setItem("pkg",
        JSON.stringify(pkg));
}

function loadMusic() {
    let player = document.getElementById('mytrack');
    player.innerHTML = `<source id="music" src="audio/${pkg.audio}" type="audio/mp3" />`;
}

function loadArtwork() {
    let imgs = [];
    for (var cat in images) {
        if (images.hasOwnProperty(cat) && cat == pkg.category) {
            imgs = images[cat][pkg.subcategory];
            break;
        }
    }
    let html = '';
    for (let i = 1; i <= imgs.length; i++) {
        html += `<img src="SVG/${imgs[i - 1]}" class="playerpic" id="pic${i}" ${i == imgs.length ? 'onload="slideshow()"' : ''}>`;
    }
    //console.log(html);
    document.getElementById('slideshow').innerHTML = html;
}


//hamburger menu navigation//
// function goToPage(page){
//     if(page.id == "relaxmenu")
//     pkg.category = page;

// 	//save localStorage
//     location.href = "subcategory.html";

// }

function onLoad() {
    setTitle();
    loadCategory();
    setBackground();
}

function trackLoad() {
    loadArtwork();
    trackTitle();
    loadMusic();
}
