/* =====================================================
   VÍDEO DE PERFIL - BOOMERANG
===================================================== */

const video = document.getElementById("videoPerfil");


/*
    true  = vídeo indo para frente
    false = vídeo voltando
*/

let indo = true;


/* =====================================================
   GARANTIR QUE O VÍDEO FIQUE SEM ÁUDIO
===================================================== */

video.muted = true;

video.volume = 0;


/* =====================================================
   QUANDO O VÍDEO CARREGAR
===================================================== */

video.addEventListener("loadedmetadata", () => {

    video.currentTime = 0;

    video.muted = true;

    video.volume = 0;

    video.play();

});


/* =====================================================
   DETECTAR FINAL DO VÍDEO
===================================================== */

video.addEventListener("timeupdate", () => {

    if (
        indo &&
        video.duration &&
        video.currentTime >= video.duration - 0.05
    ){

        indo = false;

    }

});


/* =====================================================
   EFEITO BOOMERANG
===================================================== */

function boomerang(){

    /*
        Garante novamente que não exista áudio.
    */

    video.muted = true;

    video.volume = 0;


    /*
        Quando estiver indo para frente,
        deixa o vídeo tocar normalmente.
    */

    if(indo){

        if(video.paused){

            video.play();

        }

        return;

    }


    /*
        Quando chegar ao final,
        começa a voltar.
    */

    video.pause();


    /*
        Diminui o tempo atual do vídeo.
        Isso faz os frames voltarem.
    */

    video.currentTime -= 0.04;


    /*
        Quando chegar novamente ao início,
        começa tudo outra vez.
    */

    if(video.currentTime <= 0){

        video.currentTime = 0;

        indo = true;

        video.muted = true;

        video.volume = 0;

        video.play();

    }

}


/* =====================================================
   VELOCIDADE DO BOOMERANG
===================================================== */

setInterval(boomerang,0);