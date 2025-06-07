// =========================================1==============================================

    function calcularAreaCirculo() {
        const raio = parseFloat(document.getElementById('raioPi').value);
        const pi = 3.14159265;
        if (isNaN(raio) || raio <= 0) {
            document.getElementById('resultadoAreaCirculo').innerText = 'Por favor, insira um valor válido para o raio.';
            return;
        }
        const area = pi * Math.pow(raio, 2);
        document.getElementById('resultadoAreaCirculo').innerText = `A área do círculo é: ${area.toFixed(2)} unidades quadradas.`;
       
    }
// =========================================2==============================================
function calcularSalarioLiquido() {
    const valorHoraAula = parseFloat(document.getElementById('valorHoraAula').value);
    const numeroHorasTrabalhadas = parseInt(document.getElementById('numeroHorasTrabalhadas').value);
    const percentualINSS = parseFloat(document.getElementById('percentualINSS').value);

    if (isNaN(valorHoraAula) || isNaN(numeroHorasTrabalhadas) || isNaN(percentualINSS) || 
        valorHoraAula <= 0 || numeroHorasTrabalhadas <= 0 || percentualINSS < 0) {
        document.getElementById('resultadoSalarioLiquido').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const salarioBruto = valorHoraAula * numeroHorasTrabalhadas;
    const descontoINSS = (percentualINSS / 100) * salarioBruto;
    const salarioLiquido = salarioBruto - descontoINSS;

    document.getElementById('resultadoSalarioLiquido').innerText = `O salário líquido é: R$ ${salarioLiquido.toFixed(2)}`;
}

// =========================================3==============================================
function calcularValores() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    if (isNaN(valor1) || isNaN(valor2) || valor1 <= 0 || valor2 <= 0) {
        document.getElementById('resultadoValores').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const acrescimo = valor1 * 0.10; // 10% de acréscimo
    const desconto = valor2 * 0.05; // 5% de desconto

    const resultadoAcrescimo = valor1 + acrescimo;
    const resultadoDesconto = valor2 - desconto;

    document.getElementById('resultadoValores').innerText = `Valor com acréscimo: R$ ${resultadoAcrescimo.toFixed(2)}, Valor com desconto: R$ ${resultadoDesconto.toFixed(2)}`;
}
// =========================================4==============================================
function calcularMediaPonderada() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        document.getElementById('resultadoMediaPonderada').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const pesos = [2, 3, 4, 1];
    const somaPesos = pesos.reduce((a, b) => a + b, 0);
    const mediaPonderada = (num1 * pesos[0] + num2 * pesos[1] + num3 * pesos[2] + num4 * pesos[3]) / somaPesos;

    document.getElementById('resultadoMediaPonderada').innerText = `A média aritmética ponderada é: ${mediaPonderada.toFixed(2)}`;
}
// =========================================5==============================================   
function calcularVolumeLata() {
    const raio = parseFloat(document.getElementById('raioLata').value);
    const altura = parseFloat(document.getElementById('alturaLata').value);
    const pi = 3.14159265;

    if (isNaN(raio) || isNaN(altura) || raio <= 0 || altura <= 0) {
        document.getElementById('resultadoVolumeLata').innerText = 'Por favor, insira valores válidos para o raio e a altura.';
        return;
    }

    const volume = pi * Math.pow(raio, 2) * altura;
    document.getElementById('resultadoVolumeLata').innerText = `O volume da lata de óleo é: ${volume.toFixed(2)} unidades cúbicas.`;
}   
// =========================================6==============================================
function trocarValores() {
    let valorA = parseFloat(document.getElementById('valorA').value);
    let valorB = parseFloat(document.getElementById('valorB').value);

    if (isNaN(valorA) || isNaN(valorB)) {
        document.getElementById('resultadoTroca').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    [valorA, valorB] = [valorB, valorA];

    document.getElementById('resultadoTroca').innerText = `Valores trocados: A = ${valorA}, B = ${valorB}`;
}
// =========================================7==============================================
function calcularHipotenusa() {
    const cateto1 = parseFloat(document.getElementById('cateto1').value);
    const cateto2 = parseFloat(document.getElementById('cateto2').value);

    if (isNaN(cateto1) || isNaN(cateto2) || cateto1 <= 0 || cateto2 <= 0) {
        document.getElementById('resultadoHipotenusa').innerText = 'Por favor, insira valores válidos para os catetos.';
        return;
    }

    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    document.getElementById('resultadoHipotenusa').innerText = `A hipotenusa do triângulo retângulo é: ${hipotenusa.toFixed(2)}`;
}
// =========================================8==============================================
function calcularRetangulo() {
    const base = parseFloat(document.getElementById('baseRetangulo').value);
    const altura = parseFloat(document.getElementById('alturaRetangulo').value);

    if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
        document.getElementById('resultadoRetangulo').innerText = 'Por favor, insira valores válidos para a base e a altura.';
        return;
    }

    const area = base * altura;
    const perimetro = 2 * (base + altura);

    document.getElementById('resultadoRetangulo').innerText = `Área: ${area.toFixed(2)}, Perímetro: ${perimetro.toFixed(2)}`;
}
// =========================================9==============================================
function calcularQuintoTermoPG() {
    const razao = parseFloat(document.getElementById('razaoPG').value);
    const primeiroTermo = parseFloat(document.getElementById('primeiroTermoPG').value);

    if (isNaN(razao) || isNaN(primeiroTermo)) {
        document.getElementById('resultadoQuintoTermoPG').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    const quintoTermo = primeiroTermo * Math.pow(razao, 4);
    document.getElementById('resultadoQuintoTermoPG').innerText = `O 5º termo da PG é: ${quintoTermo.toFixed(2)}`;
}