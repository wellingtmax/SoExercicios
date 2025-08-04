# API de Clientes - Aula 04

## 📋 Descrição
API REST para gerenciamento de clientes da oficina utilizando Node.js, Express e MySQL.

## 🗄️ Estrutura do Banco
```sql
CREATE TABLE Cliente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    cpf VARCHAR(15),
    sexo VARCHAR(10)
);
```

## 🏗️ Estrutura do Projeto
```
aula_04/
├── server.js              # Arquivo principal do servidor
├── package.json           # Dependências e scripts
├── database.sql           # Script SQL para criar o banco
├── src/
│   ├── app.js             # Configuração do Express
│   ├── config/
│   │   └── db.js          # Configuração do banco de dados
│   ├── controller/
│   │   └── clienteController.js  # Controladores
│   ├── service/
│   │   └── clienteService.js     # Regras de negócio
│   ├── repository/
│   │   └── clienteRepository.js  # Acesso aos dados
│   └── routes/
│       └── clienteRoutes.js      # Definição das rotas
```

## 🚀 Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar banco de dados
- Execute o script `database.sql` no seu MySQL
- Ajuste as credenciais em `src/config/db.js`

### 3. Executar o servidor
```bash
npm run dev
```

## 📝 Endpoints da API

### GET /
Documentação da API
```json
{
  "message": "API de Clientes - Oficina",
  "version": "1.0.0",
  "database": "oficina",
  "table": "Cliente",
  "campos": ["id", "nome", "cpf", "sexo"]
}
```

### GET /api/clientes
Busca todos os clientes
```json
{
  "success": true,
  "message": "Clientes encontrados com sucesso",
  "data": [
    {
      "id": 1,
      "nome": "João Silva",
      "cpf": "111.111.111-11",
      "sexo": "Masculino"
    }
  ],
  "total": 4
}
```

### GET /api/clientes/:id
Busca cliente por ID
```json
{
  "success": true,
  "message": "Cliente encontrado com sucesso",
  "data": {
    "id": 1,
    "nome": "João Silva",
    "cpf": "111.111.111-11",
    "sexo": "Masculino"
  }
}
```

### POST /api/clientes
Cria novo cliente
```json
// Request Body
{
  "nome": "Novo Cliente",
  "cpf": "444.444.444-44",
  "sexo": "Masculino"
}

// Response
{
  "success": true,
  "message": "Cliente criado com sucesso",
  "data": {
    "id": 5,
    "nome": "Novo Cliente",
    "cpf": "444.444.444-44",
    "sexo": "Masculino"
  }
}
```

### PUT /api/clientes/:id
Atualiza cliente existente
```json
// Request Body
{
  "nome": "Cliente Atualizado",
  "cpf": "444.444.444-44",
  "sexo": "Feminino"
}
```

### DELETE /api/clientes/:id
Remove cliente
```json
{
  "success": true,
  "message": "Cliente deletado com sucesso"
}
```

## ✅ Validações

### Campo Nome
- Obrigatório
- Mínimo 2 caracteres

### Campo CPF
- Obrigatório
- Formato XXX.XXX.XXX-XX
- Único no sistema

### Campo Sexo
- Obrigatório
- Valores aceitos: "Masculino" ou "Feminino"

## 🛠️ Tecnologias
- Node.js
- Express.js
- MySQL2
- CORS
- Nodemon (desenvolvimento)

## 📦 Dependências
```json
{
  "express": "^5.1.0",
  "mysql2": "^3.14.3",
  "cors": "^2.8.5",
  "nodemon": "^3.1.10"
}
```

## 🧪 Dados de Teste
A API já vem com 4 clientes pré-cadastrados:
- João Silva (CPF: 111.111.111-11, Masculino)
- Maria Oliveira (CPF: 222.222.222-22, Feminino)
- Carlos Souza (CPF: 333.333.333-33, Masculino)
- Marina Souza (CPF: 555.555.555-55, Feminino)
