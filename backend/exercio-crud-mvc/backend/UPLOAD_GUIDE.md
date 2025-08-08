📸 **Sistema de Upload de Imagens Configurado!**

## 🎯 **Como usar no Insomnia:**

### 1. **POST** - Criar produto com imagem:
**URL:** `POST http://localhost:3000/api/produtos`
**Tipo:** `Multipart Form`

**Campos:**
- `nome`: "Produto com Foto"
- `preco`: 99.90
- `estoque`: 25
- `imagem`: [Selecionar arquivo de imagem]

### 2. **PUT** - Atualizar produto com imagem:
**URL:** `PUT http://localhost:3000/api/produtos/1`
**Tipo:** `Multipart Form`

**Campos:**
- `nome`: "Produto Atualizado"
- `preco`: 149.90
- `estoque`: 30
- `imagem`: [Selecionar nova imagem]

### 3. **GET** - Ver produtos (com URLs das imagens):
**URL:** `GET http://localhost:3000/api/produtos`

**Resposta incluirá:**
```json
{
  "id": 1,
  "nome": "Produto com Foto",
  "preco": 99.90,
  "estoque": 25,
  "imagem": "imagem-1691234567890-123456789.jpg"
}
```

### 4. **Acessar imagem no browser:**
`http://localhost:3000/uploads/imagem-1691234567890-123456789.jpg`

## 📁 **Estrutura das pastas:**
- Imagens salvas em: `backend/uploads/`
- URL para acessar: `http://localhost:3000/uploads/nome-da-imagem.jpg`

## 🖼️ **Formatos aceitos:**
- JPG, JPEG, PNG, GIF, WEBP
- Tamanho máximo: 5MB
