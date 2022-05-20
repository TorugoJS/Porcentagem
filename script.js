const porcentagem = document.getElementById('porcentagem');
const num = document.getElementById('num');
var calcular = document.getElementById('calcular');
var resultado = document.getElementById('resultado');

calcular.addEventListener('click', calculo());

function calculo() {

    if (porcentagem.value == '' || num.value == '') {
        resultado.innerHTML = "Insira valores válidos"
    } else {
        var valor = Number(porcentagem.value) * parseInt(num.value) / 100;
        resultado.innerHTML = `O resultado é: ${valor}`;

    }

}

