let producao = 0;
let meioAmbiente = 0;

const producaoElement = document.querySelector("#producao p");
const meioAmbienteElement = document.querySelector("#meio-ambiente p");
const botao = document.getElementById("aumentar");

botao.addEventListener("click", () => {
    if(producao < 100) producao += 10;
    if(meioAmbiente < 100) meioAmbiente += 8;

    producaoElement.textContent = producao + "%";
    meioAmbienteElement.textContent = meioAmbiente + "%";
});