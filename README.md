# Jeu de Cartes Thérapie (Therapy Game) 🃏✨

**Therapy Game** est une Progressive Web App (PWA) de jeu de cartes premium et minimaliste, conçue pour favoriser les connexions profondes, l'empathie et les conversations sincères. Inspiré de jeux de discussion comme *Therapy by Dan*, il propose une esthétique moderne et soignée, des micro-interactions fluides, des gestes tactiles/souris responsifs et un support multilingue complet.

---

## 🌟 Fonctionnalités Clés

*   **Design Premium & Immersif** : Un thème sombre élégant avec des lumières d'ambiance tamisées (glows) qui s'adaptent dynamiquement à la catégorie choisie :
    *   🔵 **Bleu** pour la catégorie **Amis**
    *   🔴 **Rouge** pour la catégorie **Couple**
    *   🟢 **Vert** pour la catégorie **Potes**
    *   🟡 **Or** pour la version **Drôle**
*   **Interactions Dynamiques des Cartes** : Supporte les glissements (swipes) tactiles ou à la souris avec des retours visuels colorés selon l'intention (vert à droite pour répondre/valider, rouge à gauche pour passer/ignorer).
*   **Gameplay Adaptatif** :
    *   **Contenu personnalisé** : Les questions injectent dynamiquement le prénom du joueur actif (`{active}`) ou de partenaires au hasard (`{p1}`, `{p2}`).
    *   **Filtre de groupe** : Les cartes qui nécessitent plus de joueurs que le nombre de participants inscrits sont automatiquement écartées du paquet.
*   **4 Catégories de Discussion** :
    *   💬 **Amis** : Des questions pensées pour révéler des pensées sincères et renforcer les liens amicaux.
    *   ❤️ **Couple** : Des questions intimes pour explorer les rêves, préoccupations et complicités de votre relation.
    *   🌿 **Potes / Connaissances** : Des sujets légers mais engageants pour briser la glace.
    *   🍻 **Version Drôle** : Une variante amusante intégrant des points et des gorgées (gagner des points et distribuer des gorgées en répondant, ou boire en passant).
*   **3 Niveaux de Profondeur** : Chaque paquet est divisé en :
    *   🟢 **Soft** : Des brise-glaces légers (cartes sur fond vert forêt).
    *   🔵 **Empathie** : Des questions basées sur l'intuition et la perception des autres (cartes sur fond bleu nuit / ardoise).
    *   ⚫ **Deep** : Des questions profondes sur les valeurs et les philosophies de vie (cartes sur fond noir obsidienne).
*   **Sélecteur de Langue Premium** : Une interface moderne en plein écran avec un fond flouté (glassmorphism) permettant de changer instantanément la langue parmi : **Français (FR)**, **Anglais (EN)**, **Espagnol (ES)**, **Lituanien (LT)** et **Japonais (JP)**.
*   **PWA & Fonctionnement Hors-ligne (Offline)** : Installable directement sur iOS, Android et PC. Grâce à un Service Worker, le jeu est utilisable dans des zones sans réseau (transports, nature, etc.).

---

## 🛠️ Stack Technique

*   **Frontend** : HTML5, CSS3 (système de design vanilla avec variables personnalisées, animations de flou et effets de lumière), Javascript ES6 moderne (sans framework, API Pointer Events pour la gestion fluide du swipe).
*   **PWA** : Service Worker pour le cache local, Manifeste d'application Web pour l'installation autonome.
*   **Serveur local** : `http-server` (port 3000) pour le développement et le test en local.

---

## 📂 Structure du Projet

```
├── assets/                  # Logos de l'application, favicons et icônes PWA
├── css/
│   └── style.css            # Styles généraux, design system, animations et effets de flou
├── js/
│   ├── translations.js      # Dictionnaire multilingue (FR, EN, ES, LT, JP)
│   ├── questions.js         # Base de données de cartes (questions traduites)
│   ├── players.js           # Gestion des joueurs et calcul du score
│   ├── game.js              # Logique du paquet, mélange et résolution de cartes
│   └── app.js               # Gestionnaire d'événements, navigation et sélecteurs
├── index.html               # Structure HTML de l'application, salons et arènes
├── manifest.json            # Configuration PWA pour l'installation sur smartphone/PC
├── sw.js                    # Service worker pour la mise en cache hors-ligne
├── package.json             # Scripts de démarrage et dépendances de développement
└── README.md                # Documentation du projet (ce fichier)
```

---

## 🚀 Démarrage Rapide

### Prérequis
Avoir installé [Node.js](https://nodejs.org/).

### Installation et Lancement

1. Ouvrez votre terminal dans le dossier du projet :
   ```bash
   cd C:\Users\Nico\Documents\antigravity\valiant-hopper
   ```

2. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```

3. Ouvrez votre navigateur sur l'adresse suivante :
   ```
   http://localhost:3000
   ```

### Installation Hors-ligne (PWA)
*   **Chrome / Edge** : Cliquez sur l'icône d'installation dans la barre d'adresse.
*   **Safari (iOS)** : Appuyez sur le bouton Partager puis sélectionnez "Sur l'écran d'accueil".
*   **Chrome (Android)** : Appuyez sur les trois points verticaux puis sélectionnez "Installer l'application".
