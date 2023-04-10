# Exercice API Pokemon

Bienvenue dans le Challenge API Pokemon !

## Objectif

L'objectif de cet exercice est de créer une mini API en JavaScript avec Node.js pour manipuler une liste de cartes Pokémon stockées dans un fichier JSON appelé "pokemonList.json". Cette API permettra d'ajouter, de modifier, de supprimer et de rechercher des cartes Pokémon. Une interface utilisateur sera également développée pour communiquer directement avec cette API.

## Niveaux

## $\colorbox{yellow}{{\color{black}{Jaune => Bonus facultatif}}}$

## User Stories possibles

- En tant qu'utilisateur, je veux pouvoir afficher la liste de toutes les cartes Pokémon disponibles dans pokemonList.json sur la page d'accueil (index.html).
- En tant qu'utilisateur, je veux pouvoir éditer une carte Pokémon en cliquant sur le bouton "éditer" à côté de chaque carte. Le formulaire d'édition doit s'afficher avec les informations de la carte sélectionnée pré-remplies.
- En tant qu'utilisateur, je veux pouvoir supprimer une carte Pokémon en cliquant sur le bouton "supprimer" à côté de chaque carte.
- En tant qu'utilisateur, je veux pouvoir rechercher une carte Pokémon par nom en utilisant le formulaire de recherche de la page d'accueil. La vue de la carte Pokémon correspondante doit s'afficher.
- En tant qu'utilisateur, je veux pouvoir ajouter une nouvelle carte Pokémon en utilisant le formulaire d'ajout disponible sur la page d'accueil. Après l'ajout, la liste de toutes les cartes doit être mise à jour avec la nouvelle carte ajoutée.
- En tant qu'utilisateur, je veux recevoir des messages d'erreur clairs en cas d'erreurs de saisie ou de problèmes de connexion à l'API.
- $\colorbox{yellow}{{\color{black}{En tant que développeur, je veux que l'API soit sécurisée en utilisant des méthodes d'authentification pour les requêtes de modification et de suppression.}}}$

$\colorbox{yellow}{{\color{black}{En tant que développeur, je veux que l'API soit bien documentée avec des instructions d'utilisation et des exemples de code pour faciliter la maintenance et le développement futur.}}}$

## Pistes

Pour manipuler les fichiers JSON en JavaScript, vous pouvez utiliser les fonctions `readFile` et `writeFile` du module `fs` de Node.js.

Pour créer une API RESTful, vous pouvez utiliser le module `Express.js` de Node.js. Il facilite la création de routes et la manipulation des requêtes et des réponses HTTP.

Pour créer une interface utilisateur, vous pouvez utiliser des bibliothèques de frontend telles que React, Vue.js ou Angular. Cependant, si vous débutez, vous pouvez commencer par créer simplement une page HTML/CSS/JS simple sans utiliser de bibliothèques ou de frameworks.

Pour stocker les données de manière sécurisée, vous pouvez utiliser une base de données, mais pour cet exercice, vous pouvez simplement stocker les données dans un fichier JSON.

Pour gérer les formulaires HTML et les requêtes HTTP POST, vous pouvez utiliser le module `body-parser` d'Express.js.

Pour gérer les erreurs et les messages d'erreur, vous pouvez utiliser les fonctions try-catch pour capturer les erreurs et les renvoyer en tant que réponse JSON.
