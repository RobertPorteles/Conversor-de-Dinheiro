var resultado;

$.ajax({
    type: "GET",
    dataType: "JSON",
    url: "https://economia.awesomeapi.com.br/json/all",
    success: function (data) {
        resultado = data;
    },
    error: function () {
        alert('Erro! O site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
    }
});

function converter(moeda) {
    var numeroDigitado = parseFloat(document.getElementById("entrada").value);
    var saida = document.getElementById("saida");
    var valorMoeda;

    // Obtém o valor da cotação baseado na moeda selecionada
    if (moeda === "USD") valorMoeda = parseFloat(resultado?.USD?.bid);
    else if (moeda === "ARS") valorMoeda = parseFloat(resultado?.ARS?.bid);
    else if (moeda === "EUR") valorMoeda = parseFloat(resultado?.EUR?.bid);

    if (isNaN(numeroDigitado) || numeroDigitado <= 0) {
        alert("Digite um valor válido e positivo.");
        return;
    }

    // Calcula a conversão de reais (BRL) para a moeda selecionada
    var calculo = numeroDigitado / valorMoeda;
    var valorFormatado = numeroDigitado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    var calculoFormatado = calculo.toLocaleString('en-US', { style: 'currency', currency: moeda });
    saida.innerHTML = `Resultado: ${valorFormatado} = ${calculoFormatado}`;
}






