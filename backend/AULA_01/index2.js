const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send('Ola! Mundo!!')
});

app.get("/sobre", (req, res) => {
    res.send("Essa é a porta Sobre")
})

app.get("/json", (req, res) => {
    res.send({msg: "Essa rota está mostrando um JSON"})
})

app.get("/saudacao/:nome/:idade", (req, res) => {
    const nome = req.params.nome
    const idade = req.params.idade

    // res.json({usuarios: {nome, idade}})
    send.send(`O nome è: ${nome} e minha idade é ${idade}`)
})

const PORT = 3005

app.listen(PORT, () => {
    console.log(`Serviço rodando na porta ${PORT}`)
});