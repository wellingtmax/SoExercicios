
# SPA Produtos & Serviços - Angular 19

## Descrição
Este projeto é uma Single Page Application (SPA) desenvolvida em Angular 19, utilizando Bootstrap 5 para estilização e responsividade. O objetivo é apresentar um sistema completo com autenticação, proteção de rotas, exibição de produtos/serviços e navegação dinâmica, ideal para demonstração acadêmica.

## Funcionalidades Implementadas
- **Página Inicial:** Exibe os produtos/serviços para qualquer visitante, sem necessidade de login.
- **Autenticação:**
  - Tela de login com validação local (sem backend).
  - Armazenamento de token no localStorage após login.
  - Botão de login visível apenas para usuários não autenticados.
  - Botão de sair (logout) visível apenas para usuários autenticados.
  - Logout remove o token e redireciona para a página inicial.
- **Proteção de Rotas:**
  - Home, Sobre e Contato só são acessíveis após login (AuthGuard).
  - Serviços/produtos são acessíveis a todos.
- **Navegação:**
  - Header com navegação dinâmica (botões mudam conforme login/logout).
  - Footer fixo com carrossel de informações (Bootstrap Carousel).
- **Componentização:**
  - Componentes para header, footer, login, cadastro, home, sobre, contato, serviços.
  - Serviço Angular para gerenciamento dos produtos.
- **Estilização:**
  - Bootstrap 5 e Bootstrap Icons integrados via `angular.json`.
  - Layout responsivo e moderno.
- **Extras:**
  - Página de cadastro de usuário (simulada).
  - Carousel do footer com auto-slide e navegação manual.

## Como rodar o projeto
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
3. Acesse no navegador:
   [http://localhost:4200](http://localhost:4200)

## Estrutura de Pastas
- `src/app/components/` - Componentes compartilhados (header, footer, login, cadastro)
- `src/app/pages/` - Páginas principais (sobre, contato, servico)
- `src/app/home/` - Página Home
- `src/app/service/` - Serviços Angular (ex: produtos)
- `src/app/guards/` - Guardas de rota (AuthGuard)

## Tecnologias Utilizadas
- Angular 19
- Bootstrap 5
- Bootstrap Icons
- TypeScript

## Observações para o Professor
- O projeto foi migrado de standalone para NgModule para melhor compatibilidade.
- O login é simulado (sem backend), apenas para fins didáticos.
- O código está comentado e organizado para facilitar a leitura e avaliação.

---

Desenvolvido por Wellington Oliveira
