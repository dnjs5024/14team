// 영상 넣어주는 부분
var musicList = ['UMbPNU_GyTU','VXp2dCXYrvQ','gke6crppvBo'];
var music_size = musicList.length;
var audio_tag = document.createElement('script');
audio_tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(audio_tag, firstScriptTag);
// 변수
var musicNum = 0;
var volumeset = true;
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'VXp2dCXYrvQ',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onStateChange': onPlayerStateChange
        },
    });
}
function startVideo() {
    player.loadPlaylist(musicList, musicNum, player.getCurrentTime());     
}
//영상정지
function pauseVideo() {
    player.pauseVideo();
}
//영상종료
function stopVideo() {
    player.stopVideo();
}
//다음 노래
function nextVideo() {
    if (musicNum == (music_size - 1)) {
        musicNum = 0;
    }else{
        musicNum++;
    }
    player.playVideoAt(musicNum); 
    console.log(getCurrentTitle());
}
//이전노래
function previousVideo() {
    if (musicNum == 0) {
        musicNum = (music_size - 1);
    }else{
        musicNum--;
    }
    player.playVideoAt(musicNum); 
}

function getCurrentTitle() {
    // player가 정의되어 있는지 확인
    if (player && player.getVideoData) { 
        let videoData = player.getVideoData();
        return videoData && videoData.title ? videoData.title : "제목을 가져올 수 없음";
    } else {
        return "로드 중";
    }
}

function updateTitle() {
    let title = getCurrentTitle();
    console.log(title);
    document.getElementById("songTitle").innerHTML =  '<span>' + title + '</span>';
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        // 재생 시작 시 제목 업데이트
        updateTitle(); 
    }
    if (event.data === YT.PlayerState.ENDED) {
        let music_size = musicList.length;
        if (musicNum === music_size - 1) {
            // 초기화
            musicNum = 0; 
            player.playVideoAt(musicNum); 
        }
    }
}

