const prompt = require("prompt-sync")() // Adiciona o pacote do programa.
const veiculo = prompt("Veiculo: ") // lê os dados
const preco = Number(prompt("Preço R$: ")) // lê os dados

const entrada = preco * 0.50 // calcular o valor de entrada 
const parcela = (preco *0.50)/12 // calcular o valor e de parcelas

console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$: ${parcela.toFixed(2)}`)
