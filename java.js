// Primeiro, obtenha a imagem
var porta = document.getElementById('porta');

// Em seguida, adicione um ouvinte de eventos de clique à imagem
porta.addEventListener('click', function(e) {
    // Se o clique foi na casa, redirecione para outra página
    window.location.href = 'pagina.html';
});
document.getElementById("drawer1").addEventListener("click", function(){
    window.location.href = "https://www.suaurl1.com";
});

document.getElementById("drawer2").addEventListener("click", function(){
    window.location.href = "https://www.suaurl2.com";
});