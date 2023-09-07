const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e)=>{

    const nome = frm.inNome.value
    const valor = Number(frm.inPreco.value)
    const promocao = valor + valor + (valor *0.50)
    const desconto = valor *0.50

    resp.innerText =(`O nome do produto ${nome} \n 
                    O preço do produto ${valor} \n
                    Na compra de 3 ${nome} o valor sai a R$ ${promocao} \n
                    O terceiro produto sai com 50% de desconto R$ ${desconto}`)

    e.preventDefault()
});