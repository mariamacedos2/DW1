// Códigos da lista de tarefas continuam aqui...
// Adicionar abaixo o código para criar corações flutuantes

const heartsContainer = document.getElementById('hearts-container');

// Função para criar um coração decorativo
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = '❤️';

  // Posição inicial e estilo aleatório
  const startX = Math.random() * window.innerWidth; // Largura aleatória
  const startSize = Math.random() * 20 + 10; // Tamanho aleatório (10px a 30px)
  const duration = Math.random() * 2 + 3; // Duração de 3 a 5 segundos

  heart.style.left = `${startX}px`;
  heart.style.fontSize = `${startSize}px`;
  heart.style.animationDuration = `${duration}s`;

  heartsContainer.appendChild(heart);

  // Remover coração após a animação
  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// Gerar corações periodicamente
setInterval(createHeart, 500); // Um coração a cada 500ms
