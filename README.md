# Contagem Regressiva para Trello

Este Power-Up para o Trello exibe uma contagem regressiva visual dos dias restantes até o prazo de vencimento dos cartões.

## Funcionalidades

- **Contagem regressiva de dias:** Mostra quantos dias faltam para o vencimento de cada cartão
- **Indicadores visuais por cores:** Verde, amarelo e vermelho indicam a proximidade do prazo
- **Badges detalhados:** Informações mais completas ao abrir o cartão

## Configuração

### Hospedagem

O Power-Up está hospedado no Netlify, com os arquivos armazenados no GitHub.

1. **Repositório GitHub:**
   - URL: `https://github.com/Cardane/trello`
   - Arquivos principais:
     - `index.html`: Página HTML do Power-Up
     - `countdown-powerup.js`: Código JavaScript com a lógica do Power-Up
     - `trello-manifest.json`: Configuração do Power-Up

2. **Netlify:**
   - URL: `https://neon-sprinkles-028b83.netlify.app`
   - Configuração: Deploy automático a partir do repositório GitHub

### Configuração no Trello

1. **Acesse o Trello Developer Portal:**
   - URL: [https://trello.com/power-ups/admin](https://trello.com/power-ups/admin)

2. **Configure o Power-Up:**
   - Nome: "Contagem Regressiva"
   - URL do iframe: `https://neon-sprinkles-028b83.netlify.app/index.html`
   - Ícone: URL de um ícone de timer (atualmente usando icons8)

3. **Adicione o Power-Up ao quadro:**
   - Acesse o quadro do Trello
   - Clique em "Power-Ups" no menu do quadro
   - Procure por "Contagem Regressiva" e clique em "Adicionar"

## Funcionamento

### Lógica de cores

O Power-Up usa cores diferentes para indicar a proximidade do prazo:

- **Verde:** Mais de 3 dias para o prazo
- **Amarelo:** 3 dias ou menos para o prazo
- **Vermelho:** Prazo expirado (mostra dias de atraso)

### Atualização

Os badges são atualizados a cada 24 horas para minimizar o consumo de recursos.

## Estrutura do Código

### index.html

Arquivo HTML principal que carrega o SDK do Trello e o código JavaScript do Power-Up.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Contagem Regressiva Trello</title>
    <script src="https://p.trellocdn.com/power-up.min.js"></script>
    <!-- Outros elementos do cabeçalho -->
  </head>
  <body>
    <!-- Conteúdo da página -->
    <script src="./countdown-powerup.js"></script>
  </body>
</html>
```

### countdown-powerup.js

Contém a lógica para calcular os dias restantes e exibir os badges.

```javascript
// Inicializa o Power-Up
window.TrelloPowerUp.initialize({
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
      // Lógica para calcular dias restantes e definir cores
      // ...
    });
}
```

### trello-manifest.json

Define as capacidades e configurações do Power-Up.

```json
{
  "name": "Contagem Regressiva",
  "details": "Mostra uma contagem regressiva dos dias restantes até o prazo de vencimento dos cartões.",
  "icon": {
    "url": "https://img.icons8.com/ios-filled/50/000000/timer.png"
  },
  "author": "Alan Cardane",
  "capabilities": [
    "card-badges", 
    "card-detail-badges"
  ],
  "connectors": {
    "iframe": {
      "url": "https://neon-sprinkles-028b83.netlify.app/index.html"
    }
  }
}
```

## Solução de Problemas

### O Power-Up não aparece no quadro

1. Verifique se o Power-Up está instalado no quadro
2. Confirme que a URL no Trello Developer Portal está correta
3. Verifique se os arquivos estão acessíveis no Netlify

### Os badges não aparecem nos cartões

1. Verifique se os cartões têm datas de vencimento definidas
2. Abra o console do navegador (F12) para verificar se há erros
3. Confirme que o arquivo countdown-powerup.js está sendo carregado corretamente

## Manutenção

### Atualização do código

1. Clone o repositório GitHub
2. Faça as alterações necessárias
3. Faça commit e push para o GitHub
4. O Netlify atualizará automaticamente o site

### Alteração da URL de hospedagem

Se for necessário alterar a URL de hospedagem:

1. Configure o novo serviço de hospedagem
2. Atualize a URL no Trello Developer Portal
3. Atualize a URL no arquivo trello-manifest.json

## Notas Importantes

- **Abordagem direta:** A configuração atual usa a abordagem direta, onde a URL no Trello Developer Portal aponta diretamente para o arquivo HTML, não para o manifesto.
- **Simplicidade:** Mantenha o código simples e focado apenas nas funcionalidades essenciais para evitar problemas de compatibilidade.
- **Testes:** Sempre teste as alterações em um quadro de teste antes de aplicá-las em quadros de produção.

## Recursos Adicionais

- [Documentação do Trello Power-Ups](https://developer.atlassian.com/cloud/trello/power-ups/)
- [SDK do Trello Power-Up](https://github.com/trello/power-up-client-library)
- [Exemplos de Power-Ups](https://github.com/trello/power-up-template)
