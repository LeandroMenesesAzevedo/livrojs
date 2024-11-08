// Criando referência para a resposta

const frm = document.querySelector("form")
const resp1= document.querySelector("h2")


//Criando um evento para o botão 

frm.addEventListener("submit", e => {

    function soma (){
        const valor1 = Number(frm.inum1.value)
        const valor2 = Number(frm.inum2.value)

        const soma = valor1 + valor2

        resp1.innerText = ` ${valor1} + ${valor2} =  ${soma}`
        e.preventDefault()

    function sub(){
    
    const valor1 = Number(frm.inum1. value)
    const valor2 = Number(frm.inum2.value)

    const total = valor1 - valor2

    resp1.innerText=` ${valor1} - ${valor2} = ${total}`

    e.preventDefault()
    }
    }
});