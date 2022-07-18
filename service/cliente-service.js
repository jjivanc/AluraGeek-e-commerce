const ListaProdutos = async () =>  {
    const resposta = await fetch(`https://page-alurageek.herokuapp.com/produtos`)
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível listar os Produtos')
}
export const ClientService ={
    ListaProdutos
};
