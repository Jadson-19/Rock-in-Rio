let firebaseConfig = {
  apiKey: "AIzaSyCCS9d-VW0rg7tF97l9F0dgp11xwF9taWQ",
  authDomain: "my-data-base-19.firebaseapp.com",
  projectId: "my-data-base-19",
  storageBucket: "my-data-base-19.appspot.com",
  messagingSenderId: "128822585708",
  appId: "1:128822585708:web:5cfd12a49a4c77896eab49",
  measurementId: "G-1KDCCE90ZY"
};

// Initialize Firebase

let app = firebase.initializeApp(firebaseConfig);

const addCompra = document.querySelector('#formulario');

const resgate = document.querySelector('#resgateCompra');

let db = firebase.firestore();

let DADOS = "Ingressos - Rock in Rio";

addCompra.addEventListener('submit', function (a) {

  a.preventDefault();

  let senha = document.querySelectorAll('.senha')[0].value;
  let confirmarSenha = document.querySelectorAll('.confirmarSenha')[0].value;

  if (senha != confirmarSenha){

    a.preventDefault();

    Event.preventDefault()

    resultadosCompra.innerHTML = "Verifique se a confirmação da senha está correta.";

    console.log("Compra não realizada. A senha inserida é diferente da confirmação.");
  
}

else {

  resultadosCompra.innerHTML = "Compra feita com sucesso!";
  console.log("Dados da compra cadastrados no banco com sucesso!");
};

  db.collection(DADOS).add(

    {

      nome: a.target.nome.value,
      cpf: a.target.cpf.value,
      dataNascimento: a.target.dataNascimento.value,
      email: a.target.email.value,
      senha: a.target.senha.value,
      confirmarSenha: a.target.confirmarSenha.value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp() 

    }).then(() =>{

        console.log("Documentação da compra enviada!");
        document.location.reload()
    }).catch(err =>{

        console.log('Documentação da compra não enviada. Tente Novamente.', err.message);
    });

    // JUNTAR O AUTHENTICATION DO USUÁRIO COM O DOCUMENTO

 let newUserEmail = a.target.email.value;
 let newUserPassword = a.target.senha.value;
 let auth = firebase.auth()

auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword)

 .then(data =>{

    let uid = data.user.uid;

    let createrUser = db.collection(DADOS).set(

     createrUser.doc(uid).set({

      nome: a.target.nome.value,
      cpf: a.target.cpf.value,
      dataNascimento: a.target.dataNascimento.value,
      email: a.target.email.value,
      senha: a.target.senha.value,
      confirmarSenha: a.target.confirmarSenha.value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
         
     }));
     
     console.log('Conta criada com sucesso!')
 })

});

// RELÓGIO

let dia = new Date();
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
    h3.innerText = 'Faça uma excelente compra e aproveite o show!';
}

//  LOGIN DO USUARIO

function login (){

  const resultadosdataBase = document.querySelector("#resultadosdataBase");
  resgate.addEventListener ('reset', () => {
 
      formData = {
 
         email: document.querySelector('input[name=loginEmail]').value,
         senha: document.querySelector('input[name=loginSenha]').value,
      }
 
      firebase.auth().signInWithEmailAndPassword(formData.email, formData.senha).then((currentUser) => {
 
         db.collection(DADOS).where("email", "==", formData.email).get().then(snapshot =>{
             snapshot.forEach((doc) =>{

                 let dados = doc.data();

                  let timestamp = dados.createdAt.toDate();
                  let date = new Date(timestamp);

                  resultadosdataBase.innerHTML = (
                     
                     "Nome: " + dados.nome + "<br>" + 
                     "CPF: " + dados.cpf + "<br>" + 
                     "Data de nascimento: " + dados.dataNascimento + "<br>" + 
                     "Data da compra: " + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear()

                 )
                
             })
         })
 
              console.log('Dados da compra coletados com sucesso!') 
         }).catch(error => {
         console.log('Ocorreu um erro. Dados da compra não coletados!', error)
   }) 
 
  });
 
 };
 
 login();

// COMEÇO DO PLAYER DE ÁUDIO

// ARRAY CRIADO PARA PODER FAZER A PLAYLIST

var i = 0
var musicas = [

        {mp3:"musics/Baby_ogg.mp3", src:"musics/Baby_ogg.mp3"},     
        {mp3:"musics/Fear_of_the_Dark_mp3.mp3", src: "musics/Fear_of_the_Dark_mp3.mp3"},
        {mp3:"musics/Hallowed_Be_Thy_Name_mp3.mp3", src: "musics/Hallowed_Be_Thy_Name_mp3.mp3"},
        {mp3:"musics/Justin_Bieber_Somebody_To_Love_mp3.mp3", src:"musics/Justin_Bieber_Somebody_To_Love_mp3.mp3"},     
        {mp3:"musics/Sweet_Child_mp3.mp3", src: "musics/Sweet_Child_mp3.mp3"},
        {mp3:"musics/You_Could_Be_Mine_mp3.mp3", src: "musics/You_Could_Be_Mine_mp3.mp3"},
        {mp3:"musics/megadeth_holy_wars_mp3.mp3", src:"musics/megadeth_holy_wars_mp3.mp3"},
        {mp3:"musics/megadeth_rust_in_ peace_polari_mp3.mp3", src: "musics/megadeth_rust_in_ peace_polari_mp3.mp3"},
        {mp3:"musics/tornado_of_soul_mp3.mp3", src:"musics/tornado_of_soul_mp3.mp3"},  

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

    if(music.canPlayType("audio/mp3" && "audio/ogg" ) != ""){
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

    if(music.canPlayType("audio/mp3" && "audio/ogg") != ""){
        music.src = musicas[i].mp3;
    }

    music.play();
    i--

    if( i = -0) {
        i <= musicas.length;
    }

    
}

// OS BOTÕES DE CONTROLE

function play () {
    music.play();
}

function pause (){
    music.pause();
}

// RETORNO DO TEXTO HTML DA BILHETERIA

let inputIdade = document.getElementById("idade");
let inputNome = document.getElementById("nome");

let resultadosCompra = document.getElementById("resultadosCompra");

function calcularCompra(){

  let inputNome = document.querySelectorAll('.nome')[0].value;
  let inputCPF = document.querySelectorAll('.cpf')[0].value;
  let inputdataNascimento = document.querySelectorAll('.dataNascimento')[0].value;
  let inputEmail = document.querySelectorAll('.email')[0].value;
  let inputSenha = document.querySelectorAll('.senha')[0].value;
  let inputconfirmarSenha = document.querySelectorAll('.confirmarSenha')[0].value;

  let resultadosCompra = document.getElementById("resultadosCompra");

  let primeiroGrupo = inputNome && inputCPF && inputdataNascimento;
  let segundoGrupo =  inputEmail && inputSenha && inputconfirmarSenha;

  resultadosCompra.innerHTML = primeiroGrupo;
  resultadosCompra.innerHTML = segundoGrupo;

  if (primeiroGrupo == '' || segundoGrupo == '') {

    resultadosCompra.innerHTML = "Por favor, verifique se falta preencher algum campo de dados da compra.";
}

  else if (inputSenha != inputconfirmarSenha){

    resultadosCompra.innerHTML = "Verifique se a confirmação da senha está correta.";
}

else if (

  resultadosCompra.innerHTML = "Compra feita com sucesso!"
);

console.log("Processando a compra...");

}

function calcularResgate() {

  let inputEmail = document.querySelectorAll('.loginEmail')[0].value;
  let inputSenha = document.querySelectorAll('.loginSenha')[0].value;

  let resultadosResgate = document.getElementById("resultadosResgate");

  let email = inputEmail;
  let senha = inputSenha;

  resultadosResgate.innerHTML = email;
  resultadosResgate.innerHTML = senha;

  if (email == '' || senha == '') {
    resultadosResgate.innerHTML = "Por favor, verifique se preencheu e-mail e senha corretamente.";
  }

  else {

    resultadosResgate.innerHTML = "Parabéns! Sua presença está confirmada para o Rock in Rio Brasil 2022!" + "<br><br>Seu ingresso:";
  }

  console.log("Processando o resgate do ingresso...");
}


// OLHOS PARA ENXERGAR A SENHA

function mostrarSenha() {

  let olhoRegistro = document.getElementById("passRegistro");

  if (olhoRegistro.type == "password") {
    olhoRegistro.type = "text";

  } else {
    olhoRegistro.type = "password";
  }
}

function mostrarconfirmarSenha() {

  let olhoRegistro = document.getElementById("passconfirmarRegistro");

  if (olhoRegistro.type == "password") {
    olhoRegistro.type = "text";

  } else {
    olhoRegistro.type = "password";
  }
}

function mostrarPassword() {

  let olhoConsulta = document.getElementById("passResgate");

  if (olhoConsulta.type == "password") {
    olhoConsulta.type = "text";

  } else {
    olhoConsulta.type = "password";
  }
};

function mascara(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}


