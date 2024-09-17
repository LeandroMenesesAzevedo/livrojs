// Criando referência do form e ao elementos de resposta

const frm = document.querySelector("form")
const resposta1 = document.querySelector("h3")
const resposta2 = document.querySelector("h4")

//Criando um ouvinte  de evento, ao clicar no submit
frm.addEventListener( "submit", e => {

    const veiculo = frm.imodelo.value
    const valor = Number(frm.ivalor.value)

    const valenter = valor * 0.50
    const parcelado = valenter/12

    resposta1.innerText = ` O modelo do veículo é: ${veiculo}`
    resposta2.innerText = ` O valor do carro: ${valor.toFixed(2)}\n  Entrada de 50%: ${valenter.toFixed(2)}\n  Parcelas de 12x ${parcelado.toFixed(2)}`



    e.preventDefault()
});
