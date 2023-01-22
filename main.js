const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add(){ 
  // const today = prompt('Digite o dia (DD/MM)que deseja adicionar: ')
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists) {
    alert('ATENÇÃO! O dia adicionado já existe na tabela!')
    return
  }
  alert('Dia adicionado ☑! ')
  nlwSetup.addDay(today)
}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

// const data = { 
//   corrida: ['01-01', '01-02', '01-06'], 
//   agua: ['01-04', '01-05'],
//   comida: ['01-01', '01-03'],
//   diario: ['01-01', '01-02', '01-07']
// }

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()