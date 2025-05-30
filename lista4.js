//  =======================================1========================================
function checkNumber() {
    const number = parseInt(document.getElementById('numberInput').value);
    const result = document.getElementById('result');
    if (isNaN(number)) {
        result.textContent = "Por favor, digite um número válido.";
    } else if (number % 2 === 0) {
        result.textContent = "O número é par.";
    } else {
        result.textContent = "O número é ímpar.";
    }
}
//  =======================================2========================================
function checkCapital() {
    const capital = document.getElementById('capitalInput').value.trim().toLowerCase();
    const result = document.getElementById('capitalResult');
    if (capital === "brasilia") {
        result.textContent = "Correto! A capital do Brasil é Brasília.";
    } else {
        result.textContent = "Incorreto. A capital do Brasil é Brasília.";
    }
}
//  =======================================3========================================
function checkEvenOdd() {
    const number = parseInt(document.getElementById('evenOddInput').value);
    const result = document.getElementById('evenOddResult');
    if (isNaN(number)) {
        result.textContent = "Por favor, digite um número válido.";
    } else if (number % 2 === 0) {
        result.textContent = "O número é par.";
    } else {
        result.textContent = "O número é ímpar.";
    }
}
//  =======================================4========================================
function checkDivisibility() {
    const number = parseInt(document.getElementById('divisibleInput').value);
    const result = document.getElementById('divisibleResult');
    if (isNaN(number)) {
        result.textContent = "Por favor, digite um número válido.";
    } else if (number % 3 === 0 && number % 5 === 0) {
        result.textContent = "O número é divisível por 3 e 5.";
    } else if (number % 3 === 0) {
        result.textContent = "O número é divisível por 3.";
    } else if (number % 5 === 0) {
        result.textContent = "O número é divisível por 5.";
    } else {
        result.textContent = "O número não é divisível por 3 nem por 5.";
    }
}
//  =======================================5========================================
function calculateAverage() {
    const grade1 = parseFloat(document.getElementById('grade1').value);
    const grade2 = parseFloat(document.getElementById('grade2').value);
    const grade3 = parseFloat(document.getElementById('grade3').value);
    const grade4 = parseFloat(document.getElementById('grade4').value);
    const result = document.getElementById('averageResult');

    if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3) || isNaN(grade4)) {
        result.textContent = "Por favor, digite notas válidas.";
        return;
    }

    const average = (grade1 + grade2 + grade3 + grade4) / 4;
    result.textContent = `A média é: ${average.toFixed(2)}`;
}
//  =======================================6========================================
function calculateDifference() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = document.getElementById('differenceResult');
    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Por favor, digite números válidos.";
        return;
    }

    const difference = Math.abs(num1 - num2);
    result.textContent = `A diferença é: ${difference}`;
}   
//  =======================================7========================================
function checkIntegerRange() {
    const integer = parseInt(document.getElementById('integerInput').value);
    const result = document.getElementById('integerRangeResult');
    if (isNaN(integer)) {
        result.textContent = "Por favor, digite um número inteiro válido.";
    } else if (integer >= 1 && integer <= 10) {
        result.textContent = "O número está na faixa de 1 a 10.";
    } else {
        result.textContent = "O número não está na faixa de 1 a 10.";
    }
}
//  =======================================8========================================

function checkNumberSign() {
    const number = parseFloat(document.getElementById('numberCheckInput').value);
    const result = document.getElementById('numberCheckResult');
    if (isNaN(number)) {
        result.textContent = "Por favor, digite um número válido.";
    } else if (number > 0) {
        result.textContent = "O número é positivo.";
    } else if (number < 0) {
        result.textContent = "O número é negativo.";
    } else {
        result.textContent = "O número é zero.";
    }
}
//  =======================================8========================================

function checkDivisor() {
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);
    const result = document.getElementById('divisorResult');

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        result.textContent = "Por favor, digite números válidos.";
        return;
    }

    if (firstNumber % secondNumber === 0) {
        result.textContent = `${firstNumber} é divisível por ${secondNumber}.`;
    } else {
        result.textContent = `${firstNumber} não é divisível por ${secondNumber}.`;
    }
}
//  =======================================10========================================
function extractHundreds() {
    const number = document.getElementById('threeDigitNumber').value;
    const result = document.getElementById('hundredsResult');
    if (!/^\d{3}$/.test(number)) {
        result.textContent = "Por favor, digite um número de 3 casas.";
        return;
    }
    const hundreds = number.charAt(0);
    result.textContent = `O algarismo das centenas é: ${hundreds}`;
}
//  =======================================11========================================
function findMinMax() {
    const num1 = parseFloat(document.getElementById('num1Input').value);
    const num2 = parseFloat(document.getElementById('num2Input').value);
    const num3 = parseFloat(document.getElementById('num3Input').value);
    const num4 = parseFloat(document.getElementById('num4Input').value);
    const num5 = parseFloat(document.getElementById('num5Input').value);
    const result = document.getElementById('minMaxResult');

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5)) {
        result.textContent = "Por favor, digite números válidos.";
        return;
    }

    const numbers = [num1, num2, num3, num4, num5];
    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);

    result.textContent = `O maior número é: ${maxNumber}, e o menor número é: ${minNumber}.`;
}   
//  =======================================12========================================
function sortValues() {
    const valueA = parseFloat(document.getElementById('valueA').value);
    const valueB = parseFloat(document.getElementById('valueB').value);
    const valueC = parseFloat(document.getElementById('valueC').value);
    const result = document.getElementById('sortedResult');

    if (isNaN(valueA) || isNaN(valueB) || isNaN(valueC)) {
        result.textContent = "Por favor, digite valores válidos.";
        return;
    }

    const values = [valueA, valueB, valueC];
    values.sort((a, b) => a - b);
    
    result.textContent = `Valores ordenados: ${values.join(', ')}`;
}
//  =======================================13========================================