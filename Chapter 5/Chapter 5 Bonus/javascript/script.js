var audio1 = new Audio();

function playAudio(src){
    if(audio1) audio1.pause();
    const audio = audio1 = new Audio (src);
    audio.play();
    audio.volume = 0.2;
}