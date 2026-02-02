let notas = [];

function adicionarNota() {
    let input = document.querySelector(".input");
    let textarea = document.querySelector("#lista-notas");
    // let nota = document.createElement("p");
    // nota.innerText = `A nota ${notas.length + 1} foi ` + input.value;
    // console.log(nota.innerText);
    let textoNota = `A nota ${notas.length + 1} foi ` + input.value + "\n";
    notas.push(input.value);
    input.value = "";

    // textarea.append(nota);
    textarea.value += textoNota;
}

function calcularMedia() {
    let textoMedia = document.querySelector("#texto-media");
    let media = 0;
    notas.map((nota) => {
        media = media + parseFloat(nota);
    })
    media = media / notas.length;
    textoMedia.innerText = `A média é: ${media.toFixed(2)}`;
}

let addNota = document.querySelector("#add-nota");
addNota.addEventListener("click", ()=>{adicionarNota()});

let botaoMedia = document.querySelector("#botao-media");
botaoMedia.addEventListener("click", ()=>{calcularMedia()});