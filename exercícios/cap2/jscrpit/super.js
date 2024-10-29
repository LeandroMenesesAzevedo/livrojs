const frm = document.querySelector("form")
const resp = documenmt. querySelector("h2")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", e =>{
    const nome = frm.inome.value
    const valor = Number(frm.ivalor.value)

    const desconto = valor/0.50

    resp.innerText = `O nome do produto foi ${nome}`
    resp1.innerText = `O valor do produto foi ${valor.toFixed(2)}
                        Na compra de dois você ganhar um desconto de 50%: ${desconto}`

    e.preventDefault()
    
});