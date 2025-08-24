const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Importer le modèle User
const jwt = require('jsonwebtoken'); // Pour les tokens JWT

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

module.exports = router;
