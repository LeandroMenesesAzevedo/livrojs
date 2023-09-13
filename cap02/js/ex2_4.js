const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
            const kg = Number(frm.inKilos.value)
            const consumo = Number(frm.inConsumo.value)

            const valor = (kg/1000)*consumo

            resp1.innerText = `O Valor a pagar é: ${valor.toFixed(2)}`

            e.preventDefault()
    }
)