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


function clickH3(i){

    let h3 = document.getElementsByTagName("h3")[0]
    h3.innerText = "Então aproveite o show, bom é quando faz mal!!!";
}

  

let audio = document.getElementById("music");

function diminuir_velocidade (){
audio.playbackRate -= 0.1

}

function aumentar_velocidade (){
    audio.playbackRate += 0.1

    
}

function retornar (){
audio.currentTime -= 10;
    
}

function avancar (){
    audio.currentTime += 10;

    
}

function play (){
    audio.play();
    
}

function pause (){
audio.pause();

    
}


function calcular() {
    var idade = f_idade.idade.value;
    if (idade >= 18) {
        alert("Permitido a compra. Aproveite o show, sem moderações.");
    } else {
        alert("Você é menor de idade. Volte acompanhado de um responsável para conseguir concluir a compra.");
        inputIdade.focus();
        return false;
    }
}


   


