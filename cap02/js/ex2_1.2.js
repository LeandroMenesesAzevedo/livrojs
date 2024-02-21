// Criando a refeência do form e ao elemento h3(onde será exibida a resposta)

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//Criando um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
    
    const nome = frm.inNome.value // Criando uma variável nome e recebendo o valor do campo nome
    const id = frm.inIdade.value // Criando uma variável idade e recebendo o valor do campo idade

    resp.innerText=`Olá ${nome} sua idade é ${id}` // Exibe o nome e a idade como texto

    e.preventDefault()// Evita que os dados dos campos do form sejam perdidos
}

)