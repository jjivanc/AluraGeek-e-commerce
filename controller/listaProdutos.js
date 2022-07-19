import { ClientService } from '../service/cliente-service.js'

const criarProduto = (nome,valor,img,id) => {
    const criarDiv = document.createElement('div');
    const conteudo = `
    
        <div class="modify">
            <a href="#" ><img src="assets/delete.png" class="botao-excluir" alt=""></a>
            <a href="./editar-produto.html?id=${id}" ><img src="assets/edit.png" class="botao-editar alt=""></a>
        </div>
        <img src="${img}" alt="">
        <h3>${nome}</h3>
        <p class="produto-price">R$ ${valor}</p>
        <p class="produto-id">#${id}</p>
    
    `
    criarDiv.innerHTML = conteudo;
    criarDiv.className = 'box-item'
    criarDiv.dataset.id = id
    return criarDiv
};

const boxItem = document.querySelector('.category-itens')

const render = async () =>  {
    try {
        const listaProdutos = await ClientService.ListaProdutos();
        listaProdutos.forEach(elemento => {
            boxItem.appendChild(criarProduto(elemento.nome,elemento.valor,elemento.img,elemento.id))
    })
    }
    catch(erro){
        console.log(erro)
        window.location.href="../index.html"
    }
}

render()

boxItem.addEventListener('click', async (evento)=> {
    let BotaoDeDeleta = evento.target.className === 'botao-excluir'
    console.log(BotaoDeDeleta)
    if(BotaoDeDeleta){
        try {
            const esseProduto = evento.target.closest('[data-id]')
            let id = esseProduto.dataset.id
            await ClientService.removeProduto(id)
            esseProduto.remove()
            console.log('aaaaaaaa')
        }
        catch(erro){
            console.log(erro)
            alert(erro)
        }
    }
})



const search = document.querySelector('.search')
search.addEventListener('keypress', async () => {
    const alistaProdutos = await ClientService.ListaProdutos();
    alistaProdutos.forEach( item => {
        if(item.nome == search.value){
            console.log(item.nome)
        }
    })
})