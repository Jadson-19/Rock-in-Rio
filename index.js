// RELÓGIO

var dia = new Date();
console.log(dia);
let dayExtenso = new Array(
    'Domingo - ', 'Segunda-feira - ', 'Terça-feira - ', 'Quarta-feira - ', 'Quinta-feira - ', 'Sexta-feira - ', 'Sábado - '
);
let day = dia.getDate();
let month = dia.getMonth();
let year = dia.getFullYear();

console.log(dia);
console.log(dayExtenso[dia.getDay()]);

document.getElementById("d").innerHTML = (dayExtenso[dia.getDay()]) + " " + day + '/' + (month + 1) + '/' + year;

// TEXTO OVER FLOW

function clickH3(i) {

    let h3 = document.getElementsByTagName("h3")[0]
    h3.innerText = "Aproveite o show, bom é quando faz mal!";
}

// COMEÇO DO PLAYER DE ÁUDIO

// ARRAY CRIADO PARA PODER FAZER A PLAYLIST

var i = 0
var musicas = [
   
        {mp3:"megadeth_holy_wars_mp3.mp3", src:"megadeth_holy_wars_mp3.mp3"},     
        {mp3:"megadeth_rust_in_ peace_polari_mp3.mp3", src:"megadeth_rust_in_ peace_polari_mp3.mp3"},
        {mp3:"tornado_of_soul_mp3.mp3", src:"tornado_of_soul_mp3.mp3"},
    ]

// NOME DOS ELEMENTOS

let music = document.getElementById("music")
let nextMusic = document.getElementById("nextMusic")
let playMusic = document.getElementById("play")
let pauseMusic = document.getElementById("pause")

// EVENTOS IMPORTANTES

music.addEventListener('ended', avancar, false);
music.addEventListener('ended', retornar, false);

// PRA AVANÇAR A MUSICA DA PLAYLIST

function avancar () {

    if(music.canPlayType("audio/mp3" && "audio/ogg" ) != ''){
        music.src = musicas[i].mp3;
    }

    music.play();
    i++

    if( i >= musicas.length) {
        i = 0;
        }

    }

       
// PARA VOLTAR A MUSICA DA PLAYLIST

function retornar (){

    if(music.canPlayType("audio/mp3" && "audio/ogg") != ''){
        music.src = musicas[i].mp3;
    }

    music.play();
    i--

    if( i = -0) {
        i <= musicas.length;
    }

    
}

// OS BOTÕES DE CONTROLE

function play() {
    music.play();
}

function pause(){
    music.pause();
}



// RETORNO DO TEXTO HTML DA BILHETERIA

let inputIdade = document.getElementById("idade");
let inputNome = document.getElementById("nome");

let resultado = document.getElementById("resultados");

function calcular(){

    let nome = inputNome.value;
    let idade = inputIdade.value;

    resultado.innerHTML = nome;
    resultado.innerHTML = idade;

    if (idade >= 18) {
        resultado.innerHTML = "Permitido a compra, " + nome + "." + "\n \nAproveite o show, sem moderações."; 
    
    } else {
        resultado.innerHTML = "Você é menor de idade, " + nome + "." + "\n \nVolte acompanhado de um responsável para conseguir concluir a compra.";
    }

    console.log ("Calculando...");

}







