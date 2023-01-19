const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = { 
  corrida: ['01-01', '01-02', '01-06'], 
  agua: ['01-04', '01-05'],
  comida: ['01-01', '01-03'],
  diario: ['01-01', '01-02', '01-07']
}

nlwSetup.setData(data)
nlwSetup.load()