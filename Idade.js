var idade;
var nome;
var resultado;

function calcular(event) {
    event.preventDefault();
    
    idade = parseFloat(document.getElementById("idade").value);
    nome = parseFloat(document.getElementById("nome").value);

    idade = (document.getElementById("idade").value)
    nome = (document.getElementById("nome").value)

    console.log(idade);

    if (idade <= 3) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu nome é " + nome + " você tem " + idade + "<br/> anos, e você é um bebê!";
    } else if (idade >= 4 && idade <= 11) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu nome é " + nome + " você tem " + idade + "<br/> anos, e você é uma criança!";
    } else if (idade >= 12 && idade <= 15) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu nome é " + nome + " você tem " + idade + "<br/> anos, e você é um adolescente!";
    } else if (idade >= 16 && idade <= 20) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu nome é " + nome + " você tem " + idade + "<br/> anos, e você é um jovem!";
    } else if (idade >= 21 && idade <= 64) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu nome é " + nome + " você tem " + idade + "<br/> anos, e você é um adulto!";
    } else if (idade >= 65 && idade <= 499) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu nome é " + nome + " você tem " + idade + "<br/> anos, e você é um idoso!";
    } else if (idade >= 500) {
        resultado = document.getElementById("resultado");
        resultado.innerHTML = "<br/> Seu nome é " + nome + " você tem " + idade + "<br/> anos, e você é uma Divindade!";
    }

    document.getElementById("idade").value = "";
    document.getElementById("nome").value = "";
}