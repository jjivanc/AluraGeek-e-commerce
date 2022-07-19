import { ClientService } from '../service/cliente-service.js'

const formulario = document.querySelector('[data-form]')


formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault()
  try {
    const nome = evento.target.querySelector('[data-nome]').value
    const valor = evento.target.querySelector('[data-valor]').value
    const img = evento.target.querySelector('[data-img]').value

    await ClientService.criaProduto(nome,valor,img)
    alert('Produto Cadastrado')
  }
  catch (erro) {
    alert(erro)
    console.log(erro)
  }
})