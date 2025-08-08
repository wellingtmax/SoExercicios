// URL da API
const API_URL = 'http://localhost:3000/api/produtos';

// BUSCAR TODOS OS PRODUTOS
async function buscarProdutos() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        if (data.success) {
            mostrarProdutos(data.data);
        }
    } catch (error) {
        alert('Erro ao buscar produtos: ' + error.message);
    }
}

// MOSTRAR PRODUTOS NA TELA
function mostrarProdutos(produtos) {
    const lista = document.getElementById('listaProdutos');
    lista.innerHTML = '';

    produtos.forEach(produto => {
        lista.innerHTML += `
            <div class="produto">
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco}</p>
                <p>Estoque: ${produto.estoque}</p>
                <button onclick="editarProduto(${produto.id}, '${produto.nome}', ${produto.preco}, ${produto.estoque})">
                    Editar
                </button>
                <button onclick="deletarProduto(${produto.id})">
                    Deletar
                </button>
            </div>
        `;
    });
}

// CRIAR OU ATUALIZAR PRODUTO
async function salvarProduto() {
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;
    const estoque = document.getElementById('estoque').value;
    const produtoId = document.getElementById('produtoId').value;

    if (!nome || !preco || !estoque) {
        alert('Preencha todos os campos!');
        return;
    }

    const produto = {
        nome: nome,
        preco: parseFloat(preco),
        estoque: parseInt(estoque)
    };

    try {
        let response;
        
        if (produtoId) {
            // ATUALIZAR produto existente
            response = await fetch(`${API_URL}/${produtoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
        } else {
            // CRIAR novo produto
            response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(produto)
            });
        }

        const data = await response.json();
        
        if (data.success) {
            alert(produtoId ? 'Produto atualizado!' : 'Produto criado!');
            limparFormulario();
            buscarProdutos();
        } else {
            alert('Erro: ' + data.message);
        }
    } catch (error) {
        alert('Erro ao salvar: ' + error.message);
    }
}

// EDITAR PRODUTO
function editarProduto(id, nome, preco, estoque) {
    document.getElementById('produtoId').value = id;
    document.getElementById('nome').value = nome;
    document.getElementById('preco').value = preco;
    document.getElementById('estoque').value = estoque;
    
    document.getElementById('btnSalvar').textContent = 'Atualizar';
}

// DELETAR PRODUTO
async function deletarProduto(id) {
    if (confirm('Tem certeza que quer deletar?')) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            
            const data = await response.json();
            
            if (data.success) {
                alert('Produto deletado!');
                buscarProdutos();
            } else {
                alert('Erro: ' + data.message);
            }
        } catch (error) {
            alert('Erro ao deletar: ' + error.message);
        }
    }
}

// LIMPAR FORMULÁRIO
function limparFormulario() {
    document.getElementById('produtoId').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('estoque').value = '';
    document.getElementById('btnSalvar').textContent = 'Salvar';
}

// CANCELAR EDIÇÃO
function cancelarEdicao() {
    limparFormulario();
}

// CARREGAR PRODUTOS QUANDO A PÁGINA ABRIR
window.onload = function() {
    buscarProdutos();
};
