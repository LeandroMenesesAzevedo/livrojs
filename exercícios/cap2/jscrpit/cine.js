const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener( "submit", (e) => {
    const nome = frm.inome.value
    const minuto = Number(frm.imin.value)

    const hora = Math.floor(minuto / 60) // arrendonda para baixo o resultado
    const min = minuto % 60

    resp.innerText = ` O nome  do filme é: ${nome}\n
    A duração é ${hora} horas e  ${min} minutos.`

    e.preventDefault()

})