//====================================1================================================
function calcularTotal() {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    if (isNaN(valorConta) || valorConta < 0) {
        document.getElementById('total').innerText = 'Por favor, insira um valor válido.';
        return;
    }
    const gorjeta = valorConta * 0.10; // 10% de gorjeta
    const total = valorConta + gorjeta;
    document.getElementById('total').innerText = `Total com gorjeta: R$ ${total.toFixed(2)}`;
}
//======================================2==============================================

function calcularMinutos(){
    const horas = parseInt(document.getElementById('horas').value);
    const minutos = parseInt(document.getElementById('minutos').value);
    
    if (isNaN(horas) || isNaN(minutos) || horas < 0 || horas > 23 || minutos < 0 || minutos > 59) {
        document.getElementById('resultadoMinutos').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    const totalMinutos = (horas * 60) + minutos;
    document.getElementById('resultadoMinutos').innerText = `Total de minutos desde às 00:00h: ${totalMinutos}`;
}
//======================================3==============================================

function calcularPesoAltura() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        document.getElementById('resultadoPesoAltura').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    const imc = peso / (altura * altura);
    document.getElementById('resultadoPesoAltura').innerText = `Seu IMC é: ${imc.toFixed(2)}`;
}
//=======================================4=============================================

function calcularIMC() {
    const peso = parseFloat(document.getElementById('pesoIMC').value);
    const altura = parseFloat(document.getElementById('alturaIMC').value);
    
    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
        document.getElementById('resultadoIMC').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    const imc = peso / (altura * altura);
    document.getElementById('resultadoIMC').innerText = `Seu IMC é: ${imc.toFixed(2)}`;
}
//=====================================5===============================================   
function calcularOperacoes() {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    if (isNaN(numero1) || isNaN(numero2) || numero1 < 0 || numero2 < 0) {
        document.getElementById('resultadoOperacoes').innerText = 'Por favor, insira números válidos.';
        return;
    }
    
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero2 !== 0 ? (numero1 / numero2).toFixed(2) : 'Indefinido (divisão por zero)';
    
    document.getElementById('resultadoOperacoes').innerHTML = `
        Soma: ${soma.toFixed(2)}<br>
        Subtração: ${subtracao.toFixed(2)}<br>
        Multiplicação: ${multiplicacao.toFixed(2)}<br>
        Divisão: ${divisao}
    `;
}
//=====================================6===============================================   
function calcularSalarioVendedor() {
    const nomeVendedor = document.getElementById('nomeVendedor').value.trim();
    const salarioFixo = parseFloat(document.getElementById('salarioFixo').value);
    const totalVendas = parseFloat(document.getElementById('totalVendas').value);
    
    if (!nomeVendedor || isNaN(salarioFixo) || salarioFixo < 0 || isNaN(totalVendas) || totalVendas < 0) {
        document.getElementById('resultadoSalarioVendedor').innerText = 'Por favor, preencha todos os campos corretamente.';
        return;
    }
    
    const comissao = totalVendas * 0.04; // 4% de comissão
    const salarioTotal = salarioFixo + comissao;
    
    document.getElementById('resultadoSalarioVendedor').innerText = `Salário total de ${nomeVendedor}: R$ ${salarioTotal.toFixed(2)}`;
} 
//=====================================7===============================================
function calcularPrestacoes() {
    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const numeroPrestacoes = parseInt(document.getElementById('numeroPrestacoes').value);
    
    if (isNaN(valorCompra) || valorCompra < 0 || isNaN(numeroPrestacoes) || numeroPrestacoes < 1 || numeroPrestacoes > 10) {
        document.getElementById('resultadoPrestacoes').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    const valorPrestacao = valorCompra / numeroPrestacoes;
    document.getElementById('resultadoPrestacoes').innerText = `Valor de cada prestação: R$ ${valorPrestacao.toFixed(2)}`;
}
//=====================================8===============================================
function calcularPrecoVenda() {
    const precoCusto = parseFloat(document.getElementById('precoCusto').value);
    const percentualAcrescimo = parseFloat(document.getElementById('percentualAcrescimo').value);
    
    if (isNaN(precoCusto) || precoCusto < 0 || isNaN(percentualAcrescimo) || percentualAcrescimo < 0) {
        document.getElementById('resultadoPrecoVenda').innerText = 'Por favor, insira valores válidos.';
        return;
    }
    
    const precoVenda = precoCusto + (precoCusto * (percentualAcrescimo / 100));
    document.getElementById('resultadoPrecoVenda').innerText = `Preço de Venda: R$ ${precoVenda.toFixed(2)}`;
}
//=====================================9===============================================
function converterIdadeParaDias() {
    const anos = parseInt(document.getElementById('anos').value) || 0;
    const meses = parseInt(document.getElementById('meses').value) || 0;
    const dias = parseInt(document.getElementById('dias').value) || 0;

    if (anos < 0 || meses < 0 || dias < 0) {
        document.getElementById('resultadoIdadeDias').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const totalDias = (anos * 365) + (meses * 30) + dias; // Aproximação simples
    document.getElementById('resultadoIdadeDias').innerText = `Total de dias: ${totalDias}`;
}
//=====================================10===============================================
function calcularVotos() {
    const totalEleitores = parseInt(document.getElementById('totalEleitores').value);
    const votosBrancos = parseInt(document.getElementById('votosBrancos').value);
    const votosNulos = parseInt(document.getElementById('votosNulos').value);
    const votosValidos = parseInt(document.getElementById('votosValidos').value);

    if (isNaN(totalEleitores) || totalEleitores <= 0 || isNaN(votosBrancos) || isNaN(votosNulos) || isNaN(votosValidos)) {
        document.getElementById('resultadoVotos').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const percentualBrancos = (votosBrancos / totalEleitores * 100).toFixed(2);
    const percentualNulos = (votosNulos / totalEleitores * 100).toFixed(2);
    const percentualValidos = (votosValidos / totalEleitores * 100).toFixed(2);

    document.getElementById('resultadoVotos').innerHTML = `
        Percentual de Votos Brancos: ${percentualBrancos}%<br>
        Percentual de Votos Nulos: ${percentualNulos}%<br>
        Percentual de Votos Válidos: ${percentualValidos}%
    `;
}