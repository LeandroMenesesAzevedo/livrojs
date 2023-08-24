//criando referência no form e no h3

const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

// cria "ouvinte" um evento, acionado pelo botão submit for clicado
frm.addEventListener("submit", (e) => {

           const medicamento = frm.inMedicamento.value
           const valor = Number(frm.inValor.value)

           const promo =Math.floor((valor + valor ) /1.10); 
''
           resp1.innerText = `O  Nome é: ${medicamento}`
           resp2.innerText = `Promoção levando 2 sai o valor: R$ ${promo.toFixed(2)}`
           
           e.preventDefault()
  });
