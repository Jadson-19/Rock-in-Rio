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


function clickH3(i) {

    let h3 = document.getElementsByTagName("h3")[0]
    h3.innerText = "Aproveite o show, bom é quando faz mal!";
}



let audio = document.getElementById("music");

function diminuir_velocidade() {
    audio.playbackRate -= 0.1

}

function aumentar_velocidade() {
    audio.playbackRate += 0.1

}

function retornar() {
    audio.currentTime -= 10;

}

function avancar() {
    audio.currentTime += 10;

}

function play() {
    audio.play();

}

function pause() {
    audio.pause();

}

let inputIdade = document.getElementById("idade");
let inputNome = document.getElementById("nome");

let resultado = document.getElementById("resultados");

function calcular(){

    let valor1 = inputNome.value;
    let valor2 = inputIdade.value;
    
    resultado.innerHTML = valor1;
    resultado.innerHTML = valor2;

    let nome = inputNome.value;
    let idade = inputIdade.value;

    if (idade >= 18) {
        resultado.innerHTML = "Permitido a compra, " + nome + "." + "\n \nAproveite o show, sem moderações."; 
    
    } else {
        resultado.innerHTML = "Você é menor de idade, " + nome + "." + "\n \nVolte acompanhado de um responsável para conseguir concluir a compra.";
    }

    console.log ("Calculando...");

}







