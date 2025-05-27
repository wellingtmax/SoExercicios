

function ClassificacaoPorIdadeSwitch() {
    let idade = Number(prompt("Digite a sua idade:"));
    let resposta = document.getElementById("caixa");
    if (isNaN(idade) || idade < 0 || idade > 120) {
        resposta.innerHTML = "Idade inválida.";
    } else {
        switch (true) {
            case (idade < 12):
                resposta.innerHTML = "Criança";
                break;
            case (idade < 18):
                resposta.innerHTML = "Adolescente";
                break;
            case (idade < 60):
                resposta.innerHTML = "Adulto";
                break;
            default:
                resposta.innerHTML = "Idoso";
        }
    }
}

function ControledeEstoquecomRepetição(){
    let estoque = [];
    let continuar = true;

    while (continuar) {
        let produto = prompt("Digite o nome do produto:");
        let quantidade = Number(prompt("Digite a quantidade do produto:"));

        if (produto && !isNaN(quantidade) && quantidade >= 0) {
            estoque.push({ produto, quantidade });
        } else {
            alert("Dados inválidos. Tente novamente.");
        }

        continuar = confirm("Deseja adicionar outro produto?");
    }

    let resposta1 = document.getElementById("caixa2");
    resposta1.innerHTML = "Estoque: <br>" + estoque.map(item => `${item.produto}: ${item.quantidade}`).join("<br>");
}

function ValidacaodeSenhaComrepeticao(){
    let senhaCorreta = "123456";
    let tentativas = 0;
    let senha;
    let resposta3 = document.getElementById("caixa3");
    do {
        senha = prompt("Digite a senha:");
        tentativas++;
        if (senha === senhaCorreta) {
            resposta3.innerHTML = "Senha correta!";
            return;
        } else {
            resposta3.innerHTML = `Senha incorreta. Tentativa ${tentativas}.`;
        }
    } while (tentativas < 3);
}

function NumerosPrimosEmUmIntervalo(){
    let inicio = Number(prompt("Digite o início do intervalo:"));
    let fim = Number(prompt("Digite o fim do intervalo:"));
    let resposta4 = document.getElementById("caixa4");
    let primos = [];

    if (isNaN(inicio) || isNaN(fim) || inicio >= fim) {
        resposta4.innerHTML = "Intervalo inválido.";
        return;
    }

    for (let num = inicio; num <= fim; num++) {
        if (num < 2) continue;
        let isPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrimo = false;
                break;
            }
        }
        if (isPrimo) {
            primos.push(num);
        }
    }

    resposta4.innerHTML = "Números primos no intervalo: " + primos.join(", ");
}

function SimuladorDeFilaDeatendimento(){
    let fila = [];
    let continuar = true;

    while (continuar) {
        let nome = prompt("Digite o nome do cliente:");
        if (nome) {
            fila.push(nome);
        } else {
            alert("Nome inválido. Tente novamente.");
        }

        continuar = confirm("Deseja adicionar outro cliente?");
    }

    let resposta5 = document.getElementById("caixa5");
    if (fila.length === 0) {
        resposta5.innerHTML = "Nenhum cliente na fila.";
    } else {
        resposta5.innerHTML = "Fila de atendimento: <br>" + fila.join("<br>");
    }
}

function SimuladorDePesquisaDesatisfacao() {
    // Contadores para cada categoria
    let ruim = 0;
    let regular = 0;
    let otimo = 0;
    
    // Coletar as 10 notas
    for (let i = 1; i <= 10; i++) {
        let nota;
        // Garante que a nota seja um número entre 0 e 10
        do {
            nota = parseInt(prompt(`Digite a nota do cliente ${i} (0 a 10):`));
        } while (isNaN(nota) || nota < 0 || nota > 10);
        
        // Classifica a nota
        if (nota >= 0 && nota <= 4) {
            ruim++;
        } else if (nota >= 5 && nota <= 7) {
            regular++;
        } else {
            otimo++;
        }
    }

    let resultado6 = document.getElementById("caixa6");
    resultado6.innerHTML = `
        <h3>Resultado da Pesquisa:</h3>
        <p>Ruim (0-4): ${ruim} votos</p>
        <p>Regular (5-7): ${regular} votos</p>
        <p>Ótimo (8-10): ${otimo} votos</p>
    `;
}

function CalculoDeMediaComMultiplastentativas(){
    let Aprovado = 0;
    let Reprovado = 0;
    let nome = prompt("Digite nome do alunoª");

    for(let i = 1; i <= 3; i++){
        let nota;
        let nota1;
        
        do{
            nota = parseInt(prompt(`Digite a nota ${i} do alunoª ${nome}  (0 a 10):`));
        } while (isNaN(nota) || nota < 0 || nota > 10)
        

    }
}