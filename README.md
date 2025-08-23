# Backend du Projet BlogSphere

Ce dépôt contient le code source du backend pour l'application BlogSphere, une plateforme de blogging simple et robuste. Le backend est construit comme une API RESTful pour être consommée par un client front-end.

## Stack Technique

- **Node.js**: Environnement d'exécution JavaScript.
- **Express.js**: Framework web pour la création de l'API.
- **MongoDB**: Base de données NoSQL pour le stockage des données.
- **Mongoose**: ODM pour modéliser les objets de la base de données.
- **JWT (JSON Web Tokens)**: Pour la gestion de l'authentification et des sessions.

## Installation et Lancement

Suivez ces étapes pour lancer le projet en local.

### Prérequis

- Node.js (v14 ou supérieur)
- MongoDB (installé localement ou via un service cloud comme MongoDB Atlas)

### Étapes

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/MamadouThiam572/blogsphere-backend.git
    cd blogsphere-backend
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    ```

3.  **Configurez les variables d'environnement :**
    Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes. Ce fichier est ignoré par Git et ne doit pas être partagé.
    ```
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/blogsphere
    JWT_SECRET=VOTRE_CLE_SECRETE_PERSONNALISEE_TRES_LONGUE
    ```

4.  **Lancez le serveur de développement :**
    Le serveur se lancera et redémarrera automatiquement à chaque modification grâce à `nodemon`.
    ```bash
    npm run dev
    ```
    L'API sera accessible à l'adresse `http://localhost:3000`.

## Endpoints de l'API

### Utilisateurs

- `POST /api/users/register` : Créer un nouvel utilisateur.
- `POST /api/users/login` : Connecter un utilisateur et recevoir un token JWT.

### Articles (Protégé par authentification)

- `GET /api/articles` : Obtenir tous les articles.
- `POST /api/articles` : Créer un nouvel article.
- `PUT /api/articles/:id` : Mettre à jour un article.
- `DELETE /api/articles/:id` : Supprimer un article.

### Commentaires (En cours)

- Les endpoints pour la gestion des commentaires sont en cours de développement.
