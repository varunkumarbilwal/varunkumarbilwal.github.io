var swiper = new Swiper(".swiper", {
    direction: "vertical",
    speed: 400,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
});


swiper.on('slideChange', function () {
    var mainWrapper = document.getElementById("mainWrapper");
    var currentSlideNum = swiper.activeIndex;
    var activeSlideNum = eval(parseInt(currentSlideNum) + 1); //current slide index
    var totalSlidesNum = swiper.slides.length; //total number of slides
    document.querySelectorAll('video').forEach(vid => PauseVideo(vid));
    document.getElementById("playIcon").style.display = "none";
    //document.querySelectorAll('video').forEach(vid => ToggleVideo(vid));
    document.getElementById("tk_video" + activeSlideNum).play();
    console.log(activeSlideNum + " Out Of " + totalSlidesNum);
    if (activeSlideNum == totalSlidesNum) {
        var videoID = "tk_video" + eval(parseInt(totalSlidesNum) + 1);
        var sourceSRC = GetVideoSRC();
        var videoTemplate = '<video id="' + videoID +'" class="swiper-slide" preload="auto" loop onclick="ToggleVideo(this.id)"><source src="' + sourceSRC + '" type="video/mp4" /></video>';
        swiper.appendSlide(videoTemplate);
    }
});

function GetVideoSRC() {
    var videosarray = myVideos;
    var videosLength = videosarray.length;
    var minLength = 1;
    var randomnumber = Math.floor(Math.random() * (videosLength - minLength + 1)) + minLength;
    return videosarray[randomnumber];
}

function PauseVideo(videos) {
    document.getElementById(videos.id).pause();
}

function ToggleVideo(videos) {
    if (document.getElementById(videos).paused == true) {
        document.getElementById(videos).play();
        document.getElementById("playIcon").style.display = "none";
    }
    else if (document.getElementById(videos).paused == false) {
        document.getElementById(videos).pause();
        document.getElementById("playIcon").style.display = "block";

    }
}



