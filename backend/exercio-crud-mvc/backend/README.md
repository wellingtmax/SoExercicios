# API CRUD Produtos - Arquitetura MVC

Uma API REST simples para gerenciamento de produtos usando Node.js, Express e MySQL com arquitetura MVC.

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MySQL** - Banco de dados
- **MySQL2** - Driver MySQL para Node.js
- **CORS** - Middleware para Cross-Origin Resource Sharing
- **dotenv** - Gerenciamento de variáveis de ambiente

## 📁 Estrutura do Projeto

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # Configuração do banco de dados
│   ├── controller/
│   │   └── produtoController.js # Controladores (Controller)
│   ├── service/
│   │   └── produtoService.js    # Regras de negócio (Service)
│   ├── repository/
│   │   └── produtoRepository.js # Acesso aos dados (Repository)
│   ├── routes/
│   │   └── produtoRoutes.js     # Definição das rotas
│   └── app.js                   # Configuração da aplicação
├── server.js                    # Servidor principal
├── database.sql                 # Script para criar tabela
├── .env.example                 # Exemplo de variáveis de ambiente
└── package.json
```

## ⚙️ Configuração

### 1. Clone e instale as dependências

```bash
cd backend
npm install
```

### 2. Configure o banco de dados

- Execute o script `database.sql` no seu MySQL
- Copie `.env.example` para `.env` e configure suas credenciais:

```env
PORT=3000
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=crud_produtos
```

### 3. Execute a aplicação

```bash
# Desenvolvimento (com auto-reload)
npm run dev

# Produção
npm start
```

## 🔗 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/produtos` | Lista todos os produtos |
| GET | `/api/produtos/:id` | Busca produto por ID |
| POST | `/api/produtos` | Cria novo produto |
| PUT | `/api/produtos/:id` | Atualiza produto |
| DELETE | `/api/produtos/:id` | Remove produto |

## 📝 Exemplos de Uso

### Criar produto
```bash
POST /api/produtos
Content-Type: application/json

{
  "nome": "Smartphone",
  "preco": 899.99,
  "estoque": 50
}
```

### Atualizar produto
```bash
PUT /api/produtos/1
Content-Type: application/json

{
  "nome": "Smartphone Pro",
  "preco": 1299.99,
  "estoque": 30
}
```

## 🏗️ Arquitetura MVC

- **Model**: Representado pelo Repository (acesso aos dados)
- **View**: Respostas JSON da API
- **Controller**: Manipula requisições e respostas
- **Service**: Contém a lógica de negócio
- **Routes**: Define os endpoints da API

## 📊 Estrutura da Tabela Produtos

```sql
CREATE TABLE produtos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    estoque INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
