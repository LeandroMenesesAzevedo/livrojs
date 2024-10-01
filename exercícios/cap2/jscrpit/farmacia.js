
const frm = document.querySelector("form")
const resp1 = document.querySelector("h2")
const resp2 = document.querySelector("h3")

frm.addEventListener("submit", e =>{
    const nome = frm.inome.value
    const valor = Number(frm.ivalor.value)

    const promocao = Math.floor(valor * 2)

    resp1.innerText= ` O nome do medicamento é: ${nome}`
    resp2.innerText= ` O valor do produto é: ${valor.toFixed(2)}
                        Promoção na compra de 2 paga: ${promocao.toFixed(2)}`

    e.preventDefault()
});