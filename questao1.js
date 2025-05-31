function calculadoraAvancada() {
    let nu1 = document.getElementById("numero1")
    let nu2 = document.getElementById("numero2")
    let resul = document.getElementById("resultado")
    let oper = document.getElementById("operador")

    const valor1 = parseFloat(nu1.value);
    const valor2 = parseFloat(nu2.value);
    const valorOper = oper.value;


    if (isNaN(valor1) || isNaN(valor2)) {
        resul.innerHTML = "Por Favor, insira um numero validos.";
        return;
    }
    if (valorOper === "-") {
        resul.innerHTML = valor1 - valor2;
    } else if (valorOper === "+") {
        resul.innerHTML = valor1 + valor2;
    } else if (valorOper === "*") {
        resul.innerHTML = valor1 * valor2;
    } else if (valorOper === "/") {
        resul.innerHTML = valor1 / valor2;
    } else {
        resul.innerHTML = "Isso não tem Logica"
    }

}

function classificarIdade() {
    let no = document.getElementById("nome");
    let ida = document.getElementById("idade");
    let classe = document.getElementById("clacificacao");


    const idade1 = parseFloat(ida.value);
    const nome1 = no.value;

    if (isNaN(idade1) || idade1 < 0) {
        classificacaoSpan.innerHTML = "Por favor, insira uma idade válida.";
        return;
    }

    if (idade1 <= 12) {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Criança!`
    } else if (idade1 >= 13 && idade1 <= 17) {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Adolecente!`
    } else if (idade1 >= 18 && idade1 <= 59) {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Adulto!`
    } else {
        classe.innerHTML = `Ola! ${nome1} Você tem ${idade1} anos e é um(ª) Idoso!`
    }

}

function tabuadaPersonalizada() {
    let numeroInput = document.getElementById("numero");
    let numero = parseInt(numeroInput.value);

    let resul2 = document.getElementById("resultado2");
    resul2.innerHTML = "";


    if (isNaN(numero)) {
        alert("Entrada inválida! Por favor, digite um número.");
        return;
    }

    let tabuadaP = "";

    for (let i = 1; i <= 10; i++) {
        tabuadaP += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resul2.innerHTML = tabuadaP;
}

function somaParesWhile() {

    let limiteInput = prompt("Digite um número limite:");
    let limite = parseInt(limiteInput);

    if (isNaN(limite) || limite < 1) {
        document.getElementById("resultadoSoma").innerHTML = "Por favor, insira um número inteiro válido maior ou igual a 1.";
        return;
    }

    let soma = 0;
    let numeroAtual = 1;

    while (numeroAtual <= limite) {
        if (numeroAtual % 2 === 0) {
            soma += numeroAtual;
        }
        numeroAtual++;
    }

    document.getElementById("resultadoSoma").innerHTML = `A soma dos números pares de 1 até ${limite} é: <strong>${soma}</strong>.`;
}

let tentativasRestantes = 3;
const senhaCorreta = "sena123";

const inputSenha = document.getElementById("senhaInput");
const botaoVerificar = document.getElementById("btnVerificar");
const mensagemElemento = document.getElementById("mensagemAcesso");

function validaSenha() {
    if (inputSenha.disabled) {
        return;
    }

    const senhaDigitada = inputSenha.value;

    if (senhaDigitada === senhaCorreta) {
        mensagemElemento.innerHTML = "Acesso permitido";
        mensagemElemento.style.color = "green";
        inputSenha.disabled = true;
        botaoVerificar.disabled = true;
    } else {
        tentativasRestantes--;

        if (tentativasRestantes > 0) {
            mensagemElemento.innerHTML = `Senha incorreta. Você tem ${tentativasRestantes} tentativa(s) restante(s).`;
            mensagemElemento.style.color = "orange";
            inputSenha.value = "";
            inputSenha.focus();
        } else {
            mensagemElemento.innerHTML = "Acesso bloqueado";
            mensagemElemento.style.color = "red";
            inputSenha.disabled = true;
            botaoVerificar.disabled = true;
        }
    }
}

function calcularFatorial() {
    let numeroRecebido = document.getElementById("numeral");
    let saida = document.getElementById("calculo2");



    saida.innerHTML = "";

    let numeroFatorial = parseInt(numeroRecebido.value);

    if (isNaN(numeroFatorial) || numeroFatorial < 0) {
        saida.innerHTML = "Por favor, insira um número inteiro válido.";
        return;
    }
    if (numeroFatorial === 0) {
        saida.innerHTML = "O fatorial de 0 é 1";
        return;
    }

    let fatorialResultado = 1;
    for (let i = 1; i <= numeroFatorial; i++) {
        fatorialResultado *= i;
    }
    saida.innerHTML = `O fatorial de -${numeroFatorial}-  é "${fatorialResultado}"`
}

function verificarPrimo() {
    let primoElement = document.getElementById("nPrimo");
    let saidaPri = document.getElementById("saidaPrimo");

    if (!primoElement || !saidaPri) {
        console.error("Erro: Elementos do DOM não encontrados (nPrimo ou saidaP).");
        if (saidaPri) saidaPri.innerHTML = "Erro de configuração da página.";
        return;
    }

    saidaPri.innerHTML = ""; 

    let valorInput = primoElement.value;

    if (valorInput.trim() === "") {
        saidaPri.innerHTML = "Por favor, insira um número.";
        return;
    }

    let primoEntrada = parseInt(valorInput);

    if (isNaN(primoEntrada)) {
        saidaPri.innerHTML = "Entrada inválida. Por favor, insira um número inteiro.";
        return;
    }

    if (primoEntrada <= 1) {
        saidaPri.innerHTML = `O número ${primoEntrada} não é primo. (Números primos são inteiros maiores que 1).`;
        return;
    }

    let ehPrimo = true; 

    if (primoEntrada === 2) {
        ehPrimo = true; 
    } else if (primoEntrada % 2 === 0) {
        ehPrimo = false; 
    } else {
        
        let i = 3;
        while (i * i <= primoEntrada) {
            
            if (primoEntrada % i === 0) {
                ehPrimo = false;
                break; 
            }
            i += 2;
        }
    }

    if (ehPrimo) {
        saidaPri.innerHTML = `O número ${primoEntrada} é primo.`;
    } else {
        saidaPri.innerHTML = `O número ${primoEntrada} não é primo.`;
    }
}

function mediaAritmetica() {
    const inputElement = document.getElementById("mediana");
    const resultadoElement = document.getElementById("mediaResultado");

    resultadoElement.innerHTML = "";

    const stringEntrada = inputElement.value;
 
    if (stringEntrada.trim() === "") {
        resultadoElement.innerHTML = "Por favor, insira números para calcular a média.";
        return;
    }

    const arrayDeStringsNumeros = stringEntrada.split(/[+,]/);

    let soma = 0;
    let contadorDeNumerosValidos = 0;
    const numerosValidosProcessados = []; 
    for (let i = 0; i < arrayDeStringsNumeros.length; i++) {
        const stringNumeroAtual = arrayDeStringsNumeros[i].trim(); // Remove espaços em branco (ex: " 2 " vira "2")

        if (stringNumeroAtual !== "") {
            const numeroAtual = parseFloat(stringNumeroAtual);

            if (!isNaN(numeroAtual)) {
                soma += numeroAtual;
                contadorDeNumerosValidos++;
                numerosValidosProcessados.push(numeroAtual);
            } else {
                console.warn(`A entrada '${stringNumeroAtual}' não é um número válido e será ignorada.`);
            }
        }
    }

    if (contadorDeNumerosValidos > 0) {
        const media = soma / contadorDeNumerosValidos;
        resultadoElement.innerHTML = `Números considerados: ${numerosValidosProcessados.join(', ')}.<br>A média é: <strong>${media.toFixed(2)}</strong>`;
    } else {
        resultadoElement.innerHTML = "Nenhum número válido foi inserido para calcular a média.";
    }
}

function contadorRegressivo() {
    const inputElement = document.getElementById("contadorDown");
    const contagemElement = document.getElementById("contagem");

    contagemElement.innerHTML = "";

    let numero = parseInt(inputElement.value);

    if (isNaN(numero) || numero <= 0) {
        contagemElement.innerHTML = "Por favor, insira um número maior que zero.";
        return; 
    }

    function atualizarContagem() {
        if (numero >= 0) {
            contagemElement.innerHTML = numero; 
            numero--;
            setTimeout(atualizarContagem, 1000); 
        } else {
            contagemElement.innerHTML = "Fim!"; 
        }
    }

    atualizarContagem();
}

function verificadorMultiplos() {
    const inputInicialElement = document.getElementById("numeroInicial");
    const inputFinalElement = document.getElementById("numeroFinal");
    const resultadoElement = document.getElementById("vmResultado");

    resultadoElement.innerHTML = "";

    const inicio = parseInt(inputInicialElement.value);
    const fim = parseInt(inputFinalElement.value);

    if (isNaN(inicio) || isNaN(fim)) {
        resultadoElement.innerHTML = "Por favor, insira um número inicial e final válidos.";
        return;
    }

    if (inicio > fim) {
        resultadoElement.innerHTML = "O número inicial não pode ser maior que o número final.";
        return;
    }

    const numerosEncontrados = [];

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            numerosEncontrados.push(i);
        }
    }

    if (numerosEncontrados.length === 0) {
        resultadoElement.innerHTML = "Nenhum número satisfaz a condição no intervalo especificado.";
    } else {
        let mensagem = "Os números que são pares e múltiplos de 3 no intervalo são: ";
        if (numerosEncontrados.length === 1) {
            mensagem += numerosEncontrados[0];
        } else if (numerosEncontrados.length === 2) {
            
            mensagem += numerosEncontrados[0] + " e " + numerosEncontrados[1];
        } else {
        
            const todosMenosOUltimo = numerosEncontrados.slice(0, numerosEncontrados.length - 1);
            const ultimoNumero = numerosEncontrados[numerosEncontrados.length - 1];
            mensagem += todosMenosOUltimo.join(", ") + " e " + ultimoNumero;
        }
        resultadoElement.innerHTML = mensagem + ".";
    }
}