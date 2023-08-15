//criando referência ao form e aos elementos de resposta (pelo seu id) 
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = documet.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")
const resp4 = document.querySelector("#outResp4")

//criando um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener( "submit", (e) => {
        const marca = frm.inVeiculo.value // pegando o valor do campo do nome marca do veículo
        const modelo = frm.inModelo.value // pegando o valor do campo do nome modelo do veículo
        const preco = Number(frm.inValor.value) //  pegando o valor do campo do preço do veículo

        const entrada = preco * 0.50 // calculando o valor de 50% da entrada 
        const parcelado = (preco * 0.50)/ 12 //  calculando o valor parcelado

        resp1.innerText = `Promoção do carro da marca: ${marca}`
        resp2.innerText = `O medolo do carro é: ${modelo}`
        resp3.innerText = `O valor de 50% do carro é:  ${entrada.toFixed(2)}`
        resp4.innerText = `O valor das parcela em 12x é : ${parcelado.toFixed(2)}`
        
        e.preventDefault() // envio do form
    })