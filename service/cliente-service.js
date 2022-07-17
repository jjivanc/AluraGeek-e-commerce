const ListaProdutos = async () =>  {
    const resposta = await fetch(`http://localhost:3000/produtos`)
    if (resposta.ok) {
        return resposta.json()
    }
    throw new Error('Não foi possível listar os Produtos')
}
export const ClientService ={
    ListaProdutos
};