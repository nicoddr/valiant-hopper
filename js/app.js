// ==========================================================================
// THERAPY GAME - Core Application Coordinator (Vanilla Javascript)
// ==========================================================================

// Global state
window.currentLanguage = "fr";
let activeCategory = null;
let activeCardTypes = ["soft", "empathy", "deep"];

// DOM elements mapping
const DOM = {
  appWrapper: document.getElementById("app-wrapper"),
  btnLangTrigger: document.getElementById("btn-lang-trigger"),
  btnLangFlag: document.getElementById("btn-lang-flag"),
  btnLangCode: document.getElementById("btn-lang-code"),
  langModal: document.getElementById("lang-modal"),
  btnLangClose: document.getElementById("btn-lang-close"),
  uiLangTitle: document.getElementById("ui-lang-title"),
  
  // Lobby Elements
  lobbyScreen: document.getElementById("lobby-screen"),
  playerNameInput: document.getElementById("player-name-input"),
  btnAddPlayer: document.getElementById("btn-add-player"),
  playersListContainer: document.getElementById("players-list-container"),
  categoryCards: document.querySelectorAll(".category-card"),
  typePills: document.querySelectorAll(".type-pill"),
  btnStartGame: document.getElementById("btn-start-game"),
  
  // Game Screen Elements
  gameScreen: document.getElementById("game-screen"),
  activePlayerColor: document.getElementById("active-player-color"),
  activePlayerName: document.getElementById("active-player-name"),
  gameCategoryBadge: document.getElementById("game-category-badge"),
  gameCard: document.getElementById("game-card"),
  cardTypeLabel: document.getElementById("card-type-label"),
  cardDeckCount: document.getElementById("card-deck-count"),
  cardQuestionText: document.getElementById("card-question-text"),
  cardSwipePrompt: document.getElementById("card-swipe-prompt"),
  btnTapSkip: document.getElementById("btn-tap-skip"),
  btnTapAnswer: document.getElementById("btn-tap-answer"),
  btnEndGame: document.getElementById("btn-end-game"),
  
  // Results Screen Elements
  resultsScreen: document.getElementById("results-screen"),
  resultsListContainer: document.getElementById("results-list-container"),
  btnPlayAgain: document.getElementById("btn-play-again"),
  
  // Modal Elements
  exitModal: document.getElementById("exit-modal"),
  btnModalCancel: document.getElementById("btn-modal-cancel"),
  btnModalConfirm: document.getElementById("btn-modal-confirm"),
  
  // Localized Titles & Labels
  uiAppTitle: document.getElementById("ui-app-title"),
  uiSetupTitle: document.getElementById("ui-setup-title"),
  uiSetupSubtitle: document.getElementById("ui-setup-subtitle"),
  uiPlayersListTitle: document.getElementById("ui-players-list-title"),
  uiSelectCategoryTitle: document.getElementById("ui-select-category-title"),
  uiSelectTypesTitle: document.getElementById("ui-select-types-title"),
  uiResultsTitle: document.getElementById("ui-results-title"),
  uiResultsSubtitle: document.getElementById("ui-results-subtitle"),
  uiConfirmEndTitle: document.getElementById("ui-confirm-end-title"),
  uiConfirmEndText: document.getElementById("ui-confirm-end-text")
};

// ==========================================================================
// 1. Initialisation
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Load initial managers
  PlayersManager.init();
  
  // Setup language from browser preference if supported, otherwise default to FR
  const browserLang = navigator.language.split("-")[0];
  if (["en", "fr", "es", "lt", "lv", "jp"].includes(browserLang)) {
    window.currentLanguage = browserLang;
  }
  
  // Set up event listeners
  setupEventListeners();
  
  // Initial renders
  renderPlayersList();
  updateUILanguage();
  updateStartButtonState();
  
  // Set default category Selection
  selectCategory("friends");
});

// ==========================================================================
// 2. View Routing
// ==========================================================================
function showScreen(screenId) {
  document.querySelectorAll(".view-screen").forEach(screen => {
    screen.classList.remove("active");
  });
  
  if (screenId === "lobby") {
    DOM.lobbyScreen.classList.add("active");
  } else if (screenId === "game") {
    DOM.gameScreen.classList.add("active");
  } else if (screenId === "results") {
    DOM.resultsScreen.classList.add("active");
  }
}

// ==========================================================================
// 3. Multilingual System
// ==========================================================================
function updateUILanguage() {
  const lang = window.currentLanguage;
  const t = translations[lang] || translations["en"];
  
  // UI texts replacement
  DOM.uiAppTitle.textContent = t.title;
  if (DOM.uiSetupTitle) DOM.uiSetupTitle.textContent = t.setupTitle;
  DOM.uiSetupSubtitle.textContent = t.subtitle;
  DOM.uiPlayersListTitle.textContent = t.playersListTitle;
  DOM.uiSelectCategoryTitle.textContent = t.selectCategoryTitle;
  DOM.uiSelectTypesTitle.textContent = t.selectTypesTitle;
  DOM.btnStartGame.textContent = t.start;
  DOM.btnEndGame.textContent = t.endGame;
  DOM.btnPlayAgain.textContent = t.playAgain;
  
  // Update header language button trigger flag and code
  const flags = { fr: "🇫🇷", en: "🇬🇧", es: "🇪🇸", lt: "🇱🇹", lv: "🇱🇻", jp: "🇯🇵" };
  DOM.btnLangFlag.textContent = flags[lang] || "🌐";
  DOM.btnLangCode.textContent = lang.toUpperCase();

  // Localize custom language modal
  DOM.uiLangTitle.textContent = t.selectLangTitle || "Choisir la langue";
  DOM.btnLangClose.textContent = t.close || "Fermer";

  // Modal localization
  DOM.uiConfirmEndTitle.textContent = t.endGame;
  DOM.uiConfirmEndText.textContent = t.confirmEndGame;
  
  const modalCancelText = { en: "Cancel", fr: "Annuler", es: "Cancelar", lt: "Atšaukti", lv: "Atcelt", jp: "キャンセル" };
  const modalConfirmText = { en: "End", fr: "Terminer", es: "Terminar", lt: "Baigti", lv: "Pabeigt", jp: "終了" };
  DOM.btnModalCancel.textContent = modalCancelText[lang] || modalCancelText["en"];
  DOM.btnModalConfirm.textContent = modalConfirmText[lang] || modalConfirmText["en"];
  
  // Categories names
  document.getElementById("ui-cat-friends").textContent = t.friends;
  document.getElementById("ui-cat-couples").textContent = t.couples;
  document.getElementById("ui-cat-buddies").textContent = t.buddies;
  document.getElementById("ui-cat-funny").textContent = t.funny;
  
  // Card Types
  document.getElementById("ui-type-soft").textContent = t.soft;
  document.getElementById("ui-type-empathy").textContent = t.empathy;
  document.getElementById("ui-type-deep").textContent = t.deep;
  
  // Player input placeholder
  DOM.playerNameInput.placeholder = t.playerNamePlaceholder;
  

  DOM.uiResultsTitle.textContent = t.gameEnded;
  DOM.uiResultsSubtitle.textContent = t.gameEndedSubtitle;
  
  // Refresh card text if currently in game
  if (GameManager.currentGameActive && GameManager.currentCard) {
    const players = PlayersManager.getPlayers();
    const activePlayer = players[GameManager.activePlayerIndex];
    GameManager.resolvedText = GameManager.resolveCardText(GameManager.currentCard, lang, activePlayer, players);
    renderCurrentCard();
  }
}

// ==========================================================================
// 4. Lobby Setup Mechanics
// ==========================================================================
function setupEventListeners() {
  // Language button opens modal
  DOM.btnLangTrigger.addEventListener("click", () => {
    // Highlight the active option in the modal
    document.querySelectorAll(".lang-opt-btn").forEach(btn => {
      if (btn.getAttribute("data-lang") === window.currentLanguage) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    DOM.langModal.classList.add("active");
  });

  // Close modal
  DOM.btnLangClose.addEventListener("click", () => {
    DOM.langModal.classList.remove("active");
  });

  // Modal option selection
  document.querySelectorAll(".lang-opt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      window.currentLanguage = selectedLang;
      updateUILanguage();
      DOM.langModal.classList.remove("active");
    });
  });
  
  // Add player
  DOM.btnAddPlayer.addEventListener("click", handleAddPlayer);
  DOM.playerNameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleAddPlayer();
  });
  
  // Category Selection
  DOM.categoryCards.forEach(card => {
    card.addEventListener("click", () => {
      selectCategory(card.getAttribute("data-cat"));
    });
  });
  
  // Type Selection
  DOM.typePills.forEach(pill => {
    pill.addEventListener("click", () => {
      const type = pill.getAttribute("data-type");
      toggleCardType(type, pill);
    });
  });
  
  // Start Game
  DOM.btnStartGame.addEventListener("click", () => {
    if (DOM.btnStartGame.classList.contains("disabled")) return;
    
    // Build deck and transition
    GameManager.startNewGame(activeCategory, activeCardTypes);
    showScreen("game");
    renderCurrentCard();
  });
  
  // Fallback tap buttons on Game Screen
  DOM.btnTapSkip.addEventListener("click", () => {
    animateCardSwipe("left");
  });
  
  DOM.btnTapAnswer.addEventListener("click", () => {
    animateCardSwipe("right");
  });
  
  // End Game Modals
  DOM.btnEndGame.addEventListener("click", () => {
    DOM.exitModal.classList.add("active");
  });
  
  DOM.btnModalCancel.addEventListener("click", () => {
    DOM.exitModal.classList.remove("active");
  });
  
  DOM.btnModalConfirm.addEventListener("click", () => {
    DOM.exitModal.classList.remove("active");
    triggerGameEnd();
  });
  
  // Play Again
  DOM.btnPlayAgain.addEventListener("click", () => {
    showScreen("lobby");
  });
  
  // Setup Touch / Swipe gestures on game card
  setupCardSwiping();
}

function handleAddPlayer() {
  const name = DOM.playerNameInput.value.trim();
  if (name) {
    const success = PlayersManager.addPlayer(name);
    if (success) {
      DOM.playerNameInput.value = "";
      renderPlayersList();
      updateStartButtonState();
    } else {
      // Small shake on input if duplicate
      DOM.playerNameInput.style.border = "1px solid var(--color-couple)";
      setTimeout(() => {
        DOM.playerNameInput.style.border = "1px solid var(--border-medium)";
      }, 1000);
    }
  }
}

function renderPlayersList() {
  DOM.playersListContainer.innerHTML = "";
  const players = PlayersManager.getPlayers();
  
  players.forEach(p => {
    const item = document.createElement("div");
    item.className = "player-item";
    
    item.innerHTML = `
      <div class="player-badge">
        <div class="player-color-dot" style="background: ${p.color}"></div>
        <span class="player-name">${p.name}</span>
      </div>
      <button class="btn-remove-player" data-id="${p.id}">×</button>
    `;
    
    // Delete event listener
    item.querySelector(".btn-remove-player").addEventListener("click", () => {
      PlayersManager.removePlayer(p.id);
      renderPlayersList();
      updateStartButtonState();
    });
    
    DOM.playersListContainer.appendChild(item);
  });
}

function selectCategory(cat) {
  activeCategory = cat;
  
  DOM.categoryCards.forEach(c => {
    if (c.getAttribute("data-cat") === cat) {
      c.classList.add("selected");
    } else {
      c.classList.remove("selected");
    }
  });
  
  // Set theme data attribute on container and body
  DOM.appWrapper.setAttribute("data-active-theme", cat);
  document.body.setAttribute("data-theme", cat);
  updateStartButtonState();
}

function toggleCardType(type, element) {
  if (activeCardTypes.includes(type)) {
    // Make sure we have at least 1 type left selected
    if (activeCardTypes.length > 1) {
      activeCardTypes = activeCardTypes.filter(t => t !== type);
      element.classList.remove("selected");
    }
  } else {
    activeCardTypes.push(type);
    element.classList.add("selected");
  }
  updateStartButtonState();
}

function updateStartButtonState() {
  const isPlayersValid = PlayersManager.isValid();
  const isCategorySelected = !!activeCategory;
  const isTypesSelected = activeCardTypes.length > 0;
  
  if (isPlayersValid && isCategorySelected && isTypesSelected) {
    DOM.btnStartGame.classList.remove("disabled");
  } else {
    DOM.btnStartGame.classList.add("disabled");
  }
}

// ==========================================================================
// 5. Game Screen Rendering & Card Swipe Logic
// ==========================================================================
function renderCurrentCard() {
  if (!GameManager.currentCard) {
    // If no card left, trigger game over
    triggerGameEnd();
    return;
  }

  const lang = window.currentLanguage;
  const t = translations[lang] || translations["en"];
  const players = PlayersManager.getPlayers();
  const activePlayer = players[GameManager.activePlayerIndex];
  
  // Active player turn info
  DOM.activePlayerName.textContent = activePlayer.name;
  DOM.activePlayerColor.style.background = activePlayer.color;
  DOM.activePlayerColor.textContent = activePlayer.name.charAt(0).toUpperCase();

  // Category badge & theme color
  const catNames = {
    friends: t.friends,
    couples: t.couples,
    buddies: t.buddies,
    funny: t.funny
  };
  DOM.gameCategoryBadge.textContent = catNames[GameManager.currentCategory];
  DOM.gameCategoryBadge.className = `card-category-badge category-${GameManager.currentCategory}-badge`;

  // Front card type variables
  const card = GameManager.currentCard;
  DOM.gameCard.setAttribute("data-card-type", card.type);
  
  // Translate Card Type Label
  const cardTypeLabels = {
    soft: t.soft,
    empathy: t.empathy,
    deep: t.deep
  };
  DOM.cardTypeLabel.textContent = cardTypeLabels[card.type];
  
  // Set question card content
  DOM.cardQuestionText.innerHTML = GameManager.resolvedText;

  // Deck status (approximate remaining)
  const remainingCount = GameManager.deck.length + 1; // including current one
  DOM.cardDeckCount.textContent = t.cardCount.replace("{count}", remainingCount);

  // Ensure the swipe prompt is visible
  DOM.cardSwipePrompt.classList.remove("hidden");

  // Set card visual state
  DOM.gameCard.style.transform = "translate(0) rotate(0)";
  DOM.gameCard.style.opacity = "1";
}

// Visual swiping animations triggers (triggered by manual clicks or swipe completions)
function animateCardSwipe(direction) {
  const flyX = direction === "right" ? window.innerWidth : -window.innerWidth;
  
  // Apply visual transition
  DOM.gameCard.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease";
  DOM.gameCard.style.transform = `translate(${flyX}px, 50px) rotate(${direction === "right" ? 25 : -25}deg)`;
  DOM.gameCard.style.opacity = "0";

  setTimeout(() => {
    // Process game math update
    GameManager.swipe(direction);
    
    // Restore styling properties and load next card
    DOM.gameCard.style.transition = "none";
    DOM.gameCard.className = "card";
    renderCurrentCard();
  }, 400);
}

// ==========================================================================
// 6. Interactive Touch & Mouse Swipe Engine (Pointer Events)
// ==========================================================================
function setupCardSwiping() {
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  
  const cardElement = DOM.gameCard;

  cardElement.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button") || e.target.closest("select")) return;
    
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    cardElement.style.transition = "none";
    cardElement.setPointerCapture(e.pointerId);
  });

  cardElement.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    
    // Apply rotate and translation
    const rotate = currentX * 0.08;
    cardElement.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotate}deg)`;
    
    // Visual indicators during swipe
    if (currentX > 80) {
      cardElement.classList.add("swipe-right-intent");
      cardElement.classList.remove("swipe-left-intent");
    } else if (currentX < -80) {
      cardElement.classList.add("swipe-left-intent");
      cardElement.classList.remove("swipe-right-intent");
    } else {
      cardElement.classList.remove("swipe-right-intent");
      cardElement.classList.remove("swipe-left-intent");
    }
  });

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    isDragging = false;
    cardElement.releasePointerCapture(e.pointerId);

    const swipeThreshold = 120;
    
    if (currentX > swipeThreshold) {
      // Swipe Right: Answer
      animateCardSwipe("right");
    } else if (currentX < -swipeThreshold) {
      // Swipe Left: Skip
      animateCardSwipe("left");
    } else {
      // Cancelled, spring back to original position
      cardElement.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      cardElement.style.transform = "translate(0) rotate(0)";
      cardElement.className = "card";
    }

    currentX = 0;
    currentY = 0;
  };

  cardElement.addEventListener("pointerup", handlePointerUp);
  cardElement.addEventListener("pointercancel", handlePointerUp);
}

// ==========================================================================
// 7. Scoreboard Screen Implementation
// ==========================================================================
function triggerGameEnd() {
  const scoreboard = GameManager.endGame();
  renderScoreboard(scoreboard);
  showScreen("results");
}

function renderScoreboard(scoreboard) {
  DOM.resultsListContainer.innerHTML = "";
  const lang = window.currentLanguage;
  const t = translations[lang] || translations["en"];

  scoreboard.forEach((p, idx) => {
    const card = document.createElement("div");
    card.className = "result-card";
    
    const rankClass = idx === 0 ? "rank-number-1" : "";
    const rankLabel = idx === 0 ? "👑" : `${idx + 1}`;
    
    // Compile subtext depending on category: normal score vs funny drinking metrics
    let statsHTML = "";
    if (GameManager.currentCategory === "funny") {
      statsHTML = `
        <div class="result-points" style="color: var(--color-drole)">${p.score} Pts</div>
        <div class="result-sub-points">
          +${p.sipsToGive} ${t.sipsToGive} / -${p.sipsToTake} ${t.sipsToTake}
        </div>
      `;
    } else {
      statsHTML = `
        <div class="result-points">${p.score} Pts</div>
        <div class="result-sub-points">${t.points}</div>
      `;
    }

    card.innerHTML = `
      <div class="result-left">
        <div class="rank-number ${rankClass}">${rankLabel}</div>
        <div class="player-badge">
          <div class="player-color-dot" style="background: ${p.color}"></div>
          <span class="result-name">${p.name}</span>
        </div>
      </div>
      <div class="result-right">
        ${statsHTML}
      </div>
    `;
    
    DOM.resultsListContainer.appendChild(card);
  });
}
