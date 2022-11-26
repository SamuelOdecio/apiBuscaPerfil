import './style.css'
import '@picocss/pico'


const formConsultarConta = document.querySelector('#consultarCep')
const inputConta = formConsultarCep.cep
const divDados = document.querySelector('#dados')
const btnConsultarConta = document.querySelector('#btnConsultarCep')

formConsultarCep.addEventListener('submit', (event) => {
  event.preventDefault() //anula o comportamento padrao de envio do form
  ativaLoader(true)
  consultarConta(inputCep.value)

})


async function consultarCep(cep) {
  let response = await fetch(`https://api.github.com/users/${conta}`)
  let dadosConta = await response.json()
  
  divDados.innerHTML = `
  
    <p>Endereço: ${dadosCep.logradouro}</p>
    <p>Cidade: ${dadosCep.localidade}</p>
    <p>Estado: ${dadosCep.uf}</p>
    <p>CEP: ${dadosCep.cep}</p>


  `
  ativaLoader(false)
}

function ativaLoader(ativo){
  if(ativo){
    btnConsultarCep.setAttribute('aria-busy', 'true')
    btnConsultarCep.textContent = 'Consultando CEP...'

  }else{
    btnConsultarCep.removeAttribute('aria-busy')
    btnConsultarCep.textContent = 'Consultar'
  }
}

consultarCep()