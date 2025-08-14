const API = 'http://localhost:3000/api/livros';

// Buscar livros e renderizar
async function fetchLivros() {
    try { 
        const res = await fetch(API);
        const livros = await res.json();
        renderLivros(livros);
    } catch (error) {
        console.error('Erro ao buscar livros:', error);
    }
}

// Renderiza os livros em cards
function renderLivros(livros) {
    const container = document.getElementById('livrosContainer');
    if (!container) return;

    container.innerHTML = '';

    livros.forEach(livro => {
        const cardHTML = `
            <div class="col-md-5 col-lg-3">
                <div class="card h-100 shadow-sm">
                    <img src="${livro.imagem || 'https://via.placeholder.com/150'}" 
                         class="card-img-top" 
                         alt="${livro.titulo}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${livro.titulo}</h5>
                        <p class="card-text text-muted">${livro.autor}</p>
                        <p class="card-text flex-grow-1">${livro.resumo || ''}</p>
                        <span class="fw-bold text-primary">R$ ${livro.preco.toFixed(2)}</span>
                        <div class="d-flex justify-content-between align-items-center mt-auto">
                            <button class="btn btn-sm btn-outline-primary m-1" onclick='updateLivro(${JSON.stringify(livro)})'>
                                <i class="bi bi-pencil-square"></i> Atualizar
                            </button>
                            <button class="btn btn-sm btn-outline-danger m-1" onclick="deleteLivro(${livro.id})">
                                <i class="bi bi-trash"></i> Deletar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// Deletar Livro
async function deleteLivro(id) {
    if (!confirm("Tem certeza que deseja excluir este livro?")) return;

    try {
        const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
        if (res.ok) {
            alert("Livro deletado!");
            fetchLivros();
        } else {
            alert("Erro ao deletar livro.");
        }
    } catch (error) {
        console.error("Erro ao deletar livro:", error);
    }
}

// Modal de atualização
let modalEditar = null;

function updateLivro(livro) {
    document.getElementById('edit-id').value = livro.id;
    document.getElementById('edit-titulo').value = livro.titulo;
    document.getElementById('edit-autor').value = livro.autor;
    document.getElementById('edit-preco').value = livro.preco;
    document.getElementById('edit-resumo').value = livro.resumo || '';

    if (!modalEditar) {
        modalEditar = new bootstrap.Modal(document.getElementById('modalEditar'));
    }
    modalEditar.show();
}

// Submissão do formulário do modal
document.addEventListener("DOMContentLoaded", () => {
    const formEditar = document.getElementById('formEditarLivro');
    if (formEditar) {
        formEditar.addEventListener('submit', async (e) => {
            e.preventDefault();

            const id = document.getElementById('edit-id').value;
            const dadosAtualizados = {
                titulo: document.getElementById('edit-titulo').value,
                autor: document.getElementById('edit-autor').value,
                preco: parseFloat(document.getElementById('edit-preco').value),
                resumo: document.getElementById('edit-resumo').value
            };

            try {
                const res = await fetch(`${API}/${id}`, {
                    method: 'PUT',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dadosAtualizados)
                });

                if (res.ok) {
                    alert("Livro atualizado com sucesso!");
                    modalEditar.hide();
                    fetchLivros();
                } else {
                    alert("Erro ao atualizar livro.");
                }
            } catch (error) {
                console.error("Erro ao atualizar livro:", error);
            }
        });
    }

    setupForm();  // Formulário de adicionar livro
    fetchLivros(); // Renderiza os livros
});

// Formulário de adicionar livro
function setupForm() {
    const form = document.getElementById('formLivro');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const dados = Object.fromEntries(new FormData(form).entries());
        dados.ano_publicacao = parseInt(dados.ano_publicacao);
        dados.preco = parseFloat(dados.preco);

        try {
            const res = await fetch(API, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            });

            if (res.ok) {
                alert('Livro adicionado com sucesso!');
                form.reset();
                fetchLivros(); // Atualiza a lista
            } else {
                alert('Erro ao adicionar livro.');
            }
        } catch (error) {
            console.error('Erro ao adicionar livro:', error);
        }
    });
}

