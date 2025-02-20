// 영상 넣어주는 부분
var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'VXp2dCXYrvQ',
        playerVars: {
          'playsinline': 1
        },
      });
    }
    // 영상 실행
    function startVideo() {
      player.playVideo();
    }
    //영상정지지
    function stopVideo() {
      player.stopVideo();
    }