const botao = document.querySelector("#send");
const botao1 = document.querySelector("#send1");
const botao2 = document.querySelector("#send2");

function operacao(event, type) {

    event.preventDefault();

    const val1 = parseInt(document.getElementById("soma1").value);
    const val2 = parseInt(document.getElementById("soma2").value);

    var resultado = type === 'sum' ? val1 + val2 : type === 'mult' ? val1 * val2 : type === 'div' ? val1 / val2 : 0;

    document.getElementById("resultado").innerHTML = `O resultado é: ${resultado}`;

    // alert(somaTotal);

};