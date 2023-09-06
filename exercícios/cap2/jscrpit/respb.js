const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) =>{

        const val = Number(frm.inValor.value)
        const tempo= Number(frm.inTempo.value)
        result =  Math.ceil (tempo/15) * val

        resp1.innerText = `O valor é ${result.toFixed(2)}`

        e.preventDefault()

});

