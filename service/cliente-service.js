const ListaProdutos = async () =>  {
    const resposta = await fetch(`https://page-alurageek.herokuapp.com/produtos`)
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível listar os Produtos')
}
const criaProduto = async (nome,valor,img) => { 
    const resposta = await fetch(`https://page-alurageek.herokuapp.com/produtos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            img: img
        })
    })
    if (resposta.ok) {
        return resposta.body
    }
    throw new Error('Não foi possível criar um Produto')
}

const detalhaProduto = async (id) => { 
    const resposta = await fetch(`https://page-alurageek.herokuapp.com/produtos/${id}`)
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível detalhar um Produto')
}

const removeProduto = async (id) => { 
    const resposta = await fetch(`https://page-alurageek.herokuapp.com/produtos/${id}`, {
        method: 'DELETE'
    })
    if (!resposta.ok) {
        throw new Error('Não foi possível deletar um Produto')
    }
}

const atualizaProduto = async (nome, valor, img, id) => {
    const resposta = await fetch(`https://page-alurageek.herokuapp.com/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            valor: valor,
            img: img
        })
    })
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível detalhar um produto')
}

export const ClientService ={
    ListaProdutos,
    criaProduto,
    removeProduto,
    detalhaProduto,
    atualizaProduto
};
