function myBack() {
    location.replace("celestial_zen.html")
}
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
                },10000);
            }
    })();

//---play and pause audio---/
var ring = new Audio();
ring.src = "audio/tibetanbowl1.wav";
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
    
    if (pause.src = "icons1/play.png")
    {
    pause.src= "icons1/pause.png";
    }
    else 
    {
        pause.src = "icons1/play.png";
    }
})


//---audio volume--//