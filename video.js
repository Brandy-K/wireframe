var video = document.getElementById("myVideo");
  var playPauseBtn = document.getElementById("playPauseBtn");
  var muteBtn = document.getElementById("muteBtn");

  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playPauseBtn.textContent = 'pause_circle_outline';
    } else {
      video.pause();
      playPauseBtn.textContent = 'play_circle_outline';
    }
  }

  function toggleMute() {
    if (video.muted) {
      video.muted = false;
      muteBtn.textContent = 'volume_off';
    } else {
      video.muted = true;
      muteBtn.textContent = 'volume_up';
    }
  }

   window.onscroll = function(){
   var pos;
   if(document.documentElement.scrollTop>50){
   video.play();
   }else{
   video.pause();
   console.log(pos);

   video.pause();



   }
}