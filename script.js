console.log("Wlecome to javascript");

//intialize variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');

let gif =document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songsname: "Luna - Diljit Dosanjh",                 filepath: "songs/1.mp3", coverpath: "covers/11.png" },
    {songsname: "Toofan - Santosh Venky",               filepath: "songs/2.mp3", coverpath: "covers/22.png" },
    {songsname: "Alone Jatt - Jassa Dhillon ",           filepath: "songs/3.mp3", coverpath: "covers/33.png" },
    {songsname: "Arabic Kuthu - Jonita Gandhi",         filepath: "songs/4.mp3", coverpath: "covers/44.png" },
    {songsname: "Duji vaar Pyaar - Sunanda Sharma",      filepath: "songs/5.mp3", coverpath: "covers/55.png" },
    {songsname: "Meri Marzi - Parmish Verma",           filepath: "songs/6.mp3", coverpath: "covers/66.png" },
    {songsname: "Rog - Musahib",                  filepath: "songs/7.mp3", coverpath: "covers/77.png" },
    {songsname: "Ik C Paagal - Babbu Maan",          filepath: "songs/8.mp3", coverpath: "covers/88.png" },
    {songsname: "Coffee For Your Head - Powfu", filepath: "songs/9.mp3", coverpath: "covers/99.png" },
    {songsname: "Leave The Door Open - Bruno Mars",  filepath: "songs/10.mp3", coverpath: "covers/100.png" },

]

songsItems.forEach((element, i) => {
    //console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songNames')[0].innerText = songs[i].songsname;
});

 //audioElement.play();

 //Handle play.pause Click
 masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
 })

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //console.log('timeupdate');
    //updateseekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        masterSongName.innerText = songs[songIndex].songsname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex+=1
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songsname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex-=1
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songsname;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})