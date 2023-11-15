var textoIntrodutorio = document.querySelector('.intro');
var primeiroInput = document.querySelector('#valorUm');
var btnEuro = document.querySelector('#euro');
const dolarButton = document.querySelector('#dolar');
const goldButton = document.querySelector('#gold');
const audioElement = new Audio('../Conversor-de-Dinheiro/songs/y2meta.com_-_Som_moeda_caindo_efeito_sonoro_jogando_moedas_320_kbps (1).mp3');
audioElement.volume = 0.2;




let clicadoGoldButton = false;
let clicadoDolarButton = false;
let valorInput = primeiroInput.value;
let umDolarEmReais = 4.87;
let realEmPesosArgentinos =  71.95;
let resultadoDolar = valorInput*umDolarEmReais;
let resultadoPesos = valorInput*realEmPesosArgentinos;


dolarButton.addEventListener('click', () => {
    audioElement.play();
    textoIntrodutorio.innerHTML = `Convertendo de Reais para Dolares &#129297`;
    
    let valorInput = primeiroInput.value;
    let umDolarEmReais = 4.87;
    let resultadoDolar = valorInput * umDolarEmReais;

    textoIntrodutorio.innerHTML = `$   `+resultadoDolar;
    
    audioElement.play();
});
  
goldButton.addEventListener('click', () => {
    audioElement.play();
    textoIntrodutorio.innerHTML = `Convertendo de Reais em Ouro 🟨"`;

    let valorInput = primeiroInput.value;
    let realEmPesosArgentinos = 71.95;
    let resultadoPesos = valorInput * realEmPesosArgentinos;


    textoIntrodutorio.innerHTML = `$   `+resultadoPesos;
});

btnEuro.addEventListener('click', ()=>{
    audioElement.play();
    let valorInput = primeiroInput.value;
    let realEmEuro = 0.19;
    let resultadoEuro = valorInput * realEmEuro;

    textoIntrodutorio.innerHTML = `$   `+resultadoEuro;
})









