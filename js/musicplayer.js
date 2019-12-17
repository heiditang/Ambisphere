
// var ssInterval = null;

// function slideshow() {
//     let imgLen = document.getElementById('slideshow');
//     let imgs = imgLen.getElementsByTagName('img');

//     if (ssInterval != null) {
//         clearInterval(ssInterval);
//     }

//     let counter = 1;
//     ssIntveral = setInterval(function () {
//         if (counter <= imgs.length) {
//             imgs[0].src = imgs[counter].src;
//             counter++;

//             if (counter >= imgs.length) {
//                 counter = 1;
//             }
//         }
//     }, 8000);
// }

var slideshowInterval = null;
var counter = 0;

function slideshow() {
    var slideshowImages = document.getElementById('slideshow').getElementsByTagName('img');

    if (slideshowInterval != null) {
        clearInterval(slideshowInterval);
    }

    slideshowImages[0].style = 'display: inline-block;';
    slideshowInterval = setInterval(() => {
        if (counter < slideshowImages.length) {
            for (let i = 0; i < slideshowImages.length; i++) {
                if (i == counter) {
                    slideshowImages[i].style = 'display: inline-block;';
                } else {
                    slideshowImages[i].style=  'display: none';
                }
            }
            counter++;
        } else {
            counter = 0;
        }
    }, 8000);
}

//play and pause audio//

//var ring = new Audio();
//ring.src = "audio/guitar.wav";
//var isPlaying = false;


//function togglePlay() {
//      if (isPlaying) {
//        ring.pause()
//      } else {
//        ring.play();
//      }
//    };
//    ring.onplaying = function() {
//      isPlaying = true;
//    };
//    ring.onpause = function() {
//      isPlaying = false;
//        
//};
var mytrack = document.getElementById('mytrack');
var playButton = document.getElementById('play');
//var repeaticon = document.querySelector("#repeat");
var loopButton = document.getElementById('repeat');
//var ring = new Audio();
function playOrPause() {
    if (!mytrack.paused && !mytrack.ended) {
        mytrack.pause();
        playButton.style.backgroundImage = 'url(../svgs/play.png)';
    }
    else {
        mytrack.play();
        playButton.style.backgroundImage = 'url(../svgs/pause.png)';
    }
}

//repeat song//
//var repeat = new Audio("audio/guitar.wav");
//    repeat.addEventListener('ended', function() {
//    this.currentTime = 0;
//    this.play();
//}, false);

function repeatMusic() {
    if (mytrack.loop) {
        loopButton.style.backgroundImage = 'url(../svgs/repeat.png)';
        mytrack.loop = false;

    }

    else {
        loopButton.style.backgroundImage = 'url(../svgs/repeatgreen.png)';
        mytrack.loop = true;
    };
};



//--track seeker--//
var music = document.getElementById('mytrack');
var duration = music.duration;
var playhead = document.getElementById('playhead'); // playhead
var timeline = document.getElementById('timeline'); // timeline
// timeline width adjusted for playhead
var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;


music.addEventListener("timeupdate", timeUpdate, false);

// makes timeline clickable
timeline.addEventListener("click", function (event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);
// makes timeline clickable
timeline.addEventListener("click", function (event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// makes timeline clickable
timeline.addEventListener("click", function (event) {
    moveplayhead(event);
    music.currentTime = duration * clickPercent(event);
}, false);

// returns click as decimal (.77) of the total timelineWidth
function clickPercent(event) {
    return (event.clientX - getPosition(timeline)) / timelineWidth;
}

// makes playhead draggable
playhead.addEventListener('mousedown', mouseDown, false);
window.addEventListener('mouseup', mouseUp, false);

// Boolean value so that audio position is updated only when the playhead is released
var onplayhead = false;

// mouseDown EventListener
function mouseDown() {
    onplayhead = true;
    window.addEventListener('mousemove', moveplayhead, true);
    music.removeEventListener('timeupdate', timeUpdate, false);
}

//// mouseUp EventListener
//// getting input from all mouse clicks
function mouseUp(event) {
    if (onplayhead == true) {
        moveplayhead(event);
        window.removeEventListener('mousemove', moveplayhead, true);
        // change current time
        music.currentTime = duration * clickPercent(event);
        music.addEventListener('timeupdate', timeUpdate, false);
    }
    onplayhead = false;
}
//// mousemove EventListener
//// Moves playhead as user drags
function moveplayhead(event) {
    var newMargLeft = event.clientX - getPosition(timeline);

    if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
        playhead.style.marginLeft = newMargLeft + "px";
    }
    if (newMargLeft < 0) {
        playhead.style.marginLeft = "0px";
    }
    if (newMargLeft > timelineWidth) {
        playhead.style.marginLeft = timelineWidth + "px";
    }
}
//
//// timeUpdate
//// Synchronizes playhead position with current point in audio
function timeUpdate() {
    var playPercent = timelineWidth * (music.currentTime / duration);
    playhead.style.marginLeft = playPercent + "px";

};

//// Gets audio file duration
music.addEventListener("canplaythrough", function () {
    duration = music.duration;
}, false);

//// getPosition
//// Returns elements left position relative to top-left of viewport
function getPosition(el) {
    return el.getBoundingClientRect().left;
}

setInterval(function () {
    timeUpdate(
    );
}, 1000);


////////