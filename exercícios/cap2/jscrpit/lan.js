
const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e)=> {

        const minuto = Number(frm.iminuto.value)
        const tempo = Number(frm.itempo.value)

        const periodo =  Math.ceil(tempo/15)
        const pagar =  periodo * minuto


        resp.innerText = ` O valor por 15min é:  ${minuto.toFixed(2)}
                           O tempo ultilizado foi: ${tempo} 
                           O total a pagar: ${pagar.toFixed(2)}`

        e.preventDefault()
});