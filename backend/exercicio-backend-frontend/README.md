# 🎮 Projeto Backend-Frontend - Sistema de Jogos

Este projeto é um sistema completo para gerenciamento de jogos com backend em Node.js e MySQL.

## 📁 Estrutura do Projeto

```
exercicio-backend-frontend/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   │   └── gamerController.js    # Controladores da aplicação
│   │   ├── db/
│   │   │   └── gameDB.js            # Configuração do banco de dados
│   │   ├── routes/
│   │   │   └── gameRouter.js        # Rotas da API
│   │   └── service/
│   │       └── gameService.js       # Lógica de negócios
│   ├── .env                         # Variáveis de ambiente
│   ├── package.json                 # Dependências do projeto
│   └── package-lock.json           # Lock das dependências
└── frontend/                        # Diretório do frontend (a implementar)
```

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MySQL2** - Driver para MySQL
- **dotenv** - Gerenciamento de variáveis de ambiente
- **cors** - Middleware para CORS
- **morgan** - Logger de requisições HTTP
- **nodemon** - Auto-reload em desenvolvimento

## ⚙️ Configuração do Ambiente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL Server
- npm ou yarn

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/wellingtmax/SoExercicios.git
   cd SoExercicios/backend/exercicio-backend-frontend
   ```

2. **Instale as dependências do backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Configure o banco de dados:**
   - Crie um banco MySQL chamado `jogofutboll`
   - Configure as credenciais no arquivo `.env`

4. **Configure as variáveis de ambiente:**
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=123456
   DB_NAME=jogofutboll
   PORT=3000
   ```

## 🗄️ Banco de Dados

### Configuração (gameDB.js)

O arquivo `src/db/gameDB.js` contém a configuração de conexão com o MySQL:

```javascript
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('❌ Erro ao conectar no MySQL:', err);
        return;
    }
    console.log('✅ Conectado ao MySQL com sucesso!');
});

module.exports = db;
```

### Testando a Conexão

Para testar se a conexão com o banco está funcionando:

```bash
cd backend
node src/db/gameDB.js
```

Se bem configurado, você verá: `✅ Conectado ao MySQL com sucesso!`

## 🚀 Como Executar

### Backend

1. **Navegue para o diretório do backend:**
   ```bash
   cd backend
   ```

2. **Execute o servidor:**
   ```bash
   npm start
   ```
   
   Ou para desenvolvimento com auto-reload:
   ```bash
   npm run dev
   ```

3. **O servidor estará rodando em:**
   ```
   http://localhost:3000
   ```

## 📋 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `start` | `npm start` | Inicia o servidor com watch mode |
| `test` | `npm test` | Executa os testes (a implementar) |

## 🏗️ Estrutura da Arquitetura

O projeto segue o padrão **MVC (Model-View-Controller)** adaptado para API:

- **Controller** (`src/controller/`): Gerencia as requisições HTTP
- **Service** (`src/service/`): Contém a lógica de negócios
- **Database** (`src/db/`): Configuração e conexão com o banco
- **Routes** (`src/routes/`): Define as rotas da API

## 🔧 Funcionalidades Implementadas

### ✅ Concluído
- [x] Configuração do projeto Node.js
- [x] Instalação e configuração das dependências
- [x] Configuração do banco de dados MySQL
- [x] Conexão com MySQL usando mysql2
- [x] Configuração de variáveis de ambiente com dotenv
- [x] Estrutura de pastas organizada (MVC)

### 🚧 Em Desenvolvimento
- [ ] Implementação dos controllers
- [ ] Criação das rotas da API
- [ ] Implementação dos services
- [ ] Criação das tabelas no banco
- [ ] Frontend da aplicação

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Notas Importantes

- **Segurança**: O arquivo `.env` contém informações sensíveis e deve ser adicionado ao `.gitignore` em produção
- **Banco de Dados**: Certifique-se de que o MySQL está rodando antes de iniciar a aplicação
- **Dependências**: Todas as dependências estão listadas no `package.json`

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique se todas as dependências foram instaladas
2. Confirme se o MySQL está rodando
3. Verifique as configurações no arquivo `.env`
4. Teste a conexão com o banco executando `node src/db/gameDB.js`

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

---

**Desenvolvido por:** Wellington Oliveira  
**Repositório:** [wellingtmax/SoExercicios](https://github.com/wellingtmax/SoExercicios)  
**Data:** Agosto 2025
