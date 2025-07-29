 // codigo index
  
  // codigo para o botão de rolagem suave
  document.querySelector('.scroll-button').addEventListener('click', function() {
  const targetId = this.getAttribute('data-target');
  const targetElement = document.getElementById(targetId);
  
  targetElement.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
    });
  });

  // codigo para o sumário com rolagem suave
  document.querySelectorAll('.sumario a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);            
        if (targetElement) {
            window.scrollTo({
                block: 'center',
                top: targetElement.offsetTop - 100, // Ajuste para centralizar o elemento
                behavior: 'smooth'
            });            
            // Atualiza a URL sem recarregar a página 
            history.pushState(null, null, targetId);
        }
    });
  });
 

    // codigo para o mapa interativo
    // Coordenadas do IFPB Campus João Pessoa
    var latitude = -7.13513;
    var longitude = -34.87236;
    
    // Criar o mapa centralizado nas coordenadas com zoom 17x
    var map = L.map('map').setView([latitude, longitude], 17);
    
    // Adicionar camada do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);
    
    // Adicionar marcador com popup
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup(`
        <b>IFPB Campus João Pessoa</b><br>
        Rua: Primeiro de Maio, 720 - Jaguaribe<br>
        João Pessoa - PB, 58015-435
      `)
      .openPopup();
    
    // Opcional: Adicionar círculo para destacar a área
    L.circle([latitude, longitude], {
      color: '#ff0000',
      fillColor: '##ff0000',
      fillOpacity: 0.2,
      radius: 10
    }).addTo(map);

    document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o botão existe
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) {
        console.error('Erro: Elemento com classe "back-to-top" não encontrado!');
        return;
    }

    // Mostra/oculta o botão ao rolar
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Rolagem suave ao clicar
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    console.log('Script carregado com sucesso!'); // Mensagem de confirmação
});