import '@picocss/pico'


const formConsultarPerfil = document.querySelector('#consultarPerfil')
const inputPerfil = formConsultarPerfil.perfil
const divDados = document.querySelector('#dados')
const btnConsultarPerfil = document.querySelector('#btnBuscar')

formConsultarPerfil.addEventListener('submit', (event) => {
  event.preventDefault() //anula o comportamento padrao de envio do form
  ativaLoader(true)
  consultarPerfil(inputPerfil.value)

})


async function consultarPerfil(perfil) {
  let response = await fetch(`https://api.github.com/users/${perfil}`)
  let dadosPerfil = await response.json()
  
  divDados.innerHTML = `
    <p>${dadosPerfil.name}</p>
    <img src="${dadosPerfil.avatar_url}">
    <a href="${dadosPerfil.html_url}">Perfil no GitHub</a>
  `
  ativaLoader(false)
}

function ativaLoader(ativo){
  if(ativo){
    btnBuscar.setAttribute('aria-busy', 'true')
    btnBuscar.textContent = 'Consultando Perfil...'

  }else{
    btnBuscar.removeAttribute('aria-busy')
    btnBuscar.textContent = 'Consultar'
  }
}

consultarPerfil()