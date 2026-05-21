const GameManager = {
  currentCategory: null,
  selectedTypes: [], // ['soft', 'empathy', 'deep']
  deck: [],
  discardPile: [],
  activePlayerIndex: 0,
  currentCard: null,
  resolvedText: "",
  currentGameActive: false,

  startNewGame(category, selectedTypes) {
    this.currentCategory = category;
    this.selectedTypes = selectedTypes;
    this.activePlayerIndex = 0;
    this.discardPile = [];
    this.currentGameActive = true;

    // Reset scores when a new game starts
    PlayersManager.resetScores();

    this.buildDeck();
    this.drawNextCard();
  },

  buildDeck() {
    const playerCount = PlayersManager.getPlayerCount();
    
    // Filter questions based on category, selected card types, and player count
    let filtered = questions.filter(q => {
      // Check category
      if (q.category !== this.currentCategory) return false;
      
      // Check type (soft, empathy, deep)
      if (!this.selectedTypes.includes(q.type)) return false;
      
      // Check min players
      if (q.minPlayers && playerCount < q.minPlayers) return false;

      return true;
    });

    // Shuffle the filtered deck
    this.deck = this.shuffle([...filtered]);
  },

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },

  drawNextCard() {
    if (this.deck.length === 0) {
      if (this.discardPile.length > 0) {
        // Reshuffle discard pile
        this.deck = this.shuffle([...this.discardPile]);
        this.discardPile = [];
      } else {
        // No cards left at all
        this.currentCard = null;
        this.resolvedText = "";
        return false;
      }
    }

    this.currentCard = this.deck.pop();
    this.discardPile.push(this.currentCard);

    // Get current player
    const players = PlayersManager.getPlayers();
    const activePlayer = players[this.activePlayerIndex];

    // Resolve text
    this.resolvedText = this.resolveCardText(this.currentCard, window.currentLanguage || 'fr', activePlayer, players);

    return true;
  },

  resolveCardText(card, lang, activePlayer, allPlayers) {
    if (!card) return "";
    let template = card.text[lang] || card.text['en'] || "";

    // Find other players excluding activePlayer
    const others = allPlayers.filter(p => p.id !== activePlayer.id);
    
    // Shuffle others to pick random ones for placeholders
    const shuffledOthers = [...others].sort(() => Math.random() - 0.5);

    // Replace placeholders
    // Using regex or simple replace for global occurrences
    template = template.replace(/{active}/g, `<span class="player-highlight active-p" style="color: ${activePlayer.color}">${activePlayer.name}</span>`);
    
    if (shuffledOthers[0]) {
      template = template.replace(/{p1}/g, `<span class="player-highlight" style="color: ${shuffledOthers[0].color}">${shuffledOthers[0].name}</span>`);
    }
    if (shuffledOthers[1]) {
      template = template.replace(/{p2}/g, `<span class="player-highlight" style="color: ${shuffledOthers[1].color}">${shuffledOthers[1].name}</span>`);
    }

    return template;
  },

  swipe(direction) {
    // direction: 'left' or 'right'
    const players = PlayersManager.getPlayers();
    const activePlayer = players[this.activePlayerIndex];

    if (!activePlayer) return;

    if (this.currentCategory === 'funny') {
      // Funny mode (Drinking Game score metrics)
      if (direction === 'right') {
        // Answered -> give +1 sip
        PlayersManager.addSipToGive(activePlayer.id, 1);
        PlayersManager.updateScore(activePlayer.id, 1); // Also increment points
      } else {
        // Skipped/Refused -> take +1 sip
        PlayersManager.addSipToTake(activePlayer.id, 1);
        // Does not increment points
      }
    } else {
      // Normal mode (Points scoreboard)
      if (direction === 'right') {
        PlayersManager.updateScore(activePlayer.id, 1);
      }
    }

    // Move to next player's turn
    const totalPlayers = PlayersManager.getPlayerCount();
    if (totalPlayers > 0) {
      this.activePlayerIndex = (this.activePlayerIndex + 1) % totalPlayers;
    }

    // Draw next card
    return this.drawNextCard();
  },

  endGame() {
    this.currentGameActive = false;
    // Return final scores sorted by points descending
    const players = [...PlayersManager.getPlayers()];
    return players.sort((a, b) => b.score - a.score);
  }
};

// Export to window if in browser, or module.exports if in node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameManager;
} else {
  window.GameManager = GameManager;
}
