var idade;
var fase;

function calcular(event) {
    event.preventDefault();
    
    idade = parseFloat(document.getElementById("idade").value);

    idade = idade

    resultado = document.getElementById("resultado");

    if (idade <= 11) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você é uma criança!";
    } else if (idade >= 12 && idade <= 20) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você é um adolescente!";
    } else if (idade >= 21 && idade <= 64) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você é um adulto!";
    } else if (idade >= 65) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + idade.toFixed(2) + "<br/> Você é um idoso!";
    }

    document.getElementById("idade").value = "";
}