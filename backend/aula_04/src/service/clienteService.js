const clienteRepository = require('../repository/clienteRepository');

class ClienteService {

    // Validar dados do cliente
    validarCliente(cliente) {
        const erros = [];

        if (!cliente.nome || cliente.nome.trim().length < 2) {
            erros.push('Nome é obrigatório e deve ter pelo menos 2 caracteres');
        }

        if (!cliente.cpf || !this.validarCpf(cliente.cpf)) {
            erros.push('CPF é obrigatório e deve ser válido');
        }

        if (!cliente.sexo || !['Masculino', 'Feminino'].includes(cliente.sexo)) {
            erros.push('Sexo é obrigatório e deve ser "Masculino" ou "Feminino"');
        }

        return erros;
    }

    // Validar formato do CPF
    validarCpf(cpf) {
        // Remove pontos e traços
        const cpfLimpo = cpf.replace(/[^\d]/g, '');
        
        // Verifica se tem 11 dígitos
        if (cpfLimpo.length !== 11) return false;
        
        // Verifica se não são todos os números iguais
        if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;
        
        return true; // Validação básica, pode ser melhorada
    }

    // Buscar todos os clientes
    async buscarTodos() {
        try {
            return await clienteRepository.buscarTodos();
        } catch (error) {
            throw new Error(`Erro no serviço ao buscar clientes: ${error.message}`);
        }
    }

    // Buscar cliente por ID
    async buscarPorId(id) {
        try {
            if (!id || isNaN(id)) {
                throw new Error('ID deve ser um número válido');
            }

            const cliente = await clienteRepository.buscarPorId(id);
            if (!cliente) {
                throw new Error('Cliente não encontrado');
            }

            return cliente;
        } catch (error) {
            throw new Error(`Erro no serviço ao buscar cliente: ${error.message}`);
        }
    }

    // Criar novo cliente
    async criar(clienteData) {
        try {
            // Validar dados
            const erros = this.validarCliente(clienteData);
            if (erros.length > 0) {
                throw new Error(`Dados inválidos: ${erros.join(', ')}`);
            }

            // Verificar se CPF já existe
            const clienteExistente = await clienteRepository.buscarPorCpf(clienteData.cpf);
            if (clienteExistente) {
                throw new Error('CPF já cadastrado');
            }

            // Criar cliente
            const clienteId = await clienteRepository.criar(clienteData);
            return await clienteRepository.buscarPorId(clienteId);
        } catch (error) {
            throw new Error(`Erro no serviço ao criar cliente: ${error.message}`);
        }
    }

    // Atualizar cliente
    async atualizar(id, clienteData) {
        try {
            if (!id || isNaN(id)) {
                throw new Error('ID deve ser um número válido');
            }

            // Verificar se cliente existe
            await this.buscarPorId(id);

            // Validar dados
            const erros = this.validarCliente(clienteData);
            if (erros.length > 0) {
                throw new Error(`Dados inválidos: ${erros.join(', ')}`);
            }

            // Verificar se CPF já existe em outro cliente
            const clienteExistente = await clienteRepository.buscarPorCpf(clienteData.cpf);
            if (clienteExistente && clienteExistente.id != id) {
                throw new Error('CPF já cadastrado para outro cliente');
            }

            // Atualizar cliente
            const sucesso = await clienteRepository.atualizar(id, clienteData);
            if (!sucesso) {
                throw new Error('Falha ao atualizar cliente');
            }

            return await clienteRepository.buscarPorId(id);
        } catch (error) {
            throw new Error(`Erro no serviço ao atualizar cliente: ${error.message}`);
        }
    }

    // Deletar cliente
    async deletar(id) {
        try {
            if (!id || isNaN(id)) {
                throw new Error('ID deve ser um número válido');
            }

            // Verificar se cliente existe
            await this.buscarPorId(id);

            // Deletar cliente
            const sucesso = await clienteRepository.deletar(id);
            if (!sucesso) {
                throw new Error('Falha ao deletar cliente');
            }

            return { message: 'Cliente deletado com sucesso' };
        } catch (error) {
            throw new Error(`Erro no serviço ao deletar cliente: ${error.message}`);
        }
    }

    // Buscar clientes por sexo
    async buscarPorSexo(sexo) {
        try {
            if (!sexo || !['Masculino', 'Feminino'].includes(sexo)) {
                throw new Error('Sexo deve ser "Masculino" ou "Feminino"');
            }

            return await clienteRepository.buscarPorSexo(sexo);
        } catch (error) {
            throw new Error(`Erro no serviço ao buscar clientes por sexo: ${error.message}`);
        }
    }
}

module.exports = new ClienteService();
