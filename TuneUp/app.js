const trackCover= document.querySelector("#track_cover");
const trackArtist= document.querySelector("#track_artist");
const trackTitle= document.querySelector("#track_title");
const currentMins= document.querySelector("#current_time_mins");
const currentSecs=document.querySelector("#current_time_secs");
const trackmins= document.querySelector("#track_mins");
const tracksecs= document.querySelector("#track_secs");
const prevBtn=document.querySelector("#prev");
const playPause=document.querySelector("#play_pause");
const nextBtn= document.querySelector("#next");
const trackRange=document.querySelector("#range");
const vol=document.querySelector("#vol");
const currentTrack= document.createElement("audio");
const container= document.querySelector("#container");
const navBar= document.querySelector("#NavBar");

let isPlaying= false;
let trackIndex= 0;

const songs=[
    {
        artistName: "Yo Yo Honey Singh, Hommie Dilliwala",
        songName:"Jingle Bell",
        img:"images/3123_4.jpg",
        music:"musics/Jingle-Bell(PagalWorlld.Com).mp3"
    },
    {
        artistName: "Millind Gaba",
        songName:"Dil Vich Tere Liye Time Kadke",
        img:"images/10526_4.jpg",
        music:"musics/Dil-Vich-Tere-Liye-Time-Kadke(PagalWorlld.Com).mp3"
    },
    {
        artistName: "Teya Dora",
        songName:"Moye Moye",
        img:"images/10867_4.jpg",
        music:"musics/Moye-Moye(PagalWorlld.Com).mp3"
    },
    {
        artistName: "Jaymes Young",
        songName:"Infinity",
        img:"images/1002_resize2x_200x200.webp",
        music:"musics/Infinity - Jaymes Young-(DJMaza).mp3"
    },
];

loadTrack(trackIndex);
setInterval(fulltime, 1000);


function loadTrack(trackIndex){
    currentTrack.src= songs[trackIndex].music;
    currentTrack.load();
    trackCover.src= songs[trackIndex].img;
    trackArtist.textContent= songs[trackIndex].artistName;
    trackTitle.textContent= songs[trackIndex].songName;
    container.style.backgroundImage="url("+songs[trackIndex].img+")";
    volume();
};


function next(){
    if(trackIndex>=songs.length-1){
        trackIndex=0;}
    else{
        trackIndex++}
    loadTrack(trackIndex);
    play();
};

function prev(){
    if(trackIndex<=0){
        trackIndex=songs.length-1;
    }else{
        trackIndex--
    }
    loadTrack(trackIndex);
    play();
};


function play_pause(){
    isPlaying? pause() : play();
};


function play(){
    isPlaying= true;
    currentTrack.play();
    playPause.classList.remove("bi-play-circle");
    playPause.classList.add("bi-pause-circle");
};
function pause(){
    isPlaying= false;
    currentTrack.pause();
    playPause.classList.remove("bi-pause-circle");
    playPause.classList.add("bi-play-circle");
};


function fulltime(){
    const mins=String(Math.floor((currentTrack.duration)/60)).padStart(2,"0");
    const secs=String(Math.floor(currentTrack.duration-(mins*60))).padStart(2,"0");

    const currMins=String(Math.floor((currentTrack.currentTime)/60)).padStart(2,"0");
    const currSecs=String(Math.abs(Math.floor((currMins*60)-currentTrack.currentTime))).padStart(2,"0");

    trackmins.textContent=mins;
    tracksecs.textContent=secs;
    currentMins.textContent= currMins;
    currentSecs.textContent=currSecs;

    trackRange.value=currentTrack.currentTime;
    trackRange.max= currentTrack.duration;

    if(currentTrack.ended){
        next();
    };
};

function volume(){
    currentTrack.volume=vol.value/10;
};

function seek(){
    currentTrack.currentTime=trackRange.value;
};

function abt(){
    navBar.textContent = "A simple music streaming website where users can stream music online with the features of controlling volume and song timing. Users also have the facility to play/pause their music, skip to next & previous song and jump to any timestamp of the music and the best part is that all this is adfree for the users";
}