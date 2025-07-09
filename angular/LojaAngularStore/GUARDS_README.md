# 🛡️ Guards da Loja AngularStore

## Guards Implementados

### 1. **produto-guard.guard.ts**
- **Função**: Verifica se há produtos carregados no serviço
- **Usado em**: `/produtos`
- **Comportamento**: 
  - ✅ Permite acesso se há produtos carregados
  - ❌ Redireciona para `/` se não há produtos

### 2. **vitrine.guard.ts**
- **Função**: Verifica se há um produto selecionado para visualização
- **Usado em**: `/vitrine`
- **Comportamento**:
  - ✅ Permite acesso se há um produto selecionado
  - ❌ Redireciona para `/` se nenhum produto foi selecionado

### 3. **carrinho.guard.ts**
- **Função**: Monitora o estado do carrinho (informativo)
- **Usado em**: `/carrinho`
- **Comportamento**:
  - ✅ Sempre permite acesso
  - ℹ️ Registra no console o estado do carrinho

## Como Funcionam

### Logs de Debug
Todos os guards geram logs no console para facilitar o debug:
- `🛡️` - Guard sendo executado
- `✅` - Acesso permitido
- `❌` - Acesso negado
- `ℹ️` - Informação adicional

### Exemplo de Uso

```typescript
// No app.routes.ts
{
  path: 'vitrine',
  component: VitrineComponent,
  canActivate: [vitrineGuard]  // Protege a rota
}
```

### Funcionalidades Básicas

1. **Injection de Serviços**: Usa `inject()` para acessar serviços
2. **Redirecionamento**: Usa `Router.navigate()` para redirecionar
3. **Validação Simples**: Verificações básicas e diretas
4. **Logs Informativos**: Console.log para debug

## Teste dos Guards

### Para testar:

1. **Produto Guard**:
   - Tente acessar `/produtos` diretamente
   - Deve permitir se há produtos carregados

2. **Vitrine Guard**:
   - Acesse `/vitrine` sem selecionar produto
   - Deve redirecionar para `/`
   - Selecione um produto e tente novamente

3. **Carrinho Guard**:
   - Acesse `/carrinho` com carrinho vazio
   - Acesse `/carrinho` com itens
   - Veja os logs no console

## Observações

- Guards são **funções** (Angular 15+), não classes
- Usam **inject()** ao invés de DI no constructor
- São **síncronos** e simples
- Focam na **experiência do usuário**
