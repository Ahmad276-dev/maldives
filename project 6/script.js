var click = document.getElementById("im");
var video= document.getElementById("vid");
var button = document.getElementById('img');
var show = document.getElementById('play');
click.onclick = function(){
    video.style.display = "block";
    if(video.paused){
        video.play();
        button.src = "images/download-1.png";
        show.innerHTML = "paused"
    }
    else{
        video.pause();
        button.src = "images/download.png";
        show.innerHTML = "play"
    }
}
