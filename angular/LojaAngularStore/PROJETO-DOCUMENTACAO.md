# 🏪 Loja AngularStore - Documentação

## 📋 Sobre o Projeto

Esta é uma **SPA (Single Page Application)** desenvolvida com **Angular 19** que simula uma loja virtual de equipamentos de musculação. O projeto utiliza **componentes standalone** e **roteamento** para navegação entre páginas.

## 🚀 Funcionalidades

- ✅ **Navegação** entre 3 páginas principais
- ✅ **Exibição de produtos** com imagens, descrições e preços
- ✅ **Página de contato** com informações e formulário
- ✅ **Página de redes sociais** com links para perfis
- ✅ **Design responsivo** usando Bootstrap
- ✅ **Componentes standalone** (Angular 19)

## 🏗️ Estrutura do Projeto

```
src/app/
├── components/
│   ├── header/           # Cabeçalho com navegação
│   ├── produtos/         # Página principal com produtos
│   ├── contatos/         # Página de contato
│   ├── redes-sociais/    # Página de redes sociais
│   └── footer/           # Rodapé da aplicação
├── app.routes.ts         # Configuração das rotas
├── app.component.ts      # Componente principal
└── app.component.html    # Template principal

public/
└── imagens/              # Pasta para imagens dos produtos
```

## 📦 Produtos Disponíveis

O projeto inclui **6 produtos** de equipamentos de musculação:

1. **Halter 5kg** - R$ 89,90
2. **Caneleira 3kg** - R$ 59,90
3. **Colchonete** - R$ 39,90
4. **Barra W** - R$ 129,90
5. **Kettlebell 8kg** - R$ 79,90
6. **Faixa Elástica** - R$ 29,90

## 🛠️ Tecnologias Utilizadas

- **Angular 19** (Standalone Components)
- **Bootstrap 5** (CSS Framework)
- **Bootstrap Icons** (Ícones)
- **TypeScript** (Linguagem de programação)
- **HTML5 & CSS3** (Estrutura e estilo)

## 🎨 Características Técnicas

### Componentes Standalone
Todos os componentes utilizam a nova arquitetura standalone do Angular 19:
```typescript
@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
```

### Roteamento
Sistema de rotas configurado para navegação SPA:
```typescript
export const routes: Routes = [
  { path: '', component: ProdutosComponent },
  { path: 'contato', component: ContatosComponent },
  { path: 'redes-sociais', component: RedesSociaisComponent }
];
```

### Responsividade
- **CSS Grid** para layout dos produtos
- **Bootstrap classes** para componentes
- **Media queries** para dispositivos móveis

## 🖼️ Imagens dos Produtos

Para adicionar imagens reais dos produtos:

1. Coloque as imagens na pasta `public/imagens/`
2. Use os nomes específicos listados no código
3. Recomenda-se imagens 400x300px, máximo 500KB

## 🎯 Como Usar

1. **Instalar dependências**: `npm install`
2. **Executar o projeto**: `ng serve`
3. **Acessar**: `http://localhost:4200`

## 📱 Páginas Disponíveis

- **/** - Página inicial com produtos
- **/contato** - Informações de contato
- **/redes-sociais** - Links para redes sociais

## 🔧 Comentários no Código

Todo o código está **comentado** para facilitar o entendimento:
- Explicações sobre cada componente
- Descrição das funcionalidades
- Instruções de uso e configuração

## 📈 Próximos Passos

- [ ] Implementar carrinho de compras
- [ ] Adicionar sistema de login
- [ ] Integrar com API de pagamentos
- [ ] Implementar busca de produtos
- [ ] Adicionar avaliações de produtos

---

**Desenvolvido com Angular 19 - Loja AngularStore** 🚀
