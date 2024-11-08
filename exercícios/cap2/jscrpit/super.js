const frm = document.querySelector("form")
const resp = document.querySelector("h2")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", e =>{
    const nome = frm.inome.value
    const valor = Number(frm.ivalor.value)

    const desconto = valor * 0.50
    const total = valor * 2 + desconto

    resp.innerText= `O nome do produto foi -> ${nome}`
    resp1.innerText = `O valor do produto foi -> ${valor.toFixed(2)}
                        Levando 3 produtos sai no valor de -> ${total.toFixed(2)}
                        O terceiro produto sai no valor de -> ${desconto.toFixed(2)}`
    e.preventDefault()

});