# Portfolio — Nolan Ribette

Portfolio personnel présentant mon parcours, mes compétences et mes projets réalisés dans le cadre du BTS CIEL IR au lycée Vauban (Brest).

## Aperçu

Le site est construit en **HTML / CSS / JavaScript** purs (aucun framework, aucune dépendance à installer). Chaque page est séparée en trois fichiers distincts (`.html`, `.css`, `.js`) pour garder le code lisible et facile à maintenir.

Thème visuel : dark mode professionnel, accents bleus (`#5b8dee`), typographies **Syne** (titres) et **DM Sans / DM Mono** (texte et code).

## Structure des fichiers

```
portfolio/
├── portfolio-nolan.html      Page principale (accueil du portfolio)
│
├── projet-drone.html         Page détaillée — Projet Drone Cible
├── projet-drone.css
├── projet-drone.js
│
├── stage-brest.html          Page détaillée — Stage Brest Métropole
├── stage-brest.css
└── stage-brest.js
```

## Description des pages

### `portfolio-nolan.html`

Page d'accueil regroupant les sections suivantes, accessibles via un menu de navigation avec ancrage actif au scroll :

| Section | Contenu |
|---|---|
| **Accueil** | Présentation, nom, accroche |
| **À propos** | Présentation personnelle et objectifs |
| **Compétences** | Stack technique avec barres de progression animées |
| **Expérience** | Stages — lien vers `stage-brest.html` |
| **Projets réalisés** | Cartes projets — lien vers `projet-drone.html` |
| **Contact** | Formulaire de contact et liens (email, GitHub, LinkedIn) |

### `projet-drone.html`

Page dédiée au projet **Drone Cible — Marine Nationale** (BTS CIEL IR, 2025/2026), réalisé en équipe de 3 avec le lycée Vauban, la Marine nationale et l'IRENAV.

Contenu : contexte du projet, les 3 modes de pilotage (manuel / GPS autonome / verrouillage caméra), mon rôle individuel (navigation_verrou, boat_detector, radio_watchdog, system_watchdog), architecture ROS2, extraits de code commentés, cahier de tests unitaires (5/5 validés), analyse réseau Wireshark, historique GitHub, matériel utilisé, cybersécurité, bilan personnel et équipe.

### `stage-brest.html`

Page dédiée au **stage de 1ère année** effectué chez **Brest Métropole — Service Voirie** (19 mai → 27 juin 2025, tutrice : Laurence Ferlet).

Contenu : présentation rapide de la structure d'accueil et des outils SIG (ArcGIS Pro, SIGEO), puis focus sur les 3 projets réalisés (site web de recherche d'arrêtés, script Python interactif, base de données SQLite de test), la mission principale de mise à jour cartographique, les compétences acquises, les difficultés rencontrées et le bilan.

## Navigation entre les pages

- Depuis `portfolio-nolan.html`, la section **Projets** renvoie vers `projet-drone.html` et la section **Expérience** renvoie vers `stage-brest.html`.
- Chaque sous-page dispose d'un bouton **« Retour »** dans la barre de navigation et dans le pied de page, pointant vers la section correspondante de `portfolio-nolan.html`.
- Toutes les pages partagent les mêmes variables CSS (couleurs, polices) pour une cohérence visuelle.

## Personnalisation

Pour mettre à jour le contenu :

- **Coordonnées de contact** : modifier les liens `mailto:`, GitHub et LinkedIn dans la section Contact de `portfolio-nolan.html`.
- **Expérience** : la section *Expérience* est actuellement un placeholder — y ajouter de nouvelles entrées au format de la timeline existante au fur et à mesure des stages.
- **Nouveaux projets** : dupliquer la structure d'une carte projet dans `portfolio-nolan.html` (section *Projets réalisés*) et créer une nouvelle page de détail sur le modèle de `projet-drone.html` / `stage-brest.html` (HTML + CSS + JS séparés).
- **Couleurs / polices** : toutes les variables sont définies en haut de chaque fichier CSS dans le bloc `:root` (`--bg`, `--neon`, `--text`, etc.). Modifier ces variables suffit à changer le thème de l'ensemble d'une page.

## Hébergement

Le site étant en HTML/CSS/JS statique, il peut être déployé directement sur n'importe quel hébergeur statique (GitHub Pages, Netlify, Vercel...) ou simplement ouvert localement dans un navigateur — aucune compilation ni serveur requis.
