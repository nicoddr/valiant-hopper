# Therapy Game 🃏✨

**Therapy Game** is a premium, minimalist card game Progressive Web App (PWA) designed to foster deep connections, empathy, and honest conversations. Inspired by card games like *Therapy by Dan*, it features a sleek modern aesthetic, smooth micro-interactions, responsive touch/mouse gestures, and comprehensive multi-language support.

---

## 🌟 Key Features

*   **Premium & Immersive Design**: An elegant dark theme with subtle ambient glows that dynamically adapt to the selected category:
    *   🔵 **Blue** for **Friends**
    *   🔴 **Red** for **Couples**
    *   🟢 **Green** for **Buddies / Acquaintances**
    *   🟡 **Gold** for **Funny / Drinking**
*   **Dynamic Card Interactions**: Supports touch and mouse card swipes with colored visual feedback based on intent (green to the right to answer/validate, red to the left to skip/pass).
*   **Adaptive Gameplay**:
    *   **Personalized Content**: Questions dynamically inject the active player's name (`{active}`) or randomly assigned participants (`{p1}`, `{p2}`).
    *   **Group Size Filtering**: Cards requiring more players than currently enrolled are automatically excluded from the deck.
*   **4 Conversation Categories**:
    *   💬 **Friends**: Questions crafted to spark genuine sharing and deepen friendly bonds.
    *   ❤️ **Couples**: Intimate questions to explore dreams, vulnerabilities, and shared moments in your relationship.
    *   🌿 **Buddies / Acquaintances**: Light yet engaging topics to break the ice and discover each other.
    *   🍻 **Funny / Drinking**: A hilarious variant integrating points and sips (earn points and give sips by answering, or take sips by skipping).
*   **3 Depth Levels**: Each deck is segmented into:
    *   🟢 **Soft**: Light icebreakers (forest green cards).
    *   🔵 **Empathy**: Perspective and intuition questions (midnight/slate blue cards).
    *   ⚫ **Deep**: Thought-provoking prompts on values and life philosophies (obsidian black cards).
*   **Multi-Language Support**: A sleek modal with glassmorphism allowing instant language switching between:
    *   🇫🇷 **Français (FR)**
    *   🇬🇧 **English (EN)**
    *   🇪🇸 **Español (ES)**
    *   🇱🇹 **Lietuvių (LT)**
    *   🇱🇻 **Latviešu (LV)**
    *   🇯🇵 **日本語 (JP)**
*   **PWA & Full Offline Support**: Installable directly on iOS, Android, and desktop. Powered by a Service Worker, the game works completely offline without network access.

---

## 🛠️ Tech Stack

*   **Frontend**: HTML5, CSS3 (vanilla design system with custom CSS variables, blurs, and glow effects), modern ES6 JavaScript (zero external runtime dependencies, Pointer Events API for card gestures).
*   **PWA**: Service Worker for asset caching, Web App Manifest for standalone installation.
*   **Local Server**: `http-server` (port 3000) for local testing and development.

---

## 📂 Project Structure

```
├── assets/                  # App logos, favicons, and PWA icons
├── css/
│   └── style.css            # Stylesheets, design system tokens, animations, and layouts
├── js/
│   ├── translations.js      # Multi-language dictionary (EN, FR, ES, LT, LV, JP)
│   ├── questions.js         # Questions database with localized card texts
│   ├── players.js           # Player management and scoring logic
│   ├── game.js              # Deck building, shuffling, and card text resolution
│   └── app.js               # Main coordinator, event listeners, and navigation
├── index.html               # Main HTML entrypoint, views, and modal dialogs
├── manifest.json            # PWA manifest configuration
├── sw.js                    # Service worker for offline caching
├── package.json             # Dev scripts and dependencies
└── README.md                # Project documentation
```

---

## 🚀 Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Setup and Running

1. Open your terminal in the project directory:
   ```bash
   cd "Therapy game"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at:
   ```
   http://localhost:3000
   ```

### Installing Offline (PWA)
*   **Chrome / Edge (Desktop)**: Click the install icon in the browser address bar.
*   **Safari (iOS)**: Tap the Share button, then select "Add to Home Screen".
*   **Chrome (Android)**: Tap the three dots menu, then select "Install app".
