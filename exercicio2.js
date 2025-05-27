

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
