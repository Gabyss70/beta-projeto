var typed=new Typed(".multiple-text",{
    strings: ["Luz","Câmera","Ação"],
    typeSpeed:150,
    backSpeed:150,
    backDelay:1000,
    loop:true
})

const botaoMusica=document.getElementById('play_btn');
const musica=new Audio('som/i_feel_lost.mpeg');

botaoMusica.addEventListener("click",()=>{
    if (musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})

// Como alterar imagens do menu dentro do sistema usando o active e alocando dentro do html
function AlterarMenu(){
    const menu=document.querySelector('.menu');
    const nav =document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}
// mudança do fundo 

function TrocaVideo(name){
    const bgVideoList=document.querySelectorAll('.bg-video');
    const models=document.querySelectorAll('.model');
    bgVideoList.forEach(video=> {
        video.classList.remove('active');
        if (video.classList.contains(name)){
            video.classList.add('active');
        }
    })
    models.forEach(model=> {
        model.classList.remove('active');
        if (model.classList.contains(name)){
            model.classList.add('active');
        }
    })
}

function toggleplay(){
    const play=document.querySelector('.play');
    const pause=document.querySelector('.pause');
    play.classList.toggle('active');
    pause.classList.toggle('active');

}


function pauseVideo(){
    const bgVideoList=document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video=>{
        video.pause();
    });
    toggleplay();
}
function playVideo(){
    const bgVideoList=document.querySelectorAll('.bg-video');
    bgVideoList.forEach(video=>{
        video.play();
    });
    toggleplay();
}

