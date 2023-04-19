// Description: Ce fichier contient le code du serveur Node.js

// Import des modules

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// class Object carte pokemon
// class CartePokemon {
//   static id = 0;

//   constructor(nom, type, imageSrc) {
//     this.id = ++CartePokemon.id;
//     this.nom = nom;
//     this.type = type;
//     this.imageSrc = imageSrc;
//   }
// }
class CartePokemon {
  static cartesPokemon = new Map();

  constructor(nom, type, imageSrc) {
    this.id = CartePokemon.getNextId();
    this.nom = nom;
    this.type = type;
    this.imageSrc = imageSrc;
    
    if (CartePokemon.cartesPokemon.has(this.id)) {
      throw new Error('Une carte avec cet ID existe déjà.');
    }
    
    CartePokemon.cartesPokemon.set(this.id, this);
  }

  static getNextId() {
    return CartePokemon.cartesPokemon.size + 1;
  }
}

// Récupérer la page index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Récupérer toutes les cartes Pokemon dans le fichier pokemonList.json methode GET
app.get('/cartes', (req, res) => {
  fs.readFile('pokemonList.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
      return;
    }
    const cartes = JSON.parse(data).cartesPokemon;
    res.send(cartes);
  });
});

// Récupérer une carte Pokemon spécifique en utilisant son nom dans le fichier pokemonList.json methode GET
app.get('/cartes/:nom', (req, res) => {
  const nom = req.params.nom;
  fs.readFile('pokemonList.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
      return;
    }
    const cartes = JSON.parse(data).cartesPokemon;
    const carte = cartes.find((c) => c.nom === nom);
    if (!carte) {
      req.status(404).send('Carte non trouvée')
      return;
    }
    res.send(carte);
  });
  
});

// Ajouter une carte Pokemon dans le fichier pokemonList.json methode POST
app.post('/cartes', (req, res) => {
  const {nom, type, imageSrc} = req.body;
  fs.readFile('pokemonList.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
      return;
    }
    const cartes = JSON.parse(data).cartesPokemon;
    
    const carteExiste = cartes.find(carte => carte.nom.toLowerCase() === nom.toLowerCase());
    if (carteExiste) {
      res.status(400).send('une carte avec ce nom existe déjà !')
      return;
    }
    const newCarte = new CartePokemon(nom, type, imageSrc);
    const carteExisteId = cartes.find(carte => carte.id === newCarte.id);
    if (carteExisteId) {
      res.status(400).send('Une carte avec cet id existe déjà !')
      return;
    }
    cartes.push(newCarte);
    fs.writeFile('pokemonList.json', JSON.stringify({cartesPokemon: cartes}), (err) => {if (err) {
      console.error(err);
      res.status(500).send('Erreur serveur');
      return;
    }});
    res.send(newCarte);
  });
  // Code à écrire
  
});

// Modifier une carte Pokemon à partir de son id dans le fichier pokemonList.json methode PUT
app.put('/cartes/:id', (req, res) => {
  
  // Code à écrire
});

// Supprimer une carte Pokemon à partir de son nom dans le fichier pokemonList.json methode DELETE
app.delete('/cartes/:nom', (req, res) => {

  // Code à écrire

});

app.listen(
3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
