// script.js
const startRainButton = document.getElementById('startRain');
const heartContainer = document.getElementById('heartContainer');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Posição inicial aleatória
  heart.style.left = `${Math.random() * 100}vw`;

  // Tamanho aleatório
  const size = Math.random() * 10 + 10; // entre 10px e 20px
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;

  // Duração de queda aleatória
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // entre 2s e 5s

  // Cor aleatória
  heart.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 75%)`;

  heartContainer.appendChild(heart);

  // Remover coração após animação
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Inicia a chuva ao clicar no botão
startRainButton.addEventListener('click', () => {
  const interval = setInterval(createHeart, 150); // Cria um coração a cada 150ms

  // Para a chuva após 10 segundos (opcional)
  setTimeout(() => clearInterval(interval), 10000);
});
