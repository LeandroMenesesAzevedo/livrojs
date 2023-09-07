const frm = document.querySelector("form")
const resp = document.querySelector("h4")

frm.addEventListener("submit", (e)=>{

    const nome = frm.inNome.value
    const peso = Number(frm.inPeso.value)
    const altura = Number(frm.inAltura.value)

    const imc = peso/(altura * altura)
    
    resp.innerText = ` Bem vindo ${nome} a Calculadora de IMC \n
                        Seu Peso é: ${peso}\n
                        Sua Altura é: ${altura}\n 
                        Seu IMC é: ${imc.toFixed(1)}`
    
    e.preventDefault()
});