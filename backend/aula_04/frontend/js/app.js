// Configuração da API
const API_BASE_URL = 'http://localhost:3008/api';

// Estado global
let clienteEditando = null;
let clientes = [];

// Elementos DOM
const tabelaClientes = document.getElementById('tabelaClientes');
const totalClientes = document.getElementById('totalClientes');
const loading = document.getElementById('loading');
const semClientes = document.getElementById('semClientes');
const formCliente = document.getElementById('formCliente');
const clienteModal = new bootstrap.Modal(document.getElementById('clienteModal'));
const confirmarModal = new bootstrap.Modal(document.getElementById('confirmarModal'));
const toast = new bootstrap.Toast(document.getElementById('toast'));

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    carregarClientes();
    configurarEventos();
    configurarMascara();
});

// Configurar eventos
function configurarEventos() {
    // Filtros
    document.getElementById('filtroNome').addEventListener('input', filtrarClientes);
    document.getElementById('filtroSexo').addEventListener('change', filtrarClientes);
    
    // Form submit
    formCliente.addEventListener('submit', function(e) {
        e.preventDefault();
        salvarCliente();
    });
    
    // Máscaras
    configurarMascara();
}

// Configurar máscara para CPF
function configurarMascara() {
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        e.target.value = value;
    });
}

// Carregar clientes da API
async function carregarClientes() {
    try {
        mostrarLoading(true);
        
        const response = await fetch(`${API_BASE_URL}/clientes`);
        const data = await response.json();
        
        if (data.success) {
            clientes = data.data || [];
            renderizarClientes(clientes);
            atualizarTotal(clientes.length);
        } else {
            throw new Error(data.message || 'Erro ao carregar clientes');
        }
        
    } catch (error) {
        console.error('Erro ao carregar clientes:', error);
        mostrarToast('Erro ao carregar clientes: ' + error.message, 'error');
        clientes = [];
        renderizarClientes([]);
        atualizarTotal(0);
    } finally {
        mostrarLoading(false);
    }
}

// Renderizar tabela de clientes
function renderizarClientes(listaClientes) {
    if (!listaClientes || listaClientes.length === 0) {
        tabelaClientes.innerHTML = '';
        semClientes.classList.remove('d-none');
        return;
    }
    
    semClientes.classList.add('d-none');
    
    tabelaClientes.innerHTML = listaClientes.map(cliente => `
        <tr class="fade-in">
            <td><strong>#${cliente.id}</strong></td>
            <td>
                <i class="bi bi-person-circle text-primary me-2"></i>
                ${cliente.nome}
            </td>
            <td>
                <span class="font-monospace">${cliente.cpf}</span>
            </td>
            <td>
                <span class="badge ${cliente.sexo === 'Masculino' ? 'badge-masculino' : 'badge-feminino'}">
                    <i class="bi bi-gender-${cliente.sexo === 'Masculino' ? 'male' : 'female'}"></i>
                    ${cliente.sexo}
                </span>
            </td>
            <td class="text-center">
                <div class="btn-group" role="group">
                    <button class="btn btn-outline-primary btn-action" 
                            onclick="editarCliente(${cliente.id})" 
                            title="Editar">
                        <i class="bi bi-pencil"></i>
                    </button>
                    <button class="btn btn-outline-danger btn-action" 
                            onclick="confirmarExclusao(${cliente.id})" 
                            title="Excluir">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Filtrar clientes
function filtrarClientes() {
    const filtroNome = document.getElementById('filtroNome').value.toLowerCase();
    const filtroSexo = document.getElementById('filtroSexo').value;
    
    const clientesFiltrados = clientes.filter(cliente => {
        const nomeMatch = cliente.nome.toLowerCase().includes(filtroNome);
        const sexoMatch = !filtroSexo || cliente.sexo === filtroSexo;
        return nomeMatch && sexoMatch;
    });
    
    renderizarClientes(clientesFiltrados);
    atualizarTotal(clientesFiltrados.length);
}

// Abrir modal para criar cliente
function abrirModalCriar() {
    clienteEditando = null;
    document.getElementById('modalTitle').innerHTML = '<i class="bi bi-person-plus"></i> Novo Cliente';
    limparFormulario();
    clienteModal.show();
}

// Editar cliente
function editarCliente(id) {
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) {
        mostrarToast('Cliente não encontrado', 'error');
        return;
    }
    
    clienteEditando = cliente;
    document.getElementById('modalTitle').innerHTML = '<i class="bi bi-pencil"></i> Editar Cliente';
    
    // Preencher formulário
    document.getElementById('clienteId').value = cliente.id;
    document.getElementById('nome').value = cliente.nome;
    document.getElementById('cpf').value = cliente.cpf;
    document.getElementById('sexo').value = cliente.sexo;
    
    clienteModal.show();
}

// Salvar cliente (criar ou atualizar)
async function salvarCliente() {
    if (!validarFormulario()) return;
    
    const clienteData = {
        nome: document.getElementById('nome').value.trim(),
        cpf: document.getElementById('cpf').value.trim(),
        sexo: document.getElementById('sexo').value
    };
    
    try {
        const url = clienteEditando 
            ? `${API_BASE_URL}/clientes/${clienteEditando.id}`
            : `${API_BASE_URL}/clientes`;
            
        const method = clienteEditando ? 'PUT' : 'POST';
        
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clienteData)
        });
        
        const data = await response.json();
        
        if (data.success) {
            const acao = clienteEditando ? 'atualizado' : 'criado';
            mostrarToast(`Cliente ${acao} com sucesso!`, 'success');
            clienteModal.hide();
            carregarClientes();
        } else {
            throw new Error(data.error || data.message || 'Erro ao salvar cliente');
        }
        
    } catch (error) {
        console.error('Erro ao salvar cliente:', error);
        mostrarToast('Erro ao salvar cliente: ' + error.message, 'error');
    }
}

// Confirmar exclusão
function confirmarExclusao(id) {
    const cliente = clientes.find(c => c.id === id);
    if (!cliente) return;
    
    document.getElementById('btnConfirmarExcluir').onclick = () => excluirCliente(id);
    confirmarModal.show();
}

// Excluir cliente
async function excluirCliente(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/clientes/${id}`, {
            method: 'DELETE'
        });
        
        const data = await response.json();
        
        if (data.success) {
            mostrarToast('Cliente excluído com sucesso!', 'success');
            confirmarModal.hide();
            carregarClientes();
        } else {
            throw new Error(data.error || data.message || 'Erro ao excluir cliente');
        }
        
    } catch (error) {
        console.error('Erro ao excluir cliente:', error);
        mostrarToast('Erro ao excluir cliente: ' + error.message, 'error');
    }
}

// Validar formulário
function validarFormulario() {
    const nome = document.getElementById('nome');
    const cpf = document.getElementById('cpf');
    const sexo = document.getElementById('sexo');
    
    let valido = true;
    
    // Limpar validações anteriores
    [nome, cpf, sexo].forEach(campo => {
        campo.classList.remove('is-invalid');
        const feedback = campo.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) {
            feedback.textContent = '';
        }
    });
    
    // Validar nome
    if (!nome.value.trim() || nome.value.trim().length < 2) {
        mostrarErroValidacao(nome, 'Nome deve ter pelo menos 2 caracteres');
        valido = false;
    }
    
    // Validar CPF
    const cpfLimpo = cpf.value.replace(/\D/g, '');
    if (!cpfLimpo || cpfLimpo.length !== 11) {
        mostrarErroValidacao(cpf, 'CPF deve ter 11 dígitos');
        valido = false;
    }
    
    // Validar sexo
    if (!sexo.value) {
        mostrarErroValidacao(sexo, 'Selecione o sexo');
        valido = false;
    }
    
    return valido;
}

// Mostrar erro de validação
function mostrarErroValidacao(campo, mensagem) {
    campo.classList.add('is-invalid');
    const feedback = campo.nextElementSibling;
    if (feedback && feedback.classList.contains('invalid-feedback')) {
        feedback.textContent = mensagem;
    }
}

// Limpar formulário
function limparFormulario() {
    formCliente.reset();
    document.getElementById('clienteId').value = '';
    
    // Remover classes de validação
    const campos = formCliente.querySelectorAll('.form-control, .form-select');
    campos.forEach(campo => {
        campo.classList.remove('is-invalid', 'is-valid');
    });
}

// Mostrar/ocultar loading
function mostrarLoading(mostrar) {
    if (mostrar) {
        loading.classList.remove('d-none');
        tabelaClientes.innerHTML = '';
        semClientes.classList.add('d-none');
    } else {
        loading.classList.add('d-none');
    }
}

// Atualizar total de clientes
function atualizarTotal(total) {
    totalClientes.textContent = total;
}

// Mostrar toast de notificação
function mostrarToast(mensagem, tipo = 'info') {
    const toastElement = document.getElementById('toast');
    const toastBody = toastElement.querySelector('.toast-body');
    const toastIcon = toastElement.querySelector('.toast-header i');
    
    // Definir ícone e cor baseado no tipo
    const tipos = {
        success: { icon: 'bi-check-circle', color: 'text-success' },
        error: { icon: 'bi-exclamation-circle', color: 'text-danger' },
        warning: { icon: 'bi-exclamation-triangle', color: 'text-warning' },
        info: { icon: 'bi-info-circle', color: 'text-primary' }
    };
    
    const config = tipos[tipo] || tipos.info;
    
    toastIcon.className = `bi ${config.icon} me-2 ${config.color}`;
    toastBody.textContent = mensagem;
    
    toast.show();
}

// Função utilitária para formatar CPF
function formatarCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Função utilitária para limpar CPF
function limparCPF(cpf) {
    return cpf.replace(/\D/g, '');
}
