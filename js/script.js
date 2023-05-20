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