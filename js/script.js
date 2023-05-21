// Código referente a página Index(Home), abaixo estão os códigos de validação de formulário (refatorados), e o código para compartilhamento nas redes sociais.


// Validação de formulário (Refatorado)

const email = document.getElementById('email');
const form = document.querySelector('form');
const textEmail = document.getElementById('textEmail');
const telefone = document.getElementById('telefone');
const textFone = document.getElementById('textFone');
const nome = document.getElementById('nome');
const textName = document.getElementById('textName');

// Função que escuta quando o submit acontece, dispara as validações e 
// em caso de validação correta, dispara um alerta de cadastro realizado.
form.addEventListener('submit' , (e) => {
    // Usando preventDefault para tratar recarregamento de página
    e.preventDefault()
    alert('Cadastro realizado!')
})

function validarNome(nome) {
    if (nome.length < 2) {
      return false
    }
    return true
}

// Caso o usuário digite os dados de forma incorreta, 
// aparece uma mensagem com o formato esperado
// mensagem some após ser digitado corretamente

var re = /\S+@\S+\.\S+/;

email.addEventListener("keyup", () => {
    if(re.test(email.value) !== true){
        textEmail.textContent = "Formato: nome@mail.com"
    }
    else{
        textEmail.textContent = ''
    }
})

telefone.addEventListener('keyup', () => {
    if (telefone.value.length < 15) {
    textFone.textContent = 'Formato: (11)11111-1111';
    } else {
    textFone.textContent = '';
    }
});

nome.addEventListener('keyup', () => {
    if (nome.value.length < 2 ) {
    textName.textContent = 'No mínimo 2 caracteres';
    } else {
    textName.textContent = '';
    }
});

// Formata o numero de telefone enquanto
// o usuário digita.

telefone.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)); // Dispara quando digitado no campo
telefone.addEventListener('change', (e) => mascaraTelefone(e.target.value)); // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
  telefone.value = valor; // Insere o(s) valor(es) no campo
};

// Código para compartilhamento nas redes sociais.

const botao = document.querySelector('#btn-compartilhar')

botao.addEventListener("click", ()=> {
    // URL que deseja compartilhar
    var textoCompartilhar = "Asma, infecções das vias aéreas superiores e incidência de câncer de pulmão e doenças cardiovasculares são apenas alguns dos sintomas que respirar poluição causa ao ser humano. Junte-se a iniciativa capaz de acabar com isso! Una-se a SoftForge para uma qualidade de ar melhor!";
  
    // Títulos para cada rede social
    var tituloTwitter = "Compartilhar no Twitter";
    var tituloFacebook = "Compartilhar no Facebook";
    var tituloReddit = "Compartilhar no Reddit";
    var tituloWhatsApp = "Compartilhar no WhatsApp";
  
    // URLs de compartilhamento para cada rede social
    var urlTwitter = "https://twitter.com/share?url=" + encodeURIComponent(textoCompartilhar);
    var urlFacebook = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(textoCompartilhar);
    var urlReddit = "https://www.reddit.com/submit?url=" + encodeURIComponent(textoCompartilhar);
    var urlWhatsApp = "https://api.whatsapp.com/send?text=" + encodeURIComponent(textoCompartilhar);
  
    // Largura e altura da janela pop-up
    var larguraJanela = 500;
    var alturaJanela = 400;
  
    // Calcula a posição central da janela no navegador
    var esquerda = (window.innerWidth - larguraJanela) / 2;
    var topo = (window.innerHeight - alturaJanela) / 2;
  
    // Abre a janela pop-up com os links de compartilhamento
    var janelaCompartilhamento = window.open("", "Compartilhar", "width=" + larguraJanela + ", height=" + alturaJanela + ", top=" + topo + ", left=" + esquerda);
  
    // Conteúdo HTML para a janela pop-up
    var conteudoPopup = `
    <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
    }
    
    h1 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    li {
      margin-bottom: 10px;
    }
    
    a {
      display: block;
      padding: 10px;
      background-color: #f5f5f5;
      color: #333;
      text-decoration: none;
      border-radius: 5px;
    }
    
    a:hover {
      background-color: #ddd;
    }
  </style>
  
  <h1>Compartilhar</h1>
  <ul>
    <li><a href="${urlTwitter}" target="_blank">${tituloTwitter}</a></li>
    <li><a href="${urlFacebook}" target="_blank">${tituloFacebook}</a></li>
    <li><a href="${urlReddit}" target="_blank">${tituloReddit}</a></li>
    <li><a href="${urlWhatsApp}" target="_blank">${tituloWhatsApp}</a></li>
  </ul>
`;
    // Define o conteúdo HTML na janela pop-up
    janelaCompartilhamento.document.body.innerHTML = conteudoPopup;
  });

  // Validações de email, nome e telefone
