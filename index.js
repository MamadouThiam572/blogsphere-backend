const express = require('express');
const mongoose = require('mongoose'); // Import de mongoose
const dotenv = require('dotenv'); // Pour charger les variables d'environnement

dotenv.config(); // Charge les variables du fichier .env
console.log('MONGO_URI chargée :', process.env.MONGO_URI); // Ligne de débogage

const app = express();
const port = process.env.PORT || 3000; // Utilise le port du .env ou 3000 par défaut
const connectDB = require("./config/db");
connectDB();


// Importer les fichiers de routes
const userRoutes = require('./routes/userRoutes');
const articleRoutes = require('./routes/articleRoutes');
const commentRoutes = require('./routes/commentRoutes');

// Middleware pour permettre à Express de lire le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connecté à MongoDB !'))
  .catch(err => console.error('Erreur de connexion à MongoDB :', err));

// Utiliser les routes
// Chaque fois qu'une requête commence par /api/users, Express utilisera le routeur userRoutes
app.use('/api/users', userRoutes);
app.use('/api/articles', articleRoutes);
app.use('/api/comments', commentRoutes);


// Route de base pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Le serveur BlogSphere fonctionne !');
});
// Route de test
app.get("/ping", (req, res) => {
  res.json({ message: "MongoDB fonctionne ✅" });
});
const User = require("./models/user"); // <-- assure-toi que le chemin est correct

// Route pour créer un utilisateur test
app.get("/create-user", async (req, res) => {
  try {
    const newUser = new User({
      username: "testuser",
      email: "test@example.com",
      password: "password123",
      pseudo: "testpseudo",
      bio: "Je suis un utilisateur test"
    });

    await newUser.save();
    res.json({ message: "Utilisateur créé avec succès ✅", user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// On démarre le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
