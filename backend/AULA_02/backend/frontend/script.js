const API_URL = 'http://localhost:3000/clientes';

// const alerta = alert()

document.addEventListener('DOMContentLoaded', listarClientes);

document.getElementById('clienteForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const CPF = document.getElementById('cpf').value;

    const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, CPF })
    });

    const resultado = await resposta.text();
    alert(resultado);

    document.getElementById('clienteForm').reset();
    listarClientes();
});

async function listarClientes() {
    const resposta = await fetch(API_URL);
    const clientes = await resposta.json();

    const lista = document.getElementById('listaClientes');
    lista.innerHTML = '';

    clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center text-primary';
        li.innerHTML = `
            ${cliente.nome} - ${cliente.CPF}
            <div>
            <button class="btn btn-danger btn-sm m-2" onClick="deletarCliente(${cliente.id})">EXCLUIR</button>
             <button class="btn btn-success btn-sm" onClick="atualizarCliente(${cliente.id})">ATUALIZAR</button>
             <div/>
        `;
        lista.appendChild(li);
    });
    
}

async function deletarCliente(id) {
    const confirmacao = confirm('Tem certeza que deseja deletar esse Cliente?');
    if (!confirmacao) return;

    const resposta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    });

    const resultado = await resposta.text();
    alert(resultado);
    lis
    tarClientes();
}
// ==============================PUT===============================
async function atualizarCliente(id) {
    const confirmacao = confirm('Tem certeza que deseja ATUALIZAR esse Cliente?');
    if (!confirmacao) return;

    const resposta = await fetch(`${API_URL}/${id}`, {
        method: 'PUT'
    });

    const resultado = await resposta.text();
    myModalPUT()
    listarClientes();
    alert(resultado);
}

async function myModalPUT(){
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
}
