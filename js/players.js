const PlayersManager = {
  players: [],
  colors: [
    "#E07A5F", // Terracotta
    "#3D5A80", // Slate Blue
    "#81B29A", // Sage Green
    "#F2CC8F", // Muted Sand
    "#98C1D9", // Sky Blue
    "#EE6C4D", // Coral
    "#5F0F40", // Deep Plum
    "#9A031E"  // Crimson
  ],

  init() {
    this.loadFromStorage();
  },

  loadFromStorage() {
    try {
      const stored = localStorage.getItem("therapy_game_players");
      if (stored) {
        this.players = JSON.parse(stored);
      } else {
        this.players = [];
      }
    } catch (e) {
      console.error("Error loading players", e);
      this.players = [];
    }
  },

  saveToStorage() {
    try {
      localStorage.setItem("therapy_game_players", JSON.stringify(this.players));
    } catch (e) {
      console.error("Error saving players", e);
    }
  },

  addPlayer(name) {
    name = name.trim();
    if (!name) return false;
    // Check if player name already exists
    if (this.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
      return false;
    }

    const colorIndex = this.players.length % this.colors.length;
    const player = {
      id: "player_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
      name: name,
      color: this.colors[colorIndex],
      score: 0,
      sipsToTake: 0,
      sipsToGive: 0
    };

    this.players.push(player);
    this.saveToStorage();
    return player;
  },

  removePlayer(id) {
    this.players = this.players.filter(p => p.id !== id);
    this.saveToStorage();
  },

  resetScores() {
    this.players.forEach(p => {
      p.score = 0;
      p.sipsToTake = 0;
      p.sipsToGive = 0;
    });
    this.saveToStorage();
  },

  updateScore(id, delta) {
    const player = this.players.find(p => p.id === id);
    if (player) {
      player.score = Math.max(0, player.score + delta);
      this.saveToStorage();
    }
  },

  addSipToTake(id, amount = 1) {
    const player = this.players.find(p => p.id === id);
    if (player) {
      player.sipsToTake += amount;
      this.saveToStorage();
    }
  },

  addSipToGive(id, amount = 1) {
    const player = this.players.find(p => p.id === id);
    if (player) {
      player.sipsToGive += amount;
      this.saveToStorage();
    }
  },

  getPlayers() {
    return this.players;
  },

  getPlayerCount() {
    return this.players.length;
  },

  isValid() {
    return this.players.length >= 2;
  }
};

// Export to window if in browser, or module.exports if in node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PlayersManager;
} else {
  window.PlayersManager = PlayersManager;
}
