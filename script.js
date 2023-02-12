// Seu código aqui...
primeiroNumero = Number(prompt('Digite um número:'))
segundoNumero = Number(prompt('Digite um número:'))
operacaoMatematica = prompt('Escolha uma operação matematica a ser realizada: adição, subtração, multiplicação ou divisão?')

if(operacaoMatematica === 'adição') {
  let resultadoSoma = primeiroNumero + segundoNumero
  alert(resultadoSoma)
} else if (operacaoMatematica === 'subtração') {
  let resultadoSubtracao = primeiroNumero - segundoNumero
  alert(resultadoSubtracao)
} else if (operacaoMatematica === 'multiplicação') {
  let resultadoMultiplicacao = primeiroNumero * segundoNumero
  alert(resultadoMultiplicacao)
} else if (operacaoMatematica === 'divisão') {
  let resultadoDivisao = primeiroNumero / segundoNumero
  alert(resultadoDivisao)
} else {
  alert('Você precisa escolher uma das operações: adição, subtração, multiplicação ou divisão')
}
  