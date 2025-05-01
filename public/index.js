var mySong = document.getElementById("mySong");
    var icon = document.getElementById("icon");
    const video = document.getElementById('myvideo');
    icon.onclick = function(){
        if(mySong.paused && video.paused){
            mySong.play();
            video.play();
            icon.src = "./Images/pause.png";
        }else{
            mySong.pause();
            video.pause();
            icon.src = "./Images/play.png";
        }
    }
