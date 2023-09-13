//cria referência ao form e aos elementos h3 e h4
const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2= document.querySelector("h4")

//criar um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener(
    "submit", (e) => {
        //obtém conteúdos dos campos 
        const titulo = frm.inTitulo.value 
        const duracao = Number(frm.inDuracao.value)

        const horas =  Math.floor(duracao/60) // arrendonda para baixo resultado obtém o resto da divisão
        const minutos = duracao % 60 //obtém o resto da divisão
        
        resp1.innerText = titulo // exibe as respostas 
        resp2.innerText = `Esse filme possui ${horas} horas e ${minutos} minutos`

        e.preventDefault()
    }
)