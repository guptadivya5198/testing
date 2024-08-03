
console.log("Welcome to spotify");
let songIndex =0;
let audioElement = new Audio("song/2.mp3");
let masterPlay =document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');

// let songItems = document.getElementsByClassName('songItem')
let songs= [
    {songName:'Ek-din-Aap-Yun' , filePath: "song/1.mp3"},
    {songName:'Ek-din-Aap-Yun' , filePath: "song/2.mp3"},
    {songName:'Ek-din-Aap-Yun' , filePath: "song/3.mp3"},
    {songName:'Ek-din-Aap-Yun' , filePath: "song/4.mp3"},
    {songName:'Ek-din-Aap-Yun' , filePath: "song/5.mp3"}
]
// handle play/pause
masterPlay.addEventListener('click',() =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

    }
})


// Listen to event
audioElement.addEventListener('timeupdate', () =>{

//   update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value= progress;
})

myProgressBar.addEventListener('change' ,()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
  })
}


  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.addEventListener('click',(e) =>{
            makeAllPlays();
            songIndex = parseInt(e.target.id)
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`song/${songIndex +1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
        })
})

document.getElementById('next').addEventListener('click' ,()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`song/${songIndex +1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click' ,()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=  `song/${songIndex +1}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('pervious').addEventListener('click',()=>{
    if(songIndex>0){
        alert('1st song is play')
    }
})