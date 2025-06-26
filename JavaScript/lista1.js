let nome = document.getElementById("nomeUsuario");
let sexo = document.getElementById("sexoUsuario");
let p = document.getElementById("resposta");

function usuario() {

    p.innerHTML = `Seu nome é: ${nome.value} e seu sexo é: ${sexo.value}!`

}

//====================================================================================================
let valor1 = document.getElementById("valorInteiro");
let valor2 = document.getElementById("valorInteiro2");
let valor3 = document.getElementById("valorInteiro3");
let valor4 = document.getElementById("valorInteiro4");


let p1 = document.getElementById("resposta1");

function valor() {
    let v1 = parseFloat(valor1.value);
    let v2 = parseFloat(valor2.value);
    let v3 = parseFloat(valor3.value);
    let v4 = parseFloat(valor4.value);

    p1.innerHTML = `A soma dos valores é: ${v1 + v2 + v3 + v4} <br> A multiplicação dos valores é: ${v1 * v2 * v3 * v4} `;
}
//====================================================================================================
//DOM
let valorDigitadoInput = document.getElementById("Dollar"); 
let pResposta2 = document.getElementById("resposta2");   
let pDollarPriceDisplay = document.getElementById("dollarPriceDisplay");

//chave de API
const API_KEY = '897766e203b4df8a19612a90'; 
async function fetchDollarPrice() {
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`; // URL para buscar USD para BRL

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            const dollarToBRL = data.conversion_rates.BRL; // Taxa de conversão de 1 USD para BRL
            
            // ATUALIZA O NOVO ELEMENTO COM A COTAÇÃO
            pDollarPriceDisplay.innerHTML = `**Dólar hoje:** R$ ${dollarToBRL.toFixed(2)}`;
            
            return dollarToBRL; // Retorna o valor do dólar para ser usado na conversão
        } else {
            pDollarPriceDisplay.innerHTML = "Erro ao buscar a cotação do dólar.";
            console.error("Erro da API:", data);
            return null; 
        }
    } catch (error) {
        pDollarPriceDisplay.innerHTML = "Erro ao conectar com a API de câmbio.";
        console.error("Erro na requisição:", error);
        return null; 
    }
}
async function dollar() {
    let valorEmReais = parseFloat(valorDigitadoInput.value);

    // 1. Validação da entrada do usuário
    if (isNaN(valorEmReais) || valorEmReais < 0) {
        pResposta2.innerHTML = "Por favor, digite um valor numérico válido e positivo em Reais.";
        return; 
    }

    // 2. Busca a cotação do dólar em tempo real
    // (A cotação já pode ter sido carregada na inicialização, mas esta chamada garante que seja a mais recente)
    const dollarPrice = await fetchDollarPrice(); 

    // 3. Realiza a conversão e exibe o resultado
    if (dollarPrice) {
        let valorConvertidoEmDolar = (valorEmReais / dollarPrice).toFixed(2); 
        pResposta2.innerHTML = `**R$ ${valorEmReais.toFixed(2)}** equivalem a **U$ ${valorConvertidoEmDolar}** na cotação atual.`;
    } else {
        pResposta2.innerHTML = "Não foi possível obter a cotação do dólar para conversão.";
    }
}
// Isso fará com que a cotação do dólar seja carregada e exibida assim que a página for carregada.
fetchDollarPrice();

let anterior = document.getElementById("antecessor_sucessor");
let p3 = document.getElementById("resposta3");
function antSuce(){
    let ante = parseInt(anterior.value);
    if (isNaN(ante)) {
        p3.innerHTML = "Por favor, insira um número válido.";
    }
    else {
        let sucessor = ante + 1;
        let antecessor = ante - 1;
        p3.innerHTML = `O antecessor de (${ante}) é ${antecessor} e o sucessor é ${sucessor}.`;
    }
}

let money = document.getElementById("salario");
let p4 = document.getElementById("resposta4");

function salario() {
    let salario = parseFloat(money.value);
    if (isNaN(salario) || salario < 0) {
        p4.innerHTML = "Por favor, insira um valor válido para o salário.";
        return;
    }
    let aumento = salario * 0.15; // 15% de aumento
    let novoSalario = salario + aumento;

    p4.innerHTML = `O salário com 15% de aumento é: R$ ${novoSalario.toFixed(2)}.`;
}

let numeroMedia = document.getElementById("media1");
let numeroMedia2 = document.getElementById("media2");
let p5 = document.getElementById("resposta5");
function media() {
    let num1 = parseFloat(numeroMedia.value);
    let num2 = parseFloat(numeroMedia2.value);

    if (isNaN(num1) || isNaN(num2)) {
        p5.innerHTML = "Por favor, insira números válidos.";
        return;
    }

    let media = (num1 + num2) / 2;
    p5.innerHTML = `A média entre ${num1} e ${num2} é: ${media.toFixed(2)}.`;
}

let mediaari = document.getElementById("mediaAritimetica1");
let mediaari2 = document.getElementById("mediaAritimetica2");
let mediaari3 = document.getElementById("mediaAritimetica3");
let p6 = document.getElementById("resposta6");
function mediaAri() {
    let num1 = parseFloat(mediaari.value);
    let num2 = parseFloat(mediaari2.value);
    let num3 = parseFloat(mediaari3.value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        p6.innerHTML = "Por favor, insira números válidos.";
        return;
    }

    let media = (num1 + num2 + num3) / 3;
    p6.innerHTML = `A média aritmética entre ${num1}, ${num2} e ${num3} é: ${media.toFixed(2)}.`;
}

let distancia = document.getElementById("distanciaPercorrida");
let km = document.getElementById("kmPorLitro");
let preco = document.getElementById("precoLitro");
let p7 = document.getElementById("resposta7");
function qtLitros() {
    let dist = parseFloat(distancia.value);
    let kmPorLitro = parseFloat(km.value);
    let precoLitro = parseFloat(preco.value);

    if (isNaN(dist) || isNaN(kmPorLitro) || isNaN(precoLitro) || dist <= 0 || kmPorLitro <= 0 || precoLitro <= 0) {
        p7.innerHTML = "Por favor, insira valores válidos e positivos.";
        return;
    }

    let litrosConsumidos = dist / kmPorLitro;
    let custoTotal = litrosConsumidos * precoLitro;

    p7.innerHTML = `Para percorrer ${dist} km, você gastará R$ ${custoTotal.toFixed(2)}.`;
}

let num1 = document.getElementById("numero");
let p9 = document.getElementById("resposta9");
function calculoQuadradoRaiz() {
    let numero = parseFloat(num1.value);
    if (isNaN(numero)) {
        p9.innerHTML = "Por favor, insira um número válido.";
        return;
    }

    let quadrado = numero * numero;
    let raizQuadrada = Math.sqrt(numero);

    p9.innerHTML = `O quadrado de ${numero} é ${quadrado} e a raiz quadrada é ${raizQuadrada.toFixed(1)}.`;
}

function calcularPrestacaoAtraso() {
    // 1. Obter referências aos elementos HTML
    let valorOriginalInput = document.getElementById("valorOriginal");
    let taxaJurosInput = document.getElementById("taxaJuros");
    let tempoAtrasoInput = document.getElementById("tempoAtraso");
    let resultadoPrestacaoParagrafo = document.getElementById("resultadoPrestacao");

    // 2. Obter os valores e convertê-los para número
    let valor = parseFloat(valorOriginalInput.value);
    let taxa = parseFloat(taxaJurosInput.value);
    let tempoEmDias = parseFloat(tempoAtrasoInput.value);

    // 3. Validar a entrada de dados
    if (isNaN(valor) || isNaN(taxa) || isNaN(tempoEmDias) || valor < 0 || taxa < 0 || tempoEmDias < 0) {
        resultadoPrestacaoParagrafo.innerHTML = "Por favor, preencha todos os campos com valores numéricos válidos e positivos.";
        return; // Interrompe a execução da função
    }

    // 4. Calcular o valor dos juros
    // (taxa / 100) para converter a porcentagem em decimal
    let juros = valor * (taxa / 100) * tempoEmDias;

    // 5. Calcular o valor total da prestação em atraso
    let prestacaoEmAtraso = valor + juros;

    // 6. Exibir o resultado no HTML
    resultadoPrestacaoParagrafo.innerHTML = `
        <p>Valor Original: R$ ${valor.toFixed(2)}</p>
        <p>Taxa de Juros: ${taxa.toFixed(2)}% ao dia</p>
        <p>Dias de Atraso: ${tempoEmDias}</p>
        <p>Juros Calculados: R$ ${juros.toFixed(2)}</p>
        <p><strong>Valor Total a Pagar: R$ ${prestacaoEmAtraso.toFixed(2)}</strong></p>
    `;
}