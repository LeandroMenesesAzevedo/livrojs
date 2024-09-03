//
const frm = document.querySelector("form")
const nome = document.querySelector("nome")
const n1 = document.querySelector("n1")
const n2 = document.querySelector("n2")
const resp= document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    const nome = frm.inome.value
    const n1 = frm.in1.value
    const n2 = frm.in2.value
    const media = (n1+ n2)/2

    resp.innerText = ` O nome do aluno é: ${nome} \n
    A nota 1 foi: ${n1} \n
    A nota 2 foi: ${n2} \n
    A média é : ${media} `

    e.preventDefault()
})