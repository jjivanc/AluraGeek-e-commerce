import { ClientService } from '../service/cliente-service.js'

(async () => { 
    const pegaURL = new URL(window.location);
  
    const id = pegaURL.searchParams.get('id');
    
    const inputNome = document.querySelector('[data-nome]');
    const inputValor = document.querySelector('[data-valor]');
    const inputImg = document.querySelector('[data-img]');
    try { 
      const dados = await ClientService.detalhaProduto(id)
      inputNome.value = dados.nome
      inputValor.value = dados.valor
      inputImg.value = dados.img
    }
    catch(erro){
      console.log(erro)
    };
  
    
    const formulario = document.querySelector('[data-form]')
    
    
    formulario.addEventListener('submit', async (evento)=> { 
      evento.preventDefault()
      try {
        await ClientService.atualizaProduto(inputNome.value, inputValor.value, inputImg.value, id)
        alert('Produto Editado')
      }
      catch(erro){
        console.log(erro)
      }
    })
  })()