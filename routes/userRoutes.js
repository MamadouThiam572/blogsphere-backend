const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importer le modèle User
const jwt = require('jsonwebtoken'); // Pour les tokens JWT
const auth = require('../middleware/auth'); // Importer le middleware d'authentification

// Route d'enregistrement d'un nouvel utilisateur
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send({ message: 'Utilisateur enregistré avec succès.' });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// Route de connexion d'un utilisateur
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).send({ error: 'Identifiants invalides.' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).send({ error: 'Identifiants invalides.' });
        }

        // Générer un token JWT
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.send({ user: { id: user._id, username: user.username, email: user.email }, token });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Route de déconnexion d'un utilisateur
// Note: Avec les JWTs, la "déconnexion" côté serveur signifie principalement invalider le token côté client.
// Il n'y a pas de session à détruire sur le serveur.
router.post('/logout', auth, (req, res) => {
    try {
        // Le middleware 'auth' a déjà vérifié le token.
        // Pour une déconnexion JWT, le client doit simplement supprimer son token.
        // Nous envoyons une réponse de succès pour confirmer l'opération.
        res.status(200).send({ message: 'Déconnexion réussie. Veuillez supprimer votre token côté client.' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;

// Route de mise à jour du profil utilisateur
router.put('/profile', auth, async (req, res) => {
    try {
        const userId = req.user.userId; // ID de l'utilisateur depuis le token JWT
        const { pseudo, bio } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send({ error: 'Utilisateur non trouvé.' });
        }

        if (pseudo !== undefined) {
            user.pseudo = pseudo;
        }
        if (bio !== undefined) {
            user.bio = bio;
        }

        await user.save();
        res.send({ message: 'Profil mis à jour avec succès.', user: { id: user._id, username: user.username, email: user.email, pseudo: user.pseudo, bio: user.bio } });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});
