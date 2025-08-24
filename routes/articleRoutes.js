const express = require('express');
const router = express.Router();
const Article = require('../models/Article'); // Importer le modèle Article
const auth = require('../middleware/auth'); // Importer le middleware d'authentification

// GET /api/articles - Obtenir tous les articles
router.get('/', async (req, res) => {
    try {
        const articles = await Article.find().populate('author', 'username'); // Populate l'auteur
        res.send(articles);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// GET /api/articles/:id - Obtenir un article par son ID
router.get('/:id', async (req, res) => {
    try {
        const article = await Article.findById(req.params.id).populate('author', 'username');
        if (!article) {
            return res.status(404).send({ error: 'Article non trouvé.' });
        }
        
        // Incrémenter le compteur de vues
        article.views = (article.views || 0) + 1;
        await article.save();

        res.send(article);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// POST /api/articles - Créer un nouvel article (protégé par authentification)
router.post('/', auth, async (req, res) => {
    try {
        const { title, content } = req.body;
        const author = req.user.userId; // L'ID de l'auteur vient du token JWT

        const article = new Article({
            title,
            content,
            author
        });

        await article.save();
        res.status(201).send(article);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// PUT /api/articles/:id - Mettre à jour un article (protégé par authentification)
router.put('/:id', auth, async (req, res) => {
    try {
        const { title, content } = req.body;
        const article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(404).send({ error: 'Article non trouvé.' });
        }

        // Vérifier que l'utilisateur est bien l'auteur de l'article
        if (article.author.toString() !== req.user.userId) {
            return res.status(403).send({ error: 'Non autorisé à modifier cet article.' });
        }

        article.title = title;
        article.content = content;
        await article.save();
        res.send(article);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

// DELETE /api/articles/:id - Supprimer un article (protégé par authentification)
router.delete('/:id', auth, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);

        if (!article) {
            return res.status(404).send({ error: 'Article non trouvé.' });
        }

        // Vérifier que l'utilisateur est bien l'auteur de l'article
        if (article.author.toString() !== req.user.userId) {
            return res.status(403).send({ error: 'Non autorisé à supprimer cet article.' });
        }

        await article.deleteOne();
        res.send({ message: 'Article supprimé avec succès.' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;
