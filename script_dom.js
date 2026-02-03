let notas = [];

function adicionarNota() {
    let input = document.querySelector(".input");
    if(input.value.trim() === "") {
        alert("Por favor, insira uma nota.");
        return;
    } 

    let valor = parseFloat(input.value);
    if(valor === null || Number.isNaN(valor) || valor < 0 || valor > 10){
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
        input.value = "";
        return;
    }

    let textarea = document.querySelector("#lista-notas");
    let textoNota = `A nota ${notas.length + 1} foi ${valor.toFixed(2)} \n`;
    notas.push(valor);
    input.value = "";
    textarea.value += textoNota;
}

function calcularMedia() {
    let textoMedia = document.querySelector("#texto-media");
    let media = 0;
    notas.map((nota) => {
        media = media + nota;
    })
    media = media / notas.length;
    textoMedia.innerText = `A média é: ${media.toFixed(2)}`;
}

let addNota = document.querySelector("#add-nota");
addNota.addEventListener("click", ()=>{adicionarNota()});

let botaoMedia = document.querySelector("#botao-media");
botaoMedia.addEventListener("click", ()=>{calcularMedia()});