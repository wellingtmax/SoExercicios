fetch('http://localhost:3000/clientes')
.then(res => res.json())
.then(clentes => {
    const container = document.getElementById('clientes-container');
    clentes.forEach(cliente => {
        const  div = document.createElement('div');
        div.className = 'cliente';
        div.innerHTML = `
        <div class="" style="display: flex;">
        <div class="m-3" style="display: flex; gap: 30px">
        <strong style="color: blue;">Nome: </strong>  
        <i style="text-decoration: underline;">${cliente.nome}</i><br><br><strong style="color: blue;">CPF: </strong> ${cliente.cpf}
        </div>
        <div class=""> 
       <button class="btn btn-danger" style="margin-left: 300px;">Excluir</button>
       </div>
       </div>
      
        `
        container.appendChild(div)
    });
})

.catch(err => console.log('Erro ao conectar ao Cliente', err))