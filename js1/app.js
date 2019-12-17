//--picture change---//

    (function(){
            var imgLen = document.getElementById('slideshow');
            var images = imgLen.getElementsByTagName('img');
            var counter = 1;
            
            if(counter <= images.length){
                setInterval(function(){
                    images[0].src = images[counter].src;
                    console.log(images[counter].src);
                    counter++;

                    if(counter === images.length){
                        counter = 1;
                    }
                },8000);
            }
    })();

//var imgArray = [
//    '../SVG/waterdrop.svg',
//    '../SVG/waterdrop2.svg',
//    '../SVG/waterdrop3.svg'],
//    curIndex = 0,
//    imgDuration = 5000;
//
//function slideShow() {
//    document.getElementById('slideshow').className += "fadeOut";
//    
//    setTimeout(function() {
//       document.getElementById('slideshow').src = imgArray[curIndex]; document.getElementById('slideshow').className = "";
//    },7000);
//    curIndex++;
//    if (curIndex == imgArray.length) { curIndex = 0; }
//    setTimeout(slideShow, imgDuration);
//}
//slideShow();

//---play and pause audio---/
var ring = new Audio();
ring.src = "audio/waterdrops1.wav";
var isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    ring.pause()
  } else {
    ring.play();
  }
};
ring.onplaying = function() {
  isPlaying = true;
};
ring.onpause = function() {
  isPlaying = false;
};

//---play and pause---//
var pause=document.querySelector("#play");

pause.addEventListener("click", function(){
    
    if (pause.src = "icons/play.png")
    {
    pause.src= "icons/pause.png";
    }
    else 
    {
        pause.src = "icons/play.png";
    }
})


//---audio loop, REPEAT--//

var ring = new Audio("audio/waterdrops1.wav");
ring.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

