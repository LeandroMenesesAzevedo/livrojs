const prompt = require ("prompt-sync")() // adiciona o pacote do programa
const nome = prompt("Digite o nome do funcionário: ")
const sal = Number(prompt("Digite o salário do funcionário: "))
const tempo = Number(prompt("Digite o tempo de empregado: "))

const quadrilenios = Math.floor(tempo/4)
const acrescimo = sal * quadrilenios/ 100

console.log(`O salário do ${nome} em quadrilenio R$: ${quadrilenios.toFixed(2)}`)
console.log(`O salário do ${nome} com acrescimo R$: ${acrescimo.toFixed(2)}`)
///  falta termina
