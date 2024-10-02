
const frm = document.querySelector("form")
const resp = document.querySelector("h2")

frm.addEventListener("submit", (e)=> {

        const minuto = Number(frm.iminuto.value)
        const tempo = Number(frm.itempo.value)

        const pagar = tempo *(minuto * 60)

        resp.innerText = ` ${minuto}\n
                            ${tempo} 
                            ${pagar}`

        e.preventDefault()
});