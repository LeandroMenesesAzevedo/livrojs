// criando as referências da resposta 
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// criando  um evento do botão submit
frm.addEventListener( "submit", e =>{

    const quilo = Number(frm.iquilo.value)
    const prato = Number(frm.igramas.value)

    const valor = (quilo/1000) * prato // pegando o valor  em quilos, transformando para grama e multiplicando pelo valo consumido. 

    resp.innerText = ` O Valor do Prato é: ${valor.toFixed(2)}`

    e.preventDefault()
});