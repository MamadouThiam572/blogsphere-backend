const express = require('express');
const app = express();
const port = 3000; // On choisit le port 3000 par convention

// Middleware pour permettre à Express de lire le JSON envoyé dans les requêtes
app.use(express.json());

// Notre première route API ! C'est ici que la logique de votre feuille de route commencera.
// Pour l'instant, elle renvoie juste une liste d'articles en dur.
app.get('/api/articles', (req, res) => {
    const fake_articles = [
        { id: 1, title: 'Bienvenue sur Node.js!', content: 'Contenu du premier article...' },
        { id: 2, title: 'Le guide Express', content: 'Tout sur le framework Express...' },
    ];
    res.json(fake_articles); // On utilise res.json() pour envoyer une réponse au format JSON
});

// On démarre le serveur et on affiche un message dans la console
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
  console.log('Vous pouvez tester votre API en allant sur http://localhost:3000/api/articles');
});
