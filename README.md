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

-   `POST /api/users/register` : Créer un nouvel utilisateur.
-   `POST /api/users/login` : Connecter un utilisateur et recevoir un token JWT.

### Articles (Protégé par authentification)

-   `GET /api/articles` : Obtenir tous les articles.
-   `POST /api/articles` : Créer un nouvel article.
-   `PUT /api/articles/:id` : Mettre à jour un article.
-   `DELETE /api/articles/:id` : Supprimer un article.

### Commentaires

-   `POST /api/comments` : Créer un nouveau commentaire.
-   `GET /api/comments/article/:articleId` : Obtenir les commentaires d'un article.
-   `PUT /api/comments/:id` : Mettre à jour un commentaire (nécessite authentification et être l'auteur).
-   `DELETE /api/comments/:id` : Supprimer un commentaire (nécessite authentification et être l'auteur).

## Fonctionnalités Implémentées

*   **Authentification Utilisateur** : Inscription et connexion via JWT.
*   **Gestion des Articles** : Création, lecture, mise à jour et suppression d'articles (CRUD).
*   **Gestion des Commentaires** : Création, lecture, mise à jour et suppression de commentaires.

## Prochaines Étapes / Fonctionnalités à Venir (Basé sur le Cahier des Charges)

*   **Gestion du Profil Utilisateur** : Mise à jour du pseudo, de la bio, et de la photo de profil.
*   **Fonctionnalités des Articles** :
    *   Gestion des brouillons.
    *   Filtrage des articles par popularité / date.
    *   Système de "Like" pour les articles.
    *   Compteur de vues pour les articles.
*   **Profil Public** : Endpoint pour afficher le profil public d'un utilisateur avec sa biographie et la liste de ses articles publiés.
*   **Déconnexion Sécurisée**.

## Comment Tester avec Postman

Pour interagir avec l'API, suivez ces étapes :

1.  **Assurez-vous que le serveur backend est en cours d'exécution** (`npm run dev`).

2.  **Obtenir un Token JWT (Connexion)** :
    *   **Méthode** : `POST`
    *   **URL** : `http://localhost:3000/api/users/login`
    *   **Body (raw, JSON)** :
        ```json
        {
            "email": "votre_email@example.com",
            "password": "votre_mot_de_passe"
        }
        ```
    *   La réponse contiendra votre token JWT. Copiez-le.

3.  **Utiliser le Token pour les Requêtes Protégées** :
    Pour toutes les requêtes nécessitant une authentification, ajoutez un en-tête `Authorization` :
    *   **Header** : `Authorization`
    *   **Value** : `Bearer VOTRE_TOKEN_JWT_COPIE_ICI` (remplacez par le token obtenu à l'étape 2).

4.  **Exemples de Requêtes :**

    *   **Créer un Commentaire (POST)** :
        *   **URL** : `http://localhost:3000/api/comments`
        *   **Headers** : `Authorization: Bearer VOTRE_TOKEN_JWT`
        *   **Body (raw, JSON)** :
            ```json
            {
                "content": "Ceci est un nouveau commentaire.",
                "article": "ID_DE_L_ARTICLE"
            }
            ```
        *   La réponse vous donnera l'ID du commentaire créé.

    *   **Mettre à jour un Commentaire (PUT)** :
        *   **URL** : `http://localhost:3000/api/comments/ID_DU_COMMENTAIRE` (remplacez par l'ID réel)
        *   **Headers** : `Authorization: Bearer VOTRE_TOKEN_JWT`
        *   **Body (raw, JSON)** :
            ```json
            {
                "content": "Contenu du commentaire mis à jour."
            }
            ```

    *   **Supprimer un Commentaire (DELETE)** :
        *   **URL** : `http://localhost:3000/api/comments/ID_DU_COMMENTAIRE` (remplacez par l'ID réel)
        *   **Headers** : `Authorization: Bearer VOTRE_TOKEN_JWT`