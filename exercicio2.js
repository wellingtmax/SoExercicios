

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

    let resposta = document.getElementById("caixa2");
    resposta.innerHTML = "Estoque: <br>" + estoque.map(item => `${item.produto}: ${item.quantidade}`).join("<br>");
}

function ValidacaodeSenhaComrepeticao(){
    let senhaCorreta = "123456";
    let tentativas = 0;
    let senha;
    let resposta = document.getElementById("caixa3");
    do {
        senha = prompt("Digite a senha:");
        tentativas++;
        if (senha === senhaCorreta) {
            resposta.innerHTML = "Senha correta!";
            return;
        } else {
            resposta.innerHTML = `Senha incorreta. Tentativa ${tentativas}.`;
        }
    } while (tentativas < 3);
}

function NumerosPrimosEmUmIntervalo(){
    let inicio = Number(prompt("Digite o início do intervalo:"));
    let fim = Number(prompt("Digite o fim do intervalo:"));
    let resposta = document.getElementById("caixa4");
    let primos = [];

    if (isNaN(inicio) || isNaN(fim) || inicio >= fim) {
        resposta.innerHTML = "Intervalo inválido.";
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

    resposta.innerHTML = "Números primos no intervalo: " + primos.join(", ");
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

    let resposta = document.getElementById("caixa5");
    if (fila.length === 0) {
        resposta.innerHTML = "Nenhum cliente na fila.";
    } else {
        resposta.innerHTML = "Fila de atendimento: <br>" + fila.join("<br>");
    }
}