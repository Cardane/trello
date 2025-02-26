// Arquivo: countdown-powerup.js

// Inicializa o Power-Up
window.TrelloPowerUp.initialize({
  // Definindo recursos do Power-Up
  'card-badges': function(t) {
    return getBadges(t);
  },
  'card-detail-badges': function(t) {
    return getBadges(t, true);
  }
});

// Função para obter os badges com contagem regressiva
function getBadges(t, isDetailed) {
  return t.card('due')
    .then(function(card) {
      // Se não houver data de vencimento, não mostra nada
      if (!card.due) {
        return [];
      }
      
      // Calcula dias restantes
      const dueDate = new Date(card.due);
      const currentDate = new Date();
      
      // Definindo horas para meia-noite para comparar apenas datas
      currentDate.setHours(0, 0, 0, 0);
      
      // Calcula a diferença em milissegundos
      const timeDiff = dueDate.getTime() - currentDate.getTime();
      
      // Converte para dias (arredondando para baixo)
      const daysRemaining = Math.floor(timeDiff / (1000 * 3600 * 24));
      
      // Define cores baseadas nos dias restantes
      let color = 'green';
      if (daysRemaining <= 3 && daysRemaining >= 0) {
        color = 'yellow';
      } else if (daysRemaining < 0) {
        color = 'red';
      }
      
      // Texto para o badge
      const badgeText = daysRemaining >= 0 ? 
        `${daysRemaining} dias restantes` : 
        `${Math.abs(daysRemaining)} dias atrasado`;
      
      // Retorna o badge
      if (isDetailed) {
        return [{
          title: 'Prazo',
          text: badgeText,
          color: color,
          refresh: 60*60*24 // Atualiza a cada 24 horas
        }];
      } else {
        // Texto para o badge normal com a palavra "dias"
        const cardBadgeText = daysRemaining >= 0 ? 
          `${daysRemaining} dias` : 
          `${Math.abs(daysRemaining)} dias`;
          
        // Usando a propriedade formatter para formatar o texto corretamente
        return [{
          text: cardBadgeText,
          color: color,
          refresh: 60*60*24, // Atualiza a cada 24 horas
          icon: 'https://img.icons8.com/ios-filled/50/000000/timer.png' // Adiciona ícone para destacar
        }];
      }
    });
}
