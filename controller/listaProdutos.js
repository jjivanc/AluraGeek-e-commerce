import { ClientService } from '../service/cliente-service.js'

const criarProduto = (nome,valor,id) => {
    const criarDiv = document.createElement('div');
    const conteudo = `
    
        <div class="modify">
            <a href="#"><img src="assets/delete.png" alt=""></a>
            <a href="#"><img src="assets/edit.png" alt=""></a>
        </div>
        <img src="assets/star-wars.png" alt="">
        <h3>${nome}</h3>
        <p class="produto-price">R$ ${valor}</p>
        <p class="produto-id">#${id}</p>
    
    `
    criarDiv.innerHTML = conteudo;
    criarDiv.className = 'box-item'
    return criarDiv
};

const tabela = document.querySelector('.category-itens')

const render = async () =>  {
    try {
        const listaProdutos = await ClientService.ListaProdutos();
        listaProdutos.forEach(elemento => {
            tabela.appendChild(criarProduto(elemento.nome,elemento.valor,elemento.id))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../index.html"
    }
}

render()